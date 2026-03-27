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

### W3C Standards
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
- **Structured Data:** Where appropriate, mark up content with [Schema.org](https://schema.org/) JSON-LD for machine-readability (aligned with the archive's AI-agent audience).

### SEO, GEO & AEO Standards

Every web page in this project must follow best practices for **Search Engine Optimisation (SEO)**, **Generative Engine Optimisation (GEO)**, and **Answer Engine Optimisation (AEO)** — ensuring the archive is discoverable by both traditional search engines and AI/LLM systems.

#### SEO (Search Engine Optimisation)
- Each page must have a unique, descriptive `<title>` (50–60 chars) and `<meta name="description">` (120–160 chars).
- Use a single `<h1>` per page that contains the primary keyword. Follow strict heading hierarchy (`h1 → h2 → h3`).
- All internal links use descriptive anchor text — never "click here" or "read more".
- Every page includes a canonical `<link rel="canonical">` tag.
- Images have descriptive `alt` attributes and are served at appropriate sizes with `loading="lazy"`.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Include `sitemap.xml` at the root and reference it in `robots.txt`.
- Open Graph and Twitter Card meta tags on every page:
  ```html
  <meta property="og:title" content="…">
  <meta property="og:description" content="…">
  <meta property="og:type" content="website">
  <meta property="og:url" content="…">
  <meta name="twitter:card" content="summary_large_image">
  ```

#### GEO (Generative Engine Optimisation)
GEO ensures content is surfaced and cited accurately by AI-powered search engines (Google AI Overviews, Perplexity, Bing Copilot, etc.).
- Write content in a **direct answer format**: lead with the fact, follow with context. Avoid burying the answer.
- Use `<strong>` to emphasise key entities, dates, and statistics — these are strong signals for AI extraction.
- Every topic section must include a short **definition or summary paragraph** (2–4 sentences) suitable for direct citation.
- Entity clarity: name full entities on first use (e.g. "Australian Health Practitioner Regulation Agency (AHPRA)") and use consistent terminology throughout.
- Cite authoritative sources inline with `<cite>` or linked references — AI systems favour well-attributed content.
- Structured data (Schema.org JSON-LD) is mandatory on every page. Minimum schemas:
  - `WebSite` with `SearchAction` on `index.html`
  - `WebPage` or relevant type (e.g. `MedicalWebPage`) on all sub-pages
  - `BreadcrumbList` on all pages below the root
  - `FAQPage` where question-and-answer content exists
  - `Dataset` on pages exposing tabular/structured data

#### AEO (Answer Engine Optimisation)
AEO ensures the archive is surfaced in AI assistant responses and voice search results.
- Structure content so each section answers a specific question. Use question-phrased `<h2>`/`<h3>` subheadings where appropriate (e.g. "What is Medicare in Australia?").
- Include an FAQ block on every major category page, marked up with `FAQPage` JSON-LD.
- Keep answers concise — the ideal extractable answer is 40–60 words. Longer explanations follow after.
- Avoid ambiguous pronouns at the start of paragraphs; re-state the subject so AI can extract the sentence standalone.
- Use `<time datetime="YYYY-MM-DD">` for all dates to aid temporal reasoning.
- Include a `Last Verified` date (visible and in structured data) on all pages so AI systems can assess freshness.

### Content & File Conventions

**When adding new Australia-related content or files:**

1. **Read `Australia.md` first.** Before creating or modifying any content file, read `Australia.md` to understand the existing structure, topics, and cross-references. All new content must align with and extend what is already documented there.
2. **Update `Australia.md`.** After creating or updating a topic file, update the relevant section(s) in `Australia.md` to reference the new content — keep it as the authoritative index of the archive.
3. **Place topic files in `docs/`.** All subject-matter markdown files (e.g. `culture.md`, `economy.md`) live in the `docs/` folder. Do not place them in the project root.
4. **Wire up the web page.** Any new `docs/*.md` file must be reflected in `index.html` (and `main.js` if applicable) — add navigation, a section entry, or a dynamic import so the content is accessible from the web interface. The web page source must always stay in sync with the docs folder contents.
5. **Naming convention.** Use lowercase kebab-case for all new files (e.g. `docs/indigenous-art.md`, not `IndigenousArt.md`).
6. **Location-specific file naming (`docs/locations/`).** Files in `docs/locations/` that cover a specific specialty and suburb **must** follow this format:

   ```
   {specialty}-{suburb}-{state}.md
   ```

   | Segment | Rule | Examples |
   |---|---|---|
   | `{specialty}` | Lowercase kebab-case specialty name | `dental`, `endocrinology`, `general-practice`, `pharmacy` |
   | `{suburb}` | Lowercase kebab-case suburb name | `macquarie-park`, `surry-hills`, `north-ryde` |
   | `{state}` | Lowercase state/territory abbreviation | `nsw`, `vic`, `qld`, `sa`, `wa`, `tas`, `act`, `nt` |

   **Examples:**
   - `dental-macquarie-park-nsw.md` — dental clinics in Macquarie Park, NSW
   - `endocrinology-north-sydney-nsw.md` — endocrinology practices in North Sydney, NSW
   - `general-practice-parramatta-nsw.md` — GP clinics in Parramatta, NSW
   - `pharmacy-chatswood-nsw.md` — pharmacies in Chatswood, NSW

   This format ensures any agent or script can determine the **subject, location, and jurisdiction** from the filename alone — without opening the file.

   The corresponding web page lives at `medical/{specialty}/{suburb}/index.html` (matching URL structure: `/medical/dental/macquarie-park/`).

7. **Update `sitemap.xml`.** Every time a new HTML page is created or a page URL changes, update `sitemap.xml` in the project root.
8. **RxAI footer credit.** Every new HTML page must include the "Built by RxAI" backlink in the `footer-bottom` div, immediately before the `.footer-accents` element:
   ```html
   <span class="footer-built-by">Built by <a href="https://www.rxai.com.au" class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>
   ```
   The CSS for `.footer-built-by` and `.footer-rxai-link` is defined in `style.css` — do not duplicate it. Each entry must include `<loc>`, `<lastmod>` (today's date, `YYYY-MM-DD`), `<changefreq>`, and `<priority>`. Use `priority="1.0"` for the homepage, `0.8` for main category pages, and `0.6` for sub-pages.

### Security

All code and contributions must comply with the policies in [`SECURITY.md`](SECURITY.md). Key rules that apply during development:

- **Licence awareness.** This project is dual-licensed: AGPL-3.0 for open-source use, Proprietary Commercial Licence for commercial use. Any contributed code becomes subject to this dual licence. Do not introduce dependencies with licences incompatible with AGPL-3.0 (e.g. GPL-2.0-only, proprietary).
- **No secrets in code.** Never hardcode API keys, tokens, passwords, or private keys. Use `.env` files (git-ignored) for local secrets.
- **Sanitise before rendering.** Never use `innerHTML` with unsanitised input. Use `textContent` or a sanitiser. Treat all user input and LLM output as untrusted.
- **SRI on CDN assets.** Any third-party script or stylesheet loaded from a CDN must include `integrity` and `crossorigin` attributes.
- **External links.** All `target="_blank"` links must include `rel="noopener noreferrer"`.
- **LLM output handling (LLM05:2025).** If AI-generated content is ever rendered to the page, validate and sanitise it first — it is untrusted input.
- **No excessive agency (LLM06:2025).** Automated agents working on this repo must not perform destructive operations (delete, overwrite, force-push) without explicit human confirmation.

See [`SECURITY.md`](SECURITY.md) for the full OWASP Top 10 LLM 2025 mitigation table and vulnerability reporting process.

### Design Principles
1. **Data before decoration.** Every visual element must serve the data. If a flourish doesn't aid comprehension or hierarchy, remove it.
2. **Machine-readable clarity.** Layouts should be structurally predictable — consistent card anatomy, reliable spacing rhythms, and clear typographic hierarchy that both humans and AI can parse.
3. **National identity without kitsch.** Green and gold are used as dignified archival accents — never as tropical or celebratory decoration. Their weight should feel institutional.
4. **Timeless over trendy.** Avoid anything that will feel dated in 18 months. Prefer restraint over novelty. This archive is meant to endure.
5. **Accessible authority.** WCAG 2.1 AA minimum — sufficient contrast on all dark surfaces, full keyboard navigation, and screen-reader-ready ARIA. Accessibility is part of the institutional credibility, not an afterthought.
