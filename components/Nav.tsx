"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/lib/copy";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape + lock body scroll
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || menuOpen ? "rgba(6,6,6,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px) saturate(1.2)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px) saturate(1.2)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(30,30,30,0.8)"
              : "1px solid transparent",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 py-4"
          style={{ maxWidth: "var(--content-max)" }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "1.15rem",
              fontWeight: 500,
              color: "var(--color-gold)",
              letterSpacing: "0.12em",
              textDecoration: "none",
            }}
          >
            {copy.nav.logo}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {copy.nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.88rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link
              href="/os"
              className="btn-ghost hidden md:inline-flex"
              style={{ fontSize: "0.75rem" }}
            >
              {copy.nav.cta} <span style={{ marginLeft: 4 }}>→</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1,
                  background: "var(--color-text-primary)",
                  transformOrigin: "center",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1,
                  background: "var(--color-text-primary)",
                  transition: "opacity 0.25s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1,
                  background: "var(--color-text-primary)",
                  transformOrigin: "center",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: "rgba(6,6,6,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          paddingTop: "80px",
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="flex flex-col px-8 pt-8 gap-0">
          {copy.nav.links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(2rem, 10vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-text-primary)",
                textDecoration: "none",
                lineHeight: 1.2,
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid var(--color-border)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${i * 60 + 80}ms, transform 0.4s ease ${i * 60 + 80}ms`,
                display: "block",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className="px-8 mt-10"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.4s ease ${copy.nav.links.length * 60 + 120}ms, transform 0.4s ease ${copy.nav.links.length * 60 + 120}ms`,
          }}
        >
          <Link href="/os" className="btn-primary" style={{ display: "inline-block" }}>
            {copy.nav.cta} →
          </Link>
        </div>

        <div
          className="px-8 mt-auto pb-12"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-text-dim)",
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s ease ${copy.nav.links.length * 60 + 200}ms`,
          }}
        >
          {copy.footer.right}
        </div>
      </div>
    </>
  );
}
