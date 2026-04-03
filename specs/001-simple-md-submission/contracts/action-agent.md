# Contract: AI Verification Agent

**Phase**: 1 — Design  
**Branch**: `001-simple-md-submission`  
**Date**: 2026-04-02

The AI Verification Agent is a TypeScript script (`.github/scripts/verify-agent.ts`) executed inside a GitHub Action. It is the intelligence layer of the pipeline: it fetches the source URL, calls the GitHub Models API, interprets the response, and outputs a structured result that the workflow acts on.

---

## Trigger

**Workflow file**: `.github/workflows/verify-submission.yml`  
**Event**: `on: issues: types: [opened]`  
**Condition**: The Issue must have the `submission` label (to avoid firing on non-submission issues)

```yaml
on:
  issues:
    types: [opened]

jobs:
  verify:
    if: contains(github.event.issue.labels.*.name, 'submission')
```

---

## Inputs (from GitHub Actions environment)

| Variable | Source | Description |
|---|---|---|
| `GITHUB_TOKEN` | `${{ secrets.GITHUB_TOKEN }}` | Used for GitHub Models API AND GitHub API calls |
| `ISSUE_NUMBER` | `${{ github.event.issue.number }}` | Issue to label/comment on |
| `ISSUE_BODY` | `${{ github.event.issue.body }}` | Parsed for submission data |
| `GMAIL_ADDRESS` | `${{ secrets.GMAIL_ADDRESS }}` | From address for email |
| `GMAIL_APP_PASSWORD` | `${{ secrets.GMAIL_APP_PASSWORD }}` | SMTP auth (stored in GitHub Secrets) |

---

## Issue Body Parsing Contract

The script parses the GitHub Issue body to extract submission fields. The body format is defined in [worker-api.md](./worker-api.md).

**Extracted fields**:
| Section heading | Extracted as |
|---|---|
| `**Contributor Email**:` | `contributorEmail` |
| `**Category**:` | `category` |
| `**Template**:` | `templateType` |
| `**Submitted At**:` | `submittedAt` |
| Content under `## Fact-Check URL` | `factCheckUrl` |
| Content under `## Submitted Content` | `submittedContent` |

**Parse strategy**: Line-by-line regex on `## section` delimiters. Strict — if a required field is missing, the script applies "Parse Error" label and exits with a non-zero code.

---

## LLM Prompt Contract

The system prompt sent to the GitHub Models API is the core of the verification logic. It is versioned as a constant in `verify-agent.ts`.

**System prompt** (`FACT_CHECK_SYSTEM_PROMPT`):
```
You are a strict fact-checking agent for the Australia.md knowledge archive.
You will be given SOURCE text extracted from an authorised URL, and SUBMITTED text from a contributor.

Your job:
1. Verify that the key factual claims in SUBMITTED are supported by SOURCE.
2. Check that SUBMITTED does not contain invented statistics, dates, names, or policy claims not present in SOURCE.
3. Ignore stylistic differences, rephrasing, or summarisation — focus only on factual accuracy.

Respond with EXACTLY one of:
- VERIFIED
- REJECTED: [one sentence reason]

Do not include any other text.
```

**User message format**:
```
SOURCE:
{plain-text content extracted from factCheckUrl}

SUBMITTED:
{submittedContent}
```

**Model**: `gpt-4o-mini` (default). Configurable via `VERIFY_MODEL` environment variable for admin override.  
**Temperature**: `0.1` (near-deterministic for fact-checking)  
**Max tokens**: `200` (verdict is short; constrain cost)

---

## Outputs (step outputs in GitHub Actions)

| Output name | Values | Description |
|---|---|---|
| `status` | `VERIFIED`, `REJECTED`, `SCRAPE_BLOCKED`, `RATE_LIMITED`, `PARSE_ERROR` | Final pipeline outcome |
| `rejection_reason` | string or empty | Populated only when `status === REJECTED` |
| `contributor_email` | string | Extracted from Issue body; used for email step |
| `content_path` | string | e.g. `docs/health/royal-north-shore.md`; populated only when VERIFIED |

---

## Action Steps (verify-submission.yml)

```
1. actions/checkout@v4
2. actions/setup-node@v4 (node 20)
3. npm ci (in .github/scripts/)
4. run: npx tsx verify-agent.ts         → outputs: status, rejection_reason, contributor_email, content_path
5. if: steps.verify.outputs.status == 'VERIFIED'
   → run: npx tsx create-content-file.ts
6. if: steps.verify.outputs.status == 'REJECTED'
   → run: npx tsx notify-contributor.ts rejected
7. if: steps.verify.outputs.status == 'SCRAPE_BLOCKED'
   → post comment on issue, apply label, notify admin
8. if: steps.verify.outputs.status == 'RATE_LIMITED'
   → post comment on issue, apply label, notify admin
```

---

## Admin Override Contract

**Workflow file**: `.github/workflows/admin-override.yml`  
**Event**: `on: issues: types: [labeled]`

| Label applied by admin | Action taken |
|---|---|
| `Verified` | Run `create-content-file.ts` → create file, open PR |
| `Rejected` | Run `notify-contributor.ts rejected` → email contributor, close Issue |

**Guard condition**: Only fire when `github.event.label.name == 'Verified'` OR `== 'Rejected'` AND the Issue already has the `submission` label. Prevents accidental triggers from unrelated label activity.

---

## File Creation Contract (`create-content-file.ts`)

When `VERIFIED` (or admin applies "Verified" label):

1. **Derive file path** from `category` and the first `# heading` in `submittedContent`:
   - Slugify: lowercase, spaces → hyphens, remove special chars
   - Path: `docs/{category-kebab}/{slug}.md`
   - Example: `docs/health/royal-north-shore-hospital.md`

2. **Prepend frontmatter**:
   ```markdown
   ---
   title: "Royal North Shore Hospital"
   category: health
   sourceUrl: https://www.health.gov.au/...
   lastVerified: 2026-03-30
   submissionIssue: 42
   ahpraStatus: unverified
   ---
   ```

> **FR-011**: `ahpraStatus` is always written as `unverified` for community submissions. This field drives the "AHPRA Unverified" badge displayed on the public-facing page. It MUST NOT be overwritten by this script. Upgrading to `verified` is reserved for spec 002 or an explicit admin process.

3. **Commit via GitHub API** (`PUT /repos/{owner}/{repo}/contents/{path}`)

4. **Open Pull Request** referencing the originating Issue:
   - Title: `feat(submission): {content heading}`
   - Body: `Closes #42`
   - Base: `main`; Head: `submission/issue-42`

5. **Apply "Verified" label** to the Issue (if not already present)

---

## GitHub Secrets Required

| Secret | Used by | Description |
|---|---|---|
| `GITHUB_TOKEN` | All scripts | Auto-provided; needs `models: read`, `contents: write`, `issues: write`, `pull-requests: write` |
| `GMAIL_ADDRESS` | `notify-contributor.ts` | Gmail address for outbound email |
| `GMAIL_APP_PASSWORD` | `dawidd6/action-send-mail` step | Gmail App Password (not account password) |
