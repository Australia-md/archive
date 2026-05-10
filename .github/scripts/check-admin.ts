import * as core from '@actions/core';

type GitHubOctokit = ReturnType<typeof import('@actions/github').getOctokit>;

export function isAdmin(actor: string, adminList: string): boolean {
  const normalizedActor = actor.trim().toLowerCase();
  if (!normalizedActor) {
    return false;
  }

  return adminList
    .split(',')
    .map((username) => username.trim().toLowerCase())
    .filter(Boolean)
    .includes(normalizedActor);
}

export async function rejectOverride(
  octokit: GitHubOctokit,
  owner: string,
  repo: string,
  issueNumber: number,
  actor: string
): Promise<void> {
  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: 'Override rejected: only authorised administrators can trigger this action.',
  });

  core.info(`Rejected admin override attempt by ${actor} on ${owner}/${repo}#${issueNumber}`);
}
