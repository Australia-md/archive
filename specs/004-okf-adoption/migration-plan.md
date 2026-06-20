# OKF Adoption — Migration Plan & ADR

**Status:** Proposed — §11 schema decisions captured 2026-06-20
**Author:** Prepared for James Ho / RxAI
**Date:** 2026-06-20
**Scope:** Whether and how to align the Australia.md knowledge layer with the **Open Knowledge Format (OKF) v0.1**
**Affects:** Markdown knowledge layer only (`Australia.md`, `docs/**`). The web layer (`*.html`, `src/`, `style.css`) is unchanged except where it *reads* the markdown.

> **Sourcing note.** Statements labelled **[SPEC]** are quoted or paraphrased from the OKF v0.1 specification. Statements labelled **[REPO]** were verified directly against files in this repository on 2026-06-20. Statements labelled **[INFERENCE]** are this document's recommendations or estimates, not facts from either source. Per project policy, nothing here is fabricated; where data is missing it is marked as such.

---

## 1. Decision summary

**Recommendation [INFERENCE]:** Adopt OKF v0.1 incrementally. The archive is already ~80% OKF-shaped, the gap is mechanical (frontmatter), and adoption is non-breaking. It also resolves an existing inconsistency between two competing metadata conventions already present in the repo.

**What OKF is [SPEC]:** an open, vendor-neutral specification that formalises the "LLM-wiki" pattern. A conformant **bundle** is a directory tree of markdown files; each file is one **concept**; structured fields live in a YAML **frontmatter** block; relationships are ordinary markdown **links**. There is no SDK, no registry, no runtime, no central authority.

**Why it fits this project [INFERENCE]:** Australia.md's stated mission — "structured, machine-readable knowledge for AI agents" — is precisely OKF's target use case. Adopting it makes the archive portable and consumable by any OKF-aware agent or tool without bespoke integration, at near-zero architectural cost.

---

## 2. Conformance requirements (the bar we must clear)

A bundle is **conformant** with OKF v0.1 if, and only if **[SPEC §9]**:

1. Every non-reserved `.md` file in the tree contains a **parseable YAML frontmatter block**.
2. Every frontmatter block contains a **non-empty `type` field**.
3. The reserved filenames `index.md` and `log.md` follow their defined structure (§6 / §7) **when present** (both are optional).

Everything else is soft guidance. Consumers **must not** reject a bundle for missing optional fields, unknown `type` values, unknown extra keys, broken cross-links, or missing `index.md` **[SPEC §9]**.

The only *required* frontmatter key is `type`. Recommended keys (all optional): `title`, `description`, `resource`, `tags`, `timestamp` **[SPEC §4.1]**.

---

## 3. Current state (verified)

### 3.1 Structure already matches the OKF shape **[REPO]**

- A git-versioned directory tree of markdown: `Australia.md` → `docs/*.md` → `docs/medical/dental/{suburb}-{state}.md`.
- Concepts already cross-link with standard markdown links (e.g. `docs/medical.md` uses `[Australia.md](../Australia.md)` and links to location files). OKF supports relative links **[SPEC §5.2]**, so these are already valid.
- Inventory: **12** domain files in `docs/`, **40** location files in `docs/medical/dental/`, plus `Australia.md`. `docs/medical/` currently contains only the `dental/` subdirectory.

> **[REPO] note:** `Australia.md` and `.specify/memory/project-context.md` reference `endocrinology/`, `general-practice/`, and `pharmacy/` specialties, but only `dental/` source files exist on disk today. The plan covers the 52 files that actually exist; the same pattern extends to future specialties.

### 3.2 Three conflicting metadata conventions exist today **[REPO]**

| Where | How metadata is stored | Example keys |
|---|---|---|
| Domain files (`docs/*.md`) | Prose **bold lines** under the H1, then `---` | `**Parent:**`, `**Authoritative source:**` (no Last Verified) |
| Location files (`docs/medical/dental/*.md`) | Prose **bold lines** | `**Parent:**`, `**Suburb:**`, `**Authoritative registration source:**`, `**Last Verified:**`, `**Data limitations:**` |
| Pipeline-created files (`.github/scripts/create-content-file.ts` → `buildFileContent`) | **YAML frontmatter** | `title`, `category`, `sourceUrl`, `lastVerified`, `submissionIssue`, `ahpraStatus` |

