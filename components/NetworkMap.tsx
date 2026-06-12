"use client";
import { useEffect, useRef, useState } from "react";

/* ─── territory boundary (viewBox 560 × 440) ───────────────────────────────
   Smooth quadratic-bezier polygon → looks like a real geographic region     */
const T: [number,number][] = [
  [210,22],[262,8],[318,6],[374,10],[426,4],[474,18],[510,42],[538,88],
  [546,140],[540,192],[548,248],[532,298],[516,346],[492,388],[450,416],
  [394,430],[330,436],[264,432],[198,424],[140,408],[88,382],[44,342],
  [18,292],[22,238],[12,182],[28,130],[56,88],[96,54],[148,30],[186,18],
];

/* ─── sub-region divider lines ─────────────────────────────────────────── */
const DIVIDERS: string[] = [
  "M 80,160 C 160,148 240,155 320,145 C 400,135 475,150 545,140",
  "M 25,265 C 110,255 200,262 290,255 C 380,248 470,260 548,248",
  "M 40,355 C 120,345 210,355 300,348 C 390,342 460,350 515,346",
  "M 230,15 C 228,100 235,200 240,300 C 245,380 248,415 264,432",
  "M 370,10 C 368,95 372,195 376,295 C 380,375 382,415 394,430",
  "M 500,45 C 502,120 508,215 512,310 C 514,360 514,375 516,346",
];

/* ─── manually placed nodes (x, y, type) ───────────────────────────────── */
type NT = "b"|"g"; // blue | grey
const NODES: [number,number,NT][] = [
  // top region
  [180,55,"b"],[240,40,"g"],[300,35,"b"],[360,38,"g"],[420,42,"b"],[474,55,"g"],
  // upper-mid
  [120,110,"g"],[185,100,"b"],[255,95,"g"],[320,92,"b"],[390,88,"g"],[450,95,"b"],[510,108,"g"],
  // mid
  [60,165,"b"],[135,158,"g"],[210,152,"b"],[285,148,"g"],[355,152,"b"],[425,148,"g"],[498,160,"b"],
  // mid-low
  [85,225,"g"],[160,218,"b"],[235,212,"g"],[310,208,"b"],[382,214,"g"],[455,220,"b"],[528,230,"g"],
  // lower-mid
  [50,285,"b"],[125,278,"g"],[200,272,"b"],[275,268,"g"],[348,272,"b"],[420,278,"g"],[490,285,"b"],
  // bottom
  [90,345,"g"],[165,338,"b"],[245,332,"g"],[320,330,"b"],[395,336,"g"],[462,344,"b"],
  // very bottom
  [170,395,"b"],[255,400,"g"],[335,402,"b"],[410,396,"g"],
];

/* ─── build edges between close nodes ─────────────────────────────────── */
const THRESH = 105;
const EDGES: [number,number][] = [];
for (let i=0;i<NODES.length;i++)
  for (let j=i+1;j<NODES.length;j++) {
    const dx=NODES[i][0]-NODES[j][0], dy=NODES[i][1]-NODES[j][1];
    if (Math.sqrt(dx*dx+dy*dy)<THRESH) EDGES.push([i,j]);
  }

/* ─── territory smooth path ─────────────────────────────────────────────  */
function territoryD(pts:[number,number][]) {
  let d = "";
  for (let i=0;i<pts.length;i++){
    const [x0,y0]=pts[i], [x1,y1]=pts[(i+1)%pts.length];
    const mx=(x0+x1)/2, my=(y0+y1)/2;
    d += i===0 ? `M${mx},${my} ` : `Q${x0},${y0} ${mx},${my} `;
  }
  return d+"Z";
}
const TERRITORY_D = territoryD(T);

/* ─── BlueNode ─────────────────────────────────────────────────────────── */
function BlueNode({x,y,id,hov}:{x:number;y:number;id:number;hov:boolean}){
  return (
    <g>
      {/* outer pulse ring */}
      <circle cx={x} cy={y} r={14} fill="none"
        stroke="rgba(56,189,248,0.18)" strokeWidth={1}>
        <animate attributeName="r" values="10;17;10" dur={`${2.4+id*0.3}s`} repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" values="0.25;0.05;0.25" dur={`${2.4+id*0.3}s`} repeatCount="indefinite"/>
      </circle>
      {/* middle ring */}
      <circle cx={x} cy={y} r={8} fill="none"
        stroke="rgba(130,238,253,0.35)" strokeWidth={1}>
        <animate attributeName="r" values="7;10;7" dur={`${2.0+id*0.25}s`} repeatCount="indefinite"/>
      </circle>
      {/* white halo */}
      <circle cx={x} cy={y} r={6.5} fill="white"/>
      {/* blue fill */}
      <circle cx={x} cy={y} r={5} fill={`url(#blueGrad)`}
        filter={hov?"url(#blueGlow)":"url(#blueGlowSoft)"}/>
      {/* specular */}
      <circle cx={x-1.5} cy={y-1.5} r={1.4} fill="rgba(255,255,255,0.7)"/>
    </g>
  );
}

