import * as core from '@actions/core';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { isMap, isSeq, parseDocument } from 'yaml';

// Conformance check for the Open Knowledge Format (OKF) v0.2 bundle rooted at docs/.
// Spec: GoogleCloudPlatform/open-knowledge-format SPEC.md (baseline in .github/okf-standard.lock).
//
//   §11.1  every non-reserved .md has a parseable YAML frontmatter block
//   §11.2  every frontmatter block has a non-empty `type`
//   §11.3  reserved files follow §8/§9: index.md has no frontmatter, except the bundle-root
//          index.md, which may carry only `okf_version`; log.md date headings are YYYY-MM-DD
//   §5     every timestamp-valued key is an ISO 8601 datetime with an explicit offset, and the
//          trust / provenance families have the shape §5.1-§5.2 and §7 give them
//
// `last_verified` is a date-only producer extension (constitution → Knowledge Format), not an
// OKF timestamp key, so it is not checked as one.

const BUNDLE = 'docs';
const TARGET_OKF_VERSION = '0.2';
const RESERVED = new Set(['index.md', 'log.md']);
const DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/;
const ACTOR = /^(?:human|process):\S+$|^[^\s/:]+\/\S+$/;
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;

type Plain = Record<string, unknown>;

const errors: string[] = [];
const fail = (file: string, message: string): void => {
  errors.push(`${file}: ${message}`);
};

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (name.endsWith('.md')) out.push(path);
  }
  return out;
}

const isPlainObject = (value: unknown): value is Plain =>
  typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);

/** Parse a frontmatter block as YAML. Returns the top-level mapping, or null after recording why not. */
function parseFrontmatter(file: string, block: string): Plain | null {
  const doc = parseDocument(block, { prettyErrors: false, uniqueKeys: true });
  const problems = [...doc.errors, ...doc.warnings];
  if (problems.length > 0) {
    fail(file, `frontmatter is not parseable YAML (${problems.map((p) => p.message.split('\n')[0]).join('; ')})`);
    return null;
  }
  if (!isMap(doc.contents)) {
    fail(file, 'frontmatter is not a YAML mapping');
    return null;
  }
  const data: unknown = doc.toJS();
  return isPlainObject(data) ? data : null;
}

function checkTimestamp(file: string, key: string, value: unknown): void {
  const text = value instanceof Date ? value.toISOString() : value;
  if (typeof text !== 'string' || !DATETIME.test(text) || Number.isNaN(Date.parse(text))) {
    fail(file, `\`${key}\` must be an ISO 8601 datetime with an explicit offset (got ${JSON.stringify(text)})`);
  }
}

function checkActor(file: string, key: string, value: unknown): void {
  if (typeof value !== 'string' || !ACTOR.test(value)) {
    fail(file, `\`${key}\` must be an actor (<producer>/<version>, human:<id> or process:<id>; got ${JSON.stringify(value)})`);
  }
}

function checkUsageWindow(file: string, key: string, value: unknown): void {
  if (!isPlainObject(value)) {
    fail(file, `\`${key}\` must be a { from, to } mapping`);
    return;
  }
  checkTimestamp(file, `${key}.from`, value['from']);
  checkTimestamp(file, `${key}.to`, value['to']);
}

