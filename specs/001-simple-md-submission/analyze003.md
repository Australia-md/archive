# Specification Analysis Report — 001-simple-md-submission (v3)

**Generated**: 2026-04-02  
**Analyzer**: speckit.analyze  
**Artifacts**: `spec.md` · `plan.md` · `tasks.md` · `data-model.md` · `contracts/action-agent.md` · `constitution.md`  
**Feature**: Simple Markdown Submission Interface (Community Edition)  
**Branch**: `001-simple-md-submission`  
**Constitution**: `.specify/memory/constitution.md` v1.0.0  
**Prior reports**: `analyze001.md` (21 findings) → `analyze002.md` (15 findings, 21 of 21 prior resolved)  
**Scope of this pass**: FR-011 (AHPRA Unverified badge) addition and cross-artifact consistency after 2026-04-02 session edits

> **READ-ONLY REPORT** — No files were modified. Remediation requires explicit user approval.

---

## Findings

| ID | Category | Severity | Location(s) | Summary | Recommendation |
|----|----------|----------|-------------|---------|----------------|
| C1 | Inconsistency | **CRITICAL** | tasks T033 vs T055 | **Field naming conflict**: T033 writes `ahpraStatus: unverified` (camelCase) to frontmatter. T055 says "Add `ahpra_status` frontmatter field" (snake_case). `data-model.md` and `contracts/action-agent.md` both use `ahpraStatus` (camelCase). If T055's renderer checks for `ahpra_status` but T033 writes `ahpraStatus`, the condition is never true — the badge will never display. | Standardise on `ahpraStatus` (camelCase, matching YAML frontmatter convention already used in T033, data-model.md, and contracts). Update T055 to reference `ahpraStatus` not `ahpra_status`. |
| E1 | Coverage Gap | **HIGH** | tasks T055, spec FR-011 | **Rendering layer undefined**: FR-011 states "content pages… MUST display a visible badge." T055 says "Update any HTML template or page renderer that displays `docs/{category}/{slug}.md` content" — but no such HTML template or renderer is defined anywhere in spec.md, plan.md, or any task. The pipeline writes `.md` files with frontmatter. No task creates a `docs/{category}/{slug}.md` → HTML rendering layer for generic content pages. `HTML_template.md` covers dental pages only. Without a defined rendering layer, T055's "render a badge" instruction has no concrete target to implement against. | Define explicitly in FR-011 or T055 what "content page" means in the absence of a generic renderer: (a) **Minimal path** — the frontmatter field `ahpraStatus: unverified` in the `.md` file constitutes the machine-readable badge and HTML display is deferred; (b) **Full path** — add a rendering task for `docs/{category}/{slug}.md` outputs and specify the generic badge contract that renderer must implement. Choose one and encode it. |
| B1 | Ambiguity | **HIGH** | tasks T033, T055 | **Overlapping scope between T033 and T055**: T033 already writes `ahpraStatus: unverified` to the generated file's frontmatter (updated in this session). T055 opens with "Add `ahpra_status` frontmatter field" — which is either redundant (T033 does it, with correct camelCase) or contradictory (different name implies a second field). T055's actual value is in its second half (badge rendering), but the first half creates ambiguity about responsibility for writing the frontmatter field. | Remove the "Add frontmatter field" clause from T055 entirely — T033 owns the write. Rewrite T055's opening to: "Using `ahpraStatus: unverified` written by `create-content-file.ts` (T033), render a visible 'AHPRA Unverified' badge on any page or template that displays the generated content." |
| B2 | Underspecification | **MEDIUM** | tasks T055 | **T055 badge markup is underspecified**: T055 says "render an AHPRA Unverified badge" but does not define the required markup, styling hook, or accessibility contract for non-dental pages. `HTML_template.md` includes an AHPRA badge pattern for dental listing pages, but that template is not the canonical renderer for all spec 001 content pages. Without a generic badge contract, different renderers could drift in appearance or accessibility. | Update T055 to define a reusable badge contract for spec 001 renderers: visible text `"AHPRA Unverified"`, a stable class or token for styling, and an accessible label such as `aria-label="AHPRA Unverified"`. The implementation may reuse the unverified badge semantics from `HTML_template.md` where appropriate, but should not treat the dental template as mandatory for all renderers. |
| F1 | Inconsistency | **MEDIUM** | tasks.md "Parallel Execution Opportunities" | **T055 absent from Parallel Execution Opportunities**: T055 is tagged `[P]` but the Final Phase parallel section lists only `T043 ‖ T044 ‖ T045 ‖ T046 ‖ T048`. T055 is missing. Additionally, T055's implicit dependency on T033 (Phase 4) is not recorded in the Dependencies tree. | Add T055 to the Final Phase parallel list: `T043 ‖ T044 ‖ T045 ‖ T046 ‖ T048 ‖ T055`. Add `T055 → depends on T033` to the Dependencies section. |
| C2 | Underspecification | **MEDIUM** | spec.md FR-011 | **"Content pages" scope ambiguous**: FR-011 uses the phrase "content pages generated from submissions" without defining whether this means (a) the `.md` file in the repository (badge via frontmatter field, no HTML required), or (b) a rendered HTML page accessible at a public URL. The distinction determines whether T055 requires only a frontmatter check or a full rendering pipeline. The phrase "MUST display a visible badge" implies the latter, but no rendering infrastructure exists in this spec. | Amend FR-011 to clarify: "The `ahpraStatus: unverified` frontmatter field constitutes the machine-readable badge. Any HTML page or template that renders content from `docs/{category}/{slug}.md` MUST also render a visible AHPRA Unverified badge using the renderer-level badge contract defined for this feature." This distinguishes the write-time (T033) from the render-time (T055) concern without tying non-dental pages to the dental template. |
| C3 | Inconsistency | **MEDIUM** | tasks T055 | **T055 tagged [US1] — incorrect story alignment**: T055 is tagged `[US1]` (Simplified Content Submission), but its functionality — displaying a badge on generated content pages — is an output of the US2 pipeline (AI Verification → file creation). The submission form (US1) is unaffected by T055. US1 covers the contributor's submission UX; the AHPRA badge is a post-verification output concern. | Change T055's tag from `[US1]` to `[US2]`. Update the Implementation Strategy / phase table annotation if it references story tags. |
| F2 | Inconsistency | **MEDIUM** | spec.md "What This Spec Does NOT Cover" | **Confusing juxtaposition of out-of-scope and in-scope AHPRA language**: The "Does NOT Cover" section states "AHPRA verification is explicitly out of scope… All content submitted via this form MUST be labelled 'AHPRA Unverified'" — then FR-011 mandates this as a requirement. A reader may interpret the badge itself as also being out of scope because it appears in the "Does NOT Cover" section. | Add a clarifying parenthetical to the "Does NOT Cover" paragraph: "AHPRA *verification* (confirming practitioner registration) is out of scope. Displaying an *AHPRA Unverified label* to reflect this fact is in scope and required by FR-011." |
| A1 | Duplication | **LOW** | tasks T033, T055 | **T055 partially duplicates T033's frontmatter write responsibility**: Even after fixing C1 (field naming), if T055 retains any clause about adding the frontmatter field, it creates a dual-write responsibility. The architectural rule should be: T033 writes, T055 reads/renders. | After C1 fix, verify T055 contains no frontmatter-write instruction. T055 should be read-only from T033's perspective: it reads `ahpraStatus` from frontmatter, it does not write it. |
| E2 | Coverage Gap | **LOW** | tasks T049 | **T049 annotation stale after this session's update**: T049 retains the annotation "(F3 resolved — updated from stale T001–T048 range)" from the analyze002 remediation. The range has now been updated again (to T001–T055) in this session, making the annotation reference the previous fix, not the current state. | Update T049 annotation to "(FR range updated to FR-001–FR-011, task range to T001–T055 — 2026-04-02)". Remove the now-misleading reference to the prior F3 finding from analyze001. |

