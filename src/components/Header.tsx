import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [lifted, setLifted] = useState(false);

  // Mark the section the reader is currently in, and settle the header onto
  // the page once it leaves the top.
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((el) => io.observe(el));

    const onScroll = () => setLifted(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header id="top" className="header-bar" data-lifted={lifted}>
      <div className="wrap flex items-center justify-between gap-4 py-5 sm:py-6">
        <a
          href="#top"
          className="font-display text-[17px] font-bold tracking-[-0.01em] text-ink"
        >
          Michael Setiabudi
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          <nav
            className="hidden gap-6 text-[15px] text-ink-2 sm:flex"
            aria-label="Sections"
          >
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="navlink"
                data-active={active === n.id}
                aria-current={active === n.id ? "true" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
