# Design System Inspiration of Tawjeeh AI

## 1. Visual Theme & Atmosphere

Rawjeeh AI should feel like **precision intelligence in motion** — sleek, technical, and optimistic. Where the reference system leaned on monochrome enterprise restraint, this brand is defined by a sharp geometric mark paired with fluid teal energy. The identity lives between two visual forces:

- **Structured geometry** in the logo mark: angular, modular, architectural.
- **Liquid motion** in the brand background: flowing aqua waves, translucency, and gradient depth.

That combination creates a distinct personality: **futuristic but calm, advanced but accessible, engineered but not sterile**.

The interface should feel bright and minimal, using soft light surfaces to let the brand teal carry the identity. Color should be more present than in the Cohere reference, but still disciplined. Teal is the hero. Dark petrol tones are reserved for contrast moments, while misty aqua neutrals support surfaces, borders, and layered states.

The typography should reflect the logo wordmark: rounded, monoline, geometric, and slightly futuristic. The system should avoid overly humanist or editorial type choices. Instead, it should favor clean curves, open counters, and a technical rhythm that echoes the custom logo lettering.

**Key Characteristics:**
- Bright, airy canvas with cool aqua-tinted neutrals
- Signature brand teal drawn directly from the logo mark
- Geometric + fluid visual language: sharp icon, soft motion backgrounds
- Rounded-tech typography with clean engineering clarity
- Restrained gradient use based on aqua, seafoam, and deep petrol
- Dark surfaces only for emphasis, demos, and hero contrast areas
- Thin borders, low-shadow UI, and polished motion-oriented presentation

## 2. Color Palette & Roles

### Brand Core
- **Rawjeeh Teal** (`#40E0D0`): Primary brand color taken directly from the logo. Use for brand moments, key accents, selected states, and signature highlights.
- **Bright Aqua** (`#57E6D9`): A lighter, more luminous accent for hover, glow, and gradient lift.
- **Deep Teal** (`#16B8AE`): Darker brand anchor for pressed states, stronger buttons, and denser infographics.

### Dark Support
- **Petrol Ink** (`#0D2B33`): Primary dark tone for dark sections, high-contrast UI, and deep brand framing.
- **Ocean Slate** (`#21454D`): Secondary dark surface for layered dark cards and quiet contrast blocks.

### Surface & Background
- **Pure Mist** (`#F7FCFC`): Primary page background — cleaner than gray, subtly cooled by aqua.
- **Cloud White** (`#FFFFFF`): Main card and elevated surface background.
- **Sea Glass** (`#EAF8F7`): Soft tinted section background and secondary container fill.
- **Aqua Wash** (`#D9F3F0`): Subtle highlighted surface for callouts, badges, or feature emphasis.

### Text & Neutral Structure
- **Ink Black** (`#0F1720`): Primary headline and high-emphasis text.
- **Slate Graphite** (`#334155`): Standard body text — softer and more contemporary than pure black.
- **Muted Marine** (`#6B7C85`): Secondary text, descriptions, labels, and supporting metadata.
- **Cool Border** (`#D5E7E6`): Standard border color for cards, tables, and separators.
- **Soft Line** (`#E8F2F2`): Hairline dividers and low-emphasis containment.

### Interactive States
- **Action Teal** (`#22CFC1`): Primary interactive color for links, active controls, toggles, and hover emphasis.
- **Action Deep** (`#129A92`): Hover/pressed state for teal actions.
- **Focus Ring** (`#7CEDE3`): Keyboard focus ring and accessible emphasis on light or dark surfaces.

### Gradient System
- **Signature Flow Gradient**: `#B7F2EC → #40E0D0 → #16B8AE`
  - Use for hero bands, abstract backgrounds, loading moments, or feature highlights.
- **Deep Tech Gradient**: `#21454D → #0D2B33`
  - Use for dark sections, product showcase areas, and footer transitions.
- **Aqua Atmosphere Gradient**: `#F7FCFC → #D9F3F0`
  - Use for subtle section transitions and soft panel backgrounds.

### Color Rules
- Teal should be the unmistakable brand signal, but not flood every component.
- Use **Rawjeeh Teal** for primary accent moments, not for large body text.
- Reserve saturated teal fills for CTAs, active states, charts, and select highlights.
- Keep most reading surfaces light, clean, and low-noise.
- Use **Petrol Ink** only where contrast or depth is needed — hero panels, product sections, footer, and dark UI.
- Prefer aqua-tinted neutrals over generic gray to preserve brand cohesion.
- Gradients should feel fluid and atmospheric, never rainbow-like or overly glossy.
- Do not introduce warm accent colors unless they serve data visualization or semantic status.

## 3. Typography Rules

### Font Family
- **Logo / Wordmark**: Custom Rawjeeh AI logotype — reserved for the logo lockup and brand marks only.
- **Display / Heading**: `Sora`, with fallbacks: `Inter, ui-sans-serif, system-ui`
- **Body / UI**: `Inter`, with fallbacks: `Arial, ui-sans-serif, system-ui`
- **Technical / Labels / Code**: `IBM Plex Mono`, with fallbacks: `ui-monospace, SFMono-Regular, Menlo, monospace`

