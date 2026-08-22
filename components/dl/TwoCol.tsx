export default function TwoCol({
  who,
  what,
  whoTitle = "Who this is for",
  whatTitle = "What you get",
}: {
  who: string[];
  what: string[];
  whoTitle?: string;
  whatTitle?: string;
}) {
  return (
    <div className="container two-col">
      <div>
        <h3>{whoTitle}</h3>
        <ul>
          {who.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{whatTitle}</h3>
        <ul>
          {what.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
