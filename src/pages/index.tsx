import Head from "next/head";
import Layout from "@/components/Layout";

// Placeholder home — replaced with the real hero in step 3.
export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Setiabudi</title>
      </Head>
      <Layout>
        <section className="wrap py-24 md:py-32">
          <p className="t-label mb-6 text-ink-3">Shell check</p>
          <h1 className="t-display max-w-[16ch] text-[clamp(2.5rem,6.6vw,5.5rem)]">
            Masthead, layout, and footer are in <span className="text-live">place.</span>
          </h1>
        </section>
      </Layout>
    </>
  );
}
