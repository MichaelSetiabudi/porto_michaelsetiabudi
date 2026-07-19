import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import { bricolage, instrument } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        className={`${bricolage.variable} ${instrument.variable} min-h-screen bg-page text-ink font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
