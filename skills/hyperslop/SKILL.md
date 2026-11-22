---
name: hyperslop
description: >
  Slop detector + remover for the hyperlean group. Finds and fixes AI slop across
  code, UI, copy, architecture, output, AND websites (incl. 3D + performance).
  Catalogs 21 AI-slop design signs, 3D performance budgets, Core Web Vitals,
  mobile tiers, accessibility. Triggers: hyperslop, deslop, anti-slop, slop check,
  clean slop, de-slop, slop audit. Levels: lite, full (default), ultra.
argument-hint: "[lite|full|ultra]"
license: MIT
---

# Hyperslop — slop detector & remover (web + 3D + perf)

Slop = output that looks done but isn't. Hyperslop finds it and removes it. Part of the hyperlean group. Now includes website slop (21 signs), 3D/performance budgets, CWV, mobile tiers, a11y.

Active for whole session until "stop hyperslop" or "normal mode". Switch: `/hyperslop lite|full|ultra`.

## Core rules

- Slop is a bug. Treat findings as defects, not style.
- Evidence only: cite file:line or command output. No guessing.
- Delete > rewrite. Remove slop; don't decorate it.
- Never introduce new slop while fixing.
- Keep working code working: run tests/checks after removal.

## 0b. Color, contrast & brand identity

- Contrast: body text >=4.5:1, large text/icons >=3:1 against background. Check with a contrast tool.
- Palette: build tonal scales (50-950) + semantic roles (surface, text, border, accent, danger, success). Never raw hex in components.
- Brand identity: define mood, voice, color, type, motion in a brief before UI. Consistent across surfaces.
- Avoid low-contrast gray-on-white and gray-on-gray.
- Dark mode: rebalance surfaces (elevation via lightness), desaturate accents, keep contrast.
- One accent color; neutrals do the work.

## 0c. Icons with hover text (cleaner UI)

- Prefer icon-only controls with a text label revealed on hover/focus (tooltip). Reduces clutter, modern look.
- Always provide accessible name (aria-label) even when text is hover-only.
- Keep tooltips short; delay ~300ms; respect reduced-motion.
- Use Lucide icons; consistent size (16/20/24px) and stroke.

## 0a. Logo & icon design guidance (prevent slop)

- One icon set across the whole product (Lucide recommended). Never mix sets.
- Never use emoji/glyphs as icons or logos.
- Logo: simple, scalable, works in 1 color, readable at 16px. Avoid gradients/glow/neon.
- Icon sizes: use a fixed scale (16/20/24px). Consistent stroke width.
- Don't generate logos with AI defaults (purple gradients, glow, abstract blobs). Design with intent.
- Provide SVG + favicon + app icon variants. Test on light/dark backgrounds.
- Avoid over-detailed icons; simplify to essentials.

## 0. Icon & motion guidance (always)

- Icons: never use emoji/glyphs as icons. Use Lucide (or one consistent icon set) for best results. One set across the whole product.
- Motion: add purposeful animation to loading screens, state transitions, entrances, and feedback. Motion should clarify state, not decorate. Always respect `prefers-reduced-motion`. Keep durations ≤300ms for feedback. No decorative-only motion (pulsing dots, blinking cursors, bouncing buttons) unless it signals real state.

## 1. Slop taxonomy

### Code slop
- Hallucinated APIs/methods/imports not in installed versions.
- Invented config flags/env vars with no consumer.
- Placeholder bodies: `pass`, `TODO`, `...`, `throw new Error("not implemented")` in shipped paths.
- Fake/green tests: tautologies, over-mocking, never exercising code under test.
- Over-abstraction: interfaces with one impl, factories for one type, pass-through wrappers.
- Copy-paste duplication with slight (buggy) variations.
- Dead code: unused exports, unreachable branches, commented blocks.
- Swallowed errors: empty catch, log-then-continue.
- Magic numbers/strings reused without named constants.
- Wrong variable in copy-paste.

### UI slop (web)
- Default Inter + blue + gradient + glassmorphism with no reason.
- Placeholder lorem/avatars/logos left in.
- Missing states: no loading/empty/error/partial.
- Inaccessible: no focus, contrast <4.5:1, div-as-button.
- Missing responsive breakpoints; horizontal scroll on mobile.
- Mixed icon sets; inconsistent radius/shadow.
- Animation >300ms for feedback; motion without purpose.
- Hero with 3 CTAs clutter.

