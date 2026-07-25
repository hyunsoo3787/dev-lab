import { Link } from "react-router-dom";

const tools = [
  {
    eyebrow: "WRITE",
    icon: "M↓",
    title: "Markdown Preview",
    description: "문서를 작성하면서 렌더링 결과를 실시간으로 확인하세요.",
    path: "/tools/markdown-preview",
  },
  {
    eyebrow: "BUILD",
    icon: "</>",
    title: "HTML + CSS Preview",
    description: "작은 아이디어를 브라우저에서 바로 코드로 실험해 보세요.",
    path: "/tools/html-css-preview",
  },
];

const topics = ["LLM Training", "Inference", "RAG", "Harness", "API Gateway"];

export function HomePage() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="status-dot" />
            LEARN · BUILD · PREVIEW
          </div>
          <h1>깊이 이해하고,<br /><span>직접 만들어보기.</span></h1>
          <p className="hero-copy">
            AI 시스템을 이해하기 위한 글과, 아이디어를 곧바로 시험할 수 있는
            가벼운 브라우저 도구를 한곳에 모았습니다.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/learn">
              학습 시작하기 <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-ghost" to="/tools/markdown-preview">
              도구 둘러보기
            </Link>
          </div>
          <div className="hero-meta" aria-label="사이트 콘텐츠 요약">
            <span><strong>05</strong> Learning Series</span>
            <span><strong>02</strong> Browser Tools</span>
            <span><strong>100%</strong> Static</span>
          </div>
        </div>

        <div className="home-orbit" aria-label="The Dig Lab 콘텐츠 구성">
          <div className="orbit-glow" />
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />
          <span className="orbit-chip chip-top">LLM</span>
          <span className="orbit-chip chip-right">RAG</span>
          <span className="orbit-chip chip-bottom">Tools</span>
          <span className="orbit-chip chip-left">Agent</span>
          <div className="orbit-core">
            <span>THE DIG</span>
            <strong>LAB</strong>
            <small>Explore deeper</small>
          </div>
        </div>
      </section>

      <section className="home-learning">
        <div className="learning-copy">
          <p className="eyebrow">LEARNING PATH</p>
          <h2>모델부터<br />서비스까지</h2>
          <p>서로 떨어져 보이는 AI 개념을 실제 시스템이 만들어지는 순서로 연결했습니다.</p>
          <Link className="text-link" to="/learn">전체 시리즈 보기 <span>↗</span></Link>
        </div>
        <Link className="topic-track" to="/learn" aria-label="AI 학습 시리즈 전체 보기">
          {topics.map((topic, index) => (
            <div className="topic-row" key={topic}>
              <span>0{index + 1}</span>
              <strong>{topic}</strong>
              <i aria-hidden="true">→</i>
            </div>
          ))}
        </Link>
      </section>

      <section className="section-block home-tools">
        <div className="section-heading tools-heading">
          <div>
            <p className="eyebrow">PLAYGROUND</p>
            <h2>생각을 바로 실행으로</h2>
          </div>
          <p>설치도, 로그인도 없이 브라우저에서 바로 사용할 수 있습니다.</p>
        </div>

        <div className="tool-card-grid">
          {tools.map((tool) => (
            <Link className="home-tool-card" to={tool.path} key={tool.title}>
              <div className="tool-card-top">
                <span className="tool-icon">{tool.icon}</span>
                <span className="card-eyebrow">{tool.eyebrow}</span>
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <span className="tool-card-link">브라우저에서 열기 <i>→</i></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
