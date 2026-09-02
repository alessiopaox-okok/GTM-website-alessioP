export default function CTASection({
  eyebrow,
  heading,
  body,
  label,
  href,
  email,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  label: string;
  href: string;
  email?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container">
        {eyebrow && <p className="eyebrow" style={{ color: "var(--muted-on-dark)" }}>{eyebrow}</p>}
        <h2>{heading}</h2>
        {body && <p>{body}</p>}
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{label}</a>
        {email && (
          <p className="cta-email">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}
      </div>
    </section>
  );
}
