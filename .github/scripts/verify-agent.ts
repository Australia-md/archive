import * as core from '@actions/core';
import OpenAI from 'openai';
import { fetchSourceContent } from './fetch-source.js';
import { ParseError, parseSubmissionIssue } from './parse-issue.js';

const FACT_CHECK_SYSTEM_PROMPT = `You are a strict fact-checking agent for the Australia.md archive. You will be given:
1. SOURCE: content scraped from an authoritative Australian source URL
2. SUBMITTED: content submitted by a contributor

Your task: verify that the SUBMITTED content is factually consistent with the SOURCE.

Respond ONLY with one of:
- VERIFIED  (if the submitted content is factually supported by the source)
- REJECTED: [one sentence reason]  (if the submitted content contradicts or is unsupported by the source)

Do not include any other text, explanation, or formatting.`;

function setOutputs(outputs: {
  status: 'VERIFIED' | 'REJECTED' | 'SCRAPE_BLOCKED' | 'RATE_LIMITED';
  rejectionReason?: string;
  contributorEmail: string;
  contentPath?: string;
  category?: string;
  sourceUrl?: string;
  content?: string;
}): void {
  core.setOutput('status', outputs.status);
  core.setOutput('rejection_reason', outputs.rejectionReason ?? '');
  core.setOutput('contributor_email', outputs.contributorEmail);
  core.setOutput('content_path', outputs.contentPath ?? '');
  core.setOutput('category', outputs.category ?? '');
  core.setOutput('source_url', outputs.sourceUrl ?? '');
  core.setOutput('content', outputs.content ?? '');
}

async function run(): Promise<void> {
  const token = process.env['GITHUB_TOKEN'];
  const issueNumber = process.env['ISSUE_NUMBER'];
  const issueBody = process.env['ISSUE_BODY'];
  const contributorEmail = process.env['CONTRIBUTOR_EMAIL'] ?? '';

  if (!token) {
    core.setFailed('GITHUB_TOKEN is required');
    return;
  }

  if (!issueNumber) {
    core.setFailed('ISSUE_NUMBER is required');
    return;
  }

  if (!issueBody) {
    core.setFailed('ISSUE_BODY is required');
    return;
  }

  let parsed;
  try {
    parsed = parseSubmissionIssue(issueBody);
  } catch (error: unknown) {
    if (error instanceof ParseError) {
      core.setFailed(error.message);
      return;
    }
    core.setFailed(String(error));
    return;
  }

  const sourceContent = await fetchSourceContent(parsed.sourceUrl);
  if (sourceContent === null) {
    setOutputs({
      status: 'SCRAPE_BLOCKED',
      contributorEmail,
    });
    return;
  }

  const credential = new OpenAI({
    baseURL: 'https://api.githubcopilot.com',
    apiKey: token,
  });

  let verdict = '';
  try {
    const response = await credential.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        { role: 'system', content: FACT_CHECK_SYSTEM_PROMPT },
        { role: 'user', content: `SOURCE:\n${sourceContent}\n\nSUBMITTED:\n${parsed.content}` },
      ],
      temperature: 0.1,
      max_tokens: 200,
    });

    verdict = response.choices[0]?.message?.content?.trim() ?? '';
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes('429')) {
      setOutputs({
        status: 'RATE_LIMITED',
        contributorEmail,
      });
      return;
    }

    setOutputs({
      status: 'SCRAPE_BLOCKED',
      contributorEmail,
    });
    return;
  }

  const sanitizedVerdict = verdict.replace(/[^\x20-\x7E\n]/g, '');
  if (sanitizedVerdict === 'VERIFIED') {
    setOutputs({
      status: 'VERIFIED',
      contributorEmail,
      contentPath: parsed.contentPath,
      category: parsed.category,
      sourceUrl: parsed.sourceUrl,
      content: parsed.content,
    });
    return;
  }

  const rejectedMatch = sanitizedVerdict.match(/^REJECTED: .{1,500}$/);
  if (rejectedMatch) {
    setOutputs({
      status: 'REJECTED',
      rejectionReason: sanitizedVerdict.slice('REJECTED: '.length),
      contributorEmail,
      contentPath: parsed.contentPath,
      category: parsed.category,
      sourceUrl: parsed.sourceUrl,
      content: parsed.content,
    });
    return;
  }

  setOutputs({
    status: 'SCRAPE_BLOCKED',
    contributorEmail,
  });
}

run().catch((error: unknown) => core.setFailed(String(error)));
