import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/Layout";
import { projects, getProject, Project } from "@/data/projects";

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-8 gap-y-2 border-t border-rule py-8 md:grid-cols-[160px_1fr]">
      <dt className="t-label text-ink-3">{label}</dt>
      <dd className="max-w-measure text-[1.05rem] leading-relaxed text-ink">
        {children}
      </dd>
    </div>
  );
}

export default function ProjectDetail({ project, prev, next }: Props) {
  const external = project.href;

  return (
    <>
      <Head>
        <title>{project.title} — Michael Setiabudi</title>
        <meta name="description" content={project.standfirst} />
      </Head>

      <Layout>
        <article className="wrap pb-8 pt-10 md:pt-14">
          <Link
            href="/work"
            className="link t-label inline-block text-ink-2 hover:text-ink"
          >
            ← All work
          </Link>

          <header className="mt-10">
            <p className="t-label mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-3">
              {project.role && <span>{project.role}</span>}
              {project.role && project.year && (
                <span aria-hidden="true">·</span>
              )}
              {project.year && <span>{project.year}</span>}
              <span className="inline-flex items-center gap-2">
                {project.status.live && (
                  <span aria-hidden="true" className="text-live">
                    ●
                  </span>
                )}
                {project.status.label}
              </span>
            </p>

            <h1 className="t-display max-w-[16ch] text-[clamp(2.1rem,5.4vw,4.2rem)]">
              {project.title}
            </h1>

            <p className="mt-6 max-w-measure text-[clamp(1.05rem,1.3vw,1.24rem)] leading-relaxed text-ink-2">
              {project.standfirst}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {external && (
                <a
                  href={external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label inline-flex items-center gap-2 border border-live px-5 py-3 text-live transition-colors hover:bg-live hover:text-paper"
                >
                  {project.hrefLabel ?? "Open live"} ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link t-label inline-flex items-center gap-2 text-ink-2 hover:text-ink"
                >
                  {external ? "Repository" : (project.hrefLabel ?? "Repository")} ↗
                </a>
              )}
            </div>
          </header>

          {/* Preview or internal notice */}
          {project.image ? (
            <figure className="mt-12">
              <div className="relative aspect-[16/9] overflow-hidden border border-rule bg-surface">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <figcaption className="t-mono mt-3 text-[11px] text-ink-3">
                Public sign-in page at sim.istts.ac.id. No student data shown.
              </figcaption>
            </figure>
          ) : project.internal ? (
            <div className="mt-12 border border-rule bg-surface px-6 py-8">
              <p className="t-label mb-3 text-ink-3">Internal system</p>
              <p className="max-w-measure text-ink-2">
                Built for internal hotel operations. Described here, but not
                linked or shown &mdash; no URL, no screenshot, by request.
              </p>
            </div>
          ) : null}

          {/* Case study */}
          <dl className="mt-14">
            {project.before && <Row label="Before">{project.before}</Row>}
            <Row label="What I built">{project.built}</Row>
            {project.changed && (
              <Row label="What changed">{project.changed}</Row>
            )}
            <Row label="Built with">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {project.stack.map((s) => (
                  <li key={s} className="t-mono text-sm text-ink-2">
                    {s}
                  </li>
                ))}
              </ul>
            </Row>
          </dl>
        </article>

        {/* Prev / next */}
        <nav className="wrap mt-8 grid gap-6 border-t border-rule pt-8 md:grid-cols-2" aria-label="More work">
          <div>
            {prev && (
              <Link href={`/work/${prev.slug}`} className="group block">
                <span className="t-label text-ink-3">← Previous</span>
                <span className="t-title mt-2 block text-xl text-ink group-hover:underline underline-offset-[6px] decoration-1 decoration-rule-strong">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="md:text-right">
            {next && (
              <Link href={`/work/${next.slug}`} className="group block">
                <span className="t-label text-ink-3">Next →</span>
                <span className="t-title mt-2 block text-xl text-ink group-hover:underline underline-offset-[6px] decoration-1 decoration-rule-strong">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const project = getProject(params?.slug as string);
  if (!project) return { notFound: true };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  return {
    props: {
      project,
      prev: idx > 0 ? projects[idx - 1] : null,
      next: idx < projects.length - 1 ? projects[idx + 1] : null,
    },
  };
};
