# HTML_template.md — Dental Listing Page Template Reference

> **Purpose:** This file is the authoritative reference for generating `medical/dental/{suburb}/index.html` pages. The scheduled job reads THIS file instead of re-parsing an existing HTML page. All structure, class names, rules, and patterns are defined here. Follow exactly — do not deviate from class names, nesting, or element types.

> **Post-processing (since 2026-10-28) — mandatory every run:** after writing or regenerating any suburb page, run `npm run seo:build` from the repo root, then `npm run seo:check` (must exit 0). The post-processor (`scripts/seo-postprocess.mjs`) owns the head alternate link, breadcrumb `data-nosnippet`, the "Raw .md" nav badge, the hero label, the answer-first paragraph, the JSON-LD `ItemList` / `@id` / `distribution` fields and the nearby-suburbs block; the generators own `sitemap.xml`, `llms.txt` and `llms-full.txt`. Never hand-edit those parts or files. See §14.
>
> **Titles and meta descriptions are frozen** at the §2 formulas until the Search Console baseline review on or after **2026-11-25**. Do not change the title or description wording before then.

> **OKF v0.2 (since 2026-10-28; v0.1 since 2026-06-20):** Source Markdown files under `docs/medical/dental/` begin with an **Open Knowledge Format YAML frontmatter block** (delimited by `---`). The scheduled job MUST (1) parse page metadata from that frontmatter, and (2) **strip the frontmatter block before rendering the Markdown body** into HTML — the `---`/`---` block must never appear in the generated page. See §1b. Bundle root is `docs/`; the format is governed by `.specify/memory/constitution.md` → "Knowledge Format (OKF)".

---

## 1. File Location & Path Depths

| Source MD path | Output HTML path | CSS/JS depth prefix |
|---|---|---|
| `docs/medical/dental/macquarie-park-nsw.md` | `medical/dental/macquarie-park/index.html` | `../../../` |
| `docs/medical/dental/chatswood-nsw.md` | `medical/dental/chatswood/index.html` | `../../../` |

**Rule:** Strip the `-{state}` suffix from the filename. Use the base name as a new directory. Always write `index.html` inside it. CSS/JS refs are always 3 levels deep: `../../../style.css`, `../../../main.js`, `../listing.css`, `../listing.js`.

---

## 1b. Source Markdown Frontmatter (OKF v0.2)

Every source file (e.g. `docs/medical/dental/aberdare-nsw.md`) starts with an OKF YAML frontmatter block. OKF v0.2 (upstream `GoogleCloudPlatform/open-knowledge-format` `SPEC.md` §5) adds provenance (`sources`), trust (`generated`, `verified`) and lifecycle (`stale_after`) fields; the v0.1 keys `timestamp` and `last_verified` are kept during the transition. Example (`docs/medical/dental/aberdare-nsw.md`, sources list shortened):

```yaml
---
type: "Dental Clinic Directory"
title: "Aberdare, NSW — Dental Clinics"
description: "Aberdare (postcode 2325) is a mixed residential suburb in the Cessnock City Council local government area in the Lower Hunter region of New South Wales."
resource: "https://www.dentalboard.gov.au"
tags: [dental, nsw, aberdare]
timestamp: 2026-04-02T00:00:00Z
suburb: "Aberdare"
postcode: "2325"
state: nsw
lga: "Cessnock City Council"
last_verified: "2026-04-02"
generated: { by: openclaw/dental-cron, at: 2026-04-02T00:00:00Z }
verified: { by: openclaw/dental-cron, at: 2026-04-02T00:00:00Z }
stale_after: 2026-09-29T00:00:00Z
sources:
  - id: healthdirect-australia
    resource: "https://www.healthdirect.gov.au"
    title: "Healthdirect Australia"
  # … one entry per URL in the body's "Data Sources" table
---
```

| Field | Meaning (OKF v0.2) |
|---|---|
| `generated` | `{ by, at }` — who wrote the current content and when (`at` supersedes `timestamp`). Dental cron output uses `by: openclaw/dental-cron`. |
| `verified` | `{ by, at }` or a list of them — each confirmation against public sources. Consumers MUST treat a bare mapping as a one-element list; "how recently" is the **latest** `at`. `openclaw/dental-cron` is a machine actor (machine-confirmed tier); only a person may be written as `human:<id>`. |
| `stale_after` | Absolute instant (latest `verified.at` + 180 days) after which the listing is due for re-verification. |
| `sources` | One `{ id, resource, title }` per URL in the body's **Data Sources** table. The body table stays. |

Every OKF timestamp (`generated.at`, `verified[].at`, `stale_after`, `timestamp`) is an ISO 8601 datetime with an explicit offset, e.g. `2026-04-02T00:00:00Z`. `last_verified` stays a plain `YYYY-MM-DD` date.

**Generator rules:**

1. **Parse, then strip.** Read the frontmatter for metadata, then remove the entire `---` … `---` block (and the blank line after it) before converting the remaining Markdown body to HTML. The frontmatter must not leak into the page text.
2. **Field usage** — prefer frontmatter over re-deriving from prose:

   | Frontmatter field | Used for |
   |---|---|
   | `title` | `<title>` / `og:title` (already in the dental format) |
   | `suburb`, `postcode`, `state` | `{Suburb}`, `{Postcode}`, `{STATE}` fill-ins, breadcrumbs, schema |
   | `lga` | `{LGA}` in the sidebar map region label (§8) |
   | latest `verified[].at`, else `last_verified`, else `timestamp` (date part) | `{Last Verified date}` → `<time datetime="YYYY-MM-DD">` and `dateModified` in JSON-LD |
   | `generated`, `stale_after`, `sources` | Metadata only — not rendered. The page's Data Sources list still comes from the body table |
   | `resource` | Authoritative registration source link |
   | `description` | Fallback only — the `{meta-description}` rule below still governs the meta tags |

