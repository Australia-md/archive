#!/usr/bin/env node
// scripts/build-llms.mjs — run from the repo root: `npm run seo:llms`
// Generates llms.txt (index) and llms-full.txt (index + full OKF bodies) from docs/**.md frontmatter.
// Replaces the previously hand-maintained files. Dental suburb concepts are listed individually with their
// clinic counts, so agents can route straight to the .md they need.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

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
  return { fm, body, clinics: (body.match(/^### \d+\. /gm) || []).length };
}

const concepts = walk(DOCS).map(f => ({ rel: relative(ROOT, f).replace(/\\/g, '/'), ...parse(f) }))
  .filter(c => c.fm.type);                       // OKF conformance: `type` is required
const isSuburb = c => /^docs\/medical\/dental\/[a-z0-9-]+-[a-z]{2,3}\.md$/.test(c.rel);   // one concept per suburb
const core = concepts.filter(c => !isSuburb(c));
const dental = concepts.filter(isSuburb).sort((a, b) => a.fm.title.localeCompare(b.fm.title));

const line = c => `- [${c.fm.title}](${ORIGIN}/${c.rel})${c.fm.description ? ': ' + c.fm.description : ''}`;
const dentalLine = c => `- [${c.fm.title}](${ORIGIN}/${c.rel}): ${c.clinics} clinic(s), checked ${(c.fm.last_verified || c.fm.timestamp || '').slice(0, 10)} · HTML: ${ORIGIN}/medical/dental/${c.rel.replace(/^docs\/medical\/dental\/|-[a-z]{2,3}\.md$/g, '')}/`;

const index = `# Australia.md — Sovereign Knowledge Archive

> Curated, source-verified knowledge about Australia, published as an Open Knowledge Format (OKF v0.1) bundle: Markdown concepts with YAML frontmatter under /docs/. Every HTML page links its source .md via <link rel="alternate" type="text/markdown">. Licence: AGPL-3.0-or-later. Facts carry Last Verified dates; nothing is inferred beyond the cited sources.

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
writeFileSync(join(ROOT, 'llms-full.txt'), index + '\n\n---\n\n' + concepts.map(c => `<!-- ${ORIGIN}/${c.rel} -->\n${c.body.trim()}`).join('\n\n---\n\n') + '\n');
console.log(`llms.txt: ${core.length} core + ${dental.length} dental concepts`);
