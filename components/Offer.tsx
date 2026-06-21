import SectionLabel from "./SectionLabel";
import Button from "./Button";

const deliverables = [
  "GTM audit",
  "ICP and segment map",
  "Campaign structure",
  "Outreach messaging",
  "CRM workflow",
  "Follow-up logic",
  "Weekly operating rhythm",
  "Clear next steps",
];

export default function Offer() {
  return (
    <section id="offer" className="py-24 px-6 border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <SectionLabel>Core offer</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A0A0A] mb-6">
              The GTM Systems Sprint
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              A focused sprint to diagnose your current commercial motion, clean
              up the chaos, and build the first version of a repeatable growth
              system.
            </p>
            <Button href="https://cal.eu/alessio-paoletti-klzr4d/wholesale-chat" variant="primary" size="lg">
              Book a call
            </Button>
          </div>

          {/* Right — deliverables */}
          <div className="bg-[#F2F2EE] rounded-2xl p-8 border border-[#E5E5E0]">
            <p className="text-xs font-medium text-[#6B6B6B] tracking-widest uppercase mb-5">
              What you get
            </p>
            <ul className="space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00E87A]/15 flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#00E87A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#0A0A0A]">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