3. **Fact-check unchanged.** Frontmatter is metadata only. Clinic names, addresses, phones, practitioners, hours, and services are still taken **exclusively** from the Markdown body (§11). Never synthesise page data from frontmatter alone.
4. **Missing fields.** Frontmatter fields other than `type` are optional. If `suburb`/`postcode`/`lga` are absent, fall back to parsing the body's `**Suburb:**` line as before; never invent values.

---

## 2. `<head>` Block

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="{meta-description}" />
  <title>Dental Clinics — {Suburb} {STATE} {Postcode} | Australia.md</title>
  <link rel="canonical" href="https://australia.md/medical/dental/{suburb-slug}/" />
  <link rel="alternate" type="text/markdown" href="https://australia.md/docs/medical/dental/{suburb-slug}-{state}.md" title="OKF source (Markdown)" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Australia.md" />
  <meta property="og:title" content="Dental Clinics — {Suburb} {STATE} {Postcode} | Australia.md" />
  <meta property="og:description" content="{meta-description}" />
  <meta property="og:url" content="https://australia.md/medical/dental/{suburb-slug}/" />
  <meta property="og:image" content="https://australia.md/og-default.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dental Clinics — {Suburb} {STATE} {Postcode} | Australia.md" />
  <meta name="twitter:description" content="{meta-description}" />
  <meta name="twitter:image" content="https://australia.md/og-default.png" />

  <!-- Schema.org JSON-LD: see Section 3 -->
  <script type="application/ld+json">
  { ... see Section 3 ... }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" integrity="sha384-1PT8sISk9zQ7SDVmmf11t7IlDJN8vvTQWzVqT4Qd4F9XLIIfHQsj8UH8VCMF5gT" crossorigin="anonymous" />
  <link rel="stylesheet" href="../../../style.css" />
  <link rel="stylesheet" href="../listing.css" />
  <!-- Progressive enhancement: flag that JS is available so the scroll-reveal
       only hides content it can guarantee to reveal. No-JS / headless renders
       ship fully visible. Required — listing.css gates the reveal behind .js. -->
  <script>document.documentElement.classList.add('js');</script>
</head>
```

**Fill-in variables:**
- `{N}` — number of clinics found in the MD source
- `{Suburb}` — proper-cased suburb name (e.g. `Macquarie Park`)
- `{STATE}` — state abbreviation uppercase (e.g. `NSW`)
- `{Postcode}` — postcode number (e.g. `2113`)
- `{suburb-slug}` — lowercase kebab-case (e.g. `macquarie-park`)
- `{Last Verified date}` — date of the latest frontmatter `verified[].at`, else `last_verified`, else `timestamp` (date portion); see §1b
- `{meta-description}` — see rule below

**Meta description rule (enforced):**
- Maximum **155 characters**. Google truncates at ~160; 155 gives a safety margin.
- Format: `"{N} dental clinic(s) in {Suburb} {STATE} {Postcode}. {Clinic name(s)}. {1 key service if space allows}."`
- Front-load suburb + postcode within the first 60 chars so truncation never cuts them.
- The same string is used for `name="description"`, `og:description`, and `twitter:description` — keep them in sync.
- Example (128 chars): `"3 dental clinics in Alstonville NSW 2477. Daley Street Dental, Alstonville Family Dental, and Maven Dental Plateau. AHPRA-registered."`

---

## 3. Schema.org JSON-LD

Four object types inside `@graph` are written by the generator: `MedicalWebPage`, `Dataset`, `FAQPage`, and one `Dentist` per clinic. The post-processor then adds an `ItemList` (`@id` `…/#clinics`), a `@id` on every `Dentist` (`…/#dentist-{N}`, in card order), `MedicalWebPage.mainEntity` and `Dataset.distribution` (the source `.md`). Do not write those four additions by hand.

### 3a. MedicalWebPage
```json
{
  "@type": "MedicalWebPage",
  "name": "Dental Clinics — {Suburb} {STATE} {Postcode} | Australia.md",
  "description": "Verified AHPRA-registered dental clinics in {Suburb} {STATE} {Postcode} with registered practitioners.",
  "url": "https://australia.md/medical/dental/{suburb-slug}/",
  "dateModified": "{YYYY-MM-DD}",
  "inLanguage": "en-AU",
  "about": { "@type": "MedicalSpecialty", "name": "Dentistry" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Australia.md", "item": "https://australia.md/" },
      { "@type": "ListItem", "position": 2, "name": "Medical Directory", "item": "https://australia.md/medical/" },
      { "@type": "ListItem", "position": 3, "name": "Dental", "item": "https://australia.md/medical/dental/" },
      { "@type": "ListItem", "position": 4, "name": "{Suburb} {STATE} {Postcode}", "item": "https://australia.md/medical/dental/{suburb-slug}/" }
    ]
  }
}
```

### 3b. Dataset
```json
{
  "@type": "Dataset",
  "name": "{Suburb} {STATE} {Postcode} — Dental Clinic Directory",
  "description": "Verified dental clinics and registered practitioners in {Suburb}, {STATE} {Postcode}, sourced from public directories and AHPRA-regulated practice profiles.",
  "url": "https://australia.md/medical/dental/{suburb-slug}/",
  "dateModified": "{YYYY-MM-DD}",
  "creator": { "@type": "Organization", "name": "Australia.md" },
  "license": "https://australia.md/LICENSE"
}
```

### 3c. FAQPage
Generate 2–4 FAQ entries based on data in the source MD. Typical questions for dental pages:
- "How do I verify a dentist's AHPRA registration in {Suburb}?"
- "Which dental clinics in {Suburb} are open on weekends?" (only if hours data present)
- "Which {Suburb} dental clinics offer emergency dental care?" (only if data present)
- "Is there a dental clinic near {landmark}?" (only if data present)

If hours/emergency data is absent from source, omit the question — never fabricate answers.

### 3d. Dentist entities (one per clinic — NEW)

For **each clinic** in the source MD, generate one `Dentist` object inside `@graph`. This enables Google rich results (address, phone, hours in search snippets).

