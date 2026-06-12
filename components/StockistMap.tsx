"use client";

/*
  Map viewBox: 300 × 400
  Projection used when building england-map.svg:
    x = 12 + ((lon - (-6.0)) / (1.85 - (-6.0))) * (300 - 24)
    y = (400-12) - ((lat - 49.85) / (55.82 - 49.85)) * (400 - 24)
*/
function project(lon: number, lat: number): [number, number] {
  const minLon = -6.0, maxLon = 1.85, minLat = 49.85, maxLat = 55.82;
  const W = 300, H = 400, pad = 12;
  const x = pad + ((lon - minLon) / (maxLon - minLon)) * (W - pad * 2);
  const y = (H - pad) - ((lat - minLat) / (maxLat - minLat)) * (H - pad * 2);
  return [Math.round(x), Math.round(y)];
}

type Dot = { x: number; y: number; city: string; major: boolean };

function city(name: string, lat: number, lon: number, major = false): Dot {
  const [x, y] = project(lon, lat);
  return { x, y, city: name, major };
}

const DOTS: Dot[] = [
  // Stage 1 — 6 dots
  city("London",     51.51,  -0.12, true),
  city("Manchester", 53.48,  -2.24, true),
  city("Birmingham", 52.49,  -1.90, true),
  city("Bristol",    51.45,  -2.60),
  city("Leeds",      53.80,  -1.55),
  city("Liverpool",  53.41,  -2.98),
  // Stage 2 — +8
  city("Sheffield",  53.38,  -1.47),
  city("Newcastle",  54.98,  -1.61, true),
  city("Southampton",50.90,  -1.40),
  city("Nottingham", 52.95,  -1.15),
  city("Brighton",   50.82,  -0.14),
  city("Cambridge",  52.20,   0.12),
  city("Leicester",  52.63,  -1.13),
  city("Reading",    51.46,  -0.98),
  // Stage 3 — +11
  city("Norwich",    52.63,   1.30),
  city("Oxford",     51.75,  -1.26),
  city("York",       53.96,  -1.08),
  city("Hull",       53.74,  -0.33),
  city("Sunderland", 54.91,  -1.38),
  city("Exeter",     50.72,  -3.53),
  city("Plymouth",   50.37,  -4.14),
  city("Coventry",   52.41,  -1.51),
  city("Ipswich",    52.06,   1.16),
  city("Canterbury", 51.28,   1.08),
  city("Stoke",      53.00,  -2.18),
];

const STAGE_COUNT = [6, 14, 25];
const STAGE_LABEL = ["Early market", "Gaining traction", "Full coverage"];
const STAGE_NUM   = ["6 stockists",  "14 stockists",     "25 stockists"];

interface Props { stage: 0 | 1 | 2 }

export default function StockistMap({ stage }: Props) {
  const visible = DOTS.slice(0, STAGE_COUNT[stage]);
  const uid = `sm${stage}`;

  return (
    <div style={{ position: "relative", height: "100%", minHeight: 240, background: "#F7FAFF" }}>

      {/* label */}
      <div style={{
        position: "absolute", bottom: 10, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
        pointerEvents: "none", zIndex: 3,
      }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#38BDF8" }}>
          {STAGE_LABEL[stage]}
        </span>
        <span style={{ fontSize: 9, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>
          {STAGE_NUM[stage]}
        </span>
      </div>

      {/* real England map as background */}
      <img
        src="/england-map.svg"
        alt="England map"
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* SVG overlay for dots */}
      <svg
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid meet"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
        aria-hidden
      >
        <defs>
          {/* glow for active node centre dot */}
          <filter id={`${uid}glow`} x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* faint connection lines */}
        {visible.map((a, i) =>
          visible.slice(i + 1).map((b, j) => {
            const d = Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2);
            if (d > 70) return null;
            return (
              <line key={`${i}-${j}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={`rgba(56,189,248,${((1-d/70)*0.14).toFixed(2)})`}
                strokeWidth="0.8"/>
            );
          })
        )}

        {/* dots — same style as TopologyField nodes */}
        {visible.map((dot, i) => {
          const dur = `${2.4 + i * 0.31}s`;
          return dot.major ? (
            /* active node: outer glow ring + middle ring + inner outlined circle + centre dot */
            <g key={dot.city}>
              {/* outer pulsing glow ring */}
              <circle cx={dot.x} cy={dot.y} r={9} fill="none"
                stroke="rgba(56,189,248,0.14)" strokeWidth="1">
                <animate attributeName="r"      values="7;13;7"           dur={dur} repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.20;0.02;0.20" dur={dur} repeatCount="indefinite"/>
              </circle>
              {/* middle ring */}
              <circle cx={dot.x} cy={dot.y} r={5} fill="none"
                stroke="rgba(56,189,248,0.32)" strokeWidth="1"/>
              {/* inner outlined circle */}
              <circle cx={dot.x} cy={dot.y} r={3} fill="none"
                stroke="rgba(56,189,248,0.80)" strokeWidth="1.5">
                <animate attributeName="stroke-opacity" values="0.72;0.95;0.72" dur={dur} repeatCount="indefinite"/>
              </circle>
              {/* centre filled dot */}
              <circle cx={dot.x} cy={dot.y} r={1.4}
                fill="rgba(56,189,248,0.90)"
                filter={`url(#${uid}glow)`}/>
            </g>
          ) : (
            /* passive node: single outlined circle, softly visible */
            <g key={dot.city}>
              <circle cx={dot.x} cy={dot.y} r={2.5} fill="none"
                stroke="rgba(148,163,184,0.45)" strokeWidth="1">
                <animate attributeName="stroke-opacity" values="0.35;0.55;0.35" dur={`${3 + i * 0.2}s`} repeatCount="indefinite"/>
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
