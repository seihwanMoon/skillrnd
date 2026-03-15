# Moonworld AI Workbench

`VitePress` 기반으로 AI `skills`, `vibe coding`, `manufacturing AI`, `Korea picks`를 한국어로 정리하고 `GitHub Pages`로 배포하는 출판형 정적 사이트다.

- 저장소: `https://github.com/seihwanMoon/skillrnd`

## 목표

- 여러 agent 생태계의 `skill`을 한 곳에서 탐색
- `설명`, `분류`, `Mermaid`, `원문 링크`, `활용 레시피`를 일관된 형식으로 제공
- 블로그와 주제별 아카이브를 함께 운영
- 이후 `Codex` 기반 자동 수집기와 문서 생성기로 확장

## 로컬 실행

```bash
npm install
npm run docs:dev
```

## 콘텐츠 운영

```bash
npm run content:new -- --section blog --title "새 글 제목"
npm run content:remove -- --section blog --slug new-post-title
```

## 빌드

```bash
npm run docs:build
```

## 핵심 문서

- [프로젝트 계획서](./docs/project-plan.md)
- [개발 가이드](./docs/development-guide.md)
- [콘텐츠 운영 가이드](./docs/content-operations.md)
- [홈 페이지](./docs/index.md)
- [카테고리 허브](./docs/categories/index.md)
- [스킬 목록](./docs/skills/index.md)
