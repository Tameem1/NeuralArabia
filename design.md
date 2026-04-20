# Tawjeeh AI — Design System

> Derived from the Tawjeeh AI brand mark: a geometric teal "T" built from two right-triangle shapes meeting at a center point. The identity is sharp, structural, and confident — a tech company built for the Arab world.

---

## Color Palette

### Brand Primaries

| Token | Hex | HSL | Role |
|---|---|---|---|
| `--rawjeeh-teal` | `#40E0D0` | `176 72% 56%` | Primary CTA, logo fill, active states |
| `--bright-aqua` | `#57E6D9` | `178 70% 62%` | Hover tints, gradient starts, aura glows |
| `--deep-teal` | `#16B8AE` | `176 79% 40%` | Eyebrow labels, icon fills, focus rings |
| `--accent-teal` | `#129A92` | `175 79% 33%` | Body links, icon active, nav hover |

### Neutral Dark (Ink family)

| Token | Hex | Role |
|---|---|---|
| `--ink-black` | `#0F1720` | Page text, deepest contrast |
| `--petrol-ink` | `#0D2B33` | Dark section backgrounds, dark CTAs |
| `--ocean-slate` | `#21454D` | Heading on dark, secondary dark bg |
| `--slate-graphite` | `#334155` | Body paragraphs, secondary text |
| `--muted-marine` | `#6B7C85` | Captions, meta, placeholder |

### Surface & Background (Mist family)

| Token | Hex | Role |
|---|---|---|
| `--pure-mist` | `#F7FCFC` | Page background base |
| `--cloud-white` | `#FFFFFF` | Card surfaces, modals |
| `--sea-glass` | `#EAF8F7` | Icon badge backgrounds, soft tint |
| `--aqua-wash` | `#D9F3F0` | Subtle tinted sections, gradient stripes |

### Border & Line

| Token | Hex | Role |
|---|---|---|
| `--cool-border` | `#D5E7E6` | Card borders, input outlines |
| `--soft-line` | `#E8F2F2` | Dividers, section separators |
| `--focus-ring` | `#7CEDE3` | Keyboard focus ring |

### Semantic Colors

| Role | Value |
|---|---|
| Success | `#16B8AE` (deep-teal) |
| Warning | `#E2A03F` |
| Error | `#C0392B` |
| Info | `#40E0D0` (rawjeeh-teal) |

---

## Typography

### Font Families

| Stack | Fonts | When to use |
|---|---|---|
| `font-display` | Sora → Inter → system-ui | English headings (h1–h4) |
| `font-sans` | Inter → Arial → system-ui | English body, UI labels |
| `font-mono` | IBM Plex Mono → ui-monospace | Eyebrow labels, code, badges |
| `font-arabicDisplay` | Alexandria → IBM Plex Sans Arabic | Arabic headings |
| `font-arabic` | IBM Plex Sans Arabic → Alexandria | Arabic body text |

### Type Scale

| Step | Size | Weight | Tracking | Usage |
|---|---|---|---|---|
| Display XL | `4.5rem / 72px` | 600 | `-0.05em` | Hero headline (lg breakpoint) |
| Display L | `3.35rem / 54px` | 600 | `-0.05em` | Hero headline (md breakpoint) |
| Display M | `2.65rem / 42px` | 600 | `-0.05em` | Hero headline (mobile) |
| H2 | `3rem / 48px` | 600 | `-0.04em` | Section headings |
| H3 | `1.5rem / 24px` | 500 | `-0.03em` | Card titles, panel titles |
| H4 | `1.25rem / 20px` | 500 | `-0.02em` | Sub-section labels |
| Body L | `1.125rem / 18px` | 400 | `0` | Section descriptions |
| Body | `1rem / 16px` | 400 | `0` | Default body copy |
| Small | `0.875rem / 14px` | 400 | `0` | Card descriptions, captions |
| Eyebrow | `0.75rem / 12px` | 500 | `+0.08em` | Section labels (uppercase, IBM Plex Mono) |
| Badge | `0.75rem / 12px` | 500 | `+0.18em` | Status chips, stat labels |

### Line Heights

- Headings: `0.96–1.1` (tight, condensed feel)
- Body L: `1.75` (generous)
- Body: `1.625`
- Small: `1.714`

### Arabic Typography Rules

