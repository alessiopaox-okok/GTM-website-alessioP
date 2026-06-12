"use client";
import { useEffect, useRef } from "react";

const BLUE_NODE = "rgba(56,189,248,";
const GREY_NODE = "rgba(148,163,184,";
const LINE_COL  = "rgba(186,230,253,";
const GLOW_COL  = "rgba(56,189,248,";

const MOUSE_RADIUS = 130;   // px — influence zone
const REPEL        = 0.14;  // repulsion strength

interface Node {
  x: number; y: number;
  ox: number; oy: number;
  vx: number; vy: number;
  r: number;
  kind: "active" | "passive";
  phase: number;
  signalPhase: number;
}

function seededRand(seed: number) {
  let s = seed >>> 0;
  return () => { s ^= s<<13; s ^= s>>>17; s ^= s<<5; return (s>>>0)/4294967295; };
}

function buildNodes(W: number, H: number): Node[] {
  const rng   = seededRand(2024);
  const nodes: Node[] = [];
  const cols = 10, rows = 7;
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cellW = W / cols, cellH = H / rows;
      const jx = (rng() - 0.5) * cellW * 0.55;
      const jy = (rng() - 0.5) * cellH * 0.55;
      const x  = (col + 0.5) * cellW + jx;
      const y  = (row + 0.5) * cellH + jy;
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
  const mouse     = useRef({ x: -9999, y: -9999 });
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

    // Track mouse relative to canvas
    function onMouseMove(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function onMouseLeave() {
      mouse.current = { x: -9999, y: -9999 };
    }

    function frame() {
      tick++;
      ctx.clearRect(0, 0, W, H);

      const mx = mouse.current.x, my = mouse.current.y;

      for (const n of nodes) {
        const dx   = n.x - mx;
        const dy   = n.y - my;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < MOUSE_RADIUS && dist > 0.5) {
          // repel away from cursor — stronger when closer
          const force = (1 - dist / MOUSE_RADIUS) * REPEL;
          n.vx += (dx / dist) * force * 2;
          n.vy += (dy / dist) * force * 2;
        } else {
          // spring back to origin
          n.vx += (n.ox - n.x) * 0.0008;
          n.vy += (n.oy - n.y) * 0.0008;
        }

        // dampen
        n.vx *= 0.82; n.vy *= 0.82;
        n.x  += n.vx;  n.y  += n.vy;
      }

      // ── connection lines ──
      for (const [ai, bi] of edges) {
        const a = nodes[ai], b = nodes[bi];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const alpha = (1 - dist / (Math.min(W,H)*0.22)) * 0.22;
        if (alpha <= 0) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = LINE_COL + alpha.toFixed(3) + ")";
        ctx.lineWidth   = 0.8;
        ctx.stroke();
      }

      // ── travelling signals ──
      for (let i = 0; i < edges.length; i++) {
        if (i % 7 !== 0) continue;
        const [ai, bi] = edges[i];
        const a = nodes[ai], b = nodes[bi];
        const t = ((tick * 0.004 + nodes[ai].signalPhase) % 1);
        const sx = a.x + (b.x - a.x) * t;
        const sy = a.y + (b.y - a.y) * t;
        const pulse = Math.sin(t * Math.PI);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.2, 0, Math.PI*2);
        ctx.fillStyle   = BLUE_NODE + (0.75 * pulse).toFixed(3) + ")";
        ctx.shadowColor = "rgba(56,189,248,0.6)";
        ctx.shadowBlur  = 4;
        ctx.fill();
        ctx.shadowBlur  = 0;
      }

      // ── nodes ──
      for (const n of nodes) {
        const pulse    = (Math.sin(tick * 0.018 + n.phase) + 1) / 2;
        const nearMouse = Math.sqrt((n.x-mx)**2 + (n.y-my)**2) < MOUSE_RADIUS;

        if (n.kind === "active") {
          // outer glow ring — brighter near cursor
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 5 + pulse * 4, 0, Math.PI*2);
          ctx.strokeStyle = GLOW_COL + (nearMouse ? 0.35 : 0.14 + pulse * 0.10) + ")";
          ctx.lineWidth   = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 2, 0, Math.PI*2);
          ctx.strokeStyle = BLUE_NODE + (nearMouse ? "0.55)" : "0.32)");
          ctx.lineWidth   = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
          ctx.strokeStyle = BLUE_NODE + (nearMouse ? "0.95)" : (0.72 + pulse * 0.25) + ")");
          ctx.lineWidth   = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.6, 0, Math.PI*2);
          ctx.fillStyle   = BLUE_NODE + "0.90)";
          ctx.shadowColor = nearMouse ? "rgba(56,189,248,1)" : "rgba(56,189,248,0.7)";
          ctx.shadowBlur  = nearMouse ? 10 : 6;
          ctx.fill();
          ctx.shadowBlur  = 0;

        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
          ctx.strokeStyle = nearMouse
            ? BLUE_NODE + "0.55)"
            : GREY_NODE + (0.28 + pulse * 0.12) + ")";
          ctx.lineWidth   = 1;
          ctx.stroke();
        }
      }

      raf.current = requestAnimationFrame(frame);
    }

    // Listen on window so mouse works even when canvas has pointerEvents:none
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    raf.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
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
