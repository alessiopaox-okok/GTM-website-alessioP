const steps = [
  { n: "01", title: "Map the market",    body: "Identify the right segments, accounts, contacts, and buying triggers." },
  { n: "02", title: "Build the system",  body: "Create the outbound, CRM, follow-up, and reporting workflows." },
  { n: "03", title: "Install the loop",  body: "Turn replies, leads, and opportunities into a repeatable operating rhythm." },
];

export default function Process() {
  return (
    <section id="process" style={{ backgroundColor: "#F6FEFF", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>

        <p style={{ fontSize: 11, fontWeight: 700, color: "#82EEFD", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
          How Distribution Lab works
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#0A0A0F", lineHeight: 1.2, marginBottom: 64 }}>
          Three steps.<br />No fluff.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40 }}>
          {steps.map((s) => (
            <div key={s.n} className="process-step">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div className="process-rule" style={{ height: 1, flex: 1, backgroundColor: "rgba(0,0,0,0.09)", transition: "background-color 0.3s" }} />
                <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "#82EEFD", letterSpacing: "0.12em" }}>{s.n}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0A0A0F", marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B7280" }}>{s.body}</p>
            </div>
          ))}
        </div>

      </div>
      <style>{`.process-step:hover .process-rule { background-color: rgba(130,238,253,0.55) !important; }`}</style>
    </section>
  );
}
