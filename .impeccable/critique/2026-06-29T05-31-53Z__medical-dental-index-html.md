---
target: medical/dental/index.html
total_score: 34
p0_count: 0
p1_count: 0
timestamp: 2026-06-29T05-31-53Z
slug: medical-dental-index-html
---
# Critique (re-run) — Dental Clinics Directory (`medical/dental/index.html`)

**Register:** product · **Assessment independence:** degraded (sub-agents declined this session) · **Verdict:** Good — production-ready. The structural problems from the first pass are resolved; what remains is feature enhancement, not defect.

## Design Health Score

| # | Heuristic | Score | Was | Key Note |
|---|-----------|-------|-----|----------|
| 1 | Visibility of System Status | 3 | 2 | Live result count ("12 of 41", `aria-live`), active sort state, focus rings, empty state. No loading state (not needed — instant client filter). |
| 2 | Match System / Real World | 4 | 3 | Natural language; intuitive A–Z / Most-clinics sorts; the decorative fake "map" is gone. |
| 3 | User Control and Freedom | 3 | 2 | Filter clearable, sort toggles, breadcrumb back. No URL-state/undo, but none needed. |
| 4 | Consistency and Standards | 4 | 2 | One canonical tile component; count derived from the DOM so it's always right; the "4 vs 43 vs 41" contradiction is gone. |
| 5 | Error Prevention | 3 | 3 | No error-prone forms or destructive actions; empty state handles the no-match edge. |
| 6 | Recognition Rather Than Recall | 4 | 3 | Everything visible and labelled — A–Z grid, filter, service chips. No memory load. |
| 7 | Flexibility and Efficiency | 3 | 2 | Find-as-you-type filter, two sorts, full keyboard radiogroup. Strong; no saved views / deep links yet. |
| 8 | Aesthetic and Minimalist Design | 4 | 2 | Content-led single column; every element earns its place; the triplicated right column is gone. |
| 9 | Error Recovery | 3 | 3 | Filter empty state guides recovery; no other error paths exist. |
| 10 | Help and Documentation | 3 | 2 | Self-documenting UI + placeholder hint + breadcrumbs. No inline AHPRA explainer. |
| **Total** | | **34/40** | **24** | **Good — solid foundation, address the weak areas** |

## Anti-Patterns Verdict

**Does this look AI-generated?** No — and now it's coherent as well as distinctive. The dark forest-green vault with Australian Green & Gold is a committed identity, and the page finally *means one thing*: a suburb directory.

**LLM assessment:** The first pass failed on "content scaffolding masquerading as product" — fake clinics, a decorative map, duplicated suburb lists, a contradictory count. All gone. The page is now a single, honest, scannable directory: an A–Z responsive grid with find-as-you-type filtering and two real sorts. Cognitive load dropped from **high (≈5/8 checklist failures)** to **low (≤1)** — one browse system, no wall of competing options.

**Deterministic scan (`detect.mjs`):** 2 warnings, unchanged and both font-related. `overused-font` (Space Grotesk / Inter) is low-impact in a **product** register that explicitly permits familiar sans — distinctiveness here is carried by color + the dark system. `single-font` remains a **false positive** (both faces load on line 11). No structural or slop anti-patterns.

**Visual overlays:** Not injected — the CLI detector is authoritative with only 2 trivial font findings. Inspection was via desktop (1440px) + DOM evidence; the live render confirms the A–Z grid, filter, and the green keyboard focus ring.

## Overall Impression

This is a different page from the 24/40 one — and a clearly shippable one. It does its job (find a suburb, scan services, leave) with no friction, it's honest about its data, and it's resilient (no-JS visible, reduced-motion safe, WCAG AA contrast, 44px touch targets, keyboard-navigable, W3C-clean). The remaining gap is **depth of capability**, not quality: it filters by *name* but not by *service*, and a filtered view can't be linked or survive a refresh. Those are the next features, not bugs.

## What's Working

1. **Coherence of purpose.** One canonical browse model. The squint test now passes instantly: directory header → grid → tile. Nothing competes.
2. **Honesty made structural.** The count is computed from the DOM (can't drift), and "AHPRA Unverified" is stated plainly — the brand's "verify, cite, preserve" principle is visible in the UI.
3. **Resilience as a feature.** No-JS ships the directory visible; the reveal is enhancement-only; keyboard radiogroup + live region + AA contrast + coarse-pointer touch targets make it genuinely accessible.

## Priority Issues

All remaining items are **enhancements (P3)** — the page is production-ready without them.

- **[P3] Filter and sort state aren't persisted or linkable.** Refresh, back-navigation, or sharing a URL loses the active filter query and sort mode.
  - **Why it matters:** A directory is something people bookmark and share. "Send me the Bankstown clinics" should be a link, and a refresh mid-task shouldn't reset the view.
  - **Fix:** Reflect filter/sort in the URL (`?q=bankstown&sort=count`) and hydrate from it on load. (Riley / distracted-mobile Casey personas.)
  - **Suggested command:** `$impeccable harden` (state persistence) or `$impeccable craft` if it grows.

- **[P3] No service-level filtering.** The service chips (General, Cosmetic, Implants, Emergency…) are display-only; a user who wants "suburbs with Emergency dental" can't act on them. Name filtering is the only axis.
  - **Why it matters:** It's the one real capability the old (inert) "Refine Filters" button gestured at, and the most likely unmet user intent on a clinical directory.
  - **Fix:** Add a service facet (chips become toggle filters, AND-combined with the name filter). Scope it as a feature, not a quick fix.
  - **Suggested command:** `$impeccable craft` (faceted filtering).

- **[P3] "AHPRA Unverified" has no inline explainer.** A first-timer doesn't necessarily know what AHPRA is or what "unverified" implies for them; the explanation lives only on the deeper suburb pages.
  - **Why it matters:** It's a trust signal that's slightly opaque at the exact moment trust is being formed.
  - **Fix:** A small inline tooltip or "What's this?" link next to the badge, linking to the AHPRA notice.
  - **Suggested command:** `$impeccable clarify`.

## Persona Red Flags

**Jordan (First-Timer):** Now lands cleanly — one grid, an obvious filter, A–Z order. Only snag: "AHPRA Unverified" is unexplained inline.

**Sam (Accessibility-Dependent):** Strong. Visible green focus rings, arrow-key radiogroup, `aria-live` result count, `role="status"` empty state, AA contrast, no-JS-visible content, 44px touch targets. No red flags found.

**The Citable Researcher / Patient (project persona):** The count is now accurate and self-healing — the trust failure from the first pass is fixed. Would still want service filtering to find, e.g., the nearest emergency option.

## Minor Observations

- The hero "Division of Dental & Oral Health" is grand for a suburb directory, but it's the established sovereign brand voice — intentional, not drift.
- "Most clinics" sort conveys its effect only by reordering (no count badge on the tiles beyond the meta line); fine at this scale.

## Questions to Consider

- Should a filtered/sorted view be shareable as a URL — i.e., is this directory something people link to each other?
- Is service-level filtering (Emergency, Cosmetic, …) a real user need here, or does that belong on the suburb pages?
- Is "find a suburb" genuinely the whole job, or is "find the nearest clinic offering X" the deeper intent the directory should eventually serve?
