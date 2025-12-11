import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Four Points By Sheraton Surabaya Tunjungan Plaza",
    position: "Full Stack Developer",
    division: "IT Division",
    location: "Surabaya, Indonesia",
    startDate: "August 2025",
    endDate: "Present",
    description:
      "Developing internal systems for Pakuwon Group's hotel operations, focusing on automation and digitalization of hotel management processes.",
    projects: [
      {
        title: "Hotel Booking System",
        description:
          "Internal hotel booking system for Pakuwon Group operations with features including room reservation management, availability tracking, and database integration for seamless hotel operations.",
        technologies: ["Flutter", "FastAPI", "Python", "MySQL"],
        impact: "Streamlined internal booking process for Pakuwon Group",
      },
      {
        title: "Canteen Attendance System",
        description:
          "Employee meal attendance tracking system using barcode scanner technology for efficient canteen consumption monitoring and reporting.",
        technologies: ["PHP", "MySQL", "Barcode Scanner"],
        impact: "Automated employee meal tracking and reduced manual processing",
      },
    ],
    skills: [
      "Flutter",
      "FastAPI",
      "Python",
      "PHP",
      "MySQL",
      "Barcode Technology",
      "REST API",
      "Mobile Development",
      "Full Stack Development",
    ],
    type: "internship",
  },
];
