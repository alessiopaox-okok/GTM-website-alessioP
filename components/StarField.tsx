"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  ox: number;   // origin x
  oy: number;   // origin y
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  baseAlpha: number;
}

const COUNT = 260;
const MOUSE_RADIUS = 110;
const REPEL = 0.55;
const RETURN = 0.06; // spring back to origin

function rand(a: number, b: number) { return Math.random() * (b - a) + a; }

function makeDot(w: number, h: number): Dot {
  const x = rand(0, w), y = rand(0, h);
  const r = rand(0.8, 2.4);
  const baseAlpha = rand(0.10, 0.32);
  return { x, y, ox: x, oy: y, vx: 0, vy: 0, r, alpha: baseAlpha, baseAlpha };
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const dots = useRef<Dot[]>([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0;

    function resize() {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      dots.current = Array.from({ length: COUNT }, () => makeDot(w, h));
    }

    function onMove(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function onLeave() { mouse.current = { x: -9999, y: -9999 }; }

    function tick() {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots.current) {
        const dx = d.x - mouse.current.x;
        const dy = d.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0.5) {
          // Repel away from cursor
          const force = (1 - dist / MOUSE_RADIUS) * REPEL;
          d.vx += (dx / dist) * force * 4;
          d.vy += (dy / dist) * force * 4;
          d.alpha = Math.min(d.baseAlpha * 3, 0.6);
        } else {
          // Spring back toward origin
          d.vx += (d.ox - d.x) * RETURN;
          d.vy += (d.oy - d.y) * RETURN;
          d.alpha += (d.baseAlpha - d.alpha) * 0.08;
        }

        // Dampen velocity
        d.vx *= 0.78;
        d.vy *= 0.78;

        d.x += d.vx;
        d.y += d.vy;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 10, 15, ${d.alpha})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "auto" }}
    />
  );
}
