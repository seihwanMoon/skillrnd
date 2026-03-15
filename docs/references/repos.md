---
title: 레퍼런스 저장소
---

# 레퍼런스 저장소

초기 기획과 비교에 참고하는 저장소와, 실제 문서화 대상으로 검토할 후보를 함께 정리한다.

## 참고 축

- 공식 또는 사실상 표준 역할을 하는 skill 저장소
- 다양한 agent 생태계에서 재사용되는 skill 모음
- 저장소를 AI 친화 포맷으로 정리하는 도구
- 저장소를 위키나 문서 묶음으로 바꾸는 도구

## 핵심 레퍼런스

- [openai/skills](https://github.com/openai/skills)
  - Codex 공식 skill 카탈로그 성격의 저장소
  - skill 구조와 curated 분류를 참고하기 좋다
- [vercel-labs/skills](https://github.com/vercel-labs/skills)
  - 여러 agent 생태계와의 호환 패턴을 참고하기 좋다
- [yamadashy/repomix](https://github.com/yamadashy/repomix)
  - 저장소를 AI 입력 친화 형태로 정리하는 접근을 참고하기 좋다
- [coderamp-labs/gitingest](https://github.com/coderamp-labs/gitingest)
  - URL 입력 기반 저장소 요약 UX를 참고하기 좋다
- [OpenBMB/RepoAgent](https://github.com/OpenBMB/RepoAgent)
  - 저장소 문서 생성과 증분 분석 관점을 참고하기 좋다
- [AsyncFuncAI/deepwiki-open](https://github.com/AsyncFuncAI/deepwiki-open)
  - 저장소를 위키와 다이어그램 중심으로 바꾸는 방향을 참고하기 좋다
- [wolfmanstout/repo-guide](https://github.com/wolfmanstout/repo-guide)
  - 저비용 정적 문서화 파이프라인 관점에서 유용하다

## 오늘 우선 문서화 후보

1. `repo-intelligence`
2. `playwright`
3. `playwright-interactive`
4. `chatgpt-apps`
5. `skill-creator`
6. `skill-installer`
7. `openai/skills`
8. `vercel-labs/skills`
9. `Repomix`
10. `Gitingest`

## 선정 기준

- 구조가 명확해서 문서 템플릿에 잘 맞는가
- 실제 개발 워크플로우에서 재사용 가치가 높은가
- 다른 tool/skill 생태계와 비교 지점이 있는가
- 한국어로 정리했을 때 탐색 가치가 큰가

## 메모

현재는 로컬 skill과 대표 레퍼런스 저장소를 섞어서 관리 중이다. 이후에는 `local skills`와 `external repositories` 섹션을 분리하는 편이 더 명확하다.
