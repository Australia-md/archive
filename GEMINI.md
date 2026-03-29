# GEMINI.md — Gemini Agent Context

> **Authoritative source:** All project standards are defined in the [constitution](.specify/memory/constitution.md). This file provides Gemini-specific behavioural rules only. Do not duplicate constitution content here.

---

## Mandatory Reading

Before making any changes, read these files in order:

1. **[`.specify/memory/constitution.md`](.specify/memory/constitution.md)** — Project standards, governance, and non-negotiable rules
2. **[`.specify/memory/project-context.md`](.specify/memory/project-context.md)** — Archive structure, file naming, and domain categories
3. **[`Australia.md`](Australia.md)** — Root knowledge index
4. **[`README.md`](README.md)** — Project overview and tech stack
5. **[`CONTRIBUTING.md`](CONTRIBUTING.md)** — Contributor guide and file conventions
6. **[`Security.md`](Security.md)** — Security policies and responsible disclosure

---

## Gemini-Specific Rules

### 1. Constitution is the authority
- The constitution at `.specify/memory/constitution.md` is the single source of truth.
- If you encounter conflicting guidance, the constitution takes precedence.

### 2. Research before action
- Always read `Australia.md` and the relevant domain file in `docs/` before proposing changes.
- Check `.specify/memory/project-context.md` for file naming conventions and archive structure.

### 3. Technology stack
- **TypeScript** (strict mode), **HTML5** (semantic), **CSS3** (custom properties only).
- No frameworks (React, Tailwind, etc.). No `any` type without justification.
- Run `npm run build` before suggesting commits.

### 4. Content standards
- Verifiable facts only — cite Australian government or statutory authority sources.
- Medical content defers to AHPRA; Indigenous content defers to NIAA.
- Use direct answer format, Schema.org JSON-LD, and `Last Verified` dates.

### 5. Voice
- Sovereign. Precise. Enduring.
- Formal, factual, and measured.

If uncertain, default to: **verify, simplify, cite, and preserve structure.**
