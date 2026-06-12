const items = [
  { title: "Outbound systems",        body: "Campaigns, lists, personalization, and testing loops." },
  { title: "CRM structure",           body: "Pipelines, stages, ownership, and follow-up discipline." },
  { title: "Lead-to-close workflow",  body: "Turning replies and interest into visible opportunities." },
  { title: "AI-assisted operations",  body: "Using AI to speed up research, enrichment, messaging, and execution." },
];

export default function WhatIBuild() {
  return (
    <section id="work" style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>

        <p style={{ fontSize: 11, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>What gets built</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#0A0A0F", lineHeight: 1.2, marginBottom: 8 }}>A practical GTM operating layer.</h2>
        <p style={{ fontSize: 14, color: "#9CA3AF", marginBottom: 52 }}>Not strategy decks. Actual systems you can run.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, backgroundColor: "rgba(0,0,0,0.07)", borderRadius: 16, overflow: "hidden" }}>
          {items.map((item, i) => (
            <div key={i} className="work-card" style={{ backgroundColor: "#ffffff", padding: "32px 28px", transition: "background-color 0.2s ease" }}>
              <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", fontWeight: 700, color: "#38BDF8", letterSpacing: "0.14em", display: "block", marginBottom: 18 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0A0A0F", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B7280" }}>{item.body}</p>
            </div>
          ))}
        </div>

      </div>
      <style>{`.work-card:hover { background-color: #F0FDFF !important; }`}</style>
    </section>
  );
}
