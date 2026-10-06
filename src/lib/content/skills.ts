import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    id: "styling-systems",
    label: "STYLING & SYSTEMS",
    skills: ["Tailwind CSS", "Webflow", "Design Systems", "Figma"],
  },
  {
    id: "platform-data",
    label: "PLATFORM & DATA",
    skills: ["Node.js", "SQL", "MongoDB", "Firebase", "GCP", "Docker", "Linux", "PHP"],
    tint: "green",
  },
  {
    id: "practice",
    label: "PRACTICE",
    skills: [
      "SEO / Lighthouse 90+",
      "Accessibility (WCAG, ARIA)",
      "Agile",
      "Code Review",
    ],
  },
  {
    id: "tooling",
    label: "TOOLING",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "Contentful",
      "Cloudinary",
      "Playwright",
      "Claude Code",
    ],
    tint: "purple",
  },
];

export const credentials = {
  degree: "BS, Software Engineering",
  school: "Universidad de Colima",
  degreeDates: "AUG 2021 — JUN 2025",
  certification: "JavaScript Algorithms and Data Structures",
  certifier: "freeCodeCamp",
  certDate: "2024",
};
