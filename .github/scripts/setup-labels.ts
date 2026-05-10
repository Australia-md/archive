import * as core from '@actions/core';
import * as github from '@actions/github';

const LABELS = [
  { name: 'submission', color: '0075ca', description: 'Community content submission' },
  { name: 'pending-review', color: 'e4e669', description: 'Awaiting AI or admin review' },
  { name: 'Verified', color: '0e8a16', description: 'AI or admin verified — ready to merge' },
  { name: 'Needs Fix', color: 'd93f0b', description: 'Submission rejected — fix required' },
  { name: 'Scrape Blocked', color: 'b60205', description: 'Source URL could not be fetched' },
  { name: 'Pending Human Review', color: 'fbca04', description: 'Queued for manual admin review' },
  { name: 'Rejected', color: 'ee0701', description: 'Submission permanently rejected by admin' },
] as const;

async function run(): Promise<void> {
  const token = process.env['GITHUB_TOKEN'];
  if (!token) {
    core.setFailed('GITHUB_TOKEN is required');
    return;
  }

  const octokit = github.getOctokit(token);
  const [owner, repo] = (process.env['GITHUB_REPOSITORY'] ?? '').split('/');
  if (!owner || !repo) {
    core.setFailed('GITHUB_REPOSITORY must be set in the format owner/repo');
    return;
  }

  for (const label of LABELS) {
    try {
      await octokit.rest.issues.createLabel({ owner, repo, ...label });
      core.info(`Created label: ${label.name}`);
    } catch (err: unknown) {
      if (
        err instanceof Error &&
        'status' in err &&
        (err as { status: number }).status === 422
      ) {
        core.info(`Label already exists, updating: ${label.name}`);
        await octokit.rest.issues.updateLabel({ owner, repo, ...label });
      } else {
        core.warning(`Failed to create/update label "${label.name}": ${String(err)}`);
      }
    }
  }

  core.info('All labels created/verified.');
}

run().catch((err: unknown) => core.setFailed(String(err)));
