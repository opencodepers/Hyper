---
name: hypershell
description: >
  PowerShell mastery for the hyperlean group: fast, small, correct commands. Covers
  performance (Measure-Command, parallelization, streaming), memory efficiency,
  error handling, pipeline discipline, modules, remoting, security, profiling,
  and taking less time overall. Triggers: hypershell, powershell, pwsh, shell
  speed, faster powershell. Levels: lite, full (default), ultra.
argument-hint: "[lite|full|ultra]"
license: MIT
---

# Hypershell — fast, small, correct PowerShell

Part of the hyperlean group. Goal: get the answer with the least time, tokens, and risk. PowerShell done right: streaming, filtering early, parallel where safe, no giant dumps.

Active for whole session until "stop hypershell" or "normal mode". Switch: `/hypershell lite|full|ultra`.

## Core rules

- Filter at the source, not after. `Get-ChildItem -Filter` beats `| Where-Object`.
- Stream, don't collect: process in pipeline; avoid `$all = ...; foreach`.
- Limit output: `-First`, `-Top`, `Select-Object -First N`.
- Measure before optimizing: `Measure-Command`.
- Never run destructive without `-WhatIf`/`-Confirm` first.
- Quote paths; use `-LiteralPath` for literal paths.
- Prefer native cmdlets over shelling out; shell out only when needed.
- Cache expensive calls in variables; don't re-query.
- Parallel only for independent, CPU/IO-bound work.

## 1. Performance fundamentals

### Filtering early
- `Get-ChildItem -Path X -Filter *.log -Recurse` (provider filter, fast).
- `Get-Process | Where-Object CPU -gt 10` (client filter, slower but flexible).
- `Get-ADUser -Filter "Enabled -eq 'True'"` (server-side filter, fastest).
- Avoid `| Where-Object { $_.Name -like '*foo*' }` when `-Filter`/`-Name` exists.

### Selecting early
- `Select-Object -First 20` stops pipeline early (mostly).
- `Select-Object -Property Name,Id` reduces object size.
- `Select-Object -ExpandProperty Name` for scalar arrays.

### Avoiding collection
- Bad: `$files = Get-ChildItem -Recurse; foreach ($f in $files) { ... }`
- Good: `Get-ChildItem -Recurse | ForEach-Object { ... }`
- Use `ForEach-Object -Parallel` (PS 7+) for CPU work.

### Streaming large files
- `Get-Content -Path big.log -ReadCount 1000` (chunked).
- `[System.IO.StreamReader]` for huge files.
- `Select-String -Path *.log -Pattern 'error'` streams; don't `Get-Content | Select-String` if avoidable.

### Memory
- Dispose IDisposable: `using ($r = [System.IO.StreamReader]::new($p)) { ... }`.
- Clear large variables: `$big = $null; [GC]::Collect()` (rarely needed).
- Avoid storing entire output; aggregate incrementally.

## 2. Parallelization

### ForEach-Object -Parallel (PS7+)
```powershell
1..100 | ForEach-Object -Parallel {
    # $_ available; use $using: for outer vars
    Start-Sleep -Milliseconds 10
} -ThrottleLimit 8
```
- Default throttle 5. Tune to CPU cores for CPU-bound; higher for IO-bound.
- `$using:` to pass variables. Objects must be serializable (no live handles).
- Overhead: only worth it for >~50 items or >~10ms each.

### Start-Job / RunspacePool
- `Start-Job` for isolation (heavy, slow startup). Use for long independent tasks.
- RunspacePool for many lightweight parallel tasks (lower overhead than jobs).
- `Invoke-Command -ComputerName` for remote parallel.

### When NOT to parallelize
- Shared state/mutation.
- Order-dependent output.
- Single fast operation (overhead > gain).

## 3. Measuring

```powershell
Measure-Command { Get-ChildItem -Recurse } | Select-Object TotalMilliseconds
```
- Compare alternatives with same input.
- `[System.Diagnostics.Stopwatch]::StartNew()` for in-script timing.
- Profile with `Measure-Script` or `Trace-Command` for cmdlet binding.

## 4. Output discipline (less tokens/time)

