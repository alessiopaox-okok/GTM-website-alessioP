type Branch = "gtm" | "dtc" | "saas";

const branchConfig: Record<
  Branch,
  { branchClass: string; path: string; cx: number; cy: number; labelY: number; label: string; aria: string }
> = {
  gtm: {
    branchClass: "branch b1",
    path: "M 90 140 C 130 140, 140 40, 190 40 H 340",
    cx: 340,
    cy: 40,
    labelY: 44,
    label: "GTM",
    aria: "Routing diagram, GTM branch highlighted",
  },
  dtc: {
    branchClass: "branch b2",
    path: "M 90 140 H 340",
    cx: 340,
    cy: 140,
    labelY: 144,
    label: "DTC",
    aria: "Routing diagram, DTC branch highlighted",
  },
  saas: {
    branchClass: "branch b3",
    path: "M 90 140 C 130 140, 140 240, 190 240 H 340",
    cx: 340,
    cy: 240,
    labelY: 244,
    label: "SAAS",
    aria: "Routing diagram, SaaS branch highlighted",
  },
};

export default function Schematic({ variant }: { variant: "all" | Branch }) {
  if (variant === "all") {
    return (
      <svg
        className="schematic"
        viewBox="0 0 420 280"
        role="img"
        aria-label="A single line branching into three paths, labeled GTM, DTC, and SaaS"
      >
        <circle className="node origin" cx="24" cy="140" r="5" />
        <path className="trunk" d="M 24 140 H 90" />
        <path className="branch b1" d="M 90 140 C 130 140, 140 40, 190 40 H 340" />
        <path className="branch b2" d="M 90 140 H 340" />
        <path className="branch b3" d="M 90 140 C 130 140, 140 240, 190 240 H 340" />
        <circle className="node" cx="340" cy="40" r="4" />
        <circle className="node" cx="340" cy="140" r="4" />
        <circle className="node" cx="340" cy="240" r="4" />
        <text className="label" x="352" y="44">GTM</text>
        <text className="label" x="352" y="144">DTC</text>
        <text className="label" x="352" y="244">SAAS</text>
      </svg>
    );
  }

  const c = branchConfig[variant];

  return (
    <svg className="schematic" viewBox="0 0 420 280" role="img" aria-label={c.aria}>
      <circle className="node origin" cx="24" cy="140" r="5" />
      <path className="trunk" d="M 24 140 H 90" />
      <path className={c.branchClass} d={c.path} style={{ strokeWidth: 2.4 }} />
      <circle className="node" cx={c.cx} cy={c.cy} r="5" />
      <text className="label" x="352" y={c.labelY} style={{ fill: "#0F172A", fontWeight: 700 }}>
        {c.label}
      </text>
    </svg>
  );
}
