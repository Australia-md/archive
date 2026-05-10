import * as core from '@actions/core';
import * as github from '@actions/github';
import { isAdmin, rejectOverride } from './check-admin';

async function run(): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  const actor = process.env.ACTOR;
  const adminUsernames = process.env.ADMIN_USERNAMES ?? '';
  const issueNumberRaw = process.env.ISSUE_NUMBER;
  const repository = process.env.GITHUB_REPOSITORY;

  if (!token) {
    core.setFailed('GITHUB_TOKEN is required');
    return;
  }

  if (!actor) {
    core.setFailed('ACTOR is required');
    return;
  }

  if (!issueNumberRaw) {
    core.setFailed('ISSUE_NUMBER is required');
    return;
  }

  if (!repository) {
    core.setFailed('GITHUB_REPOSITORY is required');
    return;
  }

  const [owner, repo] = repository.split('/');
  if (!owner || !repo) {
    core.setFailed('GITHUB_REPOSITORY must be in the format owner/repo');
    return;
  }

  const issueNumber = Number.parseInt(issueNumberRaw, 10);
  if (!Number.isInteger(issueNumber) || issueNumber <= 0) {
    core.setFailed('ISSUE_NUMBER must be a positive integer');
    return;
  }

  const octokit = github.getOctokit(token);

  if (!isAdmin(actor, adminUsernames)) {
    await rejectOverride(octokit, owner, repo, issueNumber, actor);
    core.setOutput('is_admin', 'false');
    return;
  }

  core.setOutput('is_admin', 'true');
}

run().catch((error: unknown) => {
  core.setFailed(error instanceof Error ? error.message : String(error));
});
