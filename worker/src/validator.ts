import { isDomainAuthorized } from '@shared/authorized-domains';
import { SubmissionCategory, TemplateType, type Submission } from '@shared/types';

const RFC_5322_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class ValidationError extends Error {
  public readonly field: string;

  constructor(field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function isSubmissionCategory(value: unknown): value is SubmissionCategory {
  return typeof value === 'string' && Object.values(SubmissionCategory).includes(value as SubmissionCategory);
}

function isTemplateType(value: unknown): value is TemplateType {
  return typeof value === 'string' && Object.values(TemplateType).includes(value as TemplateType);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function validateSubmission(body: unknown): Submission {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    throw new ValidationError('body', 'Request body must be an object');
  }

  const record = body as Record<string, unknown>;

  if (!isSubmissionCategory(record.category)) {
    throw new ValidationError('category', 'Invalid submission category');
  }

  if (!isTemplateType(record.template)) {
    throw new ValidationError('template', 'Invalid template');
  }

  if (!isString(record.sourceUrl) || !isDomainAuthorized(record.sourceUrl)) {
    throw new ValidationError('sourceUrl', 'Source URL is not authorized');
  }

  if (!isString(record.contributorEmail) || !RFC_5322_EMAIL_REGEX.test(record.contributorEmail)) {
    throw new ValidationError('contributorEmail', 'Invalid contributor email');
  }

  if (!isString(record.content) || record.content.trim().length < 50) {
    throw new ValidationError('content', 'Content must be at least 50 characters');
  }

  return {
    category: record.category,
    template: record.template,
    sourceUrl: record.sourceUrl,
    contributorEmail: record.contributorEmail,
    content: record.content,
  };
}
