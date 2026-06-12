"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s ease",
      backgroundColor: scrolled ? "rgba(240,247,255,0.92)" : "rgba(240,247,255,0.85)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(56,189,248,0.15)" : "1px solid transparent",
    }}>
      <nav style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 40px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Brand */}
        <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "flex-end", gap: 9 }}>
          <Logo height={28} />
          <span style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            userSelect: "none",
          }}>
            Distribution Lab
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
          {[["Work","#work"],["How it works","#what"],["Resources","#resources"]].map(([label, href]) => (
            <a key={label} href={href} className="nav-link"
              style={{ fontSize: 14, color: "#64748B", textDecoration: "none", transition: "color 0.15s", fontWeight: 500 }}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta"
            style={{
              fontSize: 13, fontWeight: 600, color: "#fff",
              textDecoration: "none", padding: "9px 18px", borderRadius: 9,
              backgroundColor: "#38BDF8",
              boxShadow: "0 2px 10px rgba(56,189,248,0.30)",
              transition: "all 0.15s",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}>
            Book a call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden"
          style={{ padding: 8, color: "#64748B", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen
            ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 3l12 12M15 3L3 15"/></svg>
            : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 5h14M2 9h14M2 13h14"/></svg>
          }
        </button>
      </nav>

      {menuOpen && (
        <div style={{ backgroundColor: "rgba(240,247,255,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(56,189,248,0.1)", padding: "8px 40px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
          <a href="#work"      style={{ fontSize: 14, color: "#64748B", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#what"   style={{ fontSize: 14, color: "#64748B", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#resources" style={{ fontSize: 14, color: "#64748B", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#contact"
            style={{ fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none", padding: "10px 18px", borderRadius: 9, backgroundColor: "#38BDF8", textAlign: "center" }}
            onClick={() => setMenuOpen(false)}>
            Book a call →
          </a>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: #0F172A !important; }
        .nav-cta:hover  { background-color: #0EA5E9 !important; box-shadow: 0 2px 14px rgba(56,189,248,0.45) !important; }
      `}</style>
    </header>
  );
}
