---
title: 개발 가이드
outline: deep
sidebar_order: -50
---

# 개발 가이드

이 문서는 현재 사이트의 구조, 운영 원칙, 핵심 스크립트를 정리한 내부 개발 문서다.

## 1. 사이트 목표

이 사이트는 단일 문서 위키가 아니라 아래 3개 역할을 함께 수행한다.

1. 개인 블로그
2. skill 허브
3. 주제별 실전 아카이브

## 2. 정보 구조

현재 상위 섹션:

- `blog`
- `skills`
- `vibe-coding`
- `manufacturing-ai`
- `korea-picks`
- `rankings`
- `recipes`
- `references`
- `categories`
- `diagrams`

## 3. 핵심 설계 원칙

### 3.1 Markdown 우선

모든 주요 콘텐츠는 Markdown 파일로 관리한다.

### 3.2 수동 편집 최소화

새 문서를 추가하거나 삭제할 때 `config.mts`를 직접 수정하지 않도록 설계했다.

### 3.3 출판형 구조

- 홈은 랜딩 페이지 역할을 한다.
- 각 상위 섹션은 허브 페이지를 가진다.
- 개별 문서는 사이드바를 통해 자동 노출된다.

## 4. 자동화된 부분

### 4.1 동적 사이드바

[config.mts](D:/CODE/AICODE/skillrnd/docs/.vitepress/config.mts)는 각 섹션 디렉터리를 스캔해 Markdown 파일 목록으로 사이드바를 생성한다.

지원 frontmatter:

- `title`
- `sidebar_label`
- `sidebar_order`
- `sidebar_hidden`
- `date`

정렬 규칙:

1. `sidebar_order` 오름차순
2. `date` 내림차순
3. `label` 이름순

### 4.2 콘텐츠 생성/삭제 스크립트

[content-manager.mjs](D:/CODE/AICODE/skillrnd/scripts/content-manager.mjs)로 Markdown 파일을 빠르게 만들고 제거할 수 있다.

## 5. 주요 명령

개발 서버:

```bash
npm run docs:dev
```

빌드:

```bash
npm run docs:build
```

새 문서 추가:

```bash
npm run content:new -- --section blog --title "새 글 제목"
```

문서 삭제:

```bash
npm run content:remove -- --section blog --slug new-post-title
```

## 6. 운영 시 주의점

- 허브 페이지의 수동 추천 목록은 자동 업데이트되지 않는다.
- 사이드바는 자동이지만, 홈과 허브의 큐레이션 문구는 사람이 관리한다.
- `docs/.vitepress/dist`는 빌드 산출물이며 Git 추적 대상이 아니다.
- `mermaid`, `shiki` 버전은 함부로 올리지 않는다.

## 7. 추천 다음 단계

- `blog`에 실제 글 3개 이상 추가
- `korea-picks` 하위 문서 작성
- `rankings`용 메타데이터 수집 스크립트 설계
- `skills`와 `external repositories` 완전 분리 여부 결정

