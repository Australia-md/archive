---
description: "Task list for Simple Markdown Submission Interface — IssueOps + Agentic Verification pipeline"
---

# Tasks: Simple Markdown Submission Interface (Community Edition)

**Branch**: `001-simple-md-submission`
**Input**: Design documents from `/specs/001-simple-md-submission/`
**Generated**: 2026-03-30
**Stack**: TypeScript 5.x strict · Cloudflare Worker · GitHub Actions Node 20 · `@azure/openai`

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no shared dependencies)
- **[Story]**: Which user story this task belongs to (US1–US4)
- Exact file paths included in all descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize all project sub-packages and shared tooling before any feature work.

- [x] T001 Create `worker/` directory with `wrangler.toml`, `package.json` (TypeScript Worker project targeting Cloudflare Workers runtime)
- [x] T002 Create `worker/tsconfig.json` (strict mode, target ES2022, lib: ["ES2022"], types: ["@cloudflare/workers-types"])
- [x] T003 Create `.github/scripts/package.json` with `@actions/core`, `@actions/github`, `@azure/openai`, `tsx` as devDependency for running TypeScript scripts directly in Node 20
- [x] T004 Create `.github/scripts/tsconfig.json` (strict mode, target ES2022, module CommonJS, for Node 20 Actions runner)
- [x] T005 [P] Create `submit/` directory with empty `submit/index.html` scaffold (DOCTYPE, lang="en", UTF-8, empty head/body — filled in Phase 3)
- [x] T006 [P] Create `src/submission/` directory structure per plan.md project tree
- [x] T007 Create `.github/scripts/setup-labels.ts` — script using `@actions/github` to create all required labels: `submission`, `pending-review`, `Verified`, `Needs Fix`, `Scrape Blocked`, `Pending Human Review`, `Rejected`
- [x] T008 Run `npm install` in `worker/` and `.github/scripts/` — verify both compile with `tsc --noEmit`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared TypeScript types, template definitions, authorized domain list. Imported by both `src/submission/` (frontend) and `worker/src/` (proxy). Must complete before any story work.

- [x] T009 Create `src/submission/types.ts` — export `SubmissionCategory` enum, `TemplateType` enum, `Submission` interface, `VerificationResult` discriminated union (`VERIFIED` | `REJECTED` | `SCRAPE_BLOCKED` | `RATE_LIMITED`), `SystemStatus` type (`"green" | "amber" | "red"`)
- [x] T010 [P] Create `src/submission/categories.ts` — export `CATEGORIES` array with all 10 categories (Government, Health, Education, Tourism, Economy, Culture, Environment, Infrastructure, Science, Indigenous) with display labels
- [x] T011 [P] Create `src/submission/templates.ts` — export `TEMPLATES: MarkdownTemplate[]` with 5 entries (General, MedicalPractice, LegislationFact, CulturalSite, StatisticalData). Each has `type`, `label`, `placeholder`, `skeleton`, `requiredHeadings[]`
- [x] T012 [P] Create `src/submission/authorized-domains.ts` — export `AUTHORIZED_DOMAINS` array (`*.gov.au`, `*.edu.au`, `aihw.gov.au`, `abs.gov.au`, `ahpra.gov.au`, `rba.gov.au`) and `isDomainAuthorized(url: string): boolean` helper
- [x] T013 Create `worker/src/types.ts` — define `Env` interface with `GITHUB_TOKEN: string`, `ALLOWED_ORIGIN: string`, `INTER_SVC_TOKEN: string`, `RATE_LIMIT_KV: KVNamespace`, `EMAIL_KV: KVNamespace`, `STATUS_KV: KVNamespace`. Import shared types from `src/submission/types.ts` via tsconfig path alias: add `"paths": { "@shared/*": ["../src/submission/*"] }` to `worker/tsconfig.json` and import as `import type { Submission } from '@shared/types'`. (B1 resolved — path alias chosen over copy to avoid drift)
- [x] T014 Run `npm run build` from repo root — verify `src/submission/*.ts` compiles to `dist/submission/` without errors

