const series = [
  {
    number: "01",
    category: "FOUNDATION",
    title: "LLM은 어떻게 학습되는가?",
    description: "언어 모델이 방대한 텍스트에서 패턴을 익히고, 하나의 답변을 만들어 내기까지의 학습 과정을 살펴봅니다.",
    tags: ["Pretraining", "SFT", "Alignment"],
    href: "https://thediglog.tistory.com/94",
    accent: "violet",
  },
  {
    number: "02",
    category: "SYSTEM",
    title: "LLM Inference",
    description: "학습을 마친 모델이 토큰을 받아 실제 답변을 생성하는 추론 파이프라인을 따라갑니다.",
    tags: ["Prefill", "KV Cache", "Decode"],
    href: "https://thediglog.tistory.com/133",
    accent: "blue",
  },
  {
    number: "03",
    category: "KNOWLEDGE",
    title: "RAG",
    description: "외부 지식을 검색하고 필요한 맥락을 골라 LLM의 답변에 연결하는 구조를 정리합니다.",
    tags: ["Embedding", "Retrieval", "Reranking"],
    href: "https://thediglog.tistory.com/120",
    accent: "mint",
  },
  {
    number: "04",
    category: "AGENT",
    title: "Harness Engineering",
    description: "모델을 둘러싼 도구, 컨텍스트, 제어 루프를 설계해 에이전트의 실행력을 높이는 방법을 다룹니다.",
    tags: ["Context", "Tools", "Control Loop"],
    href: "https://thediglog.tistory.com/117",
    accent: "orange",
  },
  {
    number: "05",
    category: "PLATFORM",
    title: "LLM API Gateway",
    description: "여러 모델과 서비스를 안정적으로 연결하기 위한 라우팅, 관측, 운영 계층을 살펴봅니다.",
    tags: ["Routing", "Observability", "Resilience"],
    href: "https://thediglog.tistory.com/108",
    accent: "pink",
  },
];

export function LearnPage() {
  return (
    <main className="learn-page">
      <header className="learn-hero">
        <div>
          <p className="eyebrow">LEARNING PATH</p>
          <h1>AI 시스템을<br />한 겹씩 파고들기</h1>
        </div>
        <div className="learn-hero-copy">
          <span className="series-count">05 SERIES</span>
          <p>
            모델의 학습에서 시작해 추론, 검색, 에이전트, 운영 인프라까지.
            서로 이어지는 개념을 시리즈 첫 글부터 차근차근 만나보세요.
          </p>
        </div>
      </header>

      <section className="series-list" aria-label="AI 학습 시리즈">
        {series.map((item) => (
          <a
            className={`series-card series-card-${item.accent}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            key={item.number}
          >
            <div className="series-index">
              <span>{item.number}</span>
              <i aria-hidden="true" />
            </div>
            <div className="series-content">
              <span className="series-category">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="series-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <span className="series-open" aria-hidden="true">↗</span>
          </a>
        ))}
      </section>

      <p className="learn-note">각 카드는 The Dig Log의 해당 시리즈 첫 번째 글로 연결됩니다.</p>
    </main>
  );
}
