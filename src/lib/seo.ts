import type { Metadata } from "next";
import { siteConfig } from "./constants";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

// TODO: /og/default.svg is a placeholder. Most social platforms (X, Facebook,
// LinkedIn) require a raster og:image (PNG/JPG, 1200x630) — replace this with
// a real exported image before launch, and pass a custom `ogImage` per page
// for pages that deserve their own share image.
export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og/default.svg",
}: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/identris-logo.png`, // TODO: replace once real logo asset is added
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "NG",
    },
    sameAs: [siteConfig.github],
  };
}
