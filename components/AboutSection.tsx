export default function AboutSection() {
  return (
    <section
      className="sec-pad"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* eyebrow */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
          letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 48,
        }}>
          Who&apos;s behind this
        </p>

        <div className="about-grid">

          {/* photo */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              width: "100%", maxWidth: 340,
              aspectRatio: "4 / 5",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#F0F9FF",
              border: "1px solid rgba(56,189,248,0.12)",
              flexShrink: 0,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/alessio.jpg"
                alt="Alessio Paoletti"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* copy */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            <h2 style={{
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15,
              color: "#0A0A0F", margin: 0,
            }}>
              I&apos;m Alessio, a GTM operator building wholesale growth systems for product brands.
            </h2>

            <p style={{ fontSize: "0.9375rem", lineHeight: 1.85, color: "#64748B", margin: 0 }}>
              My background spans e-commerce, SaaS, outbound, CRM, and business development. I&apos;ve spent years close to the commercial engine of companies — understanding customers, testing channels, and turning scattered go-to-market activity into something structured and repeatable.
            </p>

            <p style={{ fontSize: "0.9375rem", lineHeight: 1.85, color: "#64748B", margin: 0 }}>
              I started Distribution Lab because too many product brands know they could grow through retailers, clinics, studios, and specialty stockists — but the process is manual, inconsistent, and founder-dependent. I build the system behind that motion.
            </p>

            <a href="https://cal.eu/alessio-paoletti-klzr4d/wholesale-chat" className="about-cta">
              Book a call
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .about-cta {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 8px;
          background-color: #0A0A0F; color: #fff;
          font-size: 13px; font-weight: 600;
          padding: 11px 22px; border-radius: 9px;
          text-decoration: none; letter-spacing: -0.01em;
          align-self: flex-start;
          transition: background 0.15s;
        }
        .about-cta:hover { background-color: #1e293b; }
        .about-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-grid > div:first-child { max-width: 280px; }
        }
      `}</style>
    </section>
  );
}
