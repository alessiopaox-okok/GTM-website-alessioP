import Logo from "@/components/Logo";

export default function DLFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
          <Logo height={20} />
          <span className="logo-wordmark">Distribution Lab</span>
        </span>
        <span>Independent GTM operator &middot; &copy; {new Date().getFullYear()} Distribution Lab</span>
      </div>
    </footer>
  );
}
