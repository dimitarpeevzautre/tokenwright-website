# Tokenwright — Design Notes

The launch site for Tokenwright, a productized AI-leveraged delivery service for Salesforce Commerce Cloud merchants. This document records the design system and the reasoning behind it.

---

## 1. Design intent

**The site has one job: convert qualified E-commerce Directors into Trial Pack signups.**

Three principles drive every decision:

1. **Read as a SaaS product page, not a consulting brochure.** The reference points are Linear, Vercel, and Stripe — confident, dense, technical. Not Accenture, Deloitte, or a boutique studio.
2. **Hold up under interrogation.** The category-defining claims ("Agile is dead. You're paying for ceremonies.") are deliberately provocative. The visual language has to be sober enough that the claims read as conviction, not marketing.
3. **Buyers in 90 seconds.** An E-commerce Director should be able to assess fit, find the Trial Pack form, and submit within 90 seconds. Every section earns its place against that clock.

---

## 2. Color

A monochrome base with a single, sparingly-used accent. No gradients, no glassmorphism, no decorative color.

### Tokens

| Role               | Value      | Use |
| ------------------ | ---------- | --- |
| `--bg`             | `#FAFAF7`  | Page background — warm off-white, reads less sterile than pure white |
| `--bg-sunken`      | `#F2F1EC`  | Section banding — shift, trial, sample-quote |
| `--bg-elev`        | `#FFFFFF`  | Cards (token card, form, tiers) |
| `--ink`            | `#0F0F0E`  | Primary text, dark surfaces (final CTA, featured step) |
| `--ink-2`          | `#2A2A28`  | Body text |
| `--ink-3`          | `#5C5C58`  | Secondary copy, nav links |
| `--ink-4`          | `#8F8F89`  | Quiet labels, footnotes |
| `--rule`           | `#E6E3DB`  | Hairline borders |
| `--rule-strong`    | `#D6D2C7`  | Card borders, inputs |
| `--accent`         | `#0D9488`  | CTAs, emphasis, key numbers, diagram beats |
| `--accent-ink`     | `#0B7066`  | Hover state for primary button |
| `--accent-wash`    | `#D5EFEC`  | Subtle accent fill (sample-quote node) |

### Rules

- **One accent color, used sparingly.** Teal appears on: primary buttons, the second half of the H1, the dot in eyebrows, the "→" bullet in include lists, the featured stepper badge, the quote pill, and the diagram's middle arrow. Nowhere else.
- **No gradients.** Color does work through contrast and placement, not transitions.
- **Selected text** flips to teal on white — a small confidence signal.
- **Dark inversion** for the final CTA section only — gives the closer visual weight without introducing a second color.

---

## 3. Typography

Two families. Both modern. Neither overused.

### Families

- **Instrument Sans** (body, headlines) — a humanist grotesque with slightly more character than Inter or Geist. Reads editorial-product. Weights 400, 500, 600, 700.
- **JetBrains Mono** (labels, code, metadata) — a developer-coded monospace that signals "this is a product page written for technical buyers." Weights 400, 500.

### Scale

| Element     | Size                          | Weight | Letter-spacing |
| ----------- | ----------------------------- | ------ | -------------- |
| `h1`        | `clamp(44px, 6.4vw, 88px)`    | 600    | `-0.035em`     |
| `h2`        | `clamp(32px, 4vw, 52px)`      | 600    | `-0.028em`     |
| `h3`        | `clamp(22px, 2vw, 28px)`      | 600    | `-0.02em`      |
| `h4`        | `18px`                        | 600    | `-0.02em`      |
| `.lede`     | `clamp(18px, 1.5vw, 22px)`    | 400    | normal         |
| body `p`    | `16px / 1.5`                  | 400    | normal         |
| `.eyebrow`  | `12px` mono, uppercase        | 500    | `0.06em`       |
| Manifesto   | `clamp(22px, 2.4vw, 30px)`    | 400    | `-0.015em`     |

### Rules

- **Headlines are negative-tracked.** Tight letter-spacing on display sizes is the single biggest cue that this is product, not consulting.
- **`text-wrap: balance` on headings, `text-wrap: pretty` on body.** Prevents orphans and runts on real content.
- **No serifs.** A serif headline reads "agency."
- **Eyebrows always carry a dot.** Small teal pip + uppercase mono label is the standard section header. It signals rhythm without screaming.

---

## 4. Layout

### Container

- `--container: 1200px` — primary
- `--container-narrow: 880px` — long-form pages (onboarding timeline, contact)
- Horizontal padding: `32px` desktop, `20px` mobile

### Rhythm

- Section vertical padding: `112px` standard, `80px` for `.tight` (sub-pages)
- 1px `var(--rule)` border between every section — hairline, not heavy
- Three section background variants: default (`--bg`), `.sunken` (banding), `.ink` (dark closer)

### Grids

The site uses **`display: grid` with `gap`** for every collection of siblings. No bare inline flow for UI elements. Pain cards, stepper, footer columns, token card, and trial wrap are all explicit grids — survives drag-reorder edits cleanly.

---

## 5. Components

### Buttons

