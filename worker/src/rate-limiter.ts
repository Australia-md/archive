export async function checkRateLimit(ip: string, kv: KVNamespace): Promise<{ allowed: boolean }> {
  const key = `ratelimit:${ip}`;
  const current = await kv.get(key);

  let count = 0;
  if (current !== null) {
    const parsed = Number.parseInt(current, 10);
    count = Number.isNaN(parsed) ? 0 : parsed;
  }

  if (count >= 2) {
    return { allowed: false };
  }

  await kv.put(key, String(count + 1), {
    expirationTtl: 900,
    metadata: null,
  });

  return { allowed: true };
}
