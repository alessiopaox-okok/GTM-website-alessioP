import type { Metadata } from "next";
import Image from "next/image";
import Schematic from "@/components/dl/Schematic";
import Steps from "@/components/dl/Steps";
import SelectedResults from "@/components/dl/SelectedResults";
import Marquee from "@/components/dl/Marquee";
import CTASection from "@/components/dl/CTASection";

const CAL_URL = "https://cal.eu/alessio-paoletti-klzr4d/30min";

export const metadata: Metadata = {
  title: "Distribution Lab — Outbound & GTM Systems",
  description:
    "Outbound and GTM systems for SaaS sales teams and consumer brands, from pipeline infrastructure to wholesale outbound.",
};

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent GTM operator</p>
            <h1>Distribution, engineered.</h1>
            <p className="subhead">
              I build outbound and go-to-market systems for SaaS teams and consumer brands, from
              sales pipeline infrastructure to wholesale growth.
            </p>
            <div className="hero-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book a call
              </a>
            </div>
          </div>
          <div>
            <Schematic />
          </div>
        </div>
      </header>

      <section className="section" id="what-i-build" style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What I build</p>
            <h2>Commercial systems built around the way you sell.</h2>
          </div>
          <Steps
            interactive
            steps={[
              {
                n: "01",
                label: "For SaaS and sales teams",
                title: "Outbound and pipeline systems",
                body: "For SaaS companies and sales teams that want to spend more time in conversations and less time building lists. I build the targeting, data, enrichment, outreach and CRM workflows behind a more structured outbound motion.",
                emphasis: true,
                resultLink: { href: "#result-saas", label: "See SaaS result ↓" },
              },
              {
                n: "02",
                label: "For consumer brands",
                title: "Wholesale outbound",
                body: "For DTC and consumer brands looking to reach retailers, professional buyers and other relevant stockists. I build the market mapping, account targeting, outreach and opportunity handoff behind a new wholesale channel.",
                resultLink: { href: "#result-wholesale", label: "See wholesale result ↓" },
              },
              {
                n: "03",
                label: "Open GTM support",
                title: "GTM systems and advisory",
                body: "Not every GTM problem fits neatly into a predefined service. If you want to pressure-test a direction, discuss a commercial bottleneck or improve an existing system, I'm always open to a conversation.",
              },
            ]}
          />
        </div>
      </section>

      <SelectedResults
        eyebrow="Selected results"
        heading="Systems that create measurable movement."
        intro="A selection of outbound systems built across SaaS and consumer brands—from scaling an established sales motion to creating a wholesale pipeline from the ground up."
        cases={[
          {
            id: "result-saas",
            index: "01",
            tag: "SaaS · International software company",
            title: "Scaling outbound without adding operational drag.",
            body: "Improved the outbound workflows supporting an international SaaS company's SMB motion, increasing email output by 200% and contributing to 35% revenue growth across the segment.",
            keywords: "Campaign operations · Workflow improvement · Pipeline generation",
            metrics: [
              { value: "3x", label: "Email output" },
              { value: "+35%", label: "SMB revenue growth" },
            ],
          },
          {
            id: "result-wholesale",
            index: "02",
            tag: "Consumer · UK wellness brand",
            title: "Building a wholesale pipeline from the ground up.",
            body: "Built the market mapping, account targeting, enrichment, outreach and CRM workflow behind a new retail acquisition motion—turning targeted outreach into qualified commercial opportunities.",
            keywords: "Market mapping · Enrichment · Outreach · Attio CRM",
            metrics: [
              { value: "38", label: "Opportunities" },
              { value: "£36k", label: "In pipeline" },
              { value: "8 weeks", label: "To get there" },
            ],
          },
        ]}
      />

      <section className="section" id="how-i-work">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How I work</p>
            <h2>Focused work. Visible progress.</h2>
            <p>
              Every engagement is organised around clear objectives, focused sprints and decisions
              shaped by what the data is showing.
            </p>
          </div>
          <Marquee
            items={[
              { n: "01", title: "Objectives first", body: "Start with a clear commercial objective and define what progress should look like." },
              { n: "02", title: "Work in sprints", body: "Break the engagement into focused cycles with defined priorities, actions and deliverables." },
              { n: "03", title: "Agile by default", body: "Review what is being learned and adjust the direction as new information emerges." },
              { n: "04", title: "Data over assumptions", body: "Use market, campaign and pipeline data to decide what should happen next." },
            ]}
          />
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2>The person behind Distribution Lab.</h2>
            <p className="gap-text" style={{ marginTop: 14 }}>
              I’m Alessio, an Italian and American growth operator and founder of Distribution Lab.
              I’ve worked across B2B SaaS, ecommerce, sales and digital marketing, always with
              international teams and an eye toward growth.
            </p>
            <p className="gap-text" style={{ marginTop: 14 }}>
              Alongside those roles, I’ve started ventures of my own. Being responsible for finding
              customers, testing ideas and making things work has shaped how I approach a business
              problem: ask questions, understand the constraints, and connect the strategy to the
              work it requires.
            </p>
            <p className="gap-text" style={{ marginTop: 14 }}>
              I’m naturally curious and analytical. I enjoy bringing different perspectives
              together, figuring out why something isn’t working, and finding ways to improve it.
              Technology interests me most when it gives people more room to think, make decisions
              and do meaningful work.
            </p>
            <p className="gap-text" style={{ marginTop: 14 }}>
              Distribution Lab brings those interests together. I work directly with founders and
              teams to turn commercial problems into practical GTM systems, combining targeting,
              data, outreach and CRM workflows with the judgment to decide what is worth building.
            </p>
          </div>
          <div className="about-portrait">
            <Image
              src="/alessio.jpg"
              alt="Alessio Paoletti, founder of Distribution Lab"
              fill
              sizes="(max-width: 860px) 60vw, 270px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a GTM problem worth discussing?"
        label="Book a call"
        href={CAL_URL}
      />
    </>
  );
}
