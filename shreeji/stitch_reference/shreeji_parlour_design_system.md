---
name: "Shreeji Parlour — Luxury Beauty Atelier"
description: "A warm, editorial light-mode design system for Shreeji Parlour blending warm ivory, soft blush, rose gold, and deep plum with Playfair Display and Raleway typography."
---

## Overview

Shreeji Parlour's design system embodies the quiet luxury of a bespoke women's beauty atelier. Designed for brides-to-be, working professionals, and women seeking restorative self-care, the interface feels welcoming, feminine, refined, and effortlessly calm.

The visual language pairs **Editorial Minimalism** with **Warm Tactility**: generous warm-ivory whitespace (`#FDF9F5`), soft blush and beige tonal surfaces, delicate rose-gold accents, and deep plum typography and primary actions for crisp legibility. Every layout prioritizes breathing room, high-craft beauty photography, and conversion-focused clarity without clutter or visual noise.

## Colors

The palette is anchored in warm ivory and cream backgrounds, layered with soft blush and beige tonal containers, accented with rose gold, and grounded by deep plum (`#431830`) for high-contrast headings and primary calls to action.

- **Primary (Deep Plum):** Establishes authority, elegance, and accessible contrast for primary buttons, headings, and active navigation states.
- **Secondary (Muted Mauve & Rose Gold):** Provides warm, feminine contrast for secondary actions, highlights, and subtle badges.
- **Tertiary (Warm Sand / Champagne):** Supports editorial callouts, ratings, and subtle metallic warmth.
- **Surfaces (Warm Ivory & Cream):** Keeps the canvas airy and welcoming, using subtle tonal steps rather than harsh borders.

```yaml
colors:
  rose-gold: "#B76E79"
  blush-tint: "#F9E6E8"
  warm-beige: "#EFE6DD"
  success: "#2E6F40"
  warning: "#9A6700"
  light:
    primary: "#431830"
    on-primary: "#FFFFFF"
    primary-container: "#5D2E46"
    on-primary-container: "#FFD8E7"
    secondary: "#8C4B55"
    on-secondary: "#FFFFFF"
    secondary-container: "#FFECED"
    on-secondary-container: "#551E29"
    tertiary: "#7D562D"
    on-tertiary: "#FFFFFF"
    tertiary-container: "#FFEEE0"
    on-tertiary-container: "#482904"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    error-container: "#FFDAD6"
    on-error-container: "#93000A"
    background: "#FDF9F5"
    on-background: "#1C1C19"
    surface: "#FDF9F5"
    surface-dim: "#DDD9D6"
    surface-bright: "#FDF9F5"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#F7F3EF"
    surface-container: "#F1EDE9"
    surface-container-high: "#EBE7E4"
    surface-container-highest: "#E5E2DE"
    on-surface: "#1C1C19"
    surface-variant: "#F1DEE4"
    on-surface-variant: "#504348"
    outline: "#827378"
    outline-variant: "#D4C2C8"
    inverse-surface: "#31302E"
    inverse-on-surface: "#F4F0EC"
    inverse-primary: "#F6B4D1"
  dark:
    primary: "#F6B4D1"
    on-primary: "#4E2139"
    primary-container: "#5D2E46"
    on-primary-container: "#FFD8E7"
    secondary: "#FFB2BC"
    on-secondary: "#551E29"
    secondary-container: "#733641"
    on-secondary-container: "#FFD9DD"
    tertiary: "#F0BD8B"
    on-tertiary: "#482904"
    tertiary-container: "#58360F"
    on-tertiary-container: "#FFDCBD"
    error: "#FFB4AB"
    on-error: "#690005"
    error-container: "#93000A"
    on-error-container: "#FFDAD6"
    background: "#141311"
    on-background: "#E5E2DE"
    surface: "#141311"
    surface-dim: "#141311"
    surface-bright: "#3A3937"
    surface-container-lowest: "#0F0E0C"
    surface-container-low: "#1C1C19"
    surface-container: "#20201D"
    surface-container-high: "#2B2A28"
    surface-container-highest: "#363532"
    on-surface: "#E5E2DE"
    surface-variant: "#504348"
    on-surface-variant: "#D4C2C8"
    outline: "#9C8D92"
    outline-variant: "#504348"
    inverse-surface: "#E5E2DE"
    inverse-on-surface: "#31302E"
    inverse-primary: "#834E68"
```

## Typography

