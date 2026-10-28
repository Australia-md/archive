#!/usr/bin/env node
// scripts/seo-validate.mjs — run from the repo root: `npm run seo:validate`
//
// Release gate for the generated site. Every check here exists because the defect it
// catches actually shipped (or nearly shipped) once; see the "Lessons" note in
// HTML_template.md §14. The nightly job must not push when this exits non-zero, and CI
// (.github/workflows/seo-validate.yml) runs it on every pull request.
//
// Checks
//  1. Dental pages: JSON-LD parses; no unfilled template placeholders; clinic cards = source
//     clinics = hero-label count.
//  2. Claims vs source: "N with confirmed opening hours" and "N open on Saturdays" never exceed
//     what the source supports (disputed schedules and closed/appointment-only Saturdays excluded).
//  3. Snippet control: data-nosnippet only on <span>, <div> or <section> (Google ignores it
//     elsewhere); every breadcrumb <nav> sits inside a data-nosnippet wrapper.
//  4. Hub: every suburb directory has exactly one hub entry and every hub entry has a directory.
//  5. sitemap.xml: well-formed shape, every <loc> exists on disk, every page is listed, no
//     duplicates, valid per-URL lastmod (not one date for everything).
//  6. llms.txt / llms-full.txt: every australia.md URL exists on disk; no relative Markdown links
//     in llms-full.txt (bodies are concatenated, so relative links would resolve wrongly).
//  7. OKF bundle (docs/): every non-reserved .md has frontmatter with a non-empty `type`;
//     index.md/log.md carry no frontmatter, except an `okf_version`-only block on docs/index.md.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const ORIGIN = 'https://australia.md';
const DENTAL = join(ROOT, 'medical/dental');
const DOCS = join(ROOT, 'docs');
const failures = [];
const fail = (check, where, msg) => failures.push(`[${check}] ${where}: ${msg}`);
const read = (p) => readFileSync(p, 'utf8');

const HAS_TIME = /\d\s*(?:am|pm)|\d{1,2}:\d{2}/i;
const DISPUTED = /\b(?:conflict\w*|varied|vary|varies|differ\w*|inconsisten\w*|discrepan\w*)\b/i;
const satOpen = (h) => h.split(/[·;|,]/).some((s) => /\bSat(?:urday)?s?\b/i.test(s) && HAS_TIME.test(s) && !/appointment|closed|not confirmed/i.test(s));

const EXCLUDE = /^(node_modules|dist|_to_delete|australia\.md-audit|debugImage|worker|src|specs|docs|scripts)(\/|$)/;
function pages(dir = ROOT, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n), rel = relative(ROOT, p);
    if (n.startsWith('.') || EXCLUDE.test(rel)) continue;
    if (statSync(p).isDirectory()) pages(p, out); else if (n === 'index.html') out.push(rel);
  }
  return out;
}
const allPages = pages();
const urlOf = (rel) => (rel === 'index.html' ? `${ORIGIN}/` : `${ORIGIN}/${rel.replace(/index\.html$/, '')}`);

