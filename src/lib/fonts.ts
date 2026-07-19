import { Figtree, Schibsted_Grotesk } from "next/font/google";

/** Body & interface — a humanist sans that stays comfortable in paragraphs. */
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

/** Headings & the name — a contemporary grotesque with quiet character. */
export const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});
