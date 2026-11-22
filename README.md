# hyper

All-in-one lean skill group for any CLI AI agent harness.

**Live benchmark site:** https://opencodepers.github.io/hyper/

## Skills

- **hyperlean** — 100x lean mode: caveman terse output + ponytail smallest-complete-change + yagni + complexity routing (S/M/L/XL) + scope contract + context/tool discipline + verification + better outputs + anti-slop + failure playbooks + security/data floor + verification matrix + debug/refactor/review protocols + think-smarter + shell discipline.
- **hyperslop** — slop detector + remover across code, UI, copy, architecture, output, websites (incl. 3D + performance). Catalogs 21 AI-slop design signs, 3D budgets, CWV, mobile tiers, a11y.
- **hypershell** — fast, small, correct PowerShell: filtering early, streaming, parallelization, measuring, output discipline, error handling, security, profiling.

## Install

One command (via GitHub):

```bash
npx github:opencodepers/hyper
```

Or target a specific harness / project:

```bash
npx github:opencodepers/hyper --harness=claude
npx github:opencodepers/hyper --project=/path/to/your/project
npx github:opencodepers/hyper --list
```

(Once published to npm, `npx hyper` will also work.)

Manual: copy each skill folder into your harness skills directory, e.g.:

- OpenCode: `~/.opencode/skills/<name>/SKILL.md`
- Claude Code: `~/.claude/skills/<name>/SKILL.md`
- Codex: `~/.codex/skills/<name>/SKILL.md`
- Gemini: `~/.gemini/skills/<name>/SKILL.md`

## Triggers

- hyperlean: `hyperlean`, `leanmax`, `cavetail`, `be lean`, `reduce tokens`, `10x`, `100x`, `yagni`, `terse`, `ultra-lean`, `caveman`, `ponytail`, `route`, `complexity`
- hyperslop: `hyperslop`, `deslop`, `anti-slop`, `slop check`, `clean slop`, `de-slop`, `slop audit`
- hypershell: `hypershell`, `powershell`, `pwsh`, `shell speed`, `faster powershell`

## Levels

`lite`, `full` (default), `ultra`.

## License

MIT.