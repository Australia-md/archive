// Shared TypeScript types for Australia.md submission pipeline.
// Imported by both src/submission/ (frontend) and worker/src/ (proxy).

export enum SubmissionCategory {
  Government = 'Government',
  Health = 'Health',
  Education = 'Education',
  Tourism = 'Tourism',
  Economy = 'Economy',
  Culture = 'Culture',
  Environment = 'Environment',
  Infrastructure = 'Infrastructure',
  Science = 'Science',
  Indigenous = 'Indigenous',
}

export enum TemplateType {
  // Government & Policy
  GovernmentPolicy       = 'GovernmentPolicy',
  GovernmentAgency       = 'GovernmentAgency',
  GovernmentReport       = 'GovernmentReport',
  // Health & Medical
  HealthPractice         = 'HealthPractice',
  HealthGuideline        = 'HealthGuideline',
  HealthStatistic        = 'HealthStatistic',
  // Education
  EducationInstitution   = 'EducationInstitution',
  EducationPolicy        = 'EducationPolicy',
  EducationStatistic     = 'EducationStatistic',
  // Tourism & Travel
  TourismAttraction      = 'TourismAttraction',
  TourismRegion          = 'TourismRegion',
  TourismStatistic       = 'TourismStatistic',
  // Economy & Finance
  EconomyIndicator       = 'EconomyIndicator',
  EconomyPolicy          = 'EconomyPolicy',
  EconomyIndustry        = 'EconomyIndustry',
  // Culture & Heritage
  CulturalSite           = 'CulturalSite',
  CulturalEvent          = 'CulturalEvent',
  CulturalOrganisation   = 'CulturalOrganisation',
  // Environment & Climate
  EnvironmentFact        = 'EnvironmentFact',
  EnvironmentPolicy      = 'EnvironmentPolicy',
  EnvironmentSpecies     = 'EnvironmentSpecies',
  // Infrastructure & Transport
  InfrastructureProject  = 'InfrastructureProject',
  InfrastructureNetwork  = 'InfrastructureNetwork',
  InfrastructureStatistic = 'InfrastructureStatistic',
  // Science & Technology
  ScienceResearch        = 'ScienceResearch',
  ScienceFact            = 'ScienceFact',
  ScienceTechnology      = 'ScienceTechnology',
  // Indigenous Australia
  IndigenousCountry      = 'IndigenousCountry',
  IndigenousCulture      = 'IndigenousCulture',
  IndigenousOrganisation = 'IndigenousOrganisation',
}

export interface Submission {
  category: SubmissionCategory;
  template: TemplateType;
  sourceUrl: string;
  contributorEmail: string;
  content: string;
}

export type VerificationStatus = 'VERIFIED' | 'REJECTED' | 'SCRAPE_BLOCKED' | 'RATE_LIMITED';

export type VerificationResult =
  | { status: 'VERIFIED'; contentPath: string }
  | { status: 'REJECTED'; reason: string }
  | { status: 'SCRAPE_BLOCKED'; sourceUrl: string }
  | { status: 'RATE_LIMITED'; retryAfterSeconds: number };

export type SystemStatus = 'green' | 'amber' | 'red';

export interface WorkerErrorResponse {
  error: string;
  field?: string;
  retryAfterSeconds?: number;
}

export interface WorkerSuccessResponse {
  issueNumber: number;
  issueUrl: string;
}
