"use client";

import { useState } from "react";

type GradeResult = {
  grade: string;
  score: number;
  issues: string[];
  recommendation: string;
};

const gradeColors: Record<string, string> = {
  A: "#6EC4A7",
  B: "#C5A44E",
  C: "#E0A85F",
  D: "#E07A5F",
};

export default function SiteScoutGrader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GradeResult | null>(null);

  const handleGrade = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);

    // Simulate agent processing delay
    await new Promise((r) => setTimeout(r, 2200));

    // Mock result — will connect to /api/grade-site later
    setResult({
      grade: "C",
      score: 58,
      issues: [
        "No mobile optimization detected",
        "Page load time exceeds 4 seconds",
        "Missing Google Business Profile link",
      ],
      recommendation: "SiteScout can rebuild this site in 48 hours.",
    });
    setLoading(false);
  };

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        padding: "28px 24px",
      }}
    >
      {/* Input */}
      <div className="flex gap-3" style={{ marginBottom: 20 }}>
        <input
          type="url"
          placeholder="https://your-business.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGrade()}
          style={{
            flex: 1,
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm, 6px)",
            padding: "12px 16px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            color: "var(--color-text-primary)",
            outline: "none",
          }}
        />
        <button
          onClick={handleGrade}
          disabled={loading || !url.trim()}
          className="btn-primary"
          style={{
            whiteSpace: "nowrap",
            opacity: loading || !url.trim() ? 0.5 : 1,
            cursor: loading || !url.trim() ? "not-allowed" : "pointer",
          }}
        >
          Grade my site {"\u2192"}
        </button>
      </div>

      {/* Loading state */}
      {loading && (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
          <p style={{ color: "var(--color-accent)", marginBottom: 8 }}>
            <span className="terminal-cursor" style={{ marginRight: 8 }}>
              {"\u2588"}
            </span>
            Our agent is reviewing your site...
          </p>
          <p
            style={{
              color: "var(--color-text-dim)",
              fontSize: "0.68rem",
              paddingLeft: 20,
            }}
          >
            Running 47-point audit
          </p>
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div>
          {/* Grade */}
          <div className="flex items-center gap-4" style={{ marginBottom: 20 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "var(--radius-md)",
                background: `${gradeColors[result.grade]}15`,
                border: `2px solid ${gradeColors[result.grade]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-title)",
                fontSize: "2rem",
                color: gradeColors[result.grade],
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {result.grade}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-text-dim)",
                  marginBottom: 4,
                }}
              >
                Score: {result.score}/100
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.85rem",
                }}
              >
                {result.recommendation}
              </p>
            </div>
          </div>

          {/* Issues */}
          <div style={{ marginBottom: 20 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-text-dim)",
                marginBottom: 10,
              }}
            >
              Issues Found
            </p>
            {result.issues.map((issue) => (
              <div
                key={issue}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    color: gradeColors[result.grade],
                    fontSize: "0.7rem",
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {"\u2022"}
                </span>
                <span
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                  }}
                >
                  {issue}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/local?service=sitescout"
            className="btn-primary"
            style={{ display: "block", textAlign: "center" }}
          >
            We fix this for {"\u20AC"}599 {"\u2192"}
          </a>
        </div>
      )}
    </div>
  );
}
