import React from "react";

/* ─── Brand token — change once here ──────────────────────────────── */
const ACCENT = "#38BDF8";

/* ─── Node marker component ───────────────────────────────────────── */
interface NodeProps {
  delay?: number;
  opacity?: number;
  dotR?: number;   // centre dot radius
  ringR?: number;  // static ring radius
  pulseR?: number; // starting pulse radius
  className?: string;
}

function NodeMarker({
  delay   = 0,
  opacity = 0.38,
  dotR    = 3,
  ringR   = 10,
  pulseR  = 10,
  className = "",
}: NodeProps) {
  const canvas = pulseR * 5.6;  // enough room for the expanded pulse
  const c      = canvas / 2;

  const center: React.CSSProperties = {
    position : "absolute",
    top      : "50%",
    left     : "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <div
      className={className}
      style={{ opacity, width: canvas, height: canvas, position: "relative", flexShrink: 0 }}
    >
      <div
        className="dl-float"
        style={{ ...center, animationDelay: `${delay}s`, width: canvas, height: canvas }}
      >
        {/* Pulse ring A */}
        <div
          className="dl-pulse"
          style={{
            ...center,
            width : pulseR * 2,
            height: pulseR * 2,
            borderRadius  : "50%",
            border        : `1px solid ${ACCENT}`,
            animationDelay: `${delay}s`,
          }}
        />
        {/* Pulse ring B — offset half-cycle */}
        <div
          className="dl-pulse"
          style={{
            ...center,
            width : pulseR * 2,
            height: pulseR * 2,
            borderRadius  : "50%",
            border        : `1px solid ${ACCENT}`,
            animationDelay: `${delay + 1.75}s`,
          }}
        />
        {/* Static inner ring */}
        <div style={{
          ...center,
          width       : ringR * 2,
          height      : ringR * 2,
          borderRadius: "50%",
          border      : `1px solid ${ACCENT}`,
          opacity     : 0.6,
        }}/>
        {/* Centre dot */}
        <div style={{
          ...center,
          width          : dotR * 2,
          height         : dotR * 2,
          borderRadius   : "50%",
          backgroundColor: ACCENT,
          zIndex         : 2,
        }}/>
      </div>
    </div>
  );
}

/* ─── Section keyframes + animation classes ──────────────────────── */
const CSS = `
  @keyframes dl-float {
    0%,100% { transform: translateY(0px);  }
    50%     { transform: translateY(-8px); }
  }
  @keyframes dl-pulse-ring {
    0%   { transform: translate(-50%,-50%) scale(1);   opacity: .55; }
    100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0;   }
  }
  .dl-float  { animation: dl-float     10s ease-in-out infinite; }
  .dl-pulse  { animation: dl-pulse-ring 3.5s ease-out  infinite; }
  @media (prefers-reduced-motion: reduce) {
    .dl-float, .dl-pulse { animation: none !important; }
  }
`;

/* ─── Background node positions ──────────────────────────────────── */
const BG_NODES: (NodeProps & { top: string; left: string })[] = [
  { top: "7%",  left: "78%", dotR: 3.5, ringR: 11, pulseR: 11, delay: 0,   opacity: 0.30 },
  { top: "28%", left: "91%", dotR: 2.5, ringR: 8,  pulseR: 8,  delay: 0.8, opacity: 0.24 },
  { top: "58%", left: "87%", dotR: 3,   ringR: 10, pulseR: 10, delay: 1.6, opacity: 0.28 },
  { top: "82%", left: "73%", dotR: 2.5, ringR: 8,  pulseR: 8,  delay: 2.4, opacity: 0.20 },
  { top: "14%", left: "3%",  dotR: 3,   ringR: 10, pulseR: 10, delay: 0.4, opacity: 0.26 },
  { top: "52%", left: "1%",  dotR: 2.5, ringR: 8,  pulseR: 8,  delay: 1.2, opacity: 0.20 },
  { top: "88%", left: "38%", dotR: 2,   ringR: 7,  pulseR: 7,  delay: 2.0, opacity: 0.16 },
];