```json
{
  "@type": "Dentist",
  "name": "{Clinic Name}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{Street address from source — omit key if absent}",
    "addressLocality": "{Suburb}",
    "addressRegion": "{STATE}",
    "postalCode": "{Postcode}",
    "addressCountry": "AU"
  },
  "telephone": "{phone — omit key if absent}",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday"],
      "opens": "08:30",
      "closes": "16:00"
    }
  ]
}
```

**Rules for Dentist entities:**
- Only include `streetAddress`, `telephone`, and `openingHoursSpecification` if present in the source MD. Never invent them.
- Omit `openingHoursSpecification` entirely if hours are not in the source.
- JSON string values must not contain unescaped double-quote characters — escape any `"` inside string values as `\"`.
- Repeat one block per clinic. If a page has 5 clinics, there are 5 `Dentist` objects in `@graph`.

---

## 4. `<body>` Structure

```
<body class="listing-page">
  <header class="nav-bar">            ← Navigation (Section 5)
  <div class="listing-header-wrap">  ← Page header (Section 6)
  <div class="listing-body">         ← Two-column layout
    <main class="clinic-list">       ← Clinic cards (Section 7), then the nearby-suburbs block (§14, post-processor)
    <aside class="listing-sidebar">  ← SVG map + sidebar (Section 8)
  </div>
  <section class="faq-section">      ← FAQ (Section 9)
  <footer class="footer">            ← Footer (Section 10)
  <script src="../../../main.js">
  <script src="../listing.js">
</body>
```

---

## 5. Navigation Bar

```html
<header class="nav-bar" id="main-header">
  <nav class="nav-inner" aria-label="Main navigation">
    <a href="../../../index.html" class="nav-logo" aria-label="Australia.md Home">
      <span class="logo-mark">AU</span>
      <span class="logo-text">Australia<span class="logo-dot">.md</span></span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="../../../index.html#categories" class="nav-link">Directory</a></li>
      <li><a href="../../../submit/" class="nav-link">Contribute</a></li>
    </ul>
    <div class="nav-actions">
      <span class="nav-badge">v2.4.1</span>
      <a href="../../../docs/medical/dental/{suburb-slug}-{state}.md" class="nav-raw-md" rel="alternate" type="text/markdown" aria-label="View the raw Markdown source of this page (for AI agents and LLMs)">Raw .md</a>
      <a href="https://github.com/Australia-md/archive" class="btn-github" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
        <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <button class="nav-mobile-toggle" id="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="nav-links">
        <span class="burger-line"></span><span class="burger-line"></span><span class="burger-line"></span>
      </button>
    </div>
  </nav>
</header>
```

---

## 6. Page Header (`listing-header-wrap`)

```html
<div class="listing-header-wrap">
  <div class="listing-header-content">

    <!-- Breadcrumb. Google honours data-nosnippet only on span/div/section, so the post-processor wraps
         this <nav> in <div class="nosnippet-wrap" data-nosnippet> … </div>. Write the <nav> plainly. -->
    <nav class="listing-breadcrumb" aria-label="Breadcrumb">
      <a href="../../../index.html" class="lbc-item">Australia.md</a>
      <span class="lbc-sep" aria-hidden="true">/</span>
      <a href="../../" class="lbc-item">Medical Directory</a>
      <span class="lbc-sep" aria-hidden="true">/</span>
      <a href="../" class="lbc-item">Dental</a>
      <span class="lbc-sep" aria-hidden="true">/</span>
      <span class="lbc-item lbc-current">{Suburb} {STATE} {Postcode}</span>
    </nav>

    <!-- Symbol + eyebrow -->
    <div class="medical-symbol-header">
      <svg class="medical-symbol-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Dental symbol">
        <path d="M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5C8.5 12 8 14 8 16c0 2 1 4 2 4 .5 0 1-.5 1.5-2 .5-1.5.5-2 .5-2s0 .5.5 2c.5 1.5 1 2 1.5 2 1 0 2-2 2-4 0-2-.5-4-.5-5.5.5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z"/>
      </svg>
      <div class="listing-eyebrow">Dental · {Suburb} · {STATE} {Postcode}</div>
      <img src="../../../assets/images/flag-australia.png" class="hero-flag" alt="Australian flag" width="30" height="15" style="margin-left:auto" loading="lazy" />
    </div>

    <h1 class="listing-title">Dental Clinics<br/>{Suburb} {STATE}</h1>

    <div class="listing-verified-row" role="group" aria-label="Verification status">
      <svg class="verified-shield" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 1l2.39 4.84L18 6.9l-4 3.9.94 5.46L10 13.77l-4.94 2.6L6 10.8 2 6.9l5.61-.06L10 1z" clip-rule="evenodd"/>
      </svg>
      <span class="verified-label">{N} Clinic(s) · {Suburb} · Postcode {Postcode} · Checked {D Mon YYYY}</span>
    </div>

    <!-- Answer-first paragraph — written and kept exact by the post-processor (data-gated clauses). -->
    <!-- H counts only Hours lines with a time that the source does not call conflicting/varying; S counts only
         Saturday segments with a time that are not closed or appointment-only. -->
    <p class="listing-answer"><strong>{N} dental clinic(s)</strong> are listed in <strong>{Suburb} {STATE} {Postcode}</strong>{, H with confirmed opening hours}{, S open on Saturdays}. Clinic details were checked against public sources on <time datetime="{YYYY-MM-DD}">{D Month YYYY}</time>.</p>
    <p class="listing-intro">
      <strong>{Suburb}</strong> (postcode {Postcode}) is {suburb description from MD}. The {N} dental practice(s) below hold required registration with the <strong>Dental Board of Australia</strong> under AHPRA. Last verified: <time datetime="{YYYY-MM-DD}">{DD Month YYYY}</time>.
    </p>

    <!-- Filter row (static UI — no dynamic data needed) -->
    <div class="listing-filter-row" role="toolbar" aria-label="Sort and filter options">
      <span class="filter-label">Sort by</span>
      <div class="sort-tabs" role="radiogroup" aria-label="Sort order">
        <button class="sort-tab active" data-sort="nearest" role="radio" aria-checked="true">Nearest</button>
        <button class="sort-tab" data-sort="alpha" role="radio" aria-checked="false">Alphabetical</button>
        <button class="sort-tab" data-sort="recent" role="radio" aria-checked="false">Recently Updated</button>
      </div>
      <button class="btn-refine" id="btn-refine" aria-expanded="false">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h14M6 10h8M9 15h2"/></svg>
        Refine Filters
      </button>
    </div>
  </div>
</div>
```

