"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0A0A0F",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* minimal nav */}
      <header style={{ padding: "24px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "flex-end", gap: 9 }}>
          <Logo height={26} />
          <span style={{ fontSize: 15, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.025em", lineHeight: 1 }}>
            Distribution Lab
          </span>
        </a>
      </header>

      {/* content */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
      }}>
        <div style={{ width: "100%", maxWidth: 520 }}>

          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                backgroundColor: "rgba(56,189,248,0.12)",
                border: "1px solid rgba(56,189,248,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8 14.5L16 6" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.025em", marginBottom: 12 }}>
                Message sent.
              </h2>
              <p style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>
                We&apos;ll get back to you within one business day.
              </p>
              <a href="/" style={{
                fontSize: 13, fontWeight: 600, color: "#38BDF8",
                textDecoration: "none",
              }}>
                ← Back to site
              </a>
            </div>
          ) : (
            <>
              <a href="/" style={{ fontSize: 12, color: "#475569", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 40 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M2 6L6 2M2 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </a>

              <p style={{
                fontSize: 11, fontWeight: 700, color: "#38BDF8",
                letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16,
              }}>
                Get in touch
              </p>
              <h1 style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
                color: "#ffffff", marginBottom: 12,
              }}>
                Tell us about your market.
              </h1>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7, marginBottom: 40 }}>
                Share your current sales motion or target market. We&apos;ll show you where the
                opportunity system should start.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Name
                    </label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      style={{
                        width: "100%", padding: "11px 14px",
                        borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "#ffffff", fontSize: 14,
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.15s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "rgba(56,189,248,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Email
                    </label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@company.com"
                      style={{
                        width: "100%", padding: "11px 14px",
                        borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "#ffffff", fontSize: 14,
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.15s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "rgba(56,189,248,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Your market or sales motion
                  </label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your product, target market, and current distribution approach…"
                    style={{
                      width: "100%", padding: "11px 14px",
                      borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "#ffffff", fontSize: 14,
                      outline: "none", boxSizing: "border-box",
                      resize: "vertical", lineHeight: 1.6,
                      transition: "border-color 0.15s",
                      fontFamily: "inherit",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(56,189,248,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    padding: "13px 24px",
                    borderRadius: 10, border: "none",
                    backgroundColor: "#38BDF8", color: "#0A0A0F",
                    fontSize: 14, fontWeight: 600,
                    cursor: status === "sending" ? "wait" : "pointer",
                    transition: "opacity 0.15s",
                    opacity: status === "sending" ? 0.7 : 1,
                    alignSelf: "flex-start",
                  }}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            </>
          )}

        </div>
      </div>

      {/* simple footer line */}
      <div style={{ padding: "20px 40px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: 11, color: "#374151", margin: 0 }}>
          © {new Date().getFullYear()} Distribution Lab
        </p>
      </div>
    </div>
  );
}