---

## Phase 3: User Story 1 — Simplified Content Submission

**Story goal**: A non-technical contributor fills the form at `submit/index.html`, clicks Submit, a GitHub Issue is created, and the form is replaced by an inline success message with the Issue link.

**Independent test**: Open `submit/index.html`. Fill category, template, URL (`.gov.au`), email, content. Click Submit. GitHub Issue appears with `submission` + `pending-review` labels. Form replaced by: "Submitted! Your reference: Issue #N [link]. You'll be emailed when verification completes."

### Form UI (`src/submission/` + `submit/`)

- [x] T015 [US1] Build `submit/index.html` — full semantic HTML5 page: `<title>` (50–60 chars), `<meta description>` (120–160 chars), Open Graph tags, `<link rel="canonical">`, `<main>` containing `<form id="submission-form">`, status banner `<output id="status-banner" role="status" aria-live="polite">`, `<footer>` with RxAI credit. Load `dist/submission/form.js` as `type="module"`.
- [x] T016 [US1] Create `src/submission/form.ts` — form controller. On DOMContentLoaded: call `loadSystemStatus()`, populate category `<select>` from `CATEGORIES`, attach change listener calling `populateTemplates(category)`.
- [x] T017 [US1] Add `populateTemplates(category: SubmissionCategory): void` and `applyTemplate(template: MarkdownTemplate): void` in `src/submission/form.ts` — filters TEMPLATES by category, populates template `<select>`, on selection sets `<textarea>` value to `template.skeleton` via `element.value = ...` (no innerHTML).
- [x] T018 [US1] Add client-side validation in `src/submission/form.ts`: `validateEmail()`, `validateUrl()` (checks `isDomainAuthorized()`), `validateContent()` (min 50 chars, differs from skeleton). Display errors in `<span role="alert" aria-describedby>` associated with each field. Block submit if any validation fails.
- [x] T019 [US1] Add `loadSystemStatus(): Promise<void>` in `src/submission/form.ts` — fetches Worker `/api/status`. Maps `green` → enable Submit; `amber`/`red` → disable Submit with message: "Server is temporarily not accepting submissions. Please check the status indicator — when it shows green, resubmit."
- [x] T020 [US1] Add `handleSubmit(event: SubmitEvent): Promise<void>` in `src/submission/form.ts` — builds `Submission` object from form values, POSTs to Worker `/api/submit`, handles: 200 → `showSuccessState()`, 429 → `showErrorState("RATE_LIMITED", ...)`, 503 → `showErrorState("SERVER_ERROR", ...)`, network failure → `showErrorState("NETWORK_ERROR", ...)`.
- [x] T021 [US1] Add `showSuccessState(issueUrl: string, issueNumber: number): void` in `src/submission/form.ts` — replaces `<form>` element with `<section>` success message: "Submitted! Your reference: Issue #N [linked]. You'll be emailed when verification completes." All text set via `textContent`; link set via `element.href`. After the Issue link, MAY include a non-intrusive upsell built via DOM API (never innerHTML): `const upsell = document.createElement('a'); upsell.href = 'https://app.rxai.com.au'; upsell.textContent = 'Try RxAI Premium'; upsell.rel = 'noopener noreferrer'; section.appendChild(upsell);` — per spec Upsell Touchpoint and constitution §IV (no innerHTML regardless of string origin).

### Cloudflare Worker Proxy (`worker/src/`)

