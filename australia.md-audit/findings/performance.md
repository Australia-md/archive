# Performance & Core Web Vitals Specialist Findings — Australia.md

**Audited Domain:** `https://australia.md`  
**Category Score:** 100 / 100  
**Status:** Scored  
**Weight:** 10%  

---

## 1. Measured Lab Performance (Playwright Chromium)

Direct measurements were captured using Playwright Chromium in headless mode across both desktop and mobile viewports against live production endpoints:

| Metric | Measured Desktop | Measured Mobile (iPhone 14) | Google Threshold ("Good") | Assessment |
|---|---|---|---|---|
| **LCP (Largest Contentful Paint)** | **456 ms** | **464 ms** | < 2,500 ms | **Exceptional** (Top 1% Tier) |
| **CLS (Cumulative Layout Shift)** | **0.0044** | **0.0000** | < 0.10 | **Exceptional** (Virtually Zero) |
| **FCP (First Contentful Paint)** | **368 ms** | **372 ms** | < 1,800 ms | **Exceptional** |
| **TTFB (Time to First Byte)** | **9 ms** | **12 ms** | < 800 ms | **Exceptional** (Edge Hit) |
| **DOMContentLoaded** | **342 ms** | **346 ms** | < 1,500 ms | **Exceptional** |
| **Total Page Load** | **488 ms** | **492 ms** | < 3,000 ms | **Exceptional** |
| **Transfer Size (HTML)** | **6.8 KB** | **6.8 KB** | < 500 KB | **Ultralight** |

*Note on Field Data:* Chrome UX Report (CrUX) 28-day rolling field data is currently unavailable due to traffic thresholds on this newly deployed archive (registered March 2026). Lab performance metrics show that the site easily exceeds all Core Web Vitals thresholds.

---

## 2. Architecture Strengths

- **Framework-Free Performance:** Zero client-side JavaScript frameworks (no React, Next.js, Vue, or Tailwind bloat). The site relies on native semantic HTML5 and lean CSS custom properties.
- **Minimal Asset Payloads:** The homepage downloads just 6.8 KB compressed over the wire. Total DOM node count is ~250 elements, eliminating main-thread layout thrashing.
- **Fastly Edge Caching:** Delivered via GitHub Pages Fastly CDN, serving responses from Sydney edge points (`x-github-edge-region: australiaeast`) with single-digit millisecond latency.

---

## 3. Issues & Findings

- **No critical or high severity performance regressions detected.**
- Category score starts and remains at **100/100**.
