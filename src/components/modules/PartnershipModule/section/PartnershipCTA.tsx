import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function PartnershipCTA({
  title,
  description,
  primaryLabel = "Become a Partner",
  primaryHref = "#contact",
}: Props) {
  return (
    <div className="bg-card rounded-3xl p-8 border border-border mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2 max-w-2xl">{description}</p>
      </div>
      <a href={primaryHref}>
        <Button size="lg" className="cursor-pointer">
          {primaryLabel}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </a>
    </div>
  );
}
