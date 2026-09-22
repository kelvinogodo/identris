import type { Metadata } from "next";
import Image from "next/image";
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
      "When a system holds identity data, financial records, or institutional information, security isn't a feature; it's the baseline every other decision sits on top of.",
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
      "Clients get a straight answer about what's possible, what it costs, and what could go wrong, before the work starts, not after.",
  },
];

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  portfolioUrl?: string;
  bio: string[];
};

const team: TeamMember[] = [
  {
    name: "Wisdom Chizitere",
    role: "Graphic Designer",
    photo: "/team/wisdom-chizitere.jpg",
    portfolioUrl: "https://www.behance.net/wisdomchizitere",
    bio: [
      "With over five years of experience in graphic design, Wisdom Chizitere has worked across brand identity, digital marketing, social media, and campaign design. His experience spans technology, logistics, real estate, hospitality, education, and e-commerce.",
      "He focuses on understanding the business behind the design and turning its ideas into clear, distinctive, and purposeful visuals.",
    ],
  },
  {
    name: "Emmanuel Ugama",
    role: "Data Analyst",
    photo: "/team/emmanuel.jpg",
    bio: [
      "Emmanuel works with data to help the organization better understand its operations, performance, and emerging trends. His role involves collecting, organizing, analyzing, and interpreting data to generate insights that support informed decision-making across the company.",
      "He works with analytical tools to analyze datasets, develop reports and dashboards, identify patterns, and present information in a clear and actionable format. With a strong analytical and problem-solving approach, Emmanuel focuses on making data more useful to the organization and supporting better decisions through accurate, well-interpreted information.",
    ],
  },
  {
    name: "Timothy",
    role: "Full Stack Engineer",
    photo: "/team/timothy.jpg",
    bio: [
      "Timothy is a full stack engineer who builds web applications from the interface down to the backend and database. He enjoys working through difficult product problems and turning ideas into software that is simple to use and reliable in practice.",
      "He has experience building business tools, web platforms, APIs and other production applications, and is comfortable working across different parts of a product when needed.",
    ],
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
              need more software; they need a system they can stop worrying
              about. That means a site that stays up, an admin platform that
              reflects how the team actually works, and a technology partner
              who is still answering the phone six months after launch.
            </p>
            <p>
              We work across the full stack: from fingerprint scanners and
              cameras deployed on the ground, to the cloud infrastructure that
              holds the record of truth behind them. That range exists because
              the projects we take on (government enrollment systems,
              business platforms, NGO tools) usually fail at the seams between
              hardware, software, and support, not inside any one layer.
            </p>
            <p>
              Our flagship delivered project is a biometric enrollment system
              for the Ebonyi State Local Government Service Commission, running
              across all 13 Local Government Areas with real government
              hardware and sensitive personnel data. It is proof the company
              can build and support systems under real institutional pressure
              (compliance, uptime, and data that cannot be allowed to go wrong),
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
            <div className="notch-lg relative aspect-[4/5] w-full max-w-[16rem] overflow-hidden border border-lime/40 bg-forest lg:max-w-none">
              <Image
                src="/founder/kelvin-ogodo.jpg"
                alt="Kelvin Ogodo, CEO and Managing Director of Identris Systems Limited"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 260px, 256px"
              />
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
                on a government biometric enrollment project (spanning
                fingerprint scanners, cameras, and Starlink connectivity
                across 13 LGAs) and deliver it as a company, not a
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

      {/* Team */}
      <Section tone="dark">
        <Eyebrow index="02">Team</Eyebrow>
        <div className="mt-8 space-y-14">
          {team.map((member) => (
            <div key={member.name} className="grid gap-10 lg:grid-cols-12">
              <Frame className="lg:col-span-3">
                <div className="notch-lg relative aspect-[4/5] w-full max-w-[16rem] overflow-hidden border border-lime/40 bg-forest lg:max-w-none">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Identris Systems Limited`}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 260px, 256px"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center font-heading text-6xl font-semibold text-lime/60"
                    >
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </Frame>
              <div className="lg:col-span-9">
                <h2 className="font-heading text-3xl font-semibold text-sage md:text-4xl">
                  {member.name}
                </h2>
                <p className="mt-1 font-mono-tech text-xs uppercase tracking-[0.15em] text-lime">
                  {member.role}
                </p>
                <div className="mt-5 space-y-4 border-t border-sage-dim/20 pt-5 text-base leading-relaxed text-sage-dim md:text-lg">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {member.portfolioUrl && (
                  <div className="mt-6">
                    <Button
                      href={member.portfolioUrl}
                      variant="secondary"
                      className="text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Portfolio ↗
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
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
