"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Dynamic import — avoids SSR crash (Three.js needs window)
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

/* ── wholesale / retail locations worldwide ─────────────────────── */
const CITIES = [
  { lat: 51.50, lng: -0.12, name: "London"       },
  { lat: 53.48, lng: -2.24, name: "Manchester"   },
  { lat: 55.86, lng: -4.25, name: "Glasgow"      },
  { lat: 52.48, lng: -1.90, name: "Birmingham"   },
  { lat: 53.80, lng: -1.55, name: "Leeds"        },
  { lat: 51.45, lng: -2.60, name: "Bristol"      },
  { lat: 52.63, lng:  1.30, name: "Norwich"      },
  { lat: 50.82, lng: -0.14, name: "Brighton"     },
  { lat: 48.85, lng:  2.35, name: "Paris"        },
  { lat: 52.37, lng:  4.90, name: "Amsterdam"    },
  { lat: 53.55, lng:  9.99, name: "Hamburg"      },
  { lat: 48.14, lng: 11.58, name: "Munich"       },
  { lat: 41.38, lng:  2.17, name: "Barcelona"    },
  { lat: 45.46, lng:  9.19, name: "Milan"        },
  { lat: 40.71, lng:-74.01, name: "New York"     },
  { lat: 34.05, lng:-118.2, name: "Los Angeles"  },
  { lat: 43.65, lng:-79.38, name: "Toronto"      },
  { lat: 35.68, lng: 139.7, name: "Tokyo"        },
  { lat: 22.33, lng: 114.2, name: "Hong Kong"    },
  { lat:-33.87, lng: 151.2, name: "Sydney"       },
  { lat: 37.56, lng: 126.9, name: "Seoul"        },
  { lat: 19.43, lng:-99.13, name: "Mexico City"  },
  { lat:-23.55, lng:-46.63, name: "São Paulo"    },
  { lat: 25.20, lng: 55.27, name: "Dubai"        },
];

/* ── connection arcs ────────────────────────────────────────────── */
const ARCS = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,8],[0,9],[0,14],
  [1,2],[1,9],[1,10],[1,11],
  [8,9],[8,10],[8,13],[8,14],
  [9,11],[9,12],[9,13],
  [10,11],[10,12],
  [14,15],[14,16],[14,19],
  [15,16],[15,22],
  [17,18],[17,20],[17,19],
  [18,23],[0,23],[8,23],
  [0,21],[8,21],
].map(([s,e]) => ({
  startLat: CITIES[s].lat, startLng: CITIES[s].lng,
  endLat:   CITIES[e].lat, endLng:   CITIES[e].lng,
  color: ["rgba(130,238,253,0.9)","rgba(56,189,248,0.7)"],
}));

export default function GlobeViz() {
  const globeRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 500, h: 500 });

  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const ctrl = globeRef.current.controls();
    ctrl.autoRotate      = true;
    ctrl.autoRotateSpeed = 0.6;
    ctrl.enableZoom      = false;
  }, [ready]);

  return (
    <div
      ref={containerRef}
      style={{ width:"100%", height:"100%", position:"relative", overflow:"hidden", borderRadius:16 }}
    >
      <Globe
        ref={globeRef}
        onGlobeReady={() => setReady(true)}
        width={dims.w}
        height={dims.h}
        backgroundColor="rgba(0,0,0,0)"

        // Globe texture — NASA night-lights earth
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

        // Atmosphere glow
        atmosphereColor="#38BDF8"
        atmosphereAltitude={0.22}
        showAtmosphere={true}

        // Arcs
        arcsData={ARCS}
        arcColor="color"
        arcAltitude={0.3}
        arcStroke={0.5}
        arcDashLength={0.4}
        arcDashGap={0.15}
        arcDashAnimateTime={2200}

        // Location dots
        pointsData={CITIES}
        pointColor={() => "#82EEFD"}
        pointAltitude={0.005}
        pointRadius={0.4}
        pointsMerge={false}
      />
    </div>
  );
}
