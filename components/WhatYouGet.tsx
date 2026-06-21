const POINTS = [
  "Qualified stockist replies, straight to your inbox",
  "The targeting and outreach run for you",
  "You keep every account and every relationship",
];

export default function WhatYouGet() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        <h2 style={{
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "#16294A",
          marginBottom: 28,
        }}>
          What you actually get
        </h2>

        <p style={{
          fontSize: "1rem",
          lineHeight: 1.85,
          color: "#475569",
          maxWidth: 620,
          marginBottom: 48,
        }}>
          A steady flow of replies from independent stockists who've said they want
          to see your range. Each one is a real buyer with a real address, ready for
          you to close. No tools to learn, no dashboards to manage, and no accounts
          handed over to an agency.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          {POINTS.map((point) => (
            <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "rgba(46,118,239,0.10)",
                border: "1px solid rgba(46,118,239,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}>
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                  <path d="M1 3.5L3.2 5.5L8 1" stroke="#2E76EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span style={{ fontSize: "0.9375rem", color: "#16294A", lineHeight: 1.6, fontWeight: 500 }}>
                {point}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
