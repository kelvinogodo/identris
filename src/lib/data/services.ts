import type { ServiceItem } from "@/lib/types";

export const services: ServiceItem[] = [
  {
    slug: "biometric-digital-identity",
    name: "Biometric and Digital Identity Systems",
    summary:
      "Enrollment and verification systems that capture fingerprint and photo data in the field and reconcile it against a central record without losing accuracy under load.",
    includes: [
      "Fingerprint and photo capture workflows (SecuGen, Logitech, and comparable hardware)",
      "Field deployment across multiple sites with intermittent connectivity",
      "Central database design for de-duplication and record integrity",
      "Offline-first sync so enrollment doesn't stop when a link drops",
      "Role-based access for enrollment officers, supervisors, and administrators",
    ],
    bestFor:
      "Government agencies, commissions, and organizations that need a verified record of who someone is, captured in the field and trusted at the center.",
  },
  {
    slug: "custom-web-admin-platforms",
    name: "Custom Web and Admin Platforms",
    summary:
      "Internal tools and admin dashboards built around how your team actually works, so staff stop waiting on manual processes to get information they need.",
    includes: [
      "Admin dashboards with role-based permissions",
      "Reporting and data export built around your existing workflows",
      "Integration with the databases and services you already run",
      "Clean, fast interfaces designed for daily internal use, not just a demo",
    ],
    bestFor:
      "Organizations running processes on spreadsheets and email threads that need a single system of record.",
  },
  {
    slug: "ecommerce-business-websites",
    name: "E-commerce and Business Websites",
    summary:
      "Storefronts and business sites that load fast, represent the brand properly, and give the team a way to update content without calling a developer every time.",
    includes: [
      "Product catalogs, checkout flows, and order management",
      "Mobile-first design, since most Nigerian traffic arrives on a phone",
      "Content that the client's team can update independently",
      "Performance and SEO built in from the first commit, not bolted on later",
    ],
    bestFor:
      "Businesses that need a storefront or company site that holds up under real customer traffic.",
  },
  {
    slug: "infrastructure-hosting-maintenance",
    name: "Infrastructure, Hosting, and Ongoing Maintenance",
    summary:
      "Deployment, monitoring, and maintenance for systems that need to stay up — including connectivity solutions like Starlink for sites without reliable fixed-line internet.",
    includes: [
      "Cloud hosting setup and deployment pipelines",
      "Uptime monitoring and incident response",
      "Connectivity solutions for remote or field locations",
      "Ongoing maintenance contracts, not a one-time handoff",
    ],
    bestFor:
      "Any organization whose system can't afford to quietly go down, and that wants a team still answering the phone after launch.",
  },
  {
    slug: "government-ngo-digital-solutions",
    name: "Government and NGO Digital Solutions",
    summary:
      "Public-facing sites and internal systems built to the compliance, data-sensitivity, and uptime expectations that come with public institutions.",
    includes: [
      "Public information websites for commissions, agencies, and parastatals",
      "Data handling practices suited to sensitive citizen or beneficiary records",
      "Documentation and handover suited to institutional continuity, not just one contact",
      "Support structured around government procurement and reporting cycles",
    ],
    bestFor:
      "Government parastatals, commissions, and NGOs that need a technology partner comfortable operating under institutional oversight.",
  },
];
