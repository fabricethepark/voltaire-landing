import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import LiveMRRCounter from "@/components/LiveMRRCounter";
import AgentActivityFeed from "@/components/AgentActivityFeed";

const kpis = [
  { label: "Monthly Recurring Revenue", value: `\u20AC${copy.stats.mrr.toLocaleString("fr-FR")}`, mono: true },
  { label: "Active Clients", value: String(copy.stats.clientCount), mono: true },
  { label: "Agent Actions This Week", value: String(copy.stats.weeklyActions), mono: true },
  { label: "Avg LTV (estimated)", value: "\u20AC2,400", mono: true },
];

export default function DashboardPage() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow="LIVE DASHBOARD"
        headline="The machine, in numbers."
        subheadline="Everything Voltaire earns and every action its agents take."
      />

      {/* ── MRR HERO ── */}
      <section
        style={{
          padding: "60px 0",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <LiveMRRCounter value={copy.stats.mrr} />
          </FadeIn>
        </div>
      </section>

      {/* ── KPI CARDS ── */}
      <section style={{ padding: "var(--section-pad) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <FadeIn key={kpi.label} delay={i * 80}>
                <div className="card text-center" style={{ padding: "28px 20px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.8rem",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--color-text-dim)",
                    }}
                  >
                    {kpi.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT PERFORMANCE TABLE ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-10">Agent Performance</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    {["Agent", "Role", "Key Metric"].map((h) => (
                      <th
                        key={h}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.62rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "var(--color-text-dim)",
                          textAlign: "left",
                          padding: "14px 20px",
                          fontWeight: 400,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.agents.map((agent) => (
                    <tr
                      key={agent.name}
                      style={{
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <td
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          letterSpacing: "0.1em",
                          color: "var(--color-gold)",
                          padding: "14px 20px",
                        }}
                      >
                        {agent.name}
                      </td>
                      <td
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--color-text-primary)",
                          padding: "14px 20px",
                        }}
                      >
                        {agent.role}
                      </td>
                      <td
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--color-text-secondary)",
                          padding: "14px 20px",
                        }}
                      >
                        {agent.metric}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── LIVE ACTIVITY FEED ── */}
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

      {/* ── LAST UPDATED ── */}
      <section style={{ padding: "24px 0" }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-max)" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--color-text-dim)",
            }}
          >
            Static preview {"\u2014"} live data coming soon
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