**Implications [REPO]:**
- **No existing file is OKF-conformant.** The hand-authored files have no frontmatter at all; the pipeline-generated frontmatter has no `type` field.
- `HTML_template.md` §2 already states `{Last Verified date}` is read "from MD frontmatter field `Last Verified`" — but the actual source files store it as a prose `**Last Verified:**` line, and the pipeline writes it as `lastVerified` (camelCase). Three spellings of one field. OKF gives us a reason to standardise on one.
- `src/main.ts` does **not** parse these markdown files (it only handles client-side search and newsletter UI), so adding frontmatter carries **no runtime risk to the web app [REPO]**.

---

## 4. Gap analysis

| OKF requirement | Current state | Action |
|---|---|---|
| Parseable YAML frontmatter on every non-reserved `.md` **[SPEC §9.1]** | Hand-authored files: none. Pipeline files: yes. **[REPO]** | Add frontmatter to all 52 existing files; keep it on pipeline files |
| Non-empty `type` field **[SPEC §9.2]** | Absent everywhere **[REPO]** | Add `type` to every concept + update pipeline |
| `index.md` structure if present **[SPEC §6]** | No `index.md` files; root index is `Australia.md` (rich content, not OKF index shape) **[REPO]** | Optional: add `index.md` per directory; keep `Australia.md` as human entry point |
| `log.md` structure if present **[SPEC §7]** | None **[REPO]** | Optional; defer |
| Cross-links **[SPEC §5]** | Relative markdown links **[REPO]** | Keep as-is (valid). Bundle-relative `/...` links are optional, not required |

---

## 5. Proposed OKF schema for Australia.md

### 5.1 `type` vocabulary [INFERENCE]

OKF does not register types centrally; producers pick descriptive, self-explanatory values and consumers tolerate unknown ones **[SPEC §4.1]**. Proposed minimal set:

| File class | `type` value |
|---|---|
| Root (`Australia.md`) | `Country Index` |
| Domain files (`docs/*.md`) | `Domain Overview` |
| Dental location files (`docs/medical/dental/*.md`) | `Dental Clinic Directory` |
| Future specialty location files | `Medical Location Directory` (or specialty-specific) |

### 5.2 Frontmatter field mapping [INFERENCE]

Reconciles all three current conventions into one OKF-conformant block. OKF reserved keys first, then producer extension keys (extensions are explicitly allowed **[SPEC §4.1]**).

| OKF key | Required | Domain file ← from | Location file ← from | Pipeline (`buildFileContent`) ← from |
|---|---|---|---|---|
| `type` | **Yes** | new: `Domain Overview` | new: `Dental Clinic Directory` | new: derive from `category` |
| `title` | rec. | the `# H1` | the `# H1` | already emitted |
| `description` | rec. | new one-liner | new / derive from Overview | new one-liner |
| `resource` | rec. | `**Authoritative source:**` URL | `**Authoritative registration source:**` URL | rename `sourceUrl` → `resource` |
| `tags` | rec. | new, e.g. `[government]` | `[dental, nsw, {suburb-slug}]` | map from `category` |
| `timestamp` | rec. | new (file mtime / commit date) | `**Last Verified:**` → ISO 8601 | rename `lastVerified` → `timestamp` |
| `ahpra_status` | ext. | — | optional | keep `ahpraStatus` (snake_case) |
| `submission_issue` | ext. | — | — | keep `submissionIssue` (snake_case) |
| `suburb` / `postcode` / `state` / `lga` | ext. | — | parse from `**Suburb:**` line | — |
| `last_verified` | ext. | — | retain for human/template back-compat | retain |

