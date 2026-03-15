---
title: skill-creator
outline: deep
---

# skill-creator

## 한줄 요약

새 skill을 만들거나 기존 skill을 개선할 때 필요한 구조, 원칙, 검증 절차를 안내하는 메타 skill이다.

## 분류

- Agent: `Codex`
- Purpose: `docs`
- Shape: `single skill`

## 언제 쓰는가

- 새로운 skill을 설계할 때
- 기존 skill의 품질과 구조를 개선할 때
- `SKILL.md`, `scripts`, `references`, `assets`를 어떤 기준으로 나눌지 정리해야 할 때

## 입력과 출력

- 입력: 만들고자 하는 skill의 목적, 사용 예시, 필요한 자원
- 출력: skill 구조안, `SKILL.md` 초안, 보조 자원 계획, 검증 절차

## 핵심 구조

- concrete examples 기반 이해
- reusable resources 계획
- `init_skill.py` 초기화
- `quick_validate.py` 검증
- progressive disclosure 원칙

## Mermaid

```mermaid
flowchart LR
  A[사용 예시 수집] --> B[재사용 자원 계획]
  B --> C[skill 초기화]
  C --> D[SKILL.md와 자원 작성]
  D --> E[검증]
  E --> F[반복 개선]
```

## 장점

- skill 설계 기준을 체계적으로 제공한다.
- 불필요한 문서와 과한 설명을 줄이는 데 유용하다.
- progressive disclosure 원칙을 명확하게 잡아 준다.

## 한계

- 실제 도메인 자원은 별도로 준비해야 한다.
- 메타 가이드라 즉시 실행 가능한 결과물은 상대적으로 적다.

## 링크

- 원문 skill: `C:/Users/ictpt590/.codex/skills/.system/skill-creator/SKILL.md`

