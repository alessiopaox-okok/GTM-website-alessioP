type Step = { n: string; title: string; body: string; label?: string; emphasis?: boolean };

export default function Steps({ steps, interactive }: { steps: Step[]; interactive?: boolean }) {
  return (
    <div className={`steps${interactive ? " steps-interactive" : ""}`}>
      {steps.map((step) => (
        <div className={`step${step.emphasis ? " step-emphasis" : ""}`} key={step.n}>
          <span className="n">{step.n}</span>
          <div>
            {step.label && <span className="step-label">{step.label}</span>}
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