### Copy slop
- Buzzword salad: seamless, robust, cutting-edge, leverage, synergy.
- Vague labels: Submit, Click here, OK without context.
- Errors: "Something went wrong" with no recovery.
- Empty states: "No data" with no next action.
- Over-long microcopy; redundant helper text.
- Numbers written as words (scan for digits).

### Architecture slop
- Layers that don't enforce boundaries (UI→DB).
- Circular deps.
- God files >500 lines.
- Always-on/off feature flags (dead branches).
- Config for hypothetical future (YAGNI).
- Premature optimization without measurement.

### Security slop
- Missing input validation at boundaries.
- Secrets in code/logs/commits.
- Missing auth checks on protected routes.
- SQL injection / XSS / command injection / path traversal / SSRF.
- Overly broad CORS / missing CSRF.
- Vulnerable dependencies.
- Missing rate limits on public endpoints.
- PII in logs.

### Output/agent slop
- Restating request before answering.
- Narrating steps ("Let me...", "I'll now...").
- Hedging boilerplate.
- Inventing paths/APIs without verification.
- Claiming success without running checks.
- Over-long replies to simple questions.

## 2. AI website slop — 21 signs (paralect)

Each fine alone; several together = "nobody designed it."

1. Colored stripe on rounded cards (reserve for status).
2. Borders around every block (group with spacing/headings first).
3. Colored italic accent text (stress a word only when needed; ≤1/page).
4. All-caps eyebrow above every heading (drop unless real info).
5. Badges/dots that mean nothing (rare, single meaning for colors).
6. Monospace labels/inputs everywhere (code/numbers only).
7. Numbers written as words (use digits).
8. Long noun-heavy titles (short, verb-first, specific person).
9. Emoji as icons (one icon set or none).
10. Placeholders instead of real images (≥1 real image/page).
11. Overstuffed screens (remove elements with no user action).
12. Visual metaphors needing labels (show real product or one sentence).
13. Demos made of text (screenshot/video/GIF of one real task).
14. Glass cards (blur only over content; not static cards).
15. Same radius+shadow on everything (differentiate; most need no shadow).
16. Light gray text on white (contrast ≥4.5:1).
17. Decorative motion (animate only changes; allow pause).
18. Heavy appear animations on every block (show content immediately; ≤300ms; respect reduced-motion).
19. Unverifiable proof (real names/roles/photos/links or remove).
20. Purple gradients (colors fitting product; solid text).
21. Glow/neon/grid on dark (remove glow/grid; neon only focal point).

Anti-slop defaults: avoid Inter, purple gradients, emoji icons (per frontend-design). Make 1 memorable thing; rest simple. Real screenshots/photos/quotes. Agent critique before ship.

## 3. Good website principles (3D + performance)

### 3D performance budget (mobile hero)
| Item | Target |
|------|--------|
| Triangles (mobile hero) | ≤100k |
| Hero model compressed GLB | ≤2 MB |
| Textures | 1K-2K, KTX2 |
| Draw calls | ≤50 |
| First interaction (mid-range phone) | <3 s |
| 3D bundle | loaded after first paint |

### Compression
- glTF standard. Draco (geometry, dense meshes) or meshopt (fast decode).
- KTX2/Basis Universal for textures (stays compressed in GPU memory; prevents phone crashes).
- glTF-Transform: `inspect` before/after; `optimize --compress draco --texture-compress webp`; KTX2 commands need KTX-Software.
- Three.js: set DRACOLoader + KTX2Loader with detectSupport.

### Loading order
1. Server-render HTML (headline + CTA).
2. Poster image in fixed-aspect slot (no CLS).
3. Import 3D code when idle or slot in view.
4. Crossfade poster→canvas when first frame ready.
- `requestIdleCallback` or setTimeout fallback.
- GitHub globe pattern: SVG placeholder → crossfade canvas 600ms.

### Device tiers
- High: full scene, pixel ratio cap 2.
- Low: fewer particles, no post-processing, pixel ratio 1-1.5.
- Fallback: pre-rendered video loop or still (muted, playsinline for iOS autoplay).
- Runtime adaptive: GitHub degrades if <55.5 FPS over last 50 frames (lower pixel ratio, fewer raycasts, ~1/3 fewer dots).
- Log `renderer.info.render.calls` and `.triangles` vs budget.
- Respect `prefers-reduced-motion` → poster only.

