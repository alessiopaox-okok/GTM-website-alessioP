export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A]" />
      <span className="text-xs font-medium text-[#6B6B6B] tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}
