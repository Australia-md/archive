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
//   8. Every internal <a href> rewritten to a root-relative path (all site pages + 404.html)
//  10. Every nav version badge set to v{package.json version} (site-wide)
//   9. Clinic comparison table (2+ clinics), services clause in the answer paragraph, and the
//      national "Dental costs in Australia" block rendered from data/medicare-constants.json
//
// Facts come ONLY from each page's own OKF source (docs/medical/dental/{slug}-{state}.md)
// and from the page itself. Titles and meta descriptions are NOT touched.
//
// Flags:  --check   report what would change and exit 1 if anything would; write nothing
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { verificationDate } from './okf-frontmatter.mjs';

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
    date: verificationDate(fmBlock),   // latest verified[].at, else last_verified, else timestamp
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
    `      <li><a href="/medical/dental/${o.slug}/">${esc(o.suburb)} ${o.STATE} ${o.postcode}</a> <span class="nearby-meta">${o.N} ${plural(o.N, 'clinic', 'clinics')}${o.lga ? ' · ' + esc(o.lga) : ''}</span></li>`).join('\n');
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

// Internal links must be root-relative. Bing resolves a relative href against the slash-less form of
// the page URL (/medical/dental instead of /medical/dental/), so "berala/" became /medical/berala and
// "dental/" on /medical/ became /dental — both 404 (Bing Site Explorer, Oct 2026). Rewrite every
// relative <a href> to the absolute path it means from this file's own URL; /x/index.html → /x/.
function rootRelativeLinks(html, fileRel) {
  const base = new URL('/' + fileRel.replace(/(^|\/)index\.html$/, '$1'), ORIGIN);
  return html.replace(/(<a\b[^>]*?\bhref=")([^"]*)(")/g, (m, a, href, z) => {
    if (!href || /^(?:[a-z][a-z0-9+.-]*:|#|\/|\?)/i.test(href)) return m; // scheme (http/mailto/tel), anchor, already root-relative
    const u = new URL(href, base);
    if (u.origin !== ORIGIN) return m;
    return `${a}${u.pathname.replace(/(^|\/)index\.html$/, '$1')}${u.search}${u.hash}${z}`;
  });
}

// ── Information-gain modules ─────────────────────────────────────────────────
// (a) a clinic comparison table built from the page's own cards (2+ clinics only),
// (b) a "services listed" clause in the answer paragraph, and (c) a national
// "Dental costs in Australia" reference block rendered ONLY from data/medicare-constants.json.
// Nothing here is per-clinic pricing; no field is invented — every cell comes from a card or the constants file.
// Site version: package.json "version" is the single source; every nav badge shows `v{version}`.
const VERSION = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version;
const syncBadge = (html) => html.replace(/(<span\b[^>]*class="nav-badge"[^>]*>)[^<]*(<\/span>)/g, (_, a, b) => `${a}v${VERSION}${b}`);
const CONSTANTS_FILE = join(ROOT, 'data/medicare-constants.json');
const K = existsSync(CONSTANTS_FILE) ? JSON.parse(readFileSync(CONSTANTS_FILE, 'utf8')) : null;
const aud = (n) => '$' + Number(n).toLocaleString('en-AU');
const AHPRA_REGISTER = 'https://www.ahpra.gov.au/Registration/Registers-of-Practitioners.aspx';
const GENERIC_SERVICE = /^(?:general(?:\s+(?:dentistry|dental(?:\s+(?:care|services?))?|and family dentistry))?|family(?:\s+dentistry)?|check-?ups?(?:\s+and\s+cleans?)?|dental\s+services?|dental\s+service|preventive\s+(?:care|screenings?|dentistry)|consultations?)$/i;
const BRAND = /^(?:Invisalign|Myobrace|ClearCorrect|Botox|Zoom|CEREC)\b/;

function cardsOf(html) {
  return [...html.matchAll(/<article\b(?=[^>]*class="clinic-card)(?=[^>]*\bid="(clinic-\d+)")[^>]*>([\s\S]*?)<\/article>/g)].map((m) => ({
    id: m[1],
    name: ((m[2].match(/class="clinic-name"[^>]*>([^<]+)</) || [])[1] || '').trim(),
    practitioners: [...m[2].matchAll(/class="practitioner-name"[^>]*>([^<]+)</g)].map((x) => x[1].trim()),
    services: [...m[2].matchAll(/class="service-chip"[^>]*>([^<]+)</g)].map((x) => x[1].trim()),
  }));
}
function topServices(cards, max = 5) {
  const seen = new Map();
  cards.forEach((c, ci) => c.services.forEach((sv, si) => {
    const label = decodeHtml(sv);   // card text is already HTML-escaped; answerHtml escapes once on output
    if (GENERIC_SERVICE.test(label)) return;
    const k = label.toLowerCase();
    const e = seen.get(k) || { label, n: 0, first: ci * 1000 + si };
    e.n += 1; seen.set(k, e);
  }));
  return [...seen.values()].sort((a, b) => b.n - a.n || a.first - b.first).slice(0, max)
    .map((e) => (BRAND.test(e.label) || /^[A-Z]{2}/.test(e.label) ? e.label : e.label.charAt(0).toLowerCase() + e.label.slice(1)));
}
const decodeHtml = (t) => t.replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const joinList = (xs) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs.at(-1)}`);

function compareBlock(page, cards) {
  if (cards.length < 2) return '';
  const rows = cards.map((c) => `      <tr><th scope="row"><a href="#${c.id}">${c.name}</a></th><td>${c.services.length ? c.services.join(', ') : 'Not confirmed from public sources'}</td><td>${c.practitioners.length ? c.practitioners.join(', ') : `Not confirmed — check the <a href="${AHPRA_REGISTER}" target="_blank" rel="noopener noreferrer">AHPRA register</a>`}</td></tr>`).join('\n');
  return `<!-- clinic-compare:start (generated by scripts/seo-postprocess.mjs from this page's clinic cards — do not edit by hand) -->
<section class="clinic-compare" aria-labelledby="compare-heading">
  <h2 id="compare-heading" class="compare-title">Compare the ${cards.length} dental clinics in ${esc(page.suburb)} ${page.STATE} ${page.postcode}</h2>
  <div class="compare-scroll" role="region" aria-labelledby="compare-heading" tabindex="0">
  <table class="compare-table">
    <caption>From each clinic's public profile, checked ${fmtLong(page.date)}${page.lga ? `. Council area: ${esc(page.lga)}` : ''}. Fees are not published here — ask each clinic for a written quote.</caption>
    <thead><tr><th scope="col">Clinic</th><th scope="col">Services listed</th><th scope="col">Practitioners named in public sources</th></tr></thead>
    <tbody>
${rows}
    </tbody>
  </table>
  </div>
</section>
<!-- clinic-compare:end -->`;
}

function referenceBlock(page) {
  if (!K) return '';
  const c = K.cdbs, a = K.ada_items;
  const caps = [...c.caps].sort((x, y) => y.first_year - x.first_year);
  const capText = `Up to ${aud(caps[0].amount_aud)} per child over ${c.cap_period} when ${caps[0].first_year} is year one` + (caps[1] ? ` (${aud(caps[1].amount_aud)} when ${caps[1].first_year} is year one)` : '') + `. Indexed ${c.indexed}.`;
  const link = (s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>`;
  return `<!-- dental-reference:start (rendered by scripts/seo-postprocess.mjs from data/medicare-constants.json — do not edit by hand) -->
<section class="ref-module" aria-labelledby="ref-heading">
  <h2 id="ref-heading" class="ref-title">Dental costs in Australia: CDBS and ADA item numbers</h2>
  <p class="ref-lead">Medicare does not cover most dental care. Children may be covered by the ${esc(c.name)}; most adults pay the clinic directly, and private health insurance extras or state public dental services may help. This page does not publish clinic fees — ask ${esc(page.suburb)} clinics for a written quote that lists the item numbers below.</p>
  <table class="ref-table">
    <caption>${esc(c.name)} — national rules from Services Australia, last verified <time datetime="${K.last_verified}">${fmtLong(K.last_verified)}</time>.</caption>
    <tbody>
      <tr><th scope="row">Who can get it</th><td>${esc(c.eligibility)}</td></tr>
      <tr><th scope="row">Benefit cap</th><td>${capText}</td></tr>
      <tr><th scope="row">Covered</th><td>${c.covered.map(esc).join(', ')}</td></tr>
      <tr><th scope="row">Not covered</th><td>${c.not_covered.map(esc).join(', ')}</td></tr>
      <tr><th scope="row">Bulk billing</th><td>${esc(c.bulk_billing)}</td></tr>
    </tbody>
  </table>
  <table class="ref-table">
    <caption>Common item numbers from the Australian Dental Association schedule. They are not Medicare item numbers; CDBS claims for the same services use an 88 prefix.</caption>
    <thead><tr><th scope="col">ADA item</th><th scope="col">Service</th><th scope="col">CDBS item</th></tr></thead>
    <tbody>
${a.items.map((i) => `      <tr><th scope="row">${i.ada}</th><td>${esc(i.service)}</td><td>${i.cdbs}</td></tr>`).join('\n')}
    </tbody>
  </table>
  <p class="ref-source">Sources: ${[...c.sources, ...a.sources].map(link).join('; ')}. National reference descriptions only — not any clinic's fees.</p>
</section>
<!-- dental-reference:end -->`;
}