// ── 1 + 2: dental pages vs their sources ────────────────────────────────────
const slugs = readdirSync(DENTAL).filter((d) => existsSync(join(DENTAL, d, 'index.html'))).sort();
for (const slug of slugs) {
  const where = `medical/dental/${slug}`;
  const html = read(join(DENTAL, slug, 'index.html'));
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) fail('1', where, 'no JSON-LD block');
  else { try { JSON.parse(ld[1]); } catch (e) { fail('1', where, `JSON-LD does not parse (${e.message})`); } }
  const ph = html.match(/\{(?:Suburb|STATE|Postcode|N|Clinic Name|suburb-slug|meta-description|LGA|YYYY-MM-DD)\}/);
  if (ph) fail('1', where, `unfilled placeholder ${ph[0]}`);

  const md = readdirSync(join(DOCS, 'medical/dental')).find((f) => new RegExp(`^${slug}-[a-z]{2,3}\\.md$`).test(f));
  if (!md) { fail('1', where, 'no OKF source .md'); continue; }
  const src = read(join(DOCS, 'medical/dental', md));
  const sections = src.split(/^### \d+\. /m).slice(1);
  const hours = sections.map((s) => (s.match(/\*\*Hours\*\*\s*\|\s*([^|\n]*)/) || [])[1] || '');
  const cards = (html.match(/<article\b[^>]*class="clinic-card\b/g) || []).length;
  if (cards !== sections.length) fail('1', where, `${cards} clinic cards but source lists ${sections.length}`);
  const label = (html.match(/class="verified-label"[^>]*>(\d+) Clinics?/) || [])[1];
  if (label && Number(label) !== cards) fail('1', where, `hero label says ${label} clinics, page has ${cards}`);

  const answer = (html.match(/<p class="listing-answer">([\s\S]*?)<\/p>/) || [, ''])[1].replace(/<[^>]+>/g, '');
  const okHours = hours.filter((h) => HAS_TIME.test(h) && !DISPUTED.test(h)).length;
  const okSat = hours.filter((h) => !DISPUTED.test(h) && satOpen(h)).length;
  const claimedH = Number((answer.match(/(\d+) with confirmed opening hours/) || [])[1] || (/with confirmed opening hours/.test(answer) ? 1 : 0));
  const claimedS = Number((answer.match(/(\d+) open on Saturdays/) || [])[1] || (/including Saturday hours/.test(answer) ? 1 : 0));
  if (claimedH > okHours) fail('2', where, `claims ${claimedH} clinic(s) with confirmed hours; source supports ${okHours}`);
  if (claimedS > okSat) fail('2', where, `claims ${claimedS} clinic(s) open on Saturdays; source supports ${okSat}`);
}

// ── 3: snippet control (site-wide) ──────────────────────────────────────────
for (const rel of allPages) {
  const html = read(join(ROOT, rel));
  for (const m of html.matchAll(/<([a-z][a-z0-9-]*)\b[^>]*\bdata-nosnippet\b[^>]*>/gi)) {
    if (!['span', 'div', 'section'].includes(m[1].toLowerCase())) fail('3', rel, `data-nosnippet on <${m[1]}> is ignored by Google (use span/div/section)`);
  }
  for (const m of html.matchAll(/<nav\b(?=[^>]*aria-label="Breadcrumb")[^>]*>/g)) {
    if (!/<(?:div|span|section)\b[^>]*\bdata-nosnippet\b[^>]*>\s*$/.test(html.slice(Math.max(0, m.index - 120), m.index))) fail('3', rel, 'breadcrumb <nav> is not inside a data-nosnippet wrapper');
  }
}

// ── 4: hub completeness ─────────────────────────────────────────────────────
const hub = read(join(DENTAL, 'index.html'));
const hubLinks = [...hub.matchAll(/<a\b(?=[^>]*class="suburb-dir-link")[^>]*\bhref="([^"/]+)\/"/g)].map((m) => m[1]);
for (const s of slugs) { const n = hubLinks.filter((h) => h === s).length; if (n !== 1) fail('4', 'medical/dental/index.html', `${s} appears ${n} times in the hub list (expected 1)`); }
for (const h of new Set(hubLinks)) if (!slugs.includes(h)) fail('4', 'medical/dental/index.html', `hub links to ${h}/ which has no page`);

// ── 5: sitemap ──────────────────────────────────────────────────────────────
const sm = read(join(ROOT, 'sitemap.xml'));
if (!/^<\?xml[^>]*\?>\s*<(urlset|sitemapindex)\b/.test(sm) || (sm.match(/<url>/g) || []).length !== (sm.match(/<\/url>/g) || []).length) fail('5', 'sitemap.xml', 'not a well-formed urlset/sitemapindex');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const lastmods = [...sm.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
if (new Set(locs).size !== locs.length) fail('5', 'sitemap.xml', 'duplicate <loc> entries');
for (const loc of locs) {
  if (!loc.startsWith(`${ORIGIN}/`)) { fail('5', 'sitemap.xml', `foreign URL ${loc}`); continue; }
  const path = loc.slice(ORIGIN.length + 1);
  if (path.endsWith('.md') || !existsSync(join(ROOT, path, path === '' ? 'index.html' : 'index.html'))) fail('5', 'sitemap.xml', `${loc} has no index.html on disk${path.endsWith('.md') ? ' (raw .md does not belong in the sitemap)' : ''}`);
}
for (const rel of allPages) if (!locs.includes(urlOf(rel))) fail('5', 'sitemap.xml', `${urlOf(rel)} is missing`);
if (lastmods.some((d) => !/^\d{4}-\d{2}-\d{2}$/.test(d))) fail('5', 'sitemap.xml', 'lastmod not in YYYY-MM-DD form');
if (locs.length > 10 && new Set(lastmods).size < 2) fail('5', 'sitemap.xml', 'every URL has the same lastmod (Google ignores that)');

// ── 6: llms files ───────────────────────────────────────────────────────────
for (const f of ['llms.txt', 'llms-full.txt']) {
  const t = read(join(ROOT, f));
  for (const u of new Set([...t.matchAll(/https:\/\/australia\.md\/([^\s)"'<>]*)/g)].map((m) => m[1].replace(/[.,;:]+$/, '')))) {
    const p = u.split('#')[0];
    const ok = p === '' || existsSync(join(ROOT, p)) && (p.endsWith('/') ? existsSync(join(ROOT, p, 'index.html')) : true);
    if (!ok) fail('6', f, `links to https://australia.md/${u}, which does not exist`);
  }
}
const full = read(join(ROOT, 'llms-full.txt'));
const relLinks = [...full.matchAll(/\]\(([^)\s]+)/g)].map((m) => m[1]).filter((h) => !/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(h));
if (relLinks.length) fail('6', 'llms-full.txt', `${relLinks.length} relative link(s), e.g. ${relLinks[0]}`);

// ── 7: OKF bundle conformance ───────────────────────────────────────────────
function mdFiles(dir, out = []) { for (const n of readdirSync(dir)) { const p = join(dir, n); if (statSync(p).isDirectory()) mdFiles(p, out); else if (n.endsWith('.md')) out.push(p); } return out; }
for (const f of mdFiles(DOCS)) {
  const rel = relative(ROOT, f), name = rel.split('/').pop();
  const raw = read(f);
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (name === 'index.md' || name === 'log.md') {
    if (!fm) continue;
    const keys = [...fm[1].matchAll(/^(\w+):/gm)].map((m) => m[1]);
    if (!(rel === 'docs/index.md' && keys.every((k) => k === 'okf_version'))) fail('7', rel, 'reserved file must not carry frontmatter (only okf_version on the bundle-root index.md)');
    continue;
  }
  if (!fm) { fail('7', rel, 'no YAML frontmatter'); continue; }
  if (!/^type:\s*"?[^"\s][^"\n]*"?\s*$/m.test(fm[1])) fail('7', rel, 'frontmatter has no non-empty `type`');
}

// ── Report ──────────────────────────────────────────────────────────────────
if (failures.length) {
  console.log(`seo:validate FAILED — ${failures.length} problem(s):`);
  for (const f of failures) console.log('  ' + f);
  process.exit(1);
}
console.log(`seo:validate passed — ${slugs.length} dental pages, ${allPages.length} site pages, ${locs.length} sitemap URLs checked.`);
