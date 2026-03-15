import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const owner = 'seihwanMoon'
const repo = 'skillrnd'
const customHost = 'https://blog.moonworld.uk'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repoName.endsWith('.github.io')
const base = process.env.VITEPRESS_BASE ?? (repoName && !isUserSite ? `/${repoName}/` : '/')
const siteUrl = process.env.SITE_URL ?? (isUserSite ? `${customHost}/` : `${customHost}/${repo}/`)
const repoUrl = `https://github.com/${owner}/${repo}`

export default withMermaid(
  defineConfig({
    lang: 'ko-KR',
    title: 'AI Coding Skills Wiki',
    description: '한국어로 정리한 AI coding skills 문서 허브',
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
        { text: '계획서', link: '/project-plan' },
        { text: '카테고리', link: '/categories/index' },
        { text: '스킬', link: '/skills/index' },
        { text: '레시피', link: '/recipes/index' },
        { text: '다이어그램', link: '/diagrams/ecosystem-map' }
      ],
      sidebar: {
        '/categories/': [
          {
            text: '카테고리',
            items: [
              { text: '허브', link: '/categories/index' },
              { text: 'Codex', link: '/categories/codex' },
              { text: '문서화', link: '/categories/docs' },
              { text: '테스트', link: '/categories/testing' },
              { text: 'MCP', link: '/categories/mcp' }
            ]
          }
        ],
        '/skills/': [
          {
            text: '스킬',
            items: [
              { text: '목록', link: '/skills/index' },
              { text: 'repo-intelligence', link: '/skills/repo-intelligence' },
              { text: 'playwright', link: '/skills/playwright' },
              { text: 'playwright-interactive', link: '/skills/playwright-interactive' },
              { text: 'chatgpt-apps', link: '/skills/chatgpt-apps' },
              { text: 'skill-creator', link: '/skills/skill-creator' },
              { text: 'skill-installer', link: '/skills/skill-installer' },
              { text: 'openai/skills', link: '/skills/openai-skills' },
              { text: 'vercel-labs/skills', link: '/skills/vercel-labs-skills' },
              { text: 'Repomix', link: '/skills/repomix' },
              { text: 'Gitingest', link: '/skills/gitingest' }
            ]
          }
        ],
        '/recipes/': [
          {
            text: '레시피',
            items: [
              { text: '목록', link: '/recipes/index' },
              { text: '저장소 분석', link: '/recipes/repo-analysis' },
              { text: '문서 생성', link: '/recipes/docs-generation' }
            ]
          }
        ],
        '/diagrams/': [
          {
            text: '다이어그램',
            items: [
              { text: '생태계 맵', link: '/diagrams/ecosystem-map' }
            ]
          }
        ],
        '/references/': [
          {
            text: '레퍼런스',
            items: [
              { text: '허브', link: '/references/index' },
              { text: '로컬 스킬', link: '/references/local-skills' },
              { text: '외부 저장소', link: '/references/external-repositories' },
              { text: '저장소 목록', link: '/references/repos' }
            ]
          }
        ]
      },
      socialLinks: [
        { icon: 'github', link: repoUrl }
      ],
      footer: {
        message: 'Built with VitePress and published on GitHub Pages.',
        copyright: 'Copyright © 2026'
      },
      editLink: {
        pattern: `${repoUrl}/edit/main/docs/:path`,
        text: '이 페이지 편집 제안'
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
