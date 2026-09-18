"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { templates } from "@/lib/data/templates";
import { siteConfig } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get("template");
  const referencedTemplate = templates.find((t) => t.slug === templateSlug);

  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime">
          Message sent
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold text-sage">
          We&apos;ll be in touch.
        </h2>
        <p className="mt-2 text-sage-dim">
          Thanks for reaching out — expect a reply within one to two business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {referencedTemplate && (
        <input
          type="hidden"
          name="referenced_template"
          value={referencedTemplate.title}
        />
      )}

      {referencedTemplate && (
        <div className="notch-sm border border-lime/30 bg-lime/5 px-4 py-3 font-mono-tech text-[11px] uppercase tracking-[0.1em] text-sage-dim">
          Referencing{" "}
          <span className="text-lime">{referencedTemplate.categoryLabel}</span>
          {" — "}
          {referencedTemplate.title}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Company or Organization" htmlFor="company">
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={inputClasses}
        />
      </Field>

      <Field label="Project Type" htmlFor="project_type">
        <select
          id="project_type"
          name="project_type"
          required
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            Select the closest fit
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClasses}
          placeholder="Tell us what you're trying to build, and what needs to be true for it to succeed."
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please try again, or
          email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

const inputClasses =
  "w-full border border-sage-dim/30 bg-forest px-4 py-3 text-sm text-sage placeholder:text-sage-dim/50 outline-none transition-colors focus:border-lime";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-sage-dim"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
