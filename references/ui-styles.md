# UI Styles Reference — Hyper (41 styles)

Full catalog (91 entries incl. patterns/practices): https://github.com/jacoblbagent/ui-design-styles

Detailed per-style files (50+ lines each) are in `references/styles/<slug>.md`. Each file contains: summary, traits, CSS, when to use, when to avoid, search terms, references.

Use one style deliberately. Mix one style + one pattern + one practice. Use Lucide icons, purposeful motion, tokens (no hardcoded values), contrast >=4.5:1, reduced-motion support.

## Styles

- [Skeuomorphism](styles/skeuomorphism.md) — real-world textures, shadows, gradients mimicking physical objects.
- [Flat design](styles/flat-design.md) — 2D, no shadows/gradients, solid colors, simple icons.
- [Material Design](styles/material-design.md) — paper metaphor, elevation, ripple, grid, bold color.
- [Material 3 (Material You)](styles/material-3.md) — dynamic color, tonal palettes, rounded 28px.
- [Swiss (International)](styles/swiss.md) — grid-based, asymmetric, strong type hierarchy.
- [Minimalism](styles/minimalism.md) — maximum whitespace, minimal elements, content-first.
- [Editorial](styles/editorial.md) — magazine-like, large serif, narrow column, drop caps.
- [Brutalist web](styles/brutalist-web.md) — raw, unstyled-feeling HTML, system fonts, high contrast.
- [Fluent Design](styles/fluent-design.md) — light, depth, motion, acrylic material, layered.
- [Neumorphism](styles/neumorphism.md) — soft UI, dual shadows, extrusion.
- [Claymorphism](styles/claymorphism.md) — puffy 3D, pastel, rounded.
- [Glassmorphism](styles/glassmorphism.md) — frosted glass, blur, transparency.
- [Liquid glass](styles/liquid-glass.md) — fluid organic glass, heavy blur.
- [Aurora / mesh gradients](styles/aurora-mesh.md) — blurred multi-color blobs.
- [Neo-brutalism](styles/neo-brutalism.md) — thick borders, hard offset shadow, saturated colors.
- [3D render illustration](styles/3d-render.md) — 3D objects, soft lighting, pastel.
- [Holographic / iridescent](styles/holographic.md) — rainbow shimmer, shifting colors.
- [Maximalism](styles/maximalism.md) — dense, layered, bold, more is more.
- [Memphis](styles/memphis.md) — geometric shapes, bright primaries, 80s patterns.
- [Vaporwave](styles/vaporwave.md) — retro-futuristic, neon pink/cyan, glitch.
- [Cyberpunk HUD](styles/cyberpunk-hud.md) — neon on dark, scanlines, monospace.
- [Y2K / Frutiger Aero](styles/y2k-frutiger-aero.md) — glossy, bubbly, chrome.
- [Retro-futurism](styles/retro-futurism.md) — 70s/80s sci-fi, chrome, neon.
- [Comic / pop art](styles/comic-pop-art.md) — bold outlines, halftone, primary colors.
- [Organic / hand-drawn](styles/organic-hand-drawn.md) — sketchy, wobbly, paper texture.
- [Kinetic typography](styles/kinetic-typography.md) — animated text as hero.
- [Luxury / premium](styles/luxury-premium.md) — whitespace, thin weights, serif, muted palette.
- [Playful chunky](styles/playful-chunky.md) — rounded, thick, friendly, bright.
- [Nordic](styles/nordic.md) — calm, muted, natural, airy.
- [Isometric / axonometric](styles/isometric.md) — 3D isometric illustrations.
- [Terminal / CLI](styles/terminal-cli.md) — monospace, character grid, dark bg.
- [Spatial / depth](styles/spatial-depth.md) — z-depth, parallax, 3D transforms.
- [Dark-first / OLED](styles/dark-first-oled.md) — true black, elevation via border.
- [Enterprise / B2B](styles/enterprise-b2b.md) — dense, small type, hairline dividers.
- [iOS (Human Interface)](styles/ios-hig.md) — SF Pro, rounded, translucency.
- [Art Deco](styles/art-deco.md) — geometric, gold/black, symmetrical.
- [Grunge / distressed](styles/grunge-distressed.md) — rough textures, torn edges, dark.
- [Corporate Memphis](styles/corporate-memphis.md) — flat vector characters, bright.
- [Pixel art / 8-bit](styles/pixel-art.md) — pixelated, blocky, retro.
- [Japanese web density](styles/japanese-web-density.md) — dense, info-rich, small type.
- [Anti-design / webcore](styles/anti-design-webcore.md) — chaotic, broken, clashing.

## Patterns (26) — screen shapes
Bento grid, Card-based UI, Data dashboard, Conversational UI, Gamified UI, Skeleton loading, Empty state, Marketing/hero landing, Onboarding/wizard, Feed/infinite scroll, Command palette, App navigation shell, Overlay layer, Form and validation, Data table/grid, Master-detail split view, Search and faceted results, Board/kanban, Pricing/plan comparison, Settings/preferences, Activity timeline, Gallery/lightbox, Checkout/cart funnel, Map explorer, Inbox/triage list, Threaded discussion.

## Practices (24) — disciplines
Accessibility-first, Token-driven system UI, Progressive disclosure, Motion-led micro-interaction, Zero-UI/ambient, Agentic/adaptive UI, Responsive/mobile-first, Content design/UX writing, Research-driven design, Design system/atomic composition, Dark patterns (avoid), Localization/RTL, Performance-first, Error resilience/recovery, Elevation as hierarchy, Sound and haptic feedback, Spatial interaction, Cinematic/media-first, Scroll-driven narrative, Immersive/3D-first, Brand-expression-first, Conversion-optimised, Attention-first, Joy-first.

## Usage rules
- Pick one style for a surface; don't mix signatures.
- Combine one style + one pattern + one practice (see catalog Combos).
- Always: Lucide icons (not glyphs), purposeful motion, tokens (no hardcoded values), contrast >=4.5:1, reduced-motion support.
- Test on mobile and dark mode.