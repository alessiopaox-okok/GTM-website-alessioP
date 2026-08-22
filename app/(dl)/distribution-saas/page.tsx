import type { Metadata } from "next";
import ChannelStrip from "@/components/dl/ChannelStrip";
import Schematic from "@/components/dl/Schematic";
import Steps from "@/components/dl/Steps";
import TwoCol from "@/components/dl/TwoCol";
import ProofSection from "@/components/dl/ProofSection";
import Testimonial from "@/components/dl/Testimonial";
import CTASection from "@/components/dl/CTASection";

export const metadata: Metadata = {
  title: "SaaS Growth — Distribution Lab",
  description: "Growth systems for SaaS teams that need pipeline, not just advice.",
};

export default function DistributionSaaS() {
  return (
    <>
      <ChannelStrip label="SaaS Growth" />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Path 03 — Software</p>
            <h1>Growth systems for SaaS teams that need pipeline, not just advice.</h1>
            <p className="subhead">
              I help SaaS and scale-up teams build the outbound and channel systems that turn a
              growth strategy into a repeatable source of revenue.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@distribution-lab.com" className="btn btn-primary">Book a call</a>
              <a href="#approach" className="btn btn-ghost">See the approach</a>
            </div>
          </div>
          <div>
            <Schematic variant="saas" />
          </div>
        </div>
      </header>

      <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The gap</p>
            <h2>Most SaaS teams don&apos;t lack ideas. They lack execution.</h2>
          </div>
          <p className="gap-text">
            Outbound that&apos;s <strong>inconsistent</strong>, channel partnerships that{" "}
            <strong>never get built out properly</strong>, or a strategy that{" "}
            <strong>lives in a slide deck</strong> instead of a working pipeline. The gap usually
            isn&apos;t the plan — it&apos;s the system behind it.
          </p>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What I do</p>
            <h2>I design and run growth systems tailored to how SaaS companies actually sell.</h2>
            <p>Outbound infrastructure, channel/partnership strategy, and go-to-market execution combined into something that keeps generating pipeline — not a one-time campaign.</p>
          </div>
          <Steps
            steps={[
              { n: "01", title: "Understand the GTM motion", body: "Map how you currently acquire customers and where the biggest gap is — outbound, partnerships, or positioning." },
              { n: "02", title: "Build the system", body: "Outbound sequencing, enrichment, and targeting using Clay, Attio, and Instantly, adapted to a SaaS buying cycle." },
              { n: "03", title: "Layer in channel strategy", body: "Where relevant, build out partner and channel motions alongside direct outbound, rather than treating them separately." },
              { n: "04", title: "Run, measure, refine", body: "Track what's converting and iterate, so the system improves instead of going stale." },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why this approach</p>
            <h2>Most growth advice for SaaS stops at strategy. This builds the infrastructure behind it.</h2>
            <p>The same systems-based approach that&apos;s generated real outbound results in other verticals, applied to how SaaS companies actually buy and grow.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <TwoCol
          who={[
            "SaaS and scale-up teams with a growth strategy but not the systems to execute it",
            "Teams evaluating whether outbound, channel partnerships, or both are the right lever right now",
            "Founders who want a GTM partner thinking in systems, not just running campaigns",
          ]}
          what={[
            "A growth system built around your actual sales motion — not a generic playbook",
            "Outbound and/or channel infrastructure that keeps running after launch",
            "Regular reporting on what's converting, so decisions are based on data",
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
        cite="— Testimonial pending, to be added as SaaS engagements close."
      />

      <CTASection
        eyebrow="Strategy without pipeline is a slide deck"
        heading="Have a growth strategy that isn't turning into pipeline?"
        body="Let's talk about what's missing, and whether I can help build it."
        label="Book a call"
      />
    </>
  );
}
