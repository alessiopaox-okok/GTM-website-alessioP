const STATS = [
  { value: "8.26%",   label: "reply rate" },
  { value: "28",      label: "opportunities generated" },
  { value: "£36,400", label: "annualised pipeline" },
];

export default function CaseStudySection() {
  return (
    <section
      className="sec-pad"
      style={{
        backgroundColor: "#0A0A0F",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* eyebrow */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
          letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24,
        }}>
          Case study · Activewear brand
        </p>

        {/* headline */}
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1,
          color: "#ffffff", marginBottom: 56,
          maxWidth: 600,
        }}>
          28 opportunities generated in 8 weeks.
        </h2>

        {/* stats row */}
        <div className="cs-stats">
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                paddingRight: i < STATS.length - 1 ? 40 : 0,
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                paddingLeft: i > 0 ? 40 : 0,
              }}
            >
              <p style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700, letterSpacing: "-0.04em",
                color: "#ffffff", margin: "0 0 6px", lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{ fontSize: 13, color: "#6B7280", margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* honesty note */}
        <p style={{
          marginTop: 48,
          fontSize: "0.875rem", lineHeight: 1.75, color: "#6B7280",
          maxWidth: 560,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 28,
        }}>
          I&apos;m early — this is one of my first client engagements, and I&apos;d rather show you one real result clearly than imply a track record I don&apos;t have yet.
        </p>

        {/* link */}
        <a href="/contact" className="cs-link">
          Get the full case study
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </div>

      <style>{`
        .cs-link {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 20px;
          font-size: 13px; font-weight: 600; color: #38BDF8;
          text-decoration: none; letter-spacing: -0.01em;
          transition: opacity 0.15s;
        }
        .cs-link:hover { opacity: 0.7; }
        .cs-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          align-items: flex-start;
        }
        @media (max-width: 600px) {
          .cs-stats { flex-direction: column; gap: 28px; }
          .cs-stats > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 28px;
          }
          .cs-stats > div:last-child { border-bottom: none; padding-bottom: 0; }
        }
      `}</style>
    </section>
  );
}
