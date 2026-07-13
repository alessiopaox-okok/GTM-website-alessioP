import { CSSProperties } from "react";

interface LogoProps {
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Logo({ height = 40, className, style }: LogoProps) {
  const sw    = height * (8 / 68);
  const iconW = height * (96 / 68);

  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", ...style }}
    >
      <svg
        width={iconW}
        height={height}
        viewBox="0 0 96 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Distribution Lab"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* glow for inner arc + dome */}
          <filter id="lg-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* softer glow for middle arc */}
          <filter id="lg-glow-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* outer arc — faint, slowest pulse */}
        <path d="M 6 68 A 42 42 0 0 1 90 68"
          stroke="#38BDF8" strokeWidth={sw} strokeLinecap="round" fill="none"
          strokeOpacity="0.20">
          <animate attributeName="stroke-opacity"
            values="0.20;0.06;0.20" dur="3s" repeatCount="indefinite"/>
        </path>

        {/* middle arc — medium, offset pulse */}
        <path d="M 19 68 A 29 29 0 0 1 77 68"
          stroke="#38BDF8" strokeWidth={sw} strokeLinecap="round" fill="none"
          strokeOpacity="0.40" filter="url(#lg-glow-soft)">
          <animate attributeName="stroke-opacity"
            values="0.40;0.18;0.40" dur="3s" begin="0.5s" repeatCount="indefinite"/>
        </path>

        {/* inner arc — bright, glowing */}
        <path d="M 32 68 A 16 16 0 0 1 64 68"
          stroke="#38BDF8" strokeWidth={sw} strokeLinecap="round" fill="none"
          strokeOpacity="0.85" filter="url(#lg-glow)">
          <animate attributeName="stroke-opacity"
            values="0.85;0.50;0.85" dur="3s" begin="1s" repeatCount="indefinite"/>
        </path>

        {/* dome — solid bright centre */}
        <path d="M 41 68 A 7 7 0 0 1 55 68 Z"
          fill="#38BDF8" fillOpacity="1" filter="url(#lg-glow)">
          <animate attributeName="fill-opacity"
            values="1;0.55;1" dur="3s" begin="1s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  );
}
