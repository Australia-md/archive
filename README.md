# Australia.md — Sovereign Knowledge Archive

> A curated, open-source repository of factual data about Australia — spanning medicine, science, heritage, and culture — built for researchers, AI agents, professionals, and curious minds.

[![Licence: AGPL-3.0 / Commercial](https://img.shields.io/badge/licence-AGPL--3.0%20%2F%20Commercial-green)](#licence)
[![Version](https://img.shields.io/badge/version-2.4.1-blue)](#)
[![Last Verified](https://img.shields.io/badge/last%20verified-2026--03--26-brightgreen)](#)
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
docs/                                 ← Domain topic files (one per domain)
  geography.md
  government.md
  economy.md
  medical.md
  education.md
  flora-fauna.md
  history.md
  culture.md
  technology.md
  tourism.md
  indigenous.md
  environment.md
docs/medical/                         ← Location-specific specialty data (mirrors web)
  dental/
    macquarie-park-nsw.md             ← Example: dental clinics, Macquarie Park NSW
  endocrinology/
    …
medical/                              ← Web interface
  index.html                          ← Medical Directory
  dental/                             ← Dental specialists (NSW)
    index.html
    macquarie-park/                   ← Suburb-level clinic listing
      index.html
  endocrinology/                      ← Endocrinology & Metabolism (NSW)
    index.html
index.html                            ← Main web interface
style.css                             ← Design system ("The Sovereign Archive")
```

### `docs/medical/` file naming

Location-specific specialty files live at `docs/medical/{specialty}/{suburb}-{state}.md`, directly mirroring the web page at `medical/{specialty}/{suburb}/index.html`:

| Docs file | Web page |
|---|---|
| `docs/medical/dental/macquarie-park-nsw.md` | `medical/dental/macquarie-park/index.html` |
| `docs/medical/endocrinology/north-sydney-nsw.md` | `medical/endocrinology/north-sydney/index.html` |

| Segment | Format | Examples |
|---|---|---|
| `{specialty}` | Lowercase kebab-case (folder) | `dental`, `endocrinology`, `general-practice`, `pharmacy` |
| `{suburb}` | Lowercase kebab-case | `macquarie-park`, `surry-hills`, `north-ryde` |
| `{state}` | State/territory abbreviation | `nsw`, `vic`, `qld`, `sa`, `wa`, `tas`, `act`, `nt` |

---

## Knowledge Categories

| # | Category | Entries | Detail File |
|---|---|---|---|
| 1 | Geography & States | — | [`docs/geography.md`](docs/geography.md) |
| 2 | Government & Constitution | — | [`docs/government.md`](docs/government.md) |
| 3 | Economy & Industry | — | [`docs/economy.md`](docs/economy.md) |
| 4 | Medical & Healthcare | 12,400+ | [`docs/medical.md`](docs/medical.md) |
| 5 | Education System | — | [`docs/education.md`](docs/education.md) |
| 6 | Flora & Fauna | 9,700+ | [`docs/flora-fauna.md`](docs/flora-fauna.md) |
| 7 | History & Heritage | 7,200+ | [`docs/history.md`](docs/history.md) |
| 8 | Arts, Culture & Sport | 4,800+ | [`docs/culture.md`](docs/culture.md) |
| 9 | Technology & AI | 8,900+ | [`docs/technology.md`](docs/technology.md) |
| 10 | Tourism & Travel | 5,800+ | [`docs/tourism.md`](docs/tourism.md) |
| 11 | Indigenous Australia | — | [`docs/indigenous.md`](docs/indigenous.md) |
| 12 | Environment & Climate | — | [`docs/environment.md`](docs/environment.md) |

---

## Tech Stack

- **HTML5** — semantic markup, W3C valid
- **CSS3** — custom properties design system ("The Sovereign Archive / Continental Grid")
- **Vanilla JavaScript** — no framework dependencies
- **Fonts** — Space Grotesk (headlines) + Inter (body) via Google Fonts
- **Standards** — WCAG 2.1 AA · WAI-ARIA 1.2 · Schema.org JSON-LD

---

## Contributing

We welcome pull requests! Please ensure your contribution aligns with our formatting standards and strict security policies before submitting.

### How to Contribute

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Read `Australia.md`** — all contributions must align with the existing archive structure
4. **Follow the content conventions** in [`CLAUDE.md`](CLAUDE.md) — especially:
   - Place new topic files in `docs/`
   - Place location-specific specialty files in `docs/medical/{specialty}/` using the filename pattern `{suburb}-{state}.md` (e.g. `docs/medical/dental/macquarie-park-nsw.md`)
   - Update `Australia.md` to reference new content
   - Update `sitemap.xml` if adding new HTML pages
   - All markup must be W3C-valid HTML5
   - Follow SEO/GEO/AEO standards (meta tags, Schema.org JSON-LD, canonical URLs)
5. **Commit** your changes
   ```bash
   git commit -m 'Add: brief description of your contribution'
   ```
6. **Push** to your branch
   ```bash
   git push origin feature/YourFeature
   ```
7. **Open a Pull Request** — describe what you changed and why

### Contribution Standards

- All data must be verifiable against official Australian government or statutory authority sources
- Medical content: defer to AHPRA and Services Australia — do not synthesise clinical advice
- Indigenous content: handle with cultural respect and defer to NIAA and community sources
- Do not commit sensitive data (API keys, credentials, private keys) — see [`SECURITY.md`](SECURITY.md)
- Code must be W3C-valid, WCAG 2.1 AA compliant, and free of `innerHTML` with unsanitised input
- Dependencies with licences incompatible with AGPL-3.0 must not be introduced

### Security Issues

Do **not** open a public issue for security vulnerabilities. See [`SECURITY.md`](SECURITY.md) for the responsible disclosure process.

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
