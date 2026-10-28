#!/usr/bin/env node
// scripts/build-llms.mjs — run from the repo root: `npm run seo:llms`
// Generates llms.txt (index) and llms-full.txt (index + full OKF bodies) from docs/**.md frontmatter.
// Replaces the previously hand-maintained files. Dental suburb concepts are listed individually with their
// clinic counts, so agents can route straight to the .md they need.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, basename } from 'node:path';
import { verificationDate } from './okf-frontmatter.mjs';

const ROOT = process.cwd(), DOCS = join(ROOT, 'docs'), ORIGIN = 'https://australia.md';

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) { const p = join(dir, n); statSync(p).isDirectory() ? walk(p, out) : n.endsWith('.md') && out.push(p); }
  return out;
}
function parse(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const fm = {};
  if (m) for (const line of m[1].split('\n')) { const kv = line.match(/^(\w+):\s*(.*)$/); if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, ''); }
  const body = m ? raw.slice(m[0].length) : raw;
  // `title` is optional in OKF (only `type` is required): fall back to the first H1, then the filename.
  const title = fm.title || ((body.match(/^#\s+(.+?)\s*$/m) || [])[1]) || basename(file, '.md').replace(/-/g, ' ');
  return { fm, title, body, checked: verificationDate(m ? m[1] : ''), clinics: (body.match(/^### \d+\. /gm) || []).length };
}

// Bodies are concatenated into llms-full.txt (served from the site root), so a relative link such as
// `../../medical.md` must be rebased against the concept's own URL or it would resolve to the wrong place.
function rebaseLinks(body, rel) {
  const base = `${ORIGIN}/${rel}`;
  return body.replace(/\]\(([^)\s]+)((?:\s+"[^"]*")?)\)/g, (match, href, title) => {
    if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) return match;   // absolute URL, mailto:, anchor or root-relative
    try { return `](${new URL(href, base).href}${title})`; } catch { return match; }
  });
}

const concepts = walk(DOCS).map(f => ({ rel: relative(ROOT, f).replace(/\\/g, '/'), ...parse(f) }))
  .filter(c => c.fm.type);                       // OKF conformance: `type` is required
const isSuburb = c => /^docs\/medical\/dental\/[a-z0-9-]+-[a-z]{2,3}\.md$/.test(c.rel);   // one concept per suburb
const core = concepts.filter(c => !isSuburb(c));
const dental = concepts.filter(isSuburb).sort((a, b) => a.title.localeCompare(b.title));

const slugOf = c => c.rel.replace(/^docs\/medical\/dental\/|-[a-z]{2,3}\.md$/g, '');
const htmlFor = c => (existsSync(join(ROOT, 'medical/dental', slugOf(c), 'index.html')) ? ` · HTML: ${ORIGIN}/medical/dental/${slugOf(c)}/` : ''); // only advertise published pages
const line = c => `- [${c.title}](${ORIGIN}/${c.rel})${c.fm.description ? ': ' + c.fm.description : ''}`;
const dentalLine = c => `- [${c.title}](${ORIGIN}/${c.rel}): ${c.clinics} clinic(s), checked ${c.checked}${htmlFor(c)}`;

const index = `# Australia.md — Sovereign Knowledge Archive

> Curated, source-verified knowledge about Australia, published as an Open Knowledge Format (OKF v0.2) bundle: Markdown concepts with YAML frontmatter under /docs/, each recording its sources and when it was generated and verified. Each dental directory page links its source .md via <link rel="alternate" type="text/markdown">. Licence: AGPL-3.0-or-later. Facts carry Last Verified dates; nothing is inferred beyond the cited sources.

## Core concepts
${core.map(line).join('\n')}

## Dental clinic directory (NSW) — one OKF concept per suburb
${dental.map(dentalLine).join('\n')}

## Machine endpoints
- [Sitemap](${ORIGIN}/sitemap.xml): canonical HTML URLs with per-URL lastmod
- [Full corpus](${ORIGIN}/llms-full.txt): this index followed by every concept body
- [Repository](https://github.com/Australia-md/archive): clone for the whole bundle
`;
writeFileSync(join(ROOT, 'llms.txt'), index);
writeFileSync(join(ROOT, 'llms-full.txt'), index + '\n\n---\n\n' + concepts.map(c => `<!-- ${ORIGIN}/${c.rel} -->\n${rebaseLinks(c.body.trim(), c.rel)}`).join('\n\n---\n\n') + '\n');
const unpublished = dental.filter(c => !htmlFor(c)).map(slugOf);
console.log(`llms.txt: ${core.length} core + ${dental.length} dental concepts${unpublished.length ? ` (no HTML page yet: ${unpublished.join(', ')})` : ''}`);
