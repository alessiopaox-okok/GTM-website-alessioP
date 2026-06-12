import { CSSProperties } from "react";

interface LogoProps {
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Logo({ height = 40, className, style }: LogoProps) {
  const sw = height * (10 / 72);
  const iconW = height * (110 / 72);
  const fontSize = height * 0.58;
  const gap = height * 0.38;

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        ...style,
      }}
    >
      <svg
        width={iconW}
        height={height}
        viewBox="0 0 110 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Outer arc */}
        <path
          d="M 7 72 A 48 48 0 0 1 103 72"
          stroke="var(--logo-icon-dark, #4A7CF6)"
          strokeWidth={sw}
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle arc */}
        <path
          d="M 22 72 A 33 33 0 0 1 88 72"
          stroke="var(--logo-icon-mid, #93C5FD)"
          strokeWidth={sw}
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner arc */}
        <path
          d="M 37 72 A 18 18 0 0 1 73 72"
          stroke="var(--logo-icon-light, #BFDBFE)"
          strokeWidth={sw}
          strokeLinecap="round"
          fill="none"
        />
        {/* Dome */}
        <path
          d="M 47 72 A 8 8 0 0 1 63 72 Z"
          fill="var(--logo-icon-dome, #1E3A8A)"
        />
      </svg>

      <span
        style={{
          fontFamily: "var(--font-logo, 'Inter Tight', 'Inter', 'Manrope', sans-serif)",
          fontSize,
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1,
          color: "var(--logo-primary, #1E293B)",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        Distribution{" "}
        <span style={{ color: "var(--logo-accent, #38BDF8)" }}>Lab</span>
      </span>
    </div>
  );
}
