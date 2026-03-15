---
title: 현재 개발 상태
outline: deep
sidebar_order: -20
---

# 현재 개발 상태

기준일: `2026-03-15`

## 1. 서비스 상태

- 라이브 도메인: [blog.moonworld.uk](https://blog.moonworld.uk/)
- 배포 방식: `GitHub Pages` + `GitHub Actions`
- 사이트 성격: 개인 블로그 + skill 허브 + 주제별 실전 아카이브
- 현재 브랜드명: `Moonworld AI Workbench`

## 2. 현재 완성된 영역

### 2.1 출판형 구조

- 홈 랜딩 페이지
- 블로그 섹션
- `Vibe Coding` 섹션
- `Manufacturing AI` 섹션
- `Korea Picks` 섹션
- `Rankings` 섹션
- `Skills Hub`
- `References`
- `Recipes`

### 2.2 콘텐츠 기반

- skill / repository 문서 10개 확보
- 카테고리 비교 페이지 구성
- workflow recipe 페이지 구성
- 외부 저장소 레퍼런스 정리

### 2.3 운영 기능

- Markdown 기반 콘텐츠 관리
- 동적 사이드바 생성
- GitHub 웹 편집용 템플릿 제공
- 공개 `edit link` 제거
- `/admin` CMS 스캐폴딩 추가

## 3. 현재 편집 방식

### 권장 1순위

GitHub 웹에서 직접 `.md` 파일 수정

### 권장 2순위

로컬에서 Markdown 편집 후 push

### 준비만 된 상태

`/admin` CMS 화면

주의:

- `/admin`은 UI와 로컬 편집 흐름은 준비됨
- 라이브 GitHub 저장 인증은 아직 미완료

## 4. 정보 구조

현재 상위 메뉴:

- 홈
- 블로그
- 제조 AI
- Vibe Coding
- 허브

현재 왼쪽 사이드바 구조:

- 홈
- 블로그
- 제조 AI
- Vibe Coding
- 허브
  - 스킬 허브
  - Korea Picks
  - 랭킹

## 5. 운영 문서

- [개발 가이드](./development-guide.md)
- [콘텐츠 운영 가이드](./content-operations.md)
- [Admin 운영 가이드](./admin-guide.md)
- [개발 인수인계 노트](./dev-handoff.md)

## 6. GitHub 웹 편집에 필요한 문서

- [블로그 글 템플릿](./templates/blog-post-template.md)
- [Korea Picks 템플릿](./templates/korea-picks-template.md)
- [Manufacturing AI 템플릿](./templates/manufacturing-ai-template.md)

## 7. 최근 구현 완료 항목

- 출판형 상위 섹션 추가
- 상단 메뉴 축소
- 전역 2단계 사이드바 적용
- Markdown 생성/삭제 스크립트 추가
- GitHub 웹 편집 템플릿 추가
- `/admin` CMS 스캐폴딩 추가
- 공개 `이 페이지 편집 제안` 제거

## 8. 남은 핵심 과제

1. 블로그 실제 글 2~3개 추가
2. `Korea Picks` 실문서 추가
3. `Manufacturing AI` 실문서 추가
4. 랭킹 보드 실제 데이터 구조 설계
5. `/admin` 라이브 인증 방식 결정
6. 비교 전용 페이지 추가 여부 결정

## 9. 다음 세션 추천 시작점

가장 좋은 순서:

1. `Korea Picks` 첫 문서 2개 작성
2. `Manufacturing AI` 첫 문서 2개 작성
3. 블로그 글 1~2개 작성
4. 랭킹용 메타데이터 구조 설계

## 10. 현재 판단

지금은 구조 설계 단계는 사실상 끝났다. 다음부터는 `실제 콘텐츠 축적 단계`로 봐야 한다. 즉, 더 중요한 것은 메뉴나 구조 변경보다 각 섹션에 신뢰할 수 있는 글과 큐레이션 보드를 쌓는 일이다.
