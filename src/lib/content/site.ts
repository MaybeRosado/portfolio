import type { NavLink, SocialLink } from "@/types/content";

export const site = {
  name: "Emilio Rosado Araujo",
  shortName: "E. Rosado",
  role: "Frontend Software Engineer",
  location: "Colima, MX",
  email: "emilioaraujo15@gmail.com",
  summary:
    "Frontend Software Engineer with 2+ years of experience building fast, accessible, SEO-strong interfaces with React, Next.js, and TypeScript — from requirements to production.",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MaybeRosado", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emilio-rosado-araujo/",
    icon: "linkedin",
  },
  { label: "Email", href: `mailto:${site.email}`, icon: "email" },
];
