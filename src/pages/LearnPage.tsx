const sections = [
  {
    number: "01",
    title: "LLM Training",
    body: "Pretraining, SFT, Alignment, Reasoning 학습 흐름",
  },
  {
    number: "02",
    title: "LLM Inference",
    body: "Tokenization, Prefill, KV Cache, Decode, Batching",
  },
  {
    number: "03",
    title: "RAG Architecture",
    body: "Chunking, Embedding, Retrieval, Reranking, Generation",
  },
  {
    number: "04",
    title: "Agent Architecture",
    body: "Router, Planner, Tool, Multi-Agent, Evaluation",
  },
];

export function LearnPage() {
  return (
    <main className="learn-page">
      <header className="page-intro">
        <p className="eyebrow">LEARN</p>
        <h1>AI Architecture Map</h1>
        <p>
          현재는 전체 구조를 보여주는 정적 샘플입니다. 이후 각 카드에 시각화와
          블로그 딥링크를 연결할 수 있습니다.
        </p>
      </header>

      <section className="timeline">
        {sections.map((section) => (
          <article className="timeline-item" key={section.number}>
            <span className="timeline-number">{section.number}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <button type="button" disabled>
                준비 중
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
