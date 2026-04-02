# Data Model: Simple Markdown Submission Interface

**Phase**: 1 — Design  
**Branch**: `001-simple-md-submission`  
**Date**: 2026-03-30

---

## Entities

### 1. Submission (form payload)

The data structure submitted by the non-technical contributor via the web form. This is the canonical input to the entire pipeline.

| Field | Type | Required | Validation | Notes |
|---|---|---|---|---|
| `contributorEmail` | `string` | ✅ | RFC 5322 email format | Used for all pipeline notifications |
| `category` | `SubmissionCategory` | ✅ | Must be a value from `CATEGORIES` enum | Top-level classification |
| `subcategory` | `string \| null` | ❌ | If present, must match category's subcategories | Optional refinement |
| `templateType` | `TemplateType` | ✅ | Must be a value from `TEMPLATES` enum | Determines MD structure |
| `factCheckUrl` | `string` | ✅ | Valid URL; domain must be in `AUTHORIZED_DOMAINS` list | Pre-screened client-side |
| `content` | `string` | ✅ | Min 50 chars; must differ from blank template | User-authored body content |
| `submittedAt` | `string` | auto | ISO 8601 datetime | Set by the Worker on receipt |

**TypeScript type**:
```typescript
interface Submission {
  contributorEmail: string;
  category: SubmissionCategory;
  subcategory: string | null;
  templateType: TemplateType;
  factCheckUrl: string;
  content: string;
  submittedAt: string; // ISO 8601
}
```

---

### 2. SubmissionCategory (enum)

Categories align with the Australia.md archive structure.

```typescript
enum SubmissionCategory {
  Government       = "Government",
  Health           = "Health",
  Education        = "Education",
  Tourism          = "Tourism",
  Economy          = "Economy",
  Culture          = "Culture",
  Environment      = "Environment",
  Infrastructure   = "Infrastructure",
  Science          = "Science",
  Indigenous       = "Indigenous",
}
```

---

### 3. TemplateType (enum)

Markdown templates that pre-populate the form's content area.

```typescript
enum TemplateType {
  General          = "General",        // generic fact entry
  MedicalPractice  = "MedicalPractice",// medical clinic/specialist
  LegislationFact  = "LegislationFact",// government policy or law
  CulturalSite     = "CulturalSite",   // cultural or heritage location
  StatisticalData  = "StatisticalData",// data/statistics entry
}
```

---

### 4. SubmissionIssue (GitHub Issue representation)

The GitHub Issue created by the Worker proxy. This is the staging area for the entire pipeline.

| Field | Source | Notes |
|---|---|---|
| `number` | GitHub API response | Issue number — used by all downstream scripts |
| `title` | Generated | Format: `[Submission] {category}: {truncated content heading}` |
| `body` | Generated from Submission | Structured Markdown with all submission fields as sections |
| `labels` | Initial set | `["submission", "pending-review"]` |
| `state` | `open` → `closed` | Closed when Verified+PR merged or Rejected |

**Issue body format** (parsed by Action scripts):
```markdown
## Submission Details

**Category**: Health  
**Template**: MedicalPractice  
**Contributor Email**: contributor@example.com  
**Submitted At**: 2026-03-30T05:00:00Z

## Fact-Check URL

https://www.health.gov.au/example-page

## Submitted Content

[User's markdown content here]
```

---

### 5. VerificationResult

The output of the AI Verification Agent. A discriminated union.

```typescript
type VerificationResult =
  | { status: "VERIFIED" }
  | { status: "REJECTED"; reason: string }
  | { status: "SCRAPE_BLOCKED" }
  | { status: "RATE_LIMITED" };
```

**State transitions**:
```
Issue opened (pending-review)
  → AI runs → VERIFIED       → Issue labeled "Verified"    → File created, PR opened, Issue closed
  → AI runs → REJECTED       → Issue labeled "Needs Fix"  → Comment posted, email sent
  → AI runs → SCRAPE_BLOCKED → Issue labeled "Scrape Blocked" → Admin notified
  → AI runs → RATE_LIMITED   → Issue labeled "Pending Human Review" → Admin notified
  → Admin override → "Verified" label → File created, PR opened
  → Admin override → "Rejected" label → Issue closed, email sent
```

---

### 6. ContentFile (output artifact)

The Markdown file created on VERIFIED outcome.

| Field | Value | Notes |
|---|---|---|
| `path` | `docs/{category}/{slug}.md` | Derived from category and content heading |
| `slug` | kebab-case from content `# heading` | e.g. `docs/health/royal-north-shore-hospital.md` |
| `content` | Submitted content (verbatim) | AI-verified before writing |
| `frontmatter` | Auto-generated | Includes `lastVerified`, `sourceUrl`, `category` |

**Frontmatter format**:
```markdown
---
title: "Royal North Shore Hospital"
category: Health
sourceUrl: https://www.health.gov.au/...
lastVerified: 2026-03-30
submissionIssue: 42
---
```

---

### 7. MarkdownTemplate (static definition)

```typescript
interface MarkdownTemplate {
  type: TemplateType;
  label: string;           // display name in form dropdown
  placeholder: string;     // shown in textarea before user edits
  skeleton: string;        // the actual template content
  requiredHeadings: string[];  // headings that must not be blank on submit
}
```

---

### 8. AuthorizedDomain

The allowlist used client-side to pre-screen the fact-check URL.

```typescript
interface AuthorizedDomain {
  domain: string;         // e.g. "health.gov.au"
  label: string;          // e.g. "Australian Government Health"
  priority: "primary" | "secondary";
}
```

**Initial domain list** (configurable):
- `*.gov.au` — all Australian government domains
- `*.edu.au` — Australian university/educational institutions
- `aihw.gov.au` — Australian Institute of Health and Welfare
- `abs.gov.au` — Australian Bureau of Statistics
- `ahpra.gov.au` — Australian Health Practitioner Regulation Agency
- `rba.gov.au` — Reserve Bank of Australia

---

## State Machine: Submission Pipeline

```
[Form filled] 
    → POST /submit (Worker)
    → Issue created (state: open, labels: [submission, pending-review])
    → Action: verify-submission.yml fires
        → Fetch source URL
            → Success → Call GitHub Models API
                → VERIFIED  → Create file → Open PR → Label "Verified" → Email contributor
                → REJECTED  → Comment reason → Label "Needs Fix" → Email contributor
            → Failure → Label "Scrape Blocked" → Comment → Email admin
        → Rate limited → Label "Pending Human Review" → Comment → Email admin
    → Admin override (label "Verified") → admin-override.yml fires → Create file → Open PR
    → Admin override (label "Rejected") → admin-override.yml fires → Close Issue → Email contributor
```

---

## Validation Rules

| Rule | Where enforced | Error message |
|---|---|---|
| Email format | Client-side (TS) + Worker | "Please enter a valid email address" |
| URL is valid format | Client-side (TS) | "Please enter a valid URL (https://...)" |
| URL domain is authorized | Client-side (TS) | "This URL's domain is not in the authorized source list. Please use a .gov.au or .edu.au source." |
| Content differs from template | Client-side (TS) | "Please fill in the template before submitting" |
| Content minimum length | Client-side (TS) | "Content must be at least 50 characters" |
| Rate limiting (2/15min/IP) | Cloudflare Worker (KV) | 429 response: "You have reached the submission limit. Please wait 15 minutes before submitting again." |