- Headings: `letter-spacing: 0` (Arabic glyphs don't benefit from tracking)
- Eyebrows: swap IBM Plex Mono for IBM Plex Sans Arabic, remove uppercase
- Body: IBM Plex Sans Arabic first, then Alexandria fallback
- RTL layout: flip all directional properties, use `dir="rtl"` on `<html>`

---

## Spacing & Layout

### Container

```
max-width: 1440px
padding: 1rem (mobile) → 1.5rem (sm) → 2rem (lg)
class: .section-shell
```

### Section Padding

| Breakpoint | Vertical padding |
|---|---|
| Mobile | `py-20` (5rem) |
| Desktop | `py-24` (6rem) |
| Hero mobile | `pt-10 pb-20` |
| Hero desktop | `pt-16 pb-28` |

### Grid Columns

| Pattern | Ratio | Use case |
|---|---|---|
| Hero split | `1.02fr / 0.98fr` | Hero text + card panel |
| Content left-heavy | `0.78fr / 1.22fr` | Section label + cards grid |
| Balanced | `0.9fr / 1.1fr` | Solutions split panel |
| Equal 3-col | `1fr 1fr 1fr` | Metrics, feature cards |
| Equal 2-col | `1fr 1fr` | Solution sub-cards |

### Gap Scale

- Between sections: `gap-10` to `gap-12`
- Between cards in a grid: `gap-5`
- Within a card (stacked items): `gap-4`
- CTA button group: `gap-3`

---

## Border Radius

| Size | Value | Usage |
|---|---|---|
| `rounded-[36px]` | 36px | Outer section wrappers, large feature cards |
| `rounded-[32px]` | 32px | Hero panel wrapper, major cards |
| `rounded-[28px]` | 28px | Standard cards, inner panels, sub-cards |
| `rounded-[24px]` | 24px | Metric cards, small panels |
| `rounded-[22px]` | 22px | Inner chart/graph areas |
| `rounded-2xl` | 16px | Icon badges, small chips |
| `rounded-full` | 9999px | Buttons (CTAs), language toggle, badges |

**Principle:** Larger containers get larger radii. Nested elements have progressively smaller radii (36 → 28 → 22).

---

## Component Styling

### Buttons

#### Primary CTA
```css
background: #40E0D0 (rawjeeh-teal)
color: #0D2B33 (petrol-ink)
border-radius: 9999px (full)
padding: 12px 24px
font: 14px / 600 / Inter
box-shadow: 0 16px 40px rgba(64, 224, 208, 0.26)
hover: bg #22CFC1, translateY(-1px)
```

#### Secondary CTA
```css
background: rgba(255,255,255,0.72) + backdrop-blur(10px)
border: 1px solid #D5E7E6
color: #0F1720
border-radius: 9999px
padding: 12px 24px
hover: border rgba(18,154,146,0.3), color #129A92, bg rgba(234,248,247,0.92)
```

#### Dark CTA
```css
background: #0D2B33 (petrol-ink)
color: #FFFFFF
border-radius: 9999px
padding: 12px 24px
hover: bg #123841, translateY(-1px)
```

### Cards

#### Light Card (`.brand-card`)
```css
background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(247,252,252,0.98))
border: 1px solid #D5E7E6
box-shadow: 0 18px 60px rgba(13,43,51,0.08)
border-radius: varies (see scale above)
```

#### Dark Card (`.brand-dark-card`)
```css
background: linear-gradient(180deg, rgba(33,69,77,0.95), rgba(13,43,51,0.98)),
            linear-gradient(135deg, rgba(64,224,208,0.2), transparent 55%)
border: 1px solid rgba(124,237,227,0.18)
box-shadow: 0 24px 70px rgba(7,22,27,0.24)
text: white
```

#### Glass Sub-card (on dark backgrounds)
```css
background: rgba(255,255,255,0.05)
border: 1px solid rgba(255,255,255,0.10)
border-radius: 28px
```

### Icon Badges
```css
size: 44×44px (h-11 w-11) or 48×48px (h-12 w-12)
background: #EAF8F7 (sea-glass)
color: #129A92 (accent-teal)
border-radius: 16px (rounded-2xl)
```

### Eyebrow Labels
```css
font-family: IBM Plex Mono
font-size: 12px
font-weight: 500
letter-spacing: 0.08em
text-transform: uppercase
color: #16B8AE (deep-teal)
```
*On dark sections: override color to `#7CEDE3` (focus-ring)*

### Navigation
```css
header: sticky, bg rgba(247,252,252,0.82), backdrop-blur-xl
        border-b: 1px solid rgba(255,255,255,0.60)
nav-link: 14px / 500 / #334155
nav-link:hover: #129A92
logo wrapper: border #D5E7E6, bg rgba(255,255,255,0.80), shadow 0 12px 30px rgba(13,43,51,0.06)
              border-radius: 20px, padding: 8px
```

### Status Badges / Chips
```css
background: #D9F3F0 (aqua-wash)
color: #129A92 (accent-teal)
border-radius: 9999px
padding: 4px 12px
font: 12px / 500
```
*On dark: `bg rgba(255,255,255,0.10)`, `color rgba(255,255,255,0.70)`*

---

## Effects & Decoration

### Background Body Gradient
```css
radial-gradient(circle at top left, rgba(87,230,217,0.16), transparent 34%),
radial-gradient(circle at 85% 12%, rgba(64,224,208,0.12), transparent 22%),
linear-gradient(180deg, #F7FCFC 0%, #F2FBFA 100%)
```

### Aura Blobs (`.brand-aura`)
```css
position: absolute
border-radius: 9999px
filter: blur(18px)
opacity: 0.7
pointer-events: none
/* Color examples */
light sections: bg-[#57E6D9]/40 or bg-[#40E0D0]/25
dark sections:  bg-[#40E0D0]/20 or bg-[#57E6D9]/10
```

### Grid Overlay (`.brand-grid`)
```css
background-image:
  linear-gradient(rgba(213,231,230,0.6) 1px, transparent 1px),
  linear-gradient(90deg, rgba(213,231,230,0.6) 1px, transparent 1px)
background-size: 36px 36px
```
*On dark: swap line color to `rgba(124,237,227,0.08)`*

### Glass Outline (`.brand-outline`)
```css
position: absolute; inset: 0
border-radius: inherit
border: 1px solid rgba(255,255,255,0.44)
mask: linear-gradient(180deg, rgba(255,255,255,1), transparent 75%)
pointer-events: none
```
*Creates a subtle "frosted top edge" shimmer on cards.*

### Dark Section Radial Top
```css
position: absolute; inset-x: 0; top: 0; height: 6rem
background: radial-gradient(circle at top, rgba(87,230,217,0.24), transparent 70%)
```

### Teal Gradient Strip (chart/graph areas)
```css
background: linear-gradient(135deg,
  rgba(183,242,236,0.9),
  rgba(64,224,208,0.7),
  rgba(22,184,174,0.55))
border-radius: 22px
```

---

## Motion & Animation

### Entrance: `fade-in-up`
```css
from: opacity 0, translateY(28px)
to:   opacity 1, translateY(0)
duration: 0.9s
easing: cubic-bezier(0.2, 1, 0.2, 1)   /* spring-like */
delay variant: 0.14s
```

### Ambient: `soft-float`
```css
0%/100%: translate3d(0,0,0)
50%:     translate3d(0,-12px,0)
duration: 7s (8s with delay)
easing: ease-in-out
infinite
```

### Button hover transform
```css
transform: translateY(-1px)
transition: all 200ms
```

### Scroll behavior
```css
html { scroll-behavior: smooth }
```

---

## Layout Principles

1. **Asymmetric columns over equal splits.** Most two-column layouts use a `0.78/1.22` or `0.9/1.1` ratio — the content column is dominant, the label/descriptor column recedes.

2. **Dark section as visual anchor.** The Research section breaks the light-page rhythm with a full-bleed dark (`#21454D → #0D2B33`) band. Use sparingly — once per page — to create contrast and urgency.

3. **Progressive depth through nesting.** Cards nest inside panels inside sections. Each layer has a smaller border-radius and a more transparent surface, conveying visual hierarchy without heavy borders.

4. **Aura blobs are spatial, not decorative.** Place teal aura blobs at section entry points (top-left) and scroll endpoints (bottom-right) to guide the eye directionally down the page.

5. **Grid overlays signal data/tech.** Subtle grid patterns (`brand-grid`) on featured panels reinforce a "dashboard / data layer" aesthetic without being literal charts.

6. **Eyebrow → Heading → Body rhythm.** Every content block uses: monospace eyebrow label → large tracked-tight heading → smaller body paragraph. Never skip levels.

7. **CTAs at section end.** Each section closes with either a teal primary CTA or a dark CTA. Reserve the teal primary for the highest-priority action per section.

8. **RTL parity.** Every layout decision must work in Arabic RTL — flex directions, text alignment, and margin/padding logic must use logical properties or conditional `isArabic` overrides.

9. **Frosted glass nav.** The sticky header should always feel lighter than the content below it: `backdrop-blur-xl` + `bg-opacity ~82%` + white border creates the correct "floating above" effect.

10. **White space is signal.** Section padding (`py-24`) and generous card internal padding (`p-6` to `p-10`) give each content block room to breathe — do not compress these to fit more content.

---

## Logo Usage

| Variant | File | Use |
|---|---|---|
| Mark only | `tawjeeh-mark.png` | Header nav, favicon, dark card icon |
| Horizontal lockup | `tawjeeh-logo-light.png` | Footer, callout panels, marketing |

**Mark placement in header:** Wrap in `border border-[#D5E7E6] bg-white/80 p-2 rounded-[20px] shadow-[0_12px_30px_rgba(13,43,51,0.06)]` — this "floats" the mark on a soft white tile rather than bare on the nav bar.

**On dark surfaces:** The mark renders well at full opacity. Place inside a `bg-white/10 rounded-2xl p-2` chip to maintain legibility.

---

## Design Tokens Quick Reference

```css
/* Primaries */
--rawjeeh-teal:   #40E0D0
--bright-aqua:    #57E6D9
--deep-teal:      #16B8AE
--accent-teal:    #129A92

/* Darks */
--ink-black:      #0F1720
--petrol-ink:     #0D2B33
--ocean-slate:    #21454D
--slate-graphite: #334155
--muted-marine:   #6B7C85

/* Surfaces */
--pure-mist:      #F7FCFC
--cloud-white:    #FFFFFF
--sea-glass:      #EAF8F7
--aqua-wash:      #D9F3F0

/* Lines */
--cool-border:    #D5E7E6
--soft-line:      #E8F2F2
--focus-ring:     #7CEDE3

/* Radius base: 20px (--radius: 1.25rem) */
/* Max container: 1440px (.section-shell) */
```
