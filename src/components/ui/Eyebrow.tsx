import type { ReactNode } from "react";

export function Eyebrow({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-lime ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-lime" aria-hidden="true" />
      <span>{children}</span>
      {index && <span className="text-sage-dim/70">/{index}</span>}
    </div>
  );
}
