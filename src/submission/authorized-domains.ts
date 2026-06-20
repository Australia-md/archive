export const AUTHORIZED_DOMAINS: readonly string[] = [
  // Any Australian government or education domain. These wildcards already
  // authorize the specific agency apexes (abs.gov.au, aihw.gov.au, ahpra.gov.au,
  // rba.gov.au, …), so listing those separately would be redundant/shadowed.
  '*.gov.au',
  '*.edu.au',
] as const;

/**
 * Returns true if the given URL's hostname matches any authorized domain pattern.
 * Wildcard patterns (*.gov.au) match any subdomain.
 */
export function isDomainAuthorized(rawUrl: string): boolean {
  let hostname: string;
  try {
    hostname = new URL(rawUrl).hostname.toLowerCase();
  } catch {
    return false;
  }

  return AUTHORIZED_DOMAINS.some((pattern) => {
    if (pattern.startsWith('*.')) {
      const suffix = pattern.slice(1); // e.g. ".gov.au"
      return hostname.endsWith(suffix) && hostname !== suffix.slice(1);
    }
    return hostname === pattern;
  });
}