---

## 7. Clinic Card (`<article class="clinic-card">`)

Repeat one `<article>` per clinic. Number sequentially from 1.

```html
<article class="clinic-card fade-in-up" id="clinic-{N}" data-clinic="{N}">
  <div class="clinic-card-header">
    <div class="clinic-name-row">
      <h2 class="clinic-name">{Clinic Name}</h2>
      <!-- AHPRA badge — see Section 7a -->
    </div>
    <!-- Only include if "Also known as" data exists in source -->
    <p class="clinic-also-known">Also known as: {AKA name}</p>
    <div class="clinic-meta-row">
      <!-- Address — always include if present -->
      <span class="clinic-meta-item">
        <svg class="meta-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 17.5S3 11.43 3 7a7 7 0 1114 0c0 4.43-7 10.5-7 10.5z"/><circle cx="10" cy="7" r="2"/></svg>
        {Full address}
      </span>
      <!-- Phone — include if present -->
      <span class="clinic-meta-item">
        <svg class="meta-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5l-1.5-1.5a1 1 0 00-1.4 0l-.6.6a7 7 0 01-3.6-3.6l.6-.6a1 1 0 000-1.4L6.5 5.5A1 1 0 005 5.5C3.7 6.8 3.3 8.5 4.2 10.4c.8 1.7 2.4 3.3 4.1 4.1 1.9.9 3.6.5 4.9-.8a1 1 0 00-.7-2.2z"/></svg>
        <a href="tel:{phone-digits-only}">{Phone display}</a>
      </span>
      <!-- Hours — include only if present in source -->
      <span class="clinic-meta-item">
        <svg class="meta-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10" cy="10" r="8"/><path stroke-linecap="round" stroke-linejoin="round" d="M10 6v4l2.5 2.5"/></svg>
        {Hours}
      </span>
    </div>
  </div>

  <!-- Billing note — include only if billing/bulk bill data present in source -->
  <!-- Use one of the two variants below; omit entire block if billing data absent -->
  <div class="clinic-billing-note" role="group" aria-label="Billing information">
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" class="verify-icon" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 4v4m0 2v.5"/></svg>
    Fees apply · No bulk billing
    <!-- OR for mixed billing: Mixed billing · Bulk billing available with conditions · <a href="https://www.servicesaustralia.gov.au/child-dental-benefits-schedule" target="_blank" rel="noopener noreferrer">CDBS eligible</a> -->
  </div>

  <!-- Practitioners section -->
  <section class="clinic-practitioners" aria-label="Registered practitioners at {Clinic Name}">
    <div class="practitioners-label">Registered Practitioners</div>
    <ul class="practitioners-list" role="list">
      <!-- Repeat per practitioner confirmed in source -->
      <li class="practitioner-item">
        <span class="practitioner-name">{Dr Name}</span>
        <span class="practitioner-detail">{Qualification} · {Notes}</span>
      </li>
    </ul>
    <!-- If no practitioners confirmed from source: -->
    <!-- <p class="practitioners-unconfirmed">Practitioner names not confirmed from public sources at time of verification. Verify via <a href="https://www.ahpra.gov.au/Registration/Registers-of-Practitioners.aspx" target="_blank" rel="noopener noreferrer">AHPRA Practitioner Register</a>.</p> -->
    <p class="ahpra-verify-note">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" class="verify-icon" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 4v4m0 2v.5"/></svg>
      Verify registration: <a href="https://www.dentalboard.gov.au/" target="_blank" rel="noopener noreferrer">www.dentalboard.gov.au</a>
    </p>
  </section>

  <!-- Services — include only if present in source -->
  <div class="clinic-services">
    <div class="services-label">Services</div>
    <div class="services-chips">
      <span class="service-chip">{Service 1}</span>
      <span class="service-chip">{Service 2}</span>
      <!-- etc -->
    </div>
  </div>

  <div class="clinic-card-footer">
    <button class="btn-view-profile" disabled aria-label="Visit Website (Coming Soon)">Visit Website</button>
    <button class="btn-map-focus" data-clinic-id="{N}" aria-label="Show {Clinic Name} on map">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M7 3L3 5v12l4-2 6 2 4-2V3l-4 2-6-2z"/><path stroke-linecap="round" d="M9 3v12M13 5v12"/></svg>
    </button>
  </div>
</article>
```

### 7. Clinic Website Links — NOT INCLUDED

**Policy:** Do NOT generate external links to individual clinic websites in the clinic card. The "Visit Website" button (line 280) is intentionally **disabled** and shows "Coming Soon" to indicate future functionality. Links should not be added to:

- Clinic card buttons
- Clinic names as links
- Any external clinic web URLs
- Third-party clinic directory references (e.g., Healthdirect, clinic aggregator sites)

**Rationale:** Australia.md is the authoritative listing. Clinic websites may be outdated, unmaintained, or redirect to unrelated domains. Phone number (`<a href="tel:...">`) and AHPRA verification links are the only clickable elements permitted on clinic cards.

### 7a. AHPRA Badge Rules

| Condition | HTML |
|---|---|
| AHPRA Verified: Yes in source | `<div class="ahpra-badge" role="img" aria-label="AHPRA Registered"><svg ...>...</svg> AHPRA Registered</div>` |
| AHPRA Verified: No OR not stated | `<div class="ahpra-badge ahpra-unverified" role="img" style="opacity:0.6" aria-label="AHPRA Unverified"><svg ...>...</svg> AHPRA Unverified</div>` |

