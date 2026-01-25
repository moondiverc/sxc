import StakeholderCard from "./StakeholderCard";
import type { Stakeholder } from "../types";

interface Props {
  items: Stakeholder[];
}

export default function StakeholderGrid({ items }: Props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <StakeholderCard key={item.key} item={item} />
      ))}
    </div>
  );
}
