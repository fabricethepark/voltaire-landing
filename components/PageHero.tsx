import FadeIn from "./FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  cta?: { label: string; href: string; variant?: "primary" | "ghost" };
  secondaryCta?: { label: string; href: string };
  fullHeight?: boolean;
}

export default function PageHero({
  eyebrow,
  headline,
  subheadline,
  cta,
  secondaryCta,
  fullHeight = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center px-6 ${
        fullHeight ? "min-h-screen" : "pt-40 pb-24"
      }`}
    >
      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(197,164,78,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {eyebrow && (
          <FadeIn>
            <p className="eyebrow mb-6">{eyebrow}</p>
          </FadeIn>
        )}

        <FadeIn delay={100}>
          <h1 className="hero-headline gold-glow mb-8">{headline}</h1>
        </FadeIn>

        {subheadline && (
          <FadeIn delay={200}>
            <p className="hero-sub mx-auto mb-10">{subheadline}</p>
          </FadeIn>
        )}

        {(cta || secondaryCta) && (
          <FadeIn delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {cta && (
                <a
                  href={cta.href}
                  className={cta.variant === "ghost" ? "btn-ghost" : "btn-primary"}
                >
                  {cta.label}
                </a>
              )}
              {secondaryCta && (
                <a href={secondaryCta.href} className="btn-ghost">
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
