"use client";

export default function LetterForm() {
  return (
    <form
      action="#"
      style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto" }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        style={{
          flex: 1,
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 6,
          padding: "12px 16px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.82rem",
          color: "var(--color-text-primary)",
          outline: "none",
          transition: "border-color 0.2s ease",
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = "var(--color-gold)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "var(--color-border)")
        }
      />
      <button type="submit" className="btn-primary">
        Subscribe →
      </button>
    </form>
  );
}
