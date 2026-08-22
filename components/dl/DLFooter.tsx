import Logo from "@/components/Logo";

export default function DLFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
          <Logo height={22} />
          <span className="logo-wordmark">Distribution Lab</span>
          <span>— Rome, Italy</span>
        </span>
        <a href="mailto:hello@distribution-lab.com">hello@distribution-lab.com</a>
      </div>
    </footer>
  );
}
