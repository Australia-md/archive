import type { SystemStatus } from '@shared/types';

function isSystemStatus(value: unknown): value is SystemStatus {
  return value === 'green' || value === 'amber' || value === 'red';
}

async function readCachedStatus(kv: KVNamespace, key: string): Promise<SystemStatus | null> {
  const value = await kv.get(key);
  return isSystemStatus(value) ? value : null;
}

export async function getSystemStatus(env: {
  STATUS_KV: KVNamespace;
  GITHUB_TOKEN: string;
}): Promise<SystemStatus> {
  const systemStatus = await readCachedStatus(env.STATUS_KV, 'system-status');
  if (systemStatus) {
    return systemStatus;
  }

  const liveCachedStatus = await readCachedStatus(env.STATUS_KV, 'status-live-check');
  if (liveCachedStatus) {
    return liveCachedStatus;
  }

  let computedStatus: SystemStatus = 'red';

  try {
    const response = await fetch('https://api.github.com/rate_limit', {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'Australia.md-Submission/1.0',
      },
    });

    if (response.ok) {
      const payload = (await response.json()) as {
        resources?: {
          core?: {
            remaining?: unknown;
          };
        };
      };

      const remaining = payload.resources?.core?.remaining;
      if (typeof remaining === 'number') {
        if (remaining > 50) {
          computedStatus = 'green';
        } else if (remaining >= 10) {
          computedStatus = 'amber';
        } else {
          computedStatus = 'red';
        }
      }
    }
  } catch {
    computedStatus = 'red';
  }

  try {
    await env.STATUS_KV.put('status-live-check', computedStatus, {
      expirationTtl: 10,
    });
  } catch {
    // Ignore cache write failures.
  }

  return computedStatus;
}