- `-First N`, `-Skip`, `-Last`.
- `-ExpandProperty` to avoid property wrappers.
- Format only at end: `| Format-Table -AutoSize` (don't pipe formatted objects further).
- `Out-String -Width 200` to avoid truncation when needed.
- Suppress noise: `| Out-Null`, `$null = ...`, `[void]`.
- Use `-ErrorAction Stop` with try/catch instead of checking `$?`.
- Avoid `Write-Host` in reusable functions; use `Write-Output`/`Write-Verbose`.

## 5. Error handling

- Set `$ErrorActionPreference = 'Stop'` in scripts for fail-fast.
- `try { ... } catch { ... } finally { ... }`.
- Catch specific: `catch [System.IO.FileNotFoundException] { }`.
- `$LASTEXITCODE` for native commands; check after.
- `-ErrorAction` per cmdlet: `SilentlyContinue`, `Stop`, `Continue`, `Inquire`.
- Don't swallow errors silently; log or rethrow.
- `throw` with context: `throw "Failed to read $path : $_"`.

## 6. Pipeline & object discipline

- One object type per pipeline when possible.
- `ForEach-Object` vs `%` alias: use full name in scripts.
- `Where-Object` simple syntax: `Where-Object Name -eq 'x'` (PS4+).
- Avoid `$_` deep nesting; extract to named variable.
- Use `&` call operator for dynamic commands.
- Splatting for long parameter lists:
```powershell
$params = @{ Path = $p; Recurse = $true; Filter = '*.log' }
Get-ChildItem @params
```

## 7. Modules & discovery

- `Get-Command -Module X`, `Get-Command -Verb Get -Noun *User*`.
- `Get-Help Get-ChildItem -Examples`.
- `Find-Module`/`Install-Module` (PowerShellGet/PSResourceGet).
- Auto-loading: just call cmdlet; module loads on demand.
- Check installed: `Get-Module -ListAvailable`.
- Version: `$PSVersionTable.PSVersion`.

## 8. Filesystem speed

- `Test-Path -LiteralPath $p -PathType Leaf`.
- `[System.IO.File]::ReadAllText($p)` faster than `Get-Content` for whole file.
- `[System.IO.Directory]::EnumerateFiles($dir, '*.log', 'AllDirectories')` faster than `Get-ChildItem -Recurse`.
- `robocopy` for large file copies/moves (fast, resume).
- `Copy-Item` with `-Recurse` for small trees.

## 9. String & regex

- `-match`/`-replace`/`-split` operators.
- `[regex]::Matches($text, $pat)` for all matches.
- Use verbatim strings `'...'` when no interpolation; double quotes only when needed.
- `StringBuilder` for many concatenations.
- `-join` and `-split` operators.

## 10. Remoting & sessions

- `Invoke-Command -ComputerName host -ScriptBlock { ... }`.
- Persistent sessions: `$s = New-PSSession -ComputerName host; Invoke-Command -Session $s`.
- `Enter-PSSession` for interactive.
- Runspace pools for many targets.
- WinRM/SSH remoting; SSH for cross-platform.

## 11. Security

- Execution policy: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.
- Avoid `Invoke-Expression` on untrusted input.
- Validate input: `[ValidateNotNullOrEmpty()]`, `[ValidateSet()]`, `[ValidateRange()]`.
- Use `SecureString` for secrets; `ConvertTo-SecureString`.
- Credential store: `Get-Credential`, SecretManagement module.
- No secrets in scripts/logs. Use env vars or secret vaults.
- Constrained language mode / JEA for locked-down environments.

## 12. Profiling & debugging

- `Set-PSDebug -Trace 1` for step tracing.
- `Write-Debug`, `Write-Verbose` with `-Debug`/`-Verbose`.
- Breakpoints: `Set-PSBreakpoint -Script x.ps1 -Line 10`.
- `$Error` automatic variable; `$Error[0] | Format-List *`.
- `Get-Error` (PS7) for full error details.

## 13. Common time-savers

- Aliases in interactive only; full names in scripts.
- `cd` = `Set-Location`; `ls` = `Get-ChildItem`; `cat` = `Get-Content`.
- `?` = `Where-Object`; `%` = `ForEach-Object`.
- History: `Get-History`, `Invoke-History`, `#pattern<Tab>`.
- PSReadLine: predictive IntelliSense, history search (Ctrl+R).
- `code .` to open VS Code; `explorer .` for Explorer.
- `ii` (Invoke-Item) to open file with default app.

## 14. Taking less time (workflow)

- One command that does it all > many round-trips.
- Cache results: `$procs = Get-Process` once, filter in memory.
- Avoid re-enumerating: store file lists.
- Use `-Recurse` sparingly; scope to known dirs.
- Prefer `-Depth` over unlimited recursion.
- Batch operations: `Remove-Item (Get-ChildItem ...)` vs loop.
- Use `robocopy /MIR` for sync instead of custom scripts.
- For repeated tasks, write a function/module once.

## 15. Cheat sheet (fast patterns)

```powershell
# Count files by extension
Get-ChildItem -Recurse -File | Group-Object Extension | Sort-Object Count -Descending

# Find large files
Get-ChildItem -Recurse -File | Where-Object Length -gt 100MB | Select-Object FullName, @{N='MB';E={[math]::Round($_.Length/1MB,2)}}

# Replace in files
Get-ChildItem -Recurse -Filter *.txt | ForEach-Object { (Get-Content $_) -replace 'old','new' | Set-Content $_ }

# Parallel download
$urls | ForEach-Object -Parallel { Invoke-WebRequest $_ -OutFile (Split-Path $_ -Leaf) } -ThrottleLimit 8

# Time a block
Measure-Command { ... }

# Safe delete preview
Remove-Item -Path X -Recurse -WhatIf
```

## Levels

| Level | Behavior |
|-------|----------|
| lite | Quick answer, minimal commands, no deep dive. |
| full | Rules above. Default. |
| ultra | Max speed: parallel, cached, measured, terse. |

## Footer (every reply)

`time: <est> | cmd: <shortest that works>` (or "none").