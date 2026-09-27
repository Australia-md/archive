---
target: medical/dental/index.html
total_score: 24
p0_count: 0
p1_count: 3
timestamp: 2026-06-29T02-36-44Z
slug: medical-dental-index-html
---
# Critique — Dental Clinics Directory (`medical/dental/index.html`)

**Register:** product · **Assessment independence:** degraded (sub-agents declined by user) · **Verdict:** Acceptable, held back by a structural identity problem, not a visual one.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Sort tabs/`Refine Filters` show active state but produce no visible result; no empty/loading states. |
| 2 | Match System / Real World | 3 | Natural domain language (suburbs, clinics, services, AHPRA); the "map" is an abstract shape, not a real map. |
| 3 | User Control and Freedom | 2 | No in-directory search, no filter-clear; sort appears inert. Breadcrumb back is good. |
| 4 | Consistency and Standards | 2 | Same data (suburbs) rendered twice in two component styles; "4 Clinics" vs "43 suburb directories" vs 41 actual rows. |
| 5 | Error Prevention | 3 | Little to get wrong here; sample CTAs lead nowhere. |
| 6 | Recognition Rather Than Recall | 3 | Everything visible and labelled — chips, breadcrumbs, counts. |
| 7 | Flexibility and Efficiency | 2 | 41 suburbs in one ungrouped list; no A–Z jump, no search, no keyboard accelerators. |
| 8 | Aesthetic and Minimalist Design | 2 | Strong, on-brand chrome — undercut by a right column that triplicates content (map + 25 quick-links + mini list). |
| 9 | Error Recovery | 3 | No broken states visible; also no designed empty/error states. |
| 10 | Help and Documentation | 2 | AHPRA honesty is good; no on-page help/FAQ (FAQ lives on suburb pages). |
| **Total** | | **24/40** | **Acceptable — significant improvement needed before users are happy** |

## Anti-Patterns Verdict

**Does this look AI-generated?** No, not in the generic sense — and that's a genuine strength. The dark forest-green vault with Australian Green & Gold is a *committed, distinctive* identity. It avoids every first-order reflex: not SaaS-cream, not purple-gradient, not a tourist brochure. On the **product** slop test (would a category-fluent user trust it?), the chrome passes — but they'd pause at the structural incoherence below.

**LLM assessment:** The aesthetic is cohesive and confident. The failure is not flatness or genericness; it's *content scaffolding masquerading as product*. Four hardcoded sample clinics (Sydney Dental Hospital, North Shore Orthodontics, Westmead, Parramatta) sit beneath a "browse 41 suburbs" directory, and the verified row counts only those four. The right column re-renders the suburb list as a second, more prominent card style. The result reads like two half-finished IAs layered on one page.

**Deterministic scan:** `detect.mjs` returned 2 warnings, both font-related. `overused-font` (Space Grotesk / Inter) is real but low-impact — product register permits familiar sans, and distinctiveness here is carried by color + the dark archival system, not the typeface. `single-font` is a **false positive**: the page loads *both* Space Grotesk (display) and Inter (body) on line 11; Inter is the body family via `--font-body`. No structural/slop anti-patterns were flagged — the important issues are IA-level and invisible to the detector.

**Visual overlays:** Not injected. The CLI detector is authoritative and returned only 2 low-severity font findings, so a highlight overlay would add nothing; inspection was done via desktop (1440px) and mobile (375/320px) screenshots plus live DOM structural queries instead.

## Overall Impression

The visual system is the best thing here — assured, branded, and (after the recent RWD/W3C pass) responsive and accessible. What's missing is *coherence of purpose*. The single biggest opportunity: **decide what this page is.** It's a suburb directory — so let the 41 suburbs be the hero, make the right column earn its space (a real, usable map or nothing), and either promote the four clinics to honestly-labelled "featured" entries or remove them. The contradictory "4 Clinics" headline is the thread that, pulled, fixes the trust problem.

## What's Working

1. **A committed, distinctive identity.** The forest-green vault + Green/Gold accents + Space Grotesk/Inter pairing reads as a national archive, not a template. This is hard to get and it's done well.
2. **Honesty as a design element.** "AHPRA Unverified" is surfaced plainly on the badge (`role="img"`, dimmed gold) rather than hidden — it builds trust and matches the brand's "verify, cite, preserve" principle.
3. **Solid responsive + a11y floor.** Single-column reflow, hamburger nav, no horizontal scroll to 320px, WCAG-clean markup (0 W3C errors). The bones are production-grade.

## Priority Issues