A classic editorial contrast pairing: **Playfair Display** brings graceful, high-fashion serif warmth to display and section headings, while **Raleway** delivers crisp geometric legibility for body copy, service descriptions, pricing, and form controls. **Red Hat Mono** is reserved for tabular durations, booking reference codes, and pricing figures where needed.

```yaml
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 64px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Playfair Display"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: -0.25px
  display-md:
    fontFamily: "Playfair Display"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 52px
    letterSpacing: -0.25px
  display-md-mobile:
    fontFamily: "Playfair Display"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 34px
    letterSpacing: -0.2px
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 44px
    letterSpacing: -0.2px
  headline-lg-mobile:
    fontFamily: "Playfair Display"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.1px
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: 0px
  headline-sm:
    fontFamily: "Playfair Display"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: 0px
  title-lg:
    fontFamily: "Raleway"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0px
  title-md:
    fontFamily: "Raleway"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0.1px
  body-lg:
    fontFamily: "Raleway"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0.1px
  body-md:
    fontFamily: "Raleway"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.15px
  body-sm:
    fontFamily: "Raleway"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.2px
  label-lg:
    fontFamily: "Raleway"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.25px
  label-md:
    fontFamily: "Raleway"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.4px
  label-sm:
    fontFamily: "Raleway"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.5px
  mono-md:
    fontFamily: "Red Hat Mono"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
```

## Layout & Spacing

The website uses a responsive **Max-Width Editorial Grid** (`max-w-7xl`, 1280px) with generous vertical section rhythm and clean 12-column desktop splits that collapse gracefully to 2-column tablet and 1-column mobile stacks.

- **Desktop (>= 1024px):** 12-column grid, 24px–32px gutters, 64px–96px section padding.
- **Tablet (768px–1023px):** 8-column or 2-column card grids, 24px gutters.
- **Mobile (< 768px):** Single-column stack with 16px–20px page margins and `-mobile` typography tokens on display/headline levels.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section-sm: 48px
  section-lg: 80px
  page-margin: 24px
```

## Elevation & Depth

Hierarchy relies primarily on **tonal surface layering** (`surface` -> `surface-container-low` -> `surface-container-lowest` white cards) paired with **hairline outline-variant borders** (`1px`) and **extra-soft ambient shadows** (`0 12px 32px -8px rgba(67, 24, 48, 0.06)`). Avoid heavy drop shadows, neon glows, or cluttered multi-level card nesting.

## Shapes

Softly rounded corners convey warmth and approachability while preserving editorial structure. Primary and secondary buttons use pill (`full`) or soft `lg` (16px) corners; cards use `lg` (16px) or `xl` (24px) corners; form inputs use `md` (12px) corners.

```yaml
rounded:
  sm: 6px
  DEFAULT: 10px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
```

## Motion & Micro-interaction

Interactions feel unhurried, graceful, and tactile—like silk rather than spring-loaded machinery. Hover transitions on buttons and service cards complete in 200ms–300ms using `cubic-bezier(0.22, 1, 0.36, 1)`. Only `transform`, `opacity`, and color properties are animated, respecting `prefers-reduced-motion`.

```yaml
motion:
  state-change:
    duration: 180ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
  card-hover:
    duration: 240ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
```

## Voice & Content Strategy

- **Tone:** Warm, assured, welcoming, and poised. Speaks directly to the guest's desire for care, confidence, and calm. Avoids pushy sales jargon or generic buzzwords.
- **Capitalisation:** Title Case for primary navigation, package names, and section headlines; Sentence case for descriptions, FAQs, and form helper text.
- **CTAs:** Clear, inviting verb phrases — `"Book an Appointment"`, `"Explore Our Services"`, `"View Details"`, `"Book Package"`, `"Confirm Appointment"`.
- **Pricing & Durations:** Always formatted clearly in INR (`₹1,500`, `₹14,999`) with `tabular-nums` and realistic session durations (`45 mins`, `90 mins`, `3 hrs`).
- **Do's and Don'ts:**
  - **Do** pair generous warm-ivory whitespace with high-craft photography and subtle `outline-variant` borders.
  - **Do** keep navigation, header, and footer identical across all 9 pages.
  - **Don't** use excessive bright pink, cartoon illustrations, cluttered multi-badge cards, or unnecessary gradients.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Chip** → `@components/chip.html`: `chip-action`, `chip-input`, `chip-with-icon`
- **Input Field** → `@components/input-field.html`: `input-field-text`, `input-field-icon`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
