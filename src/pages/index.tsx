import { Fragment, ReactNode } from "react";
import Image from "next/image";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, moreProjects, CONTACT } from "@/data/projects";

/* Every section is a two-column band: a sticky label on the left, content on
   the right. That gives the page a spine and lets the content use the full
   screen width instead of stacking in one narrow centred column. */
function Section({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`grid gap-x-12 gap-y-6 border-t border-line pt-8 lg:grid-cols-[minmax(160px,210px)_minmax(0,1fr)] lg:gap-x-16 ${className}`}
    >
      <h2
        id={id}
        className="reveal flex scroll-mt-6 items-center gap-2.5 self-start font-display text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink-3 lg:sticky lg:top-8"
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}

const SKILLS: [string, string[]][] = [
  ["Languages", ["PHP", "JavaScript", "TypeScript", "Dart", "Kotlin", "C#", "SQL"]],
  ["Backend", ["NestJS", "FastAPI", "Laravel", "Express.js"]],
  ["Frontend & mobile", ["React.js", "Vue.js", "Flutter", "Tailwind CSS"]],
  ["Databases", ["MySQL", "MongoDB"]],
  [
    "Tools",
    ["Git", "REST APIs", "Keycloak SSO", "Firebase Cloud Messaging", "AWS"],
  ],
];

// Short factual figures, shown as a row under the About narrative.
const FACTS: [string, string][] = [
  ["Based in", "Surabaya, Indonesia"],
  ["Degree", "Informatics, iSTTS"],
  ["GPA", "3.52 / 4.00"],
  ["Graduating", "2026"],
];

// Dated entries only.
const BACKGROUND: {
  period: string;
  title: string;
  org: string;
  note: string;
  link?: { label: string; href: string };
}[] = [
  {
    period: "Aug 2025 – Jan 2026",
    title: "IT Intern — Fullstack Developer & IT Support",
    org: "Four Points by Sheraton Tunjungan Plaza, PT Pakuwon Jati · Surabaya",
    note: "Built the TV promotion CMS and the canteen barcode system listed above. Also handled day-to-day IT support for guests and staff, and reviewed requirements and progress with the IT Manager.",
  },
  {
    period: "2022 – 2026",
    title: "Bachelor of Informatics",
    org: "Institut Sains dan Teknologi Terpadu Surabaya",
    note: "GPA 3.52 out of 4.00. My thesis is the student information system now running at sim.istts.ac.id.",
  },
  {
    period: "2025",
    title: "Community service — Thanksgiving for TK Pelangi Kristus",
    org: "Institut Sains dan Teknologi Terpadu Surabaya",
    note: "A campus community service programme: a Thanksgiving event for the children of TK Pelangi Kristus.",
    link: {
      label: "Certificate",
      href: "https://drive.google.com/drive/folders/1v4cp2o1gjV_daKgDAEc2dY-p0tNSe5xP?usp=sharing",
    },
  },
];

// Only the certifications that back the fullstack claim. The rest of the
// folder (Dicoding, CodeSignal and others) is reachable through the link.
const CERTIFICATIONS: { issuer: string; items: string[] }[] = [
  {
    issuer: "HackerRank",
    items: [
      "SQL (Basic)",
      "SQL (Intermediate)",
      "SQL (Advanced)",
      "REST API (Intermediate)",
      "Frontend Developer (React)",
    ],
  },
  {
    issuer: "Simplilearn",
    items: ["Introduction to MongoDB", "SQL Injection for Beginners"],
  },
];

const CERT_FOLDER =
  "https://drive.google.com/drive/folders/141O-UNPU5ln-Ds2pPgWjW4zAcPdJNKTM?usp=sharing";