- **[P1] The "4 Clinics" count contradicts the directory.** The verified row reads "4 Clinics · New South Wales" while the page lists 41 suburb directories, each with several clinics. The four are hardcoded samples.
  - **Why it matters:** For an archive whose entire value is *trustworthy, citable counts*, a visibly wrong number is the worst possible failure — it makes a first-time user doubt everything else on the page.
  - **Fix:** Make the headline count reflect reality (total clinics across suburbs, or reframe as "41 suburbs · NSW"). Then either promote the 4 clinics to an explicit "Featured clinics" band with honest framing, or remove them.
  - **Suggested command:** `$impeccable clarify`

- **[P1] Duplicate information architecture — suburbs are rendered twice.** The left column is a flat list of 41 suburb rows; the right column re-renders 25 of the same suburbs as bordered green cards. Two visual vocabularies, same data, one screen.
  - **Why it matters:** Doubles cognitive load and scan time, and breaks Consistency — the user can't tell why the same suburb looks like a list row here and a card there, or which is canonical.
  - **Fix:** Pick one canonical suburb presentation (the left list). Give the right column a job the left doesn't do — the actual locator map, or a "most-searched / nearby" shortlist — not a restyled copy.
  - **Suggested command:** `$impeccable layout`

- **[P1] The map is decorative, not functional.** The right-column SVG is an abstract green blob with 4 pins that don't correspond to the suburb links beside it. It occupies the most valuable real estate on the page and locates nothing.
  - **Why it matters:** A directory's premium slot should reduce the find-a-clinic task. An abstract shape spends that slot on decoration and quietly erodes trust (it looks like a map but isn't one).
  - **Fix:** Either ship a real, interactive locator (suburb/clinic pins that match the list and pan/zoom), or replace the panel with something that earns it. Don't fake a map.
  - **Suggested command:** `$impeccable distill`

- **[P2] Scanning 41 ungrouped suburbs is high-effort — and the count is wrong.** The list header says "43 suburb directories" but the DOM holds 41 rows, in source order (Alexandria, Allambie Heights, Adamstown…) with no A–Z sort, no jump nav, and no in-page search.
  - **Why it matters:** High cognitive load (a wall of options, no progressive disclosure); the 43-vs-41 mismatch compounds the trust problem from issue 1.
  - **Fix:** Sort A–Z (the "Alphabetical" tab should be the default for a name list), add a sticky letter index or a filter input, and generate the header count from the actual list length.
  - **Suggested command:** `$impeccable layout`

- **[P2] Controls that look interactive but aren't.** The sort tabs and "Refine Filters" carry active/hover affordances but produce no visible change.
  - **Why it matters:** Affordances that do nothing teach users to distrust the controls — a direct hit to Visibility of System Status.
  - **Fix:** Wire the sort tabs to reorder the list (alpha / by clinic count / by recency) and either implement `Refine Filters` or remove it until it exists.
  - **Suggested command:** `$impeccable harden`

## Cognitive Load

**High (≈5 of 8 checklist items fail) — critical.** Fails: *single focus* (three competing browse systems — suburb list, clinic cards, map), *one thing at a time*, *minimal choices* (41 suburbs + 25 quick-links + 4 cards + 3 sort tabs at once), *progressive disclosure* (everything dumped, no collapse/"show more"), and *chunking* (the 41-row list is one undivided block). Working memory and visual hierarchy are fine.

## Persona Red Flags

**Jordan (First-Timer):** Sees "4 Clinics" but scrolls past dozens of suburbs — *is this directory broken or am I?* Three ways to browse (list, map, cards) with no signal which is primary. Likely confusion at first screen.

**Sam (Accessibility-Dependent):** The recent pass fixed focus/contrast/ARIA and the markup validates — genuinely good. Remaining risk: the duplicated suburb sets mean a screen-reader user tabs through the same place names twice, and the abstract map's `role="img"` label promises a map that conveys nothing.

**The Citable Researcher / Patient (project persona):** Came for a number they can trust and cite. The "4 Clinics" vs "41 suburbs" vs "43 directories" disagreement fails them on the one axis the whole archive sells: verified, accurate counts.

## Minor Observations

- Four full-width gold "View Clinic Profile" bars stacked in a column dilute the Gold-For-One intent — gold stops reading as "the one action" when it repeats four times down the page.
- The flag image sits top-right of the header with `margin-left:auto` inline — fine, but it's a lone inline style in an otherwise tokenised system.
- "Recently Updated" as a sort option implies per-clinic freshness dates that aren't shown anywhere on the cards or rows.

## Questions to Consider

- What is the *one* primary way to browse this page — and what would it look like if the other two stepped back to support it?
- Are the four clinics real featured entries or leftover scaffolding? The honest answer changes the whole top of the page.
- If the map can't be a real locator yet, what would that column do that actually shortens the find-a-clinic task?
- What's the true clinic count — and where should the number that the whole archive's credibility rests on come from?
