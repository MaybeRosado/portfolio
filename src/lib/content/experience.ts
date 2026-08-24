import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    id: "studio-enova",
    company: "Studio Enova",
    role: "Lead Webflow Developer",
    dateRange: "SEP 2025 — PRESENT",
    location: "Remote / Contract",
    bullets: [
      "Promoted from Webflow Developer to Lead in recognition of project leadership and delivery quality.",
      "Leads and mentors a team of two developers, reviewing their work and supporting their growth.",
      "Primary technical point of contact with the design team, owning key technical decisions for client projects.",
      "Delivered two component libraries as project lead, along with the client sites built on top of them.",
    ],
    tags: ["Webflow", "Design Systems", "Team Lead"],
  },
  {
    id: "e3-studio",
    company: "E3 Studio",
    role: "Frontend Engineer",
    dateRange: "FEB 2025 — PRESENT",
    location: "Remote / Freelance",
    bullets: [
      "Collaborated with a two-person engineering team to build three client websites from scratch, owning the full lifecycle from scoping through deployment.",
      "Implemented SEO-first architecture (meta tags, Open Graph, SSR/SSG via Next.js), achieving Lighthouse SEO scores of 90+.",
      "Delivered on-spec, maintainable features using Next.js, React, TypeScript, and Contentful CMS.",
    ],
    tags: ["Next.js", "TypeScript", "Contentful", "SEO"],
  },
  {
    id: "leadventure",
    company: "LeadVenture",
    role: "Frontend Developer I",
    dateRange: "MAR 2025 — MAR 2026",
    location: "Remote",
    bullets: [
      "Built and maintained frontend websites for RV dealership clients across 20 production sites serving 1,000+ monthly visitors.",
      "Implemented designs with high visual fidelity and full responsiveness, working closely with QA.",
      "Refactored shared UI components into a reusable library, reducing code duplication by 25% across the codebase.",
    ],
    tags: ["React", "Shared UI Library", "Production Scale"],
  },
  {
    id: "universidad-de-colima",
    company: "Universidad de Colima",
    role: "Web Developer",
    dateRange: "AUG 2024 — JAN 2025",
    location: "On Site",
    bullets: [
      "Built full-stack applications using React, TypeScript, Tailwind CSS, and PHP.",
      "Applied responsive design and WCAG accessibility best practices.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "PHP"],
  },
];