---

## Coverage Summary

| Requirement | Has Task(s)? | Task IDs | Notes |
|-------------|-------------|----------|-------|
| FR-001 Web UI | ✅ | T015, T054 | Full page + dark-theme CSS |
| FR-002 Category selection | ✅ | T010, T016, T017 | `CATEGORIES` + form controller |
| FR-003 Template pre-fill | ✅ | T011, T017 | `TEMPLATES` + `applyTemplate` |
| FR-004 Fact-check URL field | ✅ | T018 | `validateUrl` + `isDomainAuthorized` |
| FR-005 Contributor email field | ✅ | T018, T050 | `validateEmail` + email-store |
| FR-006 Issue creation + email redaction | ✅ | T022–T024, T026, T050, T051, T053 | Full Worker proxy stack |
| FR-006 Rate limiting | ✅ | T022, T027 | `rate-limiter.ts` + KV binding |
| FR-007 Action trigger + AI verify | ✅ | T031, T032, T034, T040 | verify-submission.yml + admin guard |
| FR-008 VERIFIED path (archive + PR) | ✅ | T033, T034, T042 | `create-content-file.ts` + idempotency |
| FR-009 REJECTED path | ✅ | T034, T035, T036 | Workflow branches + email notification |
| FR-010 `/api/status` endpoint | ✅ | T025, T026, T043, T052 | Two-key STATUS_KV schema, TTL 0 for Models exhaustion |
| FR-011 AHPRA Unverified badge | ⚠️ | T033 (write), T055 (display) | **Partial**: T033 writes frontmatter field. T055's display scope is blocked by undefined rendering layer (E1) and field name conflict (C1). |
| SC-001 < 3 min UX | ✅ (indirect) | T015–T021 | UX quality tasks |
| SC-002 100% categorization | ✅ | T016, T017 | Category → template selection |
| SC-003 Pipeline < 5 min | ✅ | T034 | `timeout-minutes: 5` at job level |
| SC-004 95% AI accuracy | — | — | Post-launch operational metric; not buildable |
| SC-005 Status red < 60s | ✅ | T052, T025, T043 | TTL 0 write + two-key read scheme |

