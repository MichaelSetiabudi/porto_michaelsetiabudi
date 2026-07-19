import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const CHANNELS = [
  {
    label: "Email",
    value: "michaelsetiabudi@gmail.com",
    href: "mailto:michaelsetiabudi@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/michael-setiabudi-032090297",
    href: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
    external: true,
  },
  {
    label: "GitHub",
    value: "MichaelSetiabudi",
    href: "https://github.com/MichaelSetiabudi",
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — Michael Setiabudi"
        description="Michael Setiabudi is open to fullstack roles from July 2026. Reach him by email at michaelsetiabudi@gmail.com, or on LinkedIn and GitHub."
      />

      <Layout>
        <section className="wrap pb-16 pt-12 md:pt-20">
          <p className="rise t-label mb-7 text-ink-3">Contact</p>
          <h1 className="rise rise-1 t-display max-w-[18ch] text-[clamp(2.3rem,6vw,5rem)]">
            <span aria-hidden="true" className="text-live">
              ●
            </span>{" "}
            Open to fullstack roles, from July 2026.
          </h1>
          <p className="rise rise-2 mt-8 max-w-measure text-[clamp(1.02rem,1.2vw,1.16rem)] leading-relaxed text-ink-2">
            Email is the surest way to reach me.
          </p>
        </section>

        <section className="wrap">
          <ul className="border-b border-rule">
            {CHANNELS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-1 border-t border-rule py-7 md:grid-cols-[200px_1fr]"
                >
                  <span className="t-label text-ink-3">{c.label}</span>
                  <span className="t-title text-[clamp(1.35rem,2.4vw,2rem)] text-ink underline-offset-[8px] decoration-1 decoration-rule-strong group-hover:underline">
                    {c.value}
                    <span
                      aria-hidden="true"
                      className="ml-3 inline-block -translate-x-1 text-ink-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      {c.external ? "↗" : "→"}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="t-mono mt-6 text-[11px] leading-relaxed text-ink-3">
            Based in Surabaya, Indonesia · GMT+7
          </p>
        </section>
      </Layout>
    </>
  );
}
