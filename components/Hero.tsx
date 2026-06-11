import Button from "./Button";
import StarField from "./StarField";
import ArchLogo from "./ArchLogo";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Reactive dot field */}
      <StarField />

      {/* Very subtle radial wash */}
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 44% at 50% 48%, rgba(130,238,253,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Centred content — no space-between, everything stacked tight */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          maxWidth: 700,
          width: "100%",
        }}
      >
        {/* Arch logo */}
        <div style={{ marginBottom: 28 }}>
          <ArchLogo size={52} />
        </div>

        {/* Label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#82EEFD", display: "inline-block" }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: "#AEBED0", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            GTM Systems Operator
          </span>
          <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#82EEFD", display: "inline-block" }} />
        </div>

        {/* Wordmark — Fredoka, styled to match the arch logo, interactive colour */}
        <h1 className="brand-title" style={{
          fontFamily: "var(--font-fredoka), var(--font-geist-sans), sans-serif",
          fontSize: "clamp(3.2rem, 8vw, 6rem)",
          fontWeight: 600,
          letterSpacing: "0.01em",
          lineHeight: 1.0,
          marginBottom: 24,
          cursor: "default",
          userSelect: "none",
        }}>
          Distribution Lab
        </h1>

        <style>{`
          .brand-title {
            color: #82EEFD;
            transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1),
                        text-shadow 0.55s cubic-bezier(0.4, 0, 0.2, 1);
            text-shadow: 0 0 40px rgba(130, 238, 253, 0.18);
          }
          .brand-title:hover {
            color: #0A0A0F;
            text-shadow: none;
          }
        `}</style>

        {/* Sub */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#8492A6",
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          We help founder-led brands turn outbound, CRM, follow-ups, and sales
          activity into a clear operating system — powered by AI, built for
          execution.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 52 }}>
          <Button href="#contact" variant="accent" size="lg">
            Book a GTM Audit
          </Button>
          <Button href="#what" variant="ghost" size="lg">
            See how it works
          </Button>
        </div>

        {/* Scroll line — no label, taller, brighter */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 2,
              height: 64,
              background: "linear-gradient(to bottom, #82EEFD 0%, rgba(130,238,253,0.15) 70%, transparent 100%)",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}
