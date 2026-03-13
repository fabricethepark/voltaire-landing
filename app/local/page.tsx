import Link from "next/link";
import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import StripeFeeCalculator from "@/components/StripeFeeCalculator";
import SiteScoutGrader from "@/components/SiteScoutGrader";

const steps = [
  { number: "01", title: "We find you", description: "Our agent scans Google Maps and directories for businesses with weak or missing web presence." },
  { number: "02", title: "We grade you", description: "An AI audit scores your site A through D. Instant results. No sales call required." },
  { number: "03", title: "We build it", description: "A new site in 48 hours. Mobile-first. SEO-ready. You preview it before you pay." },
  { number: "04", title: "You decide", description: "No pressure. No contract. If the site works for you, we launch it. If not, you keep the audit." },
];

export default function LocalPage() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow="VOLTAIRE LOCAL"
        headline="Your local business, run by AI."
        subheadline="We handle the digital operations. You handle the craft."
        cta={{ label: "Grade my site free \u2192", href: "#grader" }}
      />

      {/* ── SITESCOUT SECTION ── */}
      <section
        id="grader"
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="section-label mb-6">SiteScout</p>
                <h2
                  style={{
                    fontFamily: "var(--font-title)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  We find your business on Google. We grade your web presence. We build a new site if you need one.
                </h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  Our agent scrapes your online footprint, runs a 47-point audit, and texts you
                  a preview link with a rebuilt site. No call. No commitment. Just the work.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <SiteScoutGrader />
            </FadeIn>
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

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 100}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--color-accent)",
                      letterSpacing: "0.15em",
                      marginBottom: 12,
                    }}
                  >
                    {step.number}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-title)",
                      fontSize: "1.3rem",
                      color: "var(--color-text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">Services</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.localProducts.map((product, i) => (
              <FadeIn key={product.name} delay={i * 80}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3
                      style={{
                        fontFamily: "var(--font-title)",
                        fontSize: "1.2rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {product.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        color: "var(--color-accent)",
                        whiteSpace: "nowrap",
                        marginLeft: 12,
                      }}
                    >
                      {product.price}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRIPE FEE CALCULATOR ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-narrow)" }}>
          <FadeIn>
            <p className="section-label mb-6 text-center">KeepMore</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "var(--color-text-primary)",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              You are overpaying Stripe.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.92rem",
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              Drag the slider. See how much you could save.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <StripeFeeCalculator />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
