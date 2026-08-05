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
    context: "Thesis · 2025–2026",
    description:
      "Replaces the university's old Laravel system. A Flutter client on a NestJS API, 284 endpoints, Keycloak single sign-on. Students and staff use it on the web and on Android.",
    tech: "Flutter · NestJS · MySQL · Keycloak",
    links: [{ label: "sim.istts.ac.id", href: "https://sim.istts.ac.id" }],
  },
  {
    title: "TV Promotion CMS",
    context: "Four Points by Sheraton · 2025",
    description:
      "In-house replacement for a paid vendor product. Staff schedule what appears on the promotion screens in the lobby and restaurants: 20 to 30 screens across three hotels.",
    tech: "FastAPI · Flutter",
    links: [],
    internalNote: "Internal system, no public link",
  },
  {
    title: "Employee Canteen Barcode System",
    context: "Four Points by Sheraton · 2025",
    description:
      "Staff scan a barcode instead of handing in a paper meal ticket. HR exports the monthly recap from the same screen. In use at three hotels.",
    tech: "PHP · MySQL",
    links: [],
    internalNote: "Internal system, no public link",
  },
  {
    title: "My Coral",
    context: "Coursework · 2025",
    description:
      "Android app for a coral-reef conservation programme. You buy a seedling and register it for planting.",
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
      "Web version of the Indonesian board game Macanan, with a computer opponent that plays a full game.",
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
  // Two CV versions — Indonesian and English.
  cv: {
    id: "/Michael-Setiabudi-CV-ID.pdf",
    en: "/Michael-Setiabudi-CV-EN.pdf",
  },
};
