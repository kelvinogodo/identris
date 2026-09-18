import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies from Identris Systems Limited, anchored by the Ebonyi State Local Government Service Commission biometric enrollment project.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section tone="dark" className="pt-20 pb-14 md:pt-28">
        <Eyebrow index="01">Case studies</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-heading text-5xl font-semibold text-sage md:text-6xl">
          Work
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-sage-dim">
          Systems we&apos;ve built and the institutions and businesses that
          now run on them.
        </p>
      </Section>

      <Section tone="dark" className="pt-0">
        <div className="flex flex-col gap-20">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} variant="full" />
          ))}
        </div>

        {/* TODO: add the next case study here (e.g. the Nkowa e-commerce platform)
            using the same CaseStudyCard component — just append a new entry to
            src/lib/data/caseStudies.ts */}
      </Section>
    </>
  );
}
