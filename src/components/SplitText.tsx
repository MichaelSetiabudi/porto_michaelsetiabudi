import { CSSProperties, Fragment } from "react";

/**
 * Splits a line into animatable parts. Each part carries its index in --i, so
 * the CSS decides the stagger — nothing here knows about timing.
 *
 * The parts are decorative: the readable copy belongs in a `.sr-only` sibling
 * and the wrapper around these should be aria-hidden, or a screen reader will
 * spell the heading out one glyph at a time.
 */
export default function SplitText({
  text,
  by = "char",
  start = 0,
  scroll = false,
  className = "",
}: {
  text: string;
  by?: "char" | "word";
  /** First --i value, so several lines can share one continuous stagger. */
  start?: number;
  /** Drive from scroll position instead of page load. */
  scroll?: boolean;
  className?: string;
}) {
  const parts = by === "char" ? Array.from(text) : text.split(" ");

  return (
    <span className={`mask ${scroll ? "mask-scroll" : ""} ${className}`}>
      {parts.map((part, i) => (
        <Fragment key={`${part}-${i}`}>
          <span
            className="mask-part"
            style={{ "--i": start + i } as CSSProperties}
          >
            {part === " " ? " " : part}
          </span>
          {/* A real space between words, outside the animated part, so the
              line still wraps where it should. */}
          {by === "word" && i < parts.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