function answerHtml(page, N, services = []) {
  const loc = `<strong>${esc(page.suburb)} ${page.STATE} ${page.postcode}</strong>`;
  let t;
  if (N === 1) {
    const extra = [page.H ? 'with confirmed opening hours' : '', page.S ? 'including Saturday hours' : ''].filter(Boolean).join(' ');
    t = `<strong>1 dental clinic</strong> is listed in ${loc}${extra ? ', ' + extra : ''}.`;
  } else {
    t = `<strong>${N} dental clinics</strong> are listed in ${loc}${page.H ? `, ${page.H} with confirmed opening hours` : ''}${page.S ? `, ${page.S} open on Saturdays` : ''}.`;
  }
  const svc = services.length ? ` Services listed by ${N === 1 ? 'this clinic' : 'these clinics'} include ${esc(joinList(services))}.` : '';
  return `${t}${svc} Clinic details were checked against public sources on <time datetime="${page.date}">${fmtLong(page.date)}</time>.`;
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
  const cards = cardsOf(html);
  const answer = `<p class="listing-answer">${answerHtml(page, N, topServices(cards))}</p>`;
  if (/<p class="listing-answer">[\s\S]*?<\/p>/.test(html)) html = html.replace(/<p class="listing-answer">[\s\S]*?<\/p>/, answer);
  else html = html.replace(/(\n?)([ \t]*)(<p\b[^>]*class="listing-intro"[^>]*>)/, (_, nl, ws, tag) => `${nl}${ws}${answer}\n${ws}${tag}`);
  // 6. JSON-LD
  html = transformJsonLd(html, page, slug, warnings);
  // 7. nearby block (inside <main>, after the clinic cards)
  const block = nearbyBlock(page, nearby({ ...page, slug }, all));
  const markers = /<!-- nearby-suburbs:start[\s\S]*?<!-- nearby-suburbs:end -->\n?/;
  if (markers.test(html)) html = html.replace(markers, block ? block + '\n' : '');
  else if (block) html = html.replace(/<\/main>/, `${block}\n</main>`);
  // 8. clinic comparison table (top of <main>, 2+ clinics only)
  const cmp = compareBlock(page, cards);
  const cmpRe = /<!-- clinic-compare:start[\s\S]*?<!-- clinic-compare:end -->\n?/;
  if (cmpRe.test(html)) html = html.replace(cmpRe, cmp ? cmp + '\n' : '');
  else if (cmp) html = html.replace(/(<main\b[^>]*class="clinic-list"[^>]*>\n?)/, `$1${cmp}\n`);
  // 9. national dental-cost reference (end of <main>)
  const ref = referenceBlock(page);
  const refRe = /<!-- dental-reference:start[\s\S]*?<!-- dental-reference:end -->\n?/;
  if (refRe.test(html)) html = html.replace(refRe, ref ? ref + '\n' : '');
  else if (ref) html = html.replace(/<\/main>/, `${ref}\n</main>`);
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
  after = syncBadge(rootRelativeLinks(after, relative(ROOT, file)));
  for (const w of warnings) warnLines.push(`  ${page.slug}: ${w}`);
  if (after !== before) { changed.push(relative(ROOT, file)); if (!CHECK) writeFileSync(file, after); }
}

