#!/usr/bin/env node
// scripts/seo-postprocess.mjs — run from the repo root: `npm run seo:postprocess`
//
// Idempotent post-processing for the generated dental suburb pages
// (medical/dental/{slug}/index.html). The nightly job generates each page from
// HTML_template.md, then runs this script, which enforces the parts that must be
// identical and data-exact on every page. Running it twice changes nothing.
//
//   1. <link rel="alternate" type="text/markdown"> to the OKF source in <head>
//   2. every breadcrumb <nav> wrapped in <div data-nosnippet> (dental pages, hubs, category pages)
//   3. "Raw .md" badge in the nav bar
//   4. Hero label: "{N} Clinics · {Suburb} · Postcode {P} · Checked {DD Mon YYYY}"
//   5. Answer-first paragraph (.listing-answer) before .listing-intro
//   6. JSON-LD: Dentist @id, ItemList, MedicalWebPage.mainEntity, Dataset.distribution
//   7. "Same council area and nearby postcodes" internal-link block (between markers)
//
// Facts come ONLY from each page's own OKF source (docs/medical/dental/{slug}-{state}.md)
// and from the page itself. Titles and meta descriptions are NOT touched.
//
// Flags:  --check   report what would change and exit 1 if anything would; write nothing
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const ORIGIN = 'https://australia.md';
const CHECK = process.argv.includes('--check');
const DENTAL = join(ROOT, 'medical/dental');
const DOCS = join(ROOT, 'docs/medical/dental');
const NEARBY_MAX = 6;
const NEARBY_POSTCODE_SPAN = 20;   // "nearby postcode" = within ±20 of this page's postcode

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmtShort = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).replace(/\./g, '');
const fmtLong = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const plural = (n, one, many) => (n === 1 ? one : many);