AHPRA badge SVG icon (use this exact path):
```html
<svg class="ahpra-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 .5L9.91 4.38 14 5.35l-3 2.92.71 4.23L8 10.34l-3.71 2.16.71-4.23L2 5.35l4.09-.97z"/></svg>
```

---

## 8. Sidebar (`<aside class="listing-sidebar">`)

```html
<aside class="listing-sidebar" aria-label="Map and clinic directory">
  <div class="sidebar-map-wrap">

    <!-- SVG map: simplified suburb street map -->
    <!-- Draw major roads as lines, clinic pins as numbered circles -->
    <!-- Use suburb name and postcode in the region label -->
    <!-- Color scheme: background #0d1f12, roads #142014, labels #2a4a30 -->
    <!-- Pin fill: #00843d (verified) or #888 (unverified) -->
    <!-- Text fill: #fff on dark pins, #0a160f on gold (#fecc00) pins -->
    <!-- Metro/landmark marker: circle fill #071510, stroke #fecc00 -->
    <!-- Compass: gold arrow pointing north -->
    <div class="sidebar-map">
      <svg viewBox="0 0 400 340" class="suburb-map-svg" role="img" aria-label="Street map of {Suburb} showing clinic locations" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="340" fill="#0d1f12"/>
        <!-- Roads: draw lines for major streets -->
        <!-- Clinic pins: numbered circles at approximate positions -->
        <!-- Region label at bottom -->
        <text x="30" y="310" fill="#2a3e2f" font-size="9" font-family="Inter, sans-serif" font-weight="500" letter-spacing="0.08em">{SUBURB} {POSTCODE} · {LGA} · {STATE}</text>
      </svg>
    </div>

    <!-- Mini clinic list below map -->
    <div class="map-clinic-list" id="map-clinic-list" role="group" aria-label="Quick clinic reference for {Suburb}">
      <div class="map-clinic-list-title">Clinics in {Suburb}</div>
      <ul>
        <!-- Repeat per clinic -->
        <li class="map-clinic-row" data-clinic="{N}">
          <span class="map-pin-badge">{N}</span>
          <span class="map-clinic-info">
            <span class="map-clinic-name">{Clinic Name}</span>
            <span class="map-clinic-suburb">{Short address / landmark}</span>
          </span>
        </li>
      </ul>
    </div>

    <!-- Data note -->
    <div class="map-data-note">
      <strong>Data last verified:</strong> <time datetime="{YYYY-MM-DD}">{DD Month YYYY}</time>. Practitioner rosters change; always confirm directly with the clinic or via AHPRA.
    </div>
  </div>
</aside>
```

---

## 9. FAQ Section

```html
<section class="faq-section" aria-labelledby="faq-heading">
  <div class="faq-inner">
    <h2 id="faq-heading" class="faq-title">Frequently Asked Questions</h2>

    <!-- Repeat per FAQ entry — only include if answer data exists in source -->
    <details class="faq-item">
      <summary class="faq-question">{Question}</summary>
      <div class="faq-answer">
        <p>{Answer — fact-checked against source only. Use <strong> for key entities.}</p>
      </div>
    </details>

  </div>
</section>
```

Minimum: always include "How do I verify a dentist's AHPRA registration in {Suburb}?" — this answer never depends on source data (it is a stable AHPRA process fact).

---

## 10. Footer

The footer block is mostly static — only the **source Markdown link** (see 10a) varies per page. Every other element is copied exactly as shown.

```html
<footer class="footer" id="main-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="../../../index.html" class="nav-logo footer-logo"><span class="logo-mark">AU</span><span class="logo-text">Australia<span class="logo-dot">.md</span></span></a>
      <p class="footer-tagline">The official digital sovereign archive. Curating the continent's data for future generations with integrity and precision.</p>
    </div>
    <div class="footer-cols">
      <nav class="footer-col" aria-label="Archive links">
        <div class="footer-col-title">Archive</div>
        <ul class="footer-list">
          <li><a href="../../" class="footer-link">Medical Directory</a></li>
          <li><a href="../" class="footer-link">Dental — NSW</a></li>
          <li><a href="#" class="footer-link">IT &amp; AI</a></li>
          <li><a href="#" class="footer-link">Heritage</a></li>
        </ul>
      </nav>
      <nav class="footer-col" aria-label="Connect links">
        <div class="footer-col-title">Connect</div>
        <ul class="footer-list">
          <li><a href="#" class="footer-link">Tourism</a></li>
          <li><a href="#" class="footer-link">Economy</a></li>
          <li><a href="https://github.com/Australia-md/archive" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
      <nav class="footer-col" aria-label="Legal links">
        <div class="footer-col-title">Legal</div>
        <ul class="footer-list">
          <li><a href="#" class="footer-link">Privacy</a></li>
          <li><a href="#" class="footer-link">Terms</a></li>
          <li><a href="#" class="footer-link">Licences</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">&copy; <span id="current-year"></span> Australia.md — Open-Source Sovereign Archive. AGPL-3.0 / Commercial.</span>
    <span class="footer-source"><a href="../../../docs/medical/dental/{suburb}-{state}.md" class="footer-source-link" rel="alternate" type="text/markdown" aria-label="View source Markdown for {Suburb} {STATE} dental page">View source (Markdown)</a></span>
    <span class="footer-built-by">Built by <a href="https://www.rxai.com.au" class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>
    <div class="footer-accents" aria-hidden="true"><span class="footer-accent-green"></span><span class="footer-accent-gold"></span></div>
  </div>
</footer>

<script src="../../../main.js"></script>
<script src="../listing.js"></script>
```

### 10a. Source Markdown Link (per-page)

