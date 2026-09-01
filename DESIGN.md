---
name: Australia.md — The Sovereign Archive
description: Dark-mode archival design system for a verified, machine-readable knowledge base of Australia.
colors:
  primary: "#71dc8a"
  primary-container: "#00843d"
  on-primary: "#003916"
  on-primary-container: "#e7ffe6"
  secondary-container: "#fecc00"
  secondary-fixed-dim: "#f0c100"
  on-secondary-container: "#6e5700"
  tertiary: "#abc7ff"
  tertiary-container: "#4c72b5"
  surface: "#0a160f"
  surface-container-lowest: "#05110a"
  surface-container-low: "#121e17"
  surface-container: "#16221b"
  surface-container-high: "#202d25"
  surface-container-highest: "#2b382f"
  on-surface: "#d8e6da"
  on-surface-variant: "#bdcabb"
  outline: "#889487"
  outline-variant: "#3e4a3e"
  error: "#ffb4ab"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.75rem"
  xl: "1rem"
  full: "9999px"
spacing:
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-6: "1.5rem"
  sp-8: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.25rem"
  chip:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.md}"
    padding: "0.25rem 0.75rem"
  card:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  search-input:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "0.25rem 0.25rem 0.25rem 1.25rem"
---

# Design System: Australia.md — The Sovereign Archive

## 1. Overview

**Creative North Star: "The Sovereign Archive"**

This is the visual language of a national institutional record, not a website that happens to hold facts. Every surface is a dark forest-green plate in a deep vault (`#0a160f`); information sits on it with the calm authority of an official register. Depth is built from a tonal ramp of near-black greens, never from glow or gloss — the archive feels *technical and archival*, dense with verified detail yet held in order by clean hierarchy and intentional whitespace. The two accents are deliberately national: Australian Green (`#71dc8a`) for structure, navigation, and trust signals; Australian Gold (`#fecc00`) for the single most important action on a screen. Steel blue (`#abc7ff`) is reserved for tertiary/contextual data.

The system commits to **dark mode only** — not because dark "looks cool," but because the archive is a vault: a screen of dense, citable data read with focus, where a deep ground lets green and gold carry meaning instead of decoration. Type is a two-family contrast pair: Space Grotesk (a tight geometric grotesque) for headings, Inter (a neutral humanist sans) for dense body and labels. Motion is restrained — state changes and subtle scroll reveals, nothing choreographed.

It explicitly rejects three things. **No tourist-brochure aesthetics** — no stock travel photography, no cheerful gloss. **No generic SaaS dashboard** — no hero-metric template, no endless identical card grids, no purple-gradient startup sheen. **No government-portal sterility** — never cold, cramped, or buried in forms. The archive is authoritative *and* alive.

**Key Characteristics:**
- Dark forest-green vault ground; depth via tonal layering, not shadow.
- National Green & Gold accents, used sparingly and meaningfully.
- Dense information, disciplined hierarchy, generous breathing room.
- Geometric-display + humanist-body type contrast.
- WCAG 2.1 AA / WAI-ARIA 1.2 as a floor, not a feature.

## 2. Colors

A near-black forest-green field carrying two saturated national accents and a single cool data hue; everything else is a six-step green-tinted neutral ramp.

### Primary
- **Australian Green** (`#71dc8a`): The structural voice — icons, links, active states, focus rings, trust affordances (verified shields, AHPRA cues), arrows. The bright on-dark green that signals "this is the system speaking."
- **Deep Green Container** (`#00843d`): Filled emphasis and the *hover* destination for the primary CTA. Pairs with near-white green ink (`#e7ffe6`).

### Secondary
- **Australian Gold** (`#fecc00`): The action voice. Reserved for the single most important button on a screen (search submit, primary CTA). Its scarcity is what makes it read as "do this."
- **Muted Gold** (`#f0c100`): Eyebrows, badges, breadcrumb "current" markers — gold dimmed for quiet labelling so it never competes with the gold CTA.

### Tertiary
- **Steel Blue** (`#abc7ff`): Tertiary and contextual data only — access notes, secondary annotations. Never an action color.

### Neutral
- **Vault Surface** (`#0a160f`): The base body ground.
- **Surface Container ramp** (`#05110a` → `#121e17` → `#16221b` → `#202d25` → `#2b382f`): Six tonal steps from "lowest" (cards, the deepest plates) up to "highest" (chips, raised controls). This ramp *is* the elevation system.
- **Primary Ink** (`#d8e6da`) / **Variant Ink** (`#bdcabb`): Body and secondary text — green-tinted off-whites, never pure `#fff`.
- **Outline** (`#889487`) / **Outline Variant** (`#3e4a3e`): Hairline dividers and muted meta text. Borders are near-always sub-1px-feeling rgba greens, not solid grays.
- **Error** (`#ffb4ab`): Destructive / invalid states only.

