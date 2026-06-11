"use client";

import { useState, useEffect } from "react";
import ArchLogo from "./ArchLogo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <ArchLogo size={22} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#0A0A0F", letterSpacing: "-0.01em" }}>
            Distribution <span style={{ color: "#82EEFD" }}>Lab</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
          {[["Work","#work"],["Process","#process"],["Resources","#resources"]].map(([label, href]) => (
            <a key={label} href={href} className="nav-link"
              style={{ fontSize: 14, color: "#8492A6", textDecoration: "none", transition: "color 0.15s" }}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta"
            style={{ fontSize: 13, fontWeight: 500, color: "#0A0A0F", textDecoration: "none", padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.14)", transition: "all 0.15s" }}>
            Book a call
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden"
          style={{ padding: 8, color: "#8492A6", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen
            ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 3l12 12M15 3L3 15"/></svg>
            : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 5h14M2 9h14M2 13h14"/></svg>
          }
        </button>
      </nav>

      {menuOpen && (
        <div style={{ backgroundColor: "rgba(255,255,255,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "8px 24px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
          <a href="#work"      style={{ fontSize: 14, color: "#8492A6", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process"   style={{ fontSize: 14, color: "#8492A6", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#resources" style={{ fontSize: 14, color: "#8492A6", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#contact" style={{ fontSize: 13, fontWeight: 500, color: "#0A0A0F", textDecoration: "none", padding: "10px 16px", borderRadius: 8, border: "1px solid rgba(0,0,0,0.14)", textAlign: "center" }} onClick={() => setMenuOpen(false)}>Book a call</a>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: #0A0A0F !important; }
        .nav-cta:hover { background-color: #f5f5f5 !important; }
      `}</style>
    </header>
  );
}
