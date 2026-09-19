export const siteConfig = {
  name: "Identris Systems Limited",
  shortName: "Identris",
  url: "https://identris.example.com", // TODO: replace with production domain
  description:
    "Identris Systems Limited builds identity, web, and infrastructure systems for businesses, NGOs, and government parastatals across Nigeria.",
  founder: "Kelvin Ogodo",
  email: "hello@identris.example.com", // TODO: replace with real contact email
  phone: "", // TODO: add phone number if it should be public
  location: "Nigeria",
  github: "https://github.com/kelvinogodo",
  cvUrl: "/cv/Kelvin_Ogodo_CV_Identris_Systems.docx",
  // TODO: replace with a real Formspree (or Getform) endpoint — see README.
  formEndpoint:
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/YOUR_FORM_ID",
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Templates", href: "/templates" },
  { label: "Contact", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x";
  active: boolean;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, icon: "github", active: true },
  { label: "LinkedIn", href: "#", icon: "linkedin", active: false },
  { label: "X", href: "#", icon: "x", active: false },
];
