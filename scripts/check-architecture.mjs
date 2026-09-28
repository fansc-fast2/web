#!/usr/bin/env node
import { access } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const forbiddenEntrypoint = path.join(root, 'src/server/functions/publish-site.ts')
const failures = []

try {
  await access(forbiddenEntrypoint)
  failures.push('prd-web must not expose its legacy publish-site entrypoint; publishing belongs to prd-admin')
} catch {
  // Expected: the public web runtime is only a host for prd-admin output.
}

if (failures.length) {
  console.error('Architecture boundary check failed')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log('Architecture boundary check passed')
