"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const CAL_URL = "https://cal.eu/alessio-paoletti-klzr4d/30min";

const links = [
  { href: "#what-i-build", label: "What I build" },
  { href: "#how-i-work", label: "How I work" },
  { href: "#about", label: "About" },
];

export default function DLNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Closing the mobile panel changes the page layout, which races with the
  // browser's native anchor jump. Close first, then scroll once the closed
  // layout has painted, so the target section lands under the sticky nav.
  const closeThenScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <nav className="site-nav">
      <div className="container">
        <Link href="/" className="logo" onClick={close}>
          <Logo height={28} />
          <span className="logo-wordmark">Distribution Lab</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Start a conversation
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeThenScroll(link.href)}>{link.label}</a>
          ))}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={close}
          >
            Start a conversation
          </a>
        </div>
      )}
    </nav>
  );
}
