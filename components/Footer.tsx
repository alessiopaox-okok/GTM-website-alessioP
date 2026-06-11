import ArchLogo from "./ArchLogo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ArchLogo size={18} />
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#ffffff" }}>
              Distribution <span style={{ color: "#82EEFD" }}>Lab</span>
            </p>
            <p style={{ fontSize: 11, color: "#374151", marginTop: 2 }}>GTM systems for founder-led brands.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <nav style={{ display: "flex", gap: 24 }}>
            {[["Work","#work"],["Process","#process"],["Resources","#resources"],["Contact","#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="footer-link"
                style={{ fontSize: 12, color: "#374151", textDecoration: "none", transition: "color 0.15s" }}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="footer-cta"
            style={{ fontSize: 12, fontWeight: 500, color: "#ffffff", textDecoration: "none", padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)", transition: "background-color 0.15s" }}>
            Book a GTM Audit
          </a>
        </div>

      </div>
      <style>{`
        .footer-link:hover { color: #9CA3AF !important; }
        .footer-cta:hover  { background-color: rgba(255,255,255,0.08) !important; }
      `}</style>
    </footer>
  );
}
