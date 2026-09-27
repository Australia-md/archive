# Additional Findings (Outside Health Score) — Australia.md

Per the v1 deterministic scoring standard, the following domains are reported **unscored** to maintain deterministic integrity:

---

## 1. Backlink Profile & Domain Authority

- **Domain Registration Date:** March 23, 2026 (~0.51 years / 6 months active).
- **Domain History & Topical Shift:**
  - Evaluated via `claude-seo run domain_history.py australia.md --json`.
  - Zero expired domain abuse patterns detected. Continuous ownership since initial registration.
- **Authority Tier:** Tier 0 (Nascent Domain).
  - External backlink acquisition is in early growth stage.
  - No toxic backlink signals or spam flags observed.

---

## 2. Local SEO & Healthcare Directory Footprint

- **Programmatic Directory Scale:** 40+ NSW dental clinic directories currently published, providing hyper-local coverage across Sydney suburbs and regional NSW (e.g., Chatswood, Bondi, Albury, Bathurst, Bega).
- **Local Signals:**
  - Clinics verified against AHPRA registration standards.
  - Suburb-level context includes local transport nodes, public parking, and Child Dental Benefits Schedule (CDBS) bulk-billing information.
  - Directory pages function as genuine utility guides for NSW residents seeking dental care.

---

## 3. SEO Drift Baseline

- **Initial Drift Baseline ID #1:** Captured and saved on `2026-09-27T08:08:12Z` via `claude-seo run drift_baseline.py https://australia.md/`.
- **Stored Baseline State:**
  - Title: `Australia.md | Sovereign Archive`
  - Canonical: `https://australia.md/`
  - H1: `The Sovereign Archive of Australia`
  - H2 Count: 2
  - H3 Count: 12
  - Schema Count: 3
  - OG Tag Count: 8
  - HTTP Status: 200 OK
- **Future Use:** Any subsequent releases or code modifications can be compared directly against this baseline using `claude-seo run drift_compare.py https://australia.md/` to catch regressions.
