// scripts/okf-frontmatter.mjs — OKF frontmatter helpers shared by the scripts in this folder.
// Dependency-free like its callers, so it reads the few keys it needs textually rather than with a YAML parser.
//
// OKF v0.2 (SPEC.md §5.2, §13.1) records verification in `verified` — a `{ by, at }` mapping or a list
// of them, "how recently" being the latest `at` — and supersedes `timestamp` with `generated.at`. During the
// v0.1 → v0.2 transition every concept still carries the legacy `last_verified` / `timestamp` keys, so a
// reader takes the latest `verified[].at`, then `last_verified`, then `timestamp`, then `generated.at`.

const DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/;

/** The text between a file's opening and closing `---` fences, or '' when it has no frontmatter. */
export function frontmatterBlock(raw) {
  return (raw.match(/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/) || [, ''])[1];
}

/** A top-level scalar value (quotes stripped), or ''. */
function scalar(block, key) {
  return ((block.match(new RegExp(`^${key}:[ \\t]*"?([^"\\r\\n]*?)"?[ \\t]*\\r?$`, 'm')) || [])[1] || '').trim();
}

/**
 * Every `at` datetime under the top-level `verified` key. A bare mapping counts as a one-element list
 * (OKF v0.2 §11); flow (`{ by, at }`, `[ … ]`) and block forms are both read.
 */
export function verifiedAts(block) {
  const m = block.match(/^verified:(.*(?:\r?\n[ \t-].*)*)/m);
  if (!m) return [];
  return [...m[1].matchAll(/\bat:\s*["']?([0-9][0-9T:.+\-Z]*)/g)].map((x) => x[1]).filter((v) => DATETIME.test(v));
}

/** `generated.at` (OKF v0.2 successor of `timestamp`), or ''. */
function generatedAt(block) {
  const m = block.match(/^generated:(.*(?:\r?\n[ \t].*)*)/m);
  const at = m && (m[1].match(/\bat:\s*["']?([0-9][0-9T:.+\-Z]*)/) || [])[1];
  return at && DATETIME.test(at) ? at : '';
}

/**
 * A concept's verification date as YYYY-MM-DD: the date of the latest `verified[].at` (as written, so an
 * offset such as +10:00 keeps its local calendar date), else `last_verified`, else `timestamp`, else
 * `generated.at` (for a concept that no longer carries the legacy keys). '' if none.
 */
export function verificationDate(block) {
  const ats = verifiedAts(block);
  if (ats.length) return ats.reduce((a, b) => (Date.parse(b) > Date.parse(a) ? b : a)).slice(0, 10);
  const legacy = (scalar(block, 'last_verified') || scalar(block, 'timestamp') || generatedAt(block)).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(legacy) ? legacy : '';
}