/* ─── GreyNode ─────────────────────────────────────────────────────────── */
function GreyNode({x,y,hov}:{x:number;y:number;hov:boolean}){
  return (
    <g>
      <circle cx={x} cy={y} r={7} fill={`url(#greyGrad)`}
        filter={hov?"url(#greyShadow)":"url(#greyShadowSoft)"}/>
      <circle cx={x-2} cy={y-2} r={2} fill="rgba(255,255,255,0.55)"/>
    </g>
  );
}

/* ─── particle animation on an edge ───────────────────────────────────── */
function Particle({x1,y1,x2,y2,dur}:{x1:number;y1:number;x2:number;y2:number;dur:number}){
  const id = `p-${x1}-${y1}-${x2}-${y2}`;
  return (
    <g>
      <defs>
        <path id={id} d={`M${x1},${y1} L${x2},${y2}`}/>
      </defs>
      <circle r={2.2} fill="#38BDF8" filter="url(#blueGlowSoft)" opacity={0.85}>
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" rotate="auto">
          <mpath href={`#${id}`}/>
        </animateMotion>
      </circle>
    </g>
  );
}

/* ─── main component ───────────────────────────────────────────────────── */
export default function NetworkMap(){
  const [hov, setHov] = useState(false);

  // only ~22% of edges get a particle
  const particleEdges = EDGES.filter((_,i)=> i%5===0 || i%7===0);

  // seeded durations so they vary naturally
  const durs = particleEdges.map((_,i)=> 2.8 + (i*0.37)%2.4);

  return (
    <div
      style={{width:"100%",height:"100%",position:"relative"}}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
    >
      <svg
        viewBox="0 0 560 440"
        preserveAspectRatio="xMidYMid meet"
        style={{width:"100%",height:"100%",display:"block"}}
      >
        <defs>
          {/* blue radial gradient */}
          <radialGradient id="blueGrad" cx="35%" cy="30%">
            <stop offset="0%"   stopColor="#38BDF8"/>
            <stop offset="50%"  stopColor="#38BDF8"/>
            <stop offset="100%" stopColor="#0C85C9"/>
          </radialGradient>

          {/* grey metallic gradient */}
          <radialGradient id="greyGrad" cx="32%" cy="28%">
            <stop offset="0%"   stopColor="#F0F6FA"/>
            <stop offset="38%"  stopColor="#CBD8E8"/>
            <stop offset="75%"  stopColor="#99AEC2"/>
            <stop offset="100%" stopColor="#6A84A0"/>
          </radialGradient>

          {/* territory fill */}
          <radialGradient id="terrFill" cx="50%" cy="45%">
            <stop offset="0%"   stopColor="#FFFFFF"/>
            <stop offset="100%" stopColor="#EAF4FF"/>
          </radialGradient>

          {/* glow filters */}
          <filter id="blueGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="blueGlowSoft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="greyShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(60,100,150,0.35)"/>
          </filter>
          <filter id="greyShadowSoft" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="1" dy="1.5" stdDeviation="1.2" floodColor="rgba(60,100,150,0.22)"/>
          </filter>
          <filter id="mapShadow" x="-5%" y="-5%" width="115%" height="120%">
            <feDropShadow dx="5" dy="8" stdDeviation="12" floodColor="rgba(100,155,210,0.28)"/>
          </filter>
          <filter id="mapShadowHov" x="-5%" y="-5%" width="115%" height="120%">
            <feDropShadow dx="5" dy="8" stdDeviation="16" floodColor="rgba(56,189,248,0.35)"/>
          </filter>
        </defs>

        {/* ── territory shape ── */}
        <path d={TERRITORY_D}
          fill="url(#terrFill)"
          stroke="rgba(130,218,253,0.70)"
          strokeWidth="1.8"
          filter={hov?"url(#mapShadowHov)":"url(#mapShadow)"}
        />

        {/* inner highlight edge */}
        <path d={TERRITORY_D}
          fill="none"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1"
          transform="translate(-1,-1)"
        />

        {/* ── internal divider lines ── */}
        {DIVIDERS.map((d,i)=>(
          <path key={i} d={d}
            fill="none"
            stroke="rgba(150,200,235,0.30)"
            strokeWidth="0.7"
            strokeDasharray="3 5"
          />
        ))}

        {/* ── connection lines ── */}
        {EDGES.map(([a,b],i)=>{
          const [x1,y1]=NODES[a], [x2,y2]=NODES[b];
          return (
            <line key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={hov?"rgba(56,189,248,0.38)":"rgba(110,175,225,0.28)"}
              strokeWidth="0.75"
              strokeDasharray="3 5"
            />
          );
        })}

        {/* ── particles ── */}
        {particleEdges.map(([a,b],i)=>{
          const [x1,y1]=NODES[a], [x2,y2]=NODES[b];
          return <Particle key={i} x1={x1} y1={y1} x2={x2} y2={y2} dur={durs[i]}/>;
        })}

        {/* ── nodes ── */}
        {NODES.map(([x,y,t],i)=>
          t==="b"
            ? <BlueNode key={i} x={x} y={y} id={i} hov={hov}/>
            : <GreyNode key={i} x={x} y={y} hov={hov}/>
        )}
      </svg>
    </div>
  );
}
