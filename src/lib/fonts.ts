import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * Display — Archivo (variable, with the width axis loaded so headlines can be
 * set slightly expanded, like an equipment nameplate).
 */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-display",
});

/** Body — IBM Plex Sans. Engineering-documentation pedigree; not Inter. */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

/** Data / labels — IBM Plex Mono. Tabular metadata: stack, status, years. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const fontVariables = `${archivo.variable} ${plexSans.variable} ${plexMono.variable}`;
