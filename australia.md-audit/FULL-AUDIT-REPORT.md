# Comprehensive SEO & AI Search Audit Report

**Target Domain:** [`australia.md`](https://australia.md)  
**Audit Mode:** Sampled audit (97 crawled of 111 discovered URLs)  
**Crawl Tier:** Tier 2 (Sitemap-guided sample + filesystem reconciliation)  
**Audit Knowledge Cutoff:** 2026-08-12 (via `seo_updates.py` dashboard-verified)  
**Execution Date:** 2026-09-27  
**Scoring Method:** v1 (Deterministic Check-Level Deductions)  

---

## Executive Summary

| Category | Weight | Score | Weighted Contribution |
|---|---|---|---|
| **Technical SEO** | 22% | **80 / 100** | 17.60 |
| **Content Quality & E-E-A-T** | 23% | **95 / 100** | 21.85 |
| **On-Page SEO** | 20% | **96 / 100** | 19.20 |
| **Schema / Structured Data** | 10% | **93 / 100** | 9.30 |
| **Performance (Core Web Vitals)** | 10% | **100 / 100** | 10.00 |
| **AI Search Readiness (GEO)** | 10% | **95 / 100** | 9.50 |
| **Images & Visuals** | 5% | **98 / 100** | 4.90 |
| **Composite SEO Health Score** | **100%** | **92 / 100** | **92.35 (Grade A)** |

> [!NOTE]
> *Scores are internal deterministic heuristics based on confirmed search engine guidelines. No third-party tool has access to Google's proprietary internal ranking algorithms or can guarantee search placement (per Google's official third-party SEO tools guidance). First-party performance and indexation must be validated via Google Search Console and Bing Webmaster Tools.*

### Business Type Detected
**Curated Sovereign Knowledge Archive & Healthcare Directory** (Hybrid Reference, Open Knowledge Format v0.1 repository, and local healthcare services directory).

### Top Critical / High Priority Issues
1. **42 Published HTML Pages Missing from `sitemap.xml`:** 42 production HTML pages (including 41 newly generated local dental suburb pages such as `belrose`, `bexley`, `bondi`, `blackalls-park`, and `medical/endocrinology/`) are absent from the XML sitemap, causing delayed crawler discovery.
2. **Raw Markdown (.md) URLs Declared in XML Sitemap:** 56 raw `.md` URLs are mixed into `sitemap.xml`, serving `content-type: text/markdown` rather than canonical HTML. Standard web crawlers expect HTML documents.
3. **Missing HTTP Security Headers:** Direct static hosting on GitHub Pages prevents HSTS, CSP, and X-Content-Type-Options injection, precluding Chromium HSTS preload eligibility.
4. **Top-Level Category Hub Pages Border on Thin Content:** 8 category hubs (`submit`, `education`, `tourism`, `government`, `environment`, `economy`, `technology`, `history`) contain under 250 words, functioning predominantly as navigation matrices.
5. **Dentist LocalBusiness Schema Incomplete Properties:** Clinic directory schemas declare names and phone numbers but omit `geo` (lat/long), `openingHoursSpecification`, and `priceRange`.

### Top Quick Wins
1. **Regenerate `sitemap.xml`:** Sync all 97 production HTML routes with accurate lastmod dates and priority weights (10-minute fix).
2. **Publish `llms.txt` and `llms-full.txt`:** Implement the modern standard manifest for AI search engines at the domain root (15-minute fix).
3. **Fix Heading Hierarchy on `submit/index.html`:** Convert `<h3>` headings to `<h2>` to resolve the heading skip from `<h1>` to `<h3>` (5-minute fix).
4. **Add Explicit Image Dimensions on Homepage:** Specify `width` and `height` attributes on the 4 heraldic PNG assets in `index.html` (5-minute fix).
5. **Expand Title Tags on Hubs:** Extend titles on `culture/index.html` (29 chars) and `flora-fauna/index.html` (28 chars) to 50–60 characters (5-minute fix).

---

## 1. Technical SEO (Score: 80 / 100)

### Crawlability & Indexability
- **Robots.txt:** Outstanding. Explicitly authorizes 20+ search and AI user-agents while maintaining respectful 1-second crawl delay.
- **Sitemap Architecture:** Needs synchronization. `sitemap.xml` currently lists 111 entries (55 HTML and 56 Markdown files). 42 live HTML pages are unlisted.
- **Canonicals:** 100% compliant. Every HTML page declares an exact, self-referential canonical URL with trailing slashes matching the directory layout.
- **Status Codes & Redirects:** Zero broken links or redirect chains found across internal site links.

