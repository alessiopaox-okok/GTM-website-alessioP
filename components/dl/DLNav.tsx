"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/distribution-gtm", label: "GTM" },
  { href: "/distribution-dtc", label: "DTC" },
  { href: "/distribution-saas", label: "SaaS" },
];

export default function DLNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="container">
        <Link href="/" className="logo">
          <span className="dot">●</span> Distribution Lab
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
