# Specification Analysis Report — 001-simple-md-submission (v2)

**Generated**: 2026-03-30  
**Analyzer**: speckit.analyze  
**Artifacts**: `spec.md` · `plan.md` · `tasks.md` · `constitution.md`  
**Feature**: Simple Markdown Submission Interface (Community Edition)  
**Branch**: `001-simple-md-submission`  
**Constitution**: `.specify/memory/constitution.md` v1.0.0  
**Prior report**: `analyze001.md` — 21 findings (2 CRITICAL, 5 HIGH resolved via plan/tasks update)

> **READ-ONLY REPORT** — No files were modified. Remediation requires explicit user approval.

---

## Findings

| ID | Category | Severity | Location(s) | Summary | Recommendation |
|----|----------|----------|-------------|---------|----------------|
| C1 | Underspecification | **CRITICAL** | tasks T031 vs T029, T053 | T031 still lists `CONTRIBUTOR_EMAIL` as a direct env var read (`Reads env: GITHUB_TOKEN, ISSUE_NUMBER, ISSUE_BODY, CONTRIBUTOR_EMAIL`) AFTER T029 changed the email retrieval mechanism to a Worker endpoint (`GET /api/email/{issueNumber}`). Two contradictory email retrieval mechanisms coexist in the same pipeline phase. | Remove `CONTRIBUTOR_EMAIL` from T031's env var list. Define an explicit workflow step (before T031 runs) that calls `GET /api/email/{issueNumber}` via the Worker (per T053) and exports the email as a step output. T031 then receives it via `${{ steps.get-email.outputs.email }}`. |
| D1 | Constitution | **CRITICAL** | tasks T021, constitution §IV | T021 describes the upsell anchor as an HTML string literal: `<a href="https://app.rxai.com.au" rel="noopener noreferrer">Try RxAI Premium</a>`. The same task also says "All text set via `textContent`; link set via `element.href`." The HTML string implies `innerHTML` injection. Even though the URL is hardcoded (not user input), injecting HTML strings via `innerHTML` violates constitution §IV ("Never use `innerHTML` with unsanitised input") regardless of string origin — the pattern trains developers toward unsafe rendering. | Rewrite T021 to specify: create the upsell element via DOM API — `const a = document.createElement('a'); a.href = 'https://app.rxai.com.au'; a.textContent = 'Try RxAI Premium'; a.rel = 'noopener noreferrer';` — then `section.appendChild(a)`. Remove the HTML snippet from the task description entirely. |
| C2 | Underspecification | **HIGH** | tasks T052, spec EC-007 | T052 sets STATUS_KV with `TTL 3600s (1 hour auto-recovery)`. GitHub Models Pro rate limit is 300 requests/month — it does NOT reset hourly. After 1 hour, STATUS_KV expires and status auto-returns to `green`, causing the form to accept new submissions that will hit a still-exhausted AI quota. Contributors will submit successfully (GitHub Issue created), then verification will fail with RATE_LIMITED, creating a silent pipeline failure loop. | Set TTL to 0 (no expiry) and require manual reset by admin, OR calculate expiry from the GitHub Models API `x-ratelimit-reset` header (usually start of next month) and set TTL dynamically. Document the chosen approach in T052. |
| C3 | Underspecification | **HIGH** | tasks T029, T053 | Neither T029 nor T053 specifies error handling when `GET /api/email/{issueNumber}` returns 404 (EMAIL_KV expired or submission predates the email-store feature). The contributor email is silently lost — no notification is sent, no fallback. | Add to T029: if endpoint returns 404 or network error, set `contributor_email` output to empty string and set a `email_missing` flag. Add to T034 (workflow): if `email_missing` is true, send admin notification to `secrets.ADMIN_EMAIL` with Issue link for manual follow-up. |
| B1 | Ambiguity | **HIGH** | tasks T013 | "Import shared types from `src/submission/types.ts` (via relative path or copy for Worker isolation)" — the choice between relative import and copying remains unresolved from analyze001 B3. The Cloudflare Workers Wrangler build pipeline may not resolve cross-package relative imports without explicit `paths` config in `worker/tsconfig.json`. | Decide and encode: Option A — add `"paths": { "@shared/*": ["../src/submission/*"] }` to `worker/tsconfig.json` and reference as `import { Submission } from '@shared/types'`; Option B — copy `types.ts` to `worker/src/shared-types.ts` and note it must be kept in sync manually. Pick one, remove the ambiguity. |
| B2 | Ambiguity | **HIGH** | tasks T021 | T021 specifies upsell as "MAY include" — the optional nature is correct — but the rendering mechanism is contradictory within the same task (see D1 above). | See D1. |
| F1 | Inconsistency | **HIGH** | tasks T029, T031, T035 | Email retrieval is defined in two incompatible places: T029 says email is retrieved from Worker endpoint; T031 says verify-agent.ts reads `CONTRIBUTOR_EMAIL` env var directly. T035 references `steps.verify.outputs.contributor_email` (implying T031 outputs it). The workflow sequence is undefined: who retrieves the email and when? | Establish canonical sequence: (1) Workflow step 1 — call Worker `GET /api/email/{N}` → output `contributor_email`; (2) T031 verify-agent.ts receives `CONTRIBUTOR_EMAIL` as an env var SET FROM step 1's output, not fetched independently. Update T031 to clarify it receives (not fetches) the email. |
| D2 | Constitution | **HIGH** | tasks T044, T015, constitution §III | T044 accessibility audit criteria state "status banner has `role="alert"` + `aria-live="polite"`" but T015 already changed the status banner to `<output role="status" aria-live="polite">`. If T044 is executed literally, a correctly implemented `<output role="status">` would be flagged as non-compliant, causing a false audit failure and potentially reverting T015's correct semantic change. | Update T044 audit criteria to match T015's implementation: verify `<output id="status-banner" role="status" aria-live="polite">` for non-urgent status; verify `<p role="alert" aria-live="assertive">` for field errors (T037). Distinguish the two live-region types in the audit checklist. |
| E1 | Coverage Gap | **HIGH** | tasks T034, spec SC-003 | SC-003 requires the full AI verification pipeline to complete within 5 minutes. T034 (verify-submission.yml) specifies no `timeout-minutes` at job or step level. A hung `fetch-source.ts` call (e.g., large source page, slow government site) or GitHub Models latency spike could block the runner indefinitely — violating SC-003 and consuming Actions runner minutes. | Add to T034: set `timeout-minutes: 5` at the job level, plus per-step timeouts for the high-risk steps: fetch-source (30s via Node.js `AbortController`), verify-agent AI call (60s via `AzureOpenAI` timeout option). |
| C4 | Underspecification | **MEDIUM** | tasks T041 | T041 (admin-override.yml) calls `notify-contributor.ts rejected` to email the contributor when admin rejects. But T041 does not include a step to retrieve the contributor email via `GET /api/email/{issueNumber}` (per T053 design). Admin-triggered rejections will fail to notify contributors because the email retrieval step is missing. | Add to T041 — before calling notify-contributor: call `GET /api/email/{issueNumber}` with `INTER_SVC_TOKEN`, same as T029's workflow-level retrieval. Pass result as env var to notify-contributor step. |
| B3 | Ambiguity | **MEDIUM** | tasks T043 | T043 caches status in KV under key `status:{computed}` — this `{computed}` placeholder is not a valid KV key. The actual key value is unspecified. T052 writes `system-status` to STATUS_KV; T025 reads `system-status`. T043's cache key appears to be a different namespace than the admin-override key, but this is not explicit. | Specify T043's cache key explicitly: e.g., `status-live-check` (for the cached live GitHub API result), distinct from `system-status` (admin-written override per T052). Document the two-key STATUS_KV schema in T025. |
| F2 | Inconsistency | **MEDIUM** | tasks T043, T052, T025 | STATUS_KV has two competing write paths with different keys: T052 writes `system-status` (admin override, TTL 3600s) and T043 caches the live API result under `status:{computed}` (ambiguous key, TTL 10s). T025 reads `system-status` for the override — but never reads T043's cached value. T043's cache is therefore orphaned and non-functional as described. | Clarify the STATUS_KV schema: T043 caches the live GitHub API result under `status-live-check` (TTL 10s). T025 reads in priority order: (1) `system-status` (admin override, T052) → if present, use it; (2) `status-live-check` (cached live check, T043) → if present, use it; (3) live GitHub API call → cache result in `status-live-check`. Update T025 and T043 descriptions. |
| D3 | Constitution | **MEDIUM** | tasks T028, constitution §SEO | T028 adds `submit/` to `sitemap.xml`. Constitution §SEO states "`sitemap.xml` at root, referenced in `robots.txt`." No task verifies that `robots.txt` contains the Sitemap directive. | Add to T028: verify/add `Sitemap: https://australiamd.org/sitemap.xml` to `robots.txt`. |
| E2 | Coverage Gap | **LOW** | tasks (none), spec FR-001 | No task adds a navigation link to `submit/index.html` from the main site (`index.html` or `main.ts`). The submission form is only discoverable if users know the URL directly — reducing contribution velocity, which contradicts the spec's growth goal (20,000 practitioners by Month 12). | Add to T047 or as a new task: add "Submit Content" link in `index.html` site navigation and/or `main.ts` routing, so contributors can discover the form from the homepage. |
| F3 | Inconsistency | **LOW** | tasks T049 | T049 says "verify all FR-001–FR-010 are addressed by tasks T001–T048" but tasks now run to T054. The coverage verification range is stale. | Update T049 to reference T001–T054. |

