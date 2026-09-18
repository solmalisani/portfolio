export default function Footer() {
    return (
      <footer
        className="px-8 py-6 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="font-display text-xs" style={{ color: "var(--muted-foreground)" }}>
          © 2026 Sol Malisani
        </span>
        <span className="font-display text-xs" style={{ color: "var(--muted-foreground)" }}>
          All rights reserved
        </span>
      </footer>
    )
  }
