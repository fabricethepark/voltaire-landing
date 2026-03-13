import { copy } from "@/lib/copy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import LetterForm from "@/components/LetterForm";

export default function LetterPage() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow={copy.letter.eyebrow}
        headline={copy.letter.headline}
        subheadline={copy.letter.sub}
      />

      {/* ── SUBSCRIBE ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-narrow)" }}
        >
          <FadeIn>
            <p className="section-label mb-6 text-center">Subscribe</p>
          </FadeIn>
          <FadeIn delay={100}>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.92rem",
                lineHeight: 1.7,
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              One issue per week. What we learned running a company on six AI
              agents. No noise, no recycled takes.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <LetterForm />
          </FadeIn>
        </div>
      </section>

      {/* ── ISSUES ARCHIVE ── */}
      <section
        style={{
          padding: "var(--section-pad) 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-max)" }}
        >
          <FadeIn>
            <p className="section-label mb-16 text-center">Archive</p>
          </FadeIn>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {copy.letter.issues.map((issue, i) => (
              <FadeIn key={issue.number} delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "4rem 1fr",
                    gap: "1.5rem",
                    padding: "2rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--color-accent)",
                        marginBottom: 4,
                      }}
                    >
                      #{issue.number}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      {issue.date}
                    </p>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-title)",
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        fontWeight: 400,
                        color: "var(--color-text-primary)",
                        lineHeight: 1.25,
                        marginBottom: 10,
                      }}
                    >
                      {issue.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {issue.excerpt}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
