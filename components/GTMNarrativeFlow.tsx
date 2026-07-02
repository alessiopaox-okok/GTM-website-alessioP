/* ── Static premium reply stack ──────────────────────────────────── */

const BEHIND_CARDS = [
  { text: "Sounds interesting — send more info.", offset: { x: -12, y: -14 }, opacity: 0.45, blur: 1 },
  { text: "Can you share samples and pricing?",   offset: { x: -24, y: -28 }, opacity: 0.25, blur: 2 },
];

const CHIPS = ["High fit", "Retailer", "Range requested", "Next step assigned"];

export default function GTMNarrativeFlow() {
  return (
    <div
      className="gtm-narrative-wrap"
      style={{
        position: "absolute",
        right: "clamp(16px, 4vw, 60px)",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
        width: "clamp(300px, 36vw, 400px)",
        /* reserve space for stacked cards behind */
        paddingTop: 32,
        paddingLeft: 28,
      }}
    >
      {/* ── behind cards ─────────────────────────────────────────── */}
      {BEHIND_CARDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 32 + c.offset.y,
            left: 28 + c.offset.x,
            right: 0,
            backgroundColor: "rgba(255,255,255,0.82)",
            backdropFilter: `blur(${c.blur}px)`,
            WebkitBackdropFilter: `blur(${c.blur}px)`,
            border: "1px solid rgba(226,232,240,0.7)",
            borderRadius: 16,
            padding: "18px 20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            opacity: c.opacity,
            zIndex: 10 - i,
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 8px" }}>
            Positive reply
          </p>
          <p style={{ fontSize: 13, color: "#475569", fontStyle: "italic", lineHeight: 1.55, margin: 0 }}>
            &ldquo;{c.text}&rdquo;
          </p>
        </div>
      ))}

      {/* ── main foreground card ──────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          backgroundColor: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(226,232,240,0.95)",
          borderRadius: 16,
          boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 20px 48px rgba(0,0,0,0.10), 0 2px 4px rgba(56,189,248,0.06)",
          padding: "22px 24px 20px",
          animation: "hero-float 6s ease-in-out infinite",
        }}
      >
        {/* label row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#38BDF8", display: "block", boxShadow: "0 0 8px rgba(56,189,248,0.6)" }}/>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Positive reply
            </span>
          </div>
          <span style={{ fontSize: 10.5, color: "#94A3B8" }}>just now</span>
        </div>

        {/* quote */}
        <div style={{
          backgroundColor: "#F8FCFF",
          border: "1px solid rgba(56,189,248,0.13)",
          borderRadius: 11, padding: "14px 16px", marginBottom: 16,
        }}>
          <p style={{ fontSize: 14, color: "#0C111D", lineHeight: 1.62, margin: 0, fontStyle: "italic" }}>
            &ldquo;Yes, happy to take a look. Could you send over the range and wholesale pricing?&rdquo;
          </p>
        </div>

        {/* chips */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
          {CHIPS.map(chip => (
            <span key={chip} style={{
              fontSize: 10.5, fontWeight: 500, color: "#475569",
              backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0",
              padding: "3px 9px", borderRadius: 99,
            }}>
              {chip}
            </span>
          ))}
        </div>

        {/* divider */}
        <div style={{ height: 1, backgroundColor: "rgba(56,189,248,0.09)", marginBottom: 14 }}/>

        {/* opportunity badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#10B981", display: "block" }}/>
            <span style={{
              position: "absolute", inset: -2, borderRadius: "50%",
              border: "1.5px solid #10B981", opacity: 0.45,
              animation: "hero-pulse 2s ease-out infinite",
            }}/>
          </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#059669" }}>Opportunity created</span>
          <span style={{ marginLeft: "auto", fontSize: 10.5, color: "#94A3B8" }}>Added to CRM</span>
        </div>
      </div>

      {/* ── trail footer ─────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 18, paddingLeft: 2 }}>
        {["Market mapped", "Outreach sent", "Opportunity created"].map((s, i, arr) => (
          <div key={s} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 10.5, color: i === arr.length - 1 ? "#38BDF8" : "#94A3B8", fontWeight: i === arr.length - 1 ? 600 : 400, whiteSpace: "nowrap" }}>
              {s}
            </span>
            {i < arr.length - 1 && (
              <span style={{ fontSize: 10, color: "#CBD5E1", margin: "0 6px" }}>→</span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes hero-pulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @media (max-width: 900px) {
          .gtm-narrative-wrap { display: none !important; }
        }
      `}</style>
    </div>
  );
}