---

## Coverage Summary

| Requirement | Has Task(s)? | Task IDs | Notes |
|-------------|-------------|----------|-------|
| FR-001 Web UI | ✅ | T015, T054 | HTML page + dark-theme CSS |
| FR-002 Category selection | ✅ | T010, T016, T017 | `CATEGORIES` + form controller + `populateTemplates` |
| FR-003 Template pre-fill | ✅ | T011, T017 | `TEMPLATES` + `applyTemplate` |
| FR-004 Fact-check URL field | ✅ | T018 | `validateUrl` + `isDomainAuthorized` |
| FR-005 Contributor email field | ✅ | T018, T050 | `validateEmail` + email-store |
| FR-006 Issue creation | ✅ | T022–T024, T026, T050, T051 | Full Worker proxy stack |
| FR-006 Email redaction | ✅ | T023, T050, T053 | Redaction in issue-builder + KV store + retrieval endpoint |
| FR-006 Rate limiting | ✅ | T022, T027 | `rate-limiter.ts` + KV binding |
| FR-007 Action trigger | ✅ | T034 | `verify-submission.yml` |
| FR-007 AI semantic verification | ✅ | T031, T032 | `verify-agent.ts` + `FACT_CHECK_SYSTEM_PROMPT` |
| FR-007 Admin actor guard | ✅ | T040 | `check-admin.ts` |
| FR-008 VERIFIED path | ✅ | T033, T034, T042 | `create-content-file.ts` + workflow + idempotency |
| FR-009 REJECTED path | ✅ | T034, T035, T036 | Workflow branches + email notification |
| FR-010 `/api/status` endpoint | ⚠️ | T025, T026, T043, T052 | Covered but STATUS_KV key schema inconsistent (F2) and TTL mismatch (C2) |
| SC-005 (buildable — status red < 60s) | ⚠️ | T052 (partial) | TTL 3600s causes false-positive `green` before monthly rate limit resets (C2) |