---

## Constitution Alignment Issues

| Principle | Issue | Severity | Task(s) |
|-----------|-------|----------|---------|
| §I — Accuracy First | `ahpraStatus: unverified` correctly reflects absence of AHPRA verification. No conflict — badge is an honest disclosure, consistent with the principle. | ✅ No issue | T033, T055 |
| §III — Accessibility | T055 mentions "visually prominent" badge but does not define an accessibility contract for the badge text/label on non-dental pages. A renderer-level requirement such as visible text plus `aria-label="AHPRA Unverified"` should be specified. | **MEDIUM** | T055 (finding B2) |
| §V — Design identity | T055 should define a reusable badge token/class for non-dental pages so future renderers stay visually consistent with the project design system. This is a consistency risk, not a current constitution violation. | Advisory | T055 (finding B2) |

---

## Unmapped Tasks

All 55 tasks (T001–T055) map to at least one functional requirement or user story. No orphaned tasks detected.

**T055 mapping note**: T055 maps to FR-011 but has the story tag [US1] which is incorrect — it should be [US2] (finding C3). The mapping to FR-011 itself is correct.

---

## Metrics

| Metric | Value |
|--------|-------|
| Total FRs | 11 (FR-001–FR-011) |
| Total SCs (buildable) | 4 of 5 (SC-004 is a post-launch metric) |
| Total tasks | 55 |
| FR coverage (≥1 task) | 11 / 11 (100%) |
| FR coverage (fully satisfied) | 10 / 11 (91% — FR-011 partial, blocked by C1 + E1) |
| Critical issues | **1** (C1 — field naming conflict) |
| High issues | **2** (E1, B1) |
| Medium issues | **5** (B2, F1, C2, C3, F2) |
| Low issues | **2** (A1, E2) |
| Ambiguity count | 1 (B1) |
| Duplication count | 1 (A1) |
| Constitution violations | 0 |
| Findings from analyze002 resolved | 15 of 15 ✅ |
| Net new findings this pass | **10** |

---

## Progress Since analyze002.md

