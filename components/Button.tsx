"use client";

import { ReactNode, useRef, useEffect } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "accent" | "ghost-dark";
  size?: "md" | "lg";
  className?: string;
}

const RADIUS = 8;

export default function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const obs = new ResizeObserver(() => {
      const w = wrap.offsetWidth, h = wrap.offsetHeight;
      const p = 2 * (w - 2 * RADIUS) + 2 * (h - 2 * RADIUS) + 2 * Math.PI * RADIUS;
      wrap.style.setProperty("--perimeter", String(p));
    });
    obs.observe(wrap);
    return () => obs.disconnect();
  }, []);

  const pad = size === "lg" ? "13px 26px" : "8px 16px";

  const styleMap: Record<string, React.CSSProperties> = {
    primary:      { backgroundColor: "#0A0A0F", color: "#ffffff" },
    ghost:        { backgroundColor: "transparent", color: "#0A0A0F", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18)" },
    "ghost-dark": { backgroundColor: "transparent", color: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)" },
    accent:       { backgroundColor: "#38BDF8", color: "#0A0A0F" },   // dark text on light cyan
  };

  const strokeMap: Record<string, string> = {
    primary:      "#38BDF8",
    ghost:        "#38BDF8",
    "ghost-dark": "#38BDF8",
    accent:       "#0A0A0F",
  };

  return (
    <span ref={wrapRef} className={`btn-wrap ${className}`}
      style={{ position: "relative", display: "inline-flex", borderRadius: RADIUS + 1 } as React.CSSProperties}>
      <svg aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
        <rect className="trace-rect"
          x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)"
          rx={RADIUS} ry={RADIUS} fill="none"
          stroke={strokeMap[variant]} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <a href={href}
        style={{ position: "relative", zIndex: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: 13, borderRadius: RADIUS, whiteSpace: "nowrap", padding: pad, textDecoration: "none", transition: "opacity 0.15s", cursor: "pointer", ...styleMap[variant] }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
        {children}
      </a>
    </span>
  );
}
