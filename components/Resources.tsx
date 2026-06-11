const resources = [
  {
    type: "Template",
    title: "GTM Audit Framework",
    description:
      "A structured template to map your current commercial motion, identify gaps, and prioritise what to fix first.",
    cta: "Coming soon",
    available: false,
  },
  {
    type: "Guide",
    title: "Cold Email That Actually Works",
    description:
      "How to write outbound sequences that get replies — ICP targeting, messaging structure, and follow-up logic.",
    cta: "Coming soon",
    available: false,
  },
  {
    type: "Workbook",
    title: "ICP Definition Workbook",
    description:
      "Define your ideal customer profile across segment, pain, trigger, and persona before you write a single email.",
    cta: "Coming soon",
    available: false,
  },
  {
    type: "Checklist",
    title: "CRM Setup Checklist",
    description:
      "The exact pipeline stages, field structure, and ownership rules we install in every GTM sprint.",
    cta: "Coming soon",
    available: false,
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#82EEFD", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Resources
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#0A0A0F", lineHeight: 1.2 }}>
            Tools to build your GTM system.
          </h2>
          <p style={{ fontSize: 14, color: "#9CA3AF", marginTop: 4, maxWidth: 440 }}>
            Practical templates, guides, and frameworks from live GTM work. Free to use.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {resources.map((r, i) => (
            <div
              key={i}
              className="resource-card"
              style={{
                backgroundColor: "#FAFAFA",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 14,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                transition: "border-color 0.2s, background-color 0.2s",
                cursor: "default",
              }}
            >
              {/* Type badge */}
              <span style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 700,
                color: "#82EEFD",
                backgroundColor: "rgba(130,238,253,0.1)",
                padding: "3px 10px",
                borderRadius: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
                width: "fit-content",
              }}>
                {r.type}
              </span>

              {/* Title */}
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0A0A0F", marginBottom: 10, lineHeight: 1.3 }}>
                {r.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B7280", marginBottom: 24, flex: 1 }}>
                {r.description}
              </p>

              {/* CTA */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 16 }}>
                <span style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: r.available ? "#82EEFD" : "#C4CDD8",
                  letterSpacing: "0.04em",
                }}>
                  {r.cta} →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .resource-card:hover {
          border-color: rgba(130,238,253,0.4) !important;
          background-color: #F6FEFF !important;
        }
      `}</style>
    </section>
  );
}