### Named Rules
**The Gold-For-One Rule.** Australian Gold (`#fecc00`) fills exactly one action per view — the primary task. If two gold buttons appear on a screen, one of them is wrong. Everything else that needs emphasis uses green.

**The Tinted-Neutral Rule.** There are no pure grays and no pure white. Every neutral is pulled toward the forest-green hue. Pure `#000`/`#fff`/`#808080` are prohibited; they read as a different, colder product.

## 3. Typography

**Display Font:** Space Grotesk (with `sans-serif` fallback)
**Body Font:** Inter (with `sans-serif` fallback)

**Character:** A true contrast pairing — Space Grotesk's tight geometric grotesque gives headings an engineered, monument-plaque authority; Inter's neutral humanist forms keep dense body copy and data labels quiet and legible. They differ on the contrast axis (geometric vs. humanist), so the pairing reads as intentional, never as two-similar-sans drift.

### Hierarchy
- **Display** (Space Grotesk 700, `clamp(1.75rem, 3.5vw, 2.75rem)`, line-height 1.15, tracking −0.03em): Page titles / hero headings. Tracking stays at −0.03em — tight but never touching.
- **Headline** (Space Grotesk 600, ~1.375rem, line-height 1.3): Section titles (FAQ, content blocks).
- **Title** (Space Grotesk 600, ~1.25rem, line-height 1.3): Card and clinic names.
- **Body** (Inter 400, 1rem, line-height 1.6): Prose and meta. Cap measure at 65–75ch (`.listing-intro` holds ~68ch).
- **Label** (Inter 600, ~0.7rem, tracking 0.1em, UPPERCASE): Eyebrows, service labels, breadcrumb items, badge text.

### Named Rules
**The −0.03em Floor.** Display tracking never goes below −0.03em. Tighter and the grotesque caps collide; the archive should read as engraved, not cramped.

**The One-Eyebrow Rule.** Uppercase tracked labels are a real part of this system (`Dental · NSW`, `Services`) — but they are structural captions, not a per-section reflex. Don't stack a tiny uppercase kicker above every heading.

## 4. Elevation

**Flat by default.** Depth is built almost entirely from the tonal surface-container ramp: a card is "raised" because it's a lighter green plate than the ground, not because it casts a shadow. At rest, surfaces are flat with a 1px green-tinted hairline outline (`rgba(62, 74, 62, 0.15)`). Shadows are reserved for *state* — they appear on hover and focus to confirm an interaction, then recede.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 20px 40px rgba(0, 33, 10, 0.4)`): Cards on `:hover`, paired with a −2 to −4px `translateY`. A deep, diffuse vault-green shadow — felt, not seen.
- **Focus ring + lift** (`box-shadow: 0 0 0 3px rgba(0, 132, 61, 0.12), 0 20px 40px rgba(0, 33, 10, 0.4)`): Inputs on `:focus-within` — a soft green halo plus the same depth.
- **Floating panel** (`box-shadow: 0 20px 40px rgba(0, 33, 10, 0.3)`): The hero search bar and autocomplete dropdown, which sit above the page.

### Named Rules
**The Tonal-First Rule.** Reach for the surface-container ramp before reaching for a shadow. If two elements need separating, change the plate, don't add a drop shadow. Shadows are a response to state, never decoration at rest.

**The Ghost-Card Ban.** Never combine a 1px border with a wide soft drop shadow on the same resting element. Pick tonal layering + hairline outline; let shadow belong to hover/focus.

## 5. Components

### Buttons
- **Shape:** Small, restrained radius — `0.375rem` (md) for standard buttons, full pill (`9999px`) only for badges/tags. Cards round more (16px); buttons stay crisp.
- **Primary (the Gold CTA):** Australian Gold fill (`#fecc00`) with deep gold-brown ink (`#6e5700`), padding `0.75rem 1.5rem`, weight 600. The one decisive action.
- **Hover / Focus:** Primary flips to Deep Green (`#00843d`) with near-white green ink and a −1px lift; transitions on `all 300ms ease`. Focus-visible must show a ring.
- **Ghost / Secondary:** Transparent fill, 1px green-tinted border, green or on-surface text (`.btn-github`, `.btn-refine`). Hover warms the fill to `rgba(113, 220, 138, 0.08)` and shifts the border green.

