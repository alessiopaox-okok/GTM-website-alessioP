"use client";
import { useState } from "react";

/* ── Territory boundary (viewBox 480 × 380) ────────────────────────────────
   Organic blob suggesting a geographic market region                        */
const T: [number, number][] = [
  [118, 52], [178, 32], [248, 20], [316, 26], [378, 22], [428, 46],
  [458, 84], [463, 134], [454, 186], [448, 242], [426, 292], [390, 330],
  [334, 355], [265, 364], [192, 357], [128, 333], [78, 292], [50, 245],
  [46, 192], [54, 146], [72, 102], [94, 70],
];

/* ── Nodes ─────────────────────────────────────────────────────────────── */
type NT = "b" | "g";
const NODES: [number, number, NT][] = [
  // top band
  [182, 65, "b"], [258, 50, "g"], [332, 56, "b"], [402, 82, "g"],
  // upper-mid
  [118, 120, "g"], [198, 110, "b"], [275, 104, "g"], [350, 110, "b"], [430, 136, "g"],
  // mid
  [78, 172, "b"], [162, 164, "g"], [242, 158, "b"], [318, 162, "g"], [398, 172, "b"],
  // mid-lower
  [112, 232, "g"], [192, 222, "b"], [268, 216, "g"], [342, 224, "b"], [414, 238, "g"],
  // lower
  [152, 286, "b"], [228, 276, "g"], [302, 272, "b"], [372, 282, "g"],
  // bottom
  [198, 332, "g"], [275, 330, "b"], [350, 328, "g"],
];

/* ── Edges between nearby nodes ────────────────────────────────────────── */
const THRESH = 100;
const EDGES: [number, number][] = [];
for (let i = 0; i < NODES.length; i++)
  for (let j = i + 1; j < NODES.length; j++) {
    const dx = NODES[i][0] - NODES[j][0], dy = NODES[i][1] - NODES[j][1];
    if (Math.sqrt(dx * dx + dy * dy) < THRESH) EDGES.push([i, j]);
  }

/* ── Smooth territory path ─────────────────────────────────────────────── */
function territoryD(pts: [number, number][]) {
  let d = "";
  for (let i = 0; i < pts.length; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[(i + 1) % pts.length];
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    d += i === 0 ? `M${mx},${my} ` : `Q${x0},${y0} ${mx},${my} `;
  }
  return d + "Z";
}
const TERRITORY_D = territoryD(T);

/* ── Particle along an edge ─────────────────────────────────────────────── */
function Particle({ x1, y1, x2, y2, dur }: { x1: number; y1: number; x2: number; y2: number; dur: number }) {
  const id = `pm-${x1}-${y1}-${x2}-${y2}`;
  return (
    <g>
      <defs>
        <path id={id} d={`M${x1},${y1} L${x2},${y2}`} />
      </defs>
      <circle r={1.8} fill="#38BDF8" opacity={0.7} filter="url(#mBlueGlowSoft)">
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" rotate="auto">
          <mpath href={`#${id}`} />
        </animateMotion>
      </circle>
    </g>
  );
}

/* ── Blue market node ───────────────────────────────────────────────────── */
function BlueNode({ x, y, id }: { x: number; y: number; id: number }) {
  return (
    <g>
      {/* outer pulse */}
      <circle cx={x} cy={y} r={12} fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth={1}>
        <animate attributeName="r" values="9;15;9" dur={`${2.6 + id * 0.28}s`} repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.22;0.04;0.22" dur={`${2.6 + id * 0.28}s`} repeatCount="indefinite" />
      </circle>
      {/* inner ring */}
      <circle cx={x} cy={y} r={7} fill="none" stroke="rgba(125,235,252,0.30)" strokeWidth={1}>
        <animate attributeName="r" values="6;9;6" dur={`${2.1 + id * 0.22}s`} repeatCount="indefinite" />
      </circle>
      {/* white halo */}
      <circle cx={x} cy={y} r={5.5} fill="white" />
      {/* fill */}
      <circle cx={x} cy={y} r={4} fill="url(#mBlueGrad)" filter="url(#mBlueGlowSoft)" />
      {/* specular */}
      <circle cx={x - 1.2} cy={y - 1.2} r={1.1} fill="rgba(255,255,255,0.75)" />
    </g>
  );
}

/* ── Grey secondary node ───────────────────────────────────────────────── */
function GreyNode({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={5.5} fill="url(#mGreyGrad)" filter="url(#mGreyShadow)" />
      <circle cx={x - 1.5} cy={y - 1.5} r={1.6} fill="rgba(255,255,255,0.5)" />
    </g>
  );
}

/* ── Main component ─────────────────────────────────────────────────────── */
export default function MarketMapViz() {
  const [hov, setHov] = useState(false);

  const particleEdges = EDGES.filter((_, i) => i % 4 === 0 || i % 6 === 1);
  const durs = particleEdges.map((_, i) => 3.2 + (i * 0.41) % 2.8);

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <svg
        viewBox="0 0 480 380"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden
      >
        <defs>
          <radialGradient id="mBlueGrad" cx="35%" cy="30%">
            <stop offset="0%"  stopColor="#38BDF8" />
            <stop offset="55%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0C85C9" />
          </radialGradient>
          <radialGradient id="mGreyGrad" cx="32%" cy="28%">
            <stop offset="0%"   stopColor="#EEF4FA" />
            <stop offset="40%"  stopColor="#C8D8EA" />
            <stop offset="80%"  stopColor="#94AEBF" />
            <stop offset="100%" stopColor="#6A84A0" />
          </radialGradient>
          <radialGradient id="mTerrFill" cx="50%" cy="45%">
            <stop offset="0%"   stopColor="rgba(240,249,255,0.0)" />
            <stop offset="100%" stopColor="rgba(186,230,253,0.06)" />
          </radialGradient>
          <filter id="mBlueGlowSoft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="mGreyShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0.5" dy="1" stdDeviation="1" floodColor="rgba(60,100,150,0.18)" />
          </filter>
        </defs>

        {/* ── territory fill ── */}
        <path
          d={TERRITORY_D}
          fill="url(#mTerrFill)"
          stroke={hov ? "rgba(56,189,248,0.28)" : "rgba(110,190,240,0.18)"}
          strokeWidth="1.2"
          style={{ transition: "stroke 0.4s" }}
        />

        {/* ── connection lines ── */}
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = NODES[a], [x2, y2] = NODES[b];
          return (
            <line key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={hov ? "rgba(56,189,248,0.22)" : "rgba(110,175,225,0.14)"}
              strokeWidth="0.6"
              strokeDasharray="3 6"
              style={{ transition: "stroke 0.4s" }}
            />
          );
        })}

        {/* ── particles ── */}
        {particleEdges.map(([a, b], i) => {
          const [x1, y1] = NODES[a], [x2, y2] = NODES[b];
          return <Particle key={i} x1={x1} y1={y1} x2={x2} y2={y2} dur={durs[i]} />;
        })}

        {/* ── nodes ── */}
        {NODES.map(([x, y, t], i) =>
          t === "b"
            ? <BlueNode key={i} x={x} y={y} id={i} />
            : <GreyNode key={i} x={x} y={y} />
        )}
      </svg>
    </div>
  );
}
