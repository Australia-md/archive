#!/usr/bin/env node
// scripts/build-sitemap.mjs — run from the repo root: `npm run seo:sitemap`
// Generates sitemap.xml (and sitemap-N.xml + sitemap-index.xml when > 50,000 URLs or > 50 MB)
// from the HTML pages on disk. <lastmod> is PER URL:
//   1. dental pages  → verification date of the matching docs/medical/dental/*.md: latest `verified[].at`,
//                      else `last_verified`, else `timestamp` (scripts/okf-frontmatter.mjs)
//   2. /medical/dental-costs/ → `last_verified` of data/medicare-constants.json (the facts it shows)
//   3. everything else → the date its VISIBLE MAIN TEXT last changed: walk the file's git history
//      and stop at the first version whose text differs. Site chrome (header, footer, breadcrumbs,
//      version badge), markup, attributes, scripts and JSON-LD are ignored, so template-only edits
//      (link rewrites, nosnippet wrappers, a version bump) do not move lastmod. Google: lastmod should
//      reflect "the last significant update to the page" and is used only if consistently accurate.
//      Uncommitted text change → today.
//   4. fallback → file mtime
// Never the build date: identical lastmod values across all URLs are ignored by Google.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { execSync } from 'node:child_process';
import { frontmatterBlock, verificationDate } from './okf-frontmatter.mjs';

const ROOT = process.cwd();
const ORIGIN = 'https://australia.md';
const EXCLUDE = /^(node_modules|dist|_to_delete|australia\.md-audit|debugImage|worker|src|specs|docs|scripts)(\/|$)|^404\.html$/;
const MAX_URLS = 50000, MAX_BYTES = 50 * 1024 * 1024;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name), rel = relative(ROOT, p);
    if (EXCLUDE.test(rel) || name.startsWith('.')) continue;
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(rel);
  }
  return out;
}

function frontmatterDate(mdPath) {
  if (!existsSync(mdPath)) return null;
  return verificationDate(frontmatterBlock(readFileSync(mdPath, 'utf8'))) || null;
}

const TODAY = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });
const sh = (cmd) => execSync(cmd, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });

// Visible main text: what a reader sees as the page's content, excluding site chrome and markup.
function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ')
    .replace(/<header\b(?=[^>]*(?:id="main-header"|class="[^"]*\b(?:nav-bar|site-header)\b))[^>]*>[\s\S]*?<\/header>/g, ' ')
    .replace(/<footer\b[\s\S]*?<\/footer>/g, ' ')
    .replace(/<nav\b(?=[^>]*aria-label="Breadcrumb")[^>]*>[\s\S]*?<\/nav>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function contentDate(file) {
  try {
    const current = visibleText(readFileSync(join(ROOT, file), 'utf8'));
    const log = sh(`git log --format="%H %cs" -- "${file}"`).trim().split('\n').filter(Boolean).map((l) => l.split(' '));
    if (!log.length) return null;
    const at = (sha) => { try { return visibleText(sh(`git show ${sha}:"${file}"`)); } catch { return null; } };
    if (at(log[0][0]) !== current) return TODAY;                 // uncommitted change to the text
    let date = log[0][1];
    for (let i = 1; i < log.length; i++) {                        // go back while the text is unchanged
      if (at(log[i][0]) !== current) break;
      date = log[i][1];
    }
    return date;
  } catch { return null; }
}
const COSTS_CONSTANTS = join(ROOT, 'data/medicare-constants.json');

function lastmod(rel) {
  const dental = rel.match(/^medical\/dental\/([^/]+)\/index\.html$/);
  if (dental) {
    const slug = dental[1];
    const md = readdirSync(join(ROOT, 'docs/medical/dental')).find(f => new RegExp(`^${slug}-[a-z]{2,3}\\.md$`).test(f)); // exact: 'balgowlah' must not match 'balgowlah-heights-nsw.md'
    const d = md && frontmatterDate(join(ROOT, 'docs/medical/dental', md));
    if (d) return d;
  }
  if (rel === 'medical/dental-costs/index.html' && existsSync(COSTS_CONSTANTS)) {
    const d = JSON.parse(readFileSync(COSTS_CONSTANTS, 'utf8')).last_verified;
    if (/^\d{4}-\d{2}-\d{2}$/.test(d || '')) return d;
  }
  return contentDate(rel) || statSync(join(ROOT, rel)).mtime.toISOString().slice(0, 10);
}

function priority(rel) {
  if (rel === 'index.html') return '1.0';
  const depth = rel.split('/').length - 1;
  return depth === 1 ? '0.8' : depth === 2 ? '0.7' : '0.6';
}

const urls = walk(ROOT).map(rel => {
  const loc = rel === 'index.html' ? `${ORIGIN}/` : `${ORIGIN}/${dirname(rel)}/`;
  return { loc, lastmod: lastmod(rel), priority: priority(rel) };
}).sort((a, b) => a.loc.localeCompare(b.loc));

const esc = s => s.replace(/&/g, '&amp;');
const render = list => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  list.map(u => `  <url>\n    <loc>${esc(u.loc)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n') + '\n</urlset>\n';

// Split when over the protocol limits.
const chunks = [];
for (let i = 0; i < urls.length; i += MAX_URLS) {
  let part = urls.slice(i, i + MAX_URLS);
  while (Buffer.byteLength(render(part)) > MAX_BYTES) part = part.slice(0, Math.floor(part.length * 0.9));
  chunks.push(part);
  i += part.length - MAX_URLS; // advance by what actually fit
}

if (chunks.length === 1) {
  writeFileSync(join(ROOT, 'sitemap.xml'), render(chunks[0]));
} else {
  chunks.forEach((c, i) => writeFileSync(join(ROOT, `sitemap-${i + 1}.xml`), render(c)));
  writeFileSync(join(ROOT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    chunks.map((_, i) => `  <sitemap>\n    <loc>${ORIGIN}/sitemap-${i + 1}.xml</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`).join('\n') +
    '\n</sitemapindex>\n');
}
console.log(`sitemap: ${urls.length} URLs in ${chunks.length} file(s); distinct lastmod values: ${new Set(urls.map(u => u.lastmod)).size}`);
