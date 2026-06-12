"use client";
import { useEffect, useRef } from "react";
import TopologyField from "./TopologyField";
import GTMFlow from "./GTMFlow";

export default function WhatItIs() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!leftRef.current || !sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        // progress: 0 (section top at viewport top) → 1 (section bottom at viewport bottom)
        const progress = Math.min(Math.max(-rect.top / total, 0), 1);
        // left column drifts up very gently — max 28px
        leftRef.current.style.transform = `translateY(${-progress * 28}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what"
      style={{
        position: "relative",
        backgroundColor: "#F0F9FF",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "80px 24px 120px",
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
          position: "absolute", top: 0, left: 0,
          width: "50%", height: "100%",
          pointerEvents: "none", opacity: 0.15,
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

      {/* ── right gradient for readability ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(to right, transparent 0%, rgba(240,249,255,0.55) 42%, rgba(240,249,255,0.96) 62%, #F0F9FF 100%)",
      }} />

      {/* ── content ── */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto" }}>
        <div className="witl-grid">

          {/* ── Left: parallax flow diagram ── */}
          <div
            ref={leftRef}
            style={{
              display: "flex", alignItems: "flex-start", justifyContent: "center",
              willChange: "transform",
              transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <GTMFlow />
          </div>

          {/* ── Right: sticky copy ── */}
          <div style={{
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
            alignSelf: "flex-start",
            display: "flex", flexDirection: "column",
          }}>
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
              maxWidth: 430,
            }}>
              Distribution Lab builds the operating layer founder-led brands need
              to identify real market opportunity, prioritize the right segments,
              and create a commercial motion that compounds over time.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .witl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .witl-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
