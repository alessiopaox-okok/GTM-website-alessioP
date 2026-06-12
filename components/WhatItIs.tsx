"use client";
import TopologyField from "./TopologyField";

const steps = [
  {
    num: "01",
    title: "TAM Building",
    body: "Map retailers, partners, channels, and whitespace.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Segmenting",
    body: "Turn the market into clear priority groups.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Connecting",
    body: "Activate outreach, workflows, and repeatable GTM motion.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
];

const capabilities = [
  {
    num: "01",
    title: "TAM Building",
    body: "We map the real market around your product — retailers, partners, channels, and opportunities worth pursuing.",
  },
  {
    num: "02",
    title: "Segmenting",
    body: "We turn a broad market into clear priority groups, so outreach and sales effort go where they actually convert.",
  },
  {
    num: "03",
    title: "Connecting",
    body: "We build the systems that connect your brand to the right accounts — targeted outreach, workflows, and a repeatable GTM motion.",
  },
];

export default function WhatItIs() {
  return (
    <section
      id="what"
      style={{
        position: "relative",
        backgroundColor: "#F0F9FF",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "120px 24px",
        overflow: "hidden",
      }}
    >
      {/* ── background animation ── */}
      <TopologyField />

      {/* ── territory outline left half ── */}
      <svg
        aria-hidden
        viewBox="0 0 480 380"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "50%", height: "100%",
          pointerEvents: "none",
          opacity: 0.15,
        }}
      >
        <path
          d="M118,52 Q148,32 248,20 Q316,26 378,22 Q428,46 458,84
             Q463,134 454,186 Q448,242 426,292 Q390,330 334,355
             Q265,364 192,357 Q128,333 78,292 Q50,245 46,192
             Q54,146 72,102 Q94,70 118,52 Z"
          stroke="#38BDF8" strokeWidth="1.4" fill="none" strokeDasharray="5 8"
        />
        <path
          d="M398,48 Q428,32 448,44 Q460,60 450,76 Q434,86 416,76 Q400,64 398,48 Z"
          stroke="#38BDF8" strokeWidth="1" fill="none" strokeDasharray="3 6"
        />
        <circle cx="248" cy="20"  r="2.5" fill="#38BDF8" />
        <circle cx="428" cy="46"  r="2.5" fill="#38BDF8" />
        <circle cx="334" cy="355" r="2.5" fill="#38BDF8" />
        <circle cx="78"  cy="292" r="2.5" fill="#38BDF8" />
      </svg>

      {/* ── right-side readability gradient ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(to right, transparent 0%, rgba(240,249,255,0.55) 42%, rgba(240,249,255,0.96) 62%, #F0F9FF 100%)",
      }} />

      {/* ── content ── */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto" }}>
        <div className="witl-grid">

          {/* ── Left: vertical step cards ── */}
          <div className="witl-steps">
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                {/* number badge */}
                <div style={{
                  width: 36, height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(56,189,248,0.35)",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10, fontWeight: 700,
                  color: "#38BDF8", letterSpacing: "0.06em",
                  backdropFilter: "blur(6px)",
                  marginBottom: 10,
                  zIndex: 1,
                }}>
                  {step.num}
                </div>

                {/* card */}
                <div style={{
                  width: "100%",
                  backgroundColor: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(56,189,248,0.18)",
                  borderRadius: 16,
                  padding: "18px 20px",
                  boxShadow: "0 2px 12px rgba(56,189,248,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                  display: "flex", alignItems: "flex-start", gap: 14,
                }}>
                  <span style={{ color: "#38BDF8", flexShrink: 0, marginTop: 2 }}>
                    {step.icon}
                  </span>
                  <div>
                    <p style={{
                      fontSize: "0.9375rem", fontWeight: 700,
                      color: "#0A0A0F", letterSpacing: "-0.01em", marginBottom: 4,
                    }}>
                      {step.title}
                    </p>
                    <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "#64748B" }}>
                      {step.body}
                    </p>
                  </div>
                </div>

                {/* connector line between cards */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: "relative",
                    width: 1,
                    height: 32,
                    backgroundColor: "rgba(56,189,248,0.2)",
                    marginTop: 0,
                  }}>
                    <div className="witl-travel-dot" style={{ animationDelay: `${i * 0.7}s` }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Right: copy ── */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            <p style={{
              fontSize: 11, fontWeight: 700, color: "#38BDF8",
              letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20,
            }}>
              What Distribution Lab Does
            </p>

            <h2 style={{
              fontSize: "clamp(1.65rem, 2.8vw, 2.35rem)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12,
              color: "#0A0A0F", marginBottom: 20, maxWidth: 400,
            }}>
              Bring your products to market with GTM systems.
            </h2>

            <p style={{
              fontSize: "0.9375rem", lineHeight: 1.85, color: "#64748B",
              maxWidth: 430, marginBottom: 52,
            }}>
              Distribution Lab builds the operating layer founder-led brands need
              to identify real market opportunity, prioritize the right segments,
              and create a commercial motion that compounds over time.
            </p>

            <div>
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "32px 1fr",
                    gap: 18,
                    padding: "22px 0",
                    borderTop: "1px solid rgba(56,189,248,0.13)",
                    ...(i === capabilities.length - 1
                      ? { borderBottom: "1px solid rgba(56,189,248,0.13)" }
                      : {}),
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                    color: "#38BDF8", letterSpacing: "0.06em", paddingTop: 3, opacity: 0.9,
                  }}>
                    {cap.num}
                  </span>
                  <div>
                    <p style={{
                      fontSize: "0.875rem", fontWeight: 600, color: "#0A0A0F",
                      marginBottom: 6, letterSpacing: "-0.01em",
                    }}>
                      {cap.title}
                    </p>
                    <p style={{ fontSize: "0.8125rem", lineHeight: 1.75, color: "#64748B" }}>
                      {cap.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .witl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 440px;
        }
        .witl-steps {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          max-width: 300px;
          margin: 0 auto;
        }
        .witl-travel-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #38BDF8;
          box-shadow: 0 0 6px rgba(56,189,248,0.8);
          animation: witl-travel 2.2s ease-in-out infinite;
        }
        @keyframes witl-travel {
          0%   { top: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @media (max-width: 860px) {
          .witl-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .witl-steps {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