function checkConcept(file: string, fm: Plain): void {
  const type = fm['type'];
  if (typeof type !== 'string' || type.trim() === '') {
    fail(file, 'frontmatter has no non-empty `type` (OKF §11.2)');
  }

  if ('timestamp' in fm) checkTimestamp(file, 'timestamp', fm['timestamp']); // legacy v0.1 key, kept during the transition
  if ('stale_after' in fm) checkTimestamp(file, 'stale_after', fm['stale_after']);

  if ('generated' in fm) {
    const generated = fm['generated'];
    if (!isPlainObject(generated)) {
      fail(file, '`generated` must be a { by, at } mapping');
    } else {
      checkActor(file, 'generated.by', generated['by']);
      if ('at' in generated) checkTimestamp(file, 'generated.at', generated['at']);
    }
  }

  if ('verified' in fm) {
    const raw = fm['verified'];
    const events = Array.isArray(raw) ? raw : [raw]; // a bare mapping is a one-element list (§5.2)
    if (events.length === 0) fail(file, '`verified` is an empty list');
    events.forEach((event: unknown, i) => {
      const at = Array.isArray(raw) ? `verified[${i}]` : 'verified';
      if (!isPlainObject(event)) {
        fail(file, `\`${at}\` must be a { by, at } mapping`);
        return;
      }
      checkActor(file, `${at}.by`, event['by']);
      checkTimestamp(file, `${at}.at`, event['at']);
    });
  }

  if ('usage_window' in fm) checkUsageWindow(file, 'usage_window', fm['usage_window']);

  if ('sources' in fm) {
    const sources = fm['sources'];
    if (!Array.isArray(sources)) {
      fail(file, '`sources` must be a list');
    } else {
      const ids = new Set<string>();
      sources.forEach((entry: unknown, i) => {
        const at = `sources[${i}]`;
        if (!isPlainObject(entry)) {
          fail(file, `\`${at}\` must be a mapping`);
          return;
        }
        const resource = entry['resource'];
        if (typeof resource !== 'string' || resource.trim() === '') fail(file, `\`${at}.resource\` is required (§5.1)`);
        const id = entry['id'];
        if (id !== undefined) {
          if (typeof id !== 'string' || id.trim() === '') fail(file, `\`${at}.id\` must be a non-empty string`);
          else if (ids.has(id)) fail(file, `\`${at}.id\` "${id}" is not unique`);
          else ids.add(id);
        }
        if ('author' in entry) checkActor(file, `${at}.author`, entry['author']);
        if ('last_modified' in entry) checkTimestamp(file, `${at}.last_modified`, entry['last_modified']);
        if ('usage_window' in entry) checkUsageWindow(file, `${at}.usage_window`, entry['usage_window']);
      });
    }
  }
}

function checkIndex(file: string, raw: string, isBundleRoot: boolean): void {
  const match = raw.match(FRONTMATTER);
  if (!match) return;
  if (!isBundleRoot) {
    fail(file, 'index.md below the bundle root must not carry frontmatter (OKF §8)');
    return;
  }
  const fm = parseFrontmatter(file, match[1] ?? '');
  if (!fm) return;
  const extra = Object.keys(fm).filter((key) => key !== 'okf_version');
  if (extra.length > 0) fail(file, `bundle-root index.md may carry only \`okf_version\` (OKF §8); found ${extra.join(', ')}`);
  if ('okf_version' in fm && fm['okf_version'] !== TARGET_OKF_VERSION) {
    fail(file, `okf_version must be the string "${TARGET_OKF_VERSION}" (got ${JSON.stringify(fm['okf_version'])})`);
  }
}

function checkLog(file: string, raw: string): void {
  for (const line of raw.split(/\r?\n/)) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading && !/^\d{4}-\d{2}-\d{2}$/.test(heading[1] ?? '')) {
      fail(file, `log.md date heading "${heading[1]}" must be YYYY-MM-DD (OKF §9)`);
    }
  }
}

function run(): void {
  const root = process.env['GITHUB_WORKSPACE'] ?? resolve(__dirname, '..', '..');
  const bundle = join(root, BUNDLE);
  const files = walk(bundle).sort();
  let concepts = 0;

  for (const path of files) {
    const file = relative(root, path).replace(/\\/g, '/');
    const name = file.slice(file.lastIndexOf('/') + 1);
    const raw = readFileSync(path, 'utf8');

    if (RESERVED.has(name)) {
      if (name === 'index.md') checkIndex(file, raw, relative(bundle, path) === 'index.md');
      else checkLog(file, raw);
      continue;
    }

    concepts++;
    const match = raw.replace(/^﻿/, '').match(FRONTMATTER);
    if (!match || raw.startsWith('﻿')) {
      fail(file, 'no YAML frontmatter block at the start of the file (OKF §11.1)');
      continue;
    }
    const fm = parseFrontmatter(file, match[1] ?? '');
    if (fm) checkConcept(file, fm);
  }

  core.info(`OKF v${TARGET_OKF_VERSION} conformance: ${files.length} .md files under ${BUNDLE}/, ${concepts} concepts`);
  if (errors.length > 0) {
    for (const message of errors) core.error(message);
    core.setFailed(`${errors.length} conformance error(s)`);
    return;
  }
  core.info('Bundle is conformant.');
}

run();
