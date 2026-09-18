"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a live, non-interactive crop of a real mockup page, scaled down to
 * fit its container — the same technique as a scaled-iframe design gallery:
 * the iframe is laid out at its natural desktop width, then scaled and
 * height-corrected so the container's aspect box shows an accurate crop of
 * the actual rendered page instead of a flat screenshot.
 */
export function TemplatePreviewFrame({
  src,
  title,
  baseWidth = 1440,
  className = "",
}: {
  src: string;
  title: string;
  baseWidth?: number;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frameEl = frameRef.current;
    const iframeEl = iframeRef.current;
    if (!frameEl || !iframeEl) return;

    function fit() {
      if (!frameEl || !iframeEl) return;
      const scale = frameEl.clientWidth / baseWidth;
      iframeEl.style.width = `${baseWidth}px`;
      iframeEl.style.transform = `scale(${scale})`;
      iframeEl.style.height = `${frameEl.clientHeight / scale}px`;
    }

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(frameEl);
    return () => observer.disconnect();
  }, [baseWidth]);

  return (
    <div ref={frameRef} className={`overflow-hidden bg-forest ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
      />
    </div>
  );
}
