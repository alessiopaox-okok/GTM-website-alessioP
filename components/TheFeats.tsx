const STATS = [
  { value: "10.3%", label: "reply rate" },
  { value: "19",    label: "stockist conversations" },
  { value: "Month 1", label: "when it happened" },
];

export default function TheFeats() {
  return (
    <section id="results" style={{ backgroundColor: "#021E5D", padding: "96px 24px", position: "relative", overflow: "hidden" }}>

      {/* arc motif — quiet background */}
      <svg
        aria-hidden
        viewBox="0 0 600 400"
        style={{
          position: "absolute", right: -60, top: "50%",
          transform: "translateY(-50%)",
          width: "min(520px, 55%)", height: "auto",
          pointerEvents: "none", opacity: 0.07,
        }}
      >
        <path d="M 60 400 A 340 340 0 0 1 540 400" stroke="#59DAFF" strokeWidth="18" strokeLinecap="round" fill="none"/>
        <path d="M 120 400 A 280 280 0 0 1 480 400" stroke="#9EE9FF" strokeWidth="14" strokeLinecap="round" fill="none"/>
        <path d="M 180 400 A 220 220 0 0 1 420 400" stroke="#59DAFF" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <path d="M 240 400 A 160 160 0 0 1 360 400" stroke="#9EE9FF" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <path d="M 280 400 A 120 120 0 0 1 320 400" fill="#59DAFF"/>
      </svg>

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <p style={{
          fontSize: 11, fontWeight: 700, color: "#59DAFF",
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18,
        }}>
          Results
        </p>

        <h2 style={{
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "#ffffff",
          marginBottom: 24,
        }}>
          Proof: The Feats
        </h2>

        <p style={{
          fontSize: "1rem",
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.65)",
          maxWidth: 620,
          marginBottom: 56,
        }}>
          The Feats is an all-natural foot-care range built for active feet. In
          the first month of outbound, we sent 680 emails and booked 19 stockist
          conversations, at a 10.3% reply rate. Cold B2B outreach normally lands
          between 1 and 5%.
        </p>

        {/* stat tiles */}
        <div className="feats-stats">
          {STATS.map((s) => (
            <div key={s.label} style={{
              borderTop: "1px solid rgba(89,218,255,0.20)",
              paddingTop: 24,
            }}>
              <div style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#59DAFF",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* case study card */}
        <div style={{
          marginTop: 56,
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(89,218,255,0.15)",
          borderRadius: 14,
          padding: "28px 32px",
          maxWidth: 640,
        }}>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 0 }}>
            One of those stockists, <strong style={{ color: "#ffffff", fontWeight: 600 }}>Chelmsford &amp; Braintree Footcare</strong> in Essex,
            now reorders the range every five weeks — around £130 an order, roughly
            £1,400 a year, all from their existing patients.
          </p>
        </div>

        {/* quote */}
        <blockquote style={{
          marginTop: 40,
          maxWidth: 620,
          borderLeft: "2px solid rgba(89,218,255,0.35)",
          paddingLeft: 24,
        }}>
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.70)",
            fontStyle: "italic",
            marginBottom: 14,
          }}>
            "The branding's brilliant, it's really eye-catching, and the price
            point's good. If you get a lot of sports people, it's really good
            to sell."
          </p>
          <cite style={{
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.45)",
            fontStyle: "normal",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
          }}>
            Sian Thomasson — Podiatrist, HCPC, MSc, 18+ years
          </cite>
        </blockquote>

      </div>

      <style>{`
        .feats-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 600px) {
          .feats-stats { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </section>
  );
}
