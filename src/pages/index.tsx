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
      className="scroll-mt-8 font-display text-[0.8rem] font-bold uppercase tracking-[0.12em] text-ink-3"
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
        description="Fullstack developer in Surabaya building web and mobile apps, backend to interface. Informatics graduate from iSTTS, open to fullstack roles."
      />
      <Header />

      <main>
        <div className="wrap">
          {/* Hero — about me, not one project */}
          <section className="flex flex-col-reverse gap-8 pt-10 sm:flex-row sm:items-start sm:justify-between sm:pt-14">
            <div className="max-w-[34rem]">
              <h1 className="font-display text-[clamp(2.6rem,6vw,4.1rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                Michael Setiabudi
              </h1>
              <p className="mt-5 max-w-[26ch] font-display text-[clamp(1.15rem,1.9vw,1.45rem)] font-medium leading-[1.25] text-ink">
                Fullstack developer — web and mobile, backend to interface.
              </p>
              <p className="mt-5 max-w-measure text-ink-2">
                Informatics graduate from iSTTS in Surabaya. I&rsquo;ve shipped a
                university student portal, internal tools for a hotel group, and a
                few personal projects. Open to fullstack roles.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-semibold">
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

            <div className="relative h-[150px] w-[124px] shrink-0 self-start overflow-hidden rounded-2xl border border-line bg-surface sm:h-[210px] sm:w-[172px]">
              <Image
                src="/ms_pic.jpeg"
                alt="Michael Setiabudi"
                fill
                sizes="172px"
                className="object-cover object-[center_12%]"
                priority
              />
            </div>
          </section>

          {/* Work */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="work">Selected work</SectionLabel>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-7"
                >
                  <h3 className="font-display text-[1.35rem] font-bold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[0.86rem] text-ink-3">{p.context}</p>
                  <p className="mt-3 text-ink-2">{p.description}</p>
                  <p className="mt-3.5 text-[0.86rem] font-medium text-ink-2">
                    {p.tech}
                  </p>
                  {p.links.length > 0 ? (
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.92rem] font-semibold">
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
                          >
                            {l.label} ↗
                          </a>
                        </Fragment>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 text-[0.92rem] text-ink-3">
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
          <section className="mt-16 sm:mt-20">
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
          <section className="mt-16 sm:mt-20">
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
          <section className="mt-16 sm:mt-20">
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
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="contact">Contact</SectionLabel>
            <div className="mt-5 max-w-measure">
              <p>Open to fullstack roles. Email is the best way to reach me.</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
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
