import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Biometric and digital identity systems, custom web and admin platforms, e-commerce, infrastructure, and government digital solutions from Identris Systems Limited.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section tone="dark" className="pt-20 pb-14 md:pt-28">
        <Eyebrow index="05">What we build</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-heading text-4xl font-semibold text-sage md:text-5xl">
          What Identris Builds
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-sage-dim">
          Five areas of work, all built by the same team — so the system that
          captures a fingerprint in the field and the dashboard that reviews
          it centrally are never handed off between strangers.
        </p>
      </Section>

      <Section tone="dark" className="pt-0">
        <div className="border-t border-sage-dim/20">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 grid gap-8 border-b border-sage-dim/20 py-12 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <span className="font-mono-tech text-sm text-sage-dim/50">
                  0{index + 1}
                </span>
                <h2 className="mt-2 font-heading text-2xl font-semibold text-sage">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sage-dim">
                  {service.summary}
                </p>
                <p className="mt-5 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime">
                  Best fit
                </p>
                <p className="mt-1.5 text-sm text-sage-dim">{service.bestFor}</p>
              </div>
              <div className="md:col-span-8 md:border-l md:border-sage-dim/20 md:pl-10">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-sage-dim">
                  What&apos;s included
                </p>
                <ul className="mt-4 flex flex-col gap-3 border-t border-sage-dim/10 pt-4">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-sage-dim">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" className="bg-forest-light">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-sage md:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mt-2 max-w-xl text-sage-dim">
              Tell us what your organization is trying to solve and we&apos;ll
              tell you plainly what it would take to build.
            </p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            Start a Project
          </Button>
        </div>
      </Section>
    </>
  );
}
