import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

/** Headings & the name — a characterful grotesque; firm and distinctive. */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

/** Body & interface — a clean, readable sans. */
export const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
