import type { Stakeholder } from "../types";

interface Props {
  item: Stakeholder;
}

export default function StakeholderCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  );
}
