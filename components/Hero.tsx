"use client";
import TopologyField from "./TopologyField";
import PipelineDashboard from "./PipelineDashboard";

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
      {/* ── ambient topology background ── */}
      <TopologyField />

      {/* ── left-side white gradient so text stays readable ── */}
      <div aria-hidden style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.7) 58%, rgba(255,255,255,0.0) 100%)",
      }}/>

      {/* ── pipeline dashboard floating over topology ── */}
      <PipelineDashboard />

      {/* ── very faint top radial wash ── */}
      <div aria-hidden style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 72% 50%, rgba(186,230,253,0.12) 0%, transparent 70%)",
      }}/>

      {/* ── hero content ── */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 1100,
        margin: "0 auto",
        width: "100%",
        padding: "120px 48px 80px",
      }}>
        <div style={{ maxWidth: 580 }}>

          {/* category label */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 36,
            padding: "5px 14px 5px 8px",
            borderRadius: 99,
            border: "1px solid rgba(56,189,248,0.25)",
            backgroundColor: "rgba(240,249,255,0.8)",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", backgroundColor:"#38BDF8", display:"inline-block" }}/>
            <span style={{ fontSize:11, fontWeight:600, color:"#38BDF8", letterSpacing:"0.16em", textTransform:"uppercase" }}>
              GTM Systems · D2C &amp; Wholesale
            </span>
          </div>

          {/* headline */}
          <h1 style={{
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#0C111D",
            marginBottom: 28,
          }}>
            Scale wholesale<br />
            like a system,<br />
            <span style={{ color:"#38BDF8", fontStyle:"italic" }}>
              not a guess.
            </span>
          </h1>

          {/* subhead */}
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#64748B",
            maxWidth: 420,
            marginBottom: 44,
            fontWeight: 400,
          }}>
            We build AI-powered GTM systems that turn scattered
            outreach into structured retailer pipeline — and keep
            it running.
          </p>

          {/* CTAs */}
          <div style={{ display:"flex", gap:14, flexWrap:"wrap", alignItems:"center", marginBottom:48 }}>
            <a href="#contact" className="hero-cta-primary">
              Book a GTM Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink:0 }}>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#what" className="hero-cta-ghost">
              See how it works
            </a>
          </div>

          {/* social proof */}
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {/* divider */}
            <div style={{ width:48, height:1, backgroundColor:"rgba(0,0,0,0.08)", marginBottom:4 }}/>

            <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
              {/* avatar stack */}
              <div style={{ display:"flex", alignItems:"center" }}>
                {["#38BDF8","#22C55E","#818CF8"].map((c,i)=>(
                  <div key={i} style={{
                    width:26, height:26, borderRadius:"50%", backgroundColor:c,
                    border:"2px solid #fff",
                    marginLeft: i===0?0:-7,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:9, fontWeight:700, color:"#fff",
                    position:"relative", zIndex:3-i,
                  }}>
                    {["A","B","C"][i]}
                  </div>
                ))}
              </div>

              <span style={{ fontSize:12, color:"#94A3B8", fontWeight:400 }}>
                Built for founder-led consumer brands
              </span>

              <span style={{ width:1, height:12, backgroundColor:"#E2E8F0" }}/>

              <span style={{ fontSize:12, color:"#64748B" }}>
                <strong style={{ color:"#0C111D", fontWeight:600 }}>22</strong> opportunities ·{" "}
                <strong style={{ color:"#0C111D", fontWeight:600 }}>45 days</strong>
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0C111D;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 24px;
          border-radius: 10px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: background 0.18s, box-shadow 0.18s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 4px 12px rgba(12,17,29,0.08);
        }
        .hero-cta-primary:hover {
          background: #1e293b;
          box-shadow: 0 2px 6px rgba(0,0,0,0.14), 0 6px 20px rgba(12,17,29,0.14);
        }
        .hero-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          padding: 13px 4px;
          transition: color 0.15s;
          letter-spacing: -0.01em;
          border-bottom: 1px solid transparent;
        }
        .hero-cta-ghost::after {
          content: '→';
          font-size: 15px;
          transition: transform 0.18s;
        }
        .hero-cta-ghost:hover {
          color: #0C111D;
        }
        .hero-cta-ghost:hover::after {
          transform: translateX(3px);
        }
        @media (max-width: 640px) {
          .hero-cta-primary, .hero-cta-ghost { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
