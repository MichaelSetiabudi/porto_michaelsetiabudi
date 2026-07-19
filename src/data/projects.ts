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
      "I rebuilt my university's student information system, moving it from a single Laravel application to a Flutter app on a NestJS API with 284 endpoints across 45 modules. Students, lecturers and staff use it from the web or a phone.",
    tech: "Flutter · NestJS · MySQL · Keycloak · Firebase",
    links: [{ label: "sim.istts.ac.id", href: "https://sim.istts.ac.id" }],
  },
  {
    title: "TV Promotion CMS",
    context: "Four Points by Sheraton · Internship, 2025 · Internal system",
    description:
      "Replaced the hotel group's outside vendor with a system I built on my own. Staff edit promotions in a CMS and they appear on 20 to 30 screens across three hotels.",
    tech: "FastAPI · Flutter",
    links: [],
    internalNote: "Internal system, no public link",
  },
  {
    title: "Employee Canteen Barcode System",
    context: "Four Points by Sheraton · Internship, 2025 · Internal system",
    description:
      "Added barcode meal recording to the staff canteen system at three hotels, replacing paper tickets. HR exports a meal recap in one step instead of counting by hand.",
    tech: "PHP · MySQL",
    links: [],
    internalNote: "Internal system, no public link",
  },
  {
    title: "My Coral",
    context: "Coursework · 2025",
    description:
      "An Android app for coral reef conservation. Users buy coral seedlings and register them for planting at a chosen location.",
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
      "A web version of the Indonesian board game Macanan, with a computer opponent that plays a full game against you.",
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

export const CONTACT = {
  email: "michaelsetiabudi@gmail.com",
  github: "https://github.com/MichaelSetiabudi",
  linkedin: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
  cv: "/Michael-Setiabudi-CV.pdf",
};