- **Purpose:** give readers and agents a way to retrieve the source `.md` file that generated the page.
- **Placement:** inside `.footer-bottom`, between `.footer-copy` and `.footer-built-by`.
- **Target:** always point to the real source path on disk, using the state suffix — `../../../docs/medical/dental/{suburb}-{state}.md`.
- **Do not** use a simplified path (e.g. `chatswood.md` colocated with `index.html`) — the `.md` file does not live in that directory.
- **Do not** invent a `{state}` — read it from the source MD filename that triggered the generation (e.g. `chatswood-nsw.md` → `{state}` is `nsw`).
- **Link text:** exactly `View source (Markdown)`.
- **Attributes:** include `rel="alternate"` and `type="text/markdown"` so the link is semantically tagged as an alternate representation of the page.
- **aria-label** must include the suburb and state so it is distinguishable when listed out of context by assistive tech.

---

## 11. Strict Content Rules

1. **Fact-check only** — every clinic name, address, phone, practitioner, service, and hour must appear explicitly in the source MD. If absent, omit it entirely.
2. **No fabrication** — do not invent postcodes, council names, landmarks, or any suburb description not in the source.
3. **AHPRA badge** — default to `AHPRA Unverified` (greyed, opacity 0.6) unless the source explicitly states `AHPRA Verified: Yes`.
4. **Meta description ≤ 155 chars** — the `{meta-description}` variable must not exceed 155 characters. Verify the length before writing it. The same value is used for `name="description"`, `og:description`, and `twitter:description`.
5. **og:image always present** — every page must include `og:image`, `og:image:width`, `og:image:height`, and `twitter:image` pointing to `https://australia.md/og-default.png`. Never omit these.
6. **JSON-LD safety** — double-quote characters inside JSON string values must be escaped as `\"`. This is especially relevant for FAQ answers and clinic descriptions that may contain quoted words.
4. **Practitioners absent** — if a clinic lists no practitioners in the source, use `<p class="practitioners-unconfirmed">` with a link to `https://www.ahpra.gov.au/Registration/Registers-of-Practitioners.aspx`.
5. **Hours absent** — omit the hours `<span class="clinic-meta-item">` entirely. Never show "hours not confirmed".
6. **SVG map** — place numbered pins at approximate relative positions based on the suburb's street grid. If address data is too sparse to position meaningfully, draw a simple placeholder map with pins clustered near the centre.
7. **Semantic HTML5** — use `<article>`, `<section>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>`. Never use `<div>` where a semantic element exists.
8. **WCAG 2.1 AA** — all images have `alt`, all interactive elements are keyboard-accessible, contrast ≥ 4.5:1.
9. **Source Markdown link** — every generated `index.html` must include the `.footer-source` link described in Section 10a, pointing to the real `../../../docs/medical/dental/{suburb}-{state}.md` file. Never omit it, and never point it at a path that does not exist on disk.

---

## 12. Hardening Rules (Non-Negotiable)

These rules were established from a full accessibility/security/design-token audit. All generated pages **must** follow them.

### 12a. Navigation — No ARIA Role Misuse

- **Do NOT** use `role="menubar"`, `role="menuitem"`, or `role="none"` on nav links. The `menubar` pattern requires complex keyboard handling (arrow keys, Home/End) that is not implemented. A plain `<nav>` with `<ul>` is correct and sufficient.
- **Correct:**
  ```html
  <ul class="nav-links" id="nav-links">
    <li><a href="..." class="nav-link">Directory</a></li>
    <li><a href="..." class="nav-link">Contribute</a></li>
  </ul>
  ```
- **Wrong:**
  ```html
  <ul class="nav-links" role="menubar">
    <li role="none"><a class="nav-link" role="menuitem">...</a></li>
  </ul>
  ```

### 12b. Navigation — No Dead Links

- **Do NOT** include nav links that point to `#`. Only include links to pages that exist.
- Currently valid nav links: `Directory` (→ `index.html#categories`), `Contribute` (→ `submit/`).
- Do not include `API` or `About` links until those pages exist.

### 12c. GitHub Links — Must Point to Repository

- All GitHub links (nav button and footer) must use the full repository URL: `https://github.com/Australia-md/archive`
- **Never** link to bare `https://github.com`.

### 12d. CSS — No Hard-Coded Hex Colors

All colors must use CSS custom properties (design tokens) defined in `style.css` `:root`. Never use raw hex values like `#0F251A` or `#fecc00` in component styles.

| Instead of | Use |
|---|---|
| `#0F251A` | `var(--clr-surface-container-low)` |
| `#fecc00` | `var(--clr-secondary-container)` |
| `#3d2f00` | `var(--clr-on-secondary-container)` |
| `#7a4500` | `var(--clr-secondary-fixed-dim)` |
| `#0a160f` | `var(--clr-surface)` |
| `#202d25` | `var(--clr-surface-container-high)` |
| `#889487` | `var(--clr-outline)` |

The only place raw hex values may appear is inside `:root { }` token definitions and inline SVG map elements (Section 8).

### 12e. Accessibility — Focus Indicators

- Focus indicators must use `outline`, not `box-shadow`. `box-shadow` is invisible in Windows High Contrast Mode.
- **Correct:** `outline: 2px solid var(--clr-primary); outline-offset: -1px;`
- **Wrong:** `outline: none; box-shadow: 0 0 0 2px var(--clr-primary);`

### 12f. Accessibility — No Redundant Tab Stops

- Do NOT add `tabindex="0"` to elements that already contain focusable children (e.g. a `<div>` wrapping an `<a>`). This creates duplicate tab stops for keyboard users.
- Cards with an inner `<a class="card-link">` or `<a class="spec-card-link">` should not have `tabindex` on the outer element.

### 12g. Accessibility — Reduced Motion

- `style.css` includes `@media (prefers-reduced-motion: reduce)` which disables all animations and transitions globally. No per-page action is required — the rule is inherited via `../../../style.css`.

### 12h. Accessibility — WCAG Contrast

