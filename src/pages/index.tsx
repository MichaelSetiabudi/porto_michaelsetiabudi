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
          <section className="pt-8 sm:pt-10 md:grid md:grid-cols-[minmax(0,1fr)_340px] md:items-start md:gap-x-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-x-20">
            {/* Photo — above the name on mobile, beside the intro on tablet+ */}
            <div className="mb-9 max-w-[440px] md:order-none md:col-start-2 md:row-start-1 md:mb-0 md:max-w-none">
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-xl border border-line md:aspect-[4/5]">
                <Image
                  src="/MichaelSetiabudi.jpg"
                  alt="Michael Setiabudi"
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1023px) 340px, 400px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Intro */}
            <div className="max-w-[60ch] md:col-start-1 md:row-start-1">
              <h1 className="font-display text-[clamp(2.4rem,4.8vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.02em]">
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
          </section>

          {/* Work */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="work">Work</SectionLabel>
            <div className="mt-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="project-grid border-t border-line py-8 lg:py-9"
                >
                  <h3 className="area-title font-display text-[1.4rem] font-semibold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="area-context mt-1.5 text-[0.92rem] text-ink-2 lg:mt-0">
                    {p.context}
                  </p>
                  <p className="area-desc mt-3.5 max-w-[68ch] lg:mt-0">
                    {p.description}
                  </p>
                  <p className="area-tech mt-3.5 text-[0.92rem] font-medium text-ink-2 lg:mt-0">
                    {p.tech}
                  </p>
                  {p.links.length > 0 ? (
                    <div className="area-links mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.95rem] font-medium lg:mt-0">
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
                    <p className="area-links mt-4 text-[0.95rem] text-ink-3 lg:mt-0">
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
            <div className="mt-4 max-w-[68ch] space-y-4">
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
            <div className="exp-grid mt-4">
              <h3 className="area-role font-display text-[1.15rem] font-semibold">
                IT Intern — Fullstack Developer and IT Support
              </h3>
              <p className="area-company mt-1 text-ink-2 lg:mt-0">
                Four Points by Sheraton Tunjungan Plaza, PT Pakuwon Jati ·
                Surabaya
              </p>
              <p className="area-dates mt-1 text-[0.92rem] text-ink-3 lg:mt-0">
                August 2025 – January 2026
              </p>
              <p className="area-desc mt-3.5 max-w-[68ch] lg:mt-0">
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
                  className="grid gap-y-1 border-t border-line py-4 md:grid-cols-[248px_minmax(0,1fr)] md:gap-x-12"
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
            <ul className="mt-4">
              {CREDENTIALS.map(([name, detail]) => (
                <li
                  key={name}
                  className="grid gap-y-1 border-t border-line py-4 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-x-12"
                >
                  <p className="font-display text-[1.05rem] font-semibold">
                    {name}
                  </p>
                  <p className="text-ink-2">{detail}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className="mt-16 sm:mt-20">
            <SectionLabel id="contact">Contact</SectionLabel>
            <div className="mt-4 max-w-[68ch]">
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
