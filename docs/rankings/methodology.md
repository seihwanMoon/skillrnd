---
title: 랭킹 방법론
---

# 랭킹 방법론

## 왜 별도 방법론이 필요한가

공개 저장소와 skill은 데이터 형식이 다르다. 어떤 것은 npm 다운로드가 있고, 어떤 것은 GitHub stars만 있다. 또 GitHub의 저장소 조회수는 외부에서 안정적으로 수집할 수 없다.

## 기본 원칙

1. 공개 지표 우선
2. 재현 가능한 기준 우선
3. 수동 추천과 자동 점수를 분리

## 고려 지표

- GitHub stars
- forks
- 최근 릴리스 날짜
- 최근 커밋 활동
- npm downloads
- 설치 난이도
- 문서 품질
- 한국 실무 적합도

## 표시 방식 제안

- `Popularity`
- `Momentum`
- `Editorial Pick`
- `Korea Fit`
- `Beginner Friendly`

## 현재 단계

지금은 정식 점수 산정 전 단계다. 우선은 에디터 추천과 비교 문서를 쌓고, 이후 메타데이터 수집 스크립트를 붙이는 것이 맞다.
