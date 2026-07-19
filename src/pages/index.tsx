import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Colophon from "@/components/Colophon";
import WorkIndex from "@/components/WorkIndex";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Setiabudi — Fullstack developer, Surabaya</title>
        <meta
          name="description"
          content="Michael Setiabudi is a fullstack developer in Surabaya who builds back-of-house systems that stay in production — from a university's student information system to the tools three Marriott hotels run on."
        />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="wrap pb-16 pt-12 md:pb-24 md:pt-20">
          <div className="grid items-start gap-x-[clamp(28px,5vw,76px)] gap-y-12 md:grid-cols-[8.2fr_3.8fr]">
            <div>
              <p className="rise t-label mb-7 flex items-center gap-3 text-ink-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-live" />
                Fullstack developer
                <span aria-hidden="true" className="h-px w-11 bg-rule-strong" />
                Surabaya, ID
              </p>

              <h1 className="rise rise-1 t-display max-w-[15ch] text-[clamp(2.5rem,6.6vw,5.55rem)]">
                I build back-of-house software that stays in{" "}
                <span className="text-live">production.</span>
              </h1>

              <p className="rise rise-2 mt-8 max-w-measure text-[clamp(1.02rem,1.2vw,1.16rem)] leading-relaxed text-ink-2">
                Fullstack developer in Surabaya. For my thesis I rebuilt my
                university&rsquo;s student information system &mdash; a{" "}
                <b className="font-semibold text-ink">Laravel</b> monolith &mdash;
                into a <b className="font-semibold text-ink">Flutter</b> and{" "}
                <b className="font-semibold text-ink">NestJS</b> application,{" "}
                <span className="live-metric">284</span> REST endpoints across{" "}
                <span className="live-metric">45</span> modules, now running at{" "}
                <a
                  className="link text-ink"
                  href="https://sim.istts.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sim.istts.ac.id
                </a>
                . Before that, over a six-month internship, I built the
                promotion-screen CMS and the barcode meal system that three
                Marriott hotels still run on.
              </p>
            </div>

            <div className="rise rise-3 md:pt-2">
              <Colophon />
            </div>
          </div>
        </section>

        {/* Selected work — the index */}
        <section className="wrap">
          <div className="flex items-baseline justify-between border-t border-rule pb-3 pt-6">
            <h2 className="t-label text-ink-3">Selected work — the index</h2>
            <Link href="/work" className="t-label link text-ink-2 hover:text-ink">
              All work →
            </Link>
          </div>
          <WorkIndex projects={projects} />
          <p className="t-mono mt-5 text-[11px] leading-relaxed text-ink-3">
            <span className="text-live">↳</span>&nbsp; The two internal hotel
            systems are described, never linked or shown unredacted.
          </p>
        </section>

        {/* About + Contact teasers */}
        <section className="wrap mt-24 grid gap-12 md:mt-32 md:grid-cols-2">
          <div className="border-t border-rule pt-6">
            <h2 className="t-label mb-5 text-ink-3">About</h2>
            <p className="max-w-measure text-lg leading-relaxed text-ink">
              I lean toward the backend, and toward the unglamorous work of moving
              an old system onto a new one without breaking the thing people
              depend on.
            </p>
            <Link
              href="/about"
              className="link t-label mt-6 inline-block text-ink-2 hover:text-ink"
            >
              Read more →
            </Link>
          </div>

          <div className="border-t border-rule pt-6">
            <h2 className="t-label mb-5 text-ink-3">Contact</h2>
            <p className="max-w-measure text-lg leading-relaxed text-ink">
              I finish my degree in July 2026 and I&rsquo;m open to fullstack
              roles. Email is the surest way to reach me.
            </p>
            <Link
              href="/contact"
              className="link t-label mt-6 inline-block text-ink-2 hover:text-ink"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