/* ─── Pillar data ─────────────────────────────────────────────────── */
const PILLARS = [
  {
    num  : "01",
    title: "Map the entire market",
    body : "We map every account worth targeting before a single email goes out — clusters, segments, stockists, clinics, and distributors — so outreach starts with a plan, not a guess.",
    delay: 0,
  },
  {
    num  : "02",
    title: "Design the CRM workflows",
    body : "We build the operating logic behind your pipeline: scoring, routing, follow-up triggers, and ownership rules, so every lead moves from new to qualified without slipping through the cracks.",
    delay: 0.4,
  },
  {
    num  : "03",
    title: "Launch the outbound that generates conversations",
    body : "Segmented sequences, tested messaging, and managed replies built around real buyer profiles — outbound designed to start conversations, not just send volume.",
    delay: 0.8,
  },
];

/* ─── Section ─────────────────────────────────────────────────────── */
export default function CaseStudies() {
  return (
    <>
      <style>{CSS}</style>

      <section
        style={{
          position  : "relative",
          overflow  : "hidden",
          background: `linear-gradient(180deg, #EEF7FA 0%, #FBFCFE 12%, #FBFCFE 88%, #EEF7FA 100%)`,
        }}
        className="py-20 md:py-28 px-6"
      >

        {/* ── ambient background nodes ── */}
        {BG_NODES.map(({ top, left, ...props }, i) => (
          <div
            key={i}
            style={{ position: "absolute", top, left, pointerEvents: "none", zIndex: 0 }}
          >
            <NodeMarker {...props} />
          </div>
        ))}

        {/* ── content ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Header block */}
          <div className="mb-16 md:mb-20" style={{ maxWidth: 640 }}>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT, display: "inline-block" }}/>
              <span style={{
                fontSize   : 11,
                fontWeight : 700,
                color      : ACCENT,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
              }}>
                How it works
              </span>
            </div>

            {/* Headline */}
            <h2 style={{
              fontSize     : "clamp(2rem, 4vw, 3rem)",
              fontWeight   : 800,
              color        : "#0A0A0A",
              letterSpacing: "-0.03em",
              lineHeight   : 1.1,
              marginBottom : 18,
            }}>
              Three systems.{" "}
              <span style={{ color: ACCENT }}>One distribution engine.</span>
            </h2>

            {/* Subhead */}
            <p style={{
              fontSize  : "1.05rem",
              lineHeight: 1.75,
              color     : "#64748B",
              maxWidth  : 520,
            }}>
              We don't sell vague strategy. We build the concrete systems that map
              your market, organize your pipeline, and put real wholesale
              conversations on the calendar.
            </p>
          </div>

          {/* Three pillars */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "clamp(40px, 6vw, 80px)" }}
          >
            {PILLARS.map(({ num, title, body, delay }) => (
              <div key={num} style={{ display: "flex", flexDirection: "column", gap: 0 }}>

                {/* Number row with tiny node accent */}
                <div className="flex items-center gap-3 mb-3">
                  <span style={{
                    fontSize     : "clamp(3.5rem, 7vw, 5rem)",
                    fontWeight   : 200,
                    lineHeight   : 1,
                    color        : ACCENT,
                    opacity      : 0.22,
                    letterSpacing: "-0.04em",
                    userSelect   : "none",
                    flexShrink   : 0,
                  }}>
                    {num}
                  </span>
                  {/* Tiny inline node accent */}
                  <NodeMarker
                    dotR={2} ringR={6} pulseR={6}
                    delay={delay} opacity={0.42}
                  />
                </div>

                {/* Thin rule under number */}
                <div style={{ height: 1, backgroundColor: "#E2E8F0", marginBottom: 20 }}/>

                {/* Title */}
                <h3 style={{
                  fontSize     : "1.15rem",
                  fontWeight   : 700,
                  color        : "#0A0A0A",
                  letterSpacing: "-0.02em",
                  lineHeight   : 1.3,
                  marginBottom : 14,
                }}>
                  {title}
                </h3>

                {/* Body */}
                <p style={{
                  fontSize  : "0.95rem",
                  lineHeight: 1.78,
                  color     : "#64748B",
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
