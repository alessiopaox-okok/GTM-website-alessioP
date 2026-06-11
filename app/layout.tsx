import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Fredoka } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

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
    <html lang="en" className={`${geist.variable} ${fredoka.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "#ffffff", color: "#0A0A0F" }}>
        {children}
      </body>
    </html>
  );
}
