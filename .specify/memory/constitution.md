# Australia.md Constitution

## Core Principles

### I. Accuracy First (NON-NEGOTIABLE)
All factual content must be verifiable against authoritative Australian sources (government, statutory authorities, institutional records). Never invent facts, statistics, dates, citations, or policy claims. Where claims are time-sensitive, include a visible **Last Verified** date. Medical content must defer to AHPRA and Services Australia — no synthesised clinical advice. Indigenous content must be handled with cultural respect, deferring to NIAA and community sources.

### II. Technology Stack
- **Languages:** TypeScript (strict mode), HTML5, CSS3 — these are the only permitted languages for source code
- **No frameworks:** No React, Vue, Angular, Tailwind, or similar. Vanilla TypeScript compiles to JavaScript via `tsc`
- **TypeScript rules:** `"strict": true` in `tsconfig.json`. No `any` type without an explicit justification comment. All new code in `src/` compiled to `dist/`
- **HTML:** Semantic HTML5 per the W3C HTML Living Standard. Use `<article>`, `<section>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` — never use `<div>` or `<span>` where a semantic element exists
- **CSS:** Valid CSS3 per W3C specifications. Use custom properties (CSS variables) for all design tokens. No CSS preprocessors (Sass, Less)
- **Build:** `npm run build` → `tsc` compiles `src/*.ts` → `dist/*.js`. Contributors must build before committing

### III. Accessibility (NON-NEGOTIABLE)
Conform to WCAG 2.1 Level AA and WAI-ARIA 1.2:
- Contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text and UI components
- All interactive elements keyboard-accessible with visible focus indicators
- No content that flashes more than 3 times per second
- All images have meaningful `alt` text; decorative images use `alt=""`
- Form inputs have associated `<label>` elements
- Use native HTML semantics first; add ARIA only where native semantics are insufficient
- Use `lang` attributes on `<html>`. Encode all pages as UTF-8

### IV. Security (NON-NEGOTIABLE)
- **Licence compatibility:** AGPL-3.0 for open source, Proprietary Commercial for commercial use. Do not introduce dependencies incompatible with AGPL-3.0
- **No secrets in code:** Never hardcode API keys, tokens, passwords, or private keys. Use `.env` files (git-ignored)
- **Sanitise before rendering:** Never use `innerHTML` with unsanitised input. Use `textContent` or a sanitiser. All user input and LLM output is untrusted
- **SRI on CDN assets:** Third-party scripts and stylesheets from CDNs must include `integrity` and `crossorigin` attributes
- **External links:** All `target="_blank"` links must include `rel="noopener noreferrer"`
- **No destructive automation:** Agents must not delete, overwrite, or force-push without explicit human confirmation

### V. Design Identity
- **Voice:** Sovereign. Precise. Enduring. Formal but not bureaucratic — authoritative like a national institution
- **Theme:** Dark mode only. Deep forest-green surfaces (`#0a160f`) with Australian Green (`#71dc8a`) and Gold (`#fecc00`) as archival accents. Steel blue (`#abc7ff`) for tertiary data
- **Typography:** Space Grotesk (display/headlines), Inter (body) via Google Fonts
- **Visual tone:** Technical and archival. Dense information, clean hierarchy, intentional whitespace
- **Anti-patterns:** No tourist brochure aesthetics, no generic SaaS dashboards, no government portal sterility

## Standards

### SEO (Search Engine Optimisation)
- Each page: unique `<title>` (50–60 chars), `<meta name="description">` (120–160 chars)
- Single `<h1>` per page with primary keyword. Strict heading hierarchy (`h1 → h2 → h3`)
- Descriptive anchor text — never "click here" or "read more"
- Canonical `<link rel="canonical">` on every page
- Images: descriptive `alt`, appropriate sizes, `loading="lazy"`
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- `sitemap.xml` at root, referenced in `robots.txt`
- Open Graph and Twitter Card meta tags on every page

