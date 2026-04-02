# Specification Analysis Report — 001-simple-md-submission

**Generated**: 2026-03-30  
**Analyzer**: speckit.analyze  
**Artifacts**: `spec.md` · `plan.md` · `tasks.md` · `constitution.md`  
**Feature**: Simple Markdown Submission Interface  
**Branch**: `001-simple-md-submission`  
**Constitution**: `.specify/memory/constitution.md` v1.0.0

> **READ-ONLY REPORT** — No files were modified. Remediation requires explicit user approval.

---

## Findings

| ID | Category | Severity | Location(s) | Summary | Recommendation |
|----|----------|----------|-------------|---------|----------------|
| C1 | Underspecification | **CRITICAL** | spec FR-006, tasks T029 | Email relay mechanism undefined. T029 says contributor email comes from `CONTRIBUTOR_EMAIL` env var "passed by Worker via Issue metadata" — but `on: issues` GitHub Actions trigger has no mechanism to receive env vars set by an external API caller. Email MUST NOT be in Issue body (FR-006/Privacy Act). No task stores or retrieves the real email between Worker and Action. | Add task: `worker/src/email-store.ts` (KV write keyed by Issue number) + Worker `/api/email/{issueNumber}` retrieval endpoint, or inject email via a separate `workflow_dispatch` call from the Worker. Update T029, T027, and T013. |
| E1 | Coverage Gap | **CRITICAL** | tasks T022–T027, plan.md | No task creates `EMAIL_KV` binding in `wrangler.toml`. plan.md references `EMAIL_KV` for storing contributor email; T027 binds only `RATE_LIMIT`. Without `EMAIL_KV`, FR-006 (email redaction + retrieval) cannot be implemented. | Add `EMAIL_KV` binding to T027 (wrangler.toml). Add new task for `worker/src/email-store.ts` implementing `storeEmail(issueNumber, email)` and `retrieveEmail(issueNumber)`. |
| B1 | Ambiguity | **HIGH** | tasks T029, spec FR-006 | Worker-to-Action email handoff has no defined mechanism. Worker creates GitHub Issue (body has redacted email). GitHub Action fires on `issues: opened`. The Action must retrieve the real email — but HOW is unspecified. KV retrieval, a Worker endpoint, or a workflow_dispatch relay are all viable — none is chosen. | Decision required: adopt KV approach (Worker stores `email:{issueNumber}` in `EMAIL_KV`; Action calls Worker `/api/email/{N}` with shared `INTER_SVC_TOKEN`). Encode decision in plan.md and update T029. |
| B2 | Ambiguity | **HIGH** | tasks T025, spec SC-005, spec FR-010 | T025 `status-checker.ts` calls GitHub's `/rate_limit` REST API to derive system status. This reflects **GitHub Issues API** quota only — NOT **GitHub Models API** quota (separate endpoint: `/rate_limit` for models is under `resources.code_search`, or separate Models-specific header). SC-005 requires status to reflect `red` when GitHub Models rate limit is reached — T025 does not cover this. | T025 should ALSO call `GET https://models.inference.ai.azure.com/` (or parse `X-RateLimit-Remaining` from verify-agent responses). Alternatively, the verify workflow should write status to KV when Models returns 429. |
| E2 | Coverage Gap | **HIGH** | tasks T031, T034, spec SC-005 | No task makes the GitHub Action update the Worker's status state when the GitHub Models rate limit is hit. T031 handles `RATE_LIMITED` output but only sets GitHub Actions step output variables — it cannot write to the Worker's KV. The status banner (FR-010) will never show `red` for Models exhaustion without an explicit Action→Worker status update mechanism. | Add task: Action calls `POST /api/admin/status` (Worker endpoint with shared `INTER_SVC_TOKEN`) after any RATE_LIMITED or SCRAPE_BLOCKED outcome. T027 must add `STATUS_KV` binding and `INTER_SVC_TOKEN` secret placeholder. |
| E3 | Coverage Gap | **HIGH** | tasks T026, spec FR-006 | No task creates `worker/src/validator.ts` (server-side input validation). T018 handles client-side validation. T026 (`index.ts`) references a validate step, but no task explicitly creates the validation module. Malicious actors can POST directly to the Worker endpoint, bypassing all form-level checks (category enum, min-length, authorized domain, email format). | Add task: `worker/src/validator.ts` — `validateSubmission(body: unknown): Submission | ValidationError`. Mirror the client-side rules in T018 (email format, URL authorized domain, content min 50 chars, valid enum values). T026 depends on this task. |
| F1 | Inconsistency | **HIGH** | tasks T027, T043, plan.md | `wrangler.toml` (T027) binds only `RATE_LIMIT` KV. Three KV namespaces are needed: `RATE_LIMIT` (rate limiting), `EMAIL_KV` (email storage — mentioned in plan.md), and a `STATUS_KV` or cache namespace (T043 adds KV caching to status-checker without specifying which KV). The `Env` interface in T013 only lists `RATE_LIMIT`. | Update T027 to bind all three KV namespaces. Update T013 `Env` interface to include `EMAIL_KV: KVNamespace` and `STATUS_KV: KVNamespace`. T043 must reference `STATUS_KV` explicitly. |
| D1 | Constitution | **HIGH** | tasks T031, T036, constitution §IV | LLM-generated `rejection_reason` (from GitHub Models API) flows into a GitHub Issue comment (T034) and email body (T036) without sanitisation. Constitution §IV: "LLM output is untrusted — validate and sanitise AI-generated content before rendering." A crafted model response could inject Markdown, links, or prompt injection into the Issue. | Add explicit sanitisation step in `verify-agent.ts`: strip non-printable chars, reject responses not matching `^VERIFIED$` or `^REJECTED: .{1,500}$`. Use `textContent`-style escaping before inserting into GitHub Issue comment body. |
| B3 | Ambiguity | **MEDIUM** | tasks T013 | T013 says Worker `types.ts` should import from `src/submission/types.ts` "via relative path or copy for Worker isolation." Cloudflare Workers use Wrangler's build pipeline — relative imports crossing `worker/` → `src/` boundaries may fail depending on `tsconfig.json` `paths` and Wrangler entry resolution. | Decide: (a) Copy shared types to `worker/src/shared-types.ts` (Worker-isolated copy, updated manually); OR (b) Add `paths` mapping in `worker/tsconfig.json` pointing to `../src/submission/types.ts`. Encode choice in T013 description. |
| B4 | Ambiguity | **MEDIUM** | tasks T043, T027 | T043 adds KV caching to `status-checker.ts` — "cache `status:{computed}` in KV with TTL 10s" — but which KV namespace? T027 only binds `RATE_LIMIT`. Using `RATE_LIMIT` for status cache risks key collision (`ratelimit:{ip}` vs `status:green`). A dedicated `STATUS_KV` binding is implied but not explicit. | T043 must reference `STATUS_KV` (to be added to T027). Add `STATUS_KV: KVNamespace` to T013 Env interface. |
| D2 | Constitution | **MEDIUM** | tasks T015, T037, constitution §II | T015 specifies `<div id="status-banner" role="alert" aria-live="polite">`. T037 specifies "renders error in `<div role="alert">`". Constitution §II: "Never use `<div>` or `<span>` where a semantic element exists." For live notifications, `<output>` (form outputs) or `<p aria-live="polite">` may be more semantically appropriate than bare `<div>`. | Change T015 and T037 to use `<output id="status-banner" role="status" aria-live="polite">` for non-urgent status, and `<p role="alert" aria-live="assertive">` for form errors. This satisfies both WAI-ARIA and the constitution. |
| D3 | Constitution | **MEDIUM** | tasks T015, Final Phase, constitution §V | No task creates CSS for `submit/index.html`. The page needs dark-theme styling (`#0a160f` background, `#71dc8a` / `#fecc00` accents, Space Grotesk + Inter fonts) consistent with constitution §V design identity. T015 builds the HTML scaffold; T044 audits accessibility — but no task writes the CSS. | Add task in Phase 3: create `submit/style.css` using CSS variables consistent with `style.css`. Must define tokens for the submission form: input backgrounds, focus rings, error colours, button states. Alternatively, reference shared `style.css` from `submit/index.html`. |
| C3 | Underspecification | **MEDIUM** | tasks T033, spec EC-008 | T033 derives `CONTENT_PATH` from "category + slugified first `# heading`" but the slugification algorithm is unspecified. Two submissions with near-identical headings will either overwrite each other or create unexpected archive chains. Edge case EC-008 handles the conflict but relies on a deterministic path. | Specify slugification in T033: lowercase, replace non-alphanumeric with hyphens, collapse consecutive hyphens, trim hyphens, max 80 chars. Document in `contracts/action-agent.md`. |
| C4 | Underspecification | **MEDIUM** | tasks T034, spec FR-007 | T034 lists VERIFIED/REJECTED/SCRAPE_BLOCKED/RATE_LIMITED branches but doesn't specify the GitHub Actions `if:` condition syntax. GitHub Actions `if:` on steps uses `steps.{step-id}.outputs.status == 'VERIFIED'`. Without explicit step IDs and condition syntax, the workflow is ambiguous. | Update T034 to specify: step ID for verify-agent = `verify`; downstream steps use `if: steps.verify.outputs.status == 'VERIFIED'` etc. Ensures exactly one branch executes per run. |
| F2 | Inconsistency | **MEDIUM** | spec FR-004/Edge Cases, tasks T030 | "fact-check URL" (spec.md, FR-004) vs "source URL" (tasks T030, plan.md, `fetchSourceContent`). The Issue body section heading set by T023 must match what T029's parser looks for. If T023 writes `## Fact-Check URL` but T029 parses for `## Source URL`, the parse will fail. | Standardise on "Fact-Check URL" (matches spec) in both T023 (Issue body section heading) and T029 (parser section key). Update plan.md references if needed. |
| E4 | Coverage Gap | **MEDIUM** | tasks (no task), spec FR-001 | No task styles `submit/index.html`. FR-001 requires a web UI accessible without technical setup — implying a polished, functional appearance. A bare-HTML form with no CSS is technically accessible but fails the "simple for non-technical users" intent and the constitution design identity requirement. | Add task in Phase 3: `submit/style.css` or inline `<style>` block in `submit/index.html`, applying dark-theme design tokens. |
| A1 | Duplication | **MEDIUM** | tasks T036, T039 | T036 creates `notify-contributor.ts` with all 4 email body functions (VERIFIED, REJECTED, SCRAPE_BLOCKED, RATE_LIMITED). T039 says "Complete email body templates in notify-contributor.ts — verify all 4 outcome types." T039's scope overlaps entirely with T036, risking repeated work or confusion about when T036 is "done." | Reframe T039 as a testing/QA task: "Review `notify-contributor.ts` — send test emails for all 4 outcomes against a staging Issue. Confirm formatting and links." Remove the word "Complete" to avoid implying T036 left work undone. |
| C5 | Underspecification | **MEDIUM** | tasks T021, constitution §IV | T021 creates a success link to the GitHub Issue (`element.href`). The spec says "No page redirect occurs." If the link opens in a new tab, constitution §IV requires `rel="noopener noreferrer"`. If it's an inline link, no new tab is needed. This is unspecified. | Specify in T021: render as `<a href="{issueUrl}" rel="noopener noreferrer">Issue #{N}</a>` (inline, no new-tab is acceptable). Constitution requires rel attribute if `target="_blank"` is used. |
| B5 | Ambiguity | **LOW** | tasks T007 | T007 creates a `Conflict` label not referenced in spec.md. All spec-defined labels are: `submission`, `pending-review`, `Verified`, `Needs Fix`, `Scrape Blocked`, `Pending Human Review`, `Rejected`. "Conflict" does not appear in any requirement, user story, or edge case. | Remove `Conflict` from T007's label list unless a specific spec item is identified that uses it. |
| E5 | Coverage Gap | **LOW** | tasks T049 | T049 references `specs/001-simple-md-submission/checklists/requirements.md` which does not exist and is never created by any task. T049 would fail at execution. | Either create the `checklists/` directory and `requirements.md` as a new task before T049, or change T049 to update a file that already exists (e.g., update `spec.md` status field from "Draft — Clarified" to "Implementation Ready"). |
| F3 | Inconsistency | **LOW** | tasks T025, T043 | T025 (Phase 3) creates `status-checker.ts` basic implementation. T043 (Final Phase) adds KV caching to the same file. This dependency (T043 extends T025) is not listed in the Dependencies section. A developer working Final Phase without knowing T025's content might rewrite T043 incorrectly. | Add `T043 → depends on T025` to the Dependencies section. |
| D4 | Constitution | **LOW** | tasks T015, constitution §Content #8 | T015 says "footer with RxAI credit" but doesn't specify the exact HTML required by constitution §Content Conventions #8: `<span class="footer-built-by">Built by <a href="..." class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>`. | Update T015 to include the exact required HTML snippet per constitution. |

