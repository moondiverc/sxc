import { Building2, Globe2, GraduationCap, Handshake, Cpu } from "lucide-react";
import type { Stakeholder } from "../types";

export const stakeholders: Stakeholder[] = [
  {
    key: "principal-tech-owner",
    title: "Principal Tech Owner",
    description: "Kolaborasi dengan pemilik teknologi utama untuk kurikulum & standar industri.",
    icon: Cpu,
  },
  {
    key: "government-partner",
    title: "Government & Impact Partner",
    description: "Bermitra dengan institusi publik untuk program berskala nasional dan dampak terukur.",
    icon: Building2,
  },
  {
    key: "industry-players",
    title: "Industry Players",
    description: "Kolaborasi dengan perusahaan untuk penyaluran talenta, project nyata, dan sertifikasi.",
    icon: Handshake,
  },
  {
    key: "universities",
    title: "Universities",
    description: "Sinergi dengan kampus untuk pembelajaran, riset, dan pengembangan talenta.",
    icon: GraduationCap,
  },
  {
    key: "community",
    title: "Community & Public Reach",
    description: "Menguatkan komunitas & awareness lewat kegiatan dan konten yang konsisten.",
    icon: Globe2,
  },
];
