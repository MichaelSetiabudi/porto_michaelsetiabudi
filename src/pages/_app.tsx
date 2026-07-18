import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import { archivo, plexSans, plexMono } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} min-h-screen bg-paper text-ink font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
