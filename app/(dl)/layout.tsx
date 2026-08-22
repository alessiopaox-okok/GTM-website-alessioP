import type { ReactNode } from "react";
import "./dl.css";
import DLNav from "@/components/dl/DLNav";
import DLFooter from "@/components/dl/DLFooter";

export default function DLLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dl">
      <DLNav />
      {children}
      <DLFooter />
    </div>
  );
}
