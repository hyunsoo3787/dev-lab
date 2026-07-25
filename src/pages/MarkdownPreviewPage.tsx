import DOMPurify from "dompurify";
import { marked } from "marked";
import { useMemo, useState } from "react";

const initialMarkdown = `# The Dig Lab

Markdown을 입력하면 **오른쪽에서 즉시 미리보기**가 표시됩니다.

## 지원 예시

- 제목과 목록
- **굵은 글씨**
- [링크](https://github.com)
- 코드 블록

\`\`\`ts
const message = "Hello, The Dig Lab";
console.log(message);
\`\`\`
`;

export function MarkdownPreviewPage() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const renderedHtml = useMemo(() => {
    const raw = marked.parse(markdown) as string;
    return DOMPurify.sanitize(raw);
  }, [markdown]);

  return (
    <main className="tool-page">
      <header className="tool-header">
        <div>
          <p className="eyebrow">BROWSER TOOL</p>
          <h1>Markdown Preview</h1>
          <p>모든 변환은 브라우저에서 처리되며 서버로 전송되지 않습니다.</p>
        </div>
        <button className="button button-ghost" onClick={() => setMarkdown(initialMarkdown)}>
          예제 초기화
        </button>
      </header>

      <section className="editor-grid">
        <div className="editor-pane">
          <div className="pane-title">Markdown</div>
          <textarea
            aria-label="Markdown 입력"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            spellCheck={false}
          />
        </div>

        <div className="preview-pane">
          <div className="pane-title">Preview</div>
          <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>
      </section>
    </main>
  );
}
