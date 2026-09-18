import type { TemplateEntry } from "@/lib/types";

export const templates: TemplateEntry[] = [
  {
    slug: "ecommerce",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    title: "Storefront, built to convert",
    description:
      "For retailers and brands selling online. Product-first layout, fast checkout, bold accent color for calls to action — designed to move browsers to buyers.",
    personality: "Energetic and product-forward, with a clear path to purchase.",
    mockupUrl: "/templates/mockups/ecommerce.html",
  },
  {
    slug: "legal",
    category: "legal",
    categoryLabel: "Legal Firms",
    title: "Authoritative and minimal",
    description:
      "For law firms and chambers. Credentials and practice areas up front, a booking or consultation flow front and center, dark and restrained.",
    personality: "Authoritative and minimal, with credentials and booking front and center.",
    mockupUrl: "/templates/mockups/legal.html",
  },
  {
    slug: "government",
    category: "government",
    categoryLabel: "Government",
    title: "Clear, official, accessible",
    description:
      "For agencies, commissions, and parastatals. Plain-language information architecture, high-contrast accessibility, and a structure built for public trust.",
    personality: "Clean and official, prioritizing clarity and accessibility over decoration.",
    mockupUrl: "/templates/mockups/government.html",
  },
  {
    slug: "logistics",
    category: "logistics",
    categoryLabel: "Courier & Logistics",
    title: "Tracking-first, always moving",
    description:
      "For courier and logistics operators. Shipment tracking front and center, route and status visuals, a layout built around real-time information.",
    personality: "Kinetic and operational, built around tracking and status at a glance.",
    mockupUrl: "/templates/mockups/logistics.html",
  },
  {
    slug: "healthcare",
    category: "healthcare",
    categoryLabel: "Healthcare",
    title: "Calm, reassuring, clear",
    description:
      "For clinics and healthcare providers. Calming palette, easy appointment booking, and a layout that reduces anxiety instead of adding to it.",
    personality: "Calm and reassuring, with booking and care information easy to find.",
    mockupUrl: "/templates/mockups/healthcare.html",
  },
  {
    slug: "real-estate",
    category: "real-estate",
    categoryLabel: "Real Estate",
    title: "Property-first browsing",
    description:
      "For agencies and developers. Listings that lead with imagery and specs, map-based search, and a premium, understated finish.",
    personality: "Premium and understated, letting property listings carry the visual weight.",
    mockupUrl: "/templates/mockups/real-estate.html",
  },
  {
    slug: "ngo",
    category: "ngo",
    categoryLabel: "NGOs & Nonprofits",
    title: "Mission-led and transparent",
    description:
      "For NGOs and nonprofits. Impact numbers up front, a clear donate or get-involved path, and a warm but credible tone.",
    personality: "Warm and mission-led, with impact and transparency front and center.",
    mockupUrl: "/templates/mockups/ngo.html",
  },
  {
    slug: "hospitality",
    category: "hospitality",
    categoryLabel: "Restaurants & Hospitality",
    title: "Warm, atmospheric, visual",
    description:
      "For restaurants, hotels, and hospitality brands. Dark, warm palette, generous imagery, and a straightforward path to booking or reservations.",
    personality: "Warm and atmospheric, leading with visual mood and easy booking.",
    mockupUrl: "/templates/mockups/hospitality.html",
  },
  {
    slug: "saas",
    category: "saas",
    categoryLabel: "SaaS & Tech Startups",
    title: "Product-led and technical",
    description:
      "For SaaS and tech startups. Dashboard-style visuals, feature-led structure, a modern dark theme built for a technical audience.",
    personality: "Modern and product-led, with dashboards and features doing the talking.",
    mockupUrl: "/templates/mockups/saas.html",
  },
  {
    slug: "education",
    category: "education",
    categoryLabel: "Education",
    title: "Structured and approachable",
    description:
      "For schools and training providers. Clear program information, an approachable tone, and a structure that makes enrollment easy to find.",
    personality: "Structured and approachable, making programs and enrollment easy to find.",
    mockupUrl: "/templates/mockups/education.html",
  },

  // Neo-Brutalist direction — one alternate art direction per category: thick
  // black borders, hard offset shadows, zero border-radius, one loud accent
  // color, blocky uppercase type. A deliberate contrast to the default set.
  {
    slug: "ecommerce-brutalist",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    title: "Loud, limited, sold out fast",
    description:
      "For streetwear and drop-based brands. Hard shadows, thick borders, and scarcity built into the layout itself.",
    personality: "Neo-brutalist: raw borders, hard offset shadows, one loud accent color.",
    mockupUrl: "/templates/mockups/ecommerce-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "legal-brutalist",
    category: "legal",
    categoryLabel: "Legal Firms",
    title: "Blunt, transparent, no jargon",
    description:
      "For legal services positioning themselves as the plain-English alternative to stuffy firms.",
    personality:
      "Neo-brutalist: thick black borders and hard shadows applied to a legal brand that wants to feel direct, not traditional.",
    mockupUrl: "/templates/mockups/legal-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "government-brutalist",
    category: "government",
    categoryLabel: "Government",
    title: "Civic tech, rebuilt loud",
    description:
      "For government digital services that want to feel modern and legible rather than bureaucratic.",
    personality: "Neo-brutalist: bold color blocks and high-contrast status indicators for maximum clarity.",
    mockupUrl: "/templates/mockups/government-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "logistics-brutalist",
    category: "logistics",
    categoryLabel: "Courier & Logistics",
    title: "Blunt ETAs, zero excuses",
    description:
      "For couriers who want their reliability to be the whole brand, stated plainly.",
    personality: "Neo-brutalist: raw structure and a terminal-style tracking widget.",
    mockupUrl: "/templates/mockups/logistics-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "healthcare-brutalist",
    category: "healthcare",
    categoryLabel: "Healthcare",
    title: "Direct, fast, no waitlist",
    description:
      "For modern health and wellness brands speaking to a younger, skeptical audience.",
    personality: "Neo-brutalist: loud accent blocks against an off-white paper background.",
    mockupUrl: "/templates/mockups/healthcare-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "real-estate-brutalist",
    category: "real-estate",
    categoryLabel: "Real Estate",
    title: "Real prices, no games",
    description:
      "For real estate brands positioning against inflated listings and vague pricing.",
    personality: "Neo-brutalist: hard-shadowed listing cards and blunt, specific copy.",
    mockupUrl: "/templates/mockups/real-estate-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "ngo-brutalist",
    category: "ngo",
    categoryLabel: "NGOs & Nonprofits",
    title: "Protest-poster honest",
    description:
      "For advocacy-driven nonprofits that want urgency over polish.",
    personality: "Neo-brutalist: poster-style stickers on stark black-and-white with one loud accent.",
    mockupUrl: "/templates/mockups/ngo-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "hospitality-brutalist",
    category: "hospitality",
    categoryLabel: "Restaurants & Hospitality",
    title: "Concrete floors, serious food",
    description:
      "For restaurants and bars leaning into an industrial, unpretentious room.",
    personality: "Neo-brutalist: raw borders and a terminal-green kitchen note.",
    mockupUrl: "/templates/mockups/hospitality-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "saas-brutalist",
    category: "saas",
    categoryLabel: "SaaS & Tech Startups",
    title: "Ship it, skip the meeting",
    description:
      "For developer tools speaking directly to engineers, not procurement.",
    personality: "Neo-brutalist: terminal aesthetics, hard shadows, zero soft edges.",
    mockupUrl: "/templates/mockups/saas-brutalist.html",
    style: "Neo-Brutalist",
  },
  {
    slug: "education-brutalist",
    category: "education",
    categoryLabel: "Education",
    title: "Skip the degree, build the portfolio",
    description:
      "For bootcamps and alternative education brands positioning against traditional universities.",
    personality: "Neo-brutalist: bold stickers, blunt outcomes data, zero decoration.",
    mockupUrl: "/templates/mockups/education-brutalist.html",
    style: "Neo-Brutalist",
  },
];
