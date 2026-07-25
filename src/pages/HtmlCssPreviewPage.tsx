import { useMemo, useState } from "react";

const initialHtml = `<main class="demo-card">
  <span class="badge">THE DIG LAB</span>
  <h1>HTML + CSS Preview</h1>
  <p>왼쪽의 코드를 수정해보세요.</p>
  <button>Explore</button>
</main>`;

const initialCss = `body {
  min-height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  background: #0b1020;
  color: #e8ecf7;
  font-family: Arial, sans-serif;
}

.demo-card {
  width: min(420px, calc(100vw - 48px));
  padding: 36px;
  border: 1px solid #2a3350;
  border-radius: 24px;
  background: #141b31;
  box-shadow: 0 24px 80px rgba(0, 0, 0, .35);
}

.badge {
  font-size: 12px;
  letter-spacing: .18em;
  color: #9fb0ff;
}

h1 {
  margin: 14px 0 10px;
  font-size: 34px;
}

p {
  color: #aeb7cf;
}

button {
  margin-top: 18px;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  background: #eef1ff;
  color: #11162a;
  font-weight: 700;
}`;

function buildDocument(html: string, css: string): string {
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>${css}</style>
</head>
<body>${html}</body>
</html>`;
}

export function HtmlCssPreviewPage() {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);

  const srcDoc = useMemo(() => buildDocument(html, css), [html, css]);

  return (
    <main className="tool-page">
      <header className="tool-header">
        <div>
          <p className="eyebrow">BROWSER TOOL</p>
          <h1>HTML + CSS Preview</h1>
          <p>입력한 코드는 sandbox iframe 안에서 렌더링됩니다.</p>
        </div>
        <button
          className="button button-ghost"
          onClick={() => {
            setHtml(initialHtml);
            setCss(initialCss);
          }}
        >
          예제 초기화
        </button>
      </header>

      <section className="playground-grid">
        <div className="code-stack">
          <label className="editor-pane">
            <span className="pane-title">HTML</span>
            <textarea
              value={html}
              onChange={(event) => setHtml(event.target.value)}
              spellCheck={false}
            />
          </label>

          <label className="editor-pane">
            <span className="pane-title">CSS</span>
            <textarea
              value={css}
              onChange={(event) => setCss(event.target.value)}
              spellCheck={false}
            />
          </label>
        </div>

        <div className="preview-pane playground-preview">
          <div className="pane-title">Preview</div>
          <iframe
            title="HTML과 CSS 미리보기"
            sandbox=""
            srcDoc={srcDoc}
          />
        </div>
      </section>
    </main>
  );
}
