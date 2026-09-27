# Technical SEO Specialist Findings — Australia.md

**Audited Domain:** `https://australia.md`  
**Category Score:** 80 / 100  
**Status:** Scored  
**Weight:** 22%  

---

## 1. What Works Well

- **Robots.txt Architecture:** Clean, well-structured, and explicitly allows all major search and AI crawlers (Googlebot, Bingbot, Applebot, GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Correctly references the XML sitemap.
- **Canonical Consistency:** 100% of examined HTML pages (97/97) specify self-referential `<link rel="canonical">` tags with consistent trailing slash formatting (`https://australia.md/<route>/`).
- **Clean Static Delivery:** Pure HTML5/CSS3 architecture without complex client-side single page app (SPA) hydration, guaranteeing instant DOM parseability by any user agent.
- **CDN Caching & Latency:** Hosted via GitHub Pages on Fastly edge caching, providing sub-10ms Time to First Byte (TTFB) on cached edge hits.
- **Mobile Viewport:** Responsive viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0">` configured across all 97 pages with zero horizontal overflow.

---

## 2. Issues & Findings

### Finding TECH-01: 42 Published HTML Pages Missing from `sitemap.xml`
- **Severity:** High (-10 pts)
- **Confidence:** High
- **Evidence:** `sitemap.xml` lists only 55 HTML pages out of 97 total HTML pages located in the repository. 42 production HTML pages are missing, including newly generated NSW dental directory suburb pages:
  - `https://australia.md/medical/dental/belrose/`
  - `https://australia.md/medical/dental/berala/`
  - `https://australia.md/medical/dental/beresfield/`
  - `https://australia.md/medical/dental/berkeley-vale/`
  - `https://australia.md/medical/dental/berowra-heights/`
  - `https://australia.md/medical/dental/berry/`
  - `https://australia.md/medical/dental/beverly-hills/`
  - `https://australia.md/medical/dental/bexley-north/`
  - `https://australia.md/medical/dental/bexley/`
  - `https://australia.md/medical/dental/bilgola-plateau/`
  - `https://australia.md/medical/dental/billinudgel/`
  - `https://australia.md/medical/dental/bingara/`
  - `https://australia.md/medical/dental/blackalls-park/`
  - `https://australia.md/medical/dental/blayney/`
  - `https://australia.md/medical/dental/bligh-park/`
  - ... and 26 additional suburb pages, plus `https://australia.md/medical/endocrinology/`.
- **Impact:** Search engine bots may take significantly longer to discover and index newly deployed programmatic directory pages, delaying local ranking acquisition.
- **Remediation:** Re-run the automated sitemap generator to synchronize `sitemap.xml` with the filesystem, establishing proper `<lastmod>` and `<priority>0.6</priority>` entries.

### Finding TECH-02: Raw Markdown (.md) URLs Declared in XML Sitemap
- **Severity:** Medium (-5 pts)
- **Confidence:** High
- **Evidence:** 56 URLs ending in `.md` (e.g. `https://australia.md/docs/culture.md`, `https://australia.md/docs/medical/dental/chatswood-nsw.md`) are declared in `sitemap.xml`. When fetched, these return `content-type: text/markdown; charset=utf-8`.
- **Impact:** Google Search and Bing index sitemaps expecting canonical HTML landing pages. Direct ingestion of Markdown files into standard web indices causes non-canonical document flags, dilutes crawl allocation, and presents unstyled raw text to human searchers clicking search results. Per Google's official June 2026 guidance, standard Googlebot crawls web HTML; Markdown is best reserved for specialized LLM crawler endpoints.
- **Remediation:** Remove `.md` URLs from the main `sitemap.xml`. Move them to a dedicated `llms.txt` manifest or an auxiliary `sitemap-ai.xml`.

### Finding TECH-03: Missing HTTP Security Headers
- **Severity:** Medium (-5 pts)
- **Confidence:** High
- **Evidence:** Live HTTP header inspection of `https://australia.md/` reveals missing:
  - `Strict-Transport-Security` (HSTS)
  - `Content-Security-Policy` (CSP)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Impact:** GitHub Pages serves static files directly and does not support custom header injection. Without HSTS, the domain cannot be submitted to the Chromium HSTS preload list.
- **Remediation:** Place Cloudflare (or a Cloudflare Worker) in front of the custom domain to inject security headers at the edge, or configure `<meta http-equiv>` tags for CSP and Referrer-Policy.
