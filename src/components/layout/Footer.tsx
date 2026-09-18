import Link from "next/link";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { footerLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-dim/20 bg-forest">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage-dim">
              {siteConfig.description}
            </p>
            <SocialLinks className="mt-6" />
            <p className="mt-2 text-xs text-sage-dim/70">
              See how the work is actually built on GitHub.
            </p>
          </div>

          <div>
            <h2 className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-sage-dim">
              Site
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sage-dim transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-sage-dim">
              Resources
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.cvUrl}
                  download
                  className="text-sm text-sage-dim transition-colors hover:text-lime"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sage-dim transition-colors hover:text-lime"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-sage-dim transition-colors hover:text-lime"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sage-dim/20 pt-6 font-mono-tech text-[11px] uppercase tracking-[0.1em] text-sage-dim/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name} — all rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
            Systems status: operational
          </p>
        </div>
      </div>
    </footer>
  );
}
