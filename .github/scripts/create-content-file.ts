import * as core from '@actions/core';
import * as github from '@actions/github';

interface FrontmatterFileContent {
  title: string;
  category: string;
  sourceUrl: string;
  lastVerified: string;
  submissionIssue: string;
  ahpraStatus: string;
  content: string;
}

function parseRepository(repository: string): { owner: string; repo: string } {
  const [owner, repo] = repository.split('/');
  if (!owner || !repo) {
    throw new Error('GITHUB_REPOSITORY must be in the form owner/repo');
  }
  return { owner, repo };
}

function getFirstHeading(content: string): string {
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }

    const match = trimmed.match(/^#{1,6}\s+(.+)$/);
    if (match) {
      const heading = match[1];
      if (heading) {
        return heading.trim();
      }
    }
  }

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed) {
      return trimmed.replace(/^#{1,6}\s*/, '').trim();
    }
  }

  return 'Untitled submission';
}

// --- OKF v0.1 frontmatter (see .specify/memory/constitution.md -> "Knowledge Format (OKF)") ---

function yamlStr(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function tagSlug(category: string): string {
  return category.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Derive a one-sentence description from the first prose line of the body. Returns '' if none. */
function deriveDescription(content: string): string {
  for (const raw of content.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('#') || line.startsWith('>') || line.startsWith('|')) continue;
    if (line.startsWith('- ') || line.startsWith('* ') || /^\d+\./.test(line)) continue;
    if (/^\*\*[\w &/-]+:\*\*/.test(line)) continue;
    const prose = line.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*`]/g, '').trim();
    if (prose.length < 25 || !prose.includes(' ')) continue;
    const match = prose.match(/(.+?[.!?])(\s|$)/);
    let sentence: string = match && match[1] ? match[1] : prose;
    if (sentence.length > 170) {
      sentence = `${sentence.slice(0, 160).replace(/\s+\S*$/, '')}…`;
    }
    return sentence;
  }
  return '';
}

/** Remove any frontmatter block the submitter pasted, so we always emit our own canonical OKF block. */
function stripLeadingFrontmatter(content: string): string {
  return content.replace(/^﻿?\s*---\r?\n[\s\S]*?\r?\n---\r?\n+/, '');
}

function buildFileContent(data: FrontmatterFileContent): string {
  // OKF v0.1 requires a non-empty `type`; everything else is recommended/extension.
  // Auto-convert: strip any frontmatter the submitter included, then prepend our canonical block.
  const body = stripLeadingFrontmatter(data.content);
  const conceptType = data.category.trim() || 'Reference';
  const description = deriveDescription(body);
  const tag = tagSlug(data.category) || 'reference';
  const lines: string[] = [];
  lines.push(`type: ${yamlStr(conceptType)}`);
  lines.push(`title: ${yamlStr(data.title)}`);
  if (description) {
    lines.push(`description: ${yamlStr(description)}`);
  }
  if (data.sourceUrl) {
    lines.push(`resource: ${yamlStr(data.sourceUrl)}`);
  }
  lines.push(`tags: [${tag}]`);
  lines.push(`timestamp: ${data.lastVerified}T00:00:00Z`);
  // Producer extension keys (preserved by OKF consumers):
  lines.push(`category: ${yamlStr(data.category)}`);
  lines.push(`ahpra_status: ${yamlStr(data.ahpraStatus)}`);
  lines.push(`submission_issue: ${yamlStr(data.submissionIssue)}`);
  lines.push(`last_verified: ${yamlStr(data.lastVerified)}`);
  return `---\n${lines.join('\n')}\n---\n\n${body}\n`;
}

function getArchivePath(contentPath: string, dateStamp: string): string {
  const lastDot = contentPath.lastIndexOf('.');
  if (lastDot === -1) {
    return `${contentPath}-archived-${dateStamp}.md`;
  }
  return `${contentPath.slice(0, lastDot)}-archived-${dateStamp}${contentPath.slice(lastDot)}`;
}

function decodeContent(content: string | undefined): string {
  if (!content) {
    return '';
  }
  return Buffer.from(content, 'base64').toString('utf8');
}

async function branchExists(octokit: ReturnType<typeof github.getOctokit>, owner: string, repo: string, branch: string): Promise<boolean> {
  try {
    await octokit.rest.git.getRef({ owner, repo, ref: `heads/${branch}` });
    return true;
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'status' in error && (error as { status?: number }).status === 404) {
      return false;
    }
    throw error;
  }
}

async function hasOpenPullRequest(
  octokit: ReturnType<typeof github.getOctokit>,
  owner: string,
  repo: string,
  branch: string,
): Promise<boolean> {
  const response = await octokit.rest.pulls.list({
    owner,
    repo,
    head: `${owner}:${branch}`,
    state: 'open',
    per_page: 1,
  });
  return response.data.length > 0;
}

async function fileExists(
  octokit: ReturnType<typeof github.getOctokit>,
  owner: string,
  repo: string,
  path: string,
  ref?: string,
): Promise<{ sha: string; content: string } | null> {
  try {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
      ...(ref ? { ref } : {}),
    });
    if (!('content' in response.data)) {
      return null;
    }
    return {
      sha: response.data.sha,
      content: decodeContent(response.data.content),
    };
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'status' in error && (error as { status?: number }).status === 404) {
      return null;
    }
    throw error;
  }
}

async function run(): Promise<void> {
  const token = process.env['GITHUB_TOKEN'];
  const issueNumberRaw = process.env['ISSUE_NUMBER'];
  const content = process.env['CONTENT'];
  const category = process.env['CATEGORY'];
  const contentPath = process.env['CONTENT_PATH'];
  const sourceUrl = process.env['SOURCE_URL'];
  const repository = process.env['GITHUB_REPOSITORY'];

  if (!token || !issueNumberRaw || !content || !category || !contentPath || !sourceUrl || !repository) {
    throw new Error('Missing required environment variables');
  }

  const issueNumber = Number(issueNumberRaw);
  if (!Number.isInteger(issueNumber) || issueNumber <= 0) {
    throw new Error('ISSUE_NUMBER must be a positive integer');
  }

  const { owner, repo } = parseRepository(repository);
  const octokit = github.getOctokit(token);
  const branch = `submission/issue-${issueNumber}`;
  const dateStamp = new Date().toISOString().slice(0, 10);

  if (await branchExists(octokit, owner, repo, branch)) {
    if (await hasOpenPullRequest(octokit, owner, repo, branch)) {
      core.info('PR already exists, skipping');
      return;
    }
    core.info(`Branch ${branch} already exists; reusing it`);
  } else {
    const baseRef = await octokit.rest.git.getRef({ owner, repo, ref: `heads/${process.env['GITHUB_BASE_REF'] ?? 'main'}` }).catch(async () => {
      const repoInfo = await octokit.rest.repos.get({ owner, repo });
      return octokit.rest.git.getRef({ owner, repo, ref: `heads/${repoInfo.data.default_branch}` });
    });
    await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branch}`,
      sha: baseRef.data.object.sha,
    });
  }

  const existingFile = await fileExists(octokit, owner, repo, contentPath, branch);
  if (existingFile) {
    const archivePath = getArchivePath(contentPath, dateStamp);
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: archivePath,
      message: `archive: ${contentPath} (#${issueNumber})`,
      content: Buffer.from(existingFile.content, 'utf8').toString('base64'),
      branch,
    });
  }

  const title = getFirstHeading(content);
  const fileContent = buildFileContent({
    title,
    category,
    sourceUrl,
    lastVerified: dateStamp,
    submissionIssue: String(issueNumber),
    ahpraStatus: 'unverified',
    content,
  });

  const encoded = Buffer.from(fileContent, 'utf8').toString('base64');
  const existingTarget = await fileExists(octokit, owner, repo, contentPath, branch);
  await octokit.rest.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: contentPath,
    message: `feat(submission): ${title}`,
    content: encoded,
    branch,
    ...(existingTarget ? { sha: existingTarget.sha } : {}),
  });

  const pr = await octokit.rest.pulls.create({
    owner,
    repo,
    title: `feat(submission): ${title}`,
    body: `Closes #${issueNumber}\n\nVerified by AI against: ${sourceUrl}`,
    base: 'main',
    head: branch,
  });

  core.info(`PR created: ${pr.data.html_url}`);
}

run().catch((error: unknown) => core.setFailed(String(error)));
