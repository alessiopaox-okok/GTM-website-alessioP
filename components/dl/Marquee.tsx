type Item = { n: string; title: string; body: string };

function CardSet({ items, hidden }: { items: Item[]; hidden: boolean }) {
  return (
    <div className="how-set" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <div className="how-card-wrap" key={item.n}>
          <div className="how-card">
            <span className="n">{item.n}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
          {i < items.length - 1 && (
            <span className="how-connector" aria-hidden="true">
              <span className="line" />
              <span className="dot" />
              <span className="line" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Marquee({ items }: { items: Item[] }) {
  return (
    <div className="how-marquee">
      <div className="how-track">
        <CardSet items={items} hidden={false} />
        <span className="how-connector how-connector-seam" aria-hidden="true">
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </span>
        <CardSet items={items} hidden />
      </div>
    </div>
  );
}
