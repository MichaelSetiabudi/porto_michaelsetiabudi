import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light or dark theme"
      className="rounded-md border border-line-2 px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
    >
      <span suppressHydrationWarning>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
