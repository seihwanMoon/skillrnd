---
title: Codex 카테고리
---

# Codex 카테고리

`Codex` 기반 워크플로우에서 직접 사용하거나 구조적으로 잘 맞는 skill을 모은다.

## 포함 기준

- `SKILL.md` 구조가 `Codex`에 맞춰 설계됨
- `Codex` 또는 Codex형 에이전트에서 그대로 재사용 가능
- 로컬 도구 실행, 문서 생성, 코드 분석 흐름이 강함

## 빠른 선택 가이드

- 저장소를 문서로 바꾸고 싶으면 [repo-intelligence](/skills/repo-intelligence)
- 실제 브라우저 테스트를 하고 싶으면 [playwright](/skills/playwright)
- 같은 세션을 유지하며 반복 디버깅하고 싶으면 [playwright-interactive](/skills/playwright-interactive)
- 앱과 도구 브리지를 설계하려면 [chatgpt-apps](/skills/chatgpt-apps)
- skill 자체를 만들거나 개선하려면 [skill-creator](/skills/skill-creator)
- 공식 카탈로그와 설치 흐름 기준이 필요하면 [openai/skills](/skills/openai-skills)와 [skill-installer](/skills/skill-installer)

## 대표 문서

- [repo-intelligence](/skills/repo-intelligence)
- [playwright](/skills/playwright)
- [playwright-interactive](/skills/playwright-interactive)
- [chatgpt-apps](/skills/chatgpt-apps)
- [skill-creator](/skills/skill-creator)
- [skill-installer](/skills/skill-installer)
- [openai/skills](/skills/openai-skills)

## 비교 포인트

| 문서 | 주된 역할 | 강점 |
| --- | --- | --- |
| `repo-intelligence` | 저장소 문서화 | 한국어 digest/summary/tutorial 번들 생성 |
| `playwright` | 브라우저 자동화 | 실제 페이지 기반 검증 |
| `playwright-interactive` | 반복 UI 디버깅 | 핸들 재사용과 장기 세션 |
| `chatgpt-apps` | 앱/MCP 설계 | 도구와 UI를 함께 다룸 |
| `skill-creator` | skill 설계 가이드 | 구조와 품질 기준 제시 |
| `skill-installer` | skill 설치 | 공식/외부 skill 도입 단순화 |

## 추천 시작 경로

1. `repo-intelligence`로 저장소 문서화 흐름 이해
2. `playwright`와 `playwright-interactive`로 실행/검증 흐름 이해
3. `chatgpt-apps`로 앱 통합 구조 이해
4. `skill-creator`, `skill-installer`, `openai/skills`로 skill 생태계 구조 이해
