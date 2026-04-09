# HTML_template.md — Dental Listing Page Template Reference

> **Purpose:** This file is the authoritative reference for generating `medical/dental/{suburb}/index.html` pages. The scheduled job reads THIS file instead of re-parsing an existing HTML page. All structure, class names, rules, and patterns are defined here. Follow exactly — do not deviate from class names, nesting, or element types.

---

## 1. File Location & Path Depths

| Source MD path | Output HTML path | CSS/JS depth prefix |
|---|---|---|
| `docs/medical/dental/macquarie-park-nsw.md` | `medical/dental/macquarie-park/index.html` | `../../../` |
| `docs/medical/dental/chatswood-nsw.md` | `medical/dental/chatswood/index.html` | `../../../` |

**Rule:** Strip the `-{state}` suffix from the filename. Use the base name as a new directory. Always write `index.html` inside it. CSS/JS refs are always 3 levels deep: `../../../style.css`, `../../../main.js`, `../listing.css`, `../listing.js`.

---

## 2. `<head>` Block

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="{N} verified AHPRA-registered dental clinics in {Suburb} {STATE} {Postcode}. {Clinic list summary sentence}." />
  <title>Dental Clinics — {Suburb} {STATE} {Postcode} | Australia.md</title>
  <link rel="canonical" href="https://australia.md/medical/dental/{suburb-slug}/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" integrity="sha384-1PT8sISk9zQ7SDVmmf11t7IlDJN8vvTQWzVqT4Qd4F9XLIIfHQsj8UH8VCMF5gT" crossorigin="anonymous" />
  <link rel="stylesheet" href="../../../style.css" />
  <link rel="stylesheet" href="../listing.css" />

  <!-- Open Graph / Twitter -->
  <meta property="og:title" content="Dental Clinics — {Suburb} {STATE} {Postcode} | Australia.md" />
  <meta property="og:description" content="{N} verified AHPRA-registered dental clinics in {Suburb} {STATE} {Postcode} with registered practitioners listed." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://australia.md/medical/dental/{suburb-slug}/" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Schema.org JSON-LD: see Section 3 -->
  <script type="application/ld+json">
  { ... see Section 3 ... }
  </script>
</head>
```

**Fill-in variables:**
- `{N}` — number of clinics found in the MD source
- `{Suburb}` — proper-cased suburb name (e.g. `Macquarie Park`)
- `{STATE}` — state abbreviation uppercase (e.g. `NSW`)
- `{Postcode}` — postcode number (e.g. `2113`)
- `{suburb-slug}` — lowercase kebab-case (e.g. `macquarie-park`)
- `{Last Verified date}` — from MD frontmatter field `Last Verified`

---

## 3. Schema.org JSON-LD

Three objects inside `@graph`:

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

---

## 4. `<body>` Structure

```
<body class="listing-page">
  <header class="nav-bar">            ← Navigation (Section 5)
  <div class="listing-header-wrap">  ← Page header (Section 6)
  <div class="listing-body">         ← Two-column layout
    <main class="clinic-list">       ← Clinic cards (Section 7)
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
  <nav class="nav-inner" role="navigation" aria-label="Main navigation">
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

    <!-- Breadcrumb -->
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

    <div class="listing-verified-row" aria-label="Verification status">
      <svg class="verified-shield" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 1l2.39 4.84L18 6.9l-4 3.9.94 5.46L10 13.77l-4.94 2.6L6 10.8 2 6.9l5.61-.06L10 1z" clip-rule="evenodd"/>
      </svg>
      <span class="verified-label">{N} Verified Clinics · {Suburb} · Postcode {Postcode} · AHPRA Regulated</span>
    </div>

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
  <div class="clinic-billing-note" aria-label="Billing information">
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
    <!-- <p class="practitioners-unconfirmed">Practitioner names not confirmed from public sources at time of verification. Verify via <a href="https://practitioners.ahpra.gov.au" target="_blank" rel="noopener noreferrer">practitioners.ahpra.gov.au</a>.</p> -->
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
| AHPRA Verified: Yes in source | `<div class="ahpra-badge" aria-label="AHPRA Registered"><svg ...>...</svg> AHPRA Registered</div>` |
| AHPRA Verified: No OR not stated | `<div class="ahpra-badge ahpra-unverified" style="opacity:0.6" aria-label="AHPRA Unverified"><svg ...>...</svg> AHPRA Unverified</div>` |

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
    <div class="sidebar-map" aria-label="Map of dental clinics in {Suburb} {STATE}">
      <svg viewBox="0 0 400 340" class="suburb-map-svg" role="img" aria-label="Street map of {Suburb} showing clinic locations" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="340" fill="#0d1f12"/>
        <!-- Roads: draw lines for major streets -->
        <!-- Clinic pins: numbered circles at approximate positions -->
        <!-- Region label at bottom -->
        <text x="30" y="310" fill="#2a3e2f" font-size="9" font-family="Inter, sans-serif" font-weight="500" letter-spacing="0.08em">{SUBURB} {POSTCODE} · {LGA} · {STATE}</text>
      </svg>
    </div>

    <!-- Mini clinic list below map -->
    <div class="map-clinic-list" id="map-clinic-list" aria-label="Quick clinic reference for {Suburb}">
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

## 10. Footer (copy exactly — no changes)

```html
<footer class="footer" id="main-footer" role="contentinfo">
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
    <span class="footer-built-by">Built by <a href="https://www.rxai.com.au" class="footer-rxai-link" target="_blank" rel="noopener noreferrer">RxAI</a></span>
    <div class="footer-accents" aria-hidden="true"><span class="footer-accent-green"></span><span class="footer-accent-gold"></span></div>
  </div>
</footer>

<script src="../../../main.js"></script>
<script src="../listing.js"></script>
```

---

## 11. Strict Content Rules

1. **Fact-check only** — every clinic name, address, phone, practitioner, service, and hour must appear explicitly in the source MD. If absent, omit it entirely.
2. **No fabrication** — do not invent postcodes, council names, landmarks, or any suburb description not in the source.
3. **AHPRA badge** — default to `AHPRA Unverified` (greyed, opacity 0.6) unless the source explicitly states `AHPRA Verified: Yes`.
4. **Practitioners absent** — if a clinic lists no practitioners in the source, use `<p class="practitioners-unconfirmed">` with a link to `practitioners.ahpra.gov.au`.
5. **Hours absent** — omit the hours `<span class="clinic-meta-item">` entirely. Never show "hours not confirmed".
6. **SVG map** — place numbered pins at approximate relative positions based on the suburb's street grid. If address data is too sparse to position meaningfully, draw a simple placeholder map with pins clustered near the centre.
7. **Semantic HTML5** — use `<article>`, `<section>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>`. Never use `<div>` where a semantic element exists.
8. **WCAG 2.1 AA** — all images have `alt`, all interactive elements are keyboard-accessible, contrast ≥ 4.5:1.

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

*Last updated: 2026-04-03 | Version: 1.2*
