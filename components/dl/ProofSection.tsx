type ProofItem = { num: string; desc: string };

export default function ProofSection({ items, note }: { items: ProofItem[]; note?: string }) {
  return (
    <section className="proof" id="proof">
      <div className="container">
        <div className="proof-grid">
          {items.map((item) => (
            <div className="proof-item" key={item.desc}>
              <div className="num">{item.num}</div>
              <div className="desc">{item.desc}</div>
            </div>
          ))}
        </div>
        {note && <p className="proof-note">{note}</p>}
      </div>
    </section>
  );
}