### Security & Response Headers
- **Hosting:** GitHub Pages Fastly Edge.
- **Observed Headers:**
  - `Server: GitHub.com`
  - `Content-Type: text/html; charset=utf-8`
  - `Cache-Control: max-age=600`
- **Missing Headers:** `Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`.

---

## 2. Content Quality & E-E-A-T (Score: 95 / 100)

### Algorithmic Evaluation
- **QRG Quality Score:** **97 / 100**
- **Filler Content:** 0%
- **Generic AI Pattern Score:** 0%
- **Information Density:** 1.0 (Maximum)

### Topical Depth & Structure
- **Healthcare Directory:** High quality. Clinic listings in NSW suburbs include genuine practitioner names, AHPRA numbers, contact details, public transport access, and Child Dental Benefits Schedule (CDBS) guidance.
- **Thin Content Audit:** 8 category hubs fall below the 250-word threshold. While acceptable for portal indexes, expanding them with 150–250 words of verified statistics and direct answers will strengthen site-wide topical authority.
- **Voice & Integrity:** 100% compliant with the project Constitution: Sovereign, precise, and enduring. Zero commercial spam or affiliate links.

---

## 3. On-Page SEO (Score: 96 / 100)

### Metadata & Headings Analysis
- **H1 Tags:** 97 / 97 pages (100%) have exactly one H1 tag.
- **Meta Descriptions:** 97 / 97 pages (100%) feature unique descriptions between 120 and 160 characters.
- **Anchor Text Health:** Zero generic phrases ("click here", "read more").
- **Heading Hierarchy:** 96 of 97 pages strictly obey `h1 → h2 → h3`. Only `submit/index.html` skips from `h1` to `h3`.
- **Title Lengths:** 95 of 97 pages fall in the optimal range. `culture/` (29 chars) and `flora-fauna/` (28 chars) should be lengthened.

---

## 4. Schema & Structured Data (Score: 93 / 100)

### Implementation Coverage
- **100% of HTML pages feature JSON-LD markup.**
- **Homepage:** Root `Organization`, `WebSite`, and `WebPage` interconnected graph.
- **Sub-pages:** `MedicalWebPage`, `Dataset`, `FAQPage`, and `Dentist`.
- **Gaps:**
  - `Dentist` schema lacks `geo`, `openingHoursSpecification`, and `priceRange`.
  - Sub-category pages lack `BreadcrumbList` schema.

---

## 5. Performance & Core Web Vitals (Score: 100 / 100)

### Real Chromium Measurements (Playwright)
- **Largest Contentful Paint (LCP):** **456 ms** (Desktop) / **464 ms** (Mobile) — *Well within the < 2,500 ms target.*
- **Cumulative Layout Shift (CLS):** **0.0044** (Desktop) / **0.0000** (Mobile) — *Virtually zero layout shift, exceeding the < 0.10 threshold.*
- **First Contentful Paint (FCP):** **368 ms**
- **Time to First Byte (TTFB):** **9 ms** (Fastly edge cache hit)
- **Total Transfer Size:** **6.8 KB** (Ultralight static payload)

---

## 6. AI Search Readiness (Score: 95 / 100)

### Generative Engine Optimization (GEO)
- **Bot Access:** Complete allowance for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Applebot-Extended`, and `Google-Extended`.
- **Direct Answer Format:** Sections lead with concise, extractable entity summaries.
- **Missing Asset:** `llms.txt` and `llms-full.txt` are not present on the domain root (returning 404).

---

## 7. Images & Visual Assets (Score: 98 / 100)

- **Alt Text:** 100% of images possess meaningful, descriptive text.
- **Dimensions:** 4 heraldic assets on `index.html` lack explicit `width` and `height` attributes in HTML.

---

## Additional Findings (Outside Health Score)

- **Backlink Health:** Domain registered March 2026 (~0.51 years old). Zero spam signals, clean historical profile.
- **Local Directory Footprint:** 40+ NSW dental clinic directories established.
- **Drift Baseline:** Baseline ID #1 successfully captured and stored in `drift.db`.

---

## Audit Knowledge Currency Disclosure

This audit incorporates Google search updates verified through **2026-08-12**, including:
1. *2026-07-24 Policy:* Review snippet guidelines targeting fake/incentivized reviews.
2. *2026-07-10 Product:* Canonicalization troubleshooting re-evaluation timeframes.
3. *2026-06-29 Product:* Generative AI optimization guide confirming gen-AI optimization is foundational SEO and Google Search ignores `llms.txt`.
4. *2026-06-24 Spam:* June 2026 Spam Update rollout.
5. *2026-06-05 Product:* Official guidance on third-party SEO tools, services, and advice.
