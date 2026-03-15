---
title: 콘텐츠 운영 가이드
outline: deep
sidebar_order: -40
---

# 콘텐츠 운영 가이드

이 문서는 Markdown 콘텐츠를 빠르게 추가, 수정, 삭제하는 방법을 정리한다.

## 1. 어떤 섹션에 넣을지 먼저 결정

### `blog`

- 의견
- 실험 기록
- 비교 글
- 구축기

### `skills`

- 개별 skill
- 외부 저장소 문서
- 도구 요약 페이지

### `recipes`

- workflow
- step-by-step playbook

### `vibe-coding`

- 생성-검증 루프
- 도구 조합
- 실전 coding workflow

### `manufacturing-ai`

- 제조 현장 use case
- 품질/설비/문서 자동화 아이디어

### `korea-picks`

- 한국 특화 도구
- 국내 실무형 MCP/skill

### `rankings`

- 랭킹 보드
- 방법론

## 2. 새 문서 만들기

기본 명령:

```bash
npm run content:new -- --section <section> --title "문서 제목"
```

예시:

```bash
npm run content:new -- --section blog --title "Claude Code와 Codex의 skill 철학"
npm run content:new -- --section korea-picks --title "한국 법령 MCP 모음"
npm run content:new -- --section manufacturing-ai --title "설비 이상징후 탐지 아이디어"
```

선택적으로 slug 지정:

```bash
npm run content:new -- --section blog --title "새 글" --slug "new-post"
```

## 3. 문서 삭제하기

```bash
npm run content:remove -- --section <section> --slug <slug>
```

예시:

```bash
npm run content:remove -- --section blog --slug new-post
```

## 4. frontmatter 권장 규칙

기본 필수:

- `title`

선택:

- `outline: deep`
- `sidebar_order: -10`
- `sidebar_label: 짧은 이름`
- `sidebar_hidden: true`
- `date: 2026-03-15`

## 5. 운영 패턴

### 허브 페이지

각 섹션의 `index.md`는 자동 목록이 아니라 큐레이션 허브다. 중요한 글만 사람이 골라 링크한다.

### 새 글을 추가한 뒤 할 일

1. 내용 작성
2. `npm run docs:build`
3. 필요하면 허브 페이지에 추천 링크 추가
4. 커밋과 푸시

## 6. 추천 품질 체크

- 제목이 명확한가
- 한 페이지에 하나의 중심 주제가 있는가
- 링크와 근거가 있는가
- 너무 긴 목록만 있지 않은가
- 실제 작업에 도움이 되는가

## 7. 지금 바로 유용한 추가 후보

- `blog`: 도구 비교 글
- `vibe-coding`: 스타터 workflow
- `manufacturing-ai`: use case map
- `korea-picks`: 한국 법령/공시 MCP 큐레이션
- `rankings`: 첫 에디터 추천 보드

## 8. Admin 화면

공개 사이트에서는 편집 링크를 숨겼다. 대신 별도 `/admin` 화면을 붙였다.

- 운영 문서: [Admin 운영 가이드](./admin-guide.md)
- 로컬 편집 테스트: `npm run cms:proxy` + `npm run docs:dev`