- All text must meet WCAG 2.1 AA contrast minimums: **4.5:1** for normal text, **3:1** for large text and UI components.
- Disabled buttons must still have readable text. Use `var(--clr-surface-container-high)` background with `var(--clr-on-surface-variant)` text — never use low-contrast pairs like `#a48a27` on `#3d2f00`.
- Footer text must use `var(--clr-outline)` or higher — never use background-coloured tokens for text.

### 12i. Security — No innerHTML

- Never use `innerHTML` to insert content that includes any dynamic data (user input, API responses, URL parameters).
- Use DOM APIs (`document.createElement`, `textContent`, `appendChild`) instead.
- This applies to JavaScript files only — static HTML in templates is fine.

### 12j. Disabled Buttons — Descriptive Labels

- All disabled buttons must include an `aria-label` explaining the disabled state.
- **Correct:** `<button disabled aria-label="Visit Website (Coming Soon)">Visit Website</button>`
- **Wrong:** `<button disabled>Visit Website</button>`

### 12k. Clinic Cards — All Must Have `btn-view-profile`

Every `<article class="clinic-card">` must contain a `<button class="btn-view-profile" disabled aria-label="Visit Website (Coming Soon)">Visit Website</button>` in its `.clinic-card-footer`. Never replace this button with a live `<a href="...">` link to an external clinic website — see Section 7 policy.

### 12l. Accessibility — Inline Text Links Must Have Underlines

`style.css` globally resets `text-decoration: none`. For links inside body/prose content, underlines must be restored so links are distinguishable from surrounding text (WCAG 1.4.1).

Covered by the rule in `style.css`:
```css
.faq-answer a,
.listing-intro a,
.ahpra-verify-note a,
.practitioners-unconfirmed a,
.clinic-billing-note a,
.map-data-note a,
p a:not([class]) {
  text-decoration: underline;
}
```

No per-page action required — rule is inherited via `../../../style.css`.

### 12m. Images — Lazy Loading

All images that are not in the initial viewport must include `loading="lazy"`. This includes:
- `.hero-flag` (only if below the fold — omit if in LCP)
- The flag image in `.medical-symbol-header`: always add `loading="lazy"` (it is below the nav)

**Correct:** `<img src="../../../assets/images/flag-australia.png" class="hero-flag" alt="Australian flag" width="30" height="15" loading="lazy" />`

### 12n. JavaScript — No Inline `style` Manipulation for Animations

Do not set `element.style.transitionDelay` or inject `<style>` nodes from JavaScript. Use CSS rules instead:
- Staggered card delays → CSS `:nth-child()` selectors in `style.css`
- `@keyframes` definitions → static `style.css` (never create a `<style>` element in JS)

---

## 13. Hub Directory Index — Adding the Suburb Entry

After generating a suburb page, register it in the hub directory at
**`medical/dental/index.html`**. The hub is a **single-column, self-sorting,
self-counting suburb grid** — it is NOT the old two-column map layout. Make
exactly one change: append a single `<li>` to `<ul class="suburb-dir-list">`.

### The one entry to append

Insert this block anywhere inside `<ul class="suburb-dir-list">` (insertion order
does not matter — `listing.js` sorts the grid A–Z on load):

```html
<li>
  <a href="/medical/dental/{suburb-slug}/" class="suburb-dir-link" aria-label="View dental clinics in {Suburb} {STATE} {Postcode} — {N} clinic(s)">
    <span class="suburb-dir-info">
      <span class="suburb-dir-name">{Suburb}</span>
      <span class="suburb-dir-meta">{STATE} {Postcode} &nbsp;&middot;&nbsp; {N} clinic(s) &nbsp;&middot;&nbsp; {LGA}</span>
    </span>
    <span class="suburb-dir-chips">
      <span class="suburb-dir-chip">{Service 1}</span>
      <span class="suburb-dir-chip">{Service 2}</span>
      <span class="suburb-dir-chip">{Service 3}</span>
    </span>
    <svg class="suburb-dir-arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 5l5 5-5 5"/>
    </svg>
  </a>
</li>
```

- `{N} clinic(s)` — use `1 clinic` (singular) or `N clinics` (plural), and the
  same in the `aria-label`.
- Meta separators are `&nbsp;&middot;&nbsp;` (the `·` middot).
- Include **at most 3** `suburb-dir-chip`s — the most representative real
  services for the suburb.

### Hard rules for the hub (do NOT)

1. **Do NOT edit `<span class="suburb-dir-count">`.** The count is computed at
   runtime by `listing.js` from the number of `.suburb-dir-link` items, so it is
   self-healing. Leave the existing value exactly as-is — do not bump it.
2. **Do NOT add any map markup.** The hub has no map. Never add `.map-panel`,
   `.map-suburb-link`, `.map-pin`, `.map-clinic-list`, a sidebar, or map
   quick-links to `medical/dental/index.html`.
3. **Do NOT add clinic cards** (`.clinic-card`), `View Clinic Profile` buttons,
   or AHPRA badges to the hub. Those belong on the suburb page only.
4. **Do NOT touch** the page header, the sort tabs, the service-facet container
   (`<div id="suburb-facets">`), or any other chrome. Append the one `<li>` and
   nothing else.

### Service chips feed the facet filter

The `suburb-dir-chip` values are the data source for the hub's **"Filter by
service"** facet, which `listing.js` builds automatically from the chips present
across all suburbs. Spell services consistently (`General`, `Cosmetic`,
`Implants`, `Emergency`, `Orthodontics`, `Sedation`, `Family`, `Public`, …) —
a misspelling or a near-duplicate (`Paediatric` vs `Pediatric`) creates a
spurious extra facet button.

---

## 14. Post-processing and SEO files (mandatory every run)

Run from the repo root after the page(s) and the hub entry are written:

```bash
npm run seo:build    # add missing OKF v0.2 fields to docs/**, post-process every dental page, then regenerate sitemap.xml, llms.txt, llms-full.txt
npm run seo:check    # OKF v0.2 backfill --check + post-processor --check ("files needing changes: 0") + scripts/seo-validate.mjs; must exit 0
```