---

## Coverage Summary

| Requirement | Has Task(s)? | Task IDs | Notes |
|-------------|-------------|----------|-------|
| FR-001 Web UI | ✅ | T015 | Full page built |
| FR-002 Category selection | ✅ | T010, T016, T017 | Categories + form controller |
| FR-003 Template pre-fill | ✅ | T011, T017 | Templates + applyTemplate |
| FR-004 Fact-check URL field | ✅ | T018 | Client-side validateUrl |
| FR-005 Contributor email field | ✅ | T018 | Client-side validateEmail |
| FR-006 GitHub Issue creation | ✅ | T023, T024, T026 | issue-builder + github-client + index |
| FR-006 Email redaction | ⚠️ | T023 | Builds redacted body, but email storage/retrieval missing (**E1, C1**) |
| FR-006 Rate limit 2/IP/15min | ✅ | T022 | rate-limiter.ts |
| FR-006 429 response | ✅ | T020, T026 | Form + Worker |
| FR-007 Action on Issue open | ✅ | T034 | verify-submission.yml |
| FR-007 GitHub Models semantic verify | ✅ | T031, T032 | verify-agent.ts + prompt |
| FR-007 Admin actor check | ✅ | T040 | check-admin.ts |
| FR-008 VERIFIED path (archive + PR) | ✅ | T033, T034 | create-content-file.ts |
| FR-009 REJECTED path | ✅ | T034, T035, T036 | Workflow + email |
| FR-010 /api/status endpoint | ⚠️ | T025, T026, T043 | Derives Issues quota; does NOT cover Models quota or Action→Worker status update (**B2, E2**) |
| SC-001 < 3 min UX | ✅ (indirect) | T015–T021 | UX quality, not measurable build item |
| SC-002 100% correct categorization | ✅ | T016, T017 | Category → template selection |
| SC-003 Pipeline < 5 min | ⚠️ | — | Operational; no performance test task |
| SC-004 95% AI accuracy | ⚠️ | — | Post-launch metric; not buildable |
| SC-005 Status red within 60s | ❌ | T025 partial | Models quota not checked; Action→Worker update missing (**B2, E2**) |
| EC-001 Invalid URL real-time | ✅ | T018 | validateUrl() |
| EC-002 Rate limit exceeded | ✅ | T022, T020, T037, T038 | Limit + form countdown |
| EC-003 GitHub API limits | ✅ | T024, T026 | Backoff + 503 |
| EC-004 Empty content | ✅ | T018 | validateContent() |
| EC-005 Scraping blockers | ✅ | T030, T034 | null return → SCRAPE_BLOCKED |
| EC-006 AI hallucination | ✅ | T040–T042 | Admin override |
| EC-007 GitHub Models rate limit | ⚠️ | T031, T034 | Handled locally; status update to Worker missing |
| EC-008 File path conflict | ✅ | T033 | Archive + overwrite |
| EC-009 Post-submit UX | ✅ | T021 | showSuccessState inline |

