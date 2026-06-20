export interface ParsedSubmission {
  category: string;
  template: string;
  sourceUrl: string;
  content: string;
  contentPath: string; // derived: slugified heading + category
}

export class ParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ParseError';
  }
}

const REQUIRED_SECTIONS = ['category', 'template', 'source url', 'content'] as const;

// Top-level issue sections emitted by the worker (issue-builder.ts) / issue form.
// ONLY these headings act as section boundaries; every other `## ` heading is
// body content — critically, the free-form `## Content` body legitimately
// contains `## Overview`, `## Clinics`, `## FAQ`, … subheadings which must NOT
// be mistaken for new sections (that would truncate the submission).
const KNOWN_SECTIONS = ['category', 'template', 'source url', 'contributor email', 'content'];

function slugify(value: string): string {
  return value
    .normalize('NFKD') // decompose accented Latin (e.g. é -> e + combining mark) …
    .replace(/[\u0300-\u036f]/g, '') // … then drop the combining diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getSection(body: string, sectionName: (typeof REQUIRED_SECTIONS)[number]): string {
  const sections = new Map<string, string>();
  const seen = new Set<string>();
  let currentSection = '';
  let currentLines: string[] = [];

  const flush = (): void => {
    if (!currentSection) {
      return;
    }
    sections.set(currentSection, currentLines.join('\n').trim());
  };

  for (const line of body.split(/\r?\n/)) {
    const headingMatch = line.match(/^##\s+(.+?)\s*$/);
    if (headingMatch) {
      const heading = headingMatch[1]?.trim().toLowerCase() ?? '';
      // A boundary only when it's a known top-level heading seen for the first
      // time. First-wins prevents a duplicated `## Content` (or any sub-heading)
      // in the body from overriding or truncating an earlier section.
      if (heading && KNOWN_SECTIONS.includes(heading) && !seen.has(heading)) {
        flush();
        currentSection = heading;
        seen.add(heading);
        currentLines = [];
        continue;
      }
    }

    if (currentSection) {
      currentLines.push(line);
    }
  }

  flush();

  const value = sections.get(sectionName);
  if (!value || !value.trim()) {
    throw new ParseError(`Missing or empty ## ${sectionName}`);
  }

  return value.trim();
}

export function parseSubmissionIssue(body: string): ParsedSubmission {
  const category = getSection(body, 'category');
  const template = getSection(body, 'template');
  const sourceUrl = getSection(body, 'source url');
  const content = getSection(body, 'content');

  const firstContentLine = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length > 0);

  if (!firstContentLine) {
    throw new ParseError('Content section is empty');
  }

  const headingText = firstContentLine.replace(/^#{1,6}\s*/, '').trim();
  if (!headingText) {
    throw new ParseError('Content heading is empty');
  }

  const categorySlug = slugify(category);
  const contentSlug = slugify(headingText);

  if (!categorySlug) {
    throw new ParseError('Category slug is empty');
  }

  if (!contentSlug) {
    throw new ParseError('Content slug is empty');
  }

  return {
    category,
    template,
    sourceUrl,
    content,
    contentPath: `docs/${categorySlug}/${contentSlug}.md`,
  };
}
