# UI Styles Reference — Hyper (41 styles)

Full catalog (91 entries incl. patterns/practices): https://github.com/jacoblbagent/ui-design-styles

Use one style deliberately. Mix one style + one pattern + one practice. Use Lucide icons, purposeful motion, tokens (no hardcoded values), contrast >=4.5:1, reduced-motion support.

---

## Skeuomorphism
Traits: real-world textures, shadows, gradients mimicking physical objects. Glossy buttons, leather/wood textures. High fidelity.
CSS: `background: linear-gradient(#eee,#ccc); box-shadow: 0 2px 4px rgba(0,0,0,.3); border-radius: 8px;`
Avoid: over-decoration; dated look.

## Flat design
Traits: no shadows, no gradients, solid colors, simple icons, clean typography. 2D. Minimal.
CSS: `background: #fff; color: #111; border: none; box-shadow: none;`
Avoid: no affordance cues.

## Material Design
Traits: paper metaphor, elevation via shadows, ripple feedback, grid, bold color, Roboto.
CSS: `box-shadow: 0 2px 4px rgba(0,0,0,.2); border-radius: 4px;`
Avoid: overuse of elevation.

## Material 3 (Material You)
Traits: dynamic color from wallpaper, tonal palettes, rounded (28px), personalization.
CSS: `border-radius: 28px; background: var(--md-sys-color-primary-container);`

## Swiss (International)
Traits: grid-based, asymmetric, Helvetica/neo-grotesque, strong type hierarchy, generous whitespace, limited palette (often red accent).
CSS: `font-family: Helvetica, Arial, sans-serif; display: grid; gap: 24px;`

## Minimalism
Traits: maximum whitespace, minimal elements, monochrome or one accent, clean sans, hairline borders, no shadows.
CSS: `padding: 48px; color: #111; border: 1px solid #eee;`

## Editorial
Traits: magazine-like, large serif display, narrow reading column, drop caps, pull quotes, wide margins.
CSS: `font-family: 'Fraunces', serif; max-width: 65ch;`

## Brutalist web
Traits: raw, unstyled-feeling HTML, system fonts, default underlines, high contrast B/W, asymmetric, exposed structure.
CSS: `font-family: system-ui; text-decoration: underline;`

## Fluent Design
Traits: light, depth, motion, material (acrylic), reveal highlight, layered.
CSS: `backdrop-filter: blur(30px); background: rgba(255,255,255,.7);`

## Neumorphism
Traits: soft UI, background matches surface, dual shadows (light+dark) create extrusion. Low contrast.
CSS: `box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f0f8ff; border-radius: 12px;`
Avoid: text contrast; decorative only.

## Claymorphism
Traits: soft puffy 3D, inner+outer shadows, rounded (20-30px), pastel colors.
CSS: `border-radius: 24px; box-shadow: inset 0 -4px 8px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1);`

## Glassmorphism
Traits: frosted glass, backdrop-filter blur, semi-transparent white, thin light border, soft shadow.
CSS: `backdrop-filter: blur(18px) saturate(160%); background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25);`
Avoid: overuse on static cards.

## Liquid glass
Traits: fluid, organic glass surfaces, heavy blur, flowing shapes, Apple-style.
CSS: `backdrop-filter: blur(40px) saturate(180%); border-radius: 999px;`

## Aurora / mesh gradients
Traits: blurred multi-color gradient blobs behind content, animated subtly.
CSS: `background: radial-gradient(...); filter: blur(60px);`

## Neo-brutalism
Traits: thick borders (3-5px solid), hard offset shadow zero blur (4px 4px 0), high contrast saturated colors, bold geometric sans, sharp corners.
CSS: `border:3px solid #0A0A0A; box-shadow:4px 4px 0 #0A0A0A; border-radius:4px;`
Avoid: soft shadows, excessive rounding, gradients.

## 3D render illustration
Traits: 3D rendered objects, soft lighting, pastel backgrounds, depth.
CSS: use 3D model/image; subtle parallax.

## Holographic / iridescent
Traits: rainbow shimmer, shifting colors, metallic sheen, blur.
CSS: `background: linear-gradient(135deg,#ff0080,#7928ca,#ff0080); background-size: 200% 200%; animation: shift 4s;`

## Maximalism
Traits: dense, layered, bold colors, mixed patterns, more is more.
CSS: `background: #000; color: #ff0; font-weight: 900;`

## Memphis
Traits: geometric shapes, bright primary colors, patterns (dots, zigzags), playful 80s.
CSS: `background: repeating-linear-gradient(45deg,#ff0,#ff0 10px,#000 10px,#000 20px);`

## Vaporwave
Traits: retro-futuristic, neon pink/cyan, glitch, VHS, 80s/90s nostalgia.
CSS: `color: #ff71ce; text-shadow: 2px 2px #01cdfe;`

## Cyberpunk HUD
Traits: neon on dark, scanlines, glitch, monospace, tech UI, high contrast.
CSS: `background:#0a0a0f; color:#00ff9f; text-shadow:0 0 8px #00ff9f;`

