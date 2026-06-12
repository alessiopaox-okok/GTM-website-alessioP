"use client";

/*
  England outline — viewBox 0 0 200 270
  Coordinates mapped from real lat/lon:
    x = 10 + (5.7 - lon_decimal) * 24   [lon negative=east]
    y = 5  + (55.8 - lat) * 44.8
*/

const ENGLAND_PATH = `
  M 99,5
  Q 82,24 72,40
  Q 62,46 60,59
  Q 64,68 82,77
  Q 80,92 75,113
  Q 76,152 82,197
  Q 79,201 75,206
  Q 62,208 48,212
  Q 31,222 21,233
  Q 13,248 10,261
  Q 35,263 60,256
  Q 84,242 101,233
  Q 119,234 144,229
  Q 162,232 173,226
  Q 182,214 181,202
  Q 172,197 164,198
  Q 170,184 176,171
  Q 182,158 178,148
  Q 162,138 156,130
  Q 149,104 144,81
  Q 132,68 120,59
  Q 110,28 99,5
  Z
`;

/* Real English cities with accurate coordinates */
type Dot = { x: number; y: number; city: string; major: boolean };

const DOTS: Dot[] = [
  // Stage 1 — 6 dots (sparse, biggest hubs)
  { x: 144, y: 198, city: "London",       major: true  },
  { x:  94, y: 108, city: "Manchester",   major: true  },
  { x: 101, y: 153, city: "Birmingham",   major: true  },
  { x:  84, y: 197, city: "Bristol",      major: false },
  { x: 111, y:  95, city: "Leeds",        major: false },
  { x:  75, y: 113, city: "Liverpool",    major: false },

  // Stage 2 — +8 dots
  { x: 111, y: 113, city: "Sheffield",    major: false },
  { x: 108, y:  41, city: "Newcastle",    major: true  },
  { x: 113, y: 225, city: "Southampton",  major: false },
  { x: 118, y: 135, city: "Nottingham",   major: false },
  { x: 144, y: 229, city: "Brighton",     major: false },
  { x: 149, y: 166, city: "Cambridge",    major: false },
  { x: 120, y: 148, city: "Leicester",    major: false },
  { x: 123, y: 198, city: "Reading",      major: false },

  // Stage 3 — +11 dots (full coverage)
  { x: 178, y: 148, city: "Norwich",      major: false },
  { x: 116, y: 184, city: "Oxford",       major: false },
  { x: 120, y:  86, city: "York",         major: false },
  { x: 140, y:  99, city: "Hull",         major: false },
  { x: 113, y:  45, city: "Sunderland",   major: false },
  { x:  63, y: 234, city: "Exeter",       major: false },
  { x:  48, y: 247, city: "Plymouth",     major: false },
  { x: 111, y: 157, city: "Coventry",     major: false },
  { x: 176, y: 171, city: "Ipswich",      major: false },
  { x: 173, y: 207, city: "Canterbury",   major: false },
  { x:  94, y: 130, city: "Stoke",        major: false },
];

const STAGE_COUNT = [6, 14, 25];
const STAGE_LABEL = ["Early market", "Gaining traction", "Full coverage"];
const STAGE_NUM   = ["6 stockists",  "14 stockists",     "25 stockists"];

interface Props { stage: 0 | 1 | 2 }

export default function StockistMap({ stage }: Props) {
  const visible = DOTS.slice(0, STAGE_COUNT[stage]);
  const uid = `sm-${stage}`;

  return (
    <div style={{ position: "relative", height: "100%", minHeight: 220, backgroundColor: "#F7FAFF" }}>

      {/* bottom label */}
      <div style={{
        position: "absolute", bottom: 12, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
        pointerEvents: "none", zIndex: 2,
      }}>
        <span style={{
          fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#38BDF8",
        }}>
          {STAGE_LABEL[stage]}
        </span>
        <span style={{
          fontSize: 9, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: "0.06em",
        }}>
          {STAGE_NUM[stage]}
        </span>
      </div>

      <svg
        viewBox="0 0 200 270"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden
      >
        <defs>
          {/* dot gradient */}
          <radialGradient id={`${uid}-grad`} cx="35%" cy="30%">
            <stop offset="0%"   stopColor="#7DD3FC"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </radialGradient>

          {/* glow filter for active dots */}
          <filter id={`${uid}-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* subtle drop shadow for all dots */}
          <filter id={`${uid}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#0EA5E9" floodOpacity="0.25"/>
          </filter>
        </defs>

        {/* England fill */}
        <path d={ENGLAND_PATH}
          fill="rgba(219,234,254,0.25)"
          stroke="rgba(56,189,248,0.28)"
          strokeWidth="0.8"
        />

        {/* faint connection lines between close cities */}
        {visible.map((a, i) =>
          visible.slice(i + 1).map((b, j) => {
            const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
            if (d > 55) return null;
            const alpha = ((1 - d / 55) * 0.15).toFixed(2);
            return (
              <line key={`${i}-${j}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={`rgba(56,189,248,${alpha})`}
                strokeWidth="0.6"
              />
            );
          })
        )}

        {/* dots */}
        {visible.map((dot, i) => (
          <g key={dot.city} filter={dot.major ? `url(#${uid}-glow)` : `url(#${uid}-shadow)`}>
            {/* pulse ring on major cities */}
            {dot.major && (
              <circle cx={dot.x} cy={dot.y} r={7} fill="none"
                stroke="rgba(56,189,248,0.25)" strokeWidth="1">
                <animate attributeName="r"
                  values="5;10;5" dur={`${2.4 + i * 0.35}s`} repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity"
                  values="0.30;0.0;0.30" dur={`${2.4 + i * 0.35}s`} repeatCount="indefinite"/>
              </circle>
            )}
            {/* white halo */}
            <circle cx={dot.x} cy={dot.y} r={dot.major ? 5 : 4}
              fill="white"/>
            {/* coloured fill */}
            <circle cx={dot.x} cy={dot.y} r={dot.major ? 3.5 : 2.6}
              fill={`url(#${uid}-grad)`}/>
            {/* specular highlight */}
            <circle cx={dot.x - 0.8} cy={dot.y - 0.8} r={dot.major ? 1.2 : 0.9}
              fill="rgba(255,255,255,0.65)"/>
          </g>
        ))}
      </svg>
    </div>
  );
}
