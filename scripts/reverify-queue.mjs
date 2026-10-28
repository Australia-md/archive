#!/usr/bin/env node
// scripts/reverify-queue.mjs — re-verification queue shared with the OpenClaw research job.
//
// The website's copy of each source (docs/medical/dental/{suburb}-{state}.md) is the
// published truth, so the website job decides which suburb is due for re-verification.
// OpenClaw reads {handoff}/reverify-next.json on even-numbered days and researches it.
//
//   node scripts/reverify-queue.mjs next   --handoff <dir> [--min-age-days 90] [--cooldown-days 30]
//   node scripts/reverify-queue.mjs record --handoff <dir> --key <suburb>-<state> --result <success|no_clinics|research_failed>
//
// Files in <handoff>: reverify-next.json (written/removed by `next`), reverify-log.json (appended by `record`).
import { readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { verificationDate } from './okf-frontmatter.mjs';

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name, dflt) => { const i = args.indexOf(`--${name}`); return i === -1 ? dflt : args[i + 1]; };
const HANDOFF = opt('handoff');
if (!['next', 'record'].includes(cmd) || !HANDOFF) { console.error('usage: reverify-queue.mjs next|record --handoff <dir> ...'); process.exit(2); }

const ROOT = process.cwd();
const DOCS = join(ROOT, 'docs/medical/dental');
const LOG = join(HANDOFF, 'reverify-log.json');
const NEXT = join(HANDOFF, 'reverify-next.json');
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' }); // YYYY-MM-DD
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
const readLog = () => (existsSync(LOG) ? JSON.parse(readFileSync(LOG, 'utf8')) : { attempts: [] });

if (cmd === 'record') {
  const key = opt('key'), result = opt('result');
  if (!/^[a-z0-9-]+-[a-z]{2,3}$/.test(key || '') || !['success', 'no_clinics', 'research_failed'].includes(result)) {
    console.error('record needs --key <suburb>-<state> and --result success|no_clinics|research_failed'); process.exit(2);
  }
  const log = readLog();
  log.attempts.push({ key, date: today, result });
  writeFileSync(LOG, JSON.stringify(log, null, 2) + '\n');
  console.log(`recorded ${key} ${result} ${today}`);
  process.exit(0);
}

// next
const minAge = Number(opt('min-age-days', 90)), cooldown = Number(opt('cooldown-days', 30));
const recent = new Set(readLog().attempts.filter((a) => daysBetween(a.date, today) < cooldown).map((a) => a.key));
const pendingDir = join(HANDOFF, 'pending');
const pendingReverify = existsSync(pendingDir) && readdirSync(pendingDir).some((f) => /--reverify-.*\.json$/.test(f));

const candidates = [];
for (const f of readdirSync(DOCS)) {
  const m = f.match(/^([a-z0-9-]+)-([a-z]{2,3})\.md$/);
  if (!m || !existsSync(join(ROOT, 'medical/dental', m[1], 'index.html'))) continue;
  const raw = readFileSync(join(DOCS, f), 'utf8');
  const fm = (raw.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [, ''])[1];
  const get = (k) => ((fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]*)"?`, 'm')) || [])[1] || '').trim();
  const date = verificationDate(fm); // latest verified[].at, else last_verified, else timestamp
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
  const key = `${m[1]}-${m[2]}`;
  if (recent.has(key)) continue;
  candidates.push({ suburb: m[1], state: m[2], suburb_display: get('suburb') || m[1], postcode: get('postcode'), previous_last_verified: date, key });
}
candidates.sort((a, b) => a.previous_last_verified.localeCompare(b.previous_last_verified) || a.key.localeCompare(b.key));
const due = candidates.find((c) => daysBetween(c.previous_last_verified, today) >= minAge);

if (pendingReverify) { console.log('a re-verification is already pending — reverify-next.json left as is'); process.exit(0); }
if (!due) { if (existsSync(NEXT)) unlinkSync(NEXT); console.log(`nothing due (no published source older than ${minAge} days)`); process.exit(0); }
const { key, ...next } = due;
writeFileSync(NEXT, JSON.stringify({ ...next, written_at: today }, null, 2) + '\n');
console.log(`next re-verification: ${key} (last verified ${due.previous_last_verified}, ${daysBetween(due.previous_last_verified, today)} days ago); ${candidates.filter((c) => daysBetween(c.previous_last_verified, today) >= minAge).length} suburbs due`);
