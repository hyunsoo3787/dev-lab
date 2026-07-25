import { Link } from "react-router-dom";

const cards = [
  {
    eyebrow: "TOOL",
    title: "Markdown Preview",
    description: "Markdown을 입력하고 실시간으로 렌더링 결과를 확인합니다.",
    path: "/tools/markdown-preview",
  },
  {
    eyebrow: "TOOL",
    title: "HTML + CSS Preview",
    description: "HTML과 CSS를 브라우저 안에서 안전하게 미리 봅니다.",
    path: "/tools/html-css-preview",
  },
  {
    eyebrow: "LEARN",
    title: "AI Architecture Map",
    description: "LLM, RAG, Inference, Agent 시리즈를 하나의 흐름으로 정리합니다.",
    path: "/learn",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">THE DIG LAB</p>
          <h1>설명은 블로그에서,<br />실험은 브라우저에서.</h1>
          <p className="hero-copy">
            별도 백엔드 없이 GitHub Pages에서 동작하는 개발 도구와
            AI 학습용 인터랙티브 콘텐츠를 모았습니다.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/tools/markdown-preview">
              도구 열기
            </Link>
            <Link className="button button-ghost" to="/learn">
              학습 지도 보기
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="서비스 구성">
          <div className="flow-node">Tistory Blog</div>
          <div className="flow-line" />
          <div className="flow-node active">The Dig Lab</div>
          <div className="flow-line" />
          <div className="flow-grid">
            <span>Markdown</span>
            <span>HTML/CSS</span>
            <span>LLM</span>
            <span>RAG</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">EXPLORE</p>
          <h2>한 사이트에서 계속 확장</h2>
        </div>

        <div className="card-grid">
          {cards.map((card) => (
            <Link className="feature-card" to={card.path} key={card.title}>
              <span className="card-eyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="card-link">열기 →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