**Notes — decided 2026-06-20:**
- **Last Verified → frontmatter + body.** Frontmatter `timestamp` (with a mirrored `last_verified` extension key) is the machine-readable source of truth, and the `**Last Verified:**` line stays visible in the body so it still shows when viewing the raw `.md` on GitHub. The slight duplication is accepted.
- **`timestamp` → full ISO 8601 datetime**, e.g. `2026-06-02T00:00:00Z`, to strictly match the spec's "datetime" wording **[SPEC §4.1]**. Date-only current values get `T00:00:00Z` appended during backfill.
- `**Data limitations:**` and `**Parent:**` stay in the body. `Parent` is redundant under OKF because hierarchy is implicit in the path and expressible via links **[SPEC §3, §5]**; it can be dropped or kept as prose.

### 5.3 Example — domain file (`docs/medical.md`) [INFERENCE]

```markdown
---
type: Domain Overview
title: Medical & Healthcare System of Australia
description: Australia's universal Medicare system, AHPRA regulation, PBS, and hospital structure.
resource: https://www.ahpra.gov.au
tags: [medical, healthcare]
timestamp: 2026-03-26T00:00:00Z
---

# Medical & Healthcare System of Australia
...
```

### 5.4 Example — location file (`docs/medical/dental/barrack-heights-nsw.md`) [INFERENCE]

```markdown
---
type: Dental Clinic Directory
title: Barrack Heights, NSW — Dental Clinics
description: Verified AHPRA-registered dental clinics in Barrack Heights NSW 2528.
resource: https://www.dentalboard.gov.au
tags: [dental, nsw, barrack-heights]
timestamp: 2026-06-02T00:00:00Z
suburb: Barrack Heights
postcode: "2528"
state: nsw
lga: Shellharbour City Council
ahpra_status: unverified
---

# Barrack Heights, NSW — Dental Clinics
...
```

### 5.5 `index.md` files [INFERENCE]

OKF `index.md` files carry **no frontmatter** (except the bundle-root `index.md`, which may declare `okf_version: "0.1"`) and use grouped bullet lists with `[Title](link) - description` entries **[SPEC §6, §11]**.

- Keep `Australia.md` as the **human** entry point and a concept (`type: Country Index`).
- Add a bundle-root `index.md` that declares `okf_version: "0.1"` and lists the domains, plus a `docs/medical/dental/index.md` listing suburbs. These can be **auto-generated** from frontmatter `title`/`description`, so they stay cheap to maintain.
- **Decided 2026-06-20: defer `index.md` generation to Phase 4.** Frontmatter + `type` conformance on all files comes first; index files (optional under OKF) are generated afterward.

---

## 6. Impact on producers and consumers

OKF separates who writes knowledge from who reads it **[SPEC §3 principles]**. Mapping that onto this repo:

### 6.1 Producers to update
- **Submission pipeline** — `.github/scripts/create-content-file.ts`: update the `FrontmatterFileContent` interface and `buildFileContent()` to emit OKF-conformant frontmatter (add `type`; rename `sourceUrl`→`resource`, `lastVerified`→`timestamp`; map `category`→`tags`; keep `ahpraStatus`/`submissionIssue` as extension keys). **[REPO]** This is the single most important code change so new submissions stop diverging.
- **AI verification agent** — `.github/workflows/verify-submission.yml` / `verify-agent.ts`: if it validates or reads field names, align it with the new schema. **[REPO — needs confirmation of exact fields it reads.]**

### 6.2 Consumers to update
- **HTML generation** — driven by `HTML_template.md` (an agent/scheduled job reads that file as the canonical template; no deterministic markdown→HTML script was found in `.github/scripts`, which contains only submission-pipeline code **[REPO]**). Update `HTML_template.md` so it reads `timestamp`/`last_verified`, `resource`, etc. from frontmatter, and so the body is rendered with the frontmatter block stripped.
- **`src/main.ts`** — no change required; it does not read these files **[REPO]**.

### 6.3 New consumers OKF unlocks [SPEC "what we're shipping"]
OKF ships a reference **static HTML visualizer** (single self-contained file, no backend) that renders any conformant bundle as an interactive graph. Once conformant, the archive could be dropped into that visualizer for free — a possible future feature, not part of this migration.

---

## 7. Phased rollout [INFERENCE]

