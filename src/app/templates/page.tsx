import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TemplateGallery } from "@/components/TemplateGallery";
import { templates } from "@/lib/data/templates";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Design Templates",
  description:
    "Browse illustrative design directions by industry — e-commerce, legal, government, logistics, and more — to picture your own project with Identris.",
  path: "/templates",
});

export default function TemplatesPage() {
  return (
    <>
      <Section intro tone="dark" className="pt-20 pb-10 md:pt-28">
        <Eyebrow index="10">Design gallery</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-heading text-5xl font-semibold text-sage md:text-6xl">
          Design Templates
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-sage-dim">
          Browse how a system like this could look for your industry. These
          are illustrative design directions, not working sites — a starting
          point for a conversation about what we&apos;d actually build for you.
        </p>
      </Section>

      <Section tone="dark" className="pt-0">
        <TemplateGallery templates={templates} />
      </Section>
    </>
  );
}
