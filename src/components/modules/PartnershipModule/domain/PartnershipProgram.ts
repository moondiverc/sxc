import type { PartnershipProgramDTO } from "../types";

export class PartnershipProgram {
  constructor(private readonly dto: PartnershipProgramDTO) {}

  get id() {
    return this.dto.id;
  }

  get title() {
    return this.dto.title;
  }

  get partner() {
    return this.dto.partner;
  }

  get description() {
    return this.dto.description;
  }

  get href() {
    return this.dto.href ?? "#";
  }

  get tags() {
    return this.dto.tags ?? [];
  }

  toCardViewModel() {
    return {
      id: this.id,
      title: this.title,
      partner: this.partner,
      description: this.description,
      href: this.href,
      tags: this.tags,
    };
  }
}
