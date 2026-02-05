"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import type { PartnerLogo } from "../types";

type Props = {
  items: PartnerLogo[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  cardClassName?: string;
};

const speedToDuration = {
  slow: 42,
  normal: 28,
  fast: 18,
} as const;

type RowConfig = {
  direction: "left" | "right";
  speed: keyof typeof speedToDuration;
  delay: string;
};

export default function PartnerLogoCarousel({
  items,
  title = "",
  subtitle = "",
  className,
  cardClassName,
}: Props) {
  const duplicated = React.useMemo(() => [...items, ...items], [items]);

  const rows: RowConfig[] = [
    { direction: "left", speed: "normal", delay: "-6s" },
    { direction: "right", speed: "slow", delay: "-18s" },
    { direction: "left", speed: "fast", delay: "-10s" },
  ];

  return (
    <section className={cn("w-full py-10", className)}>
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          {title ? (
            typeof title === "string" ? (
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {title}
              </span>
            ) : (
              title
            )
          ) : null}

          {subtitle ? (
            typeof subtitle === "string" ? (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            ) : (
              subtitle
            )
          ) : null}
        </div>

        <div className="partner-marquee relative overflow-hidden rounded-2xl border bg-background">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex flex-col gap-5 py-8">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "partner-marquee-track flex w-max items-center gap-6",
                  row.direction === "left"
                    ? "partner-marquee-left"
                    : "partner-marquee-right",
                )}
                style={
                  {
                    ["--duration" as any]: `${speedToDuration[row.speed]}s`,
                    ["--delay" as any]: row.delay,
                  } as React.CSSProperties
                }
                aria-label={`Partner logos carousel row ${rowIndex + 1}`}
              >
                {duplicated.map((it, idx) => {
                  const card = (
                    <div
                      className={cn(
                        "group flex items-center justify-center rounded-xl border bg-card px-7 py-4 shadow-sm transition hover:shadow-md",
                        cardClassName,
                      )}
                      title={it.name}
                    >
                      <Image
                        src={it.logoSrc}
                        alt={it.name}
                        width={160}
                        height={64}
                        className={cn(
                          "h-10 w-auto object-contain",
                          "opacity-70 grayscale transition",
                          "group-hover:opacity-100 group-hover:grayscale-0",
                        )}
                        priority={rowIndex === 0 && idx < 8}
                      />
                    </div>
                  );

                  return (
                    <div
                      key={`${it.id}-${rowIndex}-${idx}`}
                      className="shrink-0"
                    >
                      {it.href ? (
                        <Link
                          href={it.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Buka situs ${it.name}`}
                          className="block"
                        >
                          {card}
                        </Link>
                      ) : (
                        card
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
