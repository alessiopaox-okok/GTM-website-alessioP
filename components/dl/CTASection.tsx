export default function CTASection({
  eyebrow,
  heading,
  body,
  label,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  label: string;
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <p className="eyebrow" style={{ color: "var(--muted-on-dark)" }}>{eyebrow}</p>
        <h2>{heading}</h2>
        <p>{body}</p>
        <a href="mailto:hello@distribution-lab.com" className="btn btn-primary">{label}</a>
      </div>
    </section>
  );
}
