import { ReactNode } from "react";

function LiveDot() {
  return <span aria-hidden="true" className="text-live">●</span>;
}

const ROWS: [string, ReactNode][] = [
  ["Location", "Surabaya · Indonesia"],
  ["Focus", "Fullstack — systems & migrations"],
  [
    "In prod",
    <>
      <LiveDot /> iSTTS SIM &nbsp; <LiveDot /> 3 hotels
    </>,
  ],
  ["Stack", "NestJS · FastAPI · Flutter · Laravel"],
  ["Study", "Informatics, iSTTS — 3.52"],
];

export default function Colophon() {
  return (
    <aside aria-label="Profile summary" className="t-mono text-[12.5px] leading-[1.85] text-ink-2">
      <div className="mb-3 flex items-baseline justify-between border-t-2 border-ink pt-3 text-ink">
        <span className="t-label">Colophon</span>
        <span className="t-label">2026</span>
      </div>
      <dl>
        {ROWS.map(([k, v], i) => (
          <div key={i} className="grid grid-cols-[76px_1fr] gap-3 py-[3px]">
            <dt className="t-label text-[10.5px] text-ink-3">{k}</dt>
            <dd className="text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
