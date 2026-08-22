import Link from "next/link";
import type { Metadata } from "next";
import Schematic from "@/components/dl/Schematic";
import ProofSection from "@/components/dl/ProofSection";
import CTASection from "@/components/dl/CTASection";

export const metadata: Metadata = {
  title: "Distribution Lab — Distribution, engineered.",
  description:
    "Alessio Paoletti builds outbound and growth systems for GTM consulting, wholesale distribution, and SaaS growth.",
};

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent GTM &amp; growth systems</p>
            <h1>Distribution, engineered.</h1>
            <p className="subhead">
              I help companies build the systems that get their product, service, or platform in
              front of the right buyers — a wholesale channel, a SaaS growth engine, or a
              go-to-market strategy built from scratch.
            </p>
            <div className="hero-actions">
              <a href="#routes" className="btn btn-primary">See what fits you</a>
              <a href="#proof" className="btn btn-ghost">See the results</a>
            </div>
          </div>
          <div>
            <Schematic variant="all" />
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="container">
          <p>
            <strong>I&apos;m Alessio, founder of Distribution Lab.</strong> I build outbound and
            growth systems — not one-off lists or campaigns, but repeatable infrastructure that
            keeps generating pipeline long after I&apos;ve moved on to the next thing. I work
            across three areas, depending on what a company actually needs:
          </p>
        </div>
      </section>

      <section className="routes" id="routes">
        <div className="container">
          <div className="routes-grid">
            <Link href="/distribution-gtm" className="route-card">
              <span className="index">01 — GENERAL</span>
              <h3>GTM Consulting</h3>
              <p>For founders and scale-ups who need a growth strategy and the systems to execute it — not just advice.</p>
              <span className="go">Explore GTM Consulting</span>
            </Link>

            <Link href="/distribution-dtc" className="route-card">
              <span className="index">02 — PHYSICAL PRODUCT</span>
              <h3>Wholesale &amp; Distribution</h3>
              <p>For DTC brands ready to open a wholesale or professional channel, backed by a proven outbound system.</p>
              <span className="go">Explore Wholesale &amp; Distribution</span>
            </Link>

            <Link href="/distribution-saas" className="route-card">
              <span className="index">03 — SOFTWARE</span>
              <h3>SaaS Growth</h3>
              <p>For SaaS and scale-up teams looking to drive revenue through smarter GTM systems and channel strategy.</p>
              <span className="go">Explore SaaS Growth</span>
            </Link>
          </div>
        </div>
      </section>

      <ProofSection
        items={[
          { num: "23–25%", desc: "Reply rate in outbound campaigns" },
          { num: "~37", desc: "Warm opportunities from a single system" },
          { num: "Clay · Attio · Instantly", desc: "The stack behind every system I build" },
        ]}
        note="/ Figures from wholesale outbound engagements — case-specific detail on each path page."
      />

      <CTASection
        eyebrow="Not sure which path fits"
        heading="Tell me what you're working on."
        body="I'll tell you honestly whether I can help — and if I can't, I'll say that too."
        label="Get in touch"
      />
    </>
  );
}
