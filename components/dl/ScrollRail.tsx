"use client";

import { useEffect, useState } from "react";

// Thin progress rail on the right edge: one tick per page section, the
// current section's tick extends, and a hairline fills as you scroll.
export default function ScrollRail() {
  const [ticks, setTicks] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".dl header.hero, .dl section"),
    );
    let tops: number[] = [];
    let raf = 0;

    const measure = () => {
      const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      tops = sections.map((s) => s.getBoundingClientRect().top + window.scrollY);
      setTicks(tops.map((t) => Math.min(Math.max(t / total, 0), 1)));
      update();
    };

    const update = () => {
      raf = 0;
      const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(Math.max(window.scrollY / total, 0), 1));
      const probe = window.scrollY + window.innerHeight * 0.4;
      let idx = 0;
      tops.forEach((t, i) => {
        if (t <= probe) idx = i;
      });
      setActive(idx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="scroll-rail" aria-hidden="true">
      <span className="rail-fill" style={{ height: `${progress * 100}%` }} />
      {ticks.map((t, i) => (
        <span
          key={i}
          className={`rail-tick${i === active ? " is-active" : ""}`}
          style={{ top: `${t * 100}%` }}
        />
      ))}
    </div>
  );
}
