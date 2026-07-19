import { Fragment, ReactNode } from "react";
import Image from "next/image";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, CONTACT } from "@/data/projects";

function SectionLabel({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-8 font-display text-[0.82rem] font-semibold uppercase tracking-[0.09em] text-ink-3"
    >
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
        description="Fullstack developer in Surabaya. I rebuilt my university's student information system (sim.istts.ac.id) and built two systems that three Marriott hotels still use. Open to fullstack roles."
      />
      <Header />

      <main>
        <div className="wrap">
          {/* Hero */}
          <section className="flex flex-col gap-8 pt-10 sm:flex-row sm:items-start sm:justify-between sm:pt-14">
            <div className="max-w-measure">
              <h1 className="font-display text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                Michael Setiabudi
              </h1>
              <p className="mt-3 text-[1.05rem] text-ink-2">
                Fullstack Developer · Surabaya, Indonesia
              </p>
              <p className="mt-6 text-[1.2rem] leading-[1.5]">
                I rebuilt my university&rsquo;s student information system. It
                runs at{" "}
                <a
                  href="https://sim.istts.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link"
                >
                  sim.istts.ac.id
                </a>
                .
              </p>
              <p className="mt-4 text-ink-2">
                Informatics graduate from iSTTS. Before my thesis I spent six
                months as an IT intern at Four Points by Sheraton, where I built
                two systems that three Marriott hotels still use. Open to
                fullstack roles.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.98rem] font-medium">
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={`mailto:${CONTACT.email}`}>Email</a>
                <a href={CONTACT.cv}>Download CV</a>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-[168px] shrink-0 overflow-hidden rounded-lg border border-line sm:w-[184px]">
              <Image
                src="/MichaelSetiabudi.jpg"
                alt="Michael Setiabudi"
                fill
                sizes="184px"
                className="object-cover object-top grayscale"
                priority
              />
            </div>
          </section>

          {/* Work */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="work">Work</SectionLabel>
            <div className="mt-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="border-t border-line py-8"
                >
                  <h3 className="font-display text-[1.4rem] font-semibold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] text-ink-2">{p.context}</p>
                  <p className="mt-3.5 max-w-measure">{p.description}</p>
                  <p className="mt-3.5 text-[0.92rem] font-medium text-ink-2">
                    {p.tech}
                  </p>
                  {p.links.length > 0 ? (
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.95rem] font-medium">
                      {p.links.map((l, i) => (
                        <Fragment key={l.href}>
                          {i > 0 && (
                            <span aria-hidden="true" className="text-line-2">
                              ·
                            </span>
                          )}
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="u-link"
                          >
                            {l.label} ↗
                          </a>
                        </Fragment>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 text-[0.95rem] text-ink-3">
                      {p.internalNote}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="about">About</SectionLabel>
            <div className="mt-4 max-w-measure space-y-4">
              <p>
                I&rsquo;m a fullstack developer based in Surabaya. I graduated in
                Informatics from iSTTS in July 2026 with a 3.52 GPA.
              </p>
              <p>
                I work across the stack: NestJS, FastAPI, Laravel and Express on
                the server, React, Vue and Flutter on the client. My thesis was
                the largest thing I&rsquo;ve built, and it went through 34 test
                scenarios and a usability study with 276 people before it
                shipped.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel>Experience</SectionLabel>
            <div className="mt-4 max-w-measure">
              <h3 className="font-display text-[1.15rem] font-semibold">
                IT Intern — Fullstack Developer and IT Support
              </h3>
              <p className="mt-1 text-ink-2">
                Four Points by Sheraton Tunjungan Plaza, PT Pakuwon Jati ·
                Surabaya
              </p>
              <p className="mt-1 text-[0.92rem] text-ink-3">
                August 2025 – January 2026
              </p>
              <p className="mt-3.5">
                Built the two hotel systems listed above. Also handled on-site IT
                support for hotel guests and staff, and ran requirement and
                progress reviews with the IT Manager.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel>Skills</SectionLabel>
            <dl className="mt-4">
              {SKILLS.map(([label, items]) => (
                <div
                  key={label}
                  className="grid gap-y-1 border-t border-line py-4 sm:grid-cols-[190px_1fr] sm:gap-x-6"
                >
                  <dt className="font-display text-[0.98rem] font-semibold">
                    {label}
                  </dt>
                  <dd className="text-ink-2">{items}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Education & certifications */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel>Education &amp; certifications</SectionLabel>
            <ul className="mt-4 space-y-5">
              {CREDENTIALS.map(([name, detail]) => (
                <li key={name} className="max-w-measure">
                  <p className="font-display text-[1.05rem] font-semibold">
                    {name}
                  </p>
                  <p className="mt-0.5 text-ink-2">{detail}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="contact">Contact</SectionLabel>
            <div className="mt-4 max-w-measure">
              <p>Open to fullstack roles. Email is the best way to reach me.</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <span aria-hidden="true" className="text-line-2">
                  ·
                </span>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <span aria-hidden="true" className="text-line-2">
                  ·
                </span>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
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
