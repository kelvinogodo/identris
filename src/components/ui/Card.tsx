import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`notch border border-sage-dim/25 bg-forest-light p-6 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
