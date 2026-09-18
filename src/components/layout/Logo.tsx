import Link from "next/link";

/**
 * Placeholder wordmark built from the brand palette until the real
 * Identris logo files are dropped into /public/logo/.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Identris Systems Limited home"
      className={`inline-flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-sage ${className}`}
    >
      <span className="notch-xs inline-block h-3 w-3 bg-lime" aria-hidden="true" />
      <span>
        Identris<span className="text-lime">.</span>
      </span>
    </Link>
  );
}
