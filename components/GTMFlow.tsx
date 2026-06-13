"use client";
import { ReactNode } from "react";

/* ── Real brand logos ────────────────────────────────────────────────── */
const GoogleMapsLogo = () => <img src="/logos/googlemaps.png" width={18} height={18} alt="Google Maps" style={{ borderRadius: 4, display: "block" }} />;
const ApifyLogo     = () => <img src="/logos/apify.png"      width={18} height={18} alt="Apify"       style={{ borderRadius: 4, display: "block" }} />;
const ClayLogo      = () => <img src="/logos/clay.png"       width={18} height={18} alt="Clay"        style={{ borderRadius: 4, display: "block" }} />;
const InstantlyLogo = () => <img src="/logos/instantly.png"  width={18} height={18} alt="Instantly"   style={{ borderRadius: 4, display: "block" }} />;
const AttioLogo     = () => <img src="/logos/attio.png"      width={18} height={18} alt="Attio"       style={{ borderRadius: 4, display: "block" }} />;

/* ── Icons ───────────────────────────────────────────────────────────── */
const IconList = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>
  </svg>
);
const IconSearch = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const IconPerson = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
  </svg>
);
const IconRefresh = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6"/><path d="M1 20v-6h6"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

/* ── Pill ────────────────────────────────────────────────────────────── */
function Pill({ icon, label, accent = false }: { icon?: ReactNode; label: string; accent?: boolean }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "5px 11px", borderRadius: 99,
      border: `1px solid ${accent ? "rgba(56,189,248,0.35)" : "rgba(56,189,248,0.22)"}`,
      backgroundColor: accent ? "rgba(240,249,255,0.9)" : "rgba(255,255,255,0.82)",
      backdropFilter: "blur(8px)",
      fontSize: 11.5, fontWeight: 500,
      color: accent ? "#0369A1" : "#334155",
      whiteSpace: "nowrap", flexShrink: 0,
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    }}>
      {icon && <span style={{ color: "#64748B", display: "flex" }}>{icon}</span>}
      {label}
    </div>
  );
}

/* ── Brand pill with inline SVG logo ────────────────────────────────── */
function BrandPill({ logo, label }: { logo: ReactNode; label: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      padding: "5px 12px", borderRadius: 99,
      border: "1px solid rgba(56,189,248,0.25)",
      backgroundColor: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(8px)",
      fontSize: 12, fontWeight: 600, color: "#0A0A0F",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      flexShrink: 0,
    }}>
      {logo}
      {label}
    </div>
  );
}

/* ── Wide brand row (Attio + CRM) ────────────────────────────────────── */
function BrandRow({ logo, label, detail }: { logo: ReactNode; label: string; detail: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center",
      padding: "7px 14px", borderRadius: 10,
      border: "1px solid rgba(56,189,248,0.22)",
      backgroundColor: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      gap: 10,
    }}>
      {logo}
      <span style={{ fontSize: 12, fontWeight: 600, color: "#0A0A0F" }}>{label}</span>
      <span style={{ width: 1, height: 12, backgroundColor: "rgba(56,189,248,0.25)" }} />
      <span style={{ fontSize: 12, color: "#64748B", fontWeight: 400 }}>{detail}</span>
    </div>
  );
}

/* ── Dash connector ──────────────────────────────────────────────────── */
function Dash() {
  return (
    <div style={{
      flex: "0 0 14px", height: 1,
      background: "repeating-linear-gradient(to right, rgba(56,189,248,0.4) 0, rgba(56,189,248,0.4) 3px, transparent 3px, transparent 7px)",
    }} />
  );
}

/* ── Vertical connector with animated dot ───────────────────────────── */
function VertConnector({ delay = 0 }: { delay?: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", position: "relative", height: 36, margin: "2px 0" }}>
      <div style={{ width: 1, height: "100%", backgroundColor: "rgba(56,189,248,0.22)" }}>
        <div className="gtm-dot" style={{ animationDelay: `${delay}s` }} />
      </div>
    </div>
  );
}

/* ── Step header ─────────────────────────────────────────────────────── */
function StepHeader({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{
        width: 36, height: 36, borderRadius: "50%",
        border: "1px solid rgba(56,189,248,0.3)",
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
        color: "#38BDF8", letterSpacing: "0.06em",
      }}>
        {num}
      </div>
      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0A0A0F", letterSpacing: "-0.02em", margin: 0 }}>
        {title}
      </h3>
    </div>
  );
}

/* ── Tier card ───────────────────────────────────────────────────────── */
function TierCard({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{
      flex: 1, textAlign: "center",
      padding: "9px 10px", borderRadius: 10,
      border: "1px solid rgba(56,189,248,0.2)",
      backgroundColor: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(6px)",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
    }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: "#3B82F6", margin: 0 }}>{title}</p>
      <p style={{ fontSize: 10.5, color: "#64748B", margin: "2px 0 0" }}>{sub}</p>
    </div>
  );
}

/* ── Step block (no card background) ────────────────────────────────── */
function Step({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
      {children}
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────────────────── */
export default function GTMFlow() {
  return (
    <div className="gtm-flow-root" style={{ width: "100%", maxWidth: 480, margin: "0 auto", padding: "0 8px" }}>

      {/* ── 01 Map the market ── */}
      <Step>
        <StepHeader num="01" title="Map the market" />
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
          <BrandPill logo={<GoogleMapsLogo />} label="Google Maps" />
          <Dash />
          <Pill icon={<IconList />} label="Directories" />
          <Dash />
          <Pill icon={<IconSearch />} label="Local Search" />
          <Dash />
          <BrandPill logo={<ApifyLogo />} label="Apify" />
        </div>
      </Step>

      <VertConnector delay={0} />

      {/* ── 02 Segmenting ── */}
      <Step>
        <StepHeader num="02" title="Segmenting" />
        <BrandPill logo={<ClayLogo />} label="clay" />
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
          <Pill label="Deduplication" />
          <Dash />
          <Pill label="Enrichment" />
          <Dash />
          <Pill label="Category Tagging" />
          <Dash />
          <Pill label="Tiering" />
        </div>
        <div style={{ display: "flex", gap: 6, width: "100%" }}>
          <TierCard title="Tier 1" sub="Highest fit" />
          <TierCard title="Tier 2" sub="Good fit" />
          <TierCard title="Tier 3" sub="Long-tail" />
        </div>
      </Step>

      <VertConnector delay={0.8} />

      {/* ── 03 Connecting ── */}
      <Step>
        <StepHeader num="03" title="Connecting" />
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
          <BrandPill logo={<InstantlyLogo />} label="instantly" />
          <Dash />
          <Pill label="Campaign A" />
          <Dash />
          <Pill label="Campaign B" />
          <Dash />
          <Pill icon={<IconRefresh />} label="Follow-up Sequence" />
        </div>
        <BrandRow logo={<AttioLogo />} label="attio" detail="CRM & Pipeline" />
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
          <Pill icon={<IconPerson />} label="New Accounts" accent />
          <Dash />
          <Pill icon={<IconPerson />} label="Account 01" />
          <Dash />
          <Pill icon={<IconPerson />} label="Account 02" />
        </div>
      </Step>

      <style>{`
        .gtm-dot {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #38BDF8;
          box-shadow: 0 0 6px rgba(56,189,248,0.9);
          animation: gtm-travel 2.2s ease-in-out infinite;
        }
        @keyframes gtm-travel {
          0%   { top: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
