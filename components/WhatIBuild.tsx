const CARDS = [
  {
    num: "01",
    title: "Market Map",
    body: "Prioritised wholesale accounts by fit, segment, geography, and buying potential.",
    output: "Segmented target list and priority accounts.",
  },
  {
    num: "02",
    title: "Outbound Engine",
    body: "Campaigns, personalisation, enrichment, and follow-up logic built around the right accounts.",
    output: "Live campaigns that create warm conversations.",
  },
  {
    num: "03",
    title: "Opportunity Handoff",
    body: "Interested replies routed into a clean pipeline with context, stage, last touch, and next action.",
    output: "Sales-ready opportunities for your internal team.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="work" className="sec-pad" style={{
      backgroundColor: "#F8FCFF",
      borderTop: "1px solid rgba(0,0,0,0.05)",
      padding: "96px 24px",
    }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* section header */}
        <div style={{ marginBottom: 48, maxWidth: 560 }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
            letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16,
          }}>
            How it works
          </p>
          <h2 style={{
            fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)",
            fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12,
            color: "#0A0A0F", marginBottom: 14,
          }}>
            From target accounts to sales-ready opportunities.
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.82, color: "#64748B" }}>
            A three-step system built around the way wholesale actually works — starting with the right accounts, not just a big list.
          </p>
        </div>

        {/* three cards */}
        <div className="wib-cards">
          {CARDS.map((card, i) => (
            <div key={i} className="wib-card" style={{
              padding: "28px 28px",
              borderRadius: 14,
              border: "1px solid rgba(56,189,248,0.13)",
              backgroundColor: "#fff",
              transition: "background 0.18s",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 700,
                  color: "#38BDF8", letterSpacing: "0.1em",
                }}>
                  {card.num}
                </span>
                <h3 style={{
                  fontSize: 15, fontWeight: 700, color: "#0A0A0F",
                  letterSpacing: "-0.01em", margin: 0,
                }}>
                  {card.title}
                </h3>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.72, color: "#64748B", marginBottom: 20, flex: 1 }}>
                {card.body}
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, paddingTop: 16, borderTop: "1px solid rgba(56,189,248,0.10)" }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 8.5, fontWeight: 700,
                  color: "#38BDF8", letterSpacing: "0.1em", textTransform: "uppercase",
                  paddingTop: 1, whiteSpace: "nowrap",
                }}>
                  Output
                </span>
                <span style={{ fontSize: 12, color: "#475569", lineHeight: 1.55 }}>
                  {card.output}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* personal note beneath cards */}
        <p style={{
          marginTop: 36,
          fontSize: "0.9rem", lineHeight: 1.8, color: "#64748B",
          borderLeft: "2px solid rgba(56,189,248,0.35)",
          paddingLeft: 20,
          maxWidth: 600,
        }}>
          I run every step of this personally. There&apos;s no junior account manager learning on your account — it&apos;s me, end to end.
        </p>

      </div>

      <style>{`
        .wib-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .wib-card:hover { background: #F0F9FF !important; }
        @media (max-width: 860px) {
          .wib-cards { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
