---
title: "Claude Code is Expensive. This MCP Server Fixes It (Context Mode)"
source_url: "https://www.youtube.com/watch?v=QUHrntlfPo4"
video_id: "QUHrntlfPo4"
channel: "Better Stack"
published_date: "2026-03-13"
duration: "6:09"
source: "youtube"
template: "detailed"
transcript_source: "auto_caption"
summary_line: "Claude Code의 병목은 코드 작성이 아니라 MCP 출력이 컨텍스트를 잠식하는 문제이며, `context mode`는 출력물을 SQLite+FTS5로 인덱싱해 토큰 낭비를 줄이고 세션 지속성을 높인다."
tags: ["youtube", "summary", "detailed", "claude-code", "context-mode", "mcp", "better-stack"]
---

# Claude Code is Expensive. This MCP Server Fixes It (Context Mode)

- 원본 URL: https://www.youtube.com/watch?v=QUHrntlfPo4
- 원본 영상 등록일: 2026-03-13
- 재생시간: 6:09
- 처리 시각: 2026-04-16 10:23:23

## 전체 개요
- Claude Code에서 반복되는 MCP 툴 출력이 200K 컨텍스트 윈도우를 빠르게 소진하는 구조적 문제를 짚고, 이를 `context mode` MCP 서버로 줄이는 목적.
- 대형 원문을 그대로 넣지 않고 로컬 SQLite/FTS5 색인으로 질의하게 만들어, 비용 절감보다도 노이즈 제거와 추론 공간 확보를 핵심 가치로 제시.

## 타임라인 지식 구조도
- [00:00] MCP 출력이 만드는 컨텍스트 비대화
- [01:30] SQLite+FTS5 기반 색인 전환
- [03:00] 설치 방법과 Claude Code 연동
- [04:30] Python 테스트에서 본 토큰 절감 효과
- [06:00] 절감폭의 한계와 실제 가치

## 주요 목차별 상세 요약

### [00:00] MCP 출력에 잠식되는 컨텍스트 윈도우
- Claude Code의 병목은 기능 부족이 아니라 컨텍스트 누수
- MCP 툴 호출 결과가 그대로 누적되며 200K 컨텍스트 윈도우를 갉아먹음
- 툴 사용이 많아질수록 코드 작성 전부터 윈도우가 소진되는 구조
- 짧은 세션에서도 컴팩션 전 한계가 빨리 도달
  - 근거와 예시
    - Playwright snapshot 1회 약 56KB
    - GitHub issues 20개 읽기 약 59KB
    - 기획 단계 반복 작업만으로도 윈도우의 70% 소진 가능
    - 컴팩션 전 30분 내외 활동만으로 한계 도달 사례 제시
  - 세부 요약
    - 문제의 핵심을 툴 기능이 아니라 툴 출력 크기와 반복 누적으로 정의
    - 대형 출력이 매번 원문 형태로 들어오면 토큰이 사고보다 먼저 소모되는 흐름
    - 비용 절감 자체보다 세션 유지와 추론 여지 확보를 더 중요한 문제로 배치

### [01:30] 원문 주입 대신 색인 질의로 바꾸는 구조
- `context mode` MCP 서버는 대형 출력물을 직접 넣지 않고 색인된 데이터만 다룸
- 로컬 SQLite DB와 FTS5 full text search로 원문을 검색 가능하게 만듦
- AI는 원본 덤프가 아니라 인덱싱된 결과에 질의해 필요한 부분만 받음
- 컨텍스트 절약과 세션 단절 완화를 동시에 노림
  - 근거와 예시
    - 56KB Playwright snapshot이 299 bytes로 축소, 약 99% 감소
    - analytics CSV가 222 bytes로 축소, 거의 100% 감소
    - 원시 데이터 20KB 중 약 5KB만 샌드박스에 유지하는 흐름 언급
  - 세부 요약
    - 샌드박스+인덱싱 방식으로 OS 직결형 접근을 줄이고, 검색 가능한 요약만 재주입
    - 핵심은 원문 보존이 아니라 재전송 최소화
    - 검색 가능한 구조로 바꾸면 반복적인 긴 출력 재주입을 피할 수 있음

