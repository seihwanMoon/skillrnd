---
title: 개발 인수인계 노트
outline: deep
---

# 개발 인수인계 노트

기준일: `2026-03-15`

## 0. 오늘 추가 진행 내용

- GitHub Pages 라이브 URL 확인: [seihwanMoon.github.io/skillrnd](https://seihwanMoon.github.io/skillrnd/)
- skill 문서 3개 추가
  - `playwright-interactive`
  - `skill-creator`
  - `skill-installer`
- `references/repos.md`를 실제 GitHub 레퍼런스 목록으로 확장
- `skills/index.md`와 카테고리 문서를 현재 상태에 맞게 갱신
- 외부 저장소 문서 4개 추가
  - `openai/skills`
  - `vercel-labs/skills`
  - `Repomix`
  - `Gitingest`
- `references`를 허브, 로컬 스킬, 외부 저장소로 분리 시작
- 카테고리 문서에 비교 기준과 추천 흐름 추가
- 레시피 문서를 실제 workflow 중심으로 확장
- `skill-catalog-curation` recipe 추가
- 상위 섹션 추가
  - `Blog`
  - `Vibe Coding`
  - `Manufacturing AI`
  - `Korea Picks`
  - `Rankings`
- 홈 페이지를 출판형 구조로 개편
- 동적 사이드바 도입
- Markdown 생성/삭제 스크립트 추가
- 개발/콘텐츠 운영 문서 추가

## 1. 현재까지 완료한 작업

### 1.1 프로젝트 방향 확정

- 서비스 형태를 `GitHub Pages` 기반 정적 문서 사이트로 확정했다.
- 사이트 엔진은 `VitePress`로 선택했다.
- 제품 방향은 `AI Coding Skills Wiki`로 정리했다.
- 핵심 산출물은 `설명`, `분류`, `Mermaid`, `원문 링크`, `레시피`다.

### 1.2 문서 구조와 계획 수립

- 상세 계획서를 작성했다.
- 문서 구조를 `categories`, `skills`, `recipes`, `diagrams`, `references`로 나눴다.
- 개별 skill 문서 템플릿의 기본 항목을 정의했다.

관련 문서:

- [프로젝트 계획서](./project-plan.md)

### 1.3 사이트 스캐폴딩 완료

아래 기본 골격을 만들었다.

- 홈 페이지
- 카테고리 허브
- 스킬 목록
- 샘플 skill 문서 3개
- 레시피 2개
- 생태계 Mermaid 다이어그램 1개
- GitHub Pages 배포 워크플로우

### 1.4 GitHub 저장소 연결 및 배포

- 원격 저장소: [seihwanMoon/skillrnd](https://github.com/seihwanMoon/skillrnd)
- 기본 브랜치: `main`
- 초기 커밋 푸시 완료
- 라이브 사이트 확인 완료: [seihwanMoon.github.io/skillrnd](https://seihwanMoon.github.io/skillrnd/)

최신 커밋:

- `7b1cbf8` `Initial VitePress skills wiki scaffold`

## 2. 현재 파일 구조

핵심 파일:

- [README.md](D:/CODE/AICODE/skillrnd/README.md)
- [package.json](D:/CODE/AICODE/skillrnd/package.json)
- [docs/project-plan.md](D:/CODE/AICODE/skillrnd/docs/project-plan.md)
- [docs/.vitepress/config.mts](D:/CODE/AICODE/skillrnd/docs/.vitepress/config.mts)
- [docs/index.md](D:/CODE/AICODE/skillrnd/docs/index.md)
- [docs/development-guide.md](D:/CODE/AICODE/skillrnd/docs/development-guide.md)
- [docs/content-operations.md](D:/CODE/AICODE/skillrnd/docs/content-operations.md)
- [docs/blog/index.md](D:/CODE/AICODE/skillrnd/docs/blog/index.md)
- [docs/vibe-coding/index.md](D:/CODE/AICODE/skillrnd/docs/vibe-coding/index.md)
- [docs/manufacturing-ai/index.md](D:/CODE/AICODE/skillrnd/docs/manufacturing-ai/index.md)
- [docs/korea-picks/index.md](D:/CODE/AICODE/skillrnd/docs/korea-picks/index.md)
- [docs/rankings/index.md](D:/CODE/AICODE/skillrnd/docs/rankings/index.md)
- [docs/skills/index.md](D:/CODE/AICODE/skillrnd/docs/skills/index.md)
- [docs/skills/playwright-interactive.md](D:/CODE/AICODE/skillrnd/docs/skills/playwright-interactive.md)
- [docs/skills/skill-creator.md](D:/CODE/AICODE/skillrnd/docs/skills/skill-creator.md)
- [docs/skills/skill-installer.md](D:/CODE/AICODE/skillrnd/docs/skills/skill-installer.md)
- [docs/skills/openai-skills.md](D:/CODE/AICODE/skillrnd/docs/skills/openai-skills.md)
- [docs/skills/vercel-labs-skills.md](D:/CODE/AICODE/skillrnd/docs/skills/vercel-labs-skills.md)
- [docs/skills/repomix.md](D:/CODE/AICODE/skillrnd/docs/skills/repomix.md)
- [docs/skills/gitingest.md](D:/CODE/AICODE/skillrnd/docs/skills/gitingest.md)
- [docs/categories/index.md](D:/CODE/AICODE/skillrnd/docs/categories/index.md)
- [docs/recipes/index.md](D:/CODE/AICODE/skillrnd/docs/recipes/index.md)
- [docs/recipes/skill-catalog-curation.md](D:/CODE/AICODE/skillrnd/docs/recipes/skill-catalog-curation.md)
- [docs/diagrams/ecosystem-map.md](D:/CODE/AICODE/skillrnd/docs/diagrams/ecosystem-map.md)
- [docs/dev-handoff.md](D:/CODE/AICODE/skillrnd/docs/dev-handoff.md)
- [docs/references/index.md](D:/CODE/AICODE/skillrnd/docs/references/index.md)
- [docs/references/local-skills.md](D:/CODE/AICODE/skillrnd/docs/references/local-skills.md)
- [docs/references/external-repositories.md](D:/CODE/AICODE/skillrnd/docs/references/external-repositories.md)
- [docs/references/repos.md](D:/CODE/AICODE/skillrnd/docs/references/repos.md)
- [scripts/fix-shiki.mjs](D:/CODE/AICODE/skillrnd/scripts/fix-shiki.mjs)
- [scripts/content-manager.mjs](D:/CODE/AICODE/skillrnd/scripts/content-manager.mjs)
- [deploy.yml](D:/CODE/AICODE/skillrnd/.github/workflows/deploy.yml)

## 3. 확인된 기술 상태

### 3.1 빌드 상태

- `npm run docs:build` 통과 확인
- 정적 산출물은 `docs/.vitepress/dist`에 생성됨

### 3.2 배포 상태

- GitHub Actions 배포 워크플로우 추가 완료
- 라이브 사이트 접근 확인 완료
- 이후에는 배포 실패 여부만 주기적으로 보면 된다

### 3.3 현재 의존성 조합

- `vitepress`: `^1.6.4`
- `vitepress-plugin-mermaid`: `^2.0.17`
- `mermaid`: `^11.4.1`
- `shiki`: `^2.4.2`

## 4. 중요한 주의사항

### 4.1 버전 주의

초기 설치 과정에서 `shiki`와 `mermaid` 쪽 빌드 호환성 문제가 있었다. 현재 조합은 실제 빌드 성공 기준으로 맞춘 상태다.

- `shiki`는 `2.4.2`로 맞춰 두었다.
- `mermaid`는 `11.4.1`로 맞춰 두었다.
- 버전을 무심코 올리면 `VitePress` 빌드가 다시 깨질 수 있다.

### 4.2 보정 스크립트

일부 환경에서 `shiki` 누락 파일 문제가 있어서 아래 스크립트를 추가했다.

- [fix-shiki.mjs](D:/CODE/AICODE/skillrnd/scripts/fix-shiki.mjs)

이 스크립트는 `postinstall`에서 자동 실행된다.

## 5. 내일 바로 시작할 작업

우선순위 순서:

1. 실제 분석 대상 skill 후보 10개를 문서 기준으로 확정
2. `docs/skills/` 문서를 10개 이상으로 확장
3. `references/repos.md`를 `local`과 `external`로 분리
4. 각 상위 섹션에 실제 콘텐츠를 2~3개씩 채우기
5. Korea Picks와 Manufacturing AI 실문서 추가
6. 비교 페이지 또는 추천 페이지를 새로 추가

## 6. 내일 작업 체크리스트

- [x] GitHub Actions 배포 성공 여부 확인
- [x] 실제 사이트 URL 확인
- [x] 스킬 선정 기준 문서화
- [x] 우선순위 높은 skill 10개 목록 확정
- [ ] 각 skill의 원문 링크 수집
- [x] 1차 문서 5개 작성
- [x] `docs/skills/` 문서 10개 도달
- [x] `references` 분리 시작
- [x] 카테고리별 추천 문서 연결
- [x] 레시피 문서에 실제 활용 흐름 추가
- [x] 홈 페이지 문구와 첫인상 개선
- [x] 주요 상위 섹션 추가
- [x] 동적 사이드바 적용
- [x] Markdown 생성/삭제 기능 추가
- [x] 개발 운영 문서 작성
- [ ] 비교 페이지 추가 여부 결정

## 7. 추천 작업 순서

### 7.1 1단계: 배포 확인

- GitHub Actions 실행 결과 확인
- Pages URL 확인
- 깨진 링크나 레이아웃 문제 확인

### 7.2 2단계: 콘텐츠 채우기

- 공식/유명 skill 저장소부터 선정
- 각 문서를 동일한 템플릿으로 작성
- 사실과 추정 구분

### 7.3 3단계: 탐색성 강화

- 카테고리 페이지 보강
- related links 추가
- recipe 문서 확장

## 8. 다음 세션 시작 명령

로컬 개발 시작:

```bash
npm install
npm run docs:dev
```

빌드 확인:

```bash
npm run docs:build
```

Git 상태 확인:

```bash
git status
git log -1 --oneline
```

## 9. 다음 세션에서 먼저 볼 파일

- [docs/dev-handoff.md](D:/CODE/AICODE/skillrnd/docs/dev-handoff.md)
- [docs/project-plan.md](D:/CODE/AICODE/skillrnd/docs/project-plan.md)
- [docs/.vitepress/config.mts](D:/CODE/AICODE/skillrnd/docs/.vitepress/config.mts)
- [docs/references/repos.md](D:/CODE/AICODE/skillrnd/docs/references/repos.md)
- [docs/skills/index.md](D:/CODE/AICODE/skillrnd/docs/skills/index.md)

## 10. 현재 판단

지금 상태는 "기초 인프라 완료, 출판형 섹션 형성, Markdown 운영 자동화 적용" 단계다. 다음 작업은 각 상위 섹션에 실제 글과 큐레이션 보드를 채우고, 비교 전용 페이지를 도입하는 쪽이 가장 효율적이다.
