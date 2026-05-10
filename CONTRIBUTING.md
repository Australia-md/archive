# Contributing to Australia.md

Thank you for your interest in contributing to the **Australia.md Sovereign Knowledge Archive**. This guide covers everything you need to know to submit a successful contribution.

---

## Before You Start

1. **Read the [constitution](.specify/memory/constitution.md)** — this is the authoritative governance document for all project standards
2. **Read [`Australia.md`](Australia.md)** — understand the existing archive structure, topics, and cross-references
3. **Read [`SECURITY.md`](Security.md)** — understand security policies and responsible disclosure

---

## How to Contribute

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Follow the constitution** — all contributions must comply with the project's core principles (TypeScript, semantic HTML, WCAG 2.1 AA, AGPL-3.0 compatibility)
4. **Build before committing** — run `npm run build` to ensure TypeScript compiles cleanly
5. **Commit** your changes
   ```bash
   git commit -m 'Add: brief description of your contribution'
   ```
6. **Push** to your branch
   ```bash
   git push origin feature/your-feature
   ```
7. **Open a Pull Request** — describe what you changed and why

---

## Advanced Development (Speckit Workflow)

For complex features, contributors should follow the speckit-driven development workflow:

1. **`/speckit.constitution`** — Review project principles
2. **`/speckit.specify`** — Define requirements and user stories
3. **`/speckit.clarify`** — Clarify underspecified areas
4. **`/speckit.plan`** — Create technical implementation plan
5. **`/speckit.tasks`** — Generate dependency-ordered task list
6. **`/speckit.implement`** — Execute tasks according to the plan

Learn more at [github.com/github/spec-kit](https://github.com/github/spec-kit).

---

## Content Standards

### Factual Accuracy
- All data must be verifiable against official Australian government or statutory authority sources
- Medical content: defer to AHPRA and Services Australia — do not synthesise clinical advice
- Indigenous content: handle with cultural respect and defer to NIAA and community sources
- Include a **Last Verified** date on all factual content

### File Conventions
- **Topic files** go in `docs/` — never in the project root
- **File naming:** lowercase kebab-case (e.g. `docs/indigenous-art.md`)
- **Medical locations:** `docs/medical/{specialty}/{suburb}-{state}.md` (e.g. `docs/medical/dental/macquarie-park-nsw.md`)
- **Update `Australia.md`** to reference any new content
- **Update `sitemap.xml`** when adding new HTML pages

### Web Standards
- **HTML:** Semantic HTML5 — use `<article>`, `<section>`, `<nav>`, not generic `<div>`
- **CSS:** CSS3 with custom properties. No preprocessors
- **TypeScript:** Strict mode, no `any` without justification
- **Accessibility:** WCAG 2.1 Level AA minimum
- **SEO/GEO/AEO:** Meta tags, Schema.org JSON-LD, direct answer format, FAQ blocks

### New HTML Pages Must Include
- Unique `<title>` (50–60 chars) and `<meta name="description">` (120–160 chars)
- Canonical `<link rel="canonical">` tag
- Open Graph and Twitter Card meta tags
- Schema.org JSON-LD (at minimum: `WebPage` + `BreadcrumbList`)
- RxAI footer credit:
  ```html
  <span class="footer-built-by">Built by <a href="https://www.rxai.com.au" class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>
  ```

---

## Security

- **No secrets in code** — never commit API keys, tokens, or credentials
- **Sanitise all input** — never use `innerHTML` with unsanitised content
- **SRI on CDN assets** — `integrity` and `crossorigin` attributes required
- **External links** — all `target="_blank"` links must include `rel="noopener noreferrer"`
- **AGPL-3.0 compatibility** — do not introduce dependencies with incompatible licences

### Reporting Security Issues

Do **not** open a public issue for security vulnerabilities. See [`SECURITY.md`](Security.md) for the responsible disclosure process.

---

## Version Control

This project follows [semantic versioning](https://semver.org/) (MAJOR.MINOR.PATCH):
- Update version in three places: `index.html`, `README.md`, and `AGENTS.md`
- Create a git tag: `git tag vX.Y.Z`
- MAJOR = breaking changes, MINOR = new features, PATCH = bug fixes

---

## Licence

By contributing, you agree that your work will be dual-licensed under:
- **AGPL-3.0** for open-source use
- **Proprietary Commercial Licence** for commercial use

See [`LICENSE`](LICENSE) for full terms.
