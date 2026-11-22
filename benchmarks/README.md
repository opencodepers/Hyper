# Benchmarks: with vs without hyperlean

## PowerShell (measured)

Task: count `.md` files and sum their bytes in `~/.opencode`.

| Version | Approach | Time (ms) | Speedup |
|---------|----------|-----------|---------|
| Without hyper | Collect all files, client-side filter by extension, loop to sum | 824.05 | — |
| With hyper | `-Filter *.md` at source + `Measure-Object -Sum` | 253.09 | 3.26x |

Key lever: filter at the provider (`-Filter`) instead of collecting then filtering.

## UI (measured by file size)

| Version | Approach | Size (bytes) | Reduction |
|---------|----------|--------------|-----------|
| Without hyper (slop) | Gradient hero, glass cards, glow, badges, emoji, lorem, 3 CTAs, heavy CSS | 2067 | — |
| With hyper (lean) | One H1 + one line + one CTA + real screenshot + 3 bullets | 940 | 54.5% |

Key levers: remove decorative slop, one CTA, real content, minimal CSS.

## Websites (measured by file size)

Full self-contained landing pages (inline CSS/JS, no build step).

| Version | Approach | Size (bytes) | Reduction |
|---------|----------|--------------|-----------|
| Without hyper | Slop: gradient hero, glass cards, glow+grid, badges, emoji, lorem, 3 CTAs, heavy CSS, animations | 8823 | — |
| With hyper | Lean: one H1 + one line + one CTA + real screenshot + 3 bullets, minimal CSS, a11y, reduced-motion | 1633 | 81.5% |

Key levers: remove decorative slop, single CTA, real content, minimal CSS, accessibility, reduced-motion.

## Method

- PowerShell: `Measure-Command` over the same directory, 1 run each (warm-ish). Re-run for stable numbers.
- UI (single-file): raw byte size of self-contained HTML files. No build step.
- Websites: full landing pages, raw byte size.

## Files

- `ui-slop.html` / `ui-lean.html` — single-file micro versions.
- `websites/without/index.html` — full slop landing page.
- `websites/with/index.html` — full lean landing page.
- PowerShell scripts inline above (reproducible).