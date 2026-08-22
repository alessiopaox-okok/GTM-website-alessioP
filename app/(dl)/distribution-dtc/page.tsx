import type { Metadata } from "next";
import ChannelStrip from "@/components/dl/ChannelStrip";
import Schematic from "@/components/dl/Schematic";
import Steps from "@/components/dl/Steps";
import TwoCol from "@/components/dl/TwoCol";
import ProofSection from "@/components/dl/ProofSection";
import Testimonial from "@/components/dl/Testimonial";
import CTASection from "@/components/dl/CTASection";

export const metadata: Metadata = {
  title: "Wholesale & Distribution — Distribution Lab",
  description: "Outbound systems that turn cold lists into warm wholesale conversations for physical-product brands.",
};

export default function DistributionDTC() {
  return (
    <>
      <ChannelStrip label="Wholesale & Distribution" />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Path 02 — Physical product</p>
            <h1>Get your product onto the right shelves — without hiring a sales team.</h1>
            <p className="subhead">
              I build outbound systems that turn cold lists into warm wholesale conversations, for
              physical-product brands ready to grow beyond direct-to-consumer.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@distribution-lab.com" className="btn btn-primary">Book a call</a>
              <a href="#proof" className="btn btn-ghost">See the numbers</a>
            </div>
          </div>
          <div>
            <Schematic variant="dtc" />
          </div>
        </div>
      </header>

      <section className="section" style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The gap</p>
            <h2>Most DTC brands know wholesale could work. Few have the system to prove it.</h2>
          </div>
          <p className="gap-text">
            Founders end up <strong>doing it themselves</strong> between everything else with no
            system behind it, <strong>hiring a rep too early</strong> before the channel is
            proven, or <strong>leaving it on the table</strong> entirely. All three cost you
            growth you&apos;ve already earned the right to.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What I do</p>
            <h2>I design and run outbound systems that turn your product into a pipeline of qualified stockist conversations.</h2>
            <p>Practitioners, retailers, and channel partners who are a genuine fit — not a list you inherit and have to maintain yourself.</p>
          </div>
          <Steps
            steps={[
              { n: "01", title: "Define the ICP", body: "Identify the exact channel and buyer profile most likely to say yes — practitioner clinics, specialty retailers, trade accounts." },
              { n: "02", title: "Build the system", body: "Enrichment, list-building, and outreach sequencing using Clay, Attio, and Instantly." },
              { n: "03", title: "Run and refine", body: "Launch campaigns, monitor reply and response data, and iterate messaging on what's actually converting." },
              { n: "04", title: "Hand off warm conversations", body: "You focus on closing and fulfillment. I focus on filling the pipeline." },
            ]}
          />
        </div>
      </section>

      <ProofSection
        items={[
          { num: "23–25%", desc: "Reply rate — clinical / practitioner channel" },
          { num: "~37", desc: "Warm opportunities from one outbound system" },
          { num: "0", desc: "In-house sales hires required to get there" },
        ]}
      />

      <section className="section">
        <TwoCol
          who={[
            "DTC brands with a proven product looking to open a wholesale or professional channel",
            "Founders who don't have time to build outbound infrastructure themselves",
            "Teams that want a system, not just a list",
          ]}
          what={[
            "A fully built outbound system — not a spreadsheet you inherit",
            "Ongoing campaign management and iteration",
            "Regular reporting on replies, opportunities, and pipeline generated",
          ]}
        />
      </section>

      <Testimonial
        quote={'"…"'}
        cite="— Testimonial pending. Ask a past client for a quote — no name or company required if they prefer discretion."
      />

      <CTASection
        eyebrow="Ready when you are"
        heading="Ready to build your wholesale pipeline?"
        body="Let's talk about your product and whether this channel is the right next move."
        label="Book a call"
      />
    </>
  );
}
