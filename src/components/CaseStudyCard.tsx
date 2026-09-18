import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { Frame } from "@/components/ui/Frame";
import { Stat } from "@/components/ui/Stat";
import { Icon } from "@/components/ui/Icon";

const statSizes = ["lg", "sm", "sm"] as const;

export function CaseStudyCard({
  caseStudy,
  variant = "summary",
}: {
  caseStudy: CaseStudy;
  variant?: "summary" | "full";
}) {
  const fit = caseStudy.imageFit ?? "cover";

  if (variant === "summary") {
    return (
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <Frame className="lg:col-span-7">
          <div className="notch-lg relative aspect-[4/3] overflow-hidden border border-sage-dim/25 bg-forest-light">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className={fit === "contain" ? "object-contain p-8" : "object-cover"}
              sizes="(min-width: 1024px) 640px, 100vw"
            />
            <div className="absolute left-4 top-4 bg-forest/80 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage">
              Field deployment · {caseStudy.stats[0]?.value}
            </div>
          </div>
        </Frame>

        <div className="lg:col-span-5">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-sage-dim">
            Client
          </p>
          <p className="mt-1.5 text-sage">{caseStudy.client}</p>

          <h3 className="mt-6 font-heading text-2xl font-semibold text-sage md:text-3xl">
            {caseStudy.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-sage-dim">
            {caseStudy.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-sage-dim/20 pt-8">
            {caseStudy.stats.map((stat, i) => (
              <Stat key={stat.label} label={stat.label} value={stat.value} size={statSizes[i] ?? "sm"} />
            ))}
          </div>

          <Link
            href={`/work#${caseStudy.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-lime hover:underline"
          >
            Read the full case study
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article id={caseStudy.slug} className="scroll-mt-24">
      <Frame>
        <div className="notch-lg relative aspect-[21/9] w-full overflow-hidden border border-sage-dim/25 bg-forest-light">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className={fit === "contain" ? "object-contain p-10" : "object-cover"}
            sizes="100vw"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2 font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage">
            <span className="bg-forest/80 px-2.5 py-1">Client: {caseStudy.client}</span>
            <span className="bg-lime px-2.5 py-1 text-forest">Status: Live</span>
          </div>
        </div>
      </Frame>

      <div className="mt-10">
        <h2 className="font-heading text-4xl font-semibold text-sage md:text-5xl">
          {caseStudy.title}
        </h2>

        <div className="mt-8 flex flex-wrap items-end gap-x-12 gap-y-6 border-y border-sage-dim/20 py-8">
          {caseStudy.stats.map((stat, i) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} size={statSizes[i] ?? "sm"} />
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-lime">
              01 / Problem
            </p>
            <p className="mt-3 text-base leading-relaxed text-sage-dim">
              {caseStudy.problem}
            </p>
          </div>
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-lime">
              02 / Solution
            </p>
            <p className="mt-3 text-base leading-relaxed text-sage-dim">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-lime">
            03 / Stack
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {caseStudy.stack.map((item) => (
              <li
                key={item}
                className="notch-sm border border-sage-dim/30 px-3 py-1.5 font-mono-tech text-[11px] text-sage-dim"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-lime">
            04 / Result
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {caseStudy.result.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-sage-dim/10 pb-3 text-base text-sage-dim">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
