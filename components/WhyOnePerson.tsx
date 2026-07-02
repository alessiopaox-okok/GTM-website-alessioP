const POINTS = [
  {
    title: "Direct access.",
    body: "You talk to the person actually doing the work, every time.",
  },
  {
    title: "Faster iteration.",
    body: "No layers of account managers slowing down a campaign tweak.",
  },
  {
    title: "Founder-to-founder understanding.",
    body: "I know what it’s like to run lean and need results, not reports.",
  },
  {
    title: "More attention, not less.",
    body: "Working with me early means more of my attention, not less.",
  },
];

export default function WhyOnePerson() {
  return (
    <section
      className="sec-pad"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div className="wop-grid">

          {/* left: heading */}
          <div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
              letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20,
            }}>
              Why work with me
            </p>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12,
              color: "#0A0A0F",
            }}>
              Why one person,<br />not an agency.
            </h2>
          </div>

          {/* right: points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {POINTS.map((point, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : 28,
                  paddingBottom: 28,
                  borderBottom: i < POINTS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  flexShrink: 0, marginTop: 7,
                  boxShadow: "0 0 6px rgba(56,189,248,0.4)",
                }}/>
                <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.75, color: "#374151" }}>
                  <strong style={{ color: "#0A0A0F", fontWeight: 600 }}>{point.title}</strong>{" "}
                  {point.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .wop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 760px) {
          .wop-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
