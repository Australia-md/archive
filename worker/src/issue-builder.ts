import type { Submission } from '@shared/types';

const REDACTED_EMAIL = '[email protected]';

export function buildIssueTitle(submission: Submission): string {
  return `[${submission.category}] Content submission via Australia.md`;
}

export function buildIssueBody(submission: Submission): string {
  return [
    '## Category',
    submission.category,
    '',
    '## Template',
    submission.template,
    '',
    '## Source URL',
    submission.sourceUrl,
    '',
    '## Contributor Email',
    REDACTED_EMAIL,
    '',
    '## Content',
    submission.content,
    '',
  ].join('\n');
}