### Core Web Vitals (good thresholds)
- LCP ≤2.5s, INP ≤200ms, CLS ≤0.1.
- Canvas/poster often LCP; shader compiles (50-300ms) and texture decodes (50-200ms) hurt INP → warm up shaders before interaction.
- Test on real mid-range phone, not desktop Lighthouse.
- Basic speed first; 3D on top of slow site doubles problem.

### 3D SEO
- Content in HTML; canvas is decoration.
- Server-render headline/CTA.

## 4. Detection protocol

1. Scope target (file/dir/PR/diff/page). If none, one concise question.
2. Route class (hyperlean S/M/L/XL) to size effort.
3. Run static checks: lint, typecheck, tests, dead-code tools.
4. Slop scan by category (code→UI→copy→arch→output→web slop→3D/perf).
5. Verify each candidate is actually slop (check callers/tests).
6. Report findings table: location, category, slop type, severity, evidence.
7. Fix priority: correctness > security > dead code > aesthetics > copy.

## 5. Slop scan patterns (grep/tools)

- `TODO|FIXME|XXX|HACK|placeholder|lorem|dummy|foo|bar` in non-test code
- `console.log|print(|debugger` left in
- `catch\s*\{\s*\}` empty catch
- `any` (TS) / empty interfaces
- Imports from non-existent paths (verify with tsc/eslint)
- Test files with no assertions or `expect(true).toBe(true)`
- Files >500 lines
- Duplicate blocks (jscpd)
- Unused exports (knip/ts-prune)
- Web: Inter+purple+gradient combo, emoji in UI, glassmorphism, glow/neon/grid
- 3D: GLB >2MB, triangles >100k mobile, textures >2K, draw calls >50, no poster, no fallback, no reduced-motion

## 6. Severity

- P0: broken (hallucinated API, fake test hiding bug, security slop, a11y fail) — fix now.
- P1: misleading (placeholder shipped, wrong copy, CWV fail) — fix before merge.
- P2: noise (dead code, over-abstraction) — fix when touching file.
- P3: cosmetic (aesthetic slop) — batch later.

## 7. Remediation rules

- Remove dead code completely (no _unused renames).
- Replace hallucinated API with real one or delete feature.
- Replace fake tests with real ones or delete; never weaken to pass.
- Collapse over-abstraction to concrete implementation.
- Replace placeholder content with real or remove section.
- Replace buzzword copy with specific, user-centered words.
- Add missing states only if on user path.
- Fix 3D: compress, reduce polycount, add poster+fallback+tiers.
- Fix perf: code-split, lazy load, image optimize, CWV.
- Keep change surgical.

## 8. Verification

- Re-run lint/typecheck/tests after removal. Must stay green.
- Confirm no new failures.
- Diff review: every deletion justified; no behavior change beyond slop removal.
- Web: Lighthouse/CWV check; a11y audit; responsive check.
- 3D: budget check (triangles, size, draw calls); mobile device test.

## 9. Output format

```
## Slop Report
Scope: <target>
Found: N (P0:x P1:y P2:z P3:w)

| # | Location | Category | Slop | Severity | Fix |
|---|----------|----------|------|----------|-----|

Removed: <list>
Remaining risk: <what>
```

## 10. Levels

| Level | Behavior |
|-------|----------|
| lite | Scan + report only. No edits. Top 5 findings. |
| full | Scan + fix P0/P1. Report all. Default. |
| ultra | Scan + fix all severities + add regression guards. Max terse. |

## 11. Integration with hyperlean

- Run hyperslop after any hyperlean change as final gate.
- Hyperlean anti-slop is prevention; hyperslop is cure.
- Share scope contract and verification.

## 12. UI styles catalog (91)

Reference: https://github.com/jacoblbagent/ui-design-styles (live: https://jacoblbagent.github.io/ui-design-styles/)

When building UI, pick ONE style deliberately and commit. Mixing styles without intent = slop. Use Lucide icons (not glyphs) and purposeful motion (loading/state/entrance/feedback; respect reduced-motion).

