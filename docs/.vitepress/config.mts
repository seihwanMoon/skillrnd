import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const owner = 'seihwanMoon'
const repo = 'skillrnd'
const customHost = 'https://blog.moonworld.uk'
const base = process.env.VITEPRESS_BASE ?? '/'
const siteUrl = process.env.SITE_URL ?? `${customHost}/`
const repoUrl = `https://github.com/${owner}/${repo}`
const docsRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

type SidebarEntry = {
  dateWeight: number
  hidden: boolean
  label: string
  link: string
  order: number
  relativePath: string
  fileName: string
}

type SidebarLeaf = { text: string; link: string }
type SidebarGroup = { text: string; link?: string; items?: SidebarLeaf[] }

type SidebarMode = 'flat' | 'grouped'

type SectionSidebarOptions = {
  section: string
  sectionLabel: string
  mode: SidebarMode
  useFrontmatterLabels?: boolean
  rootIndexLabel?: string
  nestedIndexLabel?: string
}

function toPosix(value: string): string {
  return value.split(sep).join('/')
}

function humanize(slug: string): string {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function parseFrontmatter(filePath: string): Record<string, string> {
  const source = readFileSync(filePath, 'utf8')
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  const values: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const parsed = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/)
    if (!parsed) continue
    values[parsed[1]] = parsed[2].replace(/^['"]|['"]$/g, '')
  }
  return values
}

function walkMarkdownFiles(dirPath: string): string[] {
  if (!existsSync(dirPath)) return []

  const entries = readdirSync(dirPath, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const fullPath = resolve(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath))
      continue
    }
    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}

function sortSidebarEntries(left: SidebarEntry, right: SidebarEntry): number {
  if (left.order !== right.order) return left.order - right.order
  if (left.dateWeight !== right.dateWeight) return left.dateWeight - right.dateWeight
  return left.fileName.localeCompare(right.fileName, 'ko')
}

function buildEntryLabel(
  filePath: string,
  relativePath: string,
  options: SectionSidebarOptions
): { label: string; fileName: string } {
  const fileName = relativePath.split('/').pop() ?? relativePath
  const meta = parseFrontmatter(filePath)
  const isRootIndex = relativePath === 'index'
  const isNestedIndex = fileName === 'index' && !isRootIndex

  if (isRootIndex) {
    return { label: options.rootIndexLabel ?? 'Hub', fileName }
  }

  if (isNestedIndex) {
    return { label: options.nestedIndexLabel ?? 'Overview', fileName }
  }

  if (options.useFrontmatterLabels !== false) {
    const frontmatterLabel = meta.sidebar_label ?? meta.title
    if (frontmatterLabel) {
      return { label: frontmatterLabel, fileName }
    }
  }

  return { label: humanize(fileName), fileName }
}

function buildSidebarItems(options: SectionSidebarOptions): SidebarGroup[] {
  const sectionDir = resolve(docsRoot, options.section)
  const entries = walkMarkdownFiles(sectionDir)
    .map((filePath): SidebarEntry => {
      const relativePath = toPosix(relative(sectionDir, filePath)).replace(/\.md$/, '')
      const meta = parseFrontmatter(filePath)
      const { label, fileName } = buildEntryLabel(filePath, relativePath, options)
      const link = `/${options.section}/${relativePath}`
      const isRootIndex = relativePath === 'index'
      const order = Number(meta.sidebar_order ?? (isRootIndex ? -1000 : fileName === 'index' ? -100 : 0))
      const hidden = meta.sidebar_hidden === 'true'
      const parsedDate = meta.date ? Date.parse(meta.date) : Number.NaN
      const dateWeight = Number.isNaN(parsedDate) ? 0 : -parsedDate
      return { dateWeight, hidden, label, link, order, relativePath, fileName }
    })
    .filter((item) => !item.hidden)
    .sort(sortSidebarEntries)

  if (options.mode === 'flat') {
    return entries.map((entry) => ({ text: entry.label, link: entry.link }))
  }

  const topLevel: SidebarGroup[] = []
  const groups = new Map<string, SidebarEntry[]>()

  for (const entry of entries) {
    const segments = entry.relativePath.split('/')
    if (segments.length === 1) {
      topLevel.push({ text: entry.label, link: entry.link })
      continue
    }

    const groupKey = segments[0]
    const groupItems = groups.get(groupKey) ?? []
    groupItems.push(entry)
    groups.set(groupKey, groupItems)
  }

  const groupedItems = Array.from(groups.entries())
    .sort((left, right) => left[0].localeCompare(right[0], 'ko'))
    .map(([groupKey, groupEntries]): SidebarGroup => ({
      text: humanize(groupKey),
      items: groupEntries
        .sort(sortSidebarEntries)
        .map((entry) => ({ text: entry.label, link: entry.link }))
    }))

  return [...topLevel, ...groupedItems]
}

const sidebarSections: SectionSidebarOptions[] = [
  {
    section: 'blog',
    sectionLabel: '블로그',
    mode: 'flat',
    rootIndexLabel: 'Hub'
  },
  {
    section: 'githubstudy',
    sectionLabel: 'GitHub Study',
    mode: 'flat',
    rootIndexLabel: 'Hub'
  },
  {
    section: 'manufacturing-ai',
    sectionLabel: '제조 AI',
    mode: 'grouped',
    rootIndexLabel: 'Hub',
    nestedIndexLabel: 'Overview'
  },
  {
    section: 'vibe-coding',
    sectionLabel: 'Vibe Coding',
    mode: 'grouped',
    rootIndexLabel: 'Hub',
    nestedIndexLabel: 'Overview'
  }
]

export default withMermaid(
  defineConfig({
    lang: 'ko-KR',
    title: 'Moonworld AI Workbench',
    description:
      '지식 기반 AI 작업 허브. 실무 문서, 바이브 코딩, 제조 AI, GitHub 학습 컬렉션을 다룹니다.',
    base,
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: siteUrl
    },
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      nav: [
        { text: '홈', link: '/' },
        { text: '블로그', link: '/blog/index' },
        { text: 'GitHub Study', link: '/githubstudy/index' },
        { text: '제조 AI', link: '/manufacturing-ai/index' },
        { text: 'Vibe Coding', link: '/vibe-coding/index' },
        {
          text: '허브',
          items: [
            { text: '스킬 허브', link: '/skills/index' },
            { text: 'Korea Picks', link: '/korea-picks/index' },
            { text: '랭킹', link: '/rankings/index' }
          ]
        }
      ],
      sidebar: [
        { text: '홈', link: '/' },
        ...sidebarSections.map((section) => ({
          text: section.sectionLabel,
          items: buildSidebarItems(section)
        })),
        {
          text: '허브',
          items: [
            { text: '스킬 허브', link: '/skills/index' },
            { text: 'Korea Picks', link: '/korea-picks/index' },
            { text: '랭킹', link: '/rankings/index' }
          ]
        }
      ],
      socialLinks: [{ icon: 'github', link: repoUrl }],
      footer: {
        message: 'Built with VitePress and published on GitHub Pages.',
        copyright: 'Copyright © 2026'
      },
      search: {
        provider: 'local'
      }
    },
    mermaid: {
      theme: 'default'
    }
  })
)
