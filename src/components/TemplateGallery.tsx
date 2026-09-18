"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Frame } from "@/components/ui/Frame";
import { TemplatePreviewFrame } from "@/components/ui/TemplatePreviewFrame";
import type { TemplateEntry } from "@/lib/types";

export function TemplateGallery({ templates }: { templates: TemplateEntry[] }) {
  const categories = useMemo(() => {
    const seen = new Map<string, string>();
    for (const template of templates) {
      seen.set(template.category, template.categoryLabel);
    }
    return Array.from(seen, ([value, label]) => ({ value, label }));
  }, [templates]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  const preview = templates.find((t) => t.slug === previewSlug) ?? null;

  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewSlug(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [preview]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2.5"
        role="group"
        aria-label="Filter templates by category"
      >
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`notch-sm border px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.1em] transition-colors ${
            activeCategory === "all"
              ? "border-lime bg-lime text-forest"
              : "border-sage-dim/30 text-sage-dim hover:border-lime hover:text-lime"
          }`}
          aria-pressed={activeCategory === "all"}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveCategory(category.value)}
            className={`notch-sm border px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.1em] transition-colors ${
              activeCategory === category.value
                ? "border-lime bg-lime text-forest"
                : "border-sage-dim/30 text-sage-dim hover:border-lime hover:text-lime"
            }`}
            aria-pressed={activeCategory === category.value}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template) => (
          <div key={template.slug} id={template.slug} className="scroll-mt-24">
            <Frame>
              <button
                type="button"
                onClick={() => setPreviewSlug(template.slug)}
                className="notch group relative block aspect-[4/3] w-full border border-sage-dim/20"
                aria-label={`View larger example of ${template.title}`}
              >
                <TemplatePreviewFrame
                  src={template.mockupUrl}
                  title={`${template.title} preview`}
                  className="absolute inset-0"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-forest/0 opacity-0 transition-opacity duration-150 group-hover:bg-forest/50 group-hover:opacity-100">
                  <span className="notch-sm bg-lime px-3 py-1.5 font-mono-tech text-[11px] uppercase tracking-[0.1em] text-forest">
                    View example
                  </span>
                </span>
              </button>
            </Frame>
            <div className="pt-5">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime">
                {template.categoryLabel}
              </p>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-sage">
                {template.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sage-dim">
                {template.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-sage-dim/15 pt-4">
                <button
                  type="button"
                  onClick={() => setPreviewSlug(template.slug)}
                  className="text-sm font-medium text-lime hover:underline"
                >
                  View example
                </button>
                <Link
                  href={`/contact?template=${template.slug}`}
                  className="ml-auto text-sm font-medium text-sage-dim hover:text-lime"
                >
                  Use this as a starting point →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} preview`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest/90 p-4 md:p-8"
          onClick={() => setPreviewSlug(null)}
        >
          <div
            className="notch-lg max-h-full w-full max-w-5xl overflow-y-auto border border-sage-dim/30 bg-forest-light p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime">
                  {preview.categoryLabel}
                </p>
                <h2 className="mt-1.5 font-heading text-2xl font-semibold text-sage">
                  {preview.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setPreviewSlug(null)}
                aria-label="Close preview"
                className="shrink-0 p-2 text-sage-dim hover:text-lime"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 max-w-2xl text-sm text-sage-dim">
              {preview.personality}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-sage-dim/15 pb-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage-dim/70">
                Live preview — scroll to browse, non-final content
              </p>
              <a
                href={preview.mockupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-[11px] uppercase tracking-[0.1em] text-lime hover:underline"
              >
                Open full example ↗
              </a>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_390px]">
              <div>
                <p className="mb-2 font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage-dim/70">
                  Desktop
                </p>
                <div className="notch relative h-[300px] overflow-hidden border border-sage-dim/20 md:h-[560px]">
                  <TemplatePreviewFrame
                    key={`${preview.slug}-desktop`}
                    src={preview.mockupUrl}
                    title={`${preview.title} desktop preview`}
                    className="absolute inset-0"
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 font-mono-tech text-[10px] uppercase tracking-[0.15em] text-sage-dim/70">
                  Mobile
                </p>
                <div className="notch mx-auto w-full max-w-[390px] overflow-x-auto border border-sage-dim/20">
                  <iframe
                    key={`${preview.slug}-mobile`}
                    src={preview.mockupUrl}
                    title={`${preview.title} mobile preview`}
                    className="h-[300px] border-0 bg-white md:h-[560px]"
                    style={{ width: 375 }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-sage-dim/20 pt-6">
              <Button href={`/contact?template=${preview.slug}`} variant="primary">
                Use this as a starting point
              </Button>
              <button
                type="button"
                onClick={() => setPreviewSlug(null)}
                className="text-sm text-sage-dim hover:text-lime"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