Styles (41 looks): Skeuomorphism, Flat design, Material Design, Material 3, Swiss, Minimalism, Editorial, Brutalist web, Fluent Design, Neumorphism, Claymorphism, Glassmorphism, Liquid glass, Aurora/mesh, Neo-brutalism, 3D render illustration, Holographic/iridescent, Maximalism, Memphis, Vaporwave, Cyberpunk HUD, Y2K/Frutiger Aero, Retro-futurism, Comic/pop art, Organic/hand-drawn, Kinetic typography, Luxury/premium, Playful chunky, Nordic, Isometric/axonometric, Terminal/CLI, Spatial/depth, Dark-first/OLED, Enterprise/B2B, iOS HIG, Art Deco, Grunge/distressed, Corporate Memphis, Pixel art/8-bit, Japanese web density, Anti-design/webcore.

Patterns (26 shapes): Bento grid, Card-based UI, Data dashboard, Conversational UI, Gamified UI, Skeleton loading, Empty state, Marketing/hero landing, Onboarding/wizard, Feed/infinite scroll, Command palette, App navigation shell, Overlay layer, Form and validation, Data table/grid, Master-detail split, Search/faceted results, Board/kanban, Pricing/plan comparison, Settings/preferences, Activity timeline, Gallery/lightbox, Checkout/cart funnel, Map explorer, Inbox/triage list, Threaded discussion.

Practices (24 disciplines): Accessibility-first, Token-driven system UI, Progressive disclosure, Motion-led micro-interaction, Zero-UI/ambient, Agentic/adaptive UI, Responsive/mobile-first, Content design/UX writing, Research-driven design, Design system/atomic composition, Dark patterns (avoid), Localization/RTL, Performance-first, Error resilience/recovery, Elevation as hierarchy, Sound/haptic feedback, Spatial interaction, Cinematic/media-first, Scroll-driven narrative, Immersive/3D-first, Brand-expression-first, Conversion-optimised, Attention-first, Joy-first.

Rule: a style is a look, a pattern is a screen shape, a practice is a discipline. Mix one style + one pattern + one practice deliberately (see Combos in the catalog). Never apply a style's signature (e.g. glass blur, neo-brutal shadow) to a different style's surface.

## 11. Slop showcase index (100+)

Full interactive catalog: https://opencodepers.github.io/hyper/showcases.html

When scanning, check against these (non-exhaustive):
Colored stripe on cards; borders around every block; colored italic accent; all-caps eyebrow; meaningless badges/dots; monospace labels; numbers as words; noun-heavy titles; emoji icons; placeholders; overstuffed screens; labeled metaphors; text demos; glass cards; same radius/shadow; low contrast; decorative motion; heavy appear animations; unverifiable proof; purple gradients; glow/neon/grid; hallucinated APIs; invented flags; placeholder bodies; fake tests; over-abstraction; copy-paste dup; dead code; swallowed errors; magic numbers; wrong variable; buzzword copy; vague labels; generic errors; empty states no action; over-long microcopy; lorem left in; fake avatars; mixed icons; inconsistent radius; missing loading/empty/error/partial states; no focus; contrast <4.5:1; div-as-button; no responsive breakpoints; horizontal scroll; animation >300ms; motion without purpose; hero with 3 CTAs; gradient text; default Inter+blue; glassmorphism; neon; grid bg; labeled metaphors; text demos; fake testimonials; round-number proof; initials as avatars; grey logo boxes; empty frames; overstuffed dashboards; AI insight banners; tip-of-day; checklists; quick-action clutter; floating stats; chips/extra buttons; banners on banners; noun-heavy headings; feature-list titles; numbers as words in CTAs; monospace everywhere; all-caps labels; eyebrows everywhere; badges everywhere; dots before labels; status colors reused; borders inside borders; boxes inside boxes; off-grid spacing; no spacing/type scale; ad-hoc sizes; hardcoded colors/spacing; missing semantic tokens; primitive-only tokens; token bloat; no alias tokens; no dark mode; no theming; no RTL; no i18n; truncation; overflow; no reduced-motion; no color-scheme; no print styles; no focus-visible; no skip link; no landmarks; no alt text; no form labels; no error assoc; no live regions.

## Footer (every reply)

`removed: <n> slop | remaining: <risk>` (or "clean").