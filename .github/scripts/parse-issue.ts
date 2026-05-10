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

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getSection(body: string, sectionName: (typeof REQUIRED_SECTIONS)[number]): string {
  const sections = new Map<string, string>();
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
      flush();
      const sectionName = headingMatch[1];
      if (!sectionName) {
        throw new ParseError('Invalid section heading');
      }
      currentSection = sectionName.trim().toLowerCase();
      currentLines = [];
      continue;
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
