import Button from "./Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="sec-pad" style={{ backgroundColor: "#0A0A0F", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div style={{ maxWidth: 520 }}>

          <p style={{ fontSize: 11, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>
            Ready to start
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#ffffff", lineHeight: 1.15, marginBottom: 20 }}>
            Want a clearer wholesale system?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B7280", marginBottom: 40, maxWidth: 400 }}>
            Send us your current growth setup. We'll help you see what is
            missing, what is working, and what to fix first.
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
