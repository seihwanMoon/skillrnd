---
title: Admin 운영 가이드
outline: deep
sidebar_order: -30
---

# Admin 운영 가이드

이 사이트는 공개 페이지에서 `이 페이지 편집 제안` 링크를 숨겼다. 대신 `/admin` 경로로 별도 편집 화면을 두는 방향으로 바꿨다.

## 1. 현재 상태

- 공개 사이트에서는 GitHub 편집 링크가 보이지 않는다.
- `/admin` 경로에 Decap CMS 화면을 추가했다.
- 로컬 환경에서는 CMS 편집 흐름을 바로 테스트할 수 있다.
- 라이브 환경에서 실제 GitHub 저장을 하려면 별도 인증 설정이 필요하다.

## 2. 로컬에서 쓰는 방법

터미널 1:

```bash
npm run cms:proxy
```

터미널 2:

```bash
npm run docs:dev
```

그 다음:

- `http://localhost:5173/admin/`

Decap 공식 문서도 로컬 Git 저장소 작업 시 `local_backend: true`와 `npx decap-server`를 권장한다.  
참고: [Working with a Local Git Repository](https://decapcms.org/docs/working-with-a-local-git-repository/)

## 3. 라이브 사이트에서 필요한 것

현재 `/admin` UI 파일은 배포되지만, GitHub Pages만으로는 GitHub 인증 서버가 자동 제공되지 않는다. Decap 공식 문서 기준으로 GitHub backend는 인증 서버가 필요하다.  
참고: [GitHub Backend](https://decapcms.org/docs/github-backend/)

즉, 라이브에서 실제 로그인 후 저장까지 하려면 아래 중 하나가 필요하다.

1. 별도 OAuth/auth endpoint 구축
2. Netlify 같은 인증 제공자 사용
3. `/admin` 경로 자체를 별도 보호 계층 뒤에 두기

## 4. 나만 접근하게 하려면

가장 현실적인 방법은 도메인 앞단에서 `/admin` 경로를 보호하는 것이다.

추천:

- Cloudflare Access
- 별도 reverse proxy auth

이건 GitHub Pages 저장소 코드만으로는 해결되지 않는다.

## 5. 지금 당장 가능한 운영 방식

가장 안전한 방식:

1. 공개 사이트는 읽기 전용으로 운영
2. 로컬 `/admin` 또는 GitHub에서 직접 Markdown 편집
3. 커밋 후 자동 배포

## 6. CMS가 관리하는 섹션

- `blog`
- `skills`
- `recipes`
- `vibe-coding`
- `manufacturing-ai`
- `korea-picks`
- `rankings`
- `references`
- `categories`

## 7. 주의점

- 상단 메뉴 자체는 현재 코드 설정이다.
- 허브 페이지의 추천 목록은 사람이 직접 다듬는 편이 좋다.
- `/admin`을 진짜 private admin으로 만들려면 인증 계층을 추가해야 한다.
