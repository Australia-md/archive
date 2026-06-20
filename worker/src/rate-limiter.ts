const WINDOW_SECONDS = 900; // fixed 15-minute window
const MAX_REQUESTS = 2;

interface RateLimitRecord {
  count: number;
  windowStart: number; // unix seconds when the current window began
}

/**
 * Fixed-window rate limit. The window is anchored to the FIRST request's
 * timestamp and does not slide: subsequent allowed requests preserve the
 * original expiration (via an absolute `expiration`) rather than resetting the
 * TTL on every call.
 */
export async function checkRateLimit(
  ip: string,
  kv: KVNamespace,
): Promise<{ allowed: boolean; retryAfterSeconds: number }> {
  const key = `ratelimit:${ip}`;
  const nowSec = Math.floor(Date.now() / 1000);
  const raw = await kv.get(key);

  let count = 0;
  let windowStart = nowSec;
  if (raw !== null) {
    try {
      const parsed: unknown = JSON.parse(raw);
      if (
        typeof parsed === 'object' &&
        parsed !== null &&
        typeof (parsed as RateLimitRecord).count === 'number'
      ) {
        const record = parsed as RateLimitRecord;
        count = record.count;
        windowStart = typeof record.windowStart === 'number' ? record.windowStart : nowSec;
      } else if (typeof parsed === 'number') {
        count = parsed; // legacy plain-integer value — adopt a fresh window
      }
    } catch {
      // Unparseable value — treat as a fresh window.
    }
  }

  const windowEnd = windowStart + WINDOW_SECONDS;
  const retryAfterSeconds = Math.max(1, windowEnd - nowSec);

  if (count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds };
  }

  // Preserve the original window. Cloudflare KV requires `expiration` to be at
  // least 60s in the future and `expirationTtl` to be at least 60s; when the
  // window has <60s left, fall back to a 60s TTL.
  const secondsLeft = windowEnd - nowSec;
  const putOptions: KVNamespacePutOptions =
    secondsLeft >= 60 ? { expiration: windowEnd } : { expirationTtl: 60 };
  await kv.put(key, JSON.stringify({ count: count + 1, windowStart }), putOptions);

  return { allowed: true, retryAfterSeconds };
}