### Chips
- **Style:** `surface-container-highest` (`#2b382f`) fill, variant ink, md radius, padding `0.25rem 0.75rem`, 0.72rem weight 500 (service chips). A second variant is outlined green-on-translucent for category tags (`.suburb-dir-chip`).
- **State:** Static labels by default; the sort tabs are the interactive variant (a segmented pill on `surface-container-high`, active tab raised to `highest` with on-surface ink).

### Cards / Containers
- **Corner Style:** Generous but bounded — `1rem` (16px, xl). Never exceed this on a card.
- **Background:** `surface-container-lowest` (`#05110a`) at rest; the featured variant lifts to `surface-container-high` with a 2px green→gold top accent bar.
- **Shadow Strategy:** None at rest (see Elevation). Hover adds the deep vault-green lift + a green outline shift.
- **Border:** A 1px hairline via `outline` (`rgba(62, 74, 62, 0.15)`), `outline-offset: -1px` — not a `border`, so it never shifts layout.
- **Internal Padding:** `2rem` (sp-8) on category cards; listing cards section their padding by header / services / footer.

### Inputs / Fields
- **Style:** `surface-container-lowest` fill, 1px green-tinted border, `lg` radius (12px), generous left padding for a leading search icon, floating-panel shadow.
- **Focus:** `:focus-within` warms the fill to `highest`, turns the border and icon Australian Green, and adds the green halo ring. Placeholder uses `outline` ink at full body contrast.
- **Autocomplete:** A blurred dark panel (`rgba(22,34,27,0.9)` + `backdrop-filter: blur(16px)`) — the one sanctioned use of glass, because it floats above content.

### Navigation
- **Style:** Fixed top bar, translucent vault green (`rgba(10,22,15,0.82)`) with `backdrop-filter: blur(16px)`; a hairline bottom border that darkens on scroll (`.scrolled`).
- **Typography:** Inter 500, 0.875rem links; logo in Space Grotesk with a gold `.md` accent dot.
- **States:** Links warm to `rgba(113,220,138,0.08)` on hover. At ≤768px the links collapse behind a hamburger into a full-width blurred dropdown; the version badge hides and GitHub collapses to an icon-only button.

### Signature Component — Trust Badge (AHPRA)
A pill that surfaces verification state honestly: green-tinted when registered, gold-tinted (`rgba(240,193,0,0.1)` + muted-gold ink) and dimmed when "AHPRA Unverified." It is `role="img"` with a descriptive `aria-label`. The badge is a design principle made visible — show uncertainty, never imply certainty.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body ground on the forest-green vault (`#0a160f`) and build depth from the `surface-container` ramp before reaching for any shadow.
- **Do** reserve Australian Gold (`#fecc00`) for exactly one primary action per view; use green for every other emphasis.
- **Do** keep all neutrals tinted toward the green hue — off-white ink (`#d8e6da`), never pure `#fff`; hairline borders in rgba green, never pure gray.
- **Do** pair Space Grotesk display with Inter body, and hold display tracking at −0.03em (never tighter).
- **Do** surface trust state plainly — "AHPRA Unverified" in muted gold — because honesty over polish is the brand.
- **Do** meet WCAG 2.1 AA: body ≥4.5:1, large text ≥3:1, visible focus rings, descriptive anchor text, `prefers-reduced-motion` fallbacks, no horizontal scroll to ~320px.

### Don't:
- **Don't** ship **tourist-brochure aesthetics** — no stock travel photography, no cheerful marketing gloss.
- **Don't** ship a **generic SaaS dashboard** — no hero-metric template, no endless identical card grids, no purple-gradient startup sheen.
- **Don't** ship **government-portal sterility** — never cold, cramped, or form-heavy.
- **Don't** combine a 1px border with a wide soft drop shadow on a resting card or button (the ghost-card pattern). Tonal plate + hairline at rest; shadow on state only.
- **Don't** over-round: cards top out at 16px; pills only for tags/badges. No 24/28/32px card radii.
- **Don't** use gradient text (`background-clip: text`), `border-left`/`border-right` color stripes as accents, or decorative glassmorphism (the blurred autocomplete panel is the one sanctioned glass surface).
- **Don't** introduce a second gold action, pure black/white/gray, or a font that's a near-twin of Space Grotesk or Inter.