- [x] T022 [US1] Create `worker/src/rate-limiter.ts` — export `checkRateLimit(ip: string, kv: KVNamespace): Promise<{ allowed: boolean }>`. Reads `ratelimit:{ip}` key from KV. If count < 2: increment (TTL 900s) → allowed. If count >= 2: not allowed. (2 submissions per IP per 15-minute window per FR-006)
- [x] T023 [US1] Create `worker/src/issue-builder.ts` — export `buildIssueTitle(submission: Submission): string` and `buildIssueBody(submission: Submission): string`. Body format MUST use `[email protected]` placeholder for email — NEVER include real email in Issue body per FR-006 (Australian Privacy Act compliance).
- [x] T024 [US1] Create `worker/src/github-client.ts` — export `createGitHubIssue(submission: Submission, token: string): Promise<{ number: number; html_url: string }>`. 3× exponential backoff (1s/2s/4s). Labels: `["submission", "pending-review"]`. Throws typed `UpstreamError` on all attempts exhausted.
- [x] T025 [US1] Create `worker/src/status-checker.ts` — export `getSystemStatus(token: string): Promise<SystemStatus>`. Reads STATUS_KV in priority order: (1) key `system-status` (admin/Action override, written by T052) — if present, return its value immediately; (2) key `status-live-check` (cached live check, written by T043, TTL 10s) — if present, return its value; (3) live call `GET https://api.github.com/rate_limit` — maps remaining: > 50 → `"green"`, 10–50 → `"amber"`, < 10 or error → `"red"` — then cache result in `status-live-check` with TTL 10s. (F2 resolved — two-key schema documented)
- [x] T026 [US1] Create `worker/src/index.ts` — main Worker entrypoint. Routes: `POST /api/submit` (CORS check → rate limit → validate → createIssue → 200/400/429/503), `GET /api/status` (return SystemStatus JSON), `OPTIONS` preflight. All error responses follow the JSON contract in `contracts/worker-api.md`.
- [x] T027 [US1] Configure `worker/wrangler.toml` — KV namespace bindings: `RATE_LIMIT_KV`, `EMAIL_KV`, `STATUS_KV`, `compatibility_date = "2024-01-01"`, Worker name `australia-submission-proxy`, comment placeholders for secrets (`GITHUB_TOKEN`, `ALLOWED_ORIGIN`, `INTER_SVC_TOKEN`).
- [x] T028 [US1] Update `sitemap.xml` — add `<url>` entry for `https://australiamd.org/submit/` with `<lastmod>2026-03-30</lastmod>`, `<changefreq>monthly</changefreq>`, `<priority>0.8</priority>`. Also verify `robots.txt` contains `Sitemap: https://australiamd.org/sitemap.xml` — add the directive if missing (constitution §SEO). (D3 resolved)

---

## Phase 4: User Story 2 — Agentic Semantic Verification

**Story goal**: When a Submission Issue is opened, a GitHub Action fetches the source URL, calls GitHub Models API to semantically verify content, and either creates a file+PR (VERIFIED) or comments+labels+emails (REJECTED).

**Independent test**: Manually create a test Issue with correct submission body format. `verify-submission.yml` fires. Within 5 minutes: "Verified" label + new PR, OR "Needs Fix" label + comment with rejection reason. Contributor email is sent in both cases.

### Issue Parser & URL Fetcher

- [x] T029 [US2] Create `.github/scripts/parse-issue.ts` — export `parseSubmissionIssue(body: string): ParsedSubmission`. Parses Issue body by `## ` section headings per format in `contracts/action-agent.md`. Throws `ParseError` if required fields missing. Real contributor email is retrieved by calling Worker endpoint `GET /api/email/{issueNumber}` (authenticated with `INTER_SVC_TOKEN` from GitHub Secrets). Email is NEVER read from Issue body. If endpoint returns 404 or network error: set output `email_missing=true` and `contributor_email=""` — the workflow (T034) will route to an admin notification fallback (`secrets.ADMIN_EMAIL`) rather than silently dropping the notification. (C3 resolved)
- [x] T030 [US2] Create `.github/scripts/fetch-source.ts` — export `fetchSourceContent(url: string): Promise<string | null>`. Uses native `fetch()` (Node 20 built-in). Sets `User-Agent: Australia.md Fact-Checker/1.0`. 3× exponential backoff on 403/429 (2s/4s/8s). Strips HTML tags to return plain text. Returns `null` on any failure (triggers Scrape Blocked path).

### AI Verification Agent