- `.btn-primary` — teal fill, white text, 1px border in same teal, 44px tall, 4px radius. Hover darkens to `--accent-ink`. Active translates 1px down (tactile).
- `.btn-secondary` — transparent, dark border that goes to full ink on hover. Same dimensions.
- `.btn-ghost` — text-only, accent on hover.
- `.btn-sm` — 36px tall for nav-bar usage.
- Every button with `<Arrow />` has an icon that translates 2px right on hover. Subtle motion cue.

### Cards

Three flavors:
- **Pain cards** — borderless interior, hairline grid, no rounding. Reads as a typographic system, not a "card UI."
- **Token card** — rounded `8px`, 1px strong border, white surface, two-column. The definition gets a 2px teal left-border quote treatment.
- **Form** — same chrome as Token card. Inputs are flat with 4px radius, focus to ink-colored border on white background.

### Stepper

Six columns on desktop, full-width stack on mobile. **Step 4 is featured** — inverts to dark ink background with a teal pulse badge ("Quote in minutes"). This is the only step that deserves visual weight, because it's the actual product claim.

### FAQ

Vertical accordion. Hairline rules between items. Plus icon rotates 45° on open (becomes ×). Single-open behavior — opening one closes the rest. First item open by default so the section doesn't read as a wall of questions.

---

## 6. Motion

**Restrained.** No parallax, no auto-playing video, no animated hero gradients.

- **Reveal-on-scroll**: 8px lift + opacity fade, 600ms ease-out, staggered 60–80ms between siblings. IntersectionObserver-driven so it runs once. Respects `prefers-reduced-motion`.
- **Hover states**: 140ms ease for color, border, transform on buttons.
- **Quote pill** in the hero diagram has a 2.4s pulse — the only loop on the page.
- **FAQ open**: max-height transition at 280ms, plus-icon rotates in the same window.

---

## 7. Imagery

**There isn't any.** No stock photos. No people-shaking-hands. No team headshots at launch (the brief calls this out explicitly — the message is product, not people).

Visual work is carried by:

- **Hero diagram** — a stacked node graph rendered in HTML (`request → quote → operator → PR`), with a live "ticking" quote-time pill. Anchors the hero's right column.
- **Flow diagram** — SVG on the `/how-it-works` page showing the same flow horizontally, with timing labels and a "prod boundary" marker that visualizes what Tokenwright never touches.
- **Brand mark** — a 22px monogram: bracketed "T" with a teal chisel notch. Wright = craftsperson; the notch nods to the chisel mark.

---

## 8. Tone, applied visually

Every visual decision should reinforce one of these voice rules:

| Voice rule                                 | Visual expression |
| ------------------------------------------ | --- |
| "Direct, technical, low-jargon."           | Mono labels, hairline rules, no decorative ornament |
| "Short sentences. Verbs forward."          | Generous whitespace at section level, dense within |
| "No hedging on provocative claims."        | Manifesto block uses display-size type, full-width, no card chrome |
| "Never call Managed Tokens 'AI tokens.'"   | The Token card explicitly defines the composite unit, set apart from raw AI imagery |
| "One quiet ZaUtre mention per page."       | A small mono-typeset credibility card, not a logo lockup |

---

## 9. Acceptance criteria (visual)

Mapping back to the brief:

1. **Buyer assesses fit in 60 seconds, signs up in 90.** → Hero CTA is above the fold; Trial Pack form is reachable from sticky nav and final CTA on every viewport.
2. **CTO finds answers to top 6 objections without leaving the homepage.** → Objections section is the second-to-last on the homepage, accordion-styled so all six are scannable.
3. **Every category-defining claim appears verbatim.** → "Agile is dead. You're paying for ceremonies." headlines the Shift section. "Quote in minutes, not weeks" is the featured stepper badge. "We don't want to replace your SI..." closes the manifesto. "Your architecture quality directly lowers your run-rate" surfaces on `/pricing` via the refactor budget line.
4. **ZaUtre mentioned exactly once on homepage.** → One credibility card in the Team section. Footer mention is in the smallprint, not the body.
5. **Trial Pack is most visually prominent CTA.** → Primary button in nav, hero, and final CTA all point to it. The Trial Pack section gets a `9vw` display number — the largest type on the page after the H1.

---

## 10. File structure

```
Tokenwright.html      — shell, font imports, script tags
styles.css            — all styles, token definitions, component CSS
copy.jsx              — all site copy, single source of truth (window.COPY)
components.jsx        — Nav, Footer, BrandMark, Reveal, Eyebrow, Arrow, HeroDiagram
sections.jsx          — homepage sections (Hero → FinalCta)
pages.jsx             — /pricing /how-it-works /onboarding /contact
app.jsx               — hash router, page composition
design.md             — this file
```

Copy is intentionally separated so it can be edited without touching layout. Section components import from `window.COPY` and never hardcode strings.

---

## 11. What's deliberately not here

- **No dark mode.** Light is the commitment. A dark/light toggle would dilute the message.
- **No animated hero gradient, no parallax, no scroll-pinned video.** Restraint is the design.
- **No icons in CTAs other than the arrow.** Icons in product copy read as filler.
- **No "feature comparison" tables.** The pricing tier card grid is the closest we get, and even that uses a minimal bullet list per tier.
- **No badges, no "as seen in," no logo wall.** We don't have public case studies and we won't invent them. The credibility load is carried entirely by the ZaUtre footnote.
