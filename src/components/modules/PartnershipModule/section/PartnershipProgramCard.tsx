import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  partner: string;
  description: string;
  href: string;
  tags: string[];
}

export default function PartnershipProgramCard({
  title,
  partner,
  description,
  href,
  tags,
}: Props) {
  return (
    <a
      href={href}
      className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all flex flex-col"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">By {partner}</p>
          <h3 className="text-lg font-semibold text-foreground mt-1">{title}</h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
        {description}
      </p>

      {!!tags.length && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
