# The Dig Lab

GitHub Pages에서 실행되는 정적 React SPA 예제입니다.

## 포함 기능

- 홈 화면
- AI Architecture Map 샘플
- Markdown 실시간 미리보기
- HTML + CSS sandbox 미리보기
- GitHub Actions 기반 GitHub Pages 자동 배포

## 로컬 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포

1. 이 프로젝트를 GitHub 저장소의 `main` 브랜치에 푸시합니다.
2. 저장소의 **Settings → Pages**로 이동합니다.
3. **Build and deployment → Source**를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 푸시하면 `.github/workflows/deploy-pages.yml`이 실행됩니다.
5. Actions 완료 후 Pages URL로 접속합니다.

`vite.config.ts`는 GitHub Actions 환경의 `GITHUB_REPOSITORY` 값을 읽어 저장소 이름을 `base` 경로로 자동 적용합니다.

## 프로젝트 구조

```text
src/
├─ pages/
│  ├─ HomePage.tsx
│  ├─ LearnPage.tsx
│  ├─ MarkdownPreviewPage.tsx
│  └─ HtmlCssPreviewPage.tsx
├─ App.tsx
├─ main.tsx
└─ styles.css
```

## 다음 확장 후보

- Mermaid Preview
- JSON/YAML Formatter
- RAG Chunking 시뮬레이터
- KV Cache 계산기
- 티스토리 iframe용 `/embed/...` 레이아웃
