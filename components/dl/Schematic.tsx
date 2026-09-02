const STOPS = [
  { x: 150, y: 70, label: "TARGET", labelDy: -16 },
  { x: 250, y: 150, label: "OUTREACH", labelDy: 24 },
  { x: 350, y: 70, label: "CONVERSATIONS", labelDy: -16 },
  { x: 450, y: 150, label: "PIPELINE", labelDy: 24 },
];

export default function Schematic() {
  return (
    <svg
      className="schematic"
      viewBox="0 0 480 200"
      role="img"
      aria-label="A line moving from targeting through outreach and conversations into pipeline"
    >
      <circle className="node origin" cx="16" cy="150" r="5" />
      <path className="trunk" d="M 16 150 H 50" />
      <path
        className="branch b1"
        d="M 50 150 C 90 150, 100 70, 150 70 C 200 70, 210 150, 250 150 C 300 150, 310 70, 350 70 C 400 70, 410 150, 450 150"
      />
      {STOPS.map((s, i) => (
        <g key={s.label}>
          <circle
            className="node"
            cx={s.x}
            cy={s.y}
            r="4"
            style={{ animationDelay: `${1.0 + i * 0.18}s` }}
          />
          <text
            className="label"
            x={s.x}
            y={s.y + s.labelDy}
            textAnchor="middle"
            style={{ animationDelay: `${1.1 + i * 0.18}s` }}
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
