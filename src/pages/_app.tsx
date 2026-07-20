import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { bricolage, instrument } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  // Reveal-on-scroll (progressive enhancement; JS-gated in CSS).
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div
        className={`${bricolage.variable} ${instrument.variable} min-h-screen bg-page text-ink font-sans`}
      >
        <div className="grain" aria-hidden="true" />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
