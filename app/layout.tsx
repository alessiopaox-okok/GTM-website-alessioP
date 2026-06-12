import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-logo",
});

/*
  Font system — Distribution Lab
  ─────────────────────────────────────────────────────────────────
  --font-sans  → Geist Sans   (logo, headlines, body)
  --font-mono  → Geist Mono   (01/02/03 accents, eyebrows, tags)

  To swap to the Satoshi system later, replace the two imports above
  with the Satoshi @font-face + Inter setup and update the CSS vars
  in globals.css — nothing else needs to change.
  ─────────────────────────────────────────────────────────────────
*/

export const metadata: Metadata = {
  title: "Distribution Lab — GTM Systems for Founder-Led Brands",
  description:
    "Distribution Lab helps founder-led brands turn scattered commercial activity into a structured GTM operating system — across outbound, CRM, follow-ups, and pipeline.",
  keywords: ["GTM systems", "go-to-market", "sales systems", "outbound", "CRM", "founder-led growth"],
  openGraph: {
    title: "Distribution Lab — GTM Systems for Founder-Led Brands",
    description: "Turn messy sales activity into a repeatable GTM system.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${interTight.variable} scroll-smooth`}
    >
      <body
        className="min-h-screen antialiased font-sans"
        style={{ backgroundColor: "#ffffff", color: "#0A0A0F" }}
      >
        {children}
      </body>
    </html>
  );
}