---

## Constitution Alignment Issues

| Principle | Issue | Severity | Task(s) |
|-----------|-------|----------|---------|
| §IV — `innerHTML` prohibition | T021 upsell link described as HTML string implies `innerHTML` injection | **CRITICAL** | T021 |
| §III — WAI-ARIA semantics | T044 audit criteria reference stale `role="alert"` for status banner; T015 now uses `<output role="status">` | **HIGH** | T044 |
| §SEO — `robots.txt` Sitemap directive | T028 updates sitemap.xml but no task verifies `robots.txt` | **MEDIUM** | T028 |

---

## Unmapped Tasks

All 54 tasks (T001–T054) map to at least one functional requirement or user story. No orphaned tasks detected.

**Newly verified mappings** (T050–T054 from analyze001 remediation):
- T050 → FR-006 (email storage, Privacy Act compliance)
- T051 → FR-006 (server-side validation)
- T052 → FR-010 (status endpoint, SC-005)
- T053 → FR-006 (email retrieval for Action notifications)
- T054 → FR-001 (web UI with design identity compliance)

---

## Metrics

| Metric | Value |
|--------|-------|
| Total FRs (multi-part counted separately) | 10 |
| Total tasks | 54 |
| FR coverage (≥1 task) | 10 / 10 (100%) |
| SC-005 (buildable) fully covered | ⚠️ Partial (TTL mismatch — C2) |
| Critical issues | **2** (C1, D1) |
| High issues | 5 (C2, C3, B1, D2, E1, F1) → 6 |
| Medium issues | 4 (C4, B3, F2, D3) |
| Low issues | 2 (E2, F3) |
| Ambiguity count | 3 (B1, B2, B3) |
| Duplication count | 0 (A1 from analyze001 fully resolved) |
| Constitution violations | 3 (1 CRITICAL, 1 HIGH, 1 MEDIUM) |
| Findings from analyze001 resolved | 21 of 21 ✅ |
| Net new findings this pass | **15** |

