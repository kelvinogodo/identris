import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a project with Identris Systems Limited — tell us about your organization and what you need built.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section intro tone="dark" className="pt-20 pb-24 md:pt-28">
      <div className="max-w-2xl">
        <Eyebrow index="06">Get in touch</Eyebrow>
        <h1 className="mt-5 font-heading text-5xl font-semibold text-sage md:text-6xl">
          Start a Project
        </h1>
        <p className="mt-5 text-xl text-sage-dim">
          Tell us what your organization is trying to build. We&apos;ll reply
          honestly about scope, timeline, and whether we&apos;re the right
          team for it.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime">
              Direct Contact
            </p>
            <dl className="mt-5 flex flex-col gap-4 border-t border-sage-dim/15 pt-4 text-base">
              <div>
                <dt className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage-dim">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lime hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              {siteConfig.phone && (
                <div>
                  <dt className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage-dim">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sage">{siteConfig.phone}</dd>
                </div>
              )}
              <div>
                <dt className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage-dim">
                  Location
                </dt>
                <dd className="mt-1 text-sage">{siteConfig.location}</dd>
              </div>
            </dl>
          </Card>

          <Card>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime">
              What happens next
            </p>
            <p className="mt-4 border-t border-sage-dim/15 pt-4 text-base leading-relaxed text-sage-dim">
              We read every message personally. Expect a reply within one to
              two business days with next steps, or a straight answer if it
              isn&apos;t a fit.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
