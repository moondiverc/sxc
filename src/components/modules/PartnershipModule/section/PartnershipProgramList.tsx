import PartnershipProgramCard from "./PartnershipProgramCard";
import { PartnershipProgram } from "../domain/PartnershipProgram";
import type { PartnershipProgramDTO } from "../types";

interface Props {
  items: PartnershipProgramDTO[];
}

export default function PartnershipProgramList({ items }: Props) {
  const programs = items.map((dto) => new PartnershipProgram(dto).toCardViewModel());

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {programs.map((p) => (
        <PartnershipProgramCard
          key={p.id}
          title={p.title}
          partner={p.partner}
          description={p.description}
          href={p.href}
          tags={p.tags}
        />
      ))}
    </div>
  );
}
