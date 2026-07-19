import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "Index", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Masthead() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="wrap">
      <div className="flex items-baseline justify-between border-b border-rule py-5 md:py-6">
        <Link
          href="/"
          className="t-label text-ink transition-colors hover:text-live"
        >
          Michael Setiabudi
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-baseline gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`t-label inline-flex items-center gap-2 transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-live"
                  />
                )}
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle className="ml-2" />
        </nav>

        {/* Mobile control — toggle lives inside the overlay to stay clear at 320px */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="t-label text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="wrap flex items-baseline justify-between py-5">
            <span className="t-label text-ink">Michael Setiabudi</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="t-label text-ink"
              autoFocus
            >
              Close
            </button>
          </div>
          <nav className="wrap mt-10 flex flex-col gap-7" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="t-title flex items-center gap-3 text-[2rem] text-ink"
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-live"
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="wrap mt-auto border-t border-rule py-6">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
