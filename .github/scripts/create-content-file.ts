import * as core from '@actions/core';
import * as github from '@actions/github';

interface FrontmatterFileContent {
  title: string;
  category: string;
  sourceUrl: string;
  lastVerified: string;
  submissionIssue: string;
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

function buildFileContent(data: FrontmatterFileContent): string {
  return `---\ntitle: ${data.title}\ncategory: ${data.category}\nsourceUrl: ${data.sourceUrl}\nlastVerified: ${data.lastVerified}\nsubmissionIssue: ${data.submissionIssue}\n---\n\n${data.content}\n`;
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
