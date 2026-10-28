import * as core from '@actions/core';
import { ParseError, parseSubmissionIssue } from './parse-issue.js';

// Entry point for admin-override.yml. An admin's "Verified" label skips the AI check in
// verify-agent.ts, so this parses the issue body into the same outputs verify-agent.ts sets
// (content, category, content_path, source_url) for create-content-file.ts to consume.

function run(): void {
  const issueBody = process.env['ISSUE_BODY'] ?? '';
  if (!issueBody) {
    core.setFailed('ISSUE_BODY is required');
    return;
  }

  try {
    const parsed = parseSubmissionIssue(issueBody);
    core.setOutput('content', parsed.content);
    core.setOutput('category', parsed.category);
    core.setOutput('content_path', parsed.contentPath);
    core.setOutput('source_url', parsed.sourceUrl);
  } catch (error: unknown) {
    if (error instanceof ParseError) {
      core.setFailed(`Submission issue cannot be parsed: ${error.message}`);
      return;
    }
    core.setFailed(String(error));
  }
}

run();
