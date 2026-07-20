import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      id="top"
      className="wrap flex items-center justify-between gap-4 py-5 sm:py-6"
    >
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
          <a href="#work" className="ul">
            Work
          </a>
          <a href="#about" className="ul">
            About
          </a>
          <a href="#contact" className="ul">
            Contact
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