### [03:00] hook 기반 추적과 우선순위 스냅샷
- 파일 편집, get, sub-agent task 같은 이벤트를 hook으로 추적
- 컴팩션 시 우선순위 계층 스냅샷을 다시 주입해 맥락을 복원
- 결정과 오류를 남겨 같은 실패를 반복하지 않게 설계
- 사실상 코딩 세션용 체크포인트 역할
  - 근거와 예시
    - 컨텍스트 컴팩션 시 재주입되는 스냅샷은 보통 2KB 이하
    - 20분 전 실패한 수정안을 다시 반복하지 않도록 결정/오류를 유지
  - 세부 요약
    - 단순 문서 검색 서버가 아니라 세션 상태 관리 장치에 가까운 구조
    - 툴 호출 흔적과 작업 결과를 추적해 다음 질의에 필요한 최소 맥락만 남김
    - 컴팩션 이후에도 현재 세션의 작업 흐름이 끊기지 않도록 설계

### [04:30] 설치와 Claude Code 연동 절차
- 설치 방식은 npm 기반
- `context mode`를 설치한 뒤 설정 파일에 연결 정보 추가
- Claude Code에서 곧바로 context mode를 사용하도록 붙이는 흐름
- 추가 환경으로 Gemini CLI, VS Code Copilot도 언급
  - 근거와 예시
    - `npm install context mode` 실행 안내
    - settings에 config 추가 안내
  - 세부 요약
    - 영상은 복잡한 커스텀 셋업보다 바로 붙여 쓰는 사용성을 강조
    - 도구 환경은 Claude Code 중심이지만 다른 CLI/에디터 조합도 함께 언급
    - 핵심은 설치 자체보다 MCP 출력의 처리 방식을 바꾸는 것

### [06:00] 데모에서 드러난 절감폭과 조건
- 간단한 Python 테스트에서 25% 컨텍스트 절감 확인
- 이 수치는 작아 보여도 표준 200K 윈도우에서는 의미가 있음
- 절감폭은 작업 유형에 따라 크게 달라짐
- 작은 파일 테스트와 대규모 리포 조사, 프로덕션 로그 분석의 효과는 다를 수 있음
  - 근거와 예시
    - 데모 결과 약 1,200 tokens 절감
    - 전체 기준으로 약 25% reduction
    - 작은 파일 기준 수치임을 명시
    - 대규모 리포 조사나 프로덕션 로그 분석에서는 더 큰 절감 가능성 언급
  - 세부 요약
    - access.log 5,000줄 생성 후 매 100번째 줄마다 500 error 삽입
    - Claude는 전체 5,000줄을 직접 받지 않고 인덱싱 완료 후 검색 질의로 접근
    - 500 패턴과 관련 IP를 요약하도록 요청
    - 절감 성과보다 반복 전송 제거와 검색형 접근의 구조적 이점에 무게

## 핵심 결론
- 이 영상의 메시지는 명확함: Claude Code의 진짜 비용은 모델 호출이 아니라, 쓸데없이 큰 MCP 출력이 컨텍스트를 갉아먹는 데 있음.
- `context mode`는 원문을 줄여 토큰을 아끼는 수준이 아니라, 색인·질의·스냅샷 복원으로 세션을 더 오래, 더 덜 소모적으로 유지하게 만드는 장치.

## 액션 아이템
- `context mode` MCP 서버를 설치하기
- `npm install context mode` 실행하기
- Claude Code 설정에 `context mode` config 추가하기

## 핵심 키워드
- Claude Code
- context mode
- MCP
- SQLite FTS5
- 컨텍스트 절감
