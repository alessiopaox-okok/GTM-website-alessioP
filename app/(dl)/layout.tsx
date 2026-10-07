import type { ReactNode } from "react";
import "./dl.css";
import DLNav from "@/components/dl/DLNav";
import DLFooter from "@/components/dl/DLFooter";
import ScrollRail from "@/components/dl/ScrollRail";

export default function DLLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dl">
      <DLNav />
      <ScrollRail />
      {children}
      <DLFooter />
    </div>
  );
}
