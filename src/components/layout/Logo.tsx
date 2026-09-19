import Image from "next/image";
import Link from "next/link";

// Intrinsic size of /public/logo/identris-logo.png; height is set via className.
const LOGO_WIDTH = 1258;
const LOGO_HEIGHT = 327;

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Identris Systems Limited home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo/identris-logo.png"
        alt="Identris"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
