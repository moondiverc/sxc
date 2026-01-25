import type { PartnershipProgramDTO } from "../types";

export const partnershipPrograms: PartnershipProgramDTO[] = [
  {
    id: "program-1",
    title: "Career Readiness Program",
    partner: "Partner Consortium",
    description:
      "Program intensif untuk mempersiapkan talenta dengan skill in-demand, sertifikasi, dan capstone project.",
    tags: ["Intensive", "Certification", "Capstone"],
    href: "#",
  },
  {
    id: "program-2",
    title: "Scholarship Coding Camp",
    partner: "Foundation Partner",
    description:
      "Beasiswa pelatihan teknologi dengan kombinasi skill teknis dan pendukung (soft skills & readiness).",
    tags: ["Scholarship", "Mentoring"],
    href: "#",
  },
  {
    id: "program-3",
    title: "Back-End Academy",
    partner: "Cloud Provider Partner",
    description:
      "Pelatihan back-end terstruktur: fundamental, praktik industri, dan penguatan portofolio.",
    tags: ["Backend", "Cloud"],
    href: "#",
  },
];
