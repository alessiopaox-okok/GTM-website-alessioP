"use client";

import { useState } from "react";

const CARDS = [
  {
    num: "01",
    title: "Market Map",
    body: "Prioritised wholesale accounts by fit, segment, geography, and buying potential.",
    output: "Segmented target list and priority accounts.",
  },
  {
    num: "02",
    title: "Outbound Engine",
    body: "Campaigns, personalisation, enrichment, and follow-up logic built around the right accounts.",
    output: "Live campaigns that create warm conversations.",
  },
  {
    num: "03",
    title: "Opportunity Handoff",
    body: "Interested replies routed into a clean pipeline with context, stage, last touch, and next action.",
    output: "Sales-ready opportunities for your internal team.",
  },
];

function CaseStudyBlock() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace with your real lead capture endpoint
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <div style={{
      borderRadius: 14,
      border: "1px solid rgba(56,189,248,0.15)",
      backgroundColor: "#F8FCFF",
      padding: "24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 0,
    }}>
      <p style={{
        fontSize: 10, fontWeight: 700, color: "#38BDF8",
        letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20,
      }}>
        Activewear brand · 8-week sprint
      </p>

      {/* stats */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 24 }}>
        {[
          { value: "10%",  label: "average reply rate" },
          { value: "28",   label: "opportunities in 8 weeks" },
          { value: "£38K", label: "annualised revenue pipeline" },
        ].map((stat, i, arr) => (
          <div key={i} style={{
            paddingTop: i === 0 ? 0 : 18,
            paddingBottom: i === arr.length - 1 ? 0 : 18,
            borderBottom: i < arr.length - 1 ? "1px solid rgba(56,189,248,0.10)" : "none",
          }}>
            <p style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
              fontWeight: 700, letterSpacing: "-0.03em",
              color: "#0A0A0F", margin: "0 0 2px", lineHeight: 1,
            }}>
              {stat.value}
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 18px", borderRadius: 9,
            backgroundColor: "#0C111D", color: "#fff",
            fontSize: 13, fontWeight: 600, border: "none",
            cursor: "pointer", letterSpacing: "-0.01em",
            transition: "background 0.15s", alignSelf: "flex-start",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#1e293b")}
          onMouseLeave={e => (e.currentTarget.style.background = "#0C111D")}
        >
          Get the case study
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* lead capture form */}
      {open && (
        <div style={{
          borderTop: "1px solid rgba(56,189,248,0.12)",
          paddingTop: 20,
          marginTop: 4,
        }}>
          {status === "sent" ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                backgroundColor: "rgba(56,189,248,0.12)",
                border: "1px solid rgba(56,189,248,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 7L5.5 10L10.5 3" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: 13, color: "#0A0A0F", fontWeight: 600, margin: 0 }}>
                On its way — check your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontSize: 12, color: "#475569", margin: "0 0 4px" }}>
                Enter your details and we&apos;ll send it over.
              </p>
              <input
                type="text" required placeholder="Your name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{
                  padding: "9px 12px", borderRadius: 8,
                  border: "1px solid rgba(56,189,248,0.2)",
                  backgroundColor: "#fff", fontSize: 13, color: "#0A0A0F",
                  outline: "none", width: "100%", boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => (e.target.style.borderColor = "rgba(56,189,248,0.55)")}
                onBlur={e => (e.target.style.borderColor = "rgba(56,189,248,0.2)")}
              />
              <input
                type="email" required placeholder="Work email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{
                  padding: "9px 12px", borderRadius: 8,
                  border: "1px solid rgba(56,189,248,0.2)",
                  backgroundColor: "#fff", fontSize: 13, color: "#0A0A0F",
                  outline: "none", width: "100%", boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => (e.target.style.borderColor = "rgba(56,189,248,0.55)")}
                onBlur={e => (e.target.style.borderColor = "rgba(56,189,248,0.2)")}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  padding: "9px 18px", borderRadius: 8,
                  backgroundColor: "#38BDF8", color: "#0A0A0F",
                  fontSize: 13, fontWeight: 600, border: "none",
                  cursor: status === "sending" ? "wait" : "pointer",
                  opacity: status === "sending" ? 0.7 : 1,
                  transition: "opacity 0.15s",
                }}
              >
                {status === "sending" ? "Sending…" : "Send me the case study →"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default function WhatIBuild() {
  return (
    <section id="work" className="sec-pad" style={{
      backgroundColor: "#fff",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      padding: "96px 24px",
    }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* header row: copy left, case study right */}
        <div className="wib-header" style={{ marginBottom: 48 }}>

          {/* left: copy */}
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700, color: "#38BDF8",
              letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14,
            }}>
              What Gets Built
            </p>
            <h2 style={{
              fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12,
              color: "#0A0A0F", marginBottom: 16,
            }}>
              From target accounts to<br />sales-ready opportunities.
            </h2>
            <p style={{
              fontSize: "0.9rem", lineHeight: 1.82, color: "#64748B", maxWidth: 400,
            }}>
              Distribution Lab builds the outbound and CRM infrastructure that helps consumer brands find the right wholesale accounts, start qualified conversations, and hand warm opportunities to the sales team with a clear next step.
            </p>
          </div>

          {/* right: case study block with lead capture */}
          <CaseStudyBlock />

        </div>

        {/* three cards horizontal */}
        <div className="wib-cards">
          {CARDS.map((card, i) => (
            <div key={i} className="wib-card" style={{
              padding: "28px 28px",
              borderRadius: 14,
              border: "1px solid rgba(56,189,248,0.13)",
              backgroundColor: "#fff",
              transition: "background 0.18s",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 700,
                  color: "#38BDF8", letterSpacing: "0.1em",
                }}>
                  {card.num}
                </span>
                <h3 style={{
                  fontSize: 15, fontWeight: 700, color: "#0A0A0F",
                  letterSpacing: "-0.01em", margin: 0,
                }}>
                  {card.title}
                </h3>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.72, color: "#64748B", marginBottom: 20, flex: 1 }}>
                {card.body}
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, paddingTop: 16, borderTop: "1px solid rgba(56,189,248,0.10)" }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 8.5, fontWeight: 700,
                  color: "#38BDF8", letterSpacing: "0.1em", textTransform: "uppercase",
                  paddingTop: 1, whiteSpace: "nowrap",
                }}>
                  Output
                </span>
                <span style={{ fontSize: 12, color: "#475569", lineHeight: 1.55 }}>
                  {card.output}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .wib-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .wib-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .wib-card:hover { background: #F8FCFF !important; }
        @media (max-width: 860px) {
          .wib-header { grid-template-columns: 1fr; gap: 32px; }
          .wib-cards  { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
