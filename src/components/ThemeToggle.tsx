import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Night shift" : "Daylight";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className={`t-label inline-flex items-center gap-2 text-ink-3 transition-colors hover:text-ink ${className}`}
    >
      {/* Label reflects React state (default light on the server) and is
          corrected on mount; the actual colours are already right pre-paint via
          the _document script, so suppress the one-frame text diff warning. */}
      <span aria-hidden="true" className="text-live" suppressHydrationWarning>
        {theme === "dark" ? "◐" : "◑"}
      </span>
      <span suppressHydrationWarning>{label}</span>
    </button>
  );
}
