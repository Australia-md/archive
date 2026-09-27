# Prioritized Action Plan — Australia.md

**SEO Health Score:** 92 / 100  
**Target Goal:** 98+ / 100  

---

## Phase 1: Critical Fixes & Sitemap Synchronization (Week 1)

### 1. Synchronize `sitemap.xml` with Live Repository
- **Priority:** High
- **Effort:** 15 mins
- **Task:** Regenerate `sitemap.xml` to include all 97 production HTML routes. Assign appropriate `<priority>` values (1.0 for home, 0.8 for primary categories, 0.6 for directory pages) and ISO `<lastmod>` timestamps.
- **Files Affected:** `sitemap.xml`

### 2. Remove Raw Markdown (.md) URLs from Primary Sitemap
- **Priority:** High
- **Effort:** 10 mins
- **Task:** Remove the 56 `.md` file URLs from `sitemap.xml`. Standard web search bots require HTML endpoints.
- **Files Affected:** `sitemap.xml`

### 3. Deploy `llms.txt` and `llms-full.txt`
- **Priority:** High
- **Effort:** 20 mins
- **Task:** Create `/llms.txt` and `/llms-full.txt` at the root following the llms.txt standard. Provide a structured overview of the archive with links to the 12 OKF concept files in `docs/`.
- **Files Affected:** `llms.txt`, `llms-full.txt`

### 4. Correct Heading Hierarchy on Submit Page
- **Priority:** Medium
- **Effort:** 5 mins
- **Task:** Update `<h3>Submit New Entry</h3>` in `submit/index.html` to `<h2>` to resolve the heading skip from `<h1>`.
- **Files Affected:** `submit/index.html`

---

## Phase 2: High-Impact Schema & On-Page Enhancements (Weeks 2–3)

### 5. Enrich Local `Dentist` Schema
- **Priority:** Medium
- **Effort:** 1–2 hours
- **Task:** Update the directory generation script to inject `geo` (`GeoCoordinates`), `priceRange: "$$"`, and clinic profile `url` into the JSON-LD `@graph` of all 40+ dental suburb pages.
- **Files Affected:** `medical/dental/*/index.html`

### 6. Implement `BreadcrumbList` Schema
- **Priority:** Medium
- **Effort:** 30 mins
- **Task:** Add structured `BreadcrumbList` JSON-LD schema to all sub-category and directory pages matching the visual navigation trail.
- **Files Affected:** All sub-pages in `culture/`, `medical/`, `economy/`, etc.

### 7. Optimize Sub-30 Character Title Tags
- **Priority:** Low
- **Effort:** 10 mins
- **Task:** Expand titles on `culture/index.html` and `flora-fauna/index.html`:
  - `culture/index.html`: `Culture & Arts in Australia: Sovereign National Archive`
  - `flora-fauna/index.html`: `Flora & Fauna of Australia: Biodiversity & Species Records`
- **Files Affected:** `culture/index.html`, `flora-fauna/index.html`

### 8. Add Explicit Image Dimensions to Homepage PNGs
- **Priority:** Low
- **Effort:** 5 mins
- **Task:** Add `width` and `height` attributes to the 4 heraldic images in `index.html` to prevent layout shifts.
- **Files Affected:** `index.html`

---

## Phase 3: Content Expansion & Authority Building (Month 2)

### 9. Expand Thin Category Hub Pages
- **Priority:** Medium
- **Effort:** 3–4 hours
- **Task:** Add 150–250 words of verified statistics, institutional references, and direct-answer summary boxes to the 8 category hub pages (`education`, `tourism`, `government`, `environment`, `economy`, `technology`, `history`, `submit`).
- **Files Affected:** 8 category `index.html` files

### 10. Implement Edge Security Headers
- **Priority:** Medium
- **Effort:** 1 hour
- **Task:** Deploy a Cloudflare proxy or Worker to inject `Strict-Transport-Security`, `Content-Security-Policy`, and `X-Content-Type-Options: nosniff`.
- **Infrastructure:** DNS / Cloudflare configuration

### 11. Search Engine Submission & IndexNow Protocol
- **Priority:** Medium
- **Effort:** 15 mins
- **Task:** Check `updateBingIndex.md` operational memory ledger and submit updated URLs to Bing via the IndexNow API key (`375e338047314ab09f7f78f40d3b420a`).
- **Files Affected:** `updateBingIndex.md`

---

## Phase 4: Ongoing Monitoring & Governance (Continuous)

### 12. Automate Sitemap Generation in CI/CD
- **Priority:** Medium
- **Effort:** 30 mins
- **Task:** Ensure any automated suburb page generator script automatically regenerates and validates `sitemap.xml` before committing.

### 13. Regression Testing via Drift Monitoring
- **Priority:** Low
- **Effort:** 10 mins per release
- **Task:** Run `claude-seo run drift_compare.py https://australia.md/` after deployments to verify against baseline ID #1.
