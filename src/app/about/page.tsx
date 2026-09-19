import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Frame } from "@/components/ui/Frame";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Why Identris exists, the principles it builds by, and the founder behind its government and enterprise systems work.",
  path: "/about",
});

const principles = [
  {
    icon: "shield" as const,
    title: "Reliability",
    description:
      "A system that works most of the time is a system that fails someone eventually. We design for the case where things go wrong, not just the case where they go right.",
  },
  {
    icon: "fingerprint" as const,
    title: "Security",
    description:
      "When a system holds identity data, financial records, or institutional information, security isn't a feature — it's the baseline every other decision sits on top of.",
  },
  {
    icon: "server" as const,
    title: "Uptime",
    description:
      "We build and host with the assumption that someone, somewhere, needs the system to respond right now. Maintenance is part of the contract, not an afterthought.",
  },
  {
    icon: "waveform" as const,
    title: "Clear Communication",
    description:
      "Clients get a straight answer about what's possible, what it costs, and what could go wrong — before the work starts, not after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section intro tone="dark" className="pt-20 pb-14 md:pt-28">
        <Eyebrow index="ABOUT">Identris Systems Limited</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-heading text-5xl font-semibold text-sage md:text-6xl">
          Built to be trusted with something important
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-1 space-y-5 text-base leading-relaxed text-sage-dim md:text-lg">
            <p>
              Identris Systems Limited exists because most organizations don&apos;t
              need more software — they need a system they can stop worrying
              about. That means a site that stays up, an admin platform that
              reflects how the team actually works, and a technology partner
              who is still answering the phone six months after launch.
            </p>
            <p>
              We work across the full stack: from fingerprint scanners and
              cameras deployed on the ground, to the cloud infrastructure that
              holds the record of truth behind them. That range exists because
              the projects we take on — government enrollment systems,
              business platforms, NGO tools — usually fail at the seams between
              hardware, software, and support, not inside any one layer.
            </p>
            <p>
              Our flagship delivered project is a biometric enrollment system
              for the Ebonyi State Local Government Service Commission, running
              across all 13 Local Government Areas with real government
              hardware and sensitive personnel data. It is proof the company
              can build and support systems under real institutional pressure —
              compliance, uptime, and data that cannot be allowed to go wrong —
              not a narrow specialty in government work. The same discipline
              carries over to every business and NGO system we build.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section tone="dark" className="bg-forest-light">
        <Eyebrow index="01">Founder</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <Frame className="lg:col-span-3">
            <div
              className="notch-lg flex aspect-square w-full max-w-[11rem] items-center justify-center border border-lime/40 bg-forest font-heading text-4xl font-semibold text-lime lg:max-w-none"
              aria-hidden="true"
            >
              KO
            </div>
          </Frame>
          <div className="lg:col-span-9">
            <h2 className="font-heading text-3xl font-semibold text-sage md:text-4xl">
              Kelvin Ogodo
            </h2>
            <p className="mt-1 font-mono-tech text-xs uppercase tracking-[0.15em] text-lime">
              CEO / Managing Director
            </p>
            <div className="mt-5 space-y-4 border-t border-sage-dim/20 pt-5 text-base leading-relaxed text-sage-dim md:text-lg">
              <p>
                Kelvin has been programming since 2020, with a full stack
                background that spans frontend interfaces, backend systems,
                and the field hardware integration work most software
                companies never touch. That range is what let Identris take
                on a government biometric enrollment project — spanning
                fingerprint scanners, cameras, and Starlink connectivity
                across 13 LGAs — and deliver it as a company, not a
                freelancer stretched past capacity.
              </p>
              <p>
                {/* TODO: replace with Kelvin's own founder statement / longer bio if he wants one */}
                He leads Identris&apos; engineering and client relationships
                directly, which is why clients dealing with the company are
                dealing with the person who understands the system end to
                end.
              </p>
            </div>
            <div className="mt-6">
              <Button
                href={siteConfig.cvUrl}
                variant="secondary"
                className="text-xs"
                download
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow index="04">Standards</Eyebrow>
              <h2 className="mt-4 font-heading text-4xl font-semibold text-sage md:text-5xl">
                Principles
              </h2>
              <p className="mt-4 max-w-sm text-sage-dim">
                The standards every Identris system is built and maintained
                against, regardless of client size.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-sage-dim/20">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid grid-cols-[2rem_2.75rem_1fr] items-start gap-x-5 border-b border-sage-dim/20 py-7 sm:items-center"
                >
                  <span className="font-mono-tech text-sm text-sage-dim/50">
                    0{index + 1}
                  </span>
                  <span className="notch-sm inline-flex h-11 w-11 items-center justify-center bg-lime/10 text-lime">
                    <Icon name={principle.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-sage">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-sage-dim">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
