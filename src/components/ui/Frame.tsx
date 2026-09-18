import type { HTMLAttributes } from "react";

/**
 * Viewfinder-style corner marks for images and feature panels — reads as an
 * instrument reticle rather than a decorative border.
 */
export function Frame({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`reticle ${className}`} {...props}>
      {children}
    </div>
  );
}
