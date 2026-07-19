import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import { figtree, schibsted } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        className={`${figtree.variable} ${schibsted.variable} min-h-screen bg-page text-ink font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
