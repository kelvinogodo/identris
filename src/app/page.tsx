import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Frame } from "@/components/ui/Frame";
import { TemplatePreviewFrame } from "@/components/ui/TemplatePreviewFrame";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { capabilities } from "@/lib/data/capabilities";
import { caseStudies } from "@/lib/data/caseStudies";
import { templates } from "@/lib/data/templates";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Systems Built to Scale and Stay Up",
  description:
    "Identris Systems Limited designs and builds identity, web, and infrastructure systems for businesses, NGOs, and government parastatals — proven under real institutional pressure.",
  path: "/",
});

const featuredCaseStudy = caseStudies.find((cs) => cs.featured) ?? caseStudies[0];
const templatePreview = templates.slice(0, 4);

const process = [
  {
    icon: "target" as const,
    step: "01 / Discover",
    title: "Discover",
    description:
      "We start with what your organization actually needs to run — the workflows, the constraints, the data that has to stay clean.",
  },
  {
    icon: "blueprint" as const,
    step: "02 / Design",
    title: "Design",
    description:
      "A clear plan for how the system will look, behave, and hold up — reviewed with you before a line of production code is written.",
  },
  {
    icon: "circuit" as const,
    step: "03 / Build",
    title: "Build",
    description:
      "Engineering across the full stack — from field hardware integration to the cloud backend that holds the record of truth.",
  },
  {
    icon: "waveform" as const,
    step: "04 / Support",
    title: "Support",
    description:
      "Launch is the start, not the finish. We stay on to monitor, maintain, and answer the phone when something needs attention.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="dark" className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          <Eyebrow index="LAGOS, NIGERIA">Identris Systems Limited</Eyebrow>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.08] text-sage md:text-6xl lg:text-[4rem]">
            Systems that help your organization{" "}
            <span className="text-lime text-glow">scale and stay reliable.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sage-dim">
            Identris Systems Limited builds identity, web, and infrastructure
            systems for businesses, NGOs, and government parastatals —
            engineered to keep working when it matters most.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
            <Button href="/work" variant="secondary">
              See Our Work
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-sage-dim/15 pt-6 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-sage-dim">
          <span><span className="text-lime">13</span> LGAs deployed</span>
          <span>Fingerprint + photo capture</span>
          <span>Starlink-enabled field ops</span>
          <span>Live government client</span>
        </div>
      </Section>

      {/* Trust line */}
      <div className="border-y border-sage-dim/15 bg-forest-light">
        <Container className="flex flex-col items-start gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-sage-dim">
            <span className="text-lime">Government-grade deployment experience —</span>{" "}
            13 Local Government Areas, live biometric enrollment, real field hardware.
          </p>
          <Link
            href="/work"
            className="shrink-0 text-sm font-medium text-lime hover:underline"
          >
            See the case study →
          </Link>
        </Container>
      </div>

      {/* What We Do */}
      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow index="04">Capabilities</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-sage md:text-4xl">
                What We Do
              </h2>
              <p className="mt-4 max-w-sm text-sage-dim">
                Full stack engineering that spans hardware integration in the
                field to cloud-backed admin systems.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-sage-dim/20">
              {capabilities.map((capability, index) => (
                <Link
                  key={capability.title}
                  href={capability.href}
                  className="group -mx-3 grid grid-cols-[2rem_2.75rem_1fr] items-start gap-x-5 border-b border-sage-dim/20 px-3 py-7 transition-colors hover:bg-forest-light sm:grid-cols-[2.5rem_2.75rem_1fr_1.5rem] sm:items-center"
                >
                  <span className="font-mono-tech text-sm text-sage-dim/50">
                    0{index + 1}
                  </span>
                  <span className="notch-sm inline-flex h-11 w-11 items-center justify-center bg-lime/10 text-lime">
                    <Icon name={capability.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-sage">
                      {capability.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sage-dim">
                      {capability.description}
                    </p>
                  </div>
                  <Icon
                    name="arrow-right"
                    className="hidden h-5 w-5 shrink-0 text-lime opacity-0 transition-opacity group-hover:opacity-100 sm:block"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Featured case study */}
      <Section tone="dark" className="bg-forest-light">
        <Eyebrow index="01">Proof of capacity</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-sage md:text-4xl">
          Built and still standing under real institutional pressure
        </h2>
        <div className="mt-12">
          <CaseStudyCard caseStudy={featuredCaseStudy} variant="summary" />
        </div>
      </Section>

      {/* Template gallery teaser */}
      <Section tone="dark">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow index="10">Design directions</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-sage md:text-4xl">
              See how it could look for your industry
            </h2>
            <p className="mt-3 text-sage-dim">
              Browse illustrative design directions across e-commerce, legal,
              government, logistics, and more.
            </p>
          </div>
          <Button href="/templates" variant="secondary" className="shrink-0">
            Browse Templates
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {templatePreview.map((template) => (
            <Link key={template.slug} href={`/templates#${template.slug}`} className="group block">
              <Frame>
                <div className="notch relative aspect-[4/3] w-full border border-sage-dim/20 transition-transform duration-200 group-hover:scale-[1.02]">
                  <TemplatePreviewFrame
                    src={template.mockupUrl}
                    title={`${template.categoryLabel} preview`}
                    className="absolute inset-0"
                  />
                </div>
              </Frame>
              <p className="mt-3 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-sage-dim group-hover:text-lime">
                {template.categoryLabel}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="dark" className="bg-forest-light">
        <Eyebrow index="04">How we work</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-semibold text-sage md:text-4xl">
          How a project actually runs
        </h2>
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-sage-dim/25 md:block" />
          <div className="grid gap-10 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.title} className="relative bg-forest-light md:pr-6">
                <div className="notch-sm relative z-10 flex h-11 w-11 items-center justify-center border border-lime/50 bg-forest text-lime">
                  <Icon name={step.icon} className="h-5 w-5" />
                </div>
                <p className="mt-5 font-mono-tech text-[11px] uppercase tracking-[0.12em] text-sage-dim/70">
                  {step.step}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-sage">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage-dim">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="dark">
        <div className="reticle notch-lg border border-lime/25 bg-forest-light p-10 md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Eyebrow>Next step</Eyebrow>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-sage md:text-3xl">
                Have a system that needs to work? Let&apos;s talk.
              </h2>
              <p className="mt-2 max-w-xl text-sage-dim">
                Tell us what your organization is trying to build, and we&apos;ll
                tell you honestly whether we&apos;re the right fit.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">
              Start a Project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
