import { existsSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { themeNames } from '@shikijs/themes'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = dirname(scriptDir)
const target = join(projectRoot, 'node_modules', 'shiki', 'dist', 'themes.mjs')

if (!existsSync(target)) {
  const entries = themeNames
    .map((theme) => `  { id: ${JSON.stringify(theme)}, name: ${JSON.stringify(theme)}, import: () => import('@shikijs/themes/${theme}') }`)
    .join(',\n')

  const content = `const bundledThemesInfo = [\n${entries}\n];\nconst bundledThemes = Object.fromEntries(bundledThemesInfo.map((i) => [i.id, i.import]));\nexport { bundledThemes, bundledThemesInfo };\n`

  writeFileSync(target, content, 'utf8')
  console.log('Created shiki compatibility file:', target)
}
