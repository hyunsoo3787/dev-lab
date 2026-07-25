import { Link } from "react-router-dom";

const tools = [
  {
    eyebrow: "WRITE",
    icon: "M↓",
    title: "Markdown Preview",
    description: "Markdown을 입력하고 렌더링 결과를 확인합니다.",
    path: "/tools/markdown-preview",
  },
  {
    eyebrow: "BUILD",
    icon: "</>",
    title: "HTML + CSS Preview",
    description: "HTML과 CSS를 입력하고 결과를 확인합니다.",
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
          <h1>AI 학습과<br /><span>개발 도구</span></h1>
          <p className="hero-copy">
            AI 관련 글과 브라우저에서 바로 사용할 수 있는 개발 도구를 모았습니다.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/learn">
              학습 시리즈 <span aria-hidden="true">→</span>
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
          <h2>AI 학습<br />시리즈</h2>
          <p>LLM 학습, 추론, RAG, 에이전트와 API Gateway를 다룹니다.</p>
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
            <h2>브라우저 도구</h2>
          </div>
          <p>설치나 로그인 없이 사용할 수 있습니다.</p>
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