- [x] T031 [US2] Create `.github/scripts/verify-agent.ts` — main script. Reads env: `GITHUB_TOKEN`, `ISSUE_NUMBER`, `ISSUE_BODY`, `CONTRIBUTOR_EMAIL` (received from the prior workflow step that calls the Worker email endpoint per T029/T053 — this script does NOT fetch the email independently; it receives it from `${{ steps.retrieve-email.outputs.contributor_email }}`). Calls `parseSubmissionIssue()`, `fetchSourceContent()`. If fetch returns null → output `status=SCRAPE_BLOCKED`. Otherwise calls `AzureOpenAI` client (endpoint `https://models.inference.ai.azure.com`, model `gpt-4o-mini`, temperature 0.1, max_tokens 200, `timeout: 60000`). Parses verdict. Sets Actions step outputs: `status`, `rejection_reason`, `contributor_email`, `content_path`. Sanitise `rejection_reason`: strip non-printable characters, reject responses not matching `^VERIFIED$` or `^REJECTED: .{1,500}$`, escape any Markdown special characters before passing to Issue comment or email body (constitution §IV — LLM output is untrusted). (C1/F1 resolved)
- [x] T032 [US2] Define `FACT_CHECK_SYSTEM_PROMPT` constant in `.github/scripts/verify-agent.ts` — exact prompt per `contracts/action-agent.md`: strict fact-checking agent, compare SOURCE vs SUBMITTED content, respond ONLY with `VERIFIED` or `REJECTED: [one sentence reason]`.
- [x] T033 [US2] Create `.github/scripts/create-content-file.ts` — reads env: `ISSUE_NUMBER`, `CONTENT`, `CATEGORY`, `CONTENT_PATH`, `SOURCE_URL`, `GITHUB_TOKEN`. Steps: (1) Check if `CONTENT_PATH` exists via GitHub Contents API. (2) If exists: archive current file to `{slug}-archived-YYYY-MM-DD.md` via PUT. (3) Write new content with frontmatter (`title`, `category`, `sourceUrl`, `lastVerified: YYYY-MM-DD`, `submissionIssue: N`, `ahpraStatus: unverified`) to original path. (4) Commit branch `submission/issue-{N}`. (5) Open PR: title `feat(submission): {heading}`, body `Closes #{N}`, base `main`.

### GitHub Action Workflows

- [x] T034 [US2] Create `.github/workflows/verify-submission.yml` — trigger: `on: issues: types: [opened]`. Condition: `contains(github.event.issue.labels.*.name, 'submission')`. Permissions: `contents: write`, `issues: write`, `pull-requests: write`, `models: read`. Set `timeout-minutes: 5` at job level. Steps: checkout → setup-node@v4 (node 20) → npm ci (`.github/scripts/`) → **retrieve-email** (call Worker `GET /api/email/{N}` with `INTER_SVC_TOKEN`, output `contributor_email` and `email_missing`) → run `verify-agent.ts` (receives `CONTRIBUTOR_EMAIL` from `${{ steps.retrieve-email.outputs.contributor_email }}`) → VERIFIED branch → REJECTED branch → SCRAPE_BLOCKED branch → RATE_LIMITED branch. In all notification steps: if `steps.retrieve-email.outputs.email_missing == 'true'`, notify `secrets.ADMIN_EMAIL` with Issue link instead. `fetch-source.ts` must use `AbortController` with 30s timeout; `AzureOpenAI` client uses `timeout: 60000`. (C1/F1/E1 resolved)
- [x] T035 [US2] Add email notification steps to `verify-submission.yml` using `dawidd6/action-send-mail@v3` — `secrets.GMAIL_ADDRESS`, `secrets.GMAIL_APP_PASSWORD`. Recipients and subjects vary by outcome. Always sends to `steps.verify.outputs.contributor_email`. SCRAPE_BLOCKED/RATE_LIMITED also notify `secrets.ADMIN_EMAIL` (`james@rxai.com.au`).
- [x] T036 [US2] Create `.github/scripts/notify-contributor.ts` — export `buildEmailBody(outcome: string, data: NotificationData): string`. Returns formatted plaintext email for: VERIFIED (congratulations + PR link), REJECTED (reason + fix instructions), SCRAPE_BLOCKED (admin review notice), RATE_LIMITED (retry later notice).

