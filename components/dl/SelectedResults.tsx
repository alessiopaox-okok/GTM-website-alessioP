type Metric = { value: string; label: string };

type ResultCase = {
  id: string;
  index: string;
  tag: string;
  title: string;
  body: string;
  keywords: string;
  metrics: Metric[];
};

export default function SelectedResults({
  eyebrow,
  heading,
  intro,
  cases,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  cases: ResultCase[];
}) {
  return (
    <section className="results-section" id="results">
      <div className="container">
        <div className="results-head">
          <p className="eyebrow" style={{ color: "var(--muted-on-dark)" }}>{eyebrow}</p>
          <h2>{heading}</h2>
          <p>{intro}</p>
        </div>

        <div className="results-list">
          {cases.map((c) => (
            <div className="result-case" id={c.id} key={c.id}>
              <div className="result-head">
                <span className="result-index">{c.index}</span>
                <span className="result-tag">{c.tag}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="result-body">{c.body}</p>
              <p className="result-keywords">{c.keywords}</p>
              <div className="result-metrics">
                {c.metrics.map((m) => (
                  <div className="result-metric" key={m.label}>
                    <div className="result-metric-value">{m.value}</div>
                    <div className="result-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
