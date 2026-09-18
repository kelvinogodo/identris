"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { navLinks } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-sage-dim/20 bg-forest/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-lime ${
                  isActive ? "text-lime" : "text-sage"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && <span className="h-1 w-1 bg-lime" aria-hidden="true" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="text-sm">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className="notch-sm inline-flex items-center justify-center p-2 text-sage hover:text-lime md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-sage-dim/20 bg-forest px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 text-base font-medium ${
                      isActive ? "text-lime" : "text-sage"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && <span className="h-1 w-1 bg-lime" aria-hidden="true" />}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button
            href="/contact"
            variant="primary"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Start a Project
          </Button>
        </nav>
      )}
    </header>
  );
}
