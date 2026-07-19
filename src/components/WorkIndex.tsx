import Link from "next/link";
import { Project } from "@/data/projects";

function StatusMark({ status }: { status: Project["status"] }) {
  return (
    <span className="t-label inline-flex items-center gap-2 text-ink-2">
      {status.live && (
        <span aria-hidden="true" className="text-[13px] leading-none text-live">
          ●
        </span>
      )}
      {status.label}
    </span>
  );
}

export default function WorkIndex({
  projects,
  detailed = false,
}: {
  projects: Project[];
  detailed?: boolean;
}) {
  return (
    <ul className="border-b border-rule">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/work/${p.slug}`}
            className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-t border-rule py-6 md:grid-cols-[68px_1fr_15rem_auto]"
          >
            <span className="t-mono order-2 text-sm text-ink-3 md:order-none">
              {p.year ?? "—"}
            </span>

            <span className="order-1 md:order-none">
              <span className="t-title text-[1.35rem] text-ink underline-offset-[6px] decoration-1 decoration-rule-strong group-hover:underline">
                {p.title}
              </span>
              <span
                aria-hidden="true"
                className="ml-2 inline-block -translate-x-1 text-ink-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                →
              </span>
            </span>

            <span className="order-3 text-sm text-ink-2 md:order-none">
              {p.discipline}
              {detailed && (
                <span className="mt-2 block max-w-[46ch] text-ink-3">
                  {p.standfirst}
                </span>
              )}
            </span>

            <span className="order-4 mt-2 md:order-none md:mt-0 md:justify-self-end">
              <StatusMark status={p.status} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
