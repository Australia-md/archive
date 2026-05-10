# CLAUDE.md — Claude/Copilot Agent Context

> ⚠️ **Before modifying this file:** If the content you are adding applies to more than one agent file, it belongs in [`.specify/memory/constitution.md`](.specify/memory/constitution.md) — not here. This file is for Claude-specific behaviour only. Anything shared across agents is constitution content.

> **Authoritative source:** All project standards are defined in the [constitution](.specify/memory/constitution.md). This file provides Claude-specific behavioural rules only. Do not duplicate constitution content here.

---

## Mandatory Reading

Before making any changes, read these files in order:

1. **[`.specify/memory/constitution.md`](.specify/memory/constitution.md)** — Project standards, governance, and non-negotiable rules
2. **[`.specify/memory/project-context.md`](.specify/memory/project-context.md)** — Archive structure, file naming, and domain categories
3. **[`Australia.md`](Australia.md)** — Root knowledge index
4. **[`README.md`](README.md)** — Project overview and tech stack
5. **[`CONTRIBUTING.md`](CONTRIBUTING.md)** — Contributor guide and file conventions
6. **[`Security.md`](Security.md)** — Security policies and responsible disclosure
7. **[`HTML_template.md`](HTML_template.md)** — Canonical HTML structure and rules for generating `medical/dental/{suburb}/index.html` pages. Read this before generating any dental listing page — do not read existing HTML files for template reference.

---

## Claude-Specific Rules

### 1. Constitution is the authority
- The constitution at `.specify/memory/constitution.md` is the single source of truth for all project standards.
- If you encounter conflicting guidance in any other file, the constitution takes precedence.

### 2. Speckit workflow
- Use the speckit commands (`/speckit.specify`, `/speckit.plan`, `/speckit.tasks`, `/speckit.implement`) for complex feature development.
- Always check the constitution before generating code — it defines the TypeScript/HTML/CSS stack, accessibility requirements, and security rules.

### 3. Code generation standards
- **TypeScript strict mode** — no `any` without justification comment.
- **Semantic HTML5** — use `<article>`, `<section>`, `<nav>`, not generic `<div>`.
- **CSS custom properties** — no Sass, Less, or Tailwind.
- **WCAG 2.1 AA** — contrast ratios, keyboard access, ARIA roles.
- Run `npm run build` to verify TypeScript compiles before suggesting commits.
- **Dental listing pages** — always use `HTML_template.md` as the sole structural reference. Never read an existing `index.html` to derive template structure.

### 4. Content quality
- All factual claims must be verifiable against authoritative Australian sources.
- Medical content defers to AHPRA and Services Australia.
- Indigenous content requires cultural respect, deferring to NIAA and community sources.
- Include `Last Verified` dates on time-sensitive content.

### 5. Voice and tone
- Sovereign. Precise. Enduring.
- Formal but not bureaucratic. No hedging, no fluff.
- Direct answer format: fact first, then context.

If uncertain, default to: **verify, simplify, cite, and preserve structure.**

## Active Technologies
- TypeScript 5.x (strict mode, per constitution) + Node.js 20 (Actions runner) (001-simple-md-submission)
- No database. GitHub Issues = submission queue. Repository files = accepted content. (001-simple-md-submission)

## Recent Changes
- 001-simple-md-submission: Added TypeScript 5.x (strict mode, per constitution) + Node.js 20 (Actions runner)
