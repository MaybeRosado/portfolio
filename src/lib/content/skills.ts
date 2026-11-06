import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-ops",
    label: "CLOUD, CI/CD & OPS",
    skills: [
      "Vercel",
      "GCP",
      "Docker",
      "Docker Compose",
      "Linux",
      "Git",
      "GitHub",
      "Automated Deploys on Vercel",
    ],
    tint: "green",
  },
  {
    id: "automation-testing",
    label: "AUTOMATION, TESTING & MONITORING",
    skills: [
      "Playwright",
      "Claude Code",
      "Lighthouse",
      "Google Search Console",
      "axe DevTools",
    ],
    tint: "purple",
  },
  {
    id: "languages-frameworks",
    label: "LANGUAGES & FRAMEWORKS",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "PHP",
      "SQL",
      "Node.js",
      "React",
      "Next.js",
      "Webflow",
      "Contentful",
      "Cloudinary",
    ],
  },
  {
    id: "databases",
    label: "DATABASES",
    skills: ["SQL", "MongoDB", "Firebase"],
  },
  {
    id: "spoken-languages",
    label: "SPOKEN LANGUAGES",
    skills: ["Spanish (native)", "English (C1 Advanced)"],
  },
];

export const credentials = {
  degree: "Bachelor's Degree in Software Engineering",
  school: "Universidad de Colima",
  degreeDates: "AUG 2021 — JUN 2025",
  certifications: [
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
    },
    {
      name: "EF SET English Certificate",
      issuer: "C1 Advanced (62/100)",
      date: "2025",
    },
  ],
};
