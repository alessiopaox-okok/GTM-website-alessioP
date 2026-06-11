const attributes = [
  {
    label: "Not a marketing agency",
    value: "We don't run ads or manage brand. We build the commercial operating layer between effort and revenue.",
  },
  {
    label: "Not a one-off campaign",
    value: "Every sprint produces a system you keep. The work compounds across every cycle.",
  },
  {
    label: "Not AI hype",
    value: "We use AI where it creates real leverage — research, enrichment, personalization, speed. Not as a pitch.",
  },
];

export default function WhatItIs() {
  return (
    <section
      id="what"
      style={{ backgroundColor: "#F6FEFF", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>

        <div style={{ maxWidth: 680, marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#82EEFD", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20, textShadow: "0 0 20px rgba(130,238,253,0.4)" }}>
            What Distribution Lab is
          </p>
          <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#0A0A0F", marginBottom: 20 }}>
            A GTM systems practice for founder-led brands at the messy middle.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", maxWidth: 560 }}>
            Enough commercial activity to generate noise, not enough structure
            to generate results. Distribution Lab installs the operating layer
            that turns scattered effort into a repeatable growth motion.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2, backgroundColor: "rgba(130,238,253,0.12)", borderRadius: 16, overflow: "hidden" }}>
          {attributes.map((a, i) => (
            <div key={i} className="what-card" style={{ backgroundColor: "#F6FEFF", padding: "32px 28px", transition: "background-color 0.2s ease" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#82EEFD", letterSpacing: "0.06em", marginBottom: 10 }}>{a.label}</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "#6B7280" }}>{a.value}</p>
            </div>
          ))}
        </div>

      </div>
      <style>{`.what-card:hover { background-color: #E8FBFF !important; }`}</style>
    </section>
  );
}
