import SectionLabel from "./SectionLabel";

const points = [
  {
    title: "I understand sales, not just marketing.",
    body: "Most GTM help stops at awareness or top-of-funnel. I work across the full commercial motion — from first touch to closed deal.",
  },
  {
    title: "I build systems, not one-off campaigns.",
    body: "A campaign is a moment. A system is what makes the next campaign easier and smarter. That's what I focus on.",
  },
  {
    title: "I use AI practically, not as a gimmick.",
    body: "AI speeds up research, personalization, and execution. I use it where it creates real leverage, not to sound current.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-24 px-6 bg-[#F2F2EE] border-t border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Why work with me</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A0A0A] mb-14 max-w-xl">
          Strategy is useful. Execution is what compounds.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="bg-[#F9F9F7] rounded-xl p-6 border border-[#E5E5E0]">
              <div className="text-xs font-mono text-[#00E87A] font-semibold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-[#0A0A0A] mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
