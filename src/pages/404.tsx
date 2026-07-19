import Link from "next/link";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Not found — Michael Setiabudi"
        description="This page doesn't exist or has moved."
      />
      <Layout>
        <section className="wrap py-24 md:py-36">
          <p className="t-label mb-6 text-ink-3">Error · 404</p>
          <h1 className="t-display max-w-[15ch] text-[clamp(2.5rem,7vw,5.5rem)]">
            This page isn&rsquo;t in{" "}
            <span className="text-live">production.</span>
          </h1>
          <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-2">
            The page you&rsquo;re after doesn&rsquo;t exist or has moved.
          </p>
          <Link
            href="/"
            className="link t-label mt-8 inline-block text-ink-2 hover:text-ink"
          >
            ← Back to the index
          </Link>
        </section>
      </Layout>
    </>
  );
}
