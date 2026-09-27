# Schema & Structured Data Specialist Findings — Australia.md

**Audited Domain:** `https://australia.md`  
**Category Score:** 93 / 100  
**Status:** Scored  
**Weight:** 10%  

---

## 1. What Works Well

- **100% Schema Presence:** Every single HTML page (97/97) contains valid JSON-LD structured data with zero syntax errors or parsing breaks.
- **Root Entity Graph:** The homepage correctly defines an interconnected knowledge graph with `Organization`, `WebSite`, and `WebPage` schemas, identifying Australia.md as a sovereign knowledge archive.
- **Specialized Medical & Local Types:** Suburb directory pages utilize specialized Schema.org types, including `MedicalWebPage`, `Dataset` (for clinical directory tables), `FAQPage` (for local dental FAQs), and individual `Dentist` entries for local practices.

---

## 2. Issues & Findings

### Finding SCHEMA-01: Dentist Schema Incomplete Properties (Missing Geo, Hours, Price Range)
- **Severity:** Medium (-5 pts)
- **Confidence:** High
- **Evidence:** Examination of the `Dentist` schema across all 40+ dental directory pages shows that practices declare `name`, `address` (PostalAddress: locality, region, postalCode, country), and `telephone`, but consistently lack:
  - `geo` (`GeoCoordinates`: latitude, longitude)
  - `openingHoursSpecification` or `openingHours`
  - `priceRange` (e.g. `$$`)
  - `url` (practice website or directory profile URL)
- **Example:**
```json
{
  "@type": "Dentist",
  "name": "K Family Dental",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chatswood",
    "addressRegion": "NSW",
    "postalCode": "2067",
    "addressCountry": "AU"
  },
  "telephone": "+61294152868"
}
```
- **Impact:** Google Search and Google Maps require or strongly recommend geographical coordinates and operating hours to trigger Local Pack features, map pins, and rich snippet cards.
- **Remediation:** Update the directory generation script to inject:
  - `geo`: suburb centroid latitude/longitude or geocoded clinic coordinates
  - `priceRange`: standard fee indicator (e.g., `"$$"`)
  - `url`: practice website or self-referential profile link

### Finding SCHEMA-02: Missing BreadcrumbList Schema on Sub-Category and Directory Pages
- **Severity:** Low (-2 pts)
- **Confidence:** High
- **Evidence:** Deep pages (e.g., `medical/dental/chatswood/index.html` and `medical/dental/index.html`) provide clear visual breadcrumbs in the user interface but do not define `BreadcrumbList` in their JSON-LD schema blocks.
- **Impact:** Search engines will display raw URL paths (e.g. `australia.md › medical › dental › chatswood`) rather than rich, localized navigational breadcrumb trails with clickable parent entities in SERPs.
- **Remediation:** Add a `BreadcrumbList` node to the JSON-LD `@graph` on all sub-pages:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://australia.md/"},
    {"@type": "ListItem", "position": 2, "name": "Medical", "item": "https://australia.md/medical/"},
    {"@type": "ListItem", "position": 3, "name": "Dental", "item": "https://australia.md/medical/dental/"},
    {"@type": "ListItem", "position": 4, "name": "Chatswood", "item": "https://australia.md/medical/dental/chatswood/"}
  ]
}
```
