"use client";

const DOTS: [number, number, number, boolean][] = [
  [28, 52, 2, false], [72, 38, 2, false], [48, 96, 2.8, true ],
  [108, 68, 2, false], [88, 130, 2.8, true ], [22, 162, 2, false],
  [138, 90, 2, false], [62, 188, 2, false], [120, 180, 2.8, true ],
  [35, 228, 2, false], [92, 250, 2, false], [148, 235, 2, false],
  [45, 300, 2, false], [112, 308, 2, false], [78, 346, 2.8, true ],
  [28, 368, 2, false], [148, 360, 2, false], [132, 148, 2, false],
  [18, 120, 2, false], [160, 198, 2, false],
];

const LABELS: [number, number, string][] = [
  [48, 96,  "Tier 1"],
  [88, 130, "High fit"],
  [120, 180,"Segment"],
  [78, 346, "Studio"],
];

const IN_PATHS = [
  { id: "ip0", d: "M 88,130 C 152,130 200,178 228,188" },
  { id: "ip1", d: "M 120,180 C 172,180 205,185 228,190" },
  { id: "ip2", d: "M 78,346 C 148,346 202,210 228,193" },
];

const OUT_PATHS = [
  { id: "op0", d: "M 232,188 C 295,188 300,128 288,128" },
  { id: "op1", d: "M 232,190 C 295,190 300,193 288,193" },
  { id: "op2", d: "M 232,192 C 295,192 300,258 288,258" },
];

const CARDS = [
  { status: "Warm",            sBg: "#EFF6FF", sColor: "#2563EB", account: "Oliver & Co.",    next: "Send samples",  cy: 128 },
  { status: "Call booked",     sBg: "#F0FDF4", sColor: "#16A34A", account: "Botanica",         next: "Prep brief",    cy: 193 },
  { status: "Range requested", sBg: "#F5F3FF", sColor: "#7C3AED", account: "The Edit Studio",  next: "Follow up Fri", cy: 258 },
];

