---
title: "NEW Antigravity AgentKit 2.0 Supercharges Your AI 100x"
source_url: "https://www.youtube.com/watch?v=i3FOFgimXn0"
video_id: "i3FOFgimXn0"
channel: "WorldofAI"
published_date: "2026-03-14"
duration: "17:17"
source: "youtube"
template: "detailed"
transcript_source: "auto_caption"
summary_line: "Antigravity AgentKit 2.0와 InForge MCP를 묶어, 규칙·스킬·명령어·백엔드를 연결한 스펙 기반 풀스택 앱 자동화 흐름을 시연한 영상"
tags: ["youtube", "summary", "detailed", "antigravity", "agentkit-20", "inforge", "worldofai"]
---

# NEW Antigravity AgentKit 2.0 Supercharges Your AI 100x

- 원본 URL: https://www.youtube.com/watch?v=i3FOFgimXn0
- 원본 영상 등록일: 2026-03-14
- 재생시간: 17:17
- 처리 시각: 2026-04-16 10:22:10

## 전체 개요
- 규칙 읽기 지원(`agent MD`/`Gemini MD`)과 Agent Skill Kit를 통해 에이전트 출력을 더 구조화·제어하는 방식 소개
- Antigravity와 InForge MCP를 연결해 아이디어를 인터페이스·백엔드·배포까지 이어지는 실사용 앱으로 바꾸는 워크플로우 시연

## 타임라인 지식 구조도
- [00:00] 규칙 읽기 지원과 AgentKit 2.0 개요
- [03:00] 아이디어를 인터페이스·앱으로 전환
- [04:30] 설치·계정·CLI·MCP 연결
- [07:30] 워크스페이스 규칙과 슬래시 커맨드
- [09:00] 브레인스토밍의 스펙화와 아키텍처 결정
- [10:30] 백엔드·프론트엔드 일괄 생성
- [12:00] 인증 상태 확인과 직접 데이터 조작
- [15:00] 모델 게이트웨이·배포·마무리

## 주요 목차별 상세 요약

### [00:00] 규칙 읽기 지원과 AgentKit 2.0
- 핵심 업데이트: `agent MD`와 `Gemini MD` 규칙 읽기 지원
- 에이전트 지시를 모듈화해 출력 품질·통제력 강화
- Antigravity는 agent-first AI IDE, InForge는 AI 코딩 에이전트용 백엔드 플랫폼
  - 근거와 예시
    - `UI and UX exploration skill` 예시
    - `renewal / optimism / clarity` 축의 플랫폼 콘셉트 생성 사례
    - `16 specialized agents`, `40+ skills`, `11 slash commands`
  - 세부 요약
    - 도메인별 skill을 동적으로 불러와 작업 분담
    - 프롬프트 단발 입력보다 규칙·스킬·워크스페이스 설정이 중심
    - 커스터마이즈 폭 확장, 환각 억제, 더 정밀한 생성 흐름 강조

### [03:00] 아이디어를 인터페이스·앱으로 전환
- 아이디어에서 인터페이스, 더 나아가 실동작 앱까지 AI 에이전트로 연결
- 프롬프트 나열보다 workflow와 spec 중심의 제작 강조
- 랜딩페이지 수준이 아니라 real back-end가 붙은 풀스택 결과물 지향
  - 근거와 예시
    - 지출 추적 앱 예시
    - `idea → interface → fully functional app` 흐름
    - AI agents가 설계·생성·구현을 잇는 구조
  - 세부 요약
    - 요구사항을 먼저 구조화한 뒤 에이전트가 구현을 수행
    - 겉모양 데모보다 실제 사용 가능한 앱으로 이어지는 흐름을 전면에 둠
    - 이후 단계에서 InForge 연결, 인증, 배포까지 이어질 전개를 예고

### [04:30] 설치·계정·CLI·MCP 연결
- Antigravity 설치 후 Google 계정 인증
- InForge 계정 생성, 프로젝트 생성, 리전 선택
- 터미널 `npx` CLI로 프로젝트 링크, MCP 연결 코드로 Antigravity와 백엔드 접속
  - 근거와 예시
    - InForge 프로젝트 상태 `healthy` 확인
    - CLI가 설치되었다는 점
    - MCP 연결 후 backend integration 가능
  - 세부 요약
    - 전역 설치 또는 디렉터리 내 설치 중 선택 가능
    - 설정 완료 뒤 에이전트가 백엔드에 직접 요청을 보낼 수 있는 구조
    - 초기 세팅이 끝나야 다음 자동화 단계가 작동하는 전제조건

