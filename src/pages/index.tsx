import { Fragment, ReactNode } from "react";
import Image from "next/image";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, moreProjects, CONTACT } from "@/data/projects";

function SectionLabel({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="flex scroll-mt-8 items-center gap-2.5 font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-ink-3"
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </h2>
  );
}

const SKILLS: [string, string][] = [
  ["Languages", "PHP, JavaScript, TypeScript, Dart, Kotlin, C#, SQL"],
  ["Backend", "NestJS, FastAPI, Laravel, Express.js"],
  ["Frontend & mobile", "React.js, Vue.js, Flutter, Tailwind CSS"],
  ["Databases", "MySQL, MongoDB"],
  ["Tools", "Git, REST APIs, Keycloak SSO, Firebase Cloud Messaging, AWS"],
];

const CREDENTIALS: [string, string][] = [
  [
    "Bachelor of Informatics",
    "Institut Sains dan Teknologi Terpadu Surabaya · June 2022 – July 2026 · GPA 3.52 / 4.00",
  ],
  [
    "HackerRank Skills Certification",
    "SQL (Basic, Intermediate, Advanced), REST API (Intermediate), Frontend Developer (React)",
  ],
  ["AWS Academy Cloud Architecting", "Certificate of completion, 60 hours"],
];

export default function Home() {
  return (
    <>
      <Seo
        title="Michael Setiabudi — Fullstack Developer"
        description="Fullstack developer in Surabaya building web and mobile apps, backend to interface. Informatics graduate from iSTTS, open to fullstack roles."
      />
      <Header />

      <main>
        <div className="wrap">
          {/* Hero */}
          <section className="relative pt-6 sm:pt-10">
            <div className="glow" aria-hidden="true" />
            <div className="flex flex-col-reverse gap-9 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <div className="max-w-[36rem]">
                <p className="rise d1 mb-6 inline-flex items-center gap-2.5 rounded-full border border-line-2 px-3.5 py-1.5 text-[0.82rem] font-medium text-ink-2">
                  <span className="live-dot" aria-hidden="true" />
                  Open to fullstack roles
                </p>
                <h1 className="rise d2 font-display text-[clamp(2.7rem,6.4vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                  Michael Setiabudi
                </h1>
                <p className="rise d3 mt-5 max-w-[24ch] font-display text-[clamp(1.2rem,2.1vw,1.6rem)] font-semibold leading-[1.18] text-ink">
                  Fullstack developer — <span className="text-accent">web and mobile</span>, backend to interface.
                </p>
                <p className="rise d4 mt-5 max-w-[46ch] text-ink-2">
                  Informatics graduate from iSTTS in Surabaya. I&rsquo;ve shipped a
                  university student portal, internal tools for a hotel group, and
                  a handful of personal projects.
                </p>
                <div className="rise d5 mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] font-semibold">
                  <a className="ul" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a className="ul" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="ul" href={`mailto:${CONTACT.email}`}>Email</a>
                  <a className="ul" href={CONTACT.cv}>Download CV</a>
                </div>
              </div>

              <div className="rise d1 relative shrink-0 self-center sm:self-center">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 h-full w-full rounded-2xl"
                  style={{ border: "1.5px solid var(--accent)", opacity: 0.45 }}
                />
                <div className="relative h-[210px] w-[172px] overflow-hidden rounded-2xl border border-line bg-surface sm:h-[262px] sm:w-[212px]">
                  <Image
                    src="/ms_pic.jpeg"
                    alt="Michael Setiabudi"
                    fill
                    sizes="212px"
                    className="object-cover object-[center_12%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Work */}
          <section className="mt-20 sm:mt-24">
            <div className="reveal">
              <SectionLabel id="work">Selected work</SectionLabel>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className="proj-card reveal flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7"
                  style={{ transitionDelay: `${(i % 2) * 70}ms` }}
                >
                  <h3 className="font-display text-[1.4rem] font-bold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[0.85rem] font-medium text-ink-3">
                    {p.context}
                  </p>
                  <p className="mt-3 text-ink-2">{p.description}</p>
                  <p className="mt-4 text-[0.85rem] font-medium text-ink-2">
                    {p.tech}
                  </p>
                  <div className="mt-auto pt-5">
                    {p.links.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.92rem] font-semibold">
                        {p.links.map((l, j) => (
                          <Fragment key={l.href}>
                            {j > 0 && (
                              <span aria-hidden="true" className="text-line-2">
                                ·
                              </span>
                            )}
                            <a className="ul" href={l.href} target="_blank" rel="noopener noreferrer">
                              {l.label} ↗
                            </a>
                          </Fragment>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[0.9rem] text-ink-3">{p.internalNote}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* More projects */}
          <section className="mt-16 sm:mt-20">
            <div className="reveal">
              <SectionLabel>More projects</SectionLabel>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {moreProjects.map((m, i) => (
                <a
                  key={m.href}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-card reveal group flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-5 py-4"
                  style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                >
                  <span>
                    <span className="block font-display font-bold text-ink">
                      {m.title}
                    </span>
                    <span className="text-[0.82rem] text-ink-3">{m.tech}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-ink-3 transition-colors group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <p className="reveal mt-5 text-sm">
              <a className="ul font-semibold" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                See everything on GitHub →
              </a>
            </p>
          </section>

          {/* About */}
          <section className="reveal mt-16 sm:mt-20">
            <SectionLabel id="about">About</SectionLabel>
            <div className="mt-5 max-w-measure space-y-4">
              <p>
                I&rsquo;m a fullstack developer based in Surabaya, an Informatics
                graduate from iSTTS with a 3.52 GPA. I work across the stack —
                NestJS, FastAPI, Laravel and Express on the server, React, Vue and
                Flutter on the client.
              </p>
              <p>
                My thesis, the student information system, went through 34 test
                scenarios and a usability study with 276 people before it shipped.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="reveal mt-16 sm:mt-20">
            <SectionLabel>Experience</SectionLabel>
            <div className="mt-5 max-w-measure">
              <h3 className="font-display text-[1.2rem] font-bold">
                IT Intern — Fullstack Developer &amp; IT Support
              </h3>
              <p className="mt-1 text-ink-2">
                Four Points by Sheraton Tunjungan Plaza, PT Pakuwon Jati ·
                Surabaya
              </p>
              <p className="mt-1 text-[0.86rem] text-ink-3">
                August 2025 – January 2026
              </p>
              <p className="mt-3.5">
                Built the two hotel systems above. Also ran on-site IT support for
                guests and staff, and requirement and progress reviews with the IT
                Manager.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="reveal mt-16 sm:mt-20">
            <SectionLabel>Skills</SectionLabel>
            <dl className="mt-5">
              {SKILLS.map(([label, items]) => (
                <div
                  key={label}
                  className="grid gap-y-1 border-t border-line py-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-x-10"
                >
                  <dt className="font-display text-[1rem] font-bold">{label}</dt>
                  <dd className="text-ink-2">{items}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Education & certifications */}
          <section className="reveal mt-16 sm:mt-20">
            <SectionLabel>Education &amp; certifications</SectionLabel>
            <ul className="mt-5">
              {CREDENTIALS.map(([name, detail]) => (
                <li
                  key={name}
                  className="grid gap-y-1 border-t border-line py-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-x-10"
                >
                  <p className="font-display text-[1.05rem] font-bold">{name}</p>
                  <p className="text-ink-2">{detail}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className="reveal mt-16 sm:mt-20">
            <SectionLabel id="contact">Contact</SectionLabel>
            <div className="mt-5 max-w-measure">
              <p>Open to fullstack roles. Email is the best way to reach me.</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
                <a className="ul" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
                <span aria-hidden="true" className="text-line-2">
                  ·
                </span>
                <a className="ul" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <span aria-hidden="true" className="text-line-2">
                  ·
                </span>
                <a className="ul" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
