---
title: "PaperClip + OpenClaw + OpenCode: The Ultimate Open Source Swarm Intelligence Mission Control"
source_url: "https://www.youtube.com/watch?v=iNxNkvZfNHM"
video_id: "iNxNkvZfNHM"
channel: "Devs Kingdom"
published_date: "2026-03-12"
duration: "9:07"
source: "youtube"
template: "detailed"
transcript_source: "auto_caption"
summary_line: "PaperClip을 중심으로 OpenClaw·OpenCode 계열 에이전트를 조직도, 프로젝트, 목표, 승인, 알림까지 묶어 운영하는 오픈소스 스웜 컨트롤 패널 데모"
tags: ["youtube", "summary", "detailed", "paperclip", "스웜-오케스트레이션", "조직도", "devs-kingdom"]
---

# PaperClip + OpenClaw + OpenCode: The Ultimate Open Source Swarm Intelligence Mission Control

- 원본 URL: https://www.youtube.com/watch?v=iNxNkvZfNHM
- 원본 영상 등록일: 2026-03-12
- 재생시간: 9:07
- 처리 시각: 2026-04-16 10:22:57

## 전체 개요
- 로컬 인스턴스에서 여러 에이전트와 도구를 한 콘솔로 오케스트레이션하는 PaperClip 데모
- Jira 같은 업무관리 구조에 에이전트 실행, 승인, 목표 계층, 상태 추적을 결합한 흐름 시연

## 타임라인 지식 구조도
- [00:00] PaperClip 데모와 스웜 컨트롤 패널 개요
- [01:30] 회사 생성과 조직도 배치
- [03:00] 프로젝트·태스크 할당과 실행 트리거
- [04:30] 목표의 부모-자식 계층 구조
- [06:00] 이슈 생성, 우선순위·상태·라벨 관리
- [07:30] 세일즈 에이전트 생성과 CEO 승인 흐름
- [09:00] 정리와 지원 채널 안내

## 주요 목차별 상세 요약

### [00:00] PaperClip 오케스트레이션 개요
- PaperClip을 여러 에이전트와 도구를 묶는 제어판으로 소개
- OpenClaw, OpenCode/ColorCode 같은 서로 다른 에이전트 툴을 한 콘솔에서 자동화
- 형태상 에이전트가 붙은 Jira에 가까운 업무관리형 인터페이스
- 핵심 시연 대상은 에이전트 생성, 계층 구조, 태스크 실행, 승인, 진행 추적
  - 근거와 예시
    - 대시보드 예시로 에이전트 4개 생성
    - 깔끔하고 세련된 UI를 강조
    - 프로젝트·태스크·목표·승인·알림을 하나의 흐름으로 연결
    - 오픈소스 모델 사용 시 비용이 보이지 않거나 거의 없다고 언급
  - 세부 요약
    - 단순 실행기보다 운영판에 가까운 구조
    - 에이전트 동작을 작업 단위가 아니라 조직 단위로 다루는 흐름
    - 데모는 로컬 인스턴스 기준

### [01:30] 회사 생성과 조직도 배치
- 회사 단위 객체를 만들고 그 아래에 에이전트 조직을 배치
- 예시 회사명은 ABC incorporated
- CEO 아래에 역할별 하위 에이전트를 두는 구조
- founding engineer 아래 senior engineer를 배치하는 식의 계층 표현
  - 근거와 예시
    - 회사 예시: ABC incorporated
    - 역할 예시: CEO, founding engineer, marketing specialist, senior engineer
    - sales agent가 OR 구조에 직접 보고하도록 만든 사례 언급
  - 세부 요약
    - 조직도에서 에이전트 관계를 시각적으로 파악 가능
    - 에이전트 생성 후 바로 상하 관계를 연결하는 흐름
    - 실행 주체를 직함처럼 배치해 업무 분장을 명시

### [03:00] 프로젝트·태스크 할당과 실행 트리거
- 프로젝트를 만들고 특정 태스크를 그 프로젝트에 귀속
- 상단 우측 아이콘에서 프로젝트 할당 동작을 수행
- 댓글로 실행을 유발하는 흐름이 존재
- 태스크 단위로 실행 상태를 관리하고 필요 시 cancel 가능
  - 근거와 예시
    - 이슈 예시: agent 만들기, hello world 테스트 파일 추가
    - 태스크 생성 시 특정 프로젝트에 연결 가능
    - run 상세 상태 확인용 섹션과 provisioning 진행 표시 언급
  - 세부 요약
    - 프로젝트-태스크 연결이 에이전트 실행 관리의 중심
    - 작업 지시가 댓글이나 태스크 생성으로 흘러갈 수 있음
    - 실행 중 상태를 별도 화면에서 추적

