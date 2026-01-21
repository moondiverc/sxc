"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  size: number;
  repeatDelay: number;
}

interface TwinklingStar {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [twinklingStars, setTwinklingStars] = useState<TwinklingStar[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 8; i++) {
        newStars.push({
          id: i,
          startX: Math.random() * 100,
          startY: Math.random() * 40,
          duration: 1.5 + Math.random() * 2,
          delay: Math.random() * 8,
          size: 2 + Math.random() * 2,
          repeatDelay: 8 + Math.random() * 4,
        });
      }
      setStars(newStars);
    };

    const generateTwinklingStars = () => {
      const newTwinklingStars: TwinklingStar[] = [];
      for (let i = 0; i < 50; i++) {
        newTwinklingStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: 1 + Math.random() * 2,
          duration: 2 + Math.random() * 3,
          delay: Math.random() * 2,
        });
      }
      setTwinklingStars(newTwinklingStars);
    };

    generateStars();
    generateTwinklingStars();
    const interval = setInterval(generateStars, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={`${star.id}-${star.delay}`}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, 150, 300],
            y: [0, 75, 150],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.repeatDelay,
            ease: "linear",
          }}>
          <div
            className="relative"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}>
            {/* Star head */}
            <div
              className="absolute rounded-full bg-primary shadow-lg"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 3}px hsl(var(--primary)), 0 0 ${star.size * 6}px hsl(var(--accent))`,
              }}
            />
            {/* Star tail */}
            <div
              className="absolute origin-right"
              style={{
                width: `${star.size * 25}px`,
                height: `${star.size * 0.5}px`,
                right: `${star.size}px`,
                top: `${star.size * 0.25}px`,
                background: `linear-gradient(to left, hsl(var(--primary)), transparent)`,
                transform: "rotate(-26.57deg)",
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Twinkling stars background */}
      {twinklingStars.map((star) => (
        <motion.div
          key={`twinkle-${star.id}`}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
