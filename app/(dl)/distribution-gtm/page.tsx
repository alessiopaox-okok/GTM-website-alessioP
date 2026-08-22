import type { Metadata } from "next";
import ChannelStrip from "@/components/dl/ChannelStrip";
import Schematic from "@/components/dl/Schematic";
import Steps from "@/components/dl/Steps";
import TwoCol from "@/components/dl/TwoCol";
import ProofSection from "@/components/dl/ProofSection";
import Testimonial from "@/components/dl/Testimonial";
import CTASection from "@/components/dl/CTASection";

export const metadata: Metadata = {
  title: "GTM Consulting — Distribution Lab",
  description: "Go-to-market strategy and the systems to actually execute it.",
};

export default function DistributionGTM() {
  return (
    <>
      <ChannelStrip label="GTM Consulting" />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Path 01 — General</p>
            <h1>A go-to-market strategy is only as good as the system that runs it.</h1>
            <p className="subhead">
              I work with founders and scale-ups who need to figure out how they&apos;ll actually
              reach buyers — and then build the outbound, channel, or partnership system to do it.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@distribution-lab.com" className="btn btn-primary">Book a call</a>
              <a href="#approach" className="btn btn-ghost">See the approach</a>
            </div>
          </div>
          <div>
            <Schematic variant="gtm" />
          </div>
        </div>
      </header>

      <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The gap</p>
            <h2>Most GTM problems aren&apos;t a strategy problem. They&apos;re a &quot;nobody&apos;s actually building it&quot; problem.</h2>
          </div>
          <p className="gap-text">
            Founders can usually describe their ideal customer and rough plan. What&apos;s missing
            is <strong>someone who will actually build the outbound, targeting, and follow-up
            infrastructure</strong> — and keep refining it — rather than handing over a deck and
            moving on.
          </p>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What I do</p>
            <h2>I diagnose the channel, then build the system behind it.</h2>
            <p>The specific channel — outbound, wholesale, partnerships — depends on the business. The process for getting there is the same.</p>
          </div>
          <Steps
            steps={[
              { n: "01", title: "Diagnose the motion", body: "Understand who you sell to, how they currently buy, and where the biggest untapped channel is." },
              { n: "02", title: "Design the system", body: "Define the ICP, the outreach or partnership motion, and the tools to run it — Clay, Attio, Instantly, or whatever fits." },
              { n: "03", title: "Launch and operate", body: "Run the system directly, rather than handing you a plan and leaving execution to you." },
              { n: "04", title: "Report and refine", body: "Track what's converting and adjust — the system gets sharper the longer it runs, not staler." },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <TwoCol
          who={[
            "Founders and scale-ups without a dedicated GTM or growth hire yet",
            "Teams that have tried outbound or partnerships before without a real system behind it",
            "Anyone who wants a GTM partner who builds, not just advises",
          ]}
          what={[
            "A clear read on which channel is worth investing in first",
            "A working system — not just a strategy document",
            "Direct involvement in running and refining it, not a one-time handoff",
          ]}
        />
      </section>

      <ProofSection
        items={[
          { num: "23–25%", desc: "Reply rate on past outbound systems" },
          { num: "~37", desc: "Warm opportunities from a single build" },
          { num: "Clay · Attio · Instantly", desc: "The stack behind every system" },
        ]}
      />

      <Testimonial
        quote={'"…"'}
        cite="— Testimonial pending. Ask a past client for a quote — no name or company required if they prefer discretion."
      />

      <CTASection
        eyebrow="Not sure where to start"
        heading="Have a growth idea but no system behind it yet?"
        body="Let's talk through what you're trying to do, and whether I'm the right person to build it."
        label="Book a call"
      />
    </>
  );
}
