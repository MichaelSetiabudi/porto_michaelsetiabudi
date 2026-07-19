const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="wrap mt-24 md:mt-32">
      <div className="grid gap-10 border-t border-rule pb-12 pt-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="t-title text-xl text-ink">Michael Setiabudi</div>
          <div className="t-label mt-3 text-ink-3">
            Fullstack developer · Surabaya, ID
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <span className="t-label mb-1 text-ink-3">Contact</span>
          <a className="link text-ink-2 hover:text-ink" href="mailto:michaelsetiabudi@gmail.com">
            michaelsetiabudi@gmail.com
          </a>
          <a
            className="link text-ink-2 hover:text-ink"
            href="https://www.linkedin.com/in/michael-setiabudi-032090297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="link text-ink-2 hover:text-ink"
            href="https://github.com/MichaelSetiabudi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <span className="t-label mb-1 text-ink-3">Colophon</span>
          <span className="text-sm text-ink-2">Set in Archivo &amp; IBM Plex.</span>
          <span className="text-sm text-ink-2">Built with Next.js and Tailwind.</span>
        </div>
      </div>

      <div className="t-label flex flex-wrap items-center justify-between gap-4 border-t border-rule py-6 text-ink-3">
        <span>© {YEAR} Michael Setiabudi</span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-live" />
          Still in production
        </span>
      </div>
    </footer>
  );
}
