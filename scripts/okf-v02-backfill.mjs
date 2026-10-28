#!/usr/bin/env node
// scripts/okf-v02-backfill.mjs — run from the repo root: `node scripts/okf-v02-backfill.mjs`
//
// Adds the OKF v0.2 provenance / trust / lifecycle families (SPEC.md §5, upstream
// GoogleCloudPlatform/open-knowledge-format) to every concept under docs/**. Every value is
// derived ONLY from data already in the file; nothing is looked up or inferred.
//
//   generated    { by: <actor>, at: <timestamp> }                    §5.2 — supersedes `timestamp` (§13.1)
//   verified     { by: openclaw/dental-cron, at: <last_verified | timestamp date>T00:00:00Z }
//                dental concepts written by the cron only; machine-confirmed tier (§5.3)
//   stale_after  latest verified.at + 180 days                        §5.5 — dental concepts only
//   sources      one entry per URL in the body's "Data Sources" / "Authoritative Sources"
//                table, with `id`, `resource`, `title`                 §5.1 — supersedes `# Citations` (§13.1)
//
// Legacy `timestamp` and `last_verified` are kept for v0.1 consumers. The body table is left
// in place. A key that is already present is never rewritten (so later re-verifications and
// producer-written values survive), which makes the script idempotent: run it again after new
// concepts land and only those change. Reserved files (index.md, log.md) are never touched.
//
// Flags:  --check   report what would change and exit 1 if anything would; write nothing
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const DOCS = join(ROOT, 'docs');
const CHECK = process.argv.includes('--check');
const DENTAL_CRON = 'openclaw/dental-cron';
const HUMAN_OWNER = 'human:jamesho';
const STALE_AFTER_DAYS = 180;
const RESERVED = new Set(['index.md', 'log.md']);
const DENTAL = /^docs\/medical\/dental\/[a-z0-9-]+-[a-z]{2,3}\.md$/;

// Dental concepts the cron did not write. Evidence: both are absent from the cron's own output
// (~/.openclaw/AustraliaMD/docs/medical/dental/) and both predate its first run (2026-04-05).
// They get no `verified`: the cron never confirmed them, and claiming `human:` would be invented.
const PRODUCER_OVERRIDES = {
  'docs/medical/dental/macquarie-park-nsw.md': HUMAN_OWNER, // f8daa1d, 2026-03-27, hand-authored
  'docs/medical/dental/chatswood-nsw.md': HUMAN_OWNER,      // b9b55d0, 2026-04-21, reconstructed from the published HTML
};

const DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SOURCES_HEADING = /^#{2,3}\s+(?:Authoritative\s+)?(?:Data\s+)?Sources\s*$/;
const TABLE_RULE = /^\|[\s:|-]+\|?\s*$/;

const unquote = (v) => v.trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
const ystr = (s) => JSON.stringify(s); // a JSON string is a valid YAML double-quoted scalar
const isoZ = (ms) => new Date(ms).toISOString().replace(/\.000Z$/, 'Z');

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (n.endsWith('.md') && !RESERVED.has(n)) out.push(p);
  }
  return out;
}

const slug = (s) => {
  const full = s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return full.length <= 60 ? full : full.slice(0, 60).replace(/-[^-]*$/, '');
};

/** One `{ id, resource, title }` per distinct URL in the body's source table(s). */
function tableSources(body) {
  const lines = body.split('\n');
  const out = [], seenUrl = new Set(), seenId = new Set();
  let inSection = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (SOURCES_HEADING.test(line)) { inSection = true; continue; }
    if (/^#{1,3}\s/.test(line)) { inSection = false; continue; }
    if (!inSection || !line.startsWith('|') || TABLE_RULE.test(line)) continue;
    if (TABLE_RULE.test(lines[i + 1] || '')) continue; // header row ("| Source | URL |")
    const cells = line.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim());
    const urlCell = cells.pop() || '';
    const name = cells.join(' | '); // a Source cell may itself contain "|" (e.g. "Contact Us | Berry Dental Studio")
    const links = [...urlCell.matchAll(/\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g)].map((m) => ({ text: m[1].trim(), url: m[2] }));
    if (!links.length) {
      const bare = urlCell.match(/<?(https?:\/\/[^\s<>|]+)>?/);
      if (bare) links.push({ text: '', url: bare[1] });
    }
    for (const { text, url } of links) {
      if (seenUrl.has(url)) continue;
      seenUrl.add(url);
      const title = text && text !== name ? `${name} — ${text}` : name;
      const base = slug(title) || 'source';
      let id = base;
      for (let n = 2; seenId.has(id); n++) id = `${base}-${n}`;
      seenId.add(id);
      out.push({ id, resource: url, title });
    }
  }
  return out;
}

