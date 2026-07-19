export interface Project {
  slug: string;
  title: string;
  year?: string; // omitted for undated personal work
  group: "production" | "personal";
  discipline: string; // one-line summary shown in the index
  role?: string; // context line on the detail page
  status: { label: string; live: boolean };
  internal?: boolean; // Marriott systems: no link, no unredacted image
  href?: string; // external live link (opens in a new tab)
  hrefLabel?: string;
  repo?: string;
  standfirst: string;
  before?: string; // omitted for greenfield work
  built: string;
  changed?: string;
  stack: string[];
  image?: { src: string; alt: string };
}

export const projects: Project[] = [
  {
    slug: "istts-sim",
    title: "iSTTS Student Information System",
    year: "2026",
    group: "production",
    discipline: "Monolith → multiplatform reengineering",
    role: "Undergraduate thesis",
    status: { label: "In production · live", live: true },
    href: "https://sim.istts.ac.id",
    hrefLabel: "Open sim.istts.ac.id",
    standfirst:
      "A full reengineering of my university's student information system, from a Laravel monolith into a Flutter and NestJS application.",
    before:
      "The university ran its student information system as a single monolithic Laravel application.",
    built:
      "I reengineered it into a multiplatform system: a Flutter frontend using BLoC and GoRouter, and a NestJS backend on Fastify with Kysely, across three MySQL databases. 284 REST API endpoints across 45 modules, with Keycloak single sign-on and Firebase Cloud Messaging. Built with one collaborator, using Git.",
    changed:
      "It moved off the monolith and now runs at sim.istts.ac.id for students, lecturers, and university management. I validated it with 34 black-box test scenarios and a usability study of 276 respondents across those three groups.",
    stack: [
      "Flutter",
      "BLoC",
      "GoRouter",
      "NestJS",
      "Fastify",
      "Kysely",
      "MySQL",
      "Keycloak",
      "Firebase Cloud Messaging",
      "Git",
    ],
    image: {
      src: "/work/istts-sim-signin.png",
      alt: "The public sign-in page of the iSTTS student information system at sim.istts.ac.id",
    },
  },
  {
    slug: "tv-promotion-cms",
    title: "TV Promotion CMS",
    year: "2025",
    group: "production",
    discipline: "FastAPI · Flutter — built solo",
    role: "Four Points by Sheraton internship",
    status: { label: "In production · internal", live: true },
    internal: true,
    standfirst:
      "An in-house replacement for the vendor system that drives the hotels' public promotional screens.",
    before:
      "The hotels ran their public promotional screens through a third-party vendor. Management decided not to renew it and to bring the system in-house.",
    built:
      "I built the replacement from scratch, on my own: a content management system with a FastAPI backend and a Flutter client. It drives roughly 20 to 30 promotional screens across lobbies, restaurants, lifts, and other public areas at three Marriott properties.",
    changed:
      "The hotels stopped paying an outside vendor and now run the screens themselves. Operation was handed to the in-house IT team at each property.",
    stack: ["FastAPI", "Flutter"],
  },
  {
    slug: "canteen-barcode",
    title: "Employee Canteen Barcode System",
    year: "2025",
    group: "production",
    discipline: "Native PHP — three properties",
    role: "Four Points by Sheraton internship",
    status: { label: "In production · internal", live: true },
    internal: true,
    standfirst:
      "Barcode-based meal recording added to an existing canteen system, replacing paper tickets.",
    before:
      "Staff meals were recorded on paper tickets, which made monthly meal recaps hard for HR to compile. Four Points, Sheraton, and Aloft had no barcode support.",
    built:
      "I added barcode-based meal recording to an existing system, in native PHP, working with one UI designer as the fullstack developer.",
    changed:
      "The paper process is gone. HR now pulls meal recaps as a single export. The system was rolled out to Four Points, Sheraton, and Aloft.",
    stack: ["PHP", "Barcode scanning"],
  },
  {
    slug: "my-coral",
    title: "My Coral",
    group: "personal",
    discipline: "Android · coral-reef conservation",
    status: { label: "Android", live: false },
    repo: "https://github.com/YosuaChristian69/aplikasiadopsiterumbukarang",
    hrefLabel: "Repository",
    standfirst:
      "An Android app for coral-reef conservation — buy a coral seedling, register it for planting.",
    built:
      "An Android app for coral-reef conservation. People buy coral seedlings and register them for planting at designated locations, with payments through Midtrans and sites shown on Google Maps. It's a Kotlin client on an Express.js and MongoDB backend.",
    stack: ["Kotlin", "Express.js", "MongoDB", "Google Maps API", "Midtrans"],
  },
  {
    slug: "macanan-ai",
    title: "Macanan AI",
    group: "personal",
    discipline: "React · game AI",
    status: { label: "Live demo", live: true },
    href: "https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/",
    hrefLabel: "Play the demo",
    standfirst:
      "The traditional Indonesian board game Macanan, with a computer opponent that plays a full game.",
    built:
      "I built Macanan as a React.js web app with a computer opponent — a Minimax-based player that plays a full game against a person.",
    stack: ["React.js", "Tailwind CSS", "Minimax"],
  },
];

export const productionWork = projects.filter((p) => p.group === "production");
export const personalWork = projects.filter((p) => p.group === "personal");
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
