"use client";
import { useEffect, useState } from "react";

type CounterProps = {
  max: number;
  suffix?: string;
  duration?: number; 
  start?: boolean; 
};

export default function AnimatedCounter({
  max,
  suffix = "",
  duration = 1,
  start = false,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 3);
      setCount(Math.floor(progress * max));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, max, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}
