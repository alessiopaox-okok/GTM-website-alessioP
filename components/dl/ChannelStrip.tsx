import Link from "next/link";

export default function ChannelStrip({ label }: { label: string }) {
  return (
    <div className="channel-strip">
      <div className="container">
        <Link href="/">Distribution Lab</Link>
        <span className="sep">/</span>
        <span className="current">{label}</span>
      </div>
    </div>
  );
}
