## ChatGPT Agent Context

### Purpose
This file adapts the Australia project guidance for **ChatGPT/OpenAI agents** working in this repository. It should be treated as the working brief for content, structure, UI, accessibility, SEO, GEO, AEO, and file conventions when assisting with the Australia archive.

The project is a structured, machine-readable knowledge source about Australia. The output must feel authoritative, durable, and citable.

---

## Design Context

### Users
Primary audience: **AI agents, developers, and API consumers** using Australia.md as a structured, machine-readable knowledge source. Secondary audience: researchers, academics, and professionals who need verified, citable Australian data. Users arrive with a specific query or task in mind — they are not browsing for entertainment. The interface must get out of their way and surface information with confidence and speed.

### Brand Personality
**Sovereign. Precise. Enduring.**

Voice is formal but not bureaucratic — authoritative like a national institution, not distant like a government portal. Tone is factual, confident, and measured. The emotional goal is **authority and trust**: users should feel they have reached the definitive source. No hedging, no fluff.

### Aesthetic Direction
- **Theme:** Dark mode only. Deep forest-green surfaces (`#0a160f`) with Australian Green (`#71dc8a`) and Gold (`#fecc00`) as archival accents. Steel blue (`#abc7ff`) for tertiary data.
- **Typography:** Space Grotesk (display/headlines) — structured yet humanist. Inter (body) — neutral, highly legible.
- **Visual tone:** Technical and archival. Think mission-control terminal meets national library. Dense information, clean hierarchy, intentional whitespace.
- **References:** The visual gravity of government intelligence dashboards, the editorial precision of scientific journals, the structural clarity of developer documentation.
- **Anti-references:** Tourist brochures (no bright tropical color, no playful curves, no lifestyle photography). Generic SaaS dashboards (no Tailwind defaults, no rounded-everything, no pastel gradients). Government portals (no sterile clip-art bureaucracy).

---

## ChatGPT Working Rules

### 1. Accuracy first
- Do not invent facts, statistics, dates, citations, or policy claims.
- If a fact is not verified from the repository or a cited authoritative source, say so clearly.
- Prefer primary or institutional sources where possible.
- Where claims are time-sensitive, include a visible **Last Verified** date.

### 2. Lead with the answer
- Write in a **direct answer format**.
- Start sections with a short summary paragraph that can stand alone for search engines and AI extractors.
- Follow with context, qualification, and references.

### 3. Write for humans and machines
- Use consistent entity names.
- Define entities in full on first mention.
- Structure pages so sections answer specific questions.
- Keep definitions concise and extractable.

### 4. Match the repository voice
- Formal, calm, precise.
- No hype, no marketing fluff, no filler phrases.
- No casual or chatty UI copy unless a specific page explicitly needs it.

### 5. Prefer maintainable structure
- Use semantic HTML.
- Keep content and navigation predictable.
- Reuse existing patterns before creating new ones.

---

## W3C Standards

All markup, styles, and interactive behaviour must conform to W3C specifications:

