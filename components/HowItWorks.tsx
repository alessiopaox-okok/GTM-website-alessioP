const STEPS = [
  {
    n: "1",
    title: "We find your stockists.",
    body: "We map every independent retailer and clinic that fits your brand, and build the target list.",
  },
  {
    n: "2",
    title: "We run the outbound.",
    body: "Personalised cold email, sent and managed for you, tuned until the replies come.",
  },
  {
    n: "3",
    title: "Warm replies come to you.",
    body: "Interested stockists land in your inbox. You take it from there and close the accounts.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: "#ECF3FD", padding: "96px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        <p style={{
          fontSize: 11, fontWeight: 700, color: "#2E76EF",
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18,
        }}>
          How it works
        </p>

        <h2 style={{
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "#16294A",
          marginBottom: 64,
        }}>
          How it works
        </h2>

        <div className="hiw-grid">
          {STEPS.map((step) => (
            <div key={step.n}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                color: "#2E76EF",
                letterSpacing: "0.1em",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                <span style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  border: "1px solid rgba(46,118,239,0.30)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#2E76EF",
                }}>
                  {step.n}
                </span>
                <div style={{ height: 1, flex: 1, backgroundColor: "rgba(46,118,239,0.15)" }} />
              </div>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#16294A",
                letterSpacing: "-0.01em",
                marginBottom: 10,
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "#475569" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          marginTop: 56,
          fontSize: "0.8125rem",
          color: "#94A3B8",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.02em",
        }}>
          Built on a documented outbound system, refined on real campaigns.
        </p>

      </div>

      <style>{`
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        @media (max-width: 760px) {
          .hiw-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
}
