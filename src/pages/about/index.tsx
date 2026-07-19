import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

const NARRATIVE = [
  "I'm finishing a Bachelor of Informatics at Institut Sains dan Teknologi Terpadu Surabaya (iSTTS), from June 2022 to July 2026, with a 3.52 GPA. My thesis is the largest thing I've built: a full reengineering of the university's student information system from a single Laravel application into a Flutter and NestJS one, now live for students, lecturers, and management.",
  "I spent six months as an IT intern at Four Points by Sheraton. Not all of it was code — I ran the on-site support for guests and staff, and I sat in requirement and progress reviews with the IT Manager. The two systems I built there were handed to each hotel's in-house team, and they're still running. The software I ship tends to outlast the reason I was there.",
  "I work alone or in small teams. I write PHP, TypeScript, Dart, Kotlin, and SQL, and I'm most at home wiring a REST API to a database and a client that has to work on someone's actual phone.",
];

const CAPABILITIES: [string, string[]][] = [
  ["Languages", ["PHP", "JavaScript", "TypeScript", "Dart", "Kotlin", "C#", "SQL"]],
  ["Backend", ["NestJS", "FastAPI", "Laravel", "Express.js"]],
  ["Frontend & mobile", ["React.js", "Vue.js", "Flutter", "Tailwind CSS"]],
  ["Databases", ["MySQL", "MongoDB"]],
  [
    "Systems & infrastructure",
    ["REST APIs", "Keycloak SSO", "Firebase Cloud Messaging", "Git", "AWS"],
  ],
];

const CERTS: [string, string][] = [
  [
    "HackerRank Skills Certification",
    "SQL (Basic, Intermediate, Advanced) · REST API (Intermediate) · Frontend Developer (React)",
  ],
  ["AWS Academy Cloud Architecting", "Course completion"],
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Michael Setiabudi</title>
        <meta
          name="description"
          content="Michael Setiabudi is a fullstack developer in Surabaya finishing a Bachelor of Informatics at iSTTS. He builds and migrates the back-of-house systems institutions run on."
        />
      </Head>

      <Layout>
        {/* Lead */}
        <section className="wrap pb-16 pt-12 md:pt-20">
          <p className="rise t-label mb-8 text-ink-3">About</p>
          <div className="grid gap-x-[clamp(28px,5vw,72px)] gap-y-12 md:grid-cols-[1fr_auto]">
            <div className="rise rise-1 max-w-measure">
              <p className="text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.3] text-ink">
                I&rsquo;m Michael Setiabudi, a fullstack developer in Surabaya.
                Most of what I build is the software institutions run day to day
                and rarely think about &mdash; student records, the screens in a
                hotel lobby, the check-in at a staff canteen. I lean toward the
                backend, and toward the unglamorous work of moving an old system
                onto a new one without breaking the thing people depend on.
              </p>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-2">
                {NARRATIVE.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <figure className="rise rise-2 md:w-[300px]">
              <div className="relative aspect-[4/5] overflow-hidden border border-rule bg-surface">
                <Image
                  src="/MichaelSetiabudi.jpg"
                  alt="Michael Setiabudi"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover grayscale"
                  priority
                />
              </div>
              <figcaption className="t-label mt-3 text-ink-3">
                Michael Setiabudi · Surabaya
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Capabilities */}
        <section className="wrap mt-8">
          <div className="border-t border-rule pt-6">
            <h2 className="t-label text-ink-3">Capabilities</h2>
            <p className="mt-3 max-w-measure text-ink-2">
              I don&rsquo;t rate myself out of ten. Here&rsquo;s what I actually
              build with.
            </p>
          </div>
          <dl className="mt-6">
            {CAPABILITIES.map(([group, items]) => (
              <div
                key={group}
                className="grid gap-x-8 gap-y-3 border-t border-rule py-6 md:grid-cols-[220px_1fr]"
              >
                <dt className="t-label text-ink">{group}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {items.map((it) => (
                      <li key={it} className="t-mono text-sm text-ink-2">
                        {it}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Certifications */}
        <section className="wrap mt-20">
          <h2 className="t-label border-t border-rule pt-6 text-ink-3">
            Certifications
          </h2>
          <ul className="mt-2">
            {CERTS.map(([name, detail]) => (
              <li
                key={name}
                className="grid gap-x-8 gap-y-1 border-t border-rule py-6 md:grid-cols-[1fr_1.4fr]"
              >
                <span className="t-title text-lg text-ink">{name}</span>
                <span className="text-ink-2">{detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-16">
            <Link
              href="/contact"
              className="link t-label inline-block text-ink-2 hover:text-ink"
            >
              Get in touch →
            </Link>
          </p>
        </section>
      </Layout>
    </>
  );
}