Search-engine submission is automatic after the owner merges to `main`: `.github/workflows/indexnow.yml` waits for the GitHub Pages deploy and submits new or changed live URLs to IndexNow (Bing), recording them in `updateBingIndex.md`. Generators never submit URLs themselves.

`seo:check` is the release gate: **never commit or push while it fails.** CI (`.github/workflows/seo-validate.yml`) runs the same checks on every pull request and on every push to `scheduling-branch`.

What each step owns — never edit these by hand:

| Step | Script | Owns |
|---|---|---|
| `okf:backfill` | `scripts/okf-v02-backfill.mjs` | the OKF v0.2 frontmatter keys `generated`, `verified`, `stale_after`, `sources` of every `docs/**` concept that lacks them, derived only from the file's own `timestamp`, `last_verified` and Data Sources table (§1b). A key that is already present is never rewritten |
| `seo:postprocess` | `scripts/seo-postprocess.mjs` | every internal `<a href>` rewritten to a root-relative path (`/medical/dental/{slug}/`, never `../{slug}/` or `{slug}/`), site-wide including `404.html`; head `rel="alternate" type="text/markdown"` link; the `<div class="nosnippet-wrap" data-nosnippet>` wrapper around every breadcrumb `<nav>` site-wide (Google ignores `data-nosnippet` on `<nav>`); "Raw .md" nav badge; `.verified-label` text; `.listing-answer` paragraph; JSON-LD `ItemList`, `Dentist.@id`, `mainEntity`, `distribution`; the block between `<!-- nearby-suburbs:start -->` and `<!-- nearby-suburbs:end -->` |
| `seo:sitemap` | `scripts/build-sitemap.mjs` | `sitemap.xml` — every `index.html` on disk, per-URL `<lastmod>` (dental pages = source verification date: latest `verified[].at`, else `last_verified`/`timestamp`; others = last commit date, or today if uncommitted); splits above 50,000 URLs |
| `seo:llms` | `scripts/build-llms.mjs` | `llms.txt` and `llms-full.txt` from `docs/**` frontmatter |

The nearby block lists up to 6 other suburb pages: first those in the same council area (from frontmatter `lga`, else the body `Council:` line), then pages within ±20 of the postcode. Adding a suburb changes its neighbours' blocks too, which is why the post-processor runs over **all** pages every time.

The post-processor also prints `WARN` lines: a page whose clinic-card count differs from its source (regenerate that page), a page with no source `.md`, or a suburb directory missing from the hub (add it per §13). Resolve every `WARN` before committing.

### Lessons (each became an automated check in `scripts/seo-validate.mjs`)

| Shipped defect (2026) | Rule now enforced |
|---|---|
| Nightly job's GitHub token expired; 18 pages sat unpublished for a week with no alarm | Job pushes with the owner's `gh`, then verifies the remote head equals the local head and notifies on any mismatch |
| Pages said "N with confirmed opening hours" where the source said schedules conflict; "open on Saturdays" for appointment-only Saturdays | Hours that the source calls conflicting/varying are never "confirmed"; closed or appointment-only Saturdays are never "open" (check 2) |
| `data-nosnippet` placed on `<nav>`, which Google ignores | `data-nosnippet` only on `span`/`div`/`section`; every breadcrumb `<nav>` sits inside a `div[data-nosnippet]` (check 3) |
| A page existed with no hub entry (Ashfield) | Every suburb directory appears exactly once in the hub (check 4) |
| Sitemap missed 18–42 pages and gave every URL one `lastmod` | Every page is in the sitemap, every `<loc>` exists, `lastmod` varies per URL (check 5) |
| `llms.txt` advertised HTML pages that do not exist; `llms-full.txt` kept relative links that broke once bodies were concatenated; a concept without `title` crashed the generator | Every australia.md URL in the llms files exists; no relative links in `llms-full.txt`; title falls back to H1/filename (check 6) |
| Relative links (`berala/` on the hub, `dental/` on `/medical/`) were resolved by Bing against the slash-less page URL, creating ~49 `/medical/{suburb}` and `/dental` 404s | Every internal `<a href>` is root-relative and must point to a file on disk (check 8) |
| Frontmatter added to a non-root `index.md` | `index.md`/`log.md` carry no frontmatter except `okf_version` on `docs/index.md` (check 7) |

When a reviewer (human or Copilot) finds a new class of defect, add a check for it to `scripts/seo-validate.mjs` in the same fix, so it cannot recur silently.

## 15. Re-verified sources

A handoff item can be a **re-verification** of a suburb that already has a page (handoff JSON `"mode": "reverify"`, or a source `.md` whose verification date — latest `verified[].at`, else `last_verified`/`timestamp` — is newer than the project copy). In that case:

1. Overwrite `docs/medical/dental/{suburb}-{state}.md` with the new source.
2. Regenerate `medical/dental/{suburb}/index.html` **from scratch** from the new source (do not patch the old page — clinics may have been added or removed).
3. Update that suburb's existing hub `<li>` in place (clinic count, `aria-label`, LGA, chips). Do not add a second `<li>`.
4. Run §14 as usual.

---

*Last updated: 2026-10-28 | Version: 1.6 — OKF v0.2 source frontmatter (§1b: `generated`, `verified`, `stale_after`, `sources`); the Last Verified date prefers the latest `verified[].at`; `seo:build` runs `okf:backfill` first (§14).*
*Previous: 2026-10-28 | Version: 1.5 — added mandatory post-processing and generated SEO files (§14), re-verified sources (§15), head alternate link, breadcrumb data-nosnippet, Raw .md badge, "Checked {date}" label and answer-first paragraph. Titles/descriptions frozen until 2026-11-25.*
*Previous: 2026-06-29 | Version: 1.4 — added Section 13 (hub directory index entry, single-column grid format) and the progressive-enhancement `.js` flag in §2.*
