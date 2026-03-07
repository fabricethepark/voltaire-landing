import Link from "next/link";
import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const agentColors: Record<string, string> = {
  SCOUT: "#6EC4A7",
  NARRATE: "#C5A44E",
  CLOSE: "#E07A5F",
  PRICE: "#8B9DC3",
  BUILD: "#B8B8B8",
  LEARN: "#D4A5C9",
};

/* ── Agent icon (inline SVG, reused per card) ── */
function AgentIcon({ name }: { name: string }) {
  const colors = agentColors;
  const fill = colors[name] ?? "var(--color-gold)";
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke={fill} strokeWidth="1" opacity="0.4" />
      <circle cx="16" cy="16" r="4" fill={fill} opacity="0.8" />
    </svg>
  );
}

export default function OSPage() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow="VOLTAIRE OS"
        headline="Six agents. One operating system."
        subheadline="The exact stack Voltaire uses to run itself. White-label it to your agency or deploy it in your own infrastructure."
        cta={{ label: "Start with one agent \u2192", href: "#pricing" }}
      />

      {/* ── AGENT GRID ── */}
      <section style={{ padding: "var(--section-pad) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">The Six Agents</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.agents.map((agent, i) => (
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
            ))}
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
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <FadeIn>
            <p className="section-label mb-10">How It Works</p>
          </FadeIn>
          <FadeIn delay={100}>
            <p
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "var(--color-text-primary)",
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              Each agent has a SOUL.md file that defines its identity, constraints, and objectives.
              They share memory. They coordinate autonomously. You make the calls.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Agents read from a shared context layer, execute tasks through tool integrations
              (n8n, Make, custom APIs), and write outcomes back. LEARN monitors everything
              and feeds insights to the others. The system compounds.
            </p>
          </FadeIn>
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
                    border:
                      tier.name === "Full Suite"
                        ? "1px solid var(--color-gold)"
                        : undefined,
                  }}
                >
                  {tier.name === "Full Suite" && (
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
                      {"\u20AC"}{tier.price}
                    </span>
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
                    className={tier.name === "Full Suite" ? "btn-primary" : "btn-ghost"}
                    style={{ textAlign: "center", display: "block" }}
                  >
                    Get Started {"\u2192"}
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
              Rebrand Voltaire OS as your own. Deploy it for your clients.
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
