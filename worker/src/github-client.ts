import type { Submission, WorkerSuccessResponse } from '@shared/types';
import { buildIssueBody, buildIssueTitle } from './issue-builder.js';

export class UpstreamError extends Error {
  public readonly statusCode: number;
  public readonly upstreamMessage: string;

  constructor(statusCode: number, upstreamMessage: string) {
    super(upstreamMessage);
    this.name = 'UpstreamError';
    this.statusCode = statusCode;
    this.upstreamMessage = upstreamMessage;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function resolveRepoOwnerAndName(repoOwner: string, repoName: string): { owner: string; repo: string } {
  return {
    owner: repoOwner || 'HoHo1979',
    repo: repoName || 'Australia',
  };
}

export async function createGitHubIssue(
  submission: Submission,
  token: string,
  repoOwner: string,
  repoName: string,
): Promise<{ number: number; html_url: string }> {
  const { owner, repo } = resolveRepoOwnerAndName(repoOwner, repoName);
  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  const payload = {
    title: buildIssueTitle(submission),
    body: buildIssueBody(submission),
    labels: ['submission', 'pending-review'],
  };

  let lastStatusCode = 502;
  let lastMessage = 'GitHub issue creation failed';

  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'Australia.md-Submission/1.0',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = (await response.json()) as Partial<WorkerSuccessResponse> & {
          number?: unknown;
          html_url?: unknown;
        };

        if (typeof data.number === 'number' && typeof data.html_url === 'string') {
          return {
            number: data.number,
            html_url: data.html_url,
          };
        }

        lastStatusCode = 502;
        lastMessage = 'GitHub returned an invalid issue payload';
      } else {
        lastStatusCode = response.status;
        lastMessage = await response.text();
      }
    } catch (error) {
      lastStatusCode = 502;
      lastMessage = error instanceof Error ? error.message : 'GitHub request failed';
    }

    if (attempt < 3) {
      await delay(1000 * 2 ** attempt);
    }
  }

  throw new UpstreamError(lastStatusCode, lastMessage);
}
