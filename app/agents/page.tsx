import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

/* ── Agent Colors (9 distinct muted tones on dark) ── */
const agentColors: Record<string, string> = {
  VOICE: "#6EC4A7",
  NARRATE: "#C5A44E",
  LISTEN: "#8B9DC3",
  PUBLISH: "#E07A5F",
  PILOT: "#D4A5C9",
  PROSPECT: "#E8B960",
  LEDGER: "#B8B8B8",
  COUNSEL: "#7ECFCF",
  RECRUIT: "#A888C4",
};

/* ── Agent Badges ── */
const agentBadges: Record<string, { label: string; color: string }> = {
  COUNSEL: { label: "Hub Agent", color: "var(--color-gold)" },
  RECRUIT: { label: "Coming Soon", color: "var(--color-text-dim)" },
  VOICE: { label: "\u20AC0.15/min", color: "var(--color-success)" },
};

/* ── Agent icon (inline SVG, reused per card) ── */
function AgentIcon({ name }: { name: string }) {
  const fill = agentColors[name] ?? "var(--color-gold)";
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke={fill} strokeWidth="1" opacity="0.4" />
      <circle cx="16" cy="16" r="4" fill={fill} opacity="0.8" />
    </svg>
  );
}

export default function AgentsPage() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow="VOLTAIRE AGENTS"
        headline="Nine agents. One subscription."
        subheadline="Marketing, sales, operations — handled. You focus on strategy."
        cta={{ label: "See pricing \u2192", href: "#pricing" }}
        secondaryCta={{ label: "Book a demo", href: "mailto:hello@voltaire.co" }}
      />

      {/* ── AGENT GRID ── */}
      <section style={{ padding: "var(--section-pad) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">The Nine Agents</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {copy.agents.map((agent, i) => {
              const badge = agentBadges[agent.name];
              return (
                <FadeIn key={agent.name} delay={i * 80}>
                  <div
                    className="card agent-card"
                    style={{ height: "100%", "--agent-color": agentColors[agent.name] } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <AgentIcon name={agent.name} />
                      <h3
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          letterSpacing: "0.12em",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {agent.name}
                      </h3>
                      {badge && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.55rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: badge.color,
                            border: `1px solid ${badge.color}`,
                            borderRadius: "var(--radius-sm)",
                            padding: "2px 8px",
                            marginLeft: "auto",
                            opacity: 0.8,
                          }}
                        >
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-title)",
                        fontSize: "1.25rem",
                        color: "var(--color-text-primary)",
                        marginBottom: 8,
                      }}
                    >
                      {agent.role}
                    </p>

                    <p
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}
                    >
                      {agent.description}
                    </p>

                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      Optimizes: {agent.metric}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">How It Works</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose your tier",
                description:
                  "Pick Essential, Pro, or Business. Each tier bundles the right agents for your stage. Scale up anytime.",
              },
              {
                step: "02",
                title: "Connect your tools",
                description:
                  "We integrate with your CRM, ad accounts, email provider, and analytics. Setup takes less than a day.",
              },
              {
                step: "03",
                title: "Agents activate",
                description:
                  "Your agents start working immediately. They coordinate through shared memory, learn from results, and compound over time.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 100}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "var(--color-gold)",
                      marginBottom: 16,
                    }}
                  >
                    STEP {item.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-title)",
                      fontSize: "1.35rem",
                      color: "var(--color-text-primary)",
                      marginBottom: 12,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">Pricing</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.pricing.tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 100}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: tier.highlighted
                      ? "1px solid var(--color-gold)"
                      : undefined,
                  }}
                >
                  {tier.highlighted && (
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--color-gold)",
                        marginBottom: 12,
                      }}
                    >
                      Most Popular
                    </p>
                  )}

                  <h3
                    style={{
                      fontFamily: "var(--font-title)",
                      fontSize: "1.5rem",
                      color: "var(--color-text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "2.2rem",
                        color: "var(--color-text-primary)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {tier.priceLabel}
                    </span>
                    {tier.price > 0 && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--color-text-dim)",
                          textTransform: "uppercase",
                        }}
                      >
                        /mo
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-text-dim)",
                        marginBottom: 8,
                      }}
                    >
                      Agents: {tier.agents.join(", ")}
                    </p>
                  </div>

                  <ul style={{ flex: 1, marginBottom: 24 }}>
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "var(--color-gold)",
                          }}
                        >
                          {"\u2713"}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:hello@voltaire.co"
                    className={tier.highlighted ? "btn-primary" : "btn-ghost"}
                    style={{ textAlign: "center", display: "block" }}
                  >
                    {tier.price > 0 ? "Get Started" : "Talk to Sales"} {"\u2192"}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENCY CTA ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <FadeIn>
            <p className="section-label mb-6">For Agencies</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                color: "var(--color-text-primary)",
                marginBottom: 16,
              }}
            >
              White-label the entire suite.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Rebrand Voltaire Agents as your own. Deploy it for your clients.
              Keep the margin. We handle the infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a href="mailto:hello@voltaire.co" className="btn-primary">
              Talk to us about white-label {"\u2192"}
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
