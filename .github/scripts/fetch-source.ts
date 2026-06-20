import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

const USER_AGENT = 'Australia.md Fact-Checker/1.0';
const RETRY_DELAYS_MS = [2000, 4000, 8000] as const;
const REQUEST_TIMEOUT_MS = 30_000;
const MAX_REDIRECTS = 3;
const BLOCKED_HOSTNAMES = new Set(['localhost', 'ip6-localhost', 'metadata', 'metadata.google.internal']);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

/** True for loopback / private / link-local / reserved IPs — common SSRF targets. */
function isPrivateIp(ip: string): boolean {
  const version = isIP(ip);
  if (version === 4) {
    const parts = ip.split('.').map((p) => Number.parseInt(p, 10));
    if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) {
      return true;
    }
    const [a, b] = parts as [number, number, number, number];
    if (a === 0 || a === 10 || a === 127) return true; // this-host, private, loopback
    if (a === 169 && b === 254) return true; // link-local incl. 169.254.169.254 metadata
    if (a === 172 && b >= 16 && b <= 31) return true; // private
    if (a === 192 && b === 168) return true; // private
    if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
    if (a >= 224) return true; // multicast + reserved
    return false;
  }
  if (version === 6) {
    const ipl = ip.toLowerCase();
    if (ipl === '::1' || ipl === '::') return true; // loopback / unspecified
    if (ipl.startsWith('fe80') || ipl.startsWith('fc') || ipl.startsWith('fd')) return true; // link-local / ULA
    const mapped = ipl.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/); // IPv4-mapped — check embedded v4
    if (mapped && mapped[1]) return isPrivateIp(mapped[1]);
    return false;
  }
  return true; // not a valid IP literal — refuse
}

/**
 * Validate a source URL before fetching: https only, no blocked hostnames, and
 * every resolved address must be public (blocks localhost / private ranges /
 * cloud metadata). Returns the normalized URL string or throws.
 */
async function assertSafeUrl(rawUrl: string): Promise<string> {
  const url = new URL(rawUrl);
  if (url.protocol !== 'https:') {
    throw new Error(`refusing non-https source URL (${url.protocol})`);
  }
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (!host || BLOCKED_HOSTNAMES.has(host)) {
    throw new Error(`refusing blocked host: ${host}`);
  }
  const addresses = isIP(host) ? [host] : (await lookup(host, { all: true })).map((entry) => entry.address);
  if (addresses.length === 0) {
    throw new Error(`could not resolve host: ${host}`);
  }
  for (const address of addresses) {
    if (isPrivateIp(address)) {
      throw new Error(`refusing private/reserved address ${address} for host ${host}`);
    }
  }
  return url.toString();
}

async function fetchOnce(url: string): Promise<Response | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
      },
      // We follow redirects manually so each hop is re-validated (a 3xx must not
      // be able to bounce an allowlisted host to an internal address).
      redirect: 'manual',
      signal: controller.signal,
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/** Fetch following redirects manually, re-validating every hop against the SSRF rules. */
async function fetchFollowingRedirects(rawUrl: string): Promise<Response | null> {
  let target = rawUrl;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop += 1) {
    let safeUrl: string;
    try {
      safeUrl = await assertSafeUrl(target);
    } catch {
      return null; // unsafe URL — refuse to fetch
    }

    const response = await fetchOnce(safeUrl);
    if (!response) {
      return null;
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location) {
        return response;
      }
      target = new URL(location, safeUrl).toString();
      continue;
    }

    return response;
  }

  return null; // too many redirects
}

export async function fetchSourceContent(url: string): Promise<string | null> {
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    const response = await fetchFollowingRedirects(url);
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