### Rationale
The logo lettering is rounded, futuristic, and monoline. Rather than forcing a similar novelty font across the entire product, the system should translate that feeling into a scalable UI language:
- **Sora** carries the rounded-tech personality needed for headings.
- **Inter** keeps product text highly legible and neutral.
- **IBM Plex Mono** adds technical credibility for labels, specs, and code-like moments.

The custom wordmark should remain exclusive to branding, navigation lockups, launch screens, and high-visibility identity moments — not repeated as a general-purpose UI font.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero XL | Sora | 72px (4.5rem) | 600 | 0.98 | -1.6px | Brand-forward hero moments with strong geometric presence |
| Display / Hero | Sora | 60px (3.75rem) | 600 | 1.00 | -1.2px | Primary section statements |
| Display Secondary | Sora | 48px (3rem) | 600 | 1.05 | -0.8px | Large section headings |
| Section Heading | Sora | 36px (2.25rem) | 600 | 1.10 | -0.5px | Feature sections, major cards |
| Sub-heading | Sora | 28px (1.75rem) | 500 | 1.15 | -0.3px | Card titles, product highlights |
| Feature Title | Sora | 22px (1.375rem) | 500 | 1.25 | -0.1px | Mid-level headings and content blocks |
| Body Large | Inter | 18px (1.125rem) | 400 | 1.55 | normal | Intro copy and lead paragraphs |
| Body / UI | Inter | 16px (1rem) | 400 | 1.50 | normal | Standard body, forms, nav, buttons |
| UI Compact | Inter | 14px (0.875rem) | 500 | 1.45 | normal | Dense controls, tabs, metadata |
| Caption | Inter | 13px (0.8125rem) | 400 | 1.40 | normal | Supportive labels and helper text |
| Uppercase Label | IBM Plex Mono | 12px (0.75rem) | 500 | 1.35 | 0.8px | Technical markers, section tags, eyebrow labels |
| Small | Inter | 12px (0.75rem) | 400 | 1.40 | normal | Fine print and compact UI |
| Code Micro | IBM Plex Mono | 11px (0.6875rem) | 400 | 1.40 | 0.4px | Token labels, coordinates, status strings |

### Typography Scale Rules
- **Rounded-tech hierarchy**: Headings should feel clean, intelligent, and geometric — not editorial, calligraphic, or overly playful.
- **Heavier at display sizes**: Use `Sora` at 600 for hero and section titles to echo the confidence of the angular mark.
- **Tight tracking at scale**: Large headings should use modest negative tracking to create a compact, engineered look.
- **Neutral body rhythm**: Keep body copy in `Inter` at 400 for clarity and product readability.
- **Selective medium weight**: Use 500 only where hierarchy or emphasis is needed in smaller UI.
- **Monospace for system cues**: `IBM Plex Mono` should be reserved for tags, labels, code fragments, telemetry, or feature taxonomy.
- **Avoid decorative all-caps headings**: The logo already provides brand expression; the UI should stay crisp and controlled.
- **Preserve openness in paragraphs**: Heading density is welcome, but body text should stay comfortable and highly readable.

## 4. Component Stylings

### Buttons

**Primary Brand Button**
- Background: Rawjeeh Teal (`#40E0D0`)
- Text: Petrol Ink (`#0D2B33`)
- Hover: Action Teal (`#22CFC1`)
- Pressed: Action Deep (`#129A92`)
- Radius: 9999px or 16px depending on component family
- Tone: bright, intelligent, clean

**Ghost / Transparent**
- Background: transparent
- Text: Ink Black (`#0F1720`)
- Border: none or `1px solid transparent`
- Hover: text shifts to Action Deep (`#129A92`) or gains Sea Glass background
- Focus: 2px outline in Focus Ring (`#7CEDE3`)

**Dark Solid**
- Background: Petrol Ink (`#0D2B33`)
- Text: Cloud White (`#FFFFFF`)
- Used on light surfaces where a stronger CTA anchor is needed

### Cards & Containers
- Background: Cloud White (`#FFFFFF`)
- Border: `1px solid #D5E7E6`
- Radius: 20px for primary cards, 14px for secondary cards, 10px for compact inputs
- Shadow: minimal, soft, and rare — use subtle elevation only where separation is unclear
- Alternate surfaces: Sea Glass (`#EAF8F7`) and Aqua Wash (`#D9F3F0`) for emphasis panels

### Inputs & Forms
- Background: white or Pure Mist (`#F7FCFC`)
- Text: Ink Black (`#0F1720`)
- Border: Cool Border (`#D5E7E6`)
- Focus border: Action Teal (`#22CFC1`)
- Focus ring: `0 0 0 3px #7CEDE3`
- Error states should use standard semantic red, not teal

