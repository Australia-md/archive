import type { SystemStatus, Submission } from '@shared/types';

export interface Env {
  GITHUB_TOKEN: string;
  ALLOWED_ORIGIN: string;
  INTER_SVC_TOKEN: string;
  GITHUB_REPOSITORY?: string;
  RATE_LIMIT_KV: KVNamespace;
  EMAIL_KV: KVNamespace;
  STATUS_KV: KVNamespace;
}

export type { SystemStatus, Submission };

export interface UpstreamError extends Error {
  readonly statusCode: number;
  readonly upstreamMessage: string;
}

export interface ValidationError extends Error {
  readonly field: string;
  readonly message: string;
}
