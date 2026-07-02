"use client";
import TopologyField from "./TopologyField";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <TopologyField />

      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0) 100%)",
      }}/>

      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 760,
        margin: "0 auto",
        padding: "120px 48px 80px",
        textAlign: "center",
      }}>
        {/* eyebrow pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          marginBottom: 32, padding: "5px 14px 5px 8px",
          borderRadius: 99, border: "1px solid rgba(56,189,248,0.25)",
          backgroundColor: "rgba(240,249,255,0.85)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#38BDF8", display: "inline-block" }}/>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: "#38BDF8", letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
            Outbound Systems · Distribution Growth
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(2.2rem, 4.2vw, 3.5rem)",
          fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1,
          color: "#0A0A0F", marginBottom: 24,
        }}>
          Your product sells. Getting it into more stores{" "}
          <span style={{ color: "#38BDF8", fontStyle: "italic" }}>
            shouldn&apos;t take all your time.
          </span>
        </h1>

        <p style={{
          fontSize: "1rem", lineHeight: 1.8, color: "#64748B",
          maxWidth: 480, margin: "0 auto 44px", fontWeight: 400,
        }}>
          I build the outbound and CRM systems that help product brands find, qualify, and convert the right wholesale accounts. One founder, hands-on, no account managers in between.
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://cal.eu/alessio-paoletti-klzr4d/wholesale-chat" className="hero-cta-primary">
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/contact" className="hero-cta-secondary">
              Get a free pipeline audit
            </a>
          </div>

          <a href="#pain" className="hero-cta-ghost" style={{ marginTop: 16 }}>See how it works</a>

          <a href="#pain" aria-hidden style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", marginTop: -8 }}>
            <svg width="2" height="60" viewBox="0 0 2 60" fill="none" className="hero-arrow-line">
              <line x1="1" y1="0" x2="1" y2="60" stroke="url(#arrowGrad)" strokeWidth="1.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="arrowGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="1"/>
                </linearGradient>
              </defs>
            </svg>
            <svg width="14" height="44" viewBox="0 0 14 44" fill="none" style={{ marginTop: -1 }}>
              <path d="M1 1L7 7L13 1"   stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15"/>
              <path d="M1 13L7 19L13 13" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
              <path d="M1 25L7 31L13 25" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
              <path d="M1 37L7 43L13 37" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="1"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0A0A0F; color: #fff;
          font-size: 14px; font-weight: 600;
          padding: 13px 24px; border-radius: 10px;
          text-decoration: none; letter-spacing: -0.01em;
          transition: background 0.18s, box-shadow 0.18s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 4px 12px rgba(12,17,29,0.08);
        }
        .hero-cta-primary:hover { background: #1e293b; }
        .hero-cta-secondary {
          display: inline-flex; align-items: center;
          background: transparent; color: #0A0A0F;
          font-size: 14px; font-weight: 500;
          padding: 13px 24px; border-radius: 10px;
          text-decoration: none; letter-spacing: -0.01em;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.18);
          transition: box-shadow 0.15s, color 0.15s;
        }
        .hero-cta-secondary:hover { box-shadow: inset 0 0 0 1px #38BDF8; color: #38BDF8; }
        .hero-cta-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          color: #94A3B8; font-size: 13px; font-weight: 500;
          text-decoration: none; letter-spacing: -0.01em;
          transition: color 0.15s;
        }
        .hero-cta-ghost:hover { color: #38BDF8; }
        .hero-arrow-line { animation: arrow-fade 2.4s ease-in-out infinite; }
        @keyframes arrow-fade {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @media (max-width: 640px) {
          .hero-cta-primary, .hero-cta-secondary { font-size: 13px; padding: 11px 20px; }
        }
      `}</style>
    </section>
  );
}