- **HTML:** Valid HTML5 per the [W3C HTML Living Standard](https://html.spec.whatwg.org/). Use semantic elements (`<article>`, `<section>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>`) — never use `<div>` or `<span>` where a semantic element exists.
- **CSS:** Valid CSS3 per W3C specifications. Prefer custom properties (CSS variables) for all design tokens. Avoid vendor-prefixed properties unless required for broad browser support.
- **Accessibility — WAI-ARIA:** Follow [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) for roles, states, and properties. Use native HTML semantics first; add ARIA only where native semantics are insufficient.
- **Accessibility — WCAG:** Conform to [WCAG 2.1 Level AA](https://www.w3.org/TR/WCAG21/). Key requirements:
  - Contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text and UI components
  - All interactive elements keyboard-accessible with visible focus indicators
  - No content that flashes more than 3 times per second
  - All images have meaningful `alt` text; decorative images use `alt=""`
  - Form inputs have associated `<label>` elements
- **Internationalisation:** Use `lang` attributes on `<html>` (and on language switches). Encode all pages as UTF-8.
- **Structured Data:** Where appropriate, mark up content with [Schema.org](https://schema.org/) JSON-LD for machine-readability.

---

## SEO, GEO & AEO Standards

Every web page in this project must follow best practices for **Search Engine Optimisation (SEO)**, **Generative Engine Optimisation (GEO)**, and **Answer Engine Optimisation (AEO)**.

### SEO
- Each page must have a unique, descriptive `<title>` (50–60 chars) and `<meta name="description">` (120–160 chars).
- Use a single `<h1>` per page that contains the primary keyword. Follow strict heading hierarchy (`h1 → h2 → h3`).
- All internal links use descriptive anchor text.
- Every page includes a canonical `<link rel="canonical">` tag.
- Images have descriptive `alt` attributes and are served at appropriate sizes with `loading="lazy"`.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Include `sitemap.xml` at the root and reference it in `robots.txt`.
- Include Open Graph and Twitter Card tags on every page.

### GEO
- Write content in a **direct answer format**: fact first, then context.
- Use `<strong>` for key entities, dates, and statistics where it improves extractability.
- Every topic section must include a short summary paragraph suitable for direct citation.
- Use clear entity naming and consistent terminology.
- Cite authoritative sources inline with `<cite>` or linked references.
- Structured data (Schema.org JSON-LD) is mandatory on every page. Minimum schemas:
  - `WebSite` with `SearchAction` on `index.html`
  - `WebPage` or relevant subtype on sub-pages
  - `BreadcrumbList` on all pages below the root
  - `FAQPage` where FAQ content exists
  - `Dataset` on pages exposing structured/tabular data

### AEO
- Structure content so each section answers a specific question.
- Use question-phrased headings where appropriate.
- Include an FAQ block on every major category page, marked up with `FAQPage` JSON-LD.
- Keep extractable answers concise — ideally 40–60 words.
- Avoid ambiguous pronouns at the start of paragraphs.
- Use `<time datetime="YYYY-MM-DD">` for all dates.
- Include a visible **Last Verified** date and reflect it in structured data.

---

## Content & File Conventions

When adding or changing Australia-related content:

1. **Read `Australia.md` first.** Before creating or modifying content, read `Australia.md` to understand the archive structure, topics, and cross-references.
2. **Update `Australia.md`.** After creating or updating a topic file, update the relevant section(s) in `Australia.md` so it remains the authoritative index.
3. **Place topic files in `docs/`.** Subject-matter markdown files live in the `docs/` folder. Do not place them in the project root.
4. **Wire up the web page.** Any new `docs/*.md` file must be reflected in `index.html` (and `main.js` if applicable) so the content is navigable from the interface.
5. **Naming convention.** Use lowercase kebab-case for all new files (e.g. `docs/indigenous-art.md`).
6. **Location-specific file naming (`docs/medical/`).** Files covering a specific medical specialty and suburb live under `docs/medical/{specialty}/` and **must** use this filename format:

   ```
   docs/medical/{specialty}/{suburb}-{state}.md
   ```

   | Segment | Format | Examples |
   |---|---|---|
   | `{specialty}` | Lowercase kebab-case specialty (folder name) | `dental`, `endocrinology`, `general-practice`, `pharmacy` |
   | `{suburb}` | Lowercase kebab-case suburb | `macquarie-park`, `surry-hills`, `north-ryde` |
   | `{state}` | State/territory abbreviation | `nsw`, `vic`, `qld`, `sa`, `wa`, `tas`, `act`, `nt` |

   **Examples:** `docs/medical/dental/macquarie-park-nsw.md`, `docs/medical/endocrinology/north-sydney-nsw.md`, `docs/medical/pharmacy/chatswood-nsw.md`

   This mirrors the web hierarchy exactly — the docs path and URL are directly derivable from each other without translation. The corresponding web page lives at `medical/{specialty}/{suburb}/index.html`.

7. **Update `sitemap.xml`.** Every time a new HTML page is created or a page URL changes, update `sitemap.xml` in the project root.
8. **RxAI footer credit.** Every new HTML page must include the "Built by RxAI" backlink in the `footer-bottom` div immediately before `.footer-accents`:
   ```html
   <span class="footer-built-by">Built by <a href="https://www.rxai.com.au" class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>
   ```
   Reuse existing CSS. Do not duplicate it.
9. **Sitemap entry fields.** Each sitemap entry must include `<loc>`, `<lastmod>` (`YYYY-MM-DD`), `<changefreq>`, and `<priority>`.
   - Homepage: `1.0`
   - Main category pages: `0.8`
   - Sub-pages: `0.6`
10. **Version control & release management.** Follow [semantic versioning (semver.org)](https://semver.org/) using **MAJOR.MINOR.PATCH** format (e.g. `v1.0.0`, `v1.1.0`). When releasing a new version:
   - Update version in three places: `index.html` (`<span class="nav-badge">vX.Y.Z</span>`), `README.md` (shield badge), and `AGENTS.md` (this file, if present)
   - Create a git tag: `git tag vX.Y.Z`
   - Push with tags: `git push origin main --tags`
   - MAJOR bumps for breaking changes, MINOR for backwards-compatible features, PATCH for bug fixes
   - All three files must be in sync before pushing — version mismatch creates confusion for users and agents

---

## Security

All work must comply with [`SECURITY.md`](SECURITY.md). Core rules:

- **Licence awareness.** Do not introduce dependencies incompatible with AGPL-3.0.
- **No secrets in code.** Never hardcode tokens, passwords, or private keys.
- **Sanitise before rendering.** Never render unsanitised user or model-generated content with `innerHTML`.
- **SRI on CDN assets.** Third-party scripts and stylesheets loaded from CDNs must use `integrity` and `crossorigin`.
- **External links.** All `target="_blank"` links must include `rel="noopener noreferrer"`.
- **LLM output is untrusted.** Validate and sanitise AI-generated content before rendering.
- **No destructive automation without confirmation.** Do not delete, overwrite, or force-push without explicit human approval.

---

## Design Principles

1. **Data before decoration.** If a visual element does not improve comprehension or hierarchy, remove it.
2. **Machine-readable clarity.** Structure must be predictable for both humans and automated systems.
3. **National identity without kitsch.** Green and gold are dignified archival accents, not decorative noise.
4. **Timeless over trendy.** Prefer restraint and durability over novelty.
5. **Accessible authority.** WCAG 2.1 AA minimum is a credibility requirement, not an optional enhancement.

---

## ChatGPT Output Expectations

When ChatGPT contributes content or code in this repo, outputs should:
- be immediately usable or close to usable
- preserve the existing information architecture
- avoid speculative facts
- cite sources when factual claims are introduced
- keep language compact, formal, and exact
- improve discoverability for search engines and AI answer engines

If uncertain, default to: **verify, simplify, cite, and preserve structure.**
