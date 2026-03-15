---
title: 문서화 카테고리
---

# 문서화 카테고리

분석 결과를 요약, 튜토리얼, 구조 다이어그램, 위키 페이지로 바꾸는 skill을 다룬다.

## 관찰 포인트

- 입력 소스 범위
- 요약 품질
- 다이어그램 생성 여부
- 배포 가능 포맷

## 빠른 선택 가이드

- 저장소를 한국어 위키로 바꾸고 싶으면 [repo-intelligence](/skills/repo-intelligence)
- skill 작성 기준이 필요하면 [skill-creator](/skills/skill-creator)
- 저장소를 LLM 입력용 단일 파일로 묶고 싶으면 [Repomix](/skills/repomix)
- GitHub URL에서 빠르게 추출하고 싶으면 [Gitingest](/skills/gitingest)

## 비교 포인트

| 문서 | 입력 | 출력 | 적합한 상황 |
| --- | --- | --- | --- |
| `repo-intelligence` | 저장소 URL/로컬 디렉터리 | 한국어 문서 번들 | 위키/튜토리얼 생성 |
| `skill-creator` | 요구사항/예시 | skill 구조안 | 새 skill 설계 |
| `Repomix` | 저장소 | 단일 packed file | LLM 입력 전처리 |
| `Gitingest` | GitHub URL | prompt-friendly extract | 빠른 URL 기반 추출 |

## 대표 문서

- [repo-intelligence](/skills/repo-intelligence)
- [skill-creator](/skills/skill-creator)
- [Repomix](/skills/repomix)
- [Gitingest](/skills/gitingest)
- [docs generation recipe](/recipes/docs-generation)

## 추천 조합

1. `Gitingest` 또는 `Repomix`로 빠르게 소스 요약본 확보
2. `repo-intelligence`로 한국어 문서 묶음 생성
3. `skill-creator` 기준으로 문서 구조와 템플릿 정리
