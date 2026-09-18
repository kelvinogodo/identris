import type { IconName } from "@/components/ui/Icon";

export type Capability = {
  icon: IconName;
  title: string;
  description: string;
  href: string;
};

export const capabilities: Capability[] = [
  {
    icon: "fingerprint",
    title: "Identity and Biometric Systems",
    description:
      "Fingerprint and photo capture, field hardware integration, and central records that stay accurate under real-world conditions.",
    href: "/services#biometric-digital-identity",
  },
  {
    icon: "dashboard",
    title: "Web and Admin Platforms",
    description:
      "Internal tools and dashboards built around how your team actually works, so staff stop waiting on manual processes.",
    href: "/services#custom-web-admin-platforms",
  },
  {
    icon: "cart",
    title: "E-commerce and Business Systems",
    description:
      "Storefronts and business sites that load fast, convert, and give your team control without needing a developer on call.",
    href: "/services#ecommerce-business-websites",
  },
  {
    icon: "server",
    title: "Infrastructure and Maintenance",
    description:
      "Hosting, monitoring, and connectivity — including field-ready solutions like Starlink — kept running long after launch day.",
    href: "/services#infrastructure-hosting-maintenance",
  },
];