| Phase | Work | Output | Risk |
|---|---|---|---|
| **0 — Ratify** | Accept this ADR; amend `constitution.md` to mandate OKF frontmatter; record the `type` vocabulary + field schema; update `CLAUDE.md`/`AGENTS.md`/`GEMINI.md`/`project-context.md` | Governance + agreed schema | None |
| **1 — Pilot** | Add frontmatter to `Australia.md`, `docs/medical.md`, and 3 dental files; add a bundle-root `index.md` with `okf_version: "0.1"`; validate with a conformance check | Proof on ~5 files | Low |
| **2 — Domain backfill** | Frontmatter on all 12 `docs/*.md` | 12 files conformant | Low |
| **3 — Location backfill** | Frontmatter on all 40 dental files. Metadata is already structured (`Suburb`, `Last Verified`, source), so this is **scriptable** | 40 files conformant | Low–med (volume) |
| **4 — Index/log** | Auto-generate `index.md` per directory; optionally seed `log.md` | Progressive disclosure | Low |
| **5 — Producers** | Update `create-content-file.ts` + verify agent + `HTML_template.md` | Pipeline emits conformant OKF; no future drift | Med (touches pipeline) |
| **6 — Validate (optional)** | Add a CI conformance check (§9 rules) and/or wire the OKF reference visualizer | Enforced conformance | Low |

**Effort estimate [INFERENCE]:** Phases 1–4 are predominantly content edits across 52 files; the location backfill is automatable because the source metadata is regular. Phase 5 is the only real code change and is small and localised.

---

## 8. Risks & mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| Two conventions re-diverge if pipeline isn't updated | Med | Do Phase 5; add Phase 6 CI check |
| `HTML_template.md` expects an old field spelling (`Last Verified`) | Low | Update template in Phase 5; OKF actually unifies the three spellings |
| Frontmatter visible/ugly on GitHub | Low | GitHub renders YAML frontmatter benignly (table or hidden); body unaffected |
| Bundle-relative `/` links could break local rendering | Low | **Keep relative links** — valid under OKF §5.2; do not migrate link style |
| Constitution forbids unratified standards | Low | Adopt via PR amendment (their governance permits this) in Phase 0 |
| Scope creep into the web/HTML layer | Low | This migration touches the markdown layer only; HTML changes limited to reading frontmatter |

---

## 9. What OKF does **not** require (explicitly out of scope) [SPEC §1 non-goals]

- No fixed taxonomy of types — our `type` list is our own choice.
- No prescribed storage/serving/query infrastructure — keep git + GitHub Pages.
- No replacement of domain schemas (Schema.org JSON-LD, etc.) — OKF *references*, doesn't subsume. Existing JSON-LD in HTML pages is untouched.

---

## 10. Conformance self-check of the target state

Against **[SPEC §9]**, after Phases 1–3:

1. Every non-reserved `.md` has parseable YAML frontmatter → **met** (added everywhere).
2. Every frontmatter has non-empty `type` → **met** (vocabulary in §5.1).
3. `index.md`/`log.md` follow §6/§7 when present → **met** (generated to spec in Phase 4).

Target state is **OKF v0.1 conformant**.

---

## 11. Schema decisions (resolved 2026-06-20)

| # | Question | Decision |
|---|---|---|
| 1 | How to store `Last Verified`? | **Frontmatter + body.** `timestamp` is the source of truth (mirrored as `last_verified`); the prose line stays visible in the body for GitHub. |
| 2 | `timestamp` format? | **Full ISO 8601 datetime** (`...T00:00:00Z`). |
| 3 | When to create `index.md`? | **Defer to Phase 4** (frontmatter conformance first). |
| 4 | OKF reference visualizer? | **Note as a future option only** — not built as part of this migration (see §6.3). |

**Still to confirm (engineering, not a schema choice):**

5. The exact field names `verify-agent.ts` / `verify-submission.yml` read, so Phase 5 aligns them to the new schema. **[REPO — pending code review.]**

---

## 12. Sources

- OKF blog announcement — https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
- OKF v0.1 specification — https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
- Repository files verified: `Australia.md`, `.specify/memory/constitution.md`, `.specify/memory/project-context.md`, `HTML_template.md`, `docs/medical.md`, `docs/government.md`, `docs/technology.md`, `docs/indigenous.md`, `docs/medical/dental/*.md`, `.github/scripts/create-content-file.ts`, `src/main.ts`.
