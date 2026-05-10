# Australia.md — Sovereign Knowledge Archive

> A curated, open-source repository of factual data about Australia — spanning medicine, science, heritage, and culture — built for researchers, AI agents, professionals, and curious minds.

[![Licence: AGPL-3.0 / Commercial](https://img.shields.io/badge/licence-AGPL--3.0%20%2F%20Commercial-green)](#licence)
[![Version](https://img.shields.io/badge/version-1.1.0-blue)](#)
[![Last Verified](https://img.shields.io/badge/last%20verified-2026--03--29-brightgreen)](#)
[![W3C WCAG 2.1 AA](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-blue)](#)

---

## What is Australia.md?

**Australia.md** is a structured, open-source knowledge base that provides verified, machine-readable data on all major domains of Australian life — government, healthcare, technology, environment, culture, and more.

It is designed to be consumed by:
- **AI agents and LLMs** — as a reliable, well-structured knowledge source
- **Developers and API consumers** — building products on top of authoritative Australian data
- **Researchers and professionals** — needing citable, point-in-time factual data
- **Curious minds** — exploring the breadth and depth of the continent's story

---

## Archive Structure

```
Australia.md                          ← Root index (start here)
HTML_template.md                      ← Canonical HTML template for dental listing pages
docs/                                 ← Domain topic files (one per domain)
  geography.md, government.md, economy.md, medical.md,
  education.md, flora-fauna.md, history.md, culture.md,
  technology.md, tourism.md, indigenous.md, environment.md
docs/medical/                         ← Location-specific specialty data (mirrors web)
  dental/, endocrinology/, general-practice/, pharmacy/
medical/                              ← Web interface
  index.html, dental/, endocrinology/
src/                                  ← TypeScript source
  main.ts
dist/                                 ← Compiled JavaScript output
  main.js
index.html                            ← Main web interface
style.css                             ← Design system ("The Sovereign Archive")
```

### `docs/medical/` file naming

Location-specific specialty files live at `docs/medical/{specialty}/{suburb}-{state}.md`, directly mirroring the web page at `medical/{specialty}/{suburb}/index.html`:

| Docs file | Web page |
|---|---|
| `docs/medical/dental/macquarie-park-nsw.md` | `medical/dental/macquarie-park/index.html` |
| `docs/medical/endocrinology/north-sydney-nsw.md` | `medical/endocrinology/north-sydney/index.html` |

---

## Knowledge Categories

| # | Category | Detail File |
|---|---|---|
| 1 | Medical & Healthcare | [`docs/medical.md`](docs/medical.md) |
| 2 | Technology & AI | [`docs/technology.md`](docs/technology.md) |
| 3 | Flora & Fauna | [`docs/flora-fauna.md`](docs/flora-fauna.md) |
| 4 | History & Heritage | [`docs/history.md`](docs/history.md) |
| 5 | Tourism & Travel | [`docs/tourism.md`](docs/tourism.md) |
| 6 | Economy & Industry | [`docs/economy.md`](docs/economy.md) |
| 7 | Arts, Culture & Sport | [`docs/culture.md`](docs/culture.md) |
| 8 | Indigenous Australia | [`docs/indigenous.md`](docs/indigenous.md) |
| 9 | Environment & Climate | [`docs/environment.md`](docs/environment.md) |
| 10 | Geography & Regions | [`docs/geography.md`](docs/geography.md) |
| 11 | Government & Policy | [`docs/government.md`](docs/government.md) |
| 12 | Education & Learning | [`docs/education.md`](docs/education.md) |

---

## Tech Stack

- **TypeScript** — strict mode, compiled via `tsc` to `dist/`
- **HTML5** — semantic markup, W3C valid
- **CSS3** — custom properties design system ("The Sovereign Archive / Continental Grid")
- **No frameworks** — no React, Vue, Tailwind, or similar
- **Fonts** — Space Grotesk (headlines) + Inter (body) via Google Fonts
- **Standards** — WCAG 2.1 AA · WAI-ARIA 1.2 · Schema.org JSON-LD · SEO/GEO/AEO

---

## Governance

This project is governed by a **[constitution](.specify/memory/constitution.md)** that defines:
- **Core Principles** — accuracy, TypeScript/HTML/CSS stack, accessibility (WCAG 2.1 AA), security
- **Standards** — SEO, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO)
- **Design Identity** — dark mode, archival aesthetic, Australian Green & Gold palette
- **Development Workflow** — speckit-driven development for advanced features

All AI agents (ChatGPT, Claude, Gemini, Copilot) and human contributors follow this constitution as the single source of truth for project standards.

---

## Contributing

See **[`CONTRIBUTING.md`](CONTRIBUTING.md)** for the full contributor guide.

**Quick start:**
1. Fork the repo and create a feature branch
2. Read `Australia.md` to understand the archive structure
3. Follow the [constitution](.specify/memory/constitution.md) for all standards
4. Run `npm run build` before committing
5. Open a pull request

### Security Issues

Do **not** open a public issue for security vulnerabilities. See [`SECURITY.md`](Security.md) for the responsible disclosure process.

---

## Licence

This project is dual-licensed:

- **Open source use** — [GNU Affero General Public License v3.0 (AGPL-3.0)](LICENSE). Free to use, modify, and distribute — but any derivative (including network services) must also be AGPL-3.0 with source published.
- **Commercial use** — A separate written commercial licence is required for for-profit use, proprietary products, commercial AI/ML training, or any use that cannot comply with AGPL-3.0 copyleft requirements.

To obtain a commercial licence, contact **[james@rxai.com.au](mailto:james@rxai.com.au)**.

See [`LICENSE`](LICENSE) for full terms.

---

*Australia.md is an open-source sovereign knowledge archive. Maintained by the Australia.md project.*
*Non-commercial use: AGPL-3.0. Commercial use: [james@rxai.com.au](mailto:james@rxai.com.au)*
