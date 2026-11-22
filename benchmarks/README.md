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

## Method

- PowerShell: `Measure-Command` over the same directory, 1 run each (warm-ish). Re-run for stable numbers.
- UI: raw byte size of self-contained HTML files. No build step.

## Files

- `ui-slop.html` — verbose AI-slop version.
- `ui-lean.html` — lean version.
- PowerShell scripts inline above (reproducible).