import Link from "next/link";
import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import AgentActivityFeed from "@/components/AgentActivityFeed";
import LiveMRRCounter from "@/components/LiveMRRCounter";

/* ── SVG Icons (inline, minimal) ── */
function CpuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = { cpu: CpuIcon, map: MapIcon, package: PackageIcon };

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "clamp(120px, 18vw, 200px)", paddingBottom: "clamp(80px, 12vw, 140px)" }}
      >
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "min(900px, 90vw)",
            height: "700px",
            background:
              "radial-gradient(ellipse at center, rgba(212,56,44,0.04) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <FadeIn>
            <p className="eyebrow mb-5">{copy.hero.eyebrow}</p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="hero-headline accent-glow mb-6">
              {copy.hero.headline.map((line, li) => (
                <span key={li} style={{ display: "block" }}>
                  {line.split(" ").map((word, i) => (
                    <span key={i}>
                      <span
                        className="word-reveal"
                        style={{ animationDelay: `${(li * 3 + i) * 120 + 100}ms` }}
                      >
                        {word}
                      </span>
                      {" "}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </FadeIn>

          <div style={{ marginBottom: "2.5rem" }}>
            {copy.hero.taglines.map((line, i) => (
              <FadeIn key={i} delay={220 + i * 90}>
                <p
                  style={{
                    fontFamily: "var(--font-title)",
                    fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em",
                    color:
                      i === copy.hero.taglines.length - 1
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)",
                  }}
                >
                  {line}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={360}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href={copy.hero.ctaPrimary.href} className="btn-primary">
                {copy.hero.ctaPrimary.label} <span style={{ marginLeft: 4 }}>{"\u2192"}</span>
              </Link>
              {copy.hero.ctaSecondary && (
                <Link href={copy.hero.ctaSecondary.href} className="btn-ghost">
                  {copy.hero.ctaSecondary.label}
                </Link>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={800}>
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, var(--color-text-dim), transparent)",
            }}
          />
        </FadeIn>
      </section>

      {/* ── LIVE STATS BAR ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          className="mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
          style={{ maxWidth: "var(--content-max)" }}
        >
          <FadeIn>
            <LiveMRRCounter value={copy.stats.mrr} />
          </FadeIn>
          <FadeIn delay={80}>
            <StatItem value={String(copy.stats.agentCount)} label="Agents Running" />
          </FadeIn>
          <FadeIn delay={160}>
            <StatItem value={String(copy.stats.clientCount)} label="Clients Live" />
          </FadeIn>
          <FadeIn delay={240}>
            <StatItem value={String(copy.stats.weeklyActions)} label="Actions This Week" />
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT VOLTAIRE IS ── */}
      <section style={{ padding: "var(--section-pad) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">Three Product Lines</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            {copy.productLines.map((product) => {
              const Icon = iconMap[product.icon];
              return (
                <FadeIn key={product.name}>
                  <Link href={product.href} className="card block group" style={{ textDecoration: "none" }}>
                    <div style={{ color: "var(--color-accent)", marginBottom: 20 }}>
                      {Icon && <Icon />}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-title)",
                        fontSize: "1.4rem",
                        color: "var(--color-text-primary)",
                        marginBottom: 12,
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        marginBottom: 20,
                      }}
                    >
                      {product.description}
                    </p>
                    <span className="arrow-link">
                      Explore {product.name.replace("Voltaire ", "")} {"\u2192"}
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LIVE AGENT ACTIVITY ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-10">Live Agent Activity</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "28px 32px",
                overflow: "hidden",
              }}
            >
              <AgentActivityFeed />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── THESIS STATEMENT ── */}
      <section style={{ padding: "var(--section-pad) 0" }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <FadeIn>
            <blockquote
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "var(--color-text-primary)",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              {"\u201C"}Nine agents. One subscription. Marketing, sales, operations — your
              business runs while you focus on what matters. That is the promise of
              Voltaire.{"\u201D"}
            </blockquote>
          </FadeIn>
          <FadeIn delay={150}>
            <p
              style={{
                marginTop: 24,
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--color-text-dim)",
              }}
            >
              From The Voltaire Letter
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ── Stat Item ── */
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.3rem",
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "var(--color-text-dim)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
