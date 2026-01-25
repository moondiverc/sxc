import type { LucideIcon } from "lucide-react";

export type StakeholderKey =
  | "principal-tech-owner"
  | "government-partner"
  | "industry-players"
  | "universities"
  | "community";

export interface Stakeholder {
  key: StakeholderKey;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PartnershipProgramDTO {
  id: string;
  title: string;
  partner: string;
  description: string;
  href?: string;
  tags?: string[];
}
