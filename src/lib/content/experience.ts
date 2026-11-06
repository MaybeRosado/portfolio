import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    id: "studio-enova-lead",
    company: "Studio Enova",
    role: "Lead Webflow Developer",
    dateRange: "JUN 2026 — PRESENT",
    location: "Remote / Contract, Full-Time",
    bullets: [
      "Built automated verification with Playwright to validate MCP/AI-generated components against Figma specifications before handoff.",
      "Own technical direction and per-project architecture decisions for client builds; mentor 2 developers through code review and shared standards.",
      "Led delivery of 2 reusable component libraries (design systems) and the client sites built on top of them.",
      "Primary engineering liaison to the design team, translating requirements into documented build specs.",
    ],
    tags: ["Playwright", "Automated Verification", "Team Lead", "Design Systems", "Webflow"],
  },
  {
    id: "studio-enova-developer",
    company: "Studio Enova",
    role: "Webflow Developer",
    dateRange: "MAR 2026 — JUN 2026",
    location: "Remote / Contract, Full-Time",
    bullets: [
      "Raised Lighthouse accessibility scores 30% through audits with axe DevTools and targeted fixes.",
      "Built 20+ reusable components in vanilla JavaScript and structured CSS, tested cross-browser.",
    ],
    tags: ["Lighthouse", "axe DevTools", "JavaScript", "Webflow"],
  },
  {
    id: "e3-studio",
    company: "E3 Studio",
    role: "Co-Founder & Software Engineer",
    dateRange: "FEB 2025 — PRESENT",
    location: "Remote / 3-Person Studio",
    status: "concurrent",
    bullets: [
      "Co-founded a 3-person studio and owned 3 production Next.js sites end-to-end, from scoping to deployment and ongoing maintenance on Vercel.",
      "Built the API layer that fetches and shapes content from Contentful (headless CMS), and optimized image delivery through Cloudinary.",
      "Monitor production performance with Lighthouse (90+ SEO) and Google Search Console; two sites rank on Google's first page organically for their main local searches.",
      "Built typed, reusable React/TypeScript components shared across all three sites to speed up delivery.",
    ],
    tags: ["Vercel", "Monitoring", "Next.js", "TypeScript", "Contentful", "Cloudinary"],
  },
  {
    id: "leadventure",
    company: "LeadVenture",
    role: "Frontend Developer I",
    dateRange: "MAR 2025 — MAR 2026",
    location: "Remote",
    bullets: [
      "Maintained 20+ production websites on a shared multi-site platform, each serving 1,000+ monthly visitors.",
      "Partnered with QA to catch cross-browser regressions before each release.",
      "Refactored shared UI into a reusable component library, reducing code duplication by 25% across the codebase.",
    ],
    tags: ["Production Scale", "Multi-Site Platform", "Shared UI Library", "React"],
  },
  {
    id: "universidad-de-colima",
    company: "Universidad de Colima",
    role: "Full-Stack Developer",
    dateRange: "AUG 2024 — JAN 2025",
    location: "On Site",
    bullets: [
      "Containerized the project with Docker and Docker Compose, packaging Node.js and PHP dependencies into images and orchestrating the services so any developer could spin up an identical, working environment on a new machine with a single command.",
      "Built full-stack applications with a React, TypeScript, and Tailwind CSS frontend and a PHP backend handling data storage, retrieval, updates, and deletion.",
      "Applied responsive design and WCAG accessibility best practices.",
    ],
    tags: ["Docker", "Docker Compose", "PHP", "React", "TypeScript", "Tailwind"],
  },
];
