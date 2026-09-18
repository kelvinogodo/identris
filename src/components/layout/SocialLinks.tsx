import Link from "next/link";
import { socialLinks } from "@/lib/constants";

const iconPaths: Record<string, string> = {
  github:
    "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  linkedin:
    "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM21 21h-3.38v-6.32c0-1.51-.03-3.45-2.1-3.45-2.1 0-2.42 1.64-2.42 3.34V21H9.72V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2V21Z",
  x: "M3 3h4.6l4.2 5.9L16.9 3H21l-6.6 8.6L21.4 21h-4.6l-4.6-6.4L6.4 21H2.3l7-9-6.3-9Z",
};

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) =>
        social.active ? (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-sage-dim transition-colors hover:text-lime"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d={iconPaths[social.icon]} />
            </svg>
          </Link>
        ) : (
          <span
            key={social.label}
            aria-label={`${social.label} (coming soon)`}
            title={`${social.label} — coming soon`}
            className="cursor-not-allowed text-sage-dim/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d={iconPaths[social.icon]} />
            </svg>
          </span>
        )
      )}
    </div>
  );
}
