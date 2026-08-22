type Step = { n: string; title: string; body: string };

export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className="steps">
      {steps.map((step) => (
        <div className="step" key={step.n}>
          <span className="n">{step.n}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