export default function SignalToPipeline() {
  return (
    <div style={{
      position: "relative", width: "100%", height: 395,
      borderRadius: 18, overflow: "hidden",
      background: "linear-gradient(135deg, rgba(240,249,255,0.7) 0%, #fff 60%)",
      border: "1px solid rgba(56,189,248,0.13)",
      boxShadow: "0 2px 24px rgba(56,189,248,0.06), 0 1px 4px rgba(0,0,0,0.04)",
    }}>

      {/* top label */}
      <div style={{ position: "absolute", top: 14, left: 18, display: "flex", alignItems: "center", gap: 7, zIndex: 4 }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%", backgroundColor: "#38BDF8", flexShrink: 0,
          animation: "stp-ping 6.6s ease-out infinite",
        }}/>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#64748B", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
          Signal to Pipeline
        </span>
      </div>

      {/* account count */}
      <div style={{ position: "absolute", bottom: 14, left: 18, zIndex: 4 }}>
        <span style={{ fontSize: 9, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>
          412 target accounts
        </span>
      </div>

      {/* SVG */}
      <svg viewBox="0 0 460 395" width="100%" height="100%"
        style={{ position: "absolute", inset: 0 }} aria-hidden>
        <defs>
          <filter id="stp-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="stp-glow-sm" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.8" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {IN_PATHS.map(p  => <path key={p.id} id={p.id} d={p.d} fill="none"/>)}
          {OUT_PATHS.map(p => <path key={p.id} id={p.id} d={p.d} fill="none"/>)}
        </defs>

        {/* market dots */}
        {DOTS.map(([x, y, r, active], i) => active ? (
          <g key={i}>
            <circle cx={x} cy={y} r={r+6} fill="none" stroke="rgba(56,189,248,0.11)" strokeWidth="1">
              <animate attributeName="r"             values={`${r+4};${r+10};${r+4}`}           dur={`${((2.2+i*0.3)*3.3).toFixed(1)}s`} repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.13;0.01;0.13"                    dur={`${((2.2+i*0.3)*3.3).toFixed(1)}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={x} cy={y} r={r+2} fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="1"/>
            <circle cx={x} cy={y} r={r}   fill="none" stroke="rgba(56,189,248,0.45)" strokeWidth="1.4">
              <animate attributeName="stroke-opacity" values="0.39;0.54;0.39" dur={`${((2.2+i*0.3)*3.3).toFixed(1)}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={x} cy={y} r={1.4} fill="rgba(56,189,248,0.57)" filter="url(#stp-glow-sm)"/>
          </g>
        ) : (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill="none" stroke="rgba(148,163,184,0.24)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.18;0.30;0.18" dur={`${(3+i*0.2)*3.3}s`} repeatCount="indefinite"/>
            </circle>
          </g>
        ))}

        {/* active dot labels */}
        {LABELS.map(([x, y, label], i) => (
          <g key={i}>
            <rect x={x+8} y={y-9} width={label.length*5.2+10} height={15}
              rx="4" fill="rgba(255,255,255,0.88)" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8"/>
            <text x={x+13} y={y+1} fontSize="8" fill="rgba(56,189,248,0.7)"
              fontFamily="var(--font-mono)" fontWeight="700" letterSpacing="0.06em">
              {label}
            </text>
          </g>
        ))}

        {/* zone separator */}
        <line x1="185" y1="20" x2="185" y2="375"
          stroke="rgba(56,189,248,0.05)" strokeWidth="1" strokeDasharray="4 6"/>

        {/* input beam paths */}
        {IN_PATHS.map((p, i) => (
          <g key={p.id}>
            <path d={p.d} fill="none" stroke="rgba(56,189,248,0.08)" strokeWidth="1" strokeDasharray="3 5"/>
            <circle r="2.2" fill="rgba(56,189,248,0.48)" filter="url(#stp-glow-sm)">
              <animateMotion dur={`${((1.6+i*0.4)*3.3).toFixed(1)}s`} repeatCount="indefinite" begin={`${i*1.0}s`}>
                <mpath href={`#${p.id}`}/>
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* filter node */}
        <g>
          <circle cx="230" cy="190" r="22" fill="none" stroke="rgba(56,189,248,0.06)" strokeWidth="1">
            <animate attributeName="r"             values="18;28;18"    dur="9.2s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.08;0;0.08" dur="9.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="230" cy="190" r="14" fill="none" stroke="rgba(56,189,248,0.13)" strokeWidth="1">
            <animate attributeName="r"             values="12;20;12"    dur="9.2s" begin="1.3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.15;0;0.15" dur="9.2s" begin="1.3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="230" cy="190" r="10" fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="1"/>
          <circle cx="230" cy="190" r="6"  fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.30)" strokeWidth="1.5"/>
          <circle cx="230" cy="190" r="3.5" fill="rgba(56,189,248,0.57)" filter="url(#stp-glow)"/>
          <circle cx="229" cy="189" r="1.2" fill="rgba(255,255,255,0.8)"/>
        </g>

        {/* qualifying label */}
        <rect x="204" y="205" width="52" height="13" rx="3"
          fill="rgba(240,249,255,0.9)" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8"/>
        <text x="230" y="215" textAnchor="middle" fontSize="7.5" fill="rgba(56,189,248,0.6)"
          fontFamily="var(--font-mono)" fontWeight="700" letterSpacing="0.08em">
          QUALIFYING
        </text>

        {/* output beam paths */}
        {OUT_PATHS.map((p, i) => (
          <g key={p.id}>
            <path d={p.d} fill="none" stroke="rgba(56,189,248,0.11)" strokeWidth="1" strokeDasharray="3 5"/>
            <circle r="2.2" fill="rgba(56,189,248,0.51)" filter="url(#stp-glow-sm)">
              <animateMotion dur={`${((1.2+i*0.3)*3.3).toFixed(1)}s`} repeatCount="indefinite" begin={`${2.0+i*0.8}s`}>
                <mpath href={`#${p.id}`}/>
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>

      {/* pipeline cards */}
      {CARDS.map((card, i) => (
        <div key={i} className="stp-card" style={{
          position: "absolute", right: 16, top: card.cy - 30,
          width: 162, height: 58,
          background: "#fff", borderRadius: 10,
          border: "1px solid rgba(56,189,248,0.18)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          padding: "8px 11px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          zIndex: 3,
        }}>
          <span style={{
            fontSize: 9, fontWeight: 700, color: card.sColor,
            backgroundColor: card.sBg, padding: "1px 7px",
            borderRadius: 99, letterSpacing: "0.04em",
            alignSelf: "flex-start",
          }}>
            {card.status}
          </span>
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: "#0F172A", lineHeight: 1.2, marginBottom: 2 }}>
              {card.account}
            </p>
            <p style={{ fontSize: 9.5, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>
              Next: {card.next}
            </p>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes stp-ping {
          0%   { box-shadow: 0 0 0 0px rgba(56,189,248,0.27); }
          70%  { box-shadow: 0 0 0 8px rgba(56,189,248,0);    }
          100% { box-shadow: 0 0 0 0px rgba(56,189,248,0);    }
        }
        .stp-card { transition: transform 0.2s, box-shadow 0.2s; }
        .stp-card:hover {
          transform: translateX(-3px);
          box-shadow: 0 4px 18px rgba(56,189,248,0.16);
          border-color: rgba(56,189,248,0.35);
        }
      `}</style>
    </div>
  );
}
