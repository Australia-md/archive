# Product

> Impeccable design-context layer. The [constitution](.specify/memory/constitution.md)
> remains the single source of truth for standards; this file frames *who/what/why*
> for design work and does not override it.

## Register

product

## Users

Australia.md serves four overlapping audiences, all arriving to **find and trust a specific fact or listing, fast** — usually via search or an AI agent — then verify its provenance and move on:

- **AI agents & LLMs** — consuming structured, machine-readable data as a reliable knowledge source (Schema.org JSON-LD, clean semantics).
- **Developers & API consumers** — building products on authoritative Australian data.
- **Researchers & professionals** — needing citable, point-in-time factual data with visible provenance.
- **The public / curious minds** — e.g. a patient or carer locating an AHPRA-registered dental clinic by suburb, scanning services, and checking registration status.

The job to be done on any directory surface: **locate the right suburb/clinic, scan its services and trust signals, confirm recency, and leave** — with minimal friction.

## Product Purpose

A structured, open-source **sovereign knowledge archive**: verified, machine-readable data across every major domain of Australian life (medicine, government, technology, environment, culture, and more). It exists so humans and machines have *one* authoritative, citable, point-in-time source instead of scattered, unverifiable information.

Success looks like: data that is **trusted, correctly cited, and effortless to navigate** — equally legible to answer engines (GEO/AEO) and to people. For the medical/dental directory specifically, success is a user reaching the right suburb and clinic, understanding its services and AHPRA status, in as few steps as possible.

## Brand Personality

**Sovereign. Precise. Enduring.** Formal but not bureaucratic — authoritative like a national institution. Direct-answer format: fact first, then context; no hedging, no fluff. The visual tone is **technical and archival** — dense, authoritative information carried by clean hierarchy and intentional whitespace. The emotional goal is *quiet, durable trust*: the calm confidence of a national record. Even under a product register, this identity is the differentiator — task flow is optimized without sanding off the institutional character.

## Anti-references

- **No tourist-brochure aesthetics** — no stocky travel photography, no cheerful marketing gloss.
- **No generic SaaS dashboard** — no hero-metric template, no endless identical card grids, no purple-gradient startup look.
- **No government-portal sterility** — not cold, cramped, or buried in bureaucratic forms.
- General slop bans still apply: no gradient text, no side-stripe accent borders, no decorative glassmorphism, no over-rounded cards.

## Design Principles

1. **Verify, cite, preserve.** Provenance and `Last Verified` dates are surfaced, not hidden. Trust signals (AHPRA status, sources) are part of the UI; show "AHPRA Unverified" plainly rather than implying certainty. Honesty over polish.
2. **Legible to humans and machines alike.** Semantic HTML5, WAI-ARIA, and Schema.org JSON-LD are first-class. The same structure that ranks in answer engines reads cleanly for people and screen readers.
3. **Density with hierarchy.** Pack authoritative detail, but earn it with disciplined typographic hierarchy and intentional whitespace — archival, never cramped.
4. **Task flow first.** On directory surfaces the primary job — find a suburb/clinic, scan services, confirm status — wins over decoration. Fast scanning, obvious affordances, no friction, no horizontal scroll on any device.
5. **Enduring over trendy.** Choices should still read as authoritative in a decade. Avoid of-the-moment effects that date the archive.

## Accessibility & Inclusion

- **WCAG 2.1 Level AA + WAI-ARIA 1.2** — non-negotiable, enforced by the constitution.
- Body text ≥ 4.5:1 contrast; large text ≥ 3:1; placeholders held to body-text contrast.
- Full keyboard access with visible focus states; descriptive anchor text (never "click here" / "read more").
- `prefers-reduced-motion` honored with crossfade/instant fallbacks (already in place).
- Responsive down to ~320px with no horizontal overflow; layouts reflow to a single column on small screens.
- Content must remain fully legible to screen readers and AI agents.