---

## Phase 5: User Story 3 — Error Feedback for Users

**Story goal**: Every failure mode (network error, rate limit, server down) shows a clear, actionable message. Contributors are never left without feedback.

**Independent test**: (1) Block network, submit → error message shown immediately. (2) Submit 3× in 15 min → third shows rate limit countdown timer. (3) After pipeline completes → contributor email received with correct outcome message.

- [x] T037 [P] [US3] Add `showErrorState(code: string, message: string): void` in `src/submission/form.ts` — renders error in `<p role="alert" aria-live="assertive">` above Submit button. Handles: `RATE_LIMITED` (shows countdown from `Retry-After` header), `NETWORK_ERROR` (retry guidance), `SERVER_ERROR` (status page link).
- [x] T038 [P] [US3] Add `startRateLimitCountdown(retryAfterSeconds: number): void` in `src/submission/form.ts` — `setInterval` updating a `<time>` element displaying `MM:SS` remaining. On zero: clears error, re-enables Submit button, clears interval.
- [x] T039 [US3] Review and QA `.github/scripts/notify-contributor.ts` — send test emails for all 4 outcome types against a staging Issue. Confirm formatting, links, and sanitised content. Verify VERIFIED includes PR URL, REJECTED includes sanitised AI reason, SCRAPE_BLOCKED includes Issue URL, RATE_LIMITED is admin-only alert.

---

## Phase 6: User Story 4 — Admin Manual Override

**Story goal**: `HoHo1979` can apply "Verified" or "Rejected" labels to a Submission Issue to override the AI decision. Non-admins applying these labels get a blocking comment.

**Independent test**: As `HoHo1979`, apply "Verified" to a "Needs Fix" Issue → `admin-override.yml` fires → actor check passes → file created + PR opened. As any other user, apply "Verified" → comment posted: "Override rejected: only authorised administrators can trigger this action." No file created.

- [x] T040 [US4] Create `.github/scripts/check-admin.ts` — export `isAdmin(actor: string, adminList: string): boolean` (splits `ADMIN_USERNAMES` env var on comma, checks membership). Export `rejectOverride(octokit: Octokit, owner: string, repo: string, issueNumber: number, actor: string): Promise<void>` — posts "Override rejected: only authorised administrators can trigger this action." comment.
- [x] T041 [US4] Create `.github/workflows/admin-override.yml` — trigger: `on: issues: types: [labeled]`. Condition: `contains(github.event.issue.labels.*.name, 'submission')`. Permissions: same as verify-submission. Step 1: run `check-admin.ts` with `github.actor` — if not admin → call `rejectOverride()` and exit 0. Step 2 (if admin): call Worker `GET /api/email/{issueNumber}` (authenticated with `INTER_SVC_TOKEN`) — output `contributor_email`; if 404 set `email_missing=true`. Step 3: `github.event.label.name == 'Verified'` → run `create-content-file.ts`. Step 4: `github.event.label.name == 'Rejected'` → run `notify-contributor.ts rejected` (use `contributor_email` from Step 2, or `secrets.ADMIN_EMAIL` if `email_missing`) + close Issue via API. (C4 resolved)
- [x] T042 [US4] Verify idempotency in `create-content-file.ts` — if called via admin override on an Issue that already has a PR open (e.g., AI verified but PR was manually closed), handle gracefully: check for existing PR by branch name before creating a new one.

---

## Phase 6.5: Critical Infrastructure Fixes (analyze001 remediation)

**Purpose**: Address CRITICAL and HIGH gaps identified in `analyze001.md` — email relay, status relay, server-side validation, and form styling.

