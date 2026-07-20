export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  context: string;
  description: string;
  tech: string;
  links: ProjectLink[];
  internalNote?: string;
}

export const projects: Project[] = [
  {
    title: "iSTTS Student Information System",
    context: "University thesis · 2025–2026 · Live",
    description:
      "Rebuilt from a Laravel monolith into a Flutter app on a NestJS API — 284 endpoints, used from the web and a phone.",
    tech: "Flutter · NestJS · MySQL · Keycloak",
    links: [{ label: "sim.istts.ac.id", href: "https://sim.istts.ac.id" }],
  },
  {
    title: "TV Promotion CMS",
    context: "Four Points by Sheraton · Internship, 2025 · Internal",
    description:
      "In-house replacement for a vendor system, driving 20–30 promotion screens across three hotels.",
    tech: "FastAPI · Flutter",
    links: [],
    internalNote: "Internal system, no public link",
  },
  {
    title: "Employee Canteen Barcode System",
    context: "Four Points by Sheraton · Internship, 2025 · Internal",
    description:
      "Barcode meal recording added to the staff canteen at three hotels, replacing paper tickets. HR exports a recap in one step.",
    tech: "PHP · MySQL",
    links: [],
    internalNote: "Internal system, no public link",
  },
  {
    title: "My Coral",
    context: "Coursework · 2025",
    description:
      "An Android app for coral-reef conservation: buy a coral seedling and register it for planting.",
    tech: "Kotlin · Android",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MichaelSetiabudi/BackendAplikasiTerumbuKarang",
      },
    ],
  },
  {
    title: "Macanan AI",
    context: "Coursework · 2024–2025",
    description:
      "A web version of the Indonesian board game Macanan, with a computer opponent that plays a full game.",
    tech: "React · JavaScript",
    links: [
      {
        label: "Play it",
        href: "https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/MichaelSetiabudi/macan_macanan_ai",
      },
    ],
  },
];

export interface MiniProject {
  title: string;
  tech: string;
  href: string;
}

// More public repositories — shows breadth beyond the featured work.
export const moreProjects: MiniProject[] = [
  {
    title: "Booking Lapangan Futsal",
    tech: "Laravel",
    href: "https://github.com/MichaelSetiabudi/BookingLapanganFutsal",
  },
  {
    title: "Personal CRM",
    tech: "Laravel",
    href: "https://github.com/MichaelSetiabudi/MichaelSetiabudi_crm",
  },
  {
    title: "Gamerhub",
    tech: "JavaScript",
    href: "https://github.com/MichaelSetiabudi/Gamerhub",
  },
  {
    title: "Quick Count",
    tech: "Laravel",
    href: "https://github.com/MichaelSetiabudi/quick_count",
  },
];

export const CONTACT = {
  email: "michaelsetiabudi@gmail.com",
  github: "https://github.com/MichaelSetiabudi",
  linkedin: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
  cv: "/Michael-Setiabudi-CV.pdf",
};