// ── Source facts ─────────────────────────────────────────────────────────────
const HAS_TIME = /\d\s*(?:am|pm)|\d{1,2}:\d{2}/i;
const DISPUTED = /\b(?:conflict\w*|varied|vary|varies|differ\w*|inconsisten\w*|discrepan\w*)\b/i;
const saturdayOpen = (h) => h.split(/[·;|,]/).some((seg) => /\bSat(?:urday)?s?\b/i.test(seg) && HAS_TIME.test(seg) && !/appointment|closed|not confirmed/i.test(seg));
function sourceFor(slug) {
  const md = readdirSync(DOCS).find((f) => new RegExp(`^${slug.replace(/[-]/g, '\\-')}-([a-z]{2,3})\\.md$`).test(f));
  if (!md) return null;
  const raw = readFileSync(join(DOCS, md), 'utf8');
  const fmBlock = (raw.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [, ''])[1];
  const fm = Object.fromEntries([...fmBlock.matchAll(/^(\w+):\s*"?([^"\n]*)"?\s*$/gm)].map((m) => [m[1], m[2].trim()]));
  const sections = raw.split(/^### \d+\. /m).slice(1);
  const hours = sections.map((s) => (s.match(/\*\*Hours\*\*\s*\|\s*([^|\n]*)/) || [])[1] || '');
  // A schedule the source itself calls conflicting/varying is not "confirmed", and a Saturday that is
  // closed or appointment-only is not "open on Saturdays".
  const council = ((raw.match(/Council:\s*([^·*|\n]+)/) || [])[1] || '').trim();
  const state = md.match(/-([a-z]{2,3})\.md$/)[1];
  return {
    md, state, STATE: state.toUpperCase(),
    suburb: fm.suburb || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    postcode: fm.postcode || ((raw.match(/Postcode\s+(\d{4})/) || [])[1] || ''),
    lga: fm.lga || council,
    date: (fm.last_verified || fm.timestamp || '').slice(0, 10),
    N: sections.length,
    H: hours.filter((h) => HAS_TIME.test(h) && !DISPUTED.test(h)).length,
    S: hours.filter((h) => !DISPUTED.test(h) && saturdayOpen(h)).length,
  };
}

// ── Nearby block ─────────────────────────────────────────────────────────────
// Council names are spelled inconsistently across sources ("Canterbury Bankstown" vs
// "City of Canterbury-Bankstown", "Cessnock City Council"), so compare a normalised key.
const lgaKey = (s) => s.toLowerCase().replace(/\b(the|city|of|council|shire|municipal|municipality|regional|local|government|area)\b/g, ' ').replace(/[^a-z0-9]+/g, '');
const lgaKeys = (lga) => lga.split(/\s*\/\s*|\s+and\s+|,\s*/i).map(lgaKey).filter(Boolean);
function nearby(page, all) {
  const pc = Number(page.postcode);
  const keys = new Set(lgaKeys(page.lga));
  const others = all.filter((o) => o.slug !== page.slug && o.N > 0);
  const dist = (o) => Math.abs(Number(o.postcode) - pc);
  const byDist = (a, b) => dist(a) - dist(b) || a.suburb.localeCompare(b.suburb);
  const same = others.filter((o) => lgaKeys(o.lga).some((k) => keys.has(k))).sort(byDist);
  const near = others.filter((o) => !same.includes(o) && Number.isFinite(pc) && dist(o) <= NEARBY_POSTCODE_SPAN).sort(byDist);
  return [...same, ...near].slice(0, NEARBY_MAX);
}
function nearbyBlock(page, list) {
  if (!list.length) return '';
  const items = list.map((o) =>
    `      <li><a href="../${o.slug}/">${esc(o.suburb)} ${o.STATE} ${o.postcode}</a> <span class="nearby-meta">${o.N} ${plural(o.N, 'clinic', 'clinics')}${o.lga ? ' · ' + esc(o.lga) : ''}</span></li>`).join('\n');
  return `<!-- nearby-suburbs:start (generated by scripts/seo-postprocess.mjs — do not edit by hand) -->
<section class="nearby-suburbs" aria-labelledby="nearby-heading">
  <h2 id="nearby-heading" class="nearby-title">Dental clinics in the same council area and nearby postcodes</h2>
  <ul class="nearby-list" role="list">
${items}
  </ul>
</section>
<!-- nearby-suburbs:end -->`;
}

// ── Page transforms ──────────────────────────────────────────────────────────
const tagWith = (tag, attr) => new RegExp(`<${tag}\\b(?=[^>]*${attr})[^>]*>`);

// Google honours data-nosnippet only on <span>, <div> and <section> — not on <nav>
// (developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
// So each breadcrumb <nav> is wrapped in <div class="nosnippet-wrap" data-nosnippet> (display: contents in
// style.css, so layout is unchanged) and any data-nosnippet left on the <nav> itself is removed.
const WRAP_OPEN = '<div class="nosnippet-wrap" data-nosnippet>';
function addNosnippet(html) {
  html = html.replace(/<nav\b(?=[^>]*aria-label="Breadcrumb")[^>]*>/g, (t) => t.replace(/\s+data-nosnippet\b(?:="[^"]*")?/, ''));
  const re = /<nav\b(?=[^>]*aria-label="Breadcrumb")[^>]*>/g;
  let out = '', from = 0, m;
  while ((m = re.exec(html))) {
    const end = html.indexOf('</nav>', m.index);
    if (end === -1) break;
    if (html.slice(Math.max(0, m.index - WRAP_OPEN.length - 4), m.index).trimEnd().endsWith(WRAP_OPEN)) continue; // already wrapped
    out += html.slice(from, m.index) + WRAP_OPEN + html.slice(m.index, end + 6) + '</div>';
    from = end + 6;
    re.lastIndex = from;
  }
  return out + html.slice(from);
}

function answerHtml(page, N) {
  const loc = `<strong>${esc(page.suburb)} ${page.STATE} ${page.postcode}</strong>`;
  let t;
  if (N === 1) {
    const extra = [page.H ? 'with confirmed opening hours' : '', page.S ? 'including Saturday hours' : ''].filter(Boolean).join(' ');
    t = `<strong>1 dental clinic</strong> is listed in ${loc}${extra ? ', ' + extra : ''}.`;
  } else {
    t = `<strong>${N} dental clinics</strong> are listed in ${loc}${page.H ? `, ${page.H} with confirmed opening hours` : ''}${page.S ? `, ${page.S} open on Saturdays` : ''}.`;
  }
  return `${t} Clinic details were checked against public sources on <time datetime="${page.date}">${fmtLong(page.date)}</time>.`;
}

function transformJsonLd(html, page, slug, warnings) {
  const re = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
  const m = html.match(re);
  if (!m) { warnings.push('no JSON-LD block'); return html; }
  let data;
  try { data = JSON.parse(m[2]); } catch (e) { warnings.push('JSON-LD does not parse: ' + e.message); return html; }
  const url = `${ORIGIN}/medical/dental/${slug}/`;
  const graph = Array.isArray(data['@graph']) ? data['@graph'] : [];
  let i = 0;
  const out = [];
  for (const node of graph) {
    if (node['@type'] === 'ItemList') continue;                       // rebuilt below
    if (node['@type'] === 'Dentist') {
      const { ['@type']: t, ['@id']: _old, ...rest } = node;
      out.push({ '@type': t, '@id': `${url}#dentist-${++i}`, ...rest });
      continue;
    }
    if (node['@type'] === 'MedicalWebPage') node.mainEntity = { '@id': `${url}#clinics` };
    if (node['@type'] === 'Dataset') {
      node.isAccessibleForFree = true;
      node.distribution = { '@type': 'DataDownload', encodingFormat: 'text/markdown', contentUrl: `${ORIGIN}/docs/medical/dental/${slug}-${page.state}.md` };
    }
    out.push(node);
  }
  const itemList = {
    '@type': 'ItemList', '@id': `${url}#clinics`, name: `Dental clinics in ${page.suburb} ${page.STATE} ${page.postcode}`,
    numberOfItems: i, itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: Array.from({ length: i }, (_, k) => ({ '@type': 'ListItem', position: k + 1, url: `${url}#clinic-${k + 1}`, item: { '@id': `${url}#dentist-${k + 1}` } })),
  };
  const faqAt = out.findIndex((n) => n['@type'] === 'FAQPage');
  out.splice(faqAt === -1 ? out.length : faqAt, 0, itemList);
  data['@graph'] = out;
  const json = JSON.stringify(data, null, 2).replace(/<\//g, '<\\/');
  return html.replace(re, (_, a, __, c) => `${a}\n${json}\n  ${c}`);
}

function transformDental(html, slug, page, all, warnings) {
  const N = (html.match(/<article\b[^>]*class="clinic-card\b/g) || []).length;
  if (N !== page.N) warnings.push(`page has ${N} clinic cards but source lists ${page.N} (regenerate this page from its source)`);
  const mdHref = `../../../docs/medical/dental/${slug}-${page.state}.md`;

  // 1. head alternate link
  if (!/<link\b(?=[^>]*type="text\/markdown")[^>]*>/.test(html.slice(0, html.indexOf('</head>')))) {
    html = html.replace(tagWith('link', 'rel="canonical"'), (t) => `${t}\n  <link rel="alternate" type="text/markdown" href="${ORIGIN}/docs/medical/dental/${slug}-${page.state}.md" title="OKF source (Markdown)" />`);
  }
  // 3. nav badge
  if (!html.includes('class="nav-raw-md"')) {
    html = html.replace(/(<span\b[^>]*class="nav-badge"[^>]*>[^<]*<\/span>)/, `$1\n      <a href="${mdHref}" class="nav-raw-md" rel="alternate" type="text/markdown" aria-label="View the raw Markdown source of this page (for AI agents and LLMs)">Raw .md</a>`);
  }
  // 4. hero label
  const label = `${N} ${plural(N, 'Clinic', 'Clinics')} · ${esc(page.suburb)} · Postcode ${page.postcode} · Checked ${fmtShort(page.date)}`;
  html = html.replace(/(<span\b[^>]*class="verified-label"[^>]*>)[^<]*(<\/span>)/, (_, a, b) => `${a}${label}${b}`);
  // 5. answer-first paragraph
  const answer = `<p class="listing-answer">${answerHtml(page, N)}</p>`;
  if (/<p class="listing-answer">[\s\S]*?<\/p>/.test(html)) html = html.replace(/<p class="listing-answer">[\s\S]*?<\/p>/, answer);
  else html = html.replace(/(\n?)([ \t]*)(<p\b[^>]*class="listing-intro"[^>]*>)/, (_, nl, ws, tag) => `${nl}${ws}${answer}\n${ws}${tag}`);
  // 6. JSON-LD
  html = transformJsonLd(html, page, slug, warnings);
  // 7. nearby block (inside <main>, after the clinic cards)
  const block = nearbyBlock(page, nearby({ ...page, slug }, all));
  const markers = /<!-- nearby-suburbs:start[\s\S]*?<!-- nearby-suburbs:end -->\n?/;
  if (markers.test(html)) html = html.replace(markers, block ? block + '\n' : '');
  else if (block) html = html.replace(/<\/main>/, `${block}\n</main>`);
  return html;
}

// ── Run ──────────────────────────────────────────────────────────────────────
const slugs = readdirSync(DENTAL).filter((d) => existsSync(join(DENTAL, d, 'index.html'))).sort();
const all = [];
const missingSource = [];
for (const slug of slugs) {
  const s = sourceFor(slug);
  if (s) all.push({ slug, ...s }); else missingSource.push(slug);
}

const changed = [], warnLines = [];
for (const page of all) {
  const file = join(DENTAL, page.slug, 'index.html');
  const before = readFileSync(file, 'utf8');
  const warnings = [];
  let after = transformDental(before, page.slug, page, all, warnings);
  after = addNosnippet(after);
  for (const w of warnings) warnLines.push(`  ${page.slug}: ${w}`);
  if (after !== before) { changed.push(relative(ROOT, file)); if (!CHECK) writeFileSync(file, after); }
}

// Breadcrumb snippet control on every other site page (hubs, category pages).
const EXCLUDE = /^(node_modules|dist|_to_delete|australia\.md-audit|debugImage|worker|src|specs|docs|medical\/dental\/[^/]+)(\/|$)/;
function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n), rel = relative(ROOT, p);
    if (n.startsWith('.') || EXCLUDE.test(rel)) continue;
    if (statSync(p).isDirectory()) walk(p, out); else if (n === 'index.html') out.push(p);
  }
  return out;
}
for (const file of walk(ROOT)) {
  const before = readFileSync(file, 'utf8');
  const after = addNosnippet(before);
  if (after !== before) { changed.push(relative(ROOT, file)); if (!CHECK) writeFileSync(file, after); }
}

// Hub completeness check (the hub entry needs judgment for its service chips, so report, don't write).
const hub = readFileSync(join(DENTAL, 'index.html'), 'utf8');
const hubLinks = new Set([...hub.matchAll(/<a\b(?=[^>]*class="suburb-dir-link")[^>]*\bhref="([^"/]+)\/"/g)].map((m) => m[1]));
const missingHub = slugs.filter((s) => !hubLinks.has(s));

console.log(`${CHECK ? '[check] ' : ''}dental pages: ${all.length}; files ${CHECK ? 'needing changes' : 'changed'}: ${changed.length}`);
if (missingSource.length) console.log(`WARN no OKF source for: ${missingSource.join(', ')}`);
if (missingHub.length) console.log(`WARN missing from medical/dental/index.html hub list (add per HTML_template.md §13): ${missingHub.join(', ')}`);
if (warnLines.length) console.log('WARN page/source issues:\n' + warnLines.join('\n'));
if (CHECK && changed.length) process.exit(1);