## Y2K / Frutiger Aero
Traits: glossy, bubbly, bright, skeuomorphic buttons, gradients, chrome.
CSS: `background: linear-gradient(#fff,#c0c0c0); border-radius: 12px; box-shadow: inset 0 1px 0 #fff;`

## Retro-futurism
Traits: 70s/80s sci-fi, chrome, neon, grid lines, synthwave.
CSS: `background: linear-gradient(#000,#1a0033); color:#ff00ff;`

## Comic / pop art
Traits: bold outlines, halftone dots, primary colors, speech bubbles.
CSS: `border: 3px solid #000; box-shadow: 4px 4px 0 #000;`

## Organic / hand-drawn
Traits: sketchy, wobbly lines, hand-drawn icons, paper texture, warm.
CSS: `border: 2px dashed #333; font-family: 'Caveat', cursive;`

## Kinetic typography
Traits: animated text, large type as hero, motion-driven.
CSS: `animation: slide 1s; font-size: 120px; font-weight: 900;`

## Luxury / premium
Traits: generous whitespace, thin weights, serif display, muted palette (black, cream, gold), high-quality imagery, slow subtle motion.
CSS: `font-family: 'Cormorant', serif; color: #1a1a1a; letter-spacing: .05em;`

## Playful chunky
Traits: rounded, thick, friendly, bright, toy-like.
CSS: `border-radius: 24px; font-weight: 800; background: #ffcc00;`

## Nordic
Traits: calm, muted, natural, light wood, soft grays, airy.
CSS: `background: #f5f3f0; color: #2d2d2d;`

## Isometric / axonometric
Traits: 3D isometric illustrations, grid-aligned, technical.
CSS: `transform: rotateX(60deg) rotateZ(-45deg);`

## Terminal / CLI
Traits: monospace, character grid, reverse video, 16-color palette, dark bg, blinking cursor.
CSS: `font-family: monospace; background: #000; color: #0f0;`

## Spatial / depth
Traits: z-depth, layered planes, parallax, 3D transforms.
CSS: `transform: translateZ(20px); perspective: 1000px;`

## Dark-first / OLED
Traits: true black (#000), elevation via border, desaturated hues, OLED-friendly.
CSS: `background: #000; color: #e5e5e5; border: 1px solid #222;`

## Enterprise / B2B
Traits: dense, 28-36px rows, 4px radii, hairline dividers, muted palette, data-first.
CSS: `font-size: 13px; border: 1px solid #e5e5e5; border-radius: 4px;`

## iOS (Human Interface)
Traits: SF Pro, rounded, translucency, large titles, haptics, safe areas.
CSS: `font-family: -apple-system, sans-serif; border-radius: 12px;`

## Art Deco
Traits: geometric, gold/black, symmetrical, decorative lines, 1920s.
CSS: `color: #d4af37; border: 1px solid #d4af37; letter-spacing: .2em;`

## Grunge / distressed
Traits: rough textures, torn edges, dark, chaotic.
CSS: `filter: contrast(1.2); background: url(texture.png);`

## Corporate Memphis
Traits: flat vector characters, bright colors, friendly, generic.
CSS: `/* flat illustration style */`

## Pixel art / 8-bit
Traits: pixelated, blocky, retro game aesthetic.
CSS: `image-rendering: pixelated; font-family: 'Press Start 2P';`

## Japanese web density
Traits: dense, information-rich, small type, many links, compact.
CSS: `font-size: 12px; line-height: 1.4; padding: 4px;`

## Anti-design / webcore
Traits: deliberately chaotic, broken layouts, clashing colors, raw.
CSS: `transform: rotate(3deg); color: #ff00ff; background: #00ff00;`

---

## Patterns (26) — screen shapes
Bento grid, Card-based UI, Data dashboard, Conversational UI, Gamified UI, Skeleton loading, Empty state, Marketing/hero landing, Onboarding/wizard, Feed/infinite scroll, Command palette, App navigation shell, Overlay layer, Form and validation, Data table/grid, Master-detail split view, Search and faceted results, Board/kanban, Pricing/plan comparison, Settings/preferences, Activity timeline, Gallery/lightbox, Checkout/cart funnel, Map explorer, Inbox/triage list, Threaded discussion.

## Practices (24) — disciplines
Accessibility-first, Token-driven system UI, Progressive disclosure, Motion-led micro-interaction, Zero-UI/ambient, Agentic/adaptive UI, Responsive/mobile-first, Content design/UX writing, Research-driven design, Design system/atomic composition, Dark patterns (avoid), Localization/RTL, Performance-first, Error resilience/recovery, Elevation as hierarchy, Sound and haptic feedback, Spatial interaction, Cinematic/media-first, Scroll-driven narrative, Immersive/3D-first, Brand-expression-first, Conversion-optimised, Attention-first, Joy-first.

## Usage rules
- Pick one style for a surface; don't mix signatures.
- Combine one style + one pattern + one practice (see catalog Combos).
- Always: Lucide icons (not glyphs), purposeful motion, tokens (no hardcoded values), contrast >=4.5:1, reduced-motion support.
- Test on mobile and dark mode.