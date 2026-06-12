/* ─── Wholesale Pipeline dashboard — floats over the topology field ── */

/* Sparkline SVG */
function Sparkline() {
  return (
    <svg viewBox="0 0 280 52" fill="none" style={{ width: "100%", height: 52 }}>
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* Area fill */}
      <path
        d="M0 45 C20 43 40 40 60 36 C80 32 95 35 115 28 C135 21 150 24 170 16 C190 8 210 12 230 7 C248 3 265 5 280 4 L280 52 L0 52 Z"
        fill="url(#sparkFill)"
      />
      {/* Line */}
      <path
        d="M0 45 C20 43 40 40 60 36 C80 32 95 35 115 28 C135 21 150 24 170 16 C190 8 210 12 230 7 C248 3 265 5 280 4"
        stroke="#38BDF8"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

/* Avatar stack */
function Avatars({ colors, extra }: { colors: string[]; extra: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {colors.map((c, i) => (
        <div key={i} style={{
          width: 18, height: 18, borderRadius: "50%",
          backgroundColor: c,
          border: "1.5px solid #fff",
          marginLeft: i === 0 ? 0 : -5,
          zIndex: colors.length - i,
          position: "relative",
          flexShrink: 0,
        }}/>
      ))}
      {extra > 0 && (
        <span style={{ fontSize: 9, color: "#64748B", marginLeft: 4, fontWeight: 600 }}>
          +{extra}
        </span>
      )}
    </div>
  );
}

/* Stat badge */
function Badge({ value }: { value: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 2,
      fontSize: 10, fontWeight: 600, color: "#16A34A",
    }}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 6L4 2L7 6" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {value}
    </span>
  );
}

/* Metric card (top row) */
function MetricCard({ label, value, badge }: { label: string; value: string; badge: string }) {
  return (
    <div style={{
      padding: "10px 12px",
      borderRight: "1px solid #F1F5F9",
      flex: "1 1 0",
      minWidth: 0,
    }}>
      <p style={{ fontSize: 10, color: "#94A3B8", fontWeight: 500, marginBottom: 4, whiteSpace: "nowrap" }}>{label}</p>
      <p style={{ fontSize: 17, fontWeight: 700, color: "#0C111D", letterSpacing: "-0.03em", lineHeight: 1 }}>{value}</p>
      <div style={{ marginTop: 4 }}><Badge value={badge}/></div>
    </div>
  );
}

