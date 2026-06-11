import SectionLabel from "./SectionLabel";

const proofPoints = [
  "Built segmented lead lists across running retailers and podiatry clinics",
  "Created and tested outreach campaigns with structured messaging",
  "Generated qualified retailer and clinic opportunities",
  "Improved campaign learning loops and reply handling",
  "Helped move from random outreach to structured GTM execution",
];

export default function CaseStudy() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Early case study</SectionLabel>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Label block */}
          <div className="md:col-span-2">
            <div className="inline-block bg-[#0A0A0A] text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-md mb-5">
              The Feats
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0A0A0A] mb-4">
              From random outreach to structured GTM.
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Sport & performance brand. Early commercial stage. Needed to turn
              scattered outreach into repeatable pipeline.
            </p>
          </div>

          {/* Proof points */}
          <div className="md:col-span-3">
            <p className="text-[#6B6B6B] leading-relaxed mb-8 text-sm">
              For The Feats, I have been helping structure outbound campaigns
              across running retailers and podiatry clinics — building lead
              lists, testing messaging, managing replies, improving follow-up
              logic, and turning early commercial activity into a more
              repeatable GTM process.
            </p>

            <ul className="space-y-3">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#00E87A] shrink-0" />
                  <span className="text-sm text-[#0A0A0A]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
