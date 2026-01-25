import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function PartnershipHeader({
  eyebrow = "Partnership",
  title,
  highlight,
  description,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  const renderTitle = () => {
    if (!highlight) return title;
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className="text-primary">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <span className="text-primary text-sm font-semibold uppercase tracking-wider">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
        {renderTitle()}
      </h2>
      <p className="text-muted-foreground text-lg">{description}</p>
    </motion.div>
  );
}
