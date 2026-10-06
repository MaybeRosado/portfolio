import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    id: "studio-enova",
    company: "Studio Enova",
    role: "Lead Webflow Developer",
    dateRange: "MAR 2026 — PRESENT",
    location: "Remote / Contract",
    bullets: [
      "Promoted from Webflow Developer to Lead in June 2026 in recognition of project leadership and delivery quality.",
      "Owns technical direction for client builds and mentors two developers through code review and shared component and accessibility standards.",
      "Primary engineering liaison to the design team, translating UI/UX requirements into build specs and owning per-project architecture decisions.",
      "Led delivery of two reusable component libraries (design systems) and the client sites built on top of them.",
      "Used Playwright to verify MCP/AI-generated components matched their Figma specifications before handoff.",
      "Raised Lighthouse accessibility scores 30% through ARIA labels, semantic HTML, color-contrast fixes, and focus management, audited with axe DevTools.",
      "Built 20+ reusable components in vanilla JavaScript and structured CSS on Webflow, converting Figma designs into pixel-accurate, cross-browser pages.",
    ],
    tags: ["Webflow", "Design Systems", "Team Lead", "Accessibility", "Playwright"],
  },
  {
    id: "e3-studio",
    company: "E3 Studio",
    role: "Co-Founder & Frontend Engineer",
    dateRange: "FEB 2025 — PRESENT",
    location: "Remote / 3-Person Studio",
    status: "concurrent",
    bullets: [
      "Co-founded a three-person studio and shipped three production Next.js sites, all featured in the Work section below: Anagram Arquitectos, Nativa Living, and Casas Exclusivas Colima — owning the frontend from scoping to deployment on Vercel.",
      "Built SEO-first architecture with Next.js SSR/SSG (meta tags, Open Graph), reaching 90+ Lighthouse SEO and tracking organic performance in Google Search Console.",
      "Built typed, reusable React/Next.js components in TypeScript, backed by Contentful (headless CMS) and Cloudinary for optimized media.",
    ],
    tags: ["Next.js", "TypeScript", "Contentful", "Cloudinary", "SEO"],
  },
  {
    id: "leadventure",
    company: "LeadVenture",
    role: "Frontend Developer I",
    dateRange: "MAR 2025 — MAR 2026",
    location: "Remote",
    bullets: [
      "Built and maintained the frontend for 20+ production RV-dealership websites on a shared platform, each serving 1,000+ monthly visitors.",
      "Translated design-team mockups into high-fidelity, fully responsive pages, partnering with QA to catch cross-browser regressions before release.",
      "Refactored shared UI into a reusable component library (design system), reducing code duplication by 25% across the codebase.",
    ],
    tags: ["React", "Shared UI Library", "Production Scale"],
  },
  {
    id: "universidad-de-colima",
    company: "Universidad de Colima",
    role: "Full-Stack Developer",
    dateRange: "AUG 2024 — JAN 2025",
    location: "On Site",
    bullets: [
      "Built full-stack applications with a React, TypeScript, and Tailwind CSS frontend and a PHP backend handling data storage, retrieval, updates, and deletion.",
      "Containerized the project with Docker and Docker Compose, packaging Node.js and PHP dependencies into images and orchestrating the services so any developer could spin up an identical, working environment on a new machine with a single command.",
      "Applied responsive design and WCAG accessibility best practices.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "PHP", "Docker", "Docker Compose"],
  },
];
