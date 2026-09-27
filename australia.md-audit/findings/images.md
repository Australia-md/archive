# Images & Visual Assets Specialist Findings — Australia.md

**Audited Domain:** `https://australia.md`  
**Category Score:** 98 / 100  
**Status:** Scored  
**Weight:** 5%  

---

## 1. What Works Well

- **100% Meaningful Alt Text:** Every single image across all 97 HTML files includes descriptive, accurate `alt` attributes conforming to WCAG 2.1 AA accessibility guidelines.
- **Native Lazy Loading:** Off-screen images incorporate `loading="lazy"` to preserve bandwidth and initial rendering budget.
- **Compact Asset Sizing:** Image files are lightweight PNGs and SVGs under 20 KB each.

---

## 2. Issues & Findings

### Finding IMG-01: Missing Explicit `width` and `height` Attributes on Homepage PNGs
- **Severity:** Low (-2 pts)
- **Confidence:** High
- **Evidence:** On `index.html`, 4 image tags do not specify explicit HTML `width` and `height` dimensions:
  - `<img src="/assets/images/flag-australia.png" alt="Flag of Australia" loading="lazy" />`
  - `<img src="/assets/images/commonwealth-star.png" alt="Commonwealth Star" loading="lazy" />`
  - `<img src="/assets/images/golden-wattle.png" alt="Golden Wattle" loading="lazy" />`
  - `<img src="/assets/images/coat-of-arms.png" alt="Commonwealth Coat of Arms" loading="lazy" />`
- **Impact:** While modern browsers can infer aspect ratios from CSS rules once files download, omitting explicit HTML dimension attributes can cause Cumulative Layout Shift (CLS) on high-latency mobile networks before image metadata is parsed.
- **Remediation:** Add natural width and height attributes (e.g. `width="120" height="60"`) to all `<img>` tags in `index.html`.