### [07:30] 워크스페이스 규칙과 슬래시 커맨드
- `rules workspace`에서 `Gemini MD` 행동 규칙 구성
- `/brainstorm`, `/create`, `/debug`, `/deploy`, `/enhance` 등 공통 개발 작업용 커맨드 제공
- 개별 지시를 길게 쓰기보다 규칙 파일과 명령어로 작업 흐름을 표준화
  - 근거와 예시
    - `brainstorm.md`, `skills.md` 사용
    - `11 slash commands`
    - 공통 개발 작업을 위한 명령어 세트
  - 세부 요약
    - 필요한 specialist를 매번 수동 지정하지 않아도 됨
    - front-end, back-end, security 등 도메인별 역할 분리
    - penetration test 같은 보안 작업도 스킬 범주로 묶어 처리

### [09:00] 브레인스토밍의 스펙화와 아키텍처 결정
- rough plan을 agent가 빌드 가능한 spec으로 변환
- platform / framework / auth / storage / functions까지 설계 범위 확장
- 추상 아이디어를 구현 가능한 항목으로 분해해 환각을 줄이는 흐름
  - 근거와 예시
    - 개인 지출 추적 앱, 초미니멀 스타일, 영수증 첨부 목적
    - `strategic question` 단계에서 플랫폼·프레임워크 논의
    - spec-driven workflow
  - 세부 요약
    - 아이디어를 기능 목록이 아니라 구조와 의존성으로 재정렬
    - 백엔드와 프론트엔드 작업을 분리하되 한 흐름으로 묶음
    - 구현 전 단계에서 에이전트가 무엇을 만들지 명시하는 구조

### [10:30] 백엔드·프론트엔드 일괄 생성
- 데이터베이스, 인증, 스토리지, 함수, 배포까지 백엔드 기본기 자동 구성
- 디자인 시스템, 대시보드, 지출, 영수증, 예산 탭 등 프론트엔드 뼈대 생성
- 앱 구조와 화면 구성이 함께 나오는 완성형 세팅 강조
  - 근거와 예시
    - GitHub login/authentication 연결
    - `table` 예시: title, content, author
    - analytics 탭의 monthly spending, transaction volume, category insights
  - 세부 요약
    - 프로젝트 구조를 읽고 기존 백엔드 통합 상태를 반영
    - receipts, budgets, categories가 자연스럽게 이어지는 데이터 흐름
    - UI 완성도와 기능 완성도를 동시에 보여주려는 데모 구성

### [12:00] 인증 상태 확인과 직접 데이터 조작
- GitHub 로그인 인증이 연결된 상태 확인
- CLI와 MCP가 연결되어 터미널에서 백엔드 명령 실행
- 데이터 추가 시 DB와 UI가 바로 맞물리는 흐름 시연
  - 근거와 예시
    - GitHub login이 `verified` 상태
    - `create post table` 예시: title/content/author
    - profile image upload, user 추가, storage 설정
  - 세부 요약
    - 인증이 세팅되면 별도 로그인 절차 없이 앱 흐름이 이어짐
    - 백엔드 커맨드 스트리밍으로 구조 변경을 직접 반영
    - 지출 추가 시 receipts, budgets, categories 목록에 즉시 반영되는 예시

### [15:00] 모델 게이트웨이·배포·마무리
- 프로젝트 안 model gateway로 LLM 기능을 쉽게 탑재
- 영수증 transcription에 Gemini 3.0 / Gemini 3 Flash 사용
- 배포 로그, 환경변수, 도메인 연결까지 한 흐름으로 마감
  - 근거와 예시
    - Gemini 3.0 모델 코드상 활성화
    - `deployment logs`, `environment variables`, `domain` 확인
    - AI SaaS 랜딩페이지나 CRM 대시보드가 아닌 실제 동작 앱
  - 세부 요약
    - 배포 섹션에서 live/running 상태를 확인하는 흐름
    - `completely for free`라는 표현으로 비용 장벽이 낮음을 강조
    - 구독, 알림, 뉴스레터, Discord, Twitter 등 후속 동선 제시

## 핵심 결론
- 규칙 파일, 스킬, 슬래시 커맨드, MCP, 백엔드 플랫폼을 한 흐름으로 묶어 프롬프트 조립이 아니라 스펙 기반 실행으로 바꾸는 것이 핵심 메시지
- 결과물의 포인트는 예쁜 데모가 아니라 인증·DB·스토리지·모델 연동·배포까지 붙은 실사용 풀스택 앱

## 액션 아이템
- Antigravity를 설치하고 Google 계정으로 인증하기
- InForge 계정을 만들고 프로젝트와 리전을 선택하기
- 터미널에서 `npx` CLI 링크 명령으로 프로젝트를 연결하기
- MCP 연결 코드를 Antigravity 터미널에 붙여넣어 백엔드 연결을 활성화하기
- 배포 후 `deployment logs`, `environment variables`, `domain` 상태를 확인하기

## 핵심 키워드
- Antigravity
- AgentKit 2.0
- InForge
- MCP
- Gemini
