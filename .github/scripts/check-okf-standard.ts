import * as core from '@actions/core';
import * as github from '@actions/github';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Watches the upstream Open Knowledge Format (OKF) standard for changes and opens a
// tracking issue when it moves past our recorded baseline (.github/okf-standard.lock).

const UPSTREAM_REPO = 'GoogleCloudPlatform/knowledge-catalog';
const UPSTREAM_PATH = 'okf';
const LOCK_RELATIVE = '.github/okf-standard.lock';
const SPEC_URL = `https://github.com/${UPSTREAM_REPO}/blob/main/okf/SPEC.md`;
const ISSUE_TITLE_PREFIX = 'OKF standard upstream update';

interface UpstreamCommit {
  sha: string;
  htmlUrl: string;
  date: string;
  summary: string;
}

interface ApiCommit {
  sha: string;
  html_url: string;
  commit: { committer: { date: string }; message: string };
}

async function getUpstreamHead(token: string): Promise<UpstreamCommit> {
  const url = `https://api.github.com/repos/${UPSTREAM_REPO}/commits?path=${UPSTREAM_PATH}&per_page=1`;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'australia-md-okf-watch',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Upstream API returned HTTP ${res.status}`);
  }
  const data = (await res.json()) as ApiCommit[];
  const head = data[0];
  if (!head) {
    throw new Error('Upstream API returned no commits for the okf/ path');
  }
  const firstLine = head.commit.message.split('\n')[0] ?? '';
  return { sha: head.sha, htmlUrl: head.html_url, date: head.commit.committer.date, summary: firstLine };
}

function readBaselineSha(): string {
  const root = process.env['GITHUB_WORKSPACE'] ?? process.cwd();
  try {
    const raw = readFileSync(join(root, LOCK_RELATIVE), 'utf8');
    const match = raw.match(/sha:\s*([0-9a-f]{7,40})/i);
    return match && match[1] ? match[1].toLowerCase() : '';
  } catch {
    return '';
  }
}

async function run(): Promise<void> {
  const token = process.env['GITHUB_TOKEN'] ?? '';
  const repository = process.env['GITHUB_REPOSITORY'] ?? '';

  const upstream = await getUpstreamHead(token);
  const baseline = readBaselineSha();
  const changed = baseline !== '' && baseline !== upstream.sha.toLowerCase();

  core.setOutput('changed', String(changed));
  core.setOutput('upstream_sha', upstream.sha);
  core.info(`Upstream okf/ HEAD : ${upstream.sha} (${upstream.date})`);
  core.info(`Recorded baseline  : ${baseline || '(none)'}`);

  if (baseline === '') {
    core.warning(`No baseline recorded in ${LOCK_RELATIVE}. Set "sha: ${upstream.sha}" to start tracking.`);
    return;
  }
  if (!changed) {
    core.info('OKF standard is up to date — no action needed.');
    return;
  }

  core.warning(`OKF standard changed upstream: ${baseline} -> ${upstream.sha}`);

  if (!token || !repository) {
    core.warning('Change detected, but GITHUB_TOKEN/GITHUB_REPOSITORY are missing; cannot open a tracking issue.');
    return;
  }
  const [owner, repo] = repository.split('/');
  if (!owner || !repo) {
    throw new Error('GITHUB_REPOSITORY must be in the form owner/repo');
  }

  const octokit = github.getOctokit(token);
  const open = await octokit.rest.issues.listForRepo({ owner, repo, state: 'open', per_page: 100 });
  const duplicate = open.data.find((issue) => issue.title.startsWith(ISSUE_TITLE_PREFIX));
  if (duplicate) {
    core.info(`An open tracking issue already exists (#${duplicate.number}); not opening another.`);
    return;
  }

  const body = [
    'The upstream **Open Knowledge Format (OKF)** standard has changed since our recorded baseline.',
    '',
    `- Upstream: \`${UPSTREAM_REPO}\` (path \`${UPSTREAM_PATH}/\`)`,
    `- New commit: ${upstream.htmlUrl}`,
    `- Summary: ${upstream.summary}`,
    `- Upstream date: ${upstream.date}`,
    `- Our baseline: \`${baseline}\``,
    '',
    '**Action required:**',
    `1. Review the [OKF SPEC](${SPEC_URL}) and the linked commit for breaking or additive changes.`,
    '2. Re-check our bundle conformance under `docs/**` and update `specs/004-okf-adoption/migration-plan.md` if needed.',
    `3. Bump \`${LOCK_RELATIVE}\` to \`${upstream.sha}\` in the reconciliation PR to close this issue.`,
    '',
    '_Opened automatically by the `OKF Standard Watch` workflow._',
  ].join('\n');

  const created = await octokit.rest.issues.create({
    owner,
    repo,
    title: `${ISSUE_TITLE_PREFIX} — ${upstream.sha.slice(0, 7)}`,
    body,
  });
  core.info(`Opened tracking issue #${created.data.number}`);
}

run().catch((error: unknown) => core.setFailed(String(error)));
