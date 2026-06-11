import SectionLabel from "./SectionLabel";

const problems = [
  {
    icon: "01",
    title: "Leads are scattered.",
    body: "No consistent list, no clear ICP, no segmentation. Outreach is ad-hoc and hard to replicate.",
  },
  {
    icon: "02",
    title: "Follow-ups fall through.",
    body: "Interested replies sit unanswered. Warm leads go cold. There's no system holding the thread.",
  },
  {
    icon: "03",
    title: "No visibility on what's working.",
    body: "The founder is inside the activity but can't see the pattern. Pipeline is invisible, learning is slow.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 border-t border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A0A0A] mb-4 max-w-xl">
          Most growth problems are not idea problems.
        </h2>
        <p className="text-[#6B6B6B] mb-14 max-w-lg">
          They are system problems.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.icon}
              className="bg-[#F2F2EE] rounded-xl p-6 border border-[#E5E5E0] hover:border-[#0A0A0A]/20 transition-colors"
            >
              <span className="text-xs font-mono text-[#00E87A] font-semibold mb-4 block">
                {p.icon}
              </span>
              <h3 className="font-semibold text-[#0A0A0A] mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
