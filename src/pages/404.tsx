import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — Michael Setiabudi"
        description="This page doesn't exist."
      />
      <Header />
      <main className="wrap py-24 sm:py-32">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.02em]">
          Page not found
        </h1>
        <p className="mt-4 text-ink-2">
          That page doesn&rsquo;t exist.{" "}
          <a href="/" className="u-link">
            Go back home
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
