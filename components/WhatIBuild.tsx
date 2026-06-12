import SignalToPipeline from "./SignalToPipeline";

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
    <section id="work" style={{
      backgroundColor: "#fff",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      padding: "96px 24px",
    }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div className="wib-outer">

          {/* ── left: header + cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

            {/* header */}
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, color: "#38BDF8",
                letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14,
              }}>
                What Gets Built
              </p>
              <h2 style={{
                fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)",
                fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12,
                color: "#0A0A0F", marginBottom: 16,
              }}>
                From target accounts to<br />sales-ready opportunities.
              </h2>
              <p style={{
                fontSize: "0.9rem", lineHeight: 1.82, color: "#64748B", maxWidth: 400,
              }}>
                Distribution Lab builds the outbound and CRM infrastructure that helps consumer brands find the right wholesale accounts, start qualified conversations, and hand warm opportunities to the sales team with a clear next step.
              </p>
            </div>

            {/* three delivery cards */}
            <div style={{
              border: "1px solid rgba(56,189,248,0.13)",
              borderRadius: 14,
              overflow: "hidden",
            }}>
              {CARDS.map((card, i) => (
                <div key={i} className="wib-card" style={{
                  padding: "22px 24px",
                  borderBottom: i < CARDS.length - 1 ? "1px solid rgba(56,189,248,0.10)" : "none",
                  backgroundColor: "#fff",
                  transition: "background 0.18s",
                  cursor: "default",
                }}>
                  {/* number + title */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 700,
                      color: "#38BDF8", letterSpacing: "0.1em",
                    }}>
                      {card.num}
                    </span>
                    <h3 style={{
                      fontSize: 14, fontWeight: 700, color: "#0A0A0F",
                      letterSpacing: "-0.01em", margin: 0,
                    }}>
                      {card.title}
                    </h3>
                  </div>

                  {/* body */}
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "#64748B", marginBottom: 12 }}>
                    {card.body}
                  </p>

                  {/* output */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
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
          </div>

          {/* ── right: Signal-to-Pipeline illustration ── */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <SignalToPipeline />
          </div>

        </div>
      </div>

      <style>{`
        .wib-outer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .wib-card:hover { background: #F8FCFF !important; }
        @media (max-width: 860px) {
          .wib-outer { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