- [x] T050 [US1] Create `worker/src/email-store.ts` — export `storeContributorEmail(issueNumber: number, email: string, kv: KVNamespace): Promise<void>` and `retrieveContributorEmail(issueNumber: number, kv: KVNamespace): Promise<string | null>`. Uses `EMAIL_KV` binding with key `email:{issueNumber}`, TTL 30 days (2592000s). This is the ONLY server-side location where the real email is stored — per FR-006 and Australian Privacy Act 1988.
- [x] T051 [P] [US1] Create `worker/src/validator.ts` — export `validateSubmission(body: unknown): Submission | never`. Server-side validation mirroring client-side rules: email format (RFC 5322 regex), URL format + `isDomainAuthorized()` check, content min 50 chars and differs from template skeleton, valid `SubmissionCategory` and `TemplateType` enum values. Throws `ValidationError` with `{ field: string, message: string }` on failure. T026 depends on this.
- [x] T052 [US2] Add `POST /api/admin/status` route to `worker/src/index.ts` — accepts `{ status: SystemStatus, message: string }` body, authenticated by `INTER_SVC_TOKEN` header. Writes to `STATUS_KV` with key `system-status`, TTL 0 (no expiry — GitHub Models Pro rate limit resets monthly, not hourly; a 1-hour TTL causes false-positive `green` status). Admin manually POSTs `status: "green"` once quota is confirmed restored, or Action dynamically sets TTL from `x-ratelimit-reset` response header if available. Called by GitHub Actions after RATE_LIMITED or SCRAPE_BLOCKED outcomes per SC-005. (C2 resolved)
- [x] T053 [US2] Add `GET /api/email/:issueNumber` route to `worker/src/index.ts` — authenticated by `INTER_SVC_TOKEN` header. Calls `retrieveContributorEmail()`. Returns `{ email: string }` or 404. Called by verify-submission.yml and admin-override.yml to retrieve contributor email for notifications.
- [x] T054 [P] [US1] Create `submit/style.css` — dark-theme stylesheet for submission form using CSS custom properties consistent with root `style.css`. Tokens: `--bg-surface: #0a160f`, `--accent-green: #71dc8a`, `--accent-gold: #fecc00`, `--text-primary: #e8e8e8`, `--text-secondary: #abc7ff`. Styles: form layout, input fields, select dropdowns, textarea, submit button states (default/hover/disabled), status banner, error messages, success state, focus rings (`:focus-visible`). Typography: Space Grotesk for headings, Inter for body. Must pass WCAG 2.1 AA contrast ≥ 4.5:1. Link from `submit/index.html` via `<link rel="stylesheet" href="style.css">`.

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Status endpoint hardening, accessibility audit, SEO/GEO/AEO compliance, and final spec sync.

