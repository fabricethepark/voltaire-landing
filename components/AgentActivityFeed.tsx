"use client";

import { useEffect, useRef, useState } from "react";
import { copy } from "@/lib/copy";

export default function AgentActivityFeed() {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger-reveal each log line
          const timer = setInterval(() => {
            setVisibleCount((prev) => {
              if (prev >= copy.agentLogs.length) {
                clearInterval(timer);
                return prev;
              }
              return prev + 1;
            });
          }, 120);
          observer.disconnect();
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="terminal-feed">
      {copy.agentLogs.map((log, i) => (
        <div
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(-8px)",
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <span style={{ color: "var(--color-text-dim)" }}>
            [{log.time}]
          </span>{" "}
          <span
            style={{
              color: "var(--color-gold)",
              fontWeight: 600,
            }}
          >
            {log.agent}
          </span>{" "}
          <span style={{ color: "var(--color-text-dim)" }}>→</span>{" "}
          <span style={{ color: "var(--color-text-secondary)" }}>
            {log.action}
          </span>{" "}
          <span className={log.outcome}>
            {log.outcome === "success" ? "OK" : "..."}
          </span>
        </div>
      ))}
      <div style={{ marginTop: 4 }}>
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}