/** Top-level `key: value` pairs of a frontmatter block (indented continuation lines ignored). */
function topLevel(block) {
  const fm = {};
  for (const line of block.split('\n')) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2];
  }
  return fm;
}

/** Every `at:` datetime inside an existing `verified` value (bare mapping or list). */
function existingVerifiedAts(block) {
  const m = block.match(/^verified:(.*(?:\n[ \t-].*)*)/m);
  return m ? [...m[1].matchAll(/\bat:\s*"?([0-9T:.+\-Z]+)"?/g)].map((x) => x[1]).filter((v) => DATETIME.test(v)) : [];
}

const stats = { concepts: 0, changed: 0, generated: 0, verified: 0, stale_after: 0, sources: 0, entries: 0 };
const warnings = [], changed = [];

for (const file of walk(DOCS).sort()) {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---(?=\n|$)/);
  if (!m) { warnings.push(`${rel}: no frontmatter (not a conformant concept) — skipped`); continue; }
  const block = m[1], body = raw.slice(m[0].length);
  const fm = topLevel(block);
  if (!unquote(fm.type || '')) { warnings.push(`${rel}: no \`type\` — skipped`); continue; }
  stats.concepts++;

  const dental = DENTAL.test(rel);
  const producer = PRODUCER_OVERRIDES[rel] || (dental ? DENTAL_CRON : HUMAN_OWNER);
  const timestamp = unquote(fm.timestamp || '');
  const lastVerified = unquote(fm.last_verified || '');
  const add = [];

  if (!('generated' in fm)) {
    const at = DATETIME.test(timestamp) ? timestamp : DATE.test(timestamp) ? `${timestamp}T00:00:00Z` : '';
    if (at) { add.push(`generated: { by: ${producer}, at: ${at} }`); stats.generated++; }
    else warnings.push(`${rel}: no usable \`timestamp\` — \`generated\` not added`);
  }

  let verifiedAts = existingVerifiedAts(block);
  if (dental && producer === DENTAL_CRON && !('verified' in fm)) {
    const day = (DATE.test(lastVerified) ? lastVerified : timestamp.slice(0, 10));
    if (DATE.test(day)) {
      const at = `${day}T00:00:00Z`;
      add.push(`verified: { by: ${DENTAL_CRON}, at: ${at} }`);
      verifiedAts = [at];
      stats.verified++;
    } else warnings.push(`${rel}: no \`last_verified\` or \`timestamp\` date — \`verified\` not added`);
  }

  if (dental && !('stale_after' in fm) && verifiedAts.length) {
    const latest = Math.max(...verifiedAts.map((v) => Date.parse(v)));
    add.push(`stale_after: ${isoZ(latest + STALE_AFTER_DAYS * 86400000)}`);
    stats.stale_after++;
  }

  if (!('sources' in fm)) {
    const sources = tableSources(body);
    for (const s of sources) if (!body.includes(s.resource)) throw new Error(`${rel}: derived resource not found verbatim in body: ${s.resource}`);
    if (sources.length) {
      add.push('sources:', ...sources.flatMap((s) => [`  - id: ${s.id}`, `    resource: ${ystr(s.resource)}`, `    title: ${ystr(s.title)}`]));
      stats.sources++;
      stats.entries += sources.length;
    } else warnings.push(`${rel}: no source table found — \`sources\` not added`);
  }

  if (!add.length) continue;
  stats.changed++;
  changed.push(rel);
  if (!CHECK) writeFileSync(file, `---\n${block}\n${add.join('\n')}\n---${body}`);
}

console.log(`${CHECK ? '[check] ' : ''}OKF v0.2 backfill: ${stats.concepts} concepts; files ${CHECK ? 'needing changes' : 'changed'}: ${stats.changed}` +
  ` (generated +${stats.generated}, verified +${stats.verified}, stale_after +${stats.stale_after}, sources +${stats.sources} with ${stats.entries} entries)`);
if (warnings.length) console.log('WARN\n' + warnings.map((w) => `  ${w}`).join('\n'));
if (CHECK && changed.length) process.exit(1);
