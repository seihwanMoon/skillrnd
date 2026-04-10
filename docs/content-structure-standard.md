---
title: Content Structure Standard
sidebar_label: Content Standard
sidebar_hidden: true
---

# Content Structure Standard

이 문서는 `skillrnd` 전체에 적용할 정보구조 표준을 정의합니다.

## 핵심 원칙

- 섹션 폴더 = 상단 메뉴 또는 상위 콘텐츠 영역
- 하위 폴더 = 사이드바 중간 그룹
- `.md` 파일 = 실제 문서
- 파일명 = 기본 문서 제목
- `index.md` = 허브 또는 그룹 개요 문서

즉, 사이트 구조와 파일 구조를 최대한 1:1로 맞춥니다.

## 기본 규칙

### 1. 폴더와 사이드바

- `docs/vibe-coding/fundamentals/` 같은 폴더는 사이드바 그룹 `Fundamentals`로 보입니다.
- `docs/vibe-coding/fundamentals/starter-stack.md`는 `Starter Stack` 문서로 보입니다.

### 2. 파일명과 제목

- 기본 제목은 파일명에서 생성합니다.
- 예:
  - `starter-stack.md` -> `Starter Stack`
  - `spec-driven-build.md` -> `Spec Driven Build`

### 3. index.md

- 섹션 루트의 `index.md`는 허브 문서입니다.
- 하위 폴더의 `index.md`는 그룹 개요 문서입니다.
- 사이드바에서는 기본적으로 `Hub` 또는 `Overview`로 보이게 합니다.

### 4. frontmatter 역할

frontmatter는 기본 규칙을 덮어쓸 때만 사용합니다.

권장 필드:

- `title`
- `sidebar_label`
- `sidebar_order`
- `sidebar_hidden`

즉, 기본은 파일 구조로 관리하고 예외만 frontmatter로 조정합니다.

## 권장 폴더 예시

### Vibe Coding

```text
docs/vibe-coding/
  index.md
  fundamentals/
    index.md
    starter-stack.md
  workflows/
    index.md
    spec-driven-build.md
  tools/
    index.md
    codex-cli.md
  case-studies/
    index.md
    session-log-template.md
  archive/
    index.md
```

### Manufacturing AI

```text
docs/manufacturing-ai/
  index.md
  fundamentals/
    index.md
  use-cases/
    index.md
  systems/
    index.md
  archive/
    index.md
```

## 섹션별 적용 정책

### 바로 같은 규칙을 적용하는 섹션

- `vibe-coding`
- `manufacturing-ai`
- `korea-picks`
- `rankings`

### 점진 적용 섹션

- `blog`
- `githubstudy`
- `skills`
- `youtube-summaries`
- `github-summaries`

이유:

- `blog`는 연도/날짜 구조가 필요할 수 있습니다.
- `githubstudy`는 generated 문서와 허브 재생성 로직이 있습니다.
- `skills`는 별도 문서 규칙이 있을 수 있습니다.
- `youtube-summaries`, `github-summaries`는 문서 수가 계속 늘어날 가능성이 높아 sidebar를 얕게 유지하는 별도 archive 패턴이 필요합니다.

## summary 섹션 운영 규칙

`youtube-summaries`, `github-summaries`는 일반 섹션과 다르게 “사이드바는 얕게, 탐색은 허브 페이지에서” 원칙을 따릅니다.

권장 구조:

```text
docs/youtube-summaries/
  index.md
  2026/
    index.md
    2026-04/
      index.md
      2026-04-10-sample.md
```

원칙:

- 사이드바에는 `Hub`, `Year`, `Month Overview`만 노출
- 개별 문서는 월별 `index.md` 안에서 탐색
- 문서 수가 늘어나도 sidebar 전체 길이는 크게 증가하지 않게 유지

## 정렬 원칙

기본 정렬:

1. `index.md`
2. `sidebar_order`
3. 파일명/폴더명

즉, 개요 문서를 먼저 두고 나머지를 안정적으로 정렬합니다.

## 운영 원칙

- 새 문서를 만들 때는 먼저 적절한 폴더를 고릅니다.
- 임시 문서는 가능한 한 `case-studies` 또는 `archive`로 보냅니다.
- 폴더 구조를 먼저 설계하고 문서를 추가합니다.
- 사이드바를 위해 파일명을 억지로 복잡하게 만들지 않습니다.

## 예외 허용 범위

다음 경우에만 기본 규칙에서 벗어날 수 있습니다.

- 공개 제목을 파일명과 다르게 보여야 할 때
- 임시로 사이드바에서 숨겨야 할 때
- 정렬 우선순위를 강제로 조정해야 할 때

그 외에는 파일 구조를 그대로 따르는 것을 원칙으로 합니다.

