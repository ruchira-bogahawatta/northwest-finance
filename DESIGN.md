# Design

## Theme

Light, bright, and calm. Scene: a 30-something car buyer standing in a New Zealand
car yard at midday, on their phone, checking whether Northwest will approve them and
what it will cost each week. The page must read cleanly in daylight, feel trustworthy
at a glance, and stay out of its own way. Light theme, cool-neutral surfaces, one
confident brand blue doing the heavy lifting.

**Color strategy: Restrained → Committed.** Cool-tinted neutral surfaces carry most
of the page; the brand blue (`#2C5EAD`) is used decisively — full-bleed in the hero
band and primary CTAs — rather than sprinkled as an accent. No cream/sand/beige
anywhere. Neutrals are tinted toward the brand hue, never warm.

## Color

All values OKLCH. Brand hue ≈ 264.

### Brand (blue) — primary `#2C5EAD` = `brand-600`

| Token | OKLCH | ~Hex | Use |
|---|---|---|---|
| `brand-50`  | `oklch(0.971 0.013 264)` | `#eef2fb` | tint backgrounds |
| `brand-100` | `oklch(0.936 0.028 264)` | `#dce6f8` | hover tint, chips |
| `brand-200` | `oklch(0.882 0.052 264)` | `#bccff0` | borders on tint |
| `brand-300` | `oklch(0.806 0.083 264)` | `#93b0e4` | disabled, lines |
| `brand-400` | `oklch(0.706 0.118 264)` | `#6088d4` | on-dark accents |
| `brand-500` | `oklch(0.590 0.137 264)` | `#3a6ac0` | hover of primary |
| `brand-600` | `oklch(0.487 0.135 264)` | `#2c5ead` | **PRIMARY** brand/CTA |
| `brand-700` | `oklch(0.420 0.120 264)` | `#264e8e` | pressed, deep band |
| `brand-800` | `oklch(0.360 0.100 264)` | `#223f70` | hero gradient end |
| `brand-900` | `oklch(0.310 0.082 264)` | `#1e3458` | deepest band |
| `brand-950` | `oklch(0.240 0.060 264)` | `#16223a` | footer base |

### Neutrals (cool, tinted toward hue 264)

| Token | OKLCH | ~Hex | Use |
|---|---|---|---|
| `bg`        | `oklch(1 0 0)`            | `#ffffff` | page background |
| `surface`   | `oklch(0.984 0.004 264)` | `#f7f9fc` | alternating sections, cards |
| `surface-2` | `oklch(0.965 0.006 264)` | `#eef1f8` | inset / muted blocks |
| `border`    | `oklch(0.918 0.008 264)` | `#dde2ee` | hairlines, card borders |
| `ink`       | `oklch(0.270 0.030 264)` | `#1a2234` | headings (≈13:1 on bg) |
| `body`      | `oklch(0.430 0.025 264)` | `#48506a` | body text (≈7:1 on bg) |
| `muted`     | `oklch(0.545 0.020 264)` | `#6c7488` | secondary/labels (≈4.7:1) |

### Semantic

| Token | OKLCH | ~Hex | Use |
|---|---|---|---|
| `success` | `oklch(0.620 0.130 155)` | `#2f9e6f` | approval/positive cues |
| `success-50` | `oklch(0.965 0.025 155)` | `#e6f6ee` | success tint bg |

Contrast: `ink`/`body` verified ≥ 4.5:1 on `bg` and on `surface`. On the blue hero
band, text is white (`#ffffff`) or `brand-100`; never gray-on-blue.

## Typography

**One family, used with committed weight + size contrast** — keeps the page calm and
cohesive (the brief explicitly wants "nothing too busy"), with hierarchy carried by
weight, not by mixing typefaces.

- **Family:** `Hanken Grotesk` (Google Fonts) — a humanist grotesque that reads as
  serious and trustworthy but friendly, not corporate-cold. Deliberately *not* Inter /
  DM Sans / Plus Jakarta (training-data defaults).
- **Weights loaded:** 400, 500, 600, 700, 800.
- **Fallback stack:** `"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **Numbers:** `font-variant-numeric: tabular-nums` on all calculator figures and money.

### Scale (fluid)

| Role | clamp() | Weight | Tracking |
|---|---|---|---|
| Display / h1 | `clamp(2.25rem, 1.55rem + 3.1vw, 3.75rem)` | 800 | `-0.02em` |
| h2 | `clamp(1.75rem, 1.35rem + 1.8vw, 2.5rem)` | 700 | `-0.015em` |
| h3 | `clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)` | 700 | `-0.01em` |
| Lead | `clamp(1.075rem, 1rem + 0.4vw, 1.25rem)` | 400 | `0` |
| Body | `1.0625rem` (17px), line-height 1.6 | 400 | `0` |
| Small / label | `0.875rem`, line-height 1.5 | 500 | `0` |

`text-wrap: balance` on h1–h3; `text-wrap: pretty` on prose. Body line length capped
at ~68ch.

## Layout

- Container max-width `72rem` (1152px), gutter `clamp(1.25rem, 5vw, 2rem)`.
- Section vertical rhythm: `clamp(4rem, 8vw, 7rem)`, varied (tighter where content groups).
- Flex for 1D rows, Grid for 2D. Responsive grids: `repeat(auto-fit, minmax(260px, 1fr))`.
- Asymmetric hero: copy + calculator/visual side by side on desktop, stacked on mobile.
- Cards used sparingly and only where they're the right affordance (steps, FAQ).
  Never nested. No identical icon-card grid as a crutch.

## Radius, elevation, borders

- `--radius`: 0.75rem base; buttons `0.625rem`; large cards `1rem`; pills only for chips.
- Shadows: subtle, cool-tinted, low opacity — `shadow-sm` for raised inputs, `shadow-md`
  for the floating calculator card. No heavy drop shadows.
- Hairline borders (`border`) define most surfaces; rely on border + subtle tint, not big shadows.

## Motion

- Library: CSS-first; `motion` (Framer Motion) only if a section genuinely needs
  orchestration. Easing: ease-out-expo / quart. No bounce, no elastic.
- One restrained hero entrance on load (already-visible content, staggered slightly).
  Subtle hover lifts on interactive cards/buttons. Calculator updates animate the
  number with a short tween.
- `@media (prefers-reduced-motion: reduce)`: crossfade or instant; no transforms.

## Imagery

Finance/brand needs real human imagery so it doesn't read as colored blocks. Use one
decisive hero photo (a real NZ vehicle-handover / open-road / person-with-car moment),
not a grid of stock. Source: Unsplash, URLs verified to resolve before shipping. Alt
text written in brand voice. Keep imagery minimal and purposeful elsewhere — logos of
trust signals, not decorative filler.

## Z-index scale

`--z-dropdown: 1000; --z-sticky: 1100; --z-backdrop: 1200; --z-modal: 1300; --z-toast: 1400; --z-tooltip: 1500;`