export default function Home() {
  return (
    <>
      <Seo
        title="Michael Setiabudi — Fullstack Developer"
        description="Fullstack developer in Surabaya. Web and mobile applications, from the database to the interface. Informatics graduate of iSTTS."
      />
      <Header />

      <main>
        <div className="wrap">
          {/* ---------- Hero ---------- */}
          <section className="relative pb-16 pt-4 sm:pb-20 sm:pt-8">
            <div className="glow" aria-hidden="true" />
            <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-[46rem] flex-1">
                <p className="rise d1 mb-7 inline-flex items-center gap-2.5 rounded-full border border-line-2 px-3.5 py-1.5 text-[0.82rem] font-medium text-ink-2">
                  <span className="live-dot" aria-hidden="true" />
                  Open to fullstack roles
                </p>
                <h1 className="rise d2 font-display text-[clamp(2.6rem,7vw,6.4rem)] font-extrabold leading-[0.96] tracking-[-0.035em]">
                  Michael
                  <br />
                  Setiabudi
                </h1>
                <p className="rise d3 mt-6 max-w-[30ch] font-display text-[clamp(1.15rem,2vw,1.65rem)] font-semibold leading-[1.2]">
                  Fullstack developer —{" "}
                  <span className="text-accent">web and mobile</span>.
                </p>
                <p className="rise d4 mt-5 max-w-[54ch] text-ink-2">
                  Informatics graduate of iSTTS, based in Surabaya. I build the
                  database, the API and the interface. Most recently a student
                  information system for my university and two internal systems
                  for a hotel group.
                </p>
                <div className="rise d5 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-semibold">
                  <a
                    className="ul"
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="ul"
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className="ul" href={`mailto:${CONTACT.email}`}>
                    Email
                  </a>
                  <span className="inline-flex items-center gap-2 text-ink-2">
                    <span className="font-medium">CV</span>
                    <a className="ul" href={CONTACT.cv.id} download>
                      ID
                    </a>
                    <span aria-hidden="true" className="text-line-2">
                      /
                    </span>
                    <a className="ul" href={CONTACT.cv.en} download>
                      EN
                    </a>
                  </span>
                </div>
              </div>

              <div className="rise d1 relative shrink-0 self-start lg:self-end">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3.5 -left-3.5 h-full w-full rounded-2xl"
                  style={{ border: "1.5px solid var(--accent)", opacity: 0.4 }}
                />
                <div className="relative h-[262px] w-[212px] overflow-hidden rounded-2xl border border-line bg-surface sm:h-[330px] sm:w-[266px] lg:h-[386px] lg:w-[312px] xl:h-[452px] xl:w-[366px]">
                  <Image
                    src="/ms_pic.jpeg"
                    alt="Michael Setiabudi"
                    fill
                    sizes="(max-width: 640px) 212px, (max-width: 1024px) 266px, (max-width: 1280px) 312px, 366px"
                    className="object-cover object-[center_10%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Selected work ---------- */}
          <Section id="work" label="Selected work">
            <ul>
              {projects.map((p, i) => (
                <li
                  key={p.title}
                  className="row reveal group -mx-3 px-3 sm:-mx-5 sm:px-5"
                >
                  <div className="grid gap-x-10 gap-y-3 py-7 sm:py-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                    <div className="flex gap-4">
                      <span className="row-num mt-2 shrink-0 font-display text-[0.78rem] font-bold text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="row-title font-display text-[clamp(1.35rem,2.4vw,1.95rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[0.84rem] font-medium text-ink-3">
                          {p.context}
                        </p>
                      </div>
                    </div>

                    <div className="max-w-[58ch] lg:pt-1">
                      <p className="text-ink-2">{p.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.86rem]">
                        <span className="font-medium text-ink-3">{p.tech}</span>
                        {p.links.length > 0 ? (
                          <>
                            <span aria-hidden="true" className="text-line-2">
                              |
                            </span>
                            {p.links.map((l, j) => (
                              <Fragment key={l.href}>
                                {j > 0 && (
                                  <span aria-hidden="true" className="text-line-2">
                                    ·
                                  </span>
                                )}
                                <a
                                  className="ul font-semibold"
                                  href={l.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {l.label} ↗
                                </a>
                              </Fragment>
                            ))}
                          </>
                        ) : (
                          <>
                            <span aria-hidden="true" className="text-line-2">
                              |
                            </span>
                            <span className="text-ink-3">{p.internalNote}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Public repositories, as a plain list under the same heading */}
            <div className="reveal mt-10 border-t border-line pt-6">
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink-3">
                Also on GitHub
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-2.5">
                {moreProjects.map((m) => (
                  <li key={m.href} className="text-[0.95rem]">
                    <a
                      className="ul font-semibold"
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {m.title}
                    </a>
                    <span className="ml-2 text-[0.82rem] text-ink-3">
                      {m.tech}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.92rem]">
                <a
                  className="ul font-semibold"
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  All repositories →
                </a>
              </p>
            </div>
          </Section>

          {/* ---------- About: narrative, then the plain figures ---------- */}
          <Section id="about" label="About" className="mt-20 sm:mt-24">
            <div className="reveal max-w-[60ch] space-y-5">
              <p className="font-display text-[clamp(1.25rem,2.3vw,1.85rem)] font-semibold leading-[1.3] tracking-[-0.015em]">
                I am a fullstack developer in Surabaya. I build the database, the
                API and the interface.
              </p>
              <p className="text-ink-2">
                On the server I work in NestJS, FastAPI, Laravel and Express; on
                the client in React, Vue and Flutter, with MySQL and MongoDB
                behind them.
              </p>
              <p className="text-ink-2">
                The student information system was my thesis. Before release it
                went through 34 test scenarios and a usability study with 276
                respondents.
              </p>
            </div>

            <dl className="reveal mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
              {FACTS.map(([label, value]) => (
                <div key={label} className="border-t border-line pt-4">
                  <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink-3">
                    {label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.05rem] font-bold leading-snug">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* ---------- Background: dated entries, then credentials ---------- */}
          <Section label="Background" className="mt-20 sm:mt-24">
            <ul>
              {BACKGROUND.map((b) => (
                <li key={b.title} className="reveal border-t border-line">
                  <div className="grid gap-x-10 gap-y-3 py-7 lg:grid-cols-[minmax(0,180px)_minmax(0,1fr)_minmax(0,1.1fr)]">
                    <p className="row-num text-[0.82rem] font-medium text-ink-3 lg:pt-2">
                      {b.period}
                    </p>
                    <div>
                      <h3 className="font-display text-[clamp(1.1rem,1.7vw,1.35rem)] font-bold leading-snug tracking-[-0.015em]">
                        {b.title}
                      </h3>
                      <p className="mt-1.5 max-w-[42ch] text-[0.9rem] text-ink-3">
                        {b.org}
                      </p>
                    </div>
                    <div className="max-w-[56ch] lg:pt-1">
                      <p className="text-ink-2">{b.note}</p>
                      {b.link && (
                        <p className="mt-3 text-[0.88rem]">
                          <a
                            className="ul font-semibold"
                            href={b.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {b.link.label} ↗
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          {/* ---------- Skills: one row per category, technologies as tags ---------- */}
          <Section label="Skills" className="mt-20 sm:mt-24">
            <dl>
              {SKILLS.map(([label, items]) => (
                <div
                  key={label}
                  className="reveal grid gap-x-10 gap-y-3.5 border-t border-line py-6 sm:grid-cols-[minmax(120px,158px)_minmax(0,1fr)]"
                >
                  <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink-3 sm:pt-2">
                    {label}
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* ---------- Certifications: assessed credentials, per issuer ---------- */}
          <Section label="Certifications" className="mt-20 sm:mt-24">
            <dl>
              {CERTIFICATIONS.map(({ issuer, items }) => (
                <div
                  key={issuer}
                  className="reveal grid gap-x-10 gap-y-4 border-t border-line py-7 sm:grid-cols-[minmax(120px,158px)_minmax(0,1fr)]"
                >
                  <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink-3 sm:pt-1">
                    {issuer}
                  </dt>
                  <dd className="flex flex-wrap gap-x-8 gap-y-4">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="border-l border-line-2 pl-4 font-display text-[0.98rem] font-bold leading-snug"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="reveal mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-line pt-6">
              <p className="max-w-[62ch] text-[0.92rem] text-ink-2">
                Further certificates — Dicoding, CodeSignal and others — are in
                the same folder.
              </p>
              <a
                className="ul text-[0.95rem] font-semibold"
                href={CERT_FOLDER}
                target="_blank"
                rel="noopener noreferrer"
              >
                View all certificates ↗
              </a>
            </div>
          </Section>
        </div>

        {/* ---------- Contact: full-bleed closing band ---------- */}
        {/* overflow-clip keeps the ambient glow inside the band — without it the
            glow extends past the footer and adds phantom scroll height. */}
        <section
          id="contact"
          className="mt-24 scroll-mt-0 overflow-clip border-t border-line bg-surface sm:mt-28"
        >
          <div className="wrap relative pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pt-28">
            <div
              className="glow"
              aria-hidden="true"
              style={{
                insetBlockStart: "auto",
                insetBlockEnd: "-220px",
                insetInlineEnd: "auto",
                insetInlineStart: "-180px",
              }}
            />

            <div className="reveal flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <h2 className="flex items-center gap-2.5 font-display text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink-3">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                Contact
              </h2>
              <p className="inline-flex items-center gap-2.5 text-[0.82rem] font-medium text-ink-2">
                <span className="live-dot" aria-hidden="true" />
                Open to fullstack roles · Surabaya, Indonesia
              </p>
            </div>

            <p className="reveal mt-10 max-w-[16ch] font-display text-[clamp(2.1rem,6vw,4.6rem)] font-extrabold leading-[1.0] tracking-[-0.035em] sm:mt-12">
              Looking for a{" "}
              <span className="text-accent">fullstack&nbsp;role</span>.
            </p>

            <p className="reveal mt-8 max-w-[52ch] text-ink-2">
              Email is the best way to reach me — I read everything and reply.
            </p>

            <a
              className="sweep reveal mt-10 font-display text-[clamp(1.25rem,3.9vw,3rem)] font-bold tracking-[-0.025em] text-ink [overflow-wrap:anywhere] sm:mt-12"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>

            <div className="reveal mt-14 grid gap-x-20 gap-y-12 border-t border-line pt-10 sm:mt-16 lg:grid-cols-[1fr_auto]">
              {/* Social — secondary links, kept as quiet text rows */}
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-3">
                  Find me
                </p>
                <ul className="mt-4 max-w-md">
                  {[
                    { label: "LinkedIn", handle: "michael-setiabudi", href: CONTACT.linkedin },
                    { label: "GitHub", handle: "MichaelSetiabudi", href: CONTACT.github },
                  ].map((s) => (
                    <li key={s.label} className="row">
                      <a
                        className="group flex items-baseline justify-between gap-6 py-4"
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="row-title font-display text-[1.15rem] font-bold">
                          {s.label}
                        </span>
                        <span className="flex items-baseline gap-3 text-[0.9rem] text-ink-3">
                          {s.handle}
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          >
                            ↗
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CV — the primary action. Two languages, one document. */}
              <div className="lg:min-w-[340px]">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-3">
                  Grab my CV
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a className="dl" href={CONTACT.cv.id} download>
                    <span>
                      <span className="dl-lang block">Indonesia</span>
                      <span className="mt-1 block text-[0.74rem] uppercase tracking-[0.12em] text-ink-3">
                        PDF
                      </span>
                    </span>
                    <span className="dl-arrow" aria-hidden="true">
                      ↓
                    </span>
                  </a>
                  <a className="dl" href={CONTACT.cv.en} download>
                    <span>
                      <span className="dl-lang block">English</span>
                      <span className="mt-1 block text-[0.74rem] uppercase tracking-[0.12em] text-ink-3">
                        PDF
                      </span>
                    </span>
                    <span className="dl-arrow" aria-hidden="true">
                      ↓
                    </span>
                  </a>
                </div>
                <p className="mt-3 text-[0.82rem] text-ink-3">
                  Same résumé in two languages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