### GEO (Generative Engine Optimisation)
- Direct answer format: fact first, then context
- `<strong>` for key entities, dates, and statistics
- Short definition/summary paragraph (2–4 sentences) per topic section, suitable for AI citation
- Full entity names on first use (e.g. "Australian Health Practitioner Regulation Agency (AHPRA)")
- Cite authoritative sources inline with `<cite>` or linked references
- Schema.org JSON-LD mandatory: `WebSite` with `SearchAction` on index, `WebPage`/`MedicalWebPage` on sub-pages, `BreadcrumbList` below root, `FAQPage` where FAQ exists, `Dataset` for tabular data

### AEO (Answer Engine Optimisation)
- Each section answers a specific question. Use question-phrased headings where appropriate
- FAQ block on every major category page with `FAQPage` JSON-LD
- Extractable answers: 40–60 words ideal
- No ambiguous pronouns at paragraph starts — re-state the subject
- `<time datetime="YYYY-MM-DD">` for all dates
- Visible `Last Verified` date on all pages, reflected in structured data

## Content & File Conventions

1. **Read `Australia.md` first** before creating or modifying any content
2. **Update `Australia.md`** after creating/updating topic files — it is the authoritative index
3. **Topic files in `docs/`** — subject-matter markdown in `docs/` folder, not project root
4. **Wire up the web page** — new `docs/*.md` must be reflected in `index.html` and `main.ts`
5. **Naming:** lowercase kebab-case for all files
6. **Medical files:** `docs/medical/{specialty}/{suburb}-{state}.md` mirroring `medical/{specialty}/{suburb}/index.html`
7. **Dental listing pages:** use `HTML_template.md` as the sole structural reference when generating `medical/dental/{suburb}/index.html`. Never read an existing `index.html` to derive template structure — `HTML_template.md` is the canonical source for all HTML structure, class names, AHPRA badge rules, Schema.org JSON-LD, and content constraints.
7. **Update `sitemap.xml`** for every new HTML page. Include `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
8. **RxAI footer credit** on every HTML page:
   ```html
   <span class="footer-built-by">Built by <a href="https://www.rxai.com.au" class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>
   ```
9. **Version control:** Semantic versioning (MAJOR.MINOR.PATCH). Update in `index.html`, `README.md`, and `AGENTS.md` simultaneously. Tag with `git tag vX.Y.Z`

## Development Workflow

### Speckit-Driven Development
All advanced feature development follows the speckit workflow:
1. `speckit.constitution` — Establish/review project principles (this document)
2. `speckit.specify` — Define what to build (requirements and user stories)
3. `speckit.clarify` — Identify underspecified areas, ask clarification questions
4. `speckit.plan` — Create technical implementation plan with chosen tech stack
5. `speckit.tasks` — Generate actionable, dependency-ordered task list
6. `speckit.implement` — Execute tasks according to the plan

### Branch Strategy
- Feature branches: `feature/{description}` from `main`
- Bug fixes: `fix/{description}` from `main`
- All changes via pull request — no direct commits to `main`

### Agent File Governance
- **`README.md`** is the human-facing project overview
- **`.specify/memory/constitution.md`** (this file) is the single source of truth for all project standards
- **`AGENTS.md`**, **`CLAUDE.md`**, **`GEMINI.md`** are thin wrappers that reference this constitution — do not duplicate content in them
- When this constitution is updated, agent files must be regenerated to stay in sync

## Governance

This constitution is the authoritative governance document for the Australia.md project. It supersedes any conflicting guidance in AGENTS.md, CLAUDE.md, GEMINI.md, or .impeccable.md.

- All pull requests must comply with Tier 1 (Core Principles) rules — violations block merge
- Tier 2 (Standards) compliance is required before merge to `main` but can be deferred in draft branches
- Tier 3 (Design Identity) guides quality but does not block contributions
- Constitution amendments are made via pull request like any other file — no special committee required
- All agents and contributors must reference this constitution as the authority when standards questions arise

**Version**: 1.0.0 | **Ratified**: 2026-03-29 | **Last Amended**: 2026-03-29
