# GitHub Actions Scripts — `.github/scripts/`

All scripts are written in **TypeScript strict mode** and run inside GitHub Actions using `npx tsx`.
They are **not** part of the Cloudflare Worker — they run on GitHub's `ubuntu-latest` runner (Node 20).

---

## Scripts Overview

| File | Triggered by | Purpose |
|------|-------------|---------|
| [`verify-agent.ts`](#verify-agentts) | `verify-submission.yml` | Core AI fact-checker — compares submitted content against source URL |
| [`fetch-source.ts`](#fetch-sourcets) | `verify-agent.ts` | Fetches and strips HTML from a source URL |
| [`parse-issue.ts`](#parse-issuets) | `verify-agent.ts` | Parses a GitHub Issue body into structured submission fields |
| [`create-content-file.ts`](#create-content-filets) | `verify-submission.yml`, `admin-override.yml` | Creates the verified `.md` file and opens a PR |
| [`notify-contributor.ts`](#notify-contributorts) | `verify-submission.yml`, `admin-override.yml` | Builds email subject and body for all pipeline outcomes |
| [`check-admin.ts`](#check-admintscheck-admin-runnerts) | `admin-override.yml` | Logic: checks if a GitHub actor is an authorised admin |
| [`check-admin-runner.ts`](#check-admintscheck-admin-runnerts) | `admin-override.yml` | Entry point: reads env vars and calls `check-admin.ts` |
| [`setup-labels.ts`](#setup-labelsts) | Run once manually | Creates all required GitHub Issue labels in the repository |

---

## `verify-agent.ts`

**Purpose**: The main AI verification script. Orchestrates the entire fact-checking pipeline for a single submission.

**Called by**: `verify-submission.yml` (step: `run verify-agent`)

**What it does**:
1. Reads `ISSUE_BODY` from the workflow environment
2. Calls `parseSubmissionIssue()` to extract category, source URL, and submitted content from the Issue
3. Calls `fetchSourceContent()` to download the source URL as plain text
4. If the fetch fails → outputs `status=SCRAPE_BLOCKED`
5. Calls the **GitHub Copilot API** (`gpt-5.4-mini` via `openai` package, endpoint `https://api.githubcopilot.com`) with the system prompt and both texts
6. If the API returns 429 → outputs `status=RATE_LIMITED`
7. Parses the verdict (`VERIFIED` or `REJECTED: reason`) and sanitises it (strips non-printable characters, validates format)
8. Sets GitHub Actions step outputs for downstream workflow steps

**Environment variables required**:
| Variable | Source |
|----------|--------|
| `GITHUB_TOKEN` | `${{ secrets.GITHUB_TOKEN }}` — used for GitHub Models API |
| `ISSUE_NUMBER` | `${{ github.event.issue.number }}` |
| `ISSUE_BODY` | `${{ github.event.issue.body }}` |
| `CONTRIBUTOR_EMAIL` | From prior `retrieve-email` step (fetched from Worker) |

**Step outputs set**:
| Output | Values |
|--------|--------|
| `status` | `VERIFIED`, `REJECTED`, `SCRAPE_BLOCKED`, `RATE_LIMITED` |
| `rejection_reason` | Populated when `REJECTED`; empty otherwise |
| `contributor_email` | Passed through from env for downstream email steps |
| `content_path` | e.g. `docs/health/royal-north-shore.md` (when `VERIFIED`) |
| `category` | e.g. `Health` |
| `source_url` | The source URL from the submission |
| `content` | The submitted Markdown content |

**AI prompt**: Sends the source text and submitted content to `gpt-5.4-mini` (GitHub Copilot, `https://api.githubcopilot.com`) with `temperature: 0.1`. The model must respond with exactly `VERIFIED` or `REJECTED: <one sentence reason>` — any other response falls back to `SCRAPE_BLOCKED`.

---

## `fetch-source.ts`

**Purpose**: Fetches the source URL submitted by the contributor and returns its content as plain text.

**Called by**: `verify-agent.ts`

**What it does**:
1. Sends a `GET` request to the URL with `User-Agent: Australia.md Fact-Checker/1.0`
2. Enforces a **30-second timeout** via `AbortController`
3. On HTTP `403` or `429` responses, retries up to **3 times** with exponential backoff (2s → 4s → 8s)
4. Strips all HTML tags from the response body, returning clean plain text
5. Returns `null` on any failure (network error, timeout, non-200 after retries, parse failure)

**Export**:
```typescript
fetchSourceContent(url: string): Promise<string | null>
```

A `null` return causes `verify-agent.ts` to output `status=SCRAPE_BLOCKED`, which queues the submission for manual admin review.

---

## `parse-issue.ts`

**Purpose**: Parses the structured body of a GitHub Issue (created by the Cloudflare Worker) into a typed `ParsedSubmission` object.

**Called by**: `verify-agent.ts`

**What it does**:
1. Splits the Issue body on `## ` section headings
2. Extracts required sections: `## Category`, `## Template`, `## Source URL`, `## Content`
3. Derives the output file path from the category and the first `# heading` in the content (e.g. `docs/health/royal-north-shore.md`)
4. Throws `ParseError` if any required section is missing or empty

**Export**:
```typescript
parseSubmissionIssue(body: string): ParsedSubmission
// ParsedSubmission = { category, template, sourceUrl, content, contentPath }

class ParseError extends Error {}
```

The `contentPath` field determines where the verified Markdown file will be written in the repository.

---

## `create-content-file.ts`

**Purpose**: Creates or updates a verified Markdown content file in the repository and opens a Pull Request.

**Called by**: `verify-submission.yml` (on `VERIFIED`), `admin-override.yml` (on admin "Verified" label)

**What it does**:
1. Checks if the target file (`docs/{category}/{slug}.md`) already exists on the submission branch
2. If it exists → archives the current file to `{slug}-archived-YYYY-MM-DD.md` before overwriting
3. Prepends YAML frontmatter (`title`, `category`, `sourceUrl`, `lastVerified`, `submissionIssue`) to the content
4. Commits the new file to branch `submission/issue-{N}` (creates the branch if it doesn't exist)
5. Opens a Pull Request: `feat(submission): {heading}` → `Closes #{N}`
6. **Idempotent**: if the branch already has an open PR, skips creation and exits cleanly

**Environment variables required**:
| Variable | Source |
|----------|--------|
| `GITHUB_TOKEN` | `${{ secrets.GITHUB_TOKEN }}` |
| `ISSUE_NUMBER` | Issue number |
| `CONTENT` | Submitted Markdown content |
| `CATEGORY` | Submission category |
| `CONTENT_PATH` | Target file path (e.g. `docs/health/royal-north-shore.md`) |
| `SOURCE_URL` | Source URL |
| `GITHUB_REPOSITORY` | Auto-set by Actions (`owner/repo`) |

---

## `notify-contributor.ts`

**Purpose**: Builds the email subject and body for each possible pipeline outcome.

**Called by**: `verify-submission.yml` and `admin-override.yml` (email steps)

**What it does**: Exports two pure functions used by the `dawidd6/action-send-mail` workflow steps to construct notification emails.

**Exports**:
```typescript
buildEmailSubject(outcome: string, issueNumber: number): string
buildEmailBody(outcome: 'VERIFIED' | 'REJECTED' | 'SCRAPE_BLOCKED' | 'RATE_LIMITED', data: NotificationData): string
```

**Email content by outcome**:
| Outcome | Recipient | Message |
|---------|-----------|---------|
| `VERIFIED` | Contributor | Congratulations + PR link + Issue link |
| `REJECTED` | Contributor | Sanitised AI rejection reason + fix instructions + Issue link |
| `SCRAPE_BLOCKED` | Contributor | Source could not be fetched; queued for manual review |
| `RATE_LIMITED` | Admin only | AI rate-limited; manual review required |

All rejection reasons from the AI are sanitised (non-printable characters stripped) before inclusion in emails.

---

## `check-admin.ts` / `check-admin-runner.ts`

**Purpose**: Guards the admin override workflow — only listed administrators may apply `Verified` or `Rejected` labels to trigger file creation.

**Called by**: `admin-override.yml` (first step)

These two files separate logic from entry point:

### `check-admin.ts` — logic module
```typescript
isAdmin(actor: string, adminList: string): boolean
// Splits ADMIN_USERNAMES (comma-separated) and checks membership (case-insensitive)

rejectOverride(octokit, owner, repo, issueNumber, actor): Promise<void>
// Posts a blocking comment: "Override rejected: only authorised administrators can trigger this action."
```

### `check-admin-runner.ts` — entry point
Reads `ACTOR`, `ADMIN_USERNAMES`, `ISSUE_NUMBER`, `GITHUB_TOKEN`, `GITHUB_REPOSITORY` from env, calls `isAdmin()`, and sets the `is_admin` step output (`"true"` / `"false"`). The workflow uses this output to conditionally run file creation or contributor notification.

**Environment variables required**:
| Variable | Source |
|----------|--------|
| `GITHUB_TOKEN` | `${{ secrets.GITHUB_TOKEN }}` |
| `ACTOR` | `${{ github.actor }}` |
| `ADMIN_USERNAMES` | `${{ vars.ADMIN_USERNAMES }}` — comma-separated list (e.g. `HoHo1979,james`) |
| `ISSUE_NUMBER` | `${{ github.event.issue.number }}` |
| `GITHUB_REPOSITORY` | Auto-set by Actions |

---

## `setup-labels.ts`

**Purpose**: One-time setup script that creates all required GitHub Issue labels in the repository.

**Called by**: Run manually once before the pipeline is used (not called by any workflow).

**Usage**:
```bash
cd .github/scripts
GITHUB_TOKEN=your_token GITHUB_REPOSITORY=owner/repo npx tsx setup-labels.ts
```

**Labels created**:
| Label | Colour | Meaning |
|-------|--------|---------|
| `submission` | Blue | Issue is a community content submission |
| `pending-review` | Yellow | Awaiting AI or admin verification |
| `Verified` | Green | Content verified — PR will be / has been opened |
| `Needs Fix` | Red-orange | AI rejected — contributor must revise |
| `Scrape Blocked` | Dark red | Source URL could not be fetched |
| `Pending Human Review` | Gold | GitHub Models rate-limited — manual review needed |
| `Rejected` | Bright red | Permanently rejected by admin |

If a label already exists, the script updates it to match the definition (idempotent).

---

## Pipeline Flow

```
Issue opened (submission label)
        │
        ▼
verify-submission.yml
  ├─ parse-issue.ts          → extract category, URL, content, file path
  ├─ fetch-source.ts         → download source URL as plain text
  ├─ verify-agent.ts         → call GitHub Models API, get verdict
  │
  ├─ VERIFIED  ──► create-content-file.ts  → branch + file + PR
  │                notify-contributor.ts   → email: congratulations + PR link
  │
  ├─ REJECTED  ──► GitHub API: comment with rejection reason
  │                notify-contributor.ts   → email: reason + fix instructions
  │
  ├─ SCRAPE_BLOCKED ──► GitHub API: label + comment
  │                     notify-contributor.ts  → email: queued for review
  │
  └─ RATE_LIMITED ──► GitHub API: label + comment
                      notify-contributor.ts   → email admin only

admin-override.yml (label applied)
  ├─ check-admin-runner.ts   → verify actor is in ADMIN_USERNAMES
  ├─ Verified label ──► create-content-file.ts
  └─ Rejected label ──► notify-contributor.ts + close Issue
```

---

## Dependencies (`package.json`)

```json
{
  "@actions/core": "GitHub Actions output/logging utilities",
  "@actions/github": "Octokit wrapper pre-authenticated with GITHUB_TOKEN",
  "openai": "GitHub Copilot API client (MIT) — uses standard OpenAI SDK with baseURL: https://api.githubcopilot.com",
  "tsx": "Runs TypeScript directly in Node 20 without pre-compilation"
}
```

All dependencies are MIT-licensed and AGPL-3.0 compatible.
