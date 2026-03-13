"use client";

import { useEffect, useRef, useState } from "react";

interface LiveMRRCounterProps {
  value: number;
}

export default function LiveMRRCounter({ value }: LiveMRRCounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart
            const eased = 1 - Math.pow(1 - progress, 4);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 400,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        {"$"}{display.toLocaleString("en-US")}
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="pulse-dot" />
        <span className="eyebrow" style={{ fontSize: "0.6rem" }}>
          Monthly Recurring Revenue
        </span>
      </div>
    </div>
  );
}
