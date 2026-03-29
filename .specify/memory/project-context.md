# Australia.md — Project Context

## What is Australia.md?

**Australia.md** is a structured, open-source knowledge base providing verified, machine-readable data on all major domains of Australian life. It serves AI agents, developers, researchers, and professionals who need authoritative, citable Australian data.

## Archive Structure

```
Australia.md                          ← Root index (start here)
docs/                                 ← Domain topic files
  geography.md, government.md, economy.md, medical.md,
  education.md, flora-fauna.md, history.md, culture.md,
  technology.md, tourism.md, indigenous.md, environment.md
docs/medical/                         ← Location-specific specialty data
  dental/, endocrinology/, general-practice/, pharmacy/
medical/                              ← Web interface (mirrors docs/medical/)
  index.html, dental/, endocrinology/
src/                                  ← TypeScript source
  main.ts
dist/                                 ← Compiled JavaScript
  main.js
index.html                            ← Main web interface
style.css                             ← Design system ("The Sovereign Archive")
```

## Knowledge Categories

| # | Category | Detail File |
|---|---|---|
| 1 | Medical & Healthcare | `docs/medical.md` |
| 2 | Technology & AI | `docs/technology.md` |
| 3 | Flora & Fauna | `docs/flora-fauna.md` |
| 4 | History & Heritage | `docs/history.md` |
| 5 | Tourism & Travel | `docs/tourism.md` |
| 6 | Economy & Industry | `docs/economy.md` |
| 7 | Arts, Culture & Sport | `docs/culture.md` |
| 8 | Indigenous Australia | `docs/indigenous.md` |
| 9 | Environment & Climate | `docs/environment.md` |
| 10 | Geography & Regions | `docs/geography.md` |
| 11 | Government & Policy | `docs/government.md` |
| 12 | Education & Learning | `docs/education.md` |

## Medical File Naming Convention

Location-specific files: `docs/medical/{specialty}/{suburb}-{state}.md`

| Segment | Format | Examples |
|---|---|---|
| `{specialty}` | Lowercase kebab-case (folder) | `dental`, `endocrinology`, `general-practice` |
| `{suburb}` | Lowercase kebab-case | `macquarie-park`, `surry-hills`, `north-ryde` |
| `{state}` | State/territory abbreviation | `nsw`, `vic`, `qld`, `sa`, `wa`, `tas`, `act`, `nt` |

**Path ↔ URL mapping:**
| Docs file | Web page |
|---|---|
| `docs/medical/dental/macquarie-park-nsw.md` | `medical/dental/macquarie-park/index.html` |
| `docs/medical/endocrinology/north-sydney-nsw.md` | `medical/endocrinology/north-sydney/index.html` |

## Sitemap Entry Format

Each entry in `sitemap.xml` must include `<loc>`, `<lastmod>` (YYYY-MM-DD), `<changefreq>`, `<priority>`:
- Homepage: `1.0`
- Main category pages: `0.8`
- Sub-pages: `0.6`