### Navigation
- Clean horizontal navigation on light background
- Logo: custom Rawjeeh AI mark + wordmark
- Links: Inter 16px with Slate Graphite (`#334155`)
- Active/hover states: Action Deep (`#129A92`)
- CTA: primary teal button or dark petrol button depending on page contrast

### Image Treatment
- Use fluid aqua backgrounds derived from the provided brand artwork
- Combine geometric UI cards with motion-rich backdrop sections
- Product screenshots should sit on white or petrol surfaces, never on noisy gradients without containment
- Favor clean masks and generous border radii over heavy framing

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px
- Card padding: 24–32px
- Section spacing: 64–96px on desktop, 40–56px on mobile

### Grid & Container
- Max container width: 1440px for content-heavy pages
- Hero sections may extend wider through background imagery and gradients
- Layout should balance clean structure with moments of atmospheric motion

### Whitespace Philosophy
- Keep the product feeling premium through spacious, disciplined layouts.
- Let color and form do the brand work; avoid decorative clutter.
- Use gradient and motion backgrounds sparingly so the logo color remains special.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, light surface | Backgrounds, text areas, simple content |
| Bordered (Level 1) | `1px solid #D5E7E6` | Cards, tables, grouped modules |
| Soft Elevation (Level 2) | Minimal shadow + white surface | Sticky bars, modal cards, raised actions |
| Dark Contrast (Level 3) | Petrol Ink background | Hero callouts, showcase sections, footer |

**Shadow Philosophy**: Rawjeeh AI should still be largely low-shadow. Depth comes first from **surface contrast**, **border clarity**, and **brand color layering**. Shadows are allowed, but only as subtle support.

## 7. Do's and Don'ts

### Do
- Use Rawjeeh Teal (`#40E0D0`) as the unmistakable signature accent
- Pair clean light surfaces with aqua-tinted neutrals instead of generic gray
- Use Sora for headings and Inter for body/UI copy
- Keep the logo font exclusive to branding moments
- Use fluid aqua gradients for hero or brand atmosphere sections
- Let dark petrol sections create contrast and sophistication
- Use IBM Plex Mono for technical labels, tags, and code moments

### Don't
- Don't overuse saturated teal as a background for large reading areas
- Don't introduce unrelated warm accents into the main brand system
- Don't use novelty sci-fi fonts for body text or UI controls
- Don't rely on heavy shadows or glassmorphism for depth
- Don't set long paragraphs in the display font
- Don't turn every section into a gradient — reserve motion backgrounds for emphasis

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <425px | Compact spacing, reduced hero scale |
| Mobile | 425–640px | Single-column layout, stacked cards |
| Tablet | 768–1024px | Two-column sections begin |
| Desktop | 1024–1440px | Full layout and standard spacing |
| Large Desktop | 1440px+ | Wider containers, more generous whitespace |

### Scaling Rules
- Hero text: 72px → 56px → 40px → 32px
- Section headings: 48px → 36px → 28px
- Body remains 16px on most breakpoints; reduce only in dense UI
- Maintain generous spacing around brand imagery so the logo and wave backgrounds do not feel cramped

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Brand: "Rawjeeh Teal (#40E0D0)"
- Primary Background: "Pure Mist (#F7FCFC)"
- Main Surface: "Cloud White (#FFFFFF)"
- Primary Text: "Ink Black (#0F1720)"
- Body Text: "Slate Graphite (#334155)"
- Secondary Text: "Muted Marine (#6B7C85)"
- Border: "Cool Border (#D5E7E6)"
- Dark Section: "Petrol Ink (#0D2B33)"
- Interactive Accent: "Action Teal (#22CFC1)"

### Example Component Prompts
- "Create a hero section on Pure Mist (#F7FCFC) with Sora at 72px weight 600, line-height 0.98, letter-spacing -1.6px. Use Ink Black for the headline and Muted Marine for supporting copy. Add a subtle aqua atmosphere gradient in the background."
- "Design a feature card with 20px border-radius, 1px solid Cool Border (#D5E7E6), white background, title in Sora 28px weight 500, and body in Inter 16px Slate Graphite."
- "Build a primary CTA button with Rawjeeh Teal (#40E0D0) fill, Petrol Ink text, pill radius, hover state in Action Teal (#22CFC1), and a 3px Focus Ring (#7CEDE3)."
- "Create a dark showcase section with a Deep Tech Gradient (#21454D to #0D2B33), white text, and a contained product screenshot on a white card."
- "Design a technical eyebrow label in IBM Plex Mono at 12px uppercase with 0.8px letter-spacing using Muted Marine."

### Iteration Guide
1. Start from the logo: geometric icon + fluid aqua atmosphere
2. Use Rawjeeh Teal as the brand signal, not as visual noise
3. Specify Sora for headings, Inter for body, IBM Plex Mono for technical cues
4. Keep most surfaces light and crisp
5. Use dark petrol only where contrast and drama are needed
6. Reserve gradients for emphasis, not default layout filling
