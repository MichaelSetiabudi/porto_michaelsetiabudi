import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { bricolage, instrument } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  const progress = useRef<HTMLDivElement>(null);

  // Reveal-on-scroll (progressive enhancement; JS-gated in CSS).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // Siblings inside a [data-stagger] group come in one after another rather
    // than all at once — the delay is read from --i in the CSS transition.
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const target = child.classList.contains("reveal")
          ? (child as HTMLElement)
          : child.querySelector<HTMLElement>(".reveal");
        target?.style.setProperty("--i", String(i));
      });
    });

    // Where scroll timelines exist the reveals are driven entirely by CSS, so
    // the observer would only fight it — adding `.in` there would replace the
    // scroll-mapped duration with a fixed one.
    if (CSS.supports("animation-timeline", "view()")) return;

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

  // Magnetic hover: marked elements lean toward the pointer and spring back.
  // Pointer-only — on a touch screen there is no cursor to lean toward, and it
  // would just fire on tap.
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const MAX = 14; // px; past this the effect stops reading as a lean
    const teardown = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    ).map((el) => {
      const strength = Number(el.dataset.magnetic) || 0.3;
      let raf = 0;
      let x = 0;
      let y = 0;

      const paint = () => {
        raf = 0;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      };
      const schedule = () => {
        if (!raf) raf = requestAnimationFrame(paint);
      };
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x = (e.clientX - (r.left + r.width / 2)) * strength;
        y = (e.clientY - (r.top + r.height / 2)) * strength;
        const d = Math.hypot(x, y);
        if (d > MAX) {
          x = (x / d) * MAX;
          y = (y / d) * MAX;
        }
        schedule();
      };
      const onLeave = () => {
        x = 0;
        y = 0;
        schedule();
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      el.addEventListener("blur", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.removeEventListener("blur", onLeave);
        if (raf) cancelAnimationFrame(raf);
      };
    });

    return () => teardown.forEach((fn) => fn());
  }, []);

  // Reading progress. rAF-throttled so the scroll handler stays cheap.
  useEffect(() => {
    const bar = progress.current;
    if (!bar) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.setProperty("--p", String(p));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div
        className={`${bricolage.variable} ${instrument.variable} min-h-screen bg-page text-ink font-sans`}
      >
        <div ref={progress} className="progress" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
