#!/usr/bin/env node
// Applies the security overrides used for the Mojaloop dependency/vulnerability updates
// (api-snippets, ml-number, database-lib, central-services-*, ml-testing-toolkit-shared-lib).
//
// Run it from the root of the repo you are updating, AFTER `npm run dep:update`:
//   node ~/mojaloop-contributor/scripts/patch-overrides.js
// Then:
//   rm -rf node_modules && npm install
//
// What it does:
//   1. package.json "overrides":
//      - removes old pins that hold vulnerable versions (plain "glob", plain "brace-expansion")
//      - bumps "fast-uri" to 3.1.9 if it is pinned
//      - forces patched glob / minimatch / handlebars, only for the major versions that have the
//        same API (old glob 7.x and minimatch 3.x are left alone, they would break)
//   2. package-lock.json: deletes the locked glob / minimatch / brace-expansion entries so npm
//      re-resolves them with the new overrides (otherwise npm keeps the stale vulnerable copies).

const fs = require('fs')

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const o = (pkg.overrides = pkg.overrides || {})
const changes = []

if (typeof o.glob === 'string') { changes.push(`removed "glob": "${o.glob}"`); delete o.glob }
if (o.glob && typeof o.glob === 'object') { changes.push(`removed "glob": ${JSON.stringify(o.glob)}`); delete o.glob }

if (o['brace-expansion']) {
  changes.push(`removed "brace-expansion": "${o['brace-expansion']}"`)
  delete o['brace-expansion']
}
for (const [k, v] of Object.entries({ 'brace-expansion@1': '1.1.21', 'brace-expansion@2': '2.1.7', 'brace-expansion@5': '5.0.12' })) {
  if (o[k] !== v) { changes.push(`"${k}": "${v}"`); o[k] = v }
}

if (o['fast-uri'] && o['fast-uri'] !== '3.1.9') { changes.push(`"fast-uri": "${o['fast-uri']}" -> "3.1.9"`); o['fast-uri'] = '3.1.9' }

// nested pins such as "license-checker": { "glob": "10.5.0" }
for (const [k, v] of Object.entries(o)) {
  if (v && typeof v === 'object' && typeof v.glob === 'string' && v.glob !== '14.0.3') {
    changes.push(`"${k}" > "glob": "${v.glob}" -> "14.0.3"`); v.glob = '14.0.3'
  }
}

const add = {
  'glob@>=9 <14.0.2': '14.0.3', // GHSA-3g3m-2fjr-6pw4
  'minimatch@>=8 <11.0.1': '11.0.4', // GHSA-g3hv-75wg-m249 (only for majors with the same API)
  handlebars: '4.7.10' // GHSA-8r5x-fm3f-whwj, GHSA-p8wg-vrv2-v86f, GHSA-xw65-4hp5-5hc7
}
for (const [k, v] of Object.entries(add)) {
  if (o[k] !== v) { changes.push(`"${k}": "${v}"`); o[k] = v }
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')

let removed = 0
if (fs.existsSync('package-lock.json')) {
  const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'))
  for (const k of Object.keys(lock.packages || {})) {
    if (/node_modules\/(glob|minimatch|brace-expansion)$/.test(k)) { delete lock.packages[k]; removed++ }
  }
  fs.writeFileSync('package-lock.json', JSON.stringify(lock, null, 2) + '\n')
}

console.log('package.json overrides:')
for (const c of changes) console.log('  ' + c)
console.log(`package-lock.json: removed ${removed} stale glob/minimatch/brace-expansion entries`)
console.log('\nNext: rm -rf node_modules && npm install && npm run audit:check')
