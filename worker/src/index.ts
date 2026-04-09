import { Router } from 'itty-router';
import { retrieveContributorEmail, storeContributorEmail } from './email-store.js';
import { createGitHubIssue, UpstreamError } from './github-client.js';
import { checkRateLimit } from './rate-limiter.js';
import { getSystemStatus } from './status-checker.js';
import type { Env } from './types.js';
import { ValidationError, validateSubmission } from './validator.js';
import type { SystemStatus } from '@shared/types';

const router = Router();

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function jsonResponse(
  body: unknown,
  status: number,
  headers: HeadersInit = {},
): Response {
  return Response.json(body, { status, headers });
}

function isAllowedOrigin(requestOrigin: string | null, allowedOrigin: string): boolean {
  return requestOrigin === allowedOrigin;
}

function getClientIp(request: Request): string {
  const cfConnectingIp = request.headers.get('CF-Connecting-IP');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  const forwardedFor = request.headers.get('X-Forwarded-For');
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(',');
    if (firstIp) {
      return firstIp.trim();
    }
  }

  return 'unknown';
}

function getRepoDetails(env: Env): { owner: string; repo: string } {
  const fallbackOwner = 'HoHo1979';
  const fallbackRepo = 'Australia';
  const repository = env.GITHUB_REPOSITORY;

  if (repository) {
    const [owner, repo] = repository.split('/');
    if (owner && repo) {
      return { owner, repo };
    }
  }

  return { owner: fallbackOwner, repo: fallbackRepo };
}

function isSystemStatus(value: unknown): value is SystemStatus {
  return value === 'green' || value === 'amber' || value === 'red';
}

router.options('*', (request: Request, env: Env) => {
  const origin = request.headers.get('Origin') ?? env.ALLOWED_ORIGIN;
  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
});

router.post('/api/submit', async (request: Request, env: Env) => {
  const origin = request.headers.get('Origin');
  if (!isAllowedOrigin(origin, env.ALLOWED_ORIGIN)) {
    return jsonResponse({ error: 'Forbidden' }, 403);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400, corsHeaders(env.ALLOWED_ORIGIN));
  }

  let submission;
  try {
    submission = validateSubmission(body);
  } catch (error) {
    if (error instanceof ValidationError) {
      return jsonResponse(
        { error: error.message, field: error.field },
        400,
        corsHeaders(env.ALLOWED_ORIGIN),
      );
    }
    throw error;
  }

  const allowed = await checkRateLimit(getClientIp(request), env.RATE_LIMIT_KV);
  if (!allowed.allowed) {
    return jsonResponse(
      { error: 'Rate limit exceeded', retryAfterSeconds: 900 },
      429,
      corsHeaders(env.ALLOWED_ORIGIN),
    );
  }

  const { owner, repo } = getRepoDetails(env);

  let issue;
  try {
    issue = await createGitHubIssue(submission, env.GITHUB_TOKEN, owner, repo);
  } catch (error) {
    if (error instanceof UpstreamError) {
      return jsonResponse(
        { error: error.upstreamMessage, statusCode: error.statusCode },
        503,
        corsHeaders(env.ALLOWED_ORIGIN),
      );
    }
    throw error;
  }

  await storeContributorEmail(issue.number, submission.contributorEmail, env.EMAIL_KV);

  return jsonResponse(
    { issueNumber: issue.number, issueUrl: issue.html_url },
    200,
    corsHeaders(env.ALLOWED_ORIGIN),
  );
});

router.get('/api/status', async (_request: Request, env: Env) => {
  const status = await getSystemStatus(env);
  return jsonResponse({ status }, 200);
});

router.get('/api/email/:issueNumber', async (request: Request, env: Env) => {
  const authorization = request.headers.get('Authorization');
  if (authorization !== `Bearer ${env.INTER_SVC_TOKEN}`) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  const issueNumberParam = (request as Request & { params?: { issueNumber?: string } }).params?.issueNumber;
  const issueNumber = issueNumberParam ? Number.parseInt(issueNumberParam, 10) : Number.NaN;
  if (Number.isNaN(issueNumber)) {
    return jsonResponse({ error: 'Invalid issue number' }, 400);
  }

  const email = await retrieveContributorEmail(issueNumber, env.EMAIL_KV);
  if (email === null) {
    return jsonResponse({ error: 'Email not found' }, 404);
  }

  return jsonResponse({ email }, 200);
});

router.post('/api/admin/status', async (request: Request, env: Env) => {
  const authorization = request.headers.get('Authorization');
  if (authorization !== `Bearer ${env.INTER_SVC_TOKEN}`) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return jsonResponse({ error: 'Invalid request body' }, 400);
  }

  const status = (body as { status?: unknown }).status;
  if (!isSystemStatus(status)) {
    return jsonResponse({ error: 'Invalid status' }, 400);
  }

  await env.STATUS_KV.put('system-status', status);
  return jsonResponse({ ok: true }, 200);
});

router.all('*', () => jsonResponse({ error: 'Not found' }, 404));

export default {
  fetch: router.fetch,
};