### [04:30] 목표 계층과 범위 관리
- 목표를 회사, 팀, 에이전트, 태스크 레벨로 설정
- parent goal과 sub goal로 목표를 계층화
- 프로젝트와 목표를 함께 엮어 실행 방향을 정리
- 조직 운영을 단일 작업이 아닌 구조화된 목표 체계로 처리
  - 근거와 예시
    - goal level 범위: company / team / agent / task
    - 구조 용어: parent goal, sub goal
    - 태스크가 목표와 연결될 수 있다고 설명
  - 세부 요약
    - 목표가 상위-하위 관계로 분해되며 작업 맥락을 제공
    - 에이전트 단위 수행과 더 큰 조직 목표를 연결
    - 단발성 명령보다 관리형 워크플로우에 초점

### [06:00] 이슈 속성: 우선순위·상태·라벨·승인
- 이슈를 생성하고 우선순위와 상태를 조정
- 라벨은 만들 수 있지만 데모에서는 단순하게 생략
- linked approvals로 승인 흐름을 붙일 수 있음
- 승인 없이는 에이전트 생성이나 실행 통제가 어려울 수 있는 구조
  - 근거와 예시
    - 상태값 예시: plan, active, archived, cancelled
    - priority, status 수정 가능
    - labels 생성 가능하지만 현재는 단순하게 처리
    - linked approvals 언급
  - 세부 요약
    - 업무관리 도구처럼 이슈 메타데이터를 세밀하게 조절
    - 실행 전후의 승인 절차가 운영의 핵심 축
    - 오작동 또는 의도치 않은 실행 가능성에 대한 맥락 제공

### [07:30] 세일즈 에이전트 생성과 CEO 승인
- sales agent를 생성해 CEO에 직접 보고하게 하는 이슈를 만든 사례
- 대시보드에서 provisioning 진행과 runs 상태를 추적
- 완료 후 CEO의 hiring approval 요청이 나타남
- 승인하면 새 에이전트가 조직도에 반영
  - 근거와 예시
    - sales agent가 OR 구조에서 CEO에 직접 보고
    - runs 섹션에서 상세 상태 확인 가능
    - CEO approval 후 OR 구조에 새 에이전트가 들어감
  - 세부 요약
    - 에이전트 생성이 단순 생성이 아니라 승인 워크플로우와 연결
    - 실행 결과가 조직 구조에 즉시 반영되는 흐름
    - 조직도, 승인, 진행상태가 하나의 루프로 묶임

### [09:00] 마무리와 운영 안내
- 다음 영상 안내와 함께 마무리
- 지원 채널로 Discord와 notebook 안내
- GitHub README의 quick start로 로컬 실행 가능하다고 언급
- VPS/production은 별도 문서나 지원을 통해 다루는 흐름
  - 근거와 예시
    - GitHub README quick start 언급
    - Discord 문의 안내
    - detailed notebook 언급
    - VPS/production 배포는 별도 지원 필요
  - 세부 요약
    - 데모는 로컬 설치와 빠른 시작 문서 중심
    - 운영 환경은 로컬과 별개로 취급
    - 기본 사용법 이후 확장/배포 지원 경로를 제시

## 핵심 결론
- 제작자가 전달하는 메시지는, PaperClip이 여러 오픈소스 에이전트를 단순 실행 도구가 아니라 회사 조직도, 프로젝트, 목표, 승인, 알림까지 포함한 운영 시스템으로 묶어주는 컨트롤 레이어라는 점
- 핵심 의미는 에이전트 자동화를 작업 수준이 아니라 조직 운영 수준으로 끌어올리는 데 있음

## 액션 아이템
- GitHub README의 quick start로 로컬 실행
- Discord와 detailed notebook으로 VPS/production 관련 안내 확인
- + 버튼의 advanced configuration으로 다른 프레임워크 기반 에이전트 생성
- 프로젝트에 태스크를 할당하고 linked approvals로 승인 흐름 연결

## 핵심 키워드
- PaperClip
- 스웜 오케스트레이션
- 조직도
- 승인 워크플로우
- 프로젝트-태스크
