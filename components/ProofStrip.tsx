const PROOF = [
  {
    stat: "22 opportunities",
    detail: "generated in 45 days",
  },
  {
    stat: "Map → Outreach → CRM",
    detail: "full handoff, no manual chaos",
  },
  {
    stat: "Clay · Instantly · Attio · Apify",
    detail: "AI-powered GTM stack",
  },
];

export default function ProofStrip() {
  return (
    <section style={{
      backgroundColor: "#fff",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      padding: "36px 24px",
    }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        <p style={{
          fontSize: 11, fontWeight: 600, color: "#94A3B8",
          letterSpacing: "0.12em", textTransform: "uppercase",
          textAlign: "center", marginBottom: 28,
        }}>
          Built from live GTM work, not theory.
        </p>

        <div className="proof-grid">
          {PROOF.map((item, i) => (
            <div key={i} className="proof-card" style={{
              padding: "20px 24px",
              borderRadius: 12,
              border: "1px solid rgba(56,189,248,0.12)",
              backgroundColor: "#F8FCFF",
              textAlign: "center",
            }}>
              <p style={{
                fontSize: 15, fontWeight: 700, color: "#0A0A0F",
                letterSpacing: "-0.02em", margin: "0 0 4px",
              }}>
                {item.stat}
              </p>
              <p style={{
                fontSize: 12, color: "#64748B", margin: 0, lineHeight: 1.5,
              }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 640px) {
          .proof-grid { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
