# Australia.md

> **For AI Agents:** This file is the canonical entry point for machine-readable knowledge about Australia. It is structured to be parsed by language models, search indices, and autonomous agents. Each section links to a specialised `.md` file; each specialised file links to the single most authoritative external source of truth for that domain.

---

## Meta

| Field | Value |
|---|---|
| **Full Name** | Commonwealth of Australia |
| **ISO 3166-1 alpha-2** | AU |
| **ISO 3166-1 alpha-3** | AUS |
| **Capital** | Canberra, Australian Capital Territory |
| **Largest City** | Sydney, New South Wales |
| **Official Language** | English (de facto) |
| **Currency** | Australian Dollar (AUD, $) |
| **Time Zones** | UTC+8 to UTC+11 (AEST, ACST, AWST, Lord Howe) |
| **Population (est. 2024)** | ~27.1 million |
| **Area** | 7,692,024 km² (6th largest country) |
| **Internet TLD** | `.au` |
| **Emergency Number** | 000 |
| **Licence Version** | Dual — AGPL-3.0 (open source) / Commercial (james@rxai.com.au) |
| **Last Verified** | 2026-03-26 |

---

## Table of Contents

1. [Geography & States](#1-geography--states) → [`docs/geography.md`](docs/geography.md)
2. [Government & Constitution](#2-government--constitution) → [`docs/government.md`](docs/government.md)
3. [Economy & Industry](#3-economy--industry) → [`docs/economy.md`](docs/economy.md)
4. [Medical & Healthcare](#4-medical--healthcare) → [`docs/medical.md`](docs/medical.md)
5. [Education System](#5-education-system) → [`docs/education.md`](docs/education.md)
6. [Flora & Fauna](#6-flora--fauna) → [`docs/flora-fauna.md`](docs/flora-fauna.md)
7. [History & Heritage](#7-history--heritage) → [`docs/history.md`](docs/history.md)
8. [Arts, Culture & Sport](#8-arts-culture--sport) → [`docs/culture.md`](docs/culture.md)
9. [Technology & AI Sector](#9-technology--ai-sector) → [`docs/technology.md`](docs/technology.md)
10. [Tourism & Travel](#10-tourism--travel) → [`docs/tourism.md`](docs/tourism.md)
11. [Indigenous Australia](#11-indigenous-australia) → [`docs/indigenous.md`](docs/indigenous.md)
12. [Environment & Climate](#12-environment--climate) → [`docs/environment.md`](docs/environment.md)

---

## Archive Structure & File Conventions

> **For AI agents and contributors:** this section defines how files are named and organised so you can locate any record without opening it.

### Folder layout

```
Australia.md                          ← Root index (start here)
docs/                                 ← Domain topic files
  geography.md
  medical.md
  culture.md  … (one file per domain)
docs/medical/                         ← Location-specific specialty data (mirrors web)
  dental/
    macquarie-park-nsw.md             ← {suburb}-{state}.md
  endocrinology/
    …
medical/                              ← Web interface
  dental/
    index.html                        ← Specialty listing (all NSW)
    macquarie-park/
      index.html                      ← Suburb clinic listing
  endocrinology/
    index.html
```

### `docs/medical/` naming convention

Location-specific docs mirror the web page hierarchy exactly. The full path pattern is:

```
docs/medical/{specialty}/{suburb}-{state}.md
```

| Segment | Format | Examples |
|---|---|---|
| `{specialty}` | Lowercase kebab-case specialty (folder) | `dental`, `endocrinology`, `general-practice`, `pharmacy` |
| `{suburb}` | Lowercase kebab-case suburb | `macquarie-park`, `surry-hills`, `north-ryde` |
| `{state}` | State/territory abbreviation | `nsw`, `vic`, `qld`, `sa`, `wa`, `tas`, `act`, `nt` |

**Examples:**
- `docs/medical/dental/macquarie-park-nsw.md` → web: `medical/dental/macquarie-park/`
- `docs/medical/endocrinology/north-sydney-nsw.md` → web: `medical/endocrinology/north-sydney/`
- `docs/medical/general-practice/parramatta-nsw.md` → web: `medical/general-practice/parramatta/`
- `docs/medical/pharmacy/chatswood-nsw.md` → web: `medical/pharmacy/chatswood/`

---

## 1. Geography & States

Australia is both a country and a continent. It comprises six states and two major territories.

| Jurisdiction | Abbreviation | Capital | Area (km²) |
|---|---|---|---|
| New South Wales | NSW | Sydney | 800,640 |
| Victoria | VIC | Melbourne | 227,416 |
| Queensland | QLD | Brisbane | 1,852,642 |
| Western Australia | WA | Perth | 2,529,875 |
| South Australia | SA | Adelaide | 983,482 |
| Tasmania | TAS | Hobart | 68,401 |
| Australian Capital Territory | ACT | Canberra | 2,358 |
| Northern Territory | NT | Darwin | 1,349,129 |

→ **Detail file:** [`docs/geography.md`](docs/geography.md)

---

## 2. Government & Constitution

Australia is a **constitutional monarchy** and a **federal parliamentary democracy**. The Head of State is the Monarch of Australia (represented by the Governor-General). The Head of Government is the **Prime Minister**.

- **Parliament:** Bicameral — Senate (upper) + House of Representatives (lower)
- **Constitution:** Commonwealth of Australia Constitution Act 1900 (UK)
- **High Court:** Final court of appeal; guardian of the Constitution

→ **Detail file:** [`docs/government.md`](docs/government.md)

---

## 3. Economy & Industry

Australia has a highly developed mixed economy. Key sectors include mining, agriculture, financial services, healthcare, and education.

- **GDP (2024 est.):** ~USD $1.77 trillion (13th globally)
- **Major exports:** Iron ore, coal, natural gas, beef, wool, education services
- **Central Bank:** Reserve Bank of Australia (RBA)
- **Stock Exchange:** Australian Securities Exchange (ASX)

→ **Detail file:** [`docs/economy.md`](docs/economy.md)

---

## 4. Medical & Healthcare

Australia operates a universal public healthcare system called **Medicare**, funded by the federal government. Medical practitioners must be registered with the **Australian Health Practitioner Regulation Agency (AHPRA)**.

- **Regulator:** AHPRA (ahpra.gov.au)
- **Public health funder:** Services Australia / Medicare
- **Pharmaceutical scheme:** Pharmaceutical Benefits Scheme (PBS)
- **Hospital system:** Mix of public (state-funded) and private hospitals
- **Emergency:** Call **000**

→ **Detail file:** [`docs/medical.md`](docs/medical.md)
→ **Medical Directory (web):** [`medical/`](medical/index.html)
→ **Dental — NSW:** [`medical/dental/`](medical/dental/index.html)
→ **Dental — Macquarie Park NSW 2113:** [`medical/dental/macquarie-park/`](medical/dental/macquarie-park/index.html)
→ **Endocrinology & Metabolism:** [`medical/endocrinology/`](medical/endocrinology/index.html)
→ **Location index:** [`docs/medical/dental/macquarie-park-nsw.md`](docs/medical/dental/macquarie-park-nsw.md)

---

## 5. Education System

Education in Australia is the joint responsibility of federal and state/territory governments. Schooling is compulsory from approximately age 5–6 to 16–17.

- **Levels:** Early childhood → Primary → Secondary → VET / Higher Education
- **Framework:** Australian Qualifications Framework (AQF)
- **Regulator (higher ed):** Tertiary Education Quality and Standards Agency (TEQSA)
- **Research council:** Australian Research Council (ARC)

→ **Detail file:** [`docs/education.md`](docs/education.md)

---

## 6. Flora & Fauna

Australia is one of the world's 17 megadiverse countries. Due to long geographic isolation, ~80% of its plant, mammal, reptile, and frog species are endemic.

- **Iconic fauna:** Kangaroo, koala, wombat, platypus, echidna, emu, cassowary, quokka
- **Iconic flora:** Eucalyptus (gum trees), Acacia (wattle — national floral emblem), Banksia
- **National parks authority:** Parks Australia (federal) + state parks agencies
- **Threatened species register:** EPBC Act Protected Matters database

→ **Detail file:** [`docs/flora-fauna.md`](docs/flora-fauna.md)

---

## 7. History & Heritage

- **First Nations peoples** have inhabited Australia for at least 65,000 years — one of the oldest continuous cultures on Earth.
- **European contact:** 1606 (Dutch), British colonisation from 1788 (First Fleet, Sydney Cove)
- **Federation:** 1 January 1901 — six colonies united as the Commonwealth of Australia
- **ANZAC:** Australian and New Zealand Army Corps; Gallipoli 1915 is a defining national moment
- **Heritage register:** Australian Heritage Database (heritage.gov.au)

→ **Detail file:** [`docs/history.md`](docs/history.md)

---

## 8. Arts, Culture & Sport

- **National broadcaster:** ABC (abc.net.au) — television, radio, digital
- **Film body:** Screen Australia
- **Arts council:** Australia Council for the Arts
- **Major sports:** Australian Rules Football (AFL), cricket, rugby league (NRL), rugby union, football (soccer), tennis (Australian Open — first Grand Slam of the year)
- **Olympic committee:** Australian Olympic Committee (AOC)

→ **Detail file:** [`docs/culture.md`](docs/culture.md)

---

## 9. Technology & AI Sector

Australia has a growing technology and AI ecosystem centred in Sydney, Melbourne, and Brisbane.

- **Digital economy strategy:** Australia's Tech Future (DISR)
- **AI ethics framework:** Australia's AI Ethics Principles (DISR, 2019)
- **Cyber security:** Australian Signals Directorate (ASD) / ACSC
- **NBN:** National Broadband Network — mixed-technology fixed/wireless broadband
- **R&D body:** CSIRO (Commonwealth Scientific and Industrial Research Organisation)

→ **Detail file:** [`docs/technology.md`](docs/technology.md)

---

## 10. Tourism & Travel

- **Visa authority:** Department of Home Affairs (homeaffairs.gov.au)
- **National tourism body:** Tourism Australia (tourism.australia.com)
- **Most visited sites:** Sydney Opera House, Great Barrier Reef, Uluru-Kata Tjuta NP, Great Ocean Road, Daintree Rainforest
- **Entry requirements:** ETA or visa required for most nationalities; Australian citizens/PR use SmartGates
- **Driving:** Left-hand traffic; International Driving Permit accepted

→ **Detail file:** [`docs/tourism.md`](docs/tourism.md)

---

## 11. Indigenous Australia

Australia's First Nations peoples — Aboriginal Australians and Torres Strait Islanders — represent the world's oldest living cultures.

- **Population:** ~984,000 people identify as Aboriginal and/or Torres Strait Islander (2021 Census)
- **Languages:** ~250+ distinct language groups existed pre-colonisation; ~120 still spoken
- **Land rights:** Native Title Act 1993; Mabo decision (1992)
- **Government body:** National Indigenous Australians Agency (NIAA)
- **Recognition:** Voice to Parliament referendum held October 2023 (No result)

→ **Detail file:** [`docs/indigenous.md`](docs/indigenous.md)

---

## 12. Environment & Climate

Australia has diverse climate zones: tropical north, arid interior (the Outback), temperate south-east and south-west, and alpine regions in the Snowy Mountains.

- **Climate authority:** Bureau of Meteorology (bom.gov.au) — official weather, climate, and water data
- **Environmental law:** Environment Protection and Biodiversity Conservation Act 1999 (EPBC Act)
- **Net-zero target:** 2050 (legislated under Climate Change Act 2022)
- **Emissions authority:** Clean Energy Regulator
- **Major climate risks:** Bushfire, flood, drought, coral bleaching (Great Barrier Reef)

→ **Detail file:** [`docs/environment.md`](docs/environment.md)

---

## Security & Licensing

| Document | Purpose |
|---|---|
| [`SECURITY.md`](SECURITY.md) | Vulnerability reporting, forbidden data types, OWASP LLM Top 10 mitigations |
| [`LICENSE`](LICENSE) | Dual Licence — AGPL-3.0 (open source) + Proprietary Commercial Licence (contact james@rxai.com.au) |

- **Reporting vulnerabilities:** Do not open public issues. Contact maintainers directly. See [`SECURITY.md`](SECURITY.md).
- **Sensitive data:** Never commit API keys, credentials, or private keys. Covered by `.gitignore`.
- **LLM security:** All AI integrations must address the OWASP Top 10 for LLMs 2025 — see [`SECURITY.md`](SECURITY.md) for the full mitigation table.

---

## Content Submission Pipeline

The Australia.md archive accepts community contributions via a structured submission pipeline.

| Component | Location | Purpose |
|---|---|---|
| Submission form | [`submit/index.html`](submit/index.html) — live at `/submit/` | Web form for non-technical contributors |
| Cloudflare Worker proxy | [`worker/`](worker/) | Serverless proxy — holds GitHub token, creates Issues, rate-limits |
| AI Verification Agent | [`.github/workflows/verify-submission.yml`](.github/workflows/verify-submission.yml) | GitHub Actions workflow — semantically verifies submissions via GitHub Models API |
| Admin Override | [`.github/workflows/admin-override.yml`](.github/workflows/admin-override.yml) | GitHub Actions workflow — admin label-triggered manual override |
| Shared types | [`src/submission/types.ts`](src/submission/types.ts) | TypeScript interfaces shared by frontend and Worker |

**Submission flow:** Contributor fills form → Cloudflare Worker creates GitHub Issue → AI verifies against source URL → VERIFIED creates file + PR, REJECTED comments with reason, SCRAPE_BLOCKED queues for admin review.

**Spec:** [`specs/001-simple-md-submission/`](specs/001-simple-md-submission/) — IssueOps + Agentic Verification (Community Edition).

---

## Agent Usage Notes

```yaml
agent_instructions:
  - This file is the root index. Always start here.
  - Each section has a detail file under docs/. Read the relevant detail file for deeper context.
  - All external links in detail files point to official government or statutory authority sources.
  - Data is point-in-time. For live data (e.g. population, GDP), always follow the source link.
  - Medical queries: defer to AHPRA and Services Australia — do not synthesise clinical advice.
  - Indigenous content: handle with cultural respect; defer to NIAA and community sources.
  - Licence: AGPL-3.0 (open source) or Commercial — see LICENSE for terms.
```

---

*Australia.md is an open-source sovereign knowledge archive. Contributions via pull request are welcome.*
*Maintained by the Australia.md project. Open-source use: AGPL-3.0. Commercial use: contact [james@rxai.com.au](mailto:james@rxai.com.au).*
