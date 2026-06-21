"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    target: 1200,
    label: "Emails sent",
    format: (n: number) => Math.round(n).toLocaleString("en-GB"),
  },
  {
    target: 8.26,
    label: "Reply rate",
    format: (n: number) => n.toFixed(1) + "%",
  },
  {
    target: 28,
    label: "Stockist opportunities",
    format: (n: number) => Math.round(n).toString(),
  },
];

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CampaignStats() {
  const [progress, setProgress] = useState(0);
  const [showSupport, setShowSupport] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const duration = 1500;

          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            setProgress(easeOut(t));
            if (t < 1) {
              requestAnimationFrame(tick);
            } else {
              setTimeout(() => setShowSupport(true), 150);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        background: "#ffffff",
        borderRadius: 18,
        border: "1px solid rgba(56,189,248,0.13)",
        boxShadow: "0 2px 24px rgba(56,189,248,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        padding: "40px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {/* three stats */}
      <div className="cs-row">
        {STATS.map((stat, i) => (
          <div key={i} className="cs-stat">
            <div style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3vw, 2.75rem)",
              letterSpacing: "-0.025em",
              color: "#38BDF8",
              lineHeight: 1,
              marginBottom: 10,
            }}>
              {stat.format(stat.target * progress)}
            </div>
            <div className="font-mono" style={{
              fontSize: 11,
              color: "#64748B",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* supporting line — fades in after counters finish */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "#64748B",
          letterSpacing: "0.04em",
          opacity: showSupport ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        8 weeks · £36,400 in annualised pipeline
      </div>

      <style>{`
        .cs-row {
          display: flex;
          flex-direction: row;
          gap: 32px;
        }
        .cs-stat {
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 767px) {
          .cs-row { flex-direction: column; gap: 28px; }
        }
      `}</style>
    </div>
  );
}
