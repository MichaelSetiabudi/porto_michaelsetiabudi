import { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "@/context/ThemeContext";

type WithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  /**
   * The new theme opens as a circle from the button that asked for it, rather
   * than cross-fading the whole page. flushSync is required: the View
   * Transition callback has to leave the DOM already updated when it returns,
   * and React would otherwise batch the state change until after.
   */
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const doc = document as WithViewTransition;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduce) {
      toggleTheme();
      return;
    }

    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    doc
      .startViewTransition(() => {
        flushSync(() => toggleTheme());
      })
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 720,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        /* transition skipped (tab hidden, another one in flight) — theme is
           already applied, so there is nothing to recover */
      });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-magnetic="0.32"
      aria-label="Toggle light or dark theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-2 text-ink-2 transition-colors hover:border-accent hover:text-accent"
    >
      <span
        key={theme}
        suppressHydrationWarning
        className="icon-swap block h-[18px] w-[18px]"
      >
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
          </svg>
        )}
      </span>
    </button>
  );
}