---

## Constitution Alignment Issues

| Principle | Issue | Severity | Task(s) |
|-----------|-------|----------|---------|
| §II — No `<div>` where semantic element exists | Status banner and error elements use `<div role="alert">` | MEDIUM | T015, T037 |
| §IV — LLM output is untrusted | AI `rejection_reason` not sanitised before Issue comment / email | HIGH | T031, T036 |
| §IV — `rel="noopener noreferrer"` on `_blank` links | Success message link rel attribute unspecified | LOW | T021 |
| §V — Design identity tokens | No CSS task for `submit/index.html` dark-theme styling | MEDIUM | T015, Phase 3 |
| §Content #8 — RxAI footer exact HTML | T015 says "footer with RxAI credit" without exact HTML | LOW | T015 |

---

## Unmapped Tasks

All tasks (T001–T049) map to at least one functional requirement or user story. No orphaned tasks detected.

---

## Metrics

| Metric | Value |
|--------|-------|
| Total FRs | 10 (FR-001–FR-010, some multi-part) |
| Total Edge Cases | 9 (EC-001–EC-009) |
| Total Success Criteria | 5 (SC-001–SC-005) |
| Total Tasks | 49 (T001–T049) |
| FRs Fully Covered | 8 / 10 (80%) |
| FRs Partially Covered | 2 (FR-006 email relay, FR-010 Models status) |
| Edge Cases Covered | 8 / 9 (89%) |
| SCs Covered (buildable) | 2 / 3 buildable SCs (SC-001, SC-002 ✅; SC-005 ❌) |
| Critical Issues | **2** (C1, E1) |
| High Issues | 5 |
| Medium Issues | 9 |
| Low Issues | 5 |
| Ambiguity Count | 5 (B1–B5) |
| Duplication Count | 1 (A1) |
| Constitution Violations | 5 (2 HIGH, 1 MEDIUM, 2 LOW) |

