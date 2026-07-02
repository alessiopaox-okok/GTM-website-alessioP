const WHO_POINTS = [
  "Product ready for more accounts",
  "Distribution is a priority",
  "Outbound feels messy or inconsistent",
];

const PROCESS = [
  "Market mapping",
  "Account data",
  "Outbound setup",
  "Positive replies",
  "CRM handoff",
];

export default function BridgeStrip() {
  return (
    <section style={{
      backgroundColor: "#fff",
      borderTop: "1px solid rgba(0,0,0,0.05)",
      padding: "72px 24px",
    }}>
      <div className="bridge-grid" style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* ── Left: Who it's for ── */}
        <div style={{
          padding: "32px 36px",
          borderRadius: 16,
          border: "1px solid rgba(56,189,248,0.12)",
          backgroundColor: "rgba(248,252,255,0.8)",
          backdropFilter: "blur(8px)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>
          <div>
            <p style={{
              fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
              letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12,
            }}>
              Who it&apos;s for
            </p>
            <h3 style={{
              fontSize: 18, fontWeight: 700, color: "#0C111D",
              letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10,
            }}>
              Companies expanding through wholesale, retail, or partner channels.
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {WHO_POINTS.map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                <span style={{
                  width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                  border: "1px solid rgba(56,189,248,0.3)",
                  backgroundColor: "rgba(56,189,248,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginTop: 1,
                }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3.5 6L6.5 2" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.5 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: What we handle ── */}
        <div style={{
          padding: "32px 36px",
          borderRadius: 16,
          border: "1px solid rgba(56,189,248,0.12)",
          backgroundColor: "rgba(248,252,255,0.8)",
          backdropFilter: "blur(8px)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>
          <div>
            <p style={{
              fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
              letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12,
            }}>
              What we handle
            </p>
            <h3 style={{
              fontSize: 18, fontWeight: 700, color: "#0C111D",
              letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10,
            }}>
              The operating layer behind distribution outbound.
            </h3>
          </div>

          {/* process chain */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PROCESS.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "stretch", gap: 14 }}>
                {/* connector column */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 18, flexShrink: 0 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: "#38BDF8",
                    border: "2px solid rgba(56,189,248,0.25)",
                    marginTop: 14,
                    boxShadow: "0 0 6px rgba(56,189,248,0.35)",
                  }}/>
                  {i < PROCESS.length - 1 && (
                    <div style={{
                      width: 1, flex: 1,
                      background: "linear-gradient(to bottom, rgba(56,189,248,0.3), rgba(56,189,248,0.08))",
                      margin: "3px 0",
                    }}/>
                  )}
                </div>
                {/* label */}
                <div style={{ paddingTop: 8, paddingBottom: i < PROCESS.length - 1 ? 10 : 0 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 500, color: "#334155",
                    letterSpacing: "-0.01em",
                  }}>
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .bridge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .bridge-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
}
