import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  title: "Distribution Lab — Wholesale Growth Systems for Product Brands",
  description:
    "Distribution Lab builds the outbound and CRM systems that help product brands find, qualify, and convert the right wholesale accounts.",
  keywords: ["wholesale growth", "outbound systems", "go-to-market", "CRM", "distribution"],
  openGraph: {
    title: "Distribution Lab — Wholesale Growth Systems for Product Brands",
    description: "One founder, hands-on. No account managers in between.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${jetbrainsMono.variable} scroll-smooth`}
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
