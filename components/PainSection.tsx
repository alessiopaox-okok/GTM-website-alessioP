const POINTS = [
  { num: "01", text: "Outreach that happens in the gaps between everything else you're running." },
  { num: "02", text: "No real list of who the right wholesale accounts even are." },
  { num: "03", text: "Replies and follow-ups tracked in a spreadsheet, a DM, and your memory." },
  { num: "04", text: "No visibility into pipeline until a deal lands — or doesn't." },
];

export default function PainSection() {
  return (
    <section
      id="pain"
      className="sec-pad"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* eyebrow */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
          letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24,
        }}>
          Sound familiar
        </p>

        {/* headline */}
        <h2 style={{
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15,
          color: "#0A0A0F", marginBottom: 48,
          maxWidth: 560,
        }}>
          You&apos;re already selling. The product works. But growing wholesale still means:
        </h2>

        {/* numbered points */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
          {POINTS.map((point, i) => (
            <div
              key={point.num}
              style={{
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
                paddingTop: i === 0 ? 0 : 28,
                paddingBottom: 28,
                borderBottom: i < POINTS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11, fontWeight: 700, color: "#38BDF8",
                letterSpacing: "0.08em", flexShrink: 0, paddingTop: 3,
                minWidth: 22,
              }}>
                {point.num}
              </span>
              <p style={{
                fontSize: "1rem", lineHeight: 1.75, color: "#374151",
                margin: 0, fontWeight: 400,
              }}>
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* blockquote */}
        <blockquote style={{
          borderLeft: "2px solid #38BDF8",
          paddingLeft: 24,
          margin: 0,
        }}>
          <p style={{
            fontSize: "1.05rem", lineHeight: 1.75, color: "#0A0A0F",
            fontWeight: 500, fontStyle: "italic", margin: 0,
          }}>
            &ldquo;You don&apos;t need more hustle. You need a system that runs whether or not you have time to think about it this week.&rdquo;
          </p>
        </blockquote>

      </div>
    </section>
  );
}
