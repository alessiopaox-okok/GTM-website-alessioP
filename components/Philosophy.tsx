const PRINCIPLES = [
  {
    title: "Quality before volume",
    body: "A smaller list of high-fit accounts beats a huge list of weak prospects every time.",
  },
  {
    title: "Systems before campaigns",
    body: "Campaigns are temporary. A clean GTM system compounds every week you run it.",
  },
  {
    title: "Relevance before automation",
    body: "AI is useful when it helps you understand the account — not when it creates more noise.",
  },
  {
    title: "Handoff before chaos",
    body: "A reply is not an opportunity until it has context, ownership, and a clear next step.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        backgroundColor: "#0C111D",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle background grid */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}/>

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 10 }}>

        {/* header */}
        <div style={{ maxWidth: 560, marginBottom: 64 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: "#38BDF8",
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20,
          }}>
            Our philosophy
          </p>
          <h2 style={{
            fontSize: "clamp(1.65rem, 3vw, 2.35rem)",
            fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12,
            color: "#ffffff", marginBottom: 20,
          }}>
            Distribution is a system,<br />not a lucky break.
          </h2>
          <p style={{
            fontSize: "0.9375rem", lineHeight: 1.85, color: "#64748B", maxWidth: 480,
          }}>
            The best opportunities rarely come from sending more emails to more people.
            They come from knowing the market better, choosing the right accounts, and
            building a commercial motion that can be repeated.
          </p>
        </div>

        {/* principles grid */}
        <div className="phil-grid">
          {PRINCIPLES.map((p, i) => (
            <div key={i} style={{
              padding: "28px 28px",
              borderRadius: 14,
              border: "1px solid rgba(56,189,248,0.12)",
              backgroundColor: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(4px)",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                border: "1px solid rgba(56,189,248,0.25)",
                backgroundColor: "rgba(56,189,248,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 700,
                  color: "#38BDF8", letterSpacing: "0.06em",
                }}>
                  0{i + 1}
                </span>
              </div>
              <h3 style={{
                fontSize: 15, fontWeight: 700, color: "#F1F5F9",
                letterSpacing: "-0.02em", margin: "0 0 10px",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: 13.5, color: "#64748B", lineHeight: 1.7, margin: 0,
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .phil-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 640px) {
          .phil-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
