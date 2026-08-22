export default function Testimonial({ quote, cite }: { quote: string; cite: string }) {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: 20 }}>In their words</p>
        <div className="testimonial">
          <p>{quote}</p>
          <div className="cite">{cite}</div>
        </div>
      </div>
    </section>
  );
}
