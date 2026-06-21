import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px" }}>
      <div className="footer-inner" style={{ maxWidth: 1024, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{
            display: "inline-flex", alignItems: "flex-end", gap: 9,
            "--logo-primary": "#ffffff",
            "--logo-accent": "#38BDF8",
          } as React.CSSProperties}>
            <Logo height={28} />
            <span style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.025em", lineHeight: 1, userSelect: "none" }}>
              Distribution Lab
            </span>
          </div>
          <p style={{ fontSize: 11, color: "#374151", paddingLeft: 2 }}>GTM systems for founder-led brands.</p>
        </div>

        <div className="footer-right" style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <nav className="footer-nav" style={{ display: "flex", gap: 24 }}>
            {[["Work","#work"],["Process","#process"],["Contact us","/contact"]].map(([label, href]) => (
              <a key={label} href={href} className="footer-link"
                style={{ fontSize: 12, color: "#374151", textDecoration: "none", transition: "color 0.15s" }}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="footer-cta"
            style={{ fontSize: 12, fontWeight: 500, color: "#ffffff", textDecoration: "none", padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)", transition: "background-color 0.15s" }}>
            Book a call
          </a>
        </div>

      </div>
      <style>{`
        .footer-link:hover { color: #9CA3AF !important; }
        .footer-cta:hover  { background-color: rgba(255,255,255,0.08) !important; }
        @media (max-width: 767px) {
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 28px !important; }
          .footer-nav   { flex-wrap: wrap !important; gap: 16px !important; }
          .footer-right { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }
      `}</style>
    </footer>
  );
}
