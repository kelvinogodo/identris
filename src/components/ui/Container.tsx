import type { HTMLAttributes } from "react";

export function Container({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`} {...props}>
      {children}
    </div>
  );
}
