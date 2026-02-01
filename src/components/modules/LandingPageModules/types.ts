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

export type PartnerLogo = {
  id: string
  name: string
  logoSrc: string     
  href?: string       
}
export type TestimonialLogo = {
  id: string
  quote : string
  author: string
  imageSrc: string
  role : string     
  href?: string       
}
