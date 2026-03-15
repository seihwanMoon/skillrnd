import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const docsRoot = join(projectRoot, 'docs')

const sectionConfig = {
  blog: {
    dir: 'blog',
    title: '새 블로그 글',
    body: [
      '## 문제의식',
      '',
      '- 왜 이 주제가 중요한가',
      '',
      '## 핵심 포인트',
      '',
      '- 포인트 1',
      '- 포인트 2',
      '',
      '## 정리',
      '',
      '다음에 무엇을 더 검증할지 적는다.'
    ]
  },
  skills: {
    dir: 'skills',
    title: '새 스킬 문서',
    body: [
      '## 한줄 요약',
      '',
      '짧은 요약을 적는다.',
      '',
      '## 분류',
      '',
      '- Agent: `Generic`',
      '- Purpose: `docs`',
      '- Shape: `repository`',
      '',
      '## 언제 쓰는가',
      '',
      '- 사용 상황 1',
      '',
      '## 입력과 출력',
      '',
      '- 입력:',
      '- 출력:',
      '',
      '## 핵심 구조',
      '',
      '- 핵심 포인트',
      '',
      '## Mermaid',
      '',
      '```mermaid',
      'flowchart TD',
      '  A[Input] --> B[Process]',
      '```',
      '',
      '## 장점',
      '',
      '- 장점',
      '',
      '## 한계',
      '',
      '- 한계',
      '',
      '## 링크',
      '',
      '- 저장소: '
    ]
  },
  recipes: {
    dir: 'recipes',
    title: '새 레시피',
    body: [
      '## 목적',
      '',
      '이 workflow의 목적을 적는다.',
      '',
      '## 입력 체크리스트',
      '',
      '- 입력 1',
      '',
      '## 권장 흐름',
      '',
      '1. 단계 1',
      '2. 단계 2',
      '',
      '## 결과물',
      '',
      '- 결과물 1'
    ]
  },
  'vibe-coding': {
    dir: 'vibe-coding',
    title: '새 Vibe Coding 문서',
    body: [
      '## 주제',
      '',
      '다룰 workflow를 적는다.',
      '',
      '## 핵심 질문',
      '',
      '- 질문 1',
      '- 질문 2'
    ]
  },
  'manufacturing-ai': {
    dir: 'manufacturing-ai',
    title: '새 Manufacturing AI 문서',
    body: [
      '## 문제 정의',
      '',
      '현장 문제를 적는다.',
      '',
      '## 적용 아이디어',
      '',
      '- 아이디어 1',
      '- 아이디어 2'
    ]
  },
  'korea-picks': {
    dir: 'korea-picks',
    title: '새 Korea Picks 문서',
    body: [
      '## 왜 중요한가',
      '',
      '한국 실무 맥락에서의 의미를 적는다.',
      '',
      '## 추천 포인트',
      '',
      '- 포인트 1'
    ]
  },
  rankings: {
    dir: 'rankings',
    title: '새 랭킹 문서',
    body: [
      '## 기준',
      '',
      '- 기준 1',
      '',
      '## 목록',
      '',
      '1. 항목 1'
    ]
  },
  references: {
    dir: 'references',
    title: '새 레퍼런스 문서',
    body: [
      '## 목적',
      '',
      '이 레퍼런스 페이지의 목적을 적는다.',
      '',
      '## 링크',
      '',
      '- [label](https://example.com)'
    ]
  },
  categories: {
    dir: 'categories',
    title: '새 카테고리 문서',
    body: [
      '## 포함 기준',
      '',
      '- 기준 1',
      '',
      '## 추천 문서',
      '',
      '- [문서](/skills/index)'
    ]
  }
}

function parseArgs(argv) {
  const args = {}
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (!token.startsWith('--')) continue
    args[token.slice(2)] = argv[index + 1]
    index += 1
  }
  return args
}

function fail(message) {
  console.error(message)
  process.exit(1)
}

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-_]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
}

function buildFrontmatter(title, extra = {}) {
  const lines = ['---', `title: ${title}`]
  for (const [key, value] of Object.entries(extra)) {
    if (!value) continue
    lines.push(`${key}: ${value}`)
  }
  lines.push('---', '')
  return lines.join('\n')
}

function buildDocument(section, title) {
  const config = sectionConfig[section]
  if (!config) fail(`Unsupported section: ${section}`)

  const extra = {}
  if (section === 'blog') {
    extra.date = new Date().toISOString().slice(0, 10)
    extra.outline = 'deep'
    extra.sidebar_order = '-10'
  }
  if (['skills', 'categories', 'recipes', 'vibe-coding', 'manufacturing-ai', 'korea-picks', 'rankings'].includes(section)) {
    extra.outline = 'deep'
  }

  return `${buildFrontmatter(title, extra)}# ${title}\n\n${config.body.join('\n')}\n`
}

function createContent(args) {
  const section = args.section
  const title = args.title
  if (!section || !title) fail('Usage: npm run content:new -- --section <section> --title <title> [--slug <slug>]')
  if (!sectionConfig[section]) fail(`Unsupported section: ${section}`)

  const slug = args.slug ? slugify(args.slug) : slugify(title)
  const filePath = join(docsRoot, sectionConfig[section].dir, `${slug}.md`)
  if (existsSync(filePath)) fail(`File already exists: ${filePath}`)

  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, buildDocument(section, title), 'utf8')
  console.log(`Created ${filePath}`)
}

function removeContent(args) {
  const section = args.section
  const slug = args.slug ? slugify(args.slug) : ''
  if (!section || !slug) fail('Usage: npm run content:remove -- --section <section> --slug <slug>')
  if (!sectionConfig[section]) fail(`Unsupported section: ${section}`)

  const filePath = join(docsRoot, sectionConfig[section].dir, `${slug}.md`)
  if (!existsSync(filePath)) fail(`File not found: ${filePath}`)

  const source = readFileSync(filePath, 'utf8')
  if (source.includes('title: index') || slug === 'index') {
    fail('Refusing to remove an index page.')
  }

  rmSync(filePath)
  console.log(`Removed ${filePath}`)
}

const [command, ...rest] = process.argv.slice(2)
const args = parseArgs(rest)

if (command === 'new') {
  createContent(args)
} else if (command === 'remove') {
  removeContent(args)
} else {
  fail('Usage: npm run content:new -- --section <section> --title <title> [--slug <slug>] or npm run content:remove -- --section <section> --slug <slug>')
}