/* Stage icon */
function StageIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    prospecting: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#38BDF8" strokeWidth="1.3"/>
        <circle cx="7" cy="7" r="2.5" fill="#38BDF8"/>
      </svg>
    ),
    outreach: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M7 2l5 5-5 5" stroke="#38BDF8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    followup: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 4h10M2 7h7M2 10h5" stroke="#38BDF8" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    qualified: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7.5L5.5 11L12 3" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stockist: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="4" width="10" height="7" rx="1.5" stroke="#38BDF8" strokeWidth="1.3"/>
        <path d="M5 4V3a2 2 0 014 0v1" stroke="#38BDF8" strokeWidth="1.3"/>
      </svg>
    ),
  };
  return (
    <div style={{
      width: 26, height: 26, borderRadius: "50%",
      border: "1.5px solid #E0F2FE",
      backgroundColor: "#F0F9FF",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {icons[type]}
    </div>
  );
}

/* Pipeline stage column */
function Stage({
  iconType, label, count, badge, sub, avatarColors, avatarExtra,
}: {
  iconType: string; label: string; count: string; badge: string;
  sub?: React.ReactNode; avatarColors: string[]; avatarExtra: number;
}) {
  return (
    <div style={{ flex: "1 1 0", minWidth: 0, padding: "0 6px" }}>
      <StageIcon type={iconType}/>
      <p style={{ fontSize: 11, fontWeight: 600, color: "#475569", marginTop: 6, marginBottom: 2 }}>{label}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0C111D", letterSpacing: "-0.02em" }}>{count}</span>
        <Badge value={badge}/>
      </div>
      {sub && <div style={{ marginTop: 4 }}>{sub}</div>}
      <div style={{ marginTop: 8 }}>
        <Avatars colors={avatarColors} extra={avatarExtra}/>
      </div>
    </div>
  );
}

/* Arrow connector */
function Arrow() {
  return (
    <div style={{ paddingTop: 8, flexShrink: 0 }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="#CBD5E1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

/* Sub-stat row */
function SubStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 9, color: "#94A3B8" }}>{label}</span>
      <span style={{ fontSize: 9, fontWeight: 600, color: "#64748B" }}>{value}</span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function PipelineDashboard() {
  return (
    <div
      style={{
        position: "absolute",
        right: "clamp(16px, 4vw, 60px)",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
        width: "clamp(340px, 40vw, 490px)",
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 14,
        border: "1px solid rgba(226,232,240,0.9)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 12px 32px rgba(0,0,0,0.07), 0 2px 4px rgba(56,189,248,0.06)",
        overflow: "hidden",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div style={{
        padding: "12px 16px 10px",
        borderBottom: "1px solid #F1F5F9",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#0C111D", letterSpacing: "-0.01em" }}>
            Wholesale Pipeline
          </p>
          <p style={{ fontSize: 10, color: "#94A3B8", marginTop: 1 }}>Live overview</p>
        </div>
        <div style={{
          fontSize: 10, fontWeight: 500, color: "#64748B",
          padding: "4px 10px", borderRadius: 6,
          border: "1px solid #E2E8F0",
          backgroundColor: "#F8FAFC",
          display: "flex", alignItems: "center", gap: 5,
        }}>
          Last 7 days
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 3.5l3 3 3-3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ── Top metrics ────────────────────────────────────────── */}
      <div style={{ display: "flex", borderBottom: "1px solid #F1F5F9" }}>
        <MetricCard label="Opportunities" value="132"   badge="↑ 28%"/>
        <MetricCard label="Qualified"     value="48"    badge="↑ 31%"/>
        <MetricCard label="Meetings"      value="17"    badge="↑ 21%"/>
        <MetricCard label="New Accounts"  value="6"     badge="↑ 50%"/>
        <div style={{ padding: "10px 12px", flex: "1 1 0", minWidth: 0 }}>
          <p style={{ fontSize: 10, color: "#94A3B8", fontWeight: 500, marginBottom: 4, whiteSpace: "nowrap" }}>Pipeline Value</p>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#0C111D", letterSpacing: "-0.03em", lineHeight: 1 }}>$312K</p>
          <div style={{ marginTop: 4 }}><Badge value="↑ 42%"/></div>
        </div>
      </div>

      {/* ── Pipeline stages ────────────────────────────────────── */}
      <div style={{ padding: "12px 10px 10px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 2 }}>

          <Stage
            iconType="prospecting" label="Prospecting" count="132" badge="+28%"
            sub={<>
              <SubStat label="New leads" value="42"/>
              <SubStat label="Enriched"  value="90"/>
            </>}
            avatarColors={["#38BDF8","#60A5FA","#93C5FD","#BFDBFE"]}
            avatarExtra={28}
          />
          <Arrow/>

          <Stage
            iconType="outreach" label="Outreach" count="84" badge="+24%"
            sub={<>
              <SubStat label="Emails sent" value="221"/>
              <SubStat label="Replies"     value="34"/>
            </>}
            avatarColors={["#34D399","#6EE7B7","#A7F3D0"]}
            avatarExtra={18}
          />
          <Arrow/>

          <Stage
            iconType="followup" label="Follow-up" count="56" badge="+35%"
            sub={<>
              <SubStat label="Follow-ups" value="142"/>
              <SubStat label="Replies"    value="22"/>
            </>}
            avatarColors={["#818CF8","#A5B4FC","#C7D2FE"]}
            avatarExtra={11}
          />
          <Arrow/>

          <Stage
            iconType="qualified" label="Qualified" count="48" badge="+31%"
            sub={<>
              <SubStat label="Qual. leads"  value="48"/>
              <SubStat label="Meeting rate" value="32%"/>
            </>}
            avatarColors={["#FB923C","#FCA5A5","#FDBA74"]}
            avatarExtra={7}
          />
          <Arrow/>

          <Stage
            iconType="stockist" label="Stockist call" count="17" badge="+21%"
            sub={<>
              <SubStat label="Meetings" value="17"/>
              <SubStat label="Show rate" value="71%"/>
            </>}
            avatarColors={["#38BDF8","#34D399","#818CF8"]}
            avatarExtra={5}
          />
        </div>
      </div>

      {/* ── Sparkline ──────────────────────────────────────────── */}
      <div style={{ padding: "8px 16px 12px", position: "relative" }}>
        <Sparkline/>
        {/* Pipeline value callout */}
        <div style={{
          position: "absolute",
          bottom: 22, left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          border: "1px solid #E2E8F0",
          borderRadius: 8,
          padding: "6px 12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          <p style={{ fontSize: 9, color: "#94A3B8", fontWeight: 500 }}>Pipeline value</p>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#0C111D", letterSpacing: "-0.02em" }}>
            $312,400 <span style={{ color: "#16A34A", fontSize: 10 }}>+42%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
