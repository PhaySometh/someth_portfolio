"use client";
import React, { useState, useEffect } from "react";

const STATS_DATA = [
  {
    key: "experience",
    label: "Years Experience in Coding",
    value: 3,
    suffix: "+",
  },
  { key: "projects", label: "Projects Completed", value: 50, suffix: "+" },
  {
    key: "clients",
    label: "GitHub Repositories",
    value: 45,
    suffix: "+",
    format: "k",
  },
  {
    key: "contributions",
    label: "GitHub contributions in 2025",
    value: 885,
    suffix: "+",
    format: "k",
  },
  {
    key: "followers",
    label: "GitHub Followers",
    value: 10,
    suffix: "+",
    format: "k",
  },
];

export default function StatsSection() {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    contributions: 0,
    followers: 0,
  });

  // Stats count-up animation effect
  useEffect(() => {
    if (!statsAnimated) {
      // Start animation after a short delay
      const startDelay = setTimeout(() => {
        setStatsAnimated(true);

        // Animate each stat
        STATS_DATA.forEach((stat) => {
          const duration = 2000; // 2 seconds
          const startTime = Date.now();
          const startValue = 0;
          const endValue = stat.value;

          const animateValue = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(
              startValue + (endValue - startValue) * easeOutQuart
            );

            setAnimatedStats((prev) => ({
              ...prev,
              [stat.key]: currentValue,
            }));

            if (progress < 1) {
              requestAnimationFrame(animateValue);
            }
          };

          requestAnimationFrame(animateValue);
        });
      }, 500); // Start after 0.5 second delay

      return () => clearTimeout(startDelay);
    }
  }, [statsAnimated]);

  // Helper function to format stat values
  const formatStatValue = (value: number, format?: string, suffix?: string) => {
    let formattedValue = value.toString();

    if (format === "k" && value >= 1000) {
      formattedValue = (value / 1000).toFixed(0) + "k";
    }

    return formattedValue + (suffix || "");
  };

  return (
    <section className="bg-white ">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
          {STATS_DATA.map((stat, index) => (
            <div
              key={stat.key}
              className="text-center transform transition-all duration-500 ease-out"
              style={{
                opacity: statsAnimated ? 1 : 0,
                transform: statsAnimated ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-2">
                {formatStatValue(
                  animatedStats[stat.key as keyof typeof animatedStats],
                  stat.format,
                  stat.suffix
                )}
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-gray-600 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
