export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  includes: string[];
  bestFor: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string[];
  stats: { label: string; value: string }[];
  featured: boolean;
  image: string;
};

export type TemplateCategory =
  | "ecommerce"
  | "legal"
  | "government"
  | "logistics"
  | "healthcare"
  | "real-estate"
  | "ngo"
  | "hospitality"
  | "saas"
  | "education";

export type TemplateEntry = {
  slug: string;
  category: TemplateCategory;
  categoryLabel: string;
  title: string;
  description: string;
  personality: string;
  /** Path to the real, self-contained mockup page under /public/templates/mockups/. */
  mockupUrl: string;
};