---

## Next Actions

### ⛔ Resolve before `/speckit.implement`

Two CRITICAL issues will cause implementation failures:

1. **C1 + E1 together — Email relay gap** (blocking US2 email notifications):
   - Add `EMAIL_KV` binding to `wrangler.toml` (T027)
   - Add new task for `worker/src/email-store.ts` with `storeEmail(issueNumber, email)` + `retrieveEmail(issueNumber)` (KV, TTL 30 days)
   - Add new task for `GET /api/email/:issueNumber` Worker route (authenticated with `INTER_SVC_TOKEN`)
   - Update T029 to call this endpoint instead of using a phantom env var
   - Add `EMAIL_KV: KVNamespace` and `INTER_SVC_TOKEN: string` to T013 Env interface

2. **B2 + E2 together — Status endpoint doesn't reflect GitHub Models exhaustion** (SC-005 fails):
   - Add `STATUS_KV` binding to T027
   - Add new task for `POST /api/admin/status` Worker route (sets KV, authenticated)
   - Update T031 to call this Worker endpoint after RATE_LIMITED verdict
   - Update T025 to read `STATUS_KV` (written by Action) in addition to live `/rate_limit` check

### ✅ Safe to proceed with caveats (HIGH/MEDIUM)

The following HIGH/MEDIUM issues should be noted during implementation but do not block starting Phase 1–2:

- **E3** — Add server-side validator task before T026 implementation
- **D1** — Change `<div>` to `<output>` / `<p>` in T015, T037
- **D2** — Add sanitisation for AI rejection_reason before Issue comment
- **D3 + E4** — Add CSS task for submission form in Phase 3
- **F2** — Standardise on "Fact-Check URL" (not "source URL") across T023 + T029

### Suggested commands

```
# To fix critical issues C1+E1 and B2+E2:
/speckit.specify  → update FR-006 with explicit KV email relay mechanism
                     update FR-010 with explicit Action→Worker status update

# To add missing tasks:
# Manually add to tasks.md:
# T050: worker/src/email-store.ts (store/retrieve email by issue number)
# T051: GET /api/email/:n route in worker/src/index.ts
# T052: POST /api/admin/status route in worker/src/index.ts
# T053: submit/style.css (dark-theme CSS variables for form)
# T054: Update tasks.md + checklists/ so T049 has a file to update

# To address constitution issues:
/speckit.plan → add CSS/styling phase note and sanitisation requirement
```

---

## Remediation Offer

Would you like me to suggest concrete remediation edits for the top issues?

The highest-value fixes to apply before implementation start are the **5 CRITICAL/HIGH gaps** above (C1, E1, B2, E2, E3). I can:

1. **Draft 5 new tasks** (T050–T054) to add to `tasks.md` for the missing email store, admin status route, server-side validator, and CSS
2. **Rewrite T025, T027, T029** to resolve the ambiguities
3. **Update spec.md FR-006 and FR-010** to encode the resolved mechanisms explicitly

Reply **"yes, fix all"**, **"fix critical only"**, or specify which finding IDs to address.
