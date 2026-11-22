#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS = ['hyperlean','hyperslop','hypershell'];
const SKILLS_SRC = path.join(__dirname, '..', 'skills');

const HARNESS_DIRS = {
  opencode: path.join(os.homedir(), '.opencode', 'skills'),
  claude: path.join(os.homedir(), '.claude', 'skills'),
  codex: path.join(os.homedir(), '.codex', 'skills'),
  gemini: path.join(os.homedir(), '.gemini', 'skills'),
  openhands: path.join(os.homedir(), '.openhands', 'skills'),
  openclaw: path.join(os.homedir(), '.openclaw', 'skills'),
  goose: path.join(os.homedir(), '.goose', 'skills'),
  crush: path.join(os.homedir(), '.crush', 'skills'),
};

const args = process.argv.slice(2);
const flags = new Set(args.filter(a=>a.startsWith('--')));
const harnessArg = args.find(a=>a.startsWith('--harness='))?.split('=')[1]
  || (args.includes('--harness') ? args[args.indexOf('--harness')+1] : null);
const projectArg = args.find(a=>a.startsWith('--project='))?.split('=')[1]
  || (args.includes('--project') ? args[args.indexOf('--project')+1] : null);
const globalOnly = flags.has('--global');

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function installTo(dir) {
  for (const s of SKILLS) {
    const src = path.join(SKILLS_SRC, s);
    const dst = path.join(dir, s);
    if (!fs.existsSync(src)) { console.error('missing skill source:', s); continue; }
    copyDir(src, dst);
    console.log('  installed', s, '->', dst);
  }
}

const targets = [];
if (projectArg) {
  const p = path.resolve(projectArg);
  for (const sub of ['.agents/skills', '.claude/skills']) {
    targets.push(path.join(p, sub));
  }
}
if (!projectArg || !globalOnly) {
  // global harnesses that exist
  for (const [name, dir] of Object.entries(HARNESS_DIRS)) {
    const parent = path.dirname(dir);
    if (fs.existsSync(parent)) targets.push(dir);
  }
}
// dedup
const uniq = [...new Set(targets)];

if (args.includes('--list')) {
  console.log('Available harness targets:');
  for (const t of uniq) console.log(' ', t);
  process.exit(0);
}

console.log('Hyper installer — installing', SKILLS.length, 'skills to', uniq.length, 'target(s)');
for (const t of uniq) {
  console.log('\n->', t);
  try { installTo(t); }
  catch (e) { console.error('  FAILED:', e.message); }
}
console.log('\nDone. Restart your agent harness to load skills.');