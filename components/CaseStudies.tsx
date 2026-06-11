const FEATS_GREEN = "#C8FF00";

const placeholders = [
  { tag: "DTC / Wellness",      unit: "qualified leads",  period: "in X weeks",        detail: "Full outbound build: ICP definition, segmented lists, cold email sequences, and CRM pipeline setup." },
  { tag: "Health & Consumer",   unit: "reply rate",       period: "on cold outreach",  detail: "Messaging framework, A/B sequence testing, and follow-up logic across two target segments." },
  { tag: "Ecommerce / Retail",  unit: "pipeline built",   period: "from scratch",      detail: "CRM setup, stage mapping, lead routing, and weekly reporting rhythm installed in a single sprint." },
  { tag: "Founder-Led B2B",     unit: "GTM system",       period: "fully operational", detail: "Outbound, CRM, follow-up, and operating rhythm built and handed off in 30 days." },
];

/* ── The Feats branded card ─────────────────────────────────────── */
function FeatsCard() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 300,
        height: 300,
        backgroundColor: "#141414",
        borderRadius: 16,
        padding: "26px 26px 22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture stripes */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
      }} />

      {/* Neon corner accent */}
      <div aria-hidden style={{
        position: "absolute", bottom: -30, right: -30,
        width: 120, height: 120,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${FEATS_GREEN}33 0%, transparent 70%)`,
      }} />

      {/* Top row — brand name + tag */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        <div>
          {/* Mini logo-style wordmark */}
          <p style={{ fontSize: 11, fontWeight: 800, color: "#ffffff", letterSpacing: "0.16em", textTransform: "uppercase", lineHeight: 1 }}>
            THE
          </p>
          <p style={{ fontSize: 11, fontWeight: 800, color: FEATS_GREEN, letterSpacing: "0.16em", textTransform: "uppercase", lineHeight: 1 }}>
            FEATS
          </p>
        </div>
        <span style={{
          fontSize: 9, fontWeight: 700, color: FEATS_GREEN,
          border: `1px solid ${FEATS_GREEN}55`,
          padding: "3px 8px", borderRadius: 4,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          Sport & Performance
        </span>
      </div>

      {/* Big metric */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, lineHeight: 1 }}>
          <span style={{ fontSize: "4rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1 }}>
            22
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: FEATS_GREEN, marginBottom: 6 }}>
            opps
          </span>
        </div>
        <p style={{ fontSize: 12, color: "#ffffff", fontWeight: 600, marginTop: 4 }}>
          opportunities generated
        </p>
        <p style={{ fontSize: 11, color: "#666", marginTop: 2, letterSpacing: "0.04em" }}>
          in 45 days
        </p>
      </div>

      {/* Bottom — detail strip */}
      <div style={{
        position: "relative", zIndex: 1,
        borderTop: `1px solid ${FEATS_GREEN}30`,
        paddingTop: 14,
      }}>
        <p style={{ fontSize: 11, lineHeight: 1.6, color: "#888" }}>
          Outbound across running retailers & podiatry clinics — lists, sequences, reply management.
        </p>
      </div>

      {/* "REDEFINING GTM" stamp */}
      <div style={{
        position: "absolute", bottom: 22, right: 22,
        backgroundColor: FEATS_GREEN,
        padding: "3px 8px", borderRadius: 3,
        transform: "rotate(-2deg)",
        zIndex: 2,
      }}>
        <span style={{ fontSize: 8, fontWeight: 900, color: "#141414", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          REAL RESULTS
        </span>
      </div>
    </div>
  );
}

/* ── Placeholder card ───────────────────────────────────────────── */
function PlaceholderCard({ p }: { p: typeof placeholders[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 300,
        height: 300,
        backgroundColor: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 16,
        padding: "26px 26px 22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#C4CDD8" }}>Brand X</span>
        <span style={{ fontSize: 9, fontWeight: 600, color: "#C4CDD8", backgroundColor: "rgba(0,0,0,0.04)", padding: "3px 8px", borderRadius: 20, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {p.tag}
        </span>
      </div>

      {/* Metric */}
      <div>
        <span style={{ fontSize: "3.6rem", fontWeight: 800, color: "#E8EDF2", letterSpacing: "-0.04em", lineHeight: 1 }}>—</span>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#C4CDD8", marginTop: 6 }}>{p.unit}</p>
        <p style={{ fontSize: 11, color: "#D1D9E0", marginTop: 2 }}>{p.period}</p>
      </div>

      {/* Detail */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: 14 }}>
        <p style={{ fontSize: 11, lineHeight: 1.6, color: "#C4CDD8" }}>{p.detail}</p>
      </div>

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#D8E0E8", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Your brand here
        </span>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────── */
export default function CaseStudies() {
  const allCards = [
    <FeatsCard key="feats-1" />,
    ...placeholders.map((p, i) => <PlaceholderCard key={`ph-${i}`} p={p} />),
    <FeatsCard key="feats-2" />,
    ...placeholders.map((p, i) => <PlaceholderCard key={`ph2-${i}`} p={p} />),
  ];

  return (
    <section style={{ backgroundColor: "#F6FEFF", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "80px 0" }}>

      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 24px", marginBottom: 48 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#82EEFD", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          Early results
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#0A0A0F", lineHeight: 1.2 }}>
          What the work produces.
        </h2>
      </div>

      <div style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #F6FEFF, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #F6FEFF, transparent)", zIndex: 10, pointerEvents: "none" }} />

        <div className="marquee-track" style={{ display: "flex", gap: 20, paddingLeft: 40, paddingBottom: 8, width: "max-content" }}>
          {allCards}
        </div>
      </div>

      <style>{`
        .marquee-track { animation: marquee-scroll 42s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