---

## Progress Since analyze001.md

| Category | analyze001 | analyze002 | Change |
|---|---|---|---|
| CRITICAL | 2 | 2 | ±0 (new ones; old ones resolved) |
| HIGH | 5 | 6 | +1 |
| MEDIUM | 9 | 4 | -5 |
| LOW | 5 | 2 | -3 |
| Total | 21 | 15 | **-6** |

The analyze001 critical findings (email relay gap, status endpoint gap) are now addressed in the task list (T050–T054). However, 2 new criticals emerged from the update: a contradictory email retrieval mechanism (C1) and a constitution violation in the upsell rendering (D1).

---

## Next Actions

### ⛔ Resolve before `/speckit.implement`

Two CRITICAL issues will cause implementation defects if not resolved first:

**C1 — Contradictory email retrieval (T031 vs T029/T053):**
The simplest fix: update T031 to remove `CONTRIBUTOR_EMAIL` from its own env var list. Add an explicit workflow step in T034 that runs BEFORE verify-agent.ts, calls `GET /api/email/{N}` from the Worker (per T053), and exports the email as `${{ steps.get-email.outputs.email }}`. T031 then reads this as its `CONTRIBUTOR_EMAIL` env var (received, not fetched).

**D1 — `innerHTML`-implied rendering in T021 upsell:**
Replace the HTML string with DOM API instructions. One line change to T021: `const upsell = document.createElement('a'); upsell.href = 'https://app.rxai.com.au'; upsell.textContent = 'Try RxAI Premium'; upsell.rel = 'noopener noreferrer'; section.appendChild(upsell);`

### ⚠️ Resolve before Phase 4 implementation (HIGH issues)

- **C2** — Fix STATUS_KV TTL before T052 is coded (monthly vs hourly reset)
- **C3** — Add 404 fallback logic to T029 and T034 before email retrieval is wired
- **D2** — Update T044 audit criteria before accessibility audit runs
- **E1** — Add `timeout-minutes: 5` to T034 before workflow is created
- **F1** — Consolidate email retrieval sequence across T029/T031/T035 (same fix as C1)

### ✅ Safe to proceed with Phase 1–3 (MEDIUM/LOW)

Issues B3, C4, F2, D3, E2, F3 can be addressed during or after Phase 3 implementation without blocking Phase 1 or 2.

### Suggested edits
```
tasks.md:
  - T021: replace HTML string with DOM API instruction
  - T029: add 404 fallback behavior
  - T031: remove "CONTRIBUTOR_EMAIL" from self-fetched env vars; clarify it receives from prior step
  - T034: add timeout-minutes: 5; add explicit email-retrieval step before verify-agent
  - T041: add email retrieval step before notify-contributor
  - T043: replace {computed} key with literal key name e.g. status-live-check
  - T044: update audit criteria to match T015's <output role="status">
  - T049: update task range to T001–T054
  - T052: change TTL from 3600s to 0/dynamic based on rate-limit-reset
```

---

## Remediation Offer

Would you like me to apply concrete remediation edits for the top issues? The highest-value fixes before implementation begin are the **2 CRITICAL + 3 HIGH** items above. I can:

1. **Update T021, T029, T031, T034, T041** (C1 + D1 + C3 + F1 — email chain + upsell rendering)
2. **Update T052** (C2 — TTL mismatch)
3. **Update T044** (D2 — stale audit criteria)
4. **Update T043** (B3/F2 — KV key naming)

Reply **"yes, fix all"**, **"fix critical only"**, or specify finding IDs to address.
