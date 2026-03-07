import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const formatColors: Record<string, string> = {
  PDF: "rgba(197,164,78,0.15)",
  Template: "rgba(110,196,167,0.15)",
  "ClawMart Skill": "rgba(139,157,195,0.15)",
};

const formatTextColors: Record<string, string> = {
  PDF: "var(--color-gold)",
  Template: "#6EC4A7",
  "ClawMart Skill": "#8B9DC3",
};

export default function StudioPage() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow="VOLTAIRE STUDIO"
        headline="Take the tools we use. Build what we built."
        subheadline="Guides, templates, and automations. Packaged from what actually worked."
        cta={{ label: "Browse products \u2192", href: "#products" }}
      />

      {/* ── PRODUCT GRID ── */}
      <section
        id="products"
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max)" }}>
          <FadeIn>
            <p className="section-label mb-16 text-center">Products</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.studioProducts.map((product, i) => (
              <FadeIn key={product.name} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Format tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        padding: "3px 8px",
                        borderRadius: 4,
                        background: formatColors[product.format] ?? "rgba(255,255,255,0.06)",
                        color: formatTextColors[product.format] ?? "var(--color-text-dim)",
                      }}
                    >
                      {product.format}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-title)",
                      fontSize: "1.25rem",
                      color: "var(--color-text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: 20,
                    }}
                  >
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.1rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {product.price}
                    </span>
                    <a
                      href={product.href}
                      className="arrow-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download {"\u2192"}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER STATEMENT ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <FadeIn>
            <blockquote
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "var(--color-text-primary)",
                fontStyle: "italic",
              }}
            >
              Everything here is what Voltaire built for itself first.
              We packaged it when it worked.
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
