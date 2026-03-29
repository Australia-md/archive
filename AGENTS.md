# AGENTS.md — ChatGPT/OpenAI Agent Context

> **Authoritative source:** All project standards are defined in the [constitution](.specify/memory/constitution.md). This file provides ChatGPT-specific behavioural rules only. Do not duplicate constitution content here.

---

## Mandatory Reading

Before making any changes, read these files in order:

1. **[`.specify/memory/constitution.md`](.specify/memory/constitution.md)** — Project standards, governance, and non-negotiable rules
2. **[`Australia.md`](Australia.md)** — Root knowledge index and archive structure
3. **[`README.md`](README.md)** — Project overview and tech stack
4. **[`CONTRIBUTING.md`](CONTRIBUTING.md)** — Contributor guide and file conventions
5. **[`Security.md`](Security.md)** — Security policies and responsible disclosure

---

## ChatGPT-Specific Rules

### 1. Accuracy first
- Do not invent facts, statistics, dates, citations, or policy claims.
- If a fact is not verified from the repository or a cited authoritative source, say so clearly.
- Prefer primary or institutional sources where possible.

### 2. Lead with the answer
- Write in a **direct answer format** — fact first, then context.
- Start sections with a short summary paragraph that can stand alone for AI extractors.

### 3. Write for humans and machines
- Use consistent entity names. Define entities in full on first mention.
- Structure pages so sections answer specific questions.
- Keep definitions concise and extractable.

### 4. Match the repository voice
- Formal, calm, precise. No hype, no marketing fluff, no filler phrases.
- No casual or chatty UI copy unless a specific page explicitly needs it.

### 5. Prefer maintainable structure
- Use semantic HTML. Keep content and navigation predictable.
- Reuse existing patterns before creating new ones.

### 6. Output expectations
- Outputs should be immediately usable or close to usable
- Preserve the existing information architecture
- Cite sources when factual claims are introduced
- Keep language compact, formal, and exact
- Improve discoverability for search engines and AI answer engines

If uncertain, default to: **verify, simplify, cite, and preserve structure.**
