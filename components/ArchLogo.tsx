export default function ArchLogo({ size = 48 }: { size?: number }) {
  const h  = size;
  const w  = size * (110 / 72);
  const sw = size * (10 / 72);
  const id = `ag-${size}`;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 110 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ada Growth"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#4A7CF6" />
          <stop offset="100%" stopColor="#7EB5FA" />
        </linearGradient>
      </defs>

      {/* Outer arch */}
      <path d="M 7 72 A 48 48 0 0 1 103 72"
        stroke={`url(#${id})`} strokeWidth={sw} strokeLinecap="round" fill="none" />

      {/* Middle arch */}
      <path d="M 22 72 A 33 33 0 0 1 88 72"
        stroke="#93C5FD" strokeWidth={sw} strokeLinecap="round" fill="none" />

      {/* Inner arch */}
      <path d="M 37 72 A 18 18 0 0 1 73 72"
        stroke="#BFDBFE" strokeWidth={sw} strokeLinecap="round" fill="none" />

      {/* Centre dome */}
      <path d="M 47 72 A 8 8 0 0 1 63 72 Z" fill="#1E3A8A" />
    </svg>
  );
}
