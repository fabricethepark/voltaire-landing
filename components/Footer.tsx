import { copy } from "@/lib/copy";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "48px 0",
      }}
    >
      <div
        className="mx-auto px-6 flex items-center justify-between flex-wrap gap-4"
        style={{ maxWidth: "var(--content-max)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "var(--color-text-dim)",
            textTransform: "uppercase",
          }}
        >
          {copy.footer.left}
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--color-text-secondary)",
          }}
        >
          {copy.footer.right}
        </p>
      </div>
    </footer>
  );
}
