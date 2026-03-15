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

function buildSidebarItems(section: string): Array<{ text: string; link: string }> {
  const sectionDir = resolve(docsRoot, section)
  const items = walkMarkdownFiles(sectionDir)
    .map((filePath): SidebarEntry => {
      const relativePath = toPosix(relative(sectionDir, filePath)).replace(/\.md$/, '')
      const meta = parseFrontmatter(filePath)
      const slug = relativePath === 'index' ? 'index' : relativePath
      const label = meta.sidebar_label ?? meta.title ?? (slug === 'index' ? '허브' : humanize(slug.split('/').pop() ?? slug))
      const link = `/${section}/${relativePath}`
      const order = Number(meta.sidebar_order ?? (slug === 'index' ? -1000 : 0))
      const hidden = meta.sidebar_hidden === 'true'
      const parsedDate = meta.date ? Date.parse(meta.date) : Number.NaN
      const dateWeight = Number.isNaN(parsedDate) ? 0 : -parsedDate
      return { dateWeight, hidden, label, link, order }
    })
    .filter((item) => !item.hidden)
    .sort((left, right) => {
      if (left.order !== right.order) return left.order - right.order
      if (left.dateWeight !== right.dateWeight) return left.dateWeight - right.dateWeight
      return left.label.localeCompare(right.label, 'ko')
    })
    .map((item) => ({ text: item.label, link: item.link }))

  return items
}

export default withMermaid(
  defineConfig({
    lang: 'ko-KR',
    title: 'Moonworld AI Workbench',
    description: '한국어 기반의 AI 작업 허브. 스킬 문서, 바이브 코딩, 제조 AI, 한국 특화 큐레이션을 다룬다.',
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
        {
          text: '블로그',
          items: buildSidebarItems('blog')
        },
        {
          text: '제조 AI',
          items: buildSidebarItems('manufacturing-ai')
        },
        {
          text: 'Vibe Coding',
          items: buildSidebarItems('vibe-coding')
        },
        {
          text: '허브',
          items: [
            { text: '스킬 허브', link: '/skills/index' },
            { text: 'Korea Picks', link: '/korea-picks/index' },
            { text: '랭킹', link: '/rankings/index' }
          ]
        }
      ],
      socialLinks: [
        { icon: 'github', link: repoUrl }
      ],
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
