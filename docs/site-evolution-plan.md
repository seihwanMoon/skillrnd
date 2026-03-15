---
title: 사이트 고도화 방향
outline: deep
---

# 사이트 고도화 방향

기준일: `2026-03-15`

## 1. 방향성 검토

현재 사이트를 단순한 `skills 위키`로 두는 것보다 아래 3개 축을 함께 운영하는 방향이 더 좋다.

1. 개인 블로그
2. skill 허브
3. 분야별 실전 아카이브

이 구조는 자연스럽다. 이유는 다음과 같다.

- 블로그는 개인 관점과 실험 기록을 담는다.
- skill 허브는 재사용 가능한 자산과 레퍼런스를 담는다.
- `vibe coding`, `제조 AI`, `Korea-special` 같은 분야 섹션은 주제별 전문성을 보여준다.

즉, 이 사이트는 `개인 기술 블로그`이면서 동시에 `큐레이션된 AI 작업 허브`가 될 수 있다.

## 2. 추천 사이트 구조

### 2.1 최상위 메뉴

- Home
- Blog
- Skills Hub
- Vibe Coding
- Manufacturing AI
- Korea Picks
- Rankings
- References

### 2.2 역할 분리

#### Blog

- 실험 기록
- 도입기
- 사용 후기
- 비교 글
- 튜토리얼

#### Skills Hub

- 로컬 skill 문서
- 외부 저장소 문서
- 카테고리별 허브
- 설치/활용 가이드

#### Vibe Coding

- vibe coding workflow
- agent 조합
- promptless workflow
- 코드 생성 + 검증 루프
- 실제 사례 정리

#### Manufacturing AI

- 제조 현장 적용 사례
- 품질 검사
- 설비 이상탐지
- 문서/도면 자동화
- 산업 데이터 활용

#### Korea Picks

- 한국 법령/공공데이터/금융/부동산 특화 MCP와 skill
- 한국어 중심 문서
- 국내 실사용에 맞는 도구 큐레이션

## 3. 글로벌 skill 허브 축

현재 참고 가치가 높은 축은 아래와 같다.

- [OpenAI Skills](https://github.com/openai/skills)
  - `Codex` 기준 공식 카탈로그 성격
- [Vercel Agent Skills](https://github.com/vercel-labs/skills)
  - 오픈 agent skills 생태계 축
- [mdskills.ai](https://www.mdskills.ai/)
  - 다중 플랫폼 지원과 카테고리 탐색이 강점
- [skills.sh](https://skills.sh/)
  - leaderboard와 설치 기반 탐색 흐름이 강점
- [SkillsCokac](https://skills.cokac.com/)
  - 커뮤니티형 공개 skill 공유 허브
- [Ai-Agent-Skills](https://github.com/MoizIbnYousaf/Ai-Agent-Skills)
  - 다수 agent 설치 흐름을 제공
- [n-skills](https://github.com/numman-ali/n-skills)
  - curated marketplace 성격

## 4. 한국 특화 섹션은 매우 유효함

이 방향은 차별점이 된다. 글로벌 사이트는 많아도 `한국 실무 맥락`에 맞춘 큐레이션은 상대적으로 빈약하다.

초기 후보:

- [mcp-kr-legislation](https://github.com/ChangooLee/mcp-kr-legislation)
  - 한국 법령 통합 MCP
- [law-mcp](https://github.com/finalchild/law-mcp)
  - 한국 법령 데이터 접근 MCP
- [OpenDart-mcp](https://github.com/keonho-kim/OpenDart-mcp)
  - 금융감독원 전자공시 특화
- [korea-stock-analyzer-mcp](https://github.com/Mrbaeksang/korea-stock-analyzer-mcp)
  - 한국 주식 분석 특화
- [alphagenome-mcp](https://github.com/taehojo/alphagenome-mcp)
  - 한국어 사용 예시와 연구/분석 워크플로우가 잘 보임

추천 기준:

- 한국 공공데이터 또는 국내 서비스와 연결되는가
- 한국어 사용자에게 실제 가치가 큰가
- 문서가 비교적 잘 되어 있는가
- 설치와 검증이 가능한가

## 5. 랭킹 기준은 재설계가 필요함

`조회수`와 `다운로드` 기준은 직관적이지만, 바로 쓰기에는 문제가 있다.

### 5.1 조회수 기준의 문제

GitHub 저장소의 트래픽 뷰는 공개 지표가 아니다. GitHub 문서 기준으로 `push access`가 있는 사람만 저장소 트래픽을 볼 수 있고, 범위도 최근 14일이다.  
참고: [GitHub repository traffic docs](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository)

즉, 외부 저장소를 공정하게 `조회수`로 랭킹하기는 어렵다.

### 5.2 다운로드 기준의 문제

- npm 다운로드 수는 공개 API로 조회할 수 있지만, 패키지에만 적용 가능하다.
- GitHub repo 자체에는 동일한 공개 다운로드 기준이 없다.
- npm 다운로드는 CI/봇 영향으로 왜곡될 수 있다.

### 5.3 추천하는 대안

공개 지표 기반 `복합 점수`가 낫다.

추천 공식 예시:

- GitHub stars
- forks
- 최근 릴리스 날짜
- 최근 커밋 활동
- 패키지가 있으면 npm install 규모
- 외부 디렉터리에서 노출되는 install count
- 수동 큐레이션 점수

즉, `인기`와 `품질`을 분리해서 보여주는 것이 더 좋다.

예:

- 인기 순위
- 최근 급상승
- 한국 실무 추천
- 검증 완료
- 초심자 추천

## 6. 추천 콘텐츠 모델

문서 종류를 4가지로 나누는 것이 좋다.

### 6.1 Skill Page

개별 skill 또는 저장소 문서

### 6.2 Blog Post

의견, 실험, 후기, 비교

### 6.3 Collection Page

주제별 묶음

예:

- 문서화 스택
- vibe coding 스타터 팩
- 한국 법률/금융 MCP 모음
- 제조 AI 실무 도구 모음

### 6.4 Ranking Page

정적 빌드 시점 기준 랭킹 페이지

## 7. 고도화 우선순위

### 1단계

- 블로그 섹션 추가
- `Korea Picks` 카테고리 추가
- `Rankings` 초안 추가
- `Manufacturing AI` 소개 페이지 추가

### 2단계

- 인기/추천/검증 배지 설계
- 랭킹 산정 규칙 문서화
- 외부 저장소 메타데이터 수집 스크립트 추가

### 3단계

- GitHub API 기반 stars/forks/release 메타 수집
- npm download 보강
- 정적 생성 시 자동 랭킹 계산

## 8. 현재 판단

이 아이디어는 충분히 강하다. 특히 차별화 포인트는 아래 두 가지다.

1. 한국어 중심의 AI coding skill 허브
2. 한국 특화 실무 도구와 MCP/skill 큐레이션

즉, 단순히 `해외 skill 목록 번역`이 아니라, `한국 실무에 맞춘 AI 작업 허브`로 잡는 것이 맞다.
