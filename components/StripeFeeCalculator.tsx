"use client";

import { useState } from "react";

export default function StripeFeeCalculator() {
  const [volume, setVolume] = useState(10000);

  const txCount = volume / 50; // assume €50 avg transaction
  const standardCost = volume * 0.029 + txCount * 0.3;
  const optimizedCost = volume * 0.008;
  const savings = standardCost - optimizedCost;

  const fmt = (n: number) =>
    `€${Math.round(n).toLocaleString("fr-FR")}`;

  return (
    <div>
      {/* Slider */}
      <div style={{ marginBottom: 40 }}>
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: 12 }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-text-dim)",
            }}
          >
            Monthly Volume
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.4rem",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            {fmt(volume)}
          </span>
        </div>

        <input
          type="range"
          min={1000}
          max={500000}
          step={1000}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "var(--color-gold)",
            cursor: "pointer",
          }}
        />

        <div
          className="flex justify-between"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "var(--color-text-dim)",
            marginTop: 6,
          }}
        >
          <span>€1,000</span>
          <span>€500,000</span>
        </div>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-2 gap-6" style={{ marginBottom: 32 }}>
        <div
          style={{
            background: "rgba(224,122,95,0.06)",
            border: "1px solid rgba(224,122,95,0.15)",
            borderRadius: "var(--radius-md)",
            padding: "24px 20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-text-dim)",
              marginBottom: 8,
            }}
          >
            What You Pay Now
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.6rem",
              color: "#E07A5F",
              letterSpacing: "-0.02em",
            }}
          >
            {fmt(standardCost)}/mo
          </p>
        </div>

        <div
          style={{
            background: "rgba(110,196,167,0.06)",
            border: "1px solid rgba(110,196,167,0.15)",
            borderRadius: "var(--radius-md)",
            padding: "24px 20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-text-dim)",
              marginBottom: 8,
            }}
          >
            With KeepMore
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.6rem",
              color: "#6EC4A7",
              letterSpacing: "-0.02em",
            }}
          >
            {fmt(optimizedCost)}/mo
          </p>
        </div>
      </div>

      {/* Savings callout */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-text-dim)",
            marginBottom: 6,
          }}
        >
          You are losing
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "2rem",
            color: "#E07A5F",
            letterSpacing: "-0.02em",
          }}
        >
          {fmt(savings)}/mo
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <a
          href="/studio"
          className="btn-primary"
          style={{ display: "inline-block" }}
        >
          Fix it in 20 minutes {"\u2192"}
        </a>
      </div>
    </div>
  );
}
