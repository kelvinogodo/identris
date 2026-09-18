import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "ebonyi-state-lgsc-biometric-enrollment",
    title: "Biometric Enrollment System for the Ebonyi State Local Government Service Commission",
    client: "Ebonyi State Local Government Service Commission",
    summary:
      "A biometric enrollment platform covering all 13 Local Government Areas in Ebonyi State, capturing fingerprint and photo data in the field and reconciling it centrally.",
    problem:
      "The Commission needed a verified record of local government staff across 13 LGAs, many with unreliable internet access and no existing digital enrollment process. Any system had to work in the field, on real government hardware, without room for lost or duplicated records.",
    solution:
      "Identris designed and deployed an end-to-end enrollment system: SecuGen fingerprint scanners and Logitech cameras at each enrollment point, a central admin system for the Commission to review and manage records, and Starlink connectivity at sites without reliable fixed-line access. The system was built to keep working when a connection dropped mid-enrollment, not just when everything went right.",
    stack: [
      "SecuGen fingerprint scanners",
      "Logitech cameras",
      "Starlink connectivity",
      "Cloud-hosted admin backend",
      "Offline-first field enrollment workflow",
    ],
    result: [
      "Deployed and operating across all 13 LGAs in Ebonyi State",
      "Fingerprint and photo capture running on real government hardware in the field",
      "Central admin system giving the Commission a single source of truth on enrolled staff",
      "Identris also built and now maintains the Commission's official website",
    ],
    stats: [
      { label: "LGAs covered", value: "13" },
      { label: "Capture modes", value: "Fingerprint + Photo" },
      { label: "Connectivity", value: "Starlink-enabled" },
    ],
    featured: true,
    image: "/case-studies/nigeria-coat-of-arms.svg",
  },
];
