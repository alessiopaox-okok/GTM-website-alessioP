import Button from "./Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="sec-pad" style={{ backgroundColor: "#0A0A0F", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div style={{ maxWidth: 560 }}>

          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5, fontWeight: 700, color: "#38BDF8",
            letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24,
          }}>
            Ready to start
          </p>

          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
            fontWeight: 700, letterSpacing: "-0.025em",
            color: "#ffffff", lineHeight: 1.12, marginBottom: 20,
          }}>
            Let&apos;s build your wholesale pipeline.
          </h2>

          <p style={{
            fontSize: "0.9375rem", lineHeight: 1.75, color: "#6B7280",
            marginBottom: 40, maxWidth: 440,
          }}>
            Book a 20-minute call, or send your current setup and I&apos;ll get back to you with what I see.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button href="https://cal.eu/alessio-paoletti-klzr4d/wholesale-chat" variant="accent" size="lg">Book a call</Button>
            <Button href="/contact" variant="ghost-dark" size="lg">Send a message</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
