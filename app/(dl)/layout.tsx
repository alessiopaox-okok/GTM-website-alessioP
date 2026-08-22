import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./dl.css";
import DLNav from "@/components/dl/DLNav";
import DLFooter from "@/components/dl/DLFooter";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dl-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dl-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dl-mono",
  display: "swap",
});

export default function DLLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`dl ${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <DLNav />
      {children}
      <DLFooter />
    </div>
  );
}
