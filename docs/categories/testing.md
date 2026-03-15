---
title: 테스트 카테고리
---

# 테스트 카테고리

브라우저 자동화, UI 검증, 회귀 테스트에 쓰이는 skill을 모은다.

## 빠른 선택 가이드

- 단발성 브라우저 자동화나 캡처가 필요하면 [playwright](/skills/playwright)
- 같은 세션을 오래 유지하며 반복적으로 디버깅하려면 [playwright-interactive](/skills/playwright-interactive)

## 비교 포인트

| 문서 | 사용 방식 | 강점 | 주의점 |
| --- | --- | --- | --- |
| `playwright` | 일반 브라우저 자동화 | 빠른 재현과 캡처 | 세션 재사용은 제한적 |
| `playwright-interactive` | `js_repl` 장기 세션 | 반복 수정과 QA 루프 | 환경 준비가 더 복잡 |

## 대표 문서

- [playwright](/skills/playwright)
- [playwright-interactive](/skills/playwright-interactive)

## 추천 체크리스트

- 기능 QA와 시각 QA를 분리해서 수행한다.
- viewport 확인과 실제 스크린샷 근거를 남긴다.
- 단발성 검증인지, 반복 디버깅인지 먼저 결정하고 문서를 고른다.
