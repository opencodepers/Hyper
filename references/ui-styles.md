# UI Styles Reference — Hyper

Detailed traits for key styles. Full catalog of 91 styles/patterns/practices: https://github.com/jacoblbagent/ui-design-styles

Use one style deliberately. Mix one style + one pattern + one practice. Use Lucide icons, purposeful motion, no hardcoded values (tokens).

## Neo-brutalism

Traits:
- Thick borders: 3-5px solid #0A0A0A (or theme text color).
- Hard offset shadow, zero blur: box-shadow: 4px 4px 0 #000 (or 5px 5px 0, 8px 8px 0).
- High contrast, saturated colors (yellow, pink, blue, green) on white/black.
- Bold geometric sans-serif; oversized headings.
- Flat surfaces, no gradients, no soft shadows, no blur.
- Sharp corners (0-4px radius) or deliberately chunky.
- Exposed box model: borders declare structure.

CSS:
```css
.neo { border:3px solid #0A0A0A; box-shadow:4px 4px 0 #0A0A0A; border-radius:4px; background:#FFD600; color:#0A0A0A; font-weight:700; }
.neo:hover { transform:translate(2px,2px); box-shadow:2px 2px 0 #0A0A0A; }
```
Avoid: soft shadows, excessive rounding, gradients, pastel mush. Commit fully or not at all.

## Brutalist web

Traits:
- Raw, unstyled-feeling HTML. System fonts, default underlines.
- High contrast black/white, monospace accents.
- Exposed structure, no decoration, asymmetric layouts.
- Intentionally "ugly" but functional.

## Glassmorphism

Traits:
- Frosted glass: backdrop-filter: blur(18px) saturate(160%).
- Semi-transparent white surface: background: rgba(255,255,255,.15).
- Thin light border: 1px solid rgba(255,255,255,.25).
- Soft shadow for depth.
- Works over colorful/gradient backgrounds.
Avoid: overuse on static cards (low contrast, slows page).

## Neumorphism

Traits:
- Soft UI: background matches surface; shadows create extrusion.
- box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f0f8ff.
- Subtle, low contrast; accessibility risk.
Avoid: text contrast; prefer for decorative surfaces only.

## Claymorphism

Traits:
- Soft, puffy 3D: inner + outer shadows, rounded corners (20-30px).
- Pastel colors, fluffy feel.
- box-shadow: inset 0 -4px 8px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1).

## Aurora / mesh gradients

Traits:
- Blurred multi-color gradient blobs behind content.
- filter: blur(60px); animated subtly.
- High saturation, dark or light base.
Avoid: overuse; can hurt performance/CLS.

## Minimalism

Traits:
- Maximum whitespace, minimal elements.
- Monochrome or one accent. Clean sans-serif.
- Hairline borders, no shadows, no decoration.
- Content-first; remove until it breaks.

## Swiss (International)

Traits:
- Grid-based, asymmetric layouts. Helvetica/neo-grotesque.
- Strong typography hierarchy, generous whitespace.
- Limited color palette, often red accent on white.
- Objective, clean, functional.

## Editorial

Traits:
- Magazine-like: large serif display, narrow reading column.
- Drop caps, pull quotes, wide margins.
- Serif display + humanist body. OpenType features.
- Low density, long-form.

## Terminal / CLI

Traits:
- Monospace, character grid, reverse video.
- 16-color palette, dark background.
- Blinking cursor, box-drawing characters.
- No rounded corners; raw.

## Luxury / premium

Traits:
- Generous whitespace, thin weights, serif display.
- Muted palette (black, cream, gold). High-quality imagery.
- Slow, subtle motion. Restraint.

## Usage rules

- Pick one style for a surface; don't mix signatures.
- Combine one style + one pattern + one practice (see catalog Combos).
- Always: Lucide icons (not glyphs), purposeful motion, tokens (no hardcoded values), contrast >=4.5:1, reduced-motion support.
- Test on mobile and dark mode.