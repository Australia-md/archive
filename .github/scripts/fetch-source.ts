const USER_AGENT = 'Australia.md Fact-Checker/1.0';
const RETRY_DELAYS_MS = [2000, 4000, 8000] as const;
const REQUEST_TIMEOUT_MS = 30_000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function fetchOnce(url: string): Promise<Response | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
      },
      signal: controller.signal,
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchSourceContent(url: string): Promise<string | null> {
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    const response = await fetchOnce(url);
    if (!response) {
      return null;
    }

    if (response.status === 403 || response.status === 429) {
      if (attempt < RETRY_DELAYS_MS.length) {
        const delay = RETRY_DELAYS_MS[attempt];
        if (delay === undefined) {
          return null;
        }
        await sleep(delay);
        continue;
      }
      return null;
    }

    if (response.status !== 200) {
      return null;
    }

    try {
      const text = await response.text();
      return stripHtmlTags(text);
    } catch {
      return null;
    }
  }

  return null;
}
