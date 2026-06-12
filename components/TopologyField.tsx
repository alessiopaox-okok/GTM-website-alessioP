"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────
   Ambient topology network — extremely minimal, premium, abstract.
   Suggests "distribution network / signal field" without being literal.
   ───────────────────────────────────────────────────────────────── */

const BLUE_NODE  = "rgba(56,189,248,";   // active node colour
const GREY_NODE  = "rgba(148,163,184,";  // passive node colour
const LINE_COL   = "rgba(186,230,253,";  // connection line colour
const GLOW_COL   = "rgba(56,189,248,";   // pulse ring colour

interface Node {
  x: number; y: number;        // current
  ox: number; oy: number;      // origin
  vx: number; vy: number;
  r: number;
  kind: "active" | "passive";
  phase: number;
  signalPhase: number;         // for travelling signal
}

function seededRand(seed: number) {
  let s = seed >>> 0;
  return () => { s ^= s<<13; s ^= s>>>17; s ^= s<<5; return (s>>>0)/4294967295; };
}

function buildNodes(W: number, H: number): Node[] {
  const rng = seededRand(2024);
  const nodes: Node[] = [];
  // Grid-jitter placement — ensures good distribution, organic feel
  const cols = 10, rows = 7;
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cellW = W / cols, cellH = H / rows;
      const jx = (rng() - 0.5) * cellW * 0.55;
      const jy = (rng() - 0.5) * cellH * 0.55;
      const x  = (col + 0.5) * cellW + jx;
      const y  = (row + 0.5) * cellH + jy;
      // More active nodes on the right half
      const rightBias = x / W;
      const isActive  = rng() < 0.22 + rightBias * 0.28;
      nodes.push({
        x, y, ox: x, oy: y,
        vx: (rng()-0.5)*0.008,
        vy: (rng()-0.5)*0.008,
        r: isActive ? 3 : 2,
        kind: isActive ? "active" : "passive",
        phase: rng() * Math.PI * 2,
        signalPhase: rng() * Math.PI * 2,
      });
    }
  }
  return nodes;
}

// Which nodes to connect
function buildEdges(nodes: Node[], maxDist: number): [number,number][] {
  const edges: [number,number][] = [];
  for (let i = 0; i < nodes.length; i++)
    for (let j = i+1; j < nodes.length; j++) {
      const dx = nodes[i].ox - nodes[j].ox;
      const dy = nodes[i].oy - nodes[j].oy;
      if (Math.sqrt(dx*dx+dy*dy) < maxDist) edges.push([i,j]);
    }
  return edges;
}

export default function TopologyField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf       = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let W = 0, H = 0;
    let nodes: Node[] = [];
    let edges: [number,number][] = [];
    let tick = 0;

    function resize() {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      nodes = buildNodes(W, H);
      edges = buildEdges(nodes, Math.min(W, H) * 0.22);
    }

    function frame() {
      tick++;
      ctx.clearRect(0, 0, W, H);

      // ── drift nodes very slowly back to origin ──
      for (const n of nodes) {
        n.vx += (n.ox - n.x) * 0.0008;
        n.vy += (n.oy - n.y) * 0.0008;
        n.vx *= 0.98; n.vy *= 0.98;
        n.x  += n.vx;  n.y  += n.vy;
      }

      // ── draw connection lines ──
      for (const [ai, bi] of edges) {
        const a = nodes[ai], b = nodes[bi];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        // fade with distance
        const alpha = (1 - dist / (Math.min(W,H)*0.22)) * 0.22;
        if (alpha <= 0) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = LINE_COL + alpha.toFixed(3) + ")";
        ctx.lineWidth   = 0.8;
        ctx.stroke();
      }

      // ── travelling signal on ~15% of edges ──
      for (let i = 0; i < edges.length; i++) {
        if (i % 7 !== 0) continue;
        const [ai, bi] = edges[i];
        const a = nodes[ai], b = nodes[bi];
        const t = ((tick * 0.004 + nodes[ai].signalPhase) % 1);
        const sx = a.x + (b.x - a.x) * t;
        const sy = a.y + (b.y - a.y) * t;
        const pulse = Math.sin(t * Math.PI);          // fade in/out at endpoints
        ctx.beginPath();
        ctx.arc(sx, sy, 2.2, 0, Math.PI*2);
        ctx.fillStyle = BLUE_NODE + (0.75 * pulse).toFixed(3) + ")";
        ctx.shadowColor = "rgba(56,189,248,0.6)";
        ctx.shadowBlur  = 4;
        ctx.fill();
        ctx.shadowBlur  = 0;
      }

      // ── draw nodes ──
      for (const n of nodes) {
        const pulse = (Math.sin(tick * 0.018 + n.phase) + 1) / 2;

        if (n.kind === "active") {
          // outer glow ring
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 5 + pulse * 4, 0, Math.PI*2);
          ctx.strokeStyle = GLOW_COL + (0.14 + pulse * 0.10) + ")";
          ctx.lineWidth   = 1;
          ctx.stroke();

          // middle ring
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 2, 0, Math.PI*2);
          ctx.strokeStyle = BLUE_NODE + "0.32)";
          ctx.lineWidth   = 1;
          ctx.stroke();

          // inner circle — outlined
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
          ctx.strokeStyle = BLUE_NODE + (0.72 + pulse * 0.25) + ")";
          ctx.lineWidth   = 1.5;
          ctx.stroke();

          // filled centre dot with soft glow
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.6, 0, Math.PI*2);
          ctx.fillStyle   = BLUE_NODE + "0.90)";
          ctx.shadowColor = "rgba(56,189,248,0.7)";
          ctx.shadowBlur  = 6;
          ctx.fill();
          ctx.shadowBlur  = 0;

        } else {
          // passive — outlined circle, now clearly visible
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
          ctx.strokeStyle = GREY_NODE + (0.28 + pulse * 0.12) + ")";
          ctx.lineWidth   = 1;
          ctx.stroke();
        }
      }

      raf.current = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    raf.current = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf.current); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
