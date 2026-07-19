import Head from "next/head";
import Layout from "@/components/Layout";
import WorkIndex from "@/components/WorkIndex";
import { productionWork, personalWork } from "@/data/projects";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work — Michael Setiabudi</title>
        <meta
          name="description"
          content="A register of what Michael Setiabudi has built — a university student information system, two internal hotel systems, and personal projects — grouped by whether it's still in production."
        />
      </Head>

      <Layout>
        <section className="wrap pb-14 pt-12 md:pt-20">
          <p className="rise t-label mb-6 text-ink-3">The index</p>
          <h1 className="rise rise-1 t-display text-[clamp(2.5rem,7vw,5.5rem)]">
            Work.
          </h1>
          <p className="rise rise-2 mt-7 max-w-measure text-[clamp(1.02rem,1.2vw,1.16rem)] leading-relaxed text-ink-2">
            A register of what I&rsquo;ve built &mdash; grouped by whether it&rsquo;s
            still in production. Each entry is a short account of what existed
            before, what I built, and what changed.
          </p>
        </section>

        <section className="wrap">
          <h2 className="t-label mb-1 mt-4 text-ink-3">In production</h2>
          <WorkIndex projects={productionWork} detailed />
          <p className="t-mono mt-5 text-[11px] leading-relaxed text-ink-3">
            <span className="text-live">↳</span>&nbsp; The two internal hotel
            systems are described, never linked or shown unredacted.
          </p>

          <h2 className="t-label mb-1 mt-20 text-ink-3">Personal work</h2>
          <WorkIndex projects={personalWork} detailed />
        </section>
      </Layout>
    </>
  );
}
