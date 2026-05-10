export interface NotificationData {
  issueNumber: number;
  issueUrl: string;
  prUrl?: string;
  rejectionReason?: string;
  sourceUrl?: string;
}

function sanitizePlainText(value: string): string {
  return value.replace(/[^\x20-\x7E\n]/g, '').trim();
}

function buildBodyLines(lines: string[]): string {
  return lines.filter(Boolean).join('\n\n').trim();
}

export function buildEmailSubject(outcome: string, issueNumber: number): string {
  switch (outcome) {
    case 'VERIFIED':
      return `Australia.md submission verified (#${issueNumber})`;
    case 'REJECTED':
      return `Action required: Australia.md submission needs a fix (#${issueNumber})`;
    case 'SCRAPE_BLOCKED':
      return `Australia.md submission queued for manual review (#${issueNumber})`;
    case 'RATE_LIMITED':
      return `[Admin] Australia.md verification rate-limited (#${issueNumber})`;
    default:
      return `Australia.md submission update (#${issueNumber})`;
  }
}

export function buildEmailBody(
  outcome: 'VERIFIED' | 'REJECTED' | 'SCRAPE_BLOCKED' | 'RATE_LIMITED',
  data: NotificationData,
): string {
  switch (outcome) {
    case 'VERIFIED':
      return buildBodyLines([
        'Your submission has been verified against the source material.',
        data.prUrl ? `Pull request: ${data.prUrl}` : '',
        `Issue: ${data.issueUrl}`,
        'Thank you for contributing to the Australia.md archive.',
      ]);
    case 'REJECTED': {
      const reason = data.rejectionReason ? sanitizePlainText(data.rejectionReason) : 'The submission was not supported by the source.';
      return buildBodyLines([
        'Your submission could not be verified.',
        `Reason: ${reason}`,
        'Please correct the submission so it matches the source, then re-submit.',
        `Issue: ${data.issueUrl}`,
      ]);
    }
    case 'SCRAPE_BLOCKED':
      return buildBodyLines([
        'Your submission has been queued for manual review because the source URL could not be fetched.',
        data.sourceUrl ? `Source: ${data.sourceUrl}` : '',
        `Issue: ${data.issueUrl}`,
      ]);
    case 'RATE_LIMITED':
      return buildBodyLines([
        'Verification was rate-limited and requires admin attention.',
        `Issue: ${data.issueUrl}`,
      ]);
  }
}