| Category | analyze001 | analyze002 | analyze003 | Change |
|---|---|---|---|---|
| CRITICAL | 2 | 2 | 1 | −1 |
| HIGH | 5 | 6 | 2 | −4 |
| MEDIUM | 9 | 4 | 5 | +1 |
| LOW | 5 | 2 | 2 | ±0 |
| **Total** | **21** | **15** | **10** | **−5** |

All analyze002 findings are resolved. The 10 new findings in this pass are exclusively FR-011 integration issues introduced by the 2026-04-02 session edits.

---

## Next Actions

### ⛔ Resolve before `/speckit.implement` (FR-011 tasks only)

**C1 — Field naming conflict (blocks FR-011 badge display entirely)**:
- Edit T055: replace every occurrence of `ahpra_status` with `ahpraStatus`
- One-line fix; no other files need changing (T033, data-model.md, contracts already use `ahpraStatus`)

**E1 + C2 — Rendering layer / "content pages" scope ambiguity**:
- A decision is required before T055 can be coded:
  - **Option A (minimal)** — Define "content page" as the `.md` frontmatter field only. T055's scope is: "verify T033 writes `ahpraStatus: unverified`; the badge is machine-readable frontmatter, not a rendered HTML element in this spec." Mark T055 as satisfied by T033. Spec 002 or a future rendering task handles HTML display.
  - **Option B (full)** — Add a new task creating an HTML rendering layer for `docs/{category}/{slug}.md` files, and T055 adds the badge to that renderer using a generic badge contract for spec 001 pages.
- If Option A: Update FR-011 to say "machine-readable badge via frontmatter"; remove the "MUST display a visible" language or qualify it as deferred. Update T055 to remove rendering scope.
- If Option B: Add a new task (T056) to create the rendering layer before T055 can operate.

**B1 + B2 — T055 overlap and badge contract**:
- After resolving E1, update T055 to: (1) remove the frontmatter-write clause (T033 owns it), (2) define the badge text, styling hook, and accessibility requirement for non-dental renderers. Reusing the unverified badge semantics from `HTML_template.md` is acceptable, but it should be guidance rather than a mandatory dependency for all spec 001 pages.

### ✅ Safe to proceed (MEDIUM/LOW)

The following can be addressed during implementation without blocking start:

- **C3** — Fix T055 story tag: `[US1]` → `[US2]`
- **F1** — Add T055 to Parallel Execution Opportunities and dependency tree
- **F2** — Add clarifying parenthetical to spec.md "Does NOT Cover" paragraph
- **A1** — Remove frontmatter-write clause from T055 after C1 is fixed
- **E2** — Update T049 annotation text

### Suggested edits

```
tasks.md:
  - T055: replace "ahpra_status" → "ahpraStatus" (C1)
  - T055: remove "Add ahpraStatus frontmatter field" clause (A1/B1) — T033 owns the write
  - T055: define a renderer-level badge contract (visible text, styling hook, accessible label) for non-dental pages; optionally reuse the unverified badge semantics from HTML_template.md (B2)
  - T055: change story tag [US1] → [US2] (C3)
  - Parallel Execution section: add T055 to Final Phase list (F1)
  - Dependencies section: add "T055 → depends on T033" (F1)
  - T049: refresh annotation to reference 2026-04-02 update (E2)

spec.md:
  - FR-011: clarify "content pages" scope and define frontmatter as machine-readable badge (C2)
  - "Does NOT Cover": add parenthetical distinguishing verification (out) from badge (in) (F2)
```

---

## Remediation Offer

Would you like me to suggest concrete remediation edits for the top issues?

The highest-value fixes before `/speckit.implement` begins are **C1 + E1** (field naming conflict and rendering scope decision). I can:

1. **Fix C1** — Patch T055 to use `ahpraStatus` throughout (one-line change)
2. **Resolve E1** — Present Option A vs Option B with draft text for FR-011 and T055, for your decision
3. **Fix B1 + B2 together** — Rewrite T055 description to correctly scope its responsibility and define a reusable badge contract for non-dental renderers

Reply **"yes, fix all"**, **"fix critical only"**, or specify finding IDs (e.g., "C1 + B1 + B2").
