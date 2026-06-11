export default function ArchLogo({ size = 48 }: { size?: number }) {
  const w = size * 1.1;
  const h = size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 44 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Outer arch */}
      <path
        d="M3 38 C3 18 41 18 41 38"
        stroke="#82EEFD"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner arch — tighter, creates depth */}
      <path
        d="M10 38 C10 24 34 24 34 38"
        stroke="#82EEFD"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.45"
        fill="none"
      />
      {/* Centre dot — anchor point */}
      <circle cx="22" cy="38" r="2.2" fill="#82EEFD" />
    </svg>
  );
}
