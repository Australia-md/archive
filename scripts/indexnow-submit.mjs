#!/usr/bin/env node
// scripts/indexnow-submit.mjs — submit changed, live URLs to IndexNow (Bing, Yandex, Seznam, …)
// and record them in updateBingIndex.md.
//
// Run by .github/workflows/indexnow.yml after main changes; can also be run by hand.
//
//   node scripts/indexnow-submit.mjs [--dry-run] [--wait-live <seconds>]
//
// Rules (same as the ledger's "Submission Rules"):
//   • Source of truth is sitemap.xml in this checkout.
//   • A URL is a candidate when it is not in the ledger, or its sitemap <lastmod> differs from the
//     ledger's "Sitemap lastmod at submission".
//   • Only URLs that return HTTP 200 on the live site are submitted (an undeployed page is skipped
//     and picked up by a later run).
//   • --wait-live N: first wait up to N seconds until the live sitemap.xml matches this checkout's,
//     i.e. GitHub Pages has deployed this commit. If it never matches, exit 1 without submitting.
// Google does not support IndexNow; Google discovers changes from sitemap.xml.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const HOST = 'australia.md';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const LEDGER = join(ROOT, 'updateBingIndex.md');
const DRY = process.argv.includes('--dry-run');
const waitArg = process.argv.indexOf('--wait-live');
const WAIT = waitArg === -1 ? 0 : Number(process.argv[waitArg + 1] || 0);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => s.replace(/\s+/g, ' ').trim();

// Key: the single 32-hex .txt file at the repo root (its content must equal its name).
const keyFile = readdirSync(ROOT).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.error('No IndexNow key file (32-hex .txt) at the repo root.'); process.exit(1); }
const KEY = keyFile.slice(0, 32);
const KEY_URL = `${ORIGIN}/${keyFile}`;

const sitemap = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
const entries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => ({ url: m[1], lastmod: m[2] }));

// Ledger rows: | URL | lastmod | submitted | method | response | rule |
const ledger = readFileSync(LEDGER, 'utf8');
const rowRe = /^\| (https:\/\/australia\.md\/[^ |]*) \| ([^|]*?) \| ([^|]*?) \| ([^|]*?) \| ([^|]*?) \| ([^|]*?) \|$/gm;
const historyStart = ledger.indexOf('## Submission History');
const historyEnd = ledger.indexOf('\n## ', historyStart + 5);
const history = ledger.slice(historyStart, historyEnd === -1 ? undefined : historyEnd);
const recorded = new Map([...history.matchAll(rowRe)].map((m) => [m[1], m[2].trim()]));

const candidates = entries.filter((e) => recorded.get(e.url) !== e.lastmod);
console.log(`sitemap: ${entries.length} URLs; ledger: ${recorded.size} rows; candidates (new or lastmod changed): ${candidates.length}`);
if (!candidates.length) process.exit(0);

async function liveText(url) {
  const res = await fetch(url, { redirect: 'follow', headers: { 'cache-control': 'no-cache' } });
  return { status: res.status, text: res.ok ? await res.text() : '' };
}

if (WAIT > 0) {
  const deadline = Date.now() + WAIT * 1000;
  for (;;) {
    const live = await liveText(`${ORIGIN}/sitemap.xml?nocache=${Date.now()}`).catch(() => ({ status: 0, text: '' }));
    if (live.status === 200 && norm(live.text) === norm(sitemap)) { console.log('live sitemap matches this commit — deployed'); break; }
    if (Date.now() > deadline) { console.error(`live sitemap still differs after ${WAIT}s — deploy not live; nothing submitted`); process.exit(1); }
    await sleep(30000);
  }
}

const key = await liveText(KEY_URL).catch(() => ({ status: 0, text: '' }));
if (key.status !== 200 || key.text.trim() !== KEY) { console.error(`key file ${KEY_URL} not live with the expected key (HTTP ${key.status}); nothing submitted`); process.exit(1); }

const live = [], skipped = [];
for (const c of candidates) {
  const res = await fetch(c.url, { method: 'GET', redirect: 'manual' }).catch(() => ({ status: 0 }));
  (res.status === 200 ? live : skipped).push({ ...c, status: res.status });
}
if (skipped.length) console.log(`skipped (not HTTP 200 live): ${skipped.map((s) => `${s.url} [${s.status}]`).join(', ')}`);
if (!live.length) { console.log('no live candidates — nothing to submit'); process.exit(0); }
if (DRY) { console.log(`[dry-run] would submit ${live.length} URL(s):\n  ` + live.map((l) => l.url).join('\n  ')); process.exit(0); }

const now = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
const results = [];
for (let i = 0; i < live.length; i += 10000) {
  const batch = live.slice(i, i + 10000);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_URL, urlList: batch.map((b) => b.url) }),
  });
  results.push({ batch, status: res.status, body: (await res.text()).slice(0, 300) });
}
const failed = results.filter((r) => r.status !== 200 && r.status !== 202);
for (const r of failed) console.error(`IndexNow HTTP ${r.status}: ${r.body}`);

// Record accepted submissions in the ledger (update the row in place, or append to the history table).
let out = ledger;
const RULE = 'Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes';
const appended = [];
for (const r of results.filter((x) => x.status === 200 || x.status === 202)) {
  const response = r.status === 200 ? 'HTTP 200 OK' : 'HTTP 202 Accepted';
  for (const b of r.batch) {
    const row = `| ${b.url} | ${b.lastmod} | ${now} | Bulk POST to api.indexnow.org/IndexNow | ${response} | ${RULE} |`;
    const existing = new RegExp(`^\\| ${b.url.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')} \\|.*$`, 'm');
    const hs = out.indexOf('## Submission History'), he = out.indexOf('\n## ', hs + 5);
    const section = out.slice(hs, he === -1 ? undefined : he);
    if (existing.test(section)) out = out.slice(0, hs) + section.replace(existing, row) + (he === -1 ? '' : out.slice(he));
    else appended.push(row);
  }
}
if (appended.length) {
  const hs = out.indexOf('## Submission History'), he = out.indexOf('\n## ', hs + 5);
  const insertAt = he === -1 ? out.length : he;
  out = out.slice(0, insertAt).replace(/\n*$/, '\n') + appended.join('\n') + '\n' + out.slice(insertAt);
}
writeFileSync(LEDGER, out);
const ok = results.filter((r) => r.status === 200 || r.status === 202).reduce((n, r) => n + r.batch.length, 0);
console.log(`submitted ${ok} URL(s) to IndexNow at ${now}; ledger updated (${appended.length} new row(s))`);
if (failed.length) process.exit(1);