// Breadcrumb snippet control on every other site page (hubs, category pages).
const EXCLUDE = /^(node_modules|dist|_to_delete|australia\.md-audit|debugImage|worker|src|specs|docs|scripts|medical\/dental\/[^/]+\/)/; // suburb dirs are handled above; the hub itself is not excluded
function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n), rel = relative(ROOT, p);
    if (n.startsWith('.') || EXCLUDE.test(rel)) continue;
    if (statSync(p).isDirectory()) walk(p, out); else if (n === 'index.html') out.push(p);
  }
  return out;
}
for (const file of [...walk(ROOT), ...(existsSync(join(ROOT, '404.html')) ? [join(ROOT, '404.html')] : [])]) {
  const before = readFileSync(file, 'utf8');
  const after = syncBadge(rootRelativeLinks(addNosnippet(before), relative(ROOT, file)));
  if (after !== before) { changed.push(relative(ROOT, file)); if (!CHECK) writeFileSync(file, after); }
}

// Hub completeness check (the hub entry needs judgment for its service chips, so report, don't write).
const hub = readFileSync(join(DENTAL, 'index.html'), 'utf8');
const hubLinks = new Set([...hub.matchAll(/<a\b(?=[^>]*class="suburb-dir-link")[^>]*\bhref="(?:\/medical\/dental\/)?([a-z0-9-]+)\/"/g)].map((m) => m[1]));
const missingHub = slugs.filter((s) => !hubLinks.has(s));

console.log(`${CHECK ? '[check] ' : ''}dental pages: ${all.length}; files ${CHECK ? 'needing changes' : 'changed'}: ${changed.length}`);
if (missingSource.length) console.log(`WARN no OKF source for: ${missingSource.join(', ')}`);
if (!K) console.log('WARN data/medicare-constants.json missing — the dental-cost reference block was not rendered');
else {
  const yearNow = Number(new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' }).slice(0, 4));
  const latest = Math.max(...K.cdbs.caps.map((c) => c.first_year));
  if (yearNow > latest) console.log(`WARN CDBS cap for ${yearNow} is not in data/medicare-constants.json (latest ${latest}) — re-verify at Services Australia and update the file (owner action)`);
  if ((Date.now() - Date.parse(K.last_verified)) / 86400000 > 400) console.log(`WARN data/medicare-constants.json last verified ${K.last_verified} (> 400 days) — re-verify (owner action)`);
}
if (missingHub.length) console.log(`WARN missing from medical/dental/index.html hub list (add per HTML_template.md §13): ${missingHub.join(', ')}`);
if (warnLines.length) console.log('WARN page/source issues:\n' + warnLines.join('\n'));
if (CHECK && changed.length) process.exit(1);