- [x] T043 Add 10-second KV caching to `worker/src/status-checker.ts` — after a live GitHub rate_limit API call, cache the result in STATUS_KV under key `status-live-check` with TTL 10s to prevent thundering-herd during concurrent form loads. This key is distinct from `system-status` (admin/Action override, T052). T025 reads both keys in priority order (system-status first). (B3/F2 resolved)
- [x] T044 [P] Accessibility audit `submit/index.html` — verify WCAG 2.1 AA: all inputs have `<label>` associations, error `<span>` elements use `aria-describedby`, status banner uses `<output role="status" aria-live="polite">` (non-urgent, per T015), field error elements use `<p role="alert" aria-live="assertive">` (urgent, per T037), disabled Submit has descriptive `aria-label`, all interactive elements have visible focus ring (`:focus-visible`), contrast ≥ 4.5:1. (D2 resolved — corrected from stale role="alert" on banner)
- [x] T045 [P] Add Schema.org JSON-LD to `submit/index.html` — `WebPage` schema with `name`, `description`, `url`, `isPartOf` (WebSite entity), `BreadcrumbList` (Home → Submit).
- [x] T046 [P] Verify SEO meta in `submit/index.html` — unique `<title>` 50–60 chars, `<meta name="description">` 120–160 chars, Open Graph `og:title`/`og:description`/`og:url`/`og:type`, Twitter Card tags, `<link rel="canonical">`.
- [x] T047 Update `Australia.md` index — add reference to submission pipeline under relevant section so the archive index stays current per constitution rule #2. Also add a "Submit Content" navigation link in the main site `index.html` and `main.ts` routing pointing to `/submit/`, so contributors can discover the form from the homepage (constitution rule #4 — wire up new pages). (E2 resolved)
- [x] T048 [P] Run `npm run build` from repo root — confirm all TypeScript in `src/` compiles to `dist/` without errors. Commit compiled `dist/submission/` output.
- [x] T049 Final spec sync — re-read `specs/001-simple-md-submission/spec.md`, verify all FR-001–FR-011 are addressed by tasks T001–T055. Update spec.md Status field from "Draft — Clarified" to "Implementation Ready". (F3 resolved — updated from stale T001–T048 range)
- [x] T055 [P] [US2] Add `ahpraStatus` frontmatter field to content files generated by `create-content-file.ts` (T033) — value is always `unverified` for community submissions. All existing medical HTML pages updated to display **"AHPRA Unverified"** badge using `ahpra-badge ahpra-badge--pending` class pattern. Badge is visually distinct (amber colour, 0.6 opacity), non-removable via the community pipeline, and persists until a verified AHPRA credential is associated via spec 002 or admin manual process. This satisfies FR-011.

---

## Dependencies

```
Phase 1 (Setup: T001–T008)
  └─► Phase 2 (Foundational types/templates: T009–T014)
        └─► Phase 3 [US1] (Form + Worker: T015–T028 + T050, T051, T054)  ← MVP deliverable
              └─► Phase 4 [US2] (AI verification: T029–T036 + T052, T053)
                    ├─► Phase 5 [US3] (Error feedback: T037–T039)
                    └─► Phase 6 [US4] (Admin override: T040–T042)
                                └─► Final Phase (Polish: T043–T049, T055)
```

---

## Parallel Execution Opportunities

**Phase 2** (after T009 types exist):
- T010 (categories) ‖ T011 (templates) ‖ T012 (authorized-domains)

**Phase 3** (frontend vs Worker are fully independent files):
- T015–T021 (form UI: `src/submission/` + `submit/`) ‖ T022–T027 (Worker: `worker/src/`)

**Phase 4** (parser and fetcher independent):
- T029 (parse-issue) ‖ T030 (fetch-source) → then T031 (verify-agent) depends on both
- T035 (email steps) ‖ T036 (notify-contributor.ts)

**Phase 6.5** (infrastructure fixes):
- T050 (email-store) ‖ T051 (validator) ‖ T054 (CSS) — all independent files

**Final Phase** (all independent):
- T043 ‖ T044 ‖ T045 ‖ T046 ‖ T048

---

## Implementation Strategy

**MVP (Phases 1–3 only — 31 tasks)**:
A working submission form creating GitHub Issues. Testable end-to-end. Delivers immediate value to non-technical contributors before AI verification is built.

**Recommended delivery order**:
1. **MVP**: Phases 1–3 + T050, T051, T054 (form + Worker + Issue creation + infrastructure)
2. **Core automation**: Phase 4 + T052, T053 (AI verification pipeline + status/email relay)
3. **Full product**: Phases 5–6 + Final (error UX, admin override, accessibility, SEO)

**Total tasks**: 55
| Phase | Tasks | Count |
|---|---|---|
| Phase 1 — Setup | T001–T008 | 8 |
| Phase 2 — Foundational | T009–T014 | 6 |
| Phase 3 — US1 (Form + Worker) | T015–T028 + T050, T051, T054 | 17 |
| Phase 4 — US2 (AI Verification) | T029–T036 + T052, T053 | 10 |
| Phase 5 — US3 (Error Feedback) | T037–T039 | 3 |
| Phase 6 — US4 (Admin Override) | T040–T042 | 3 |
| Final — Polish | T043–T049 + T055 | 8 |
