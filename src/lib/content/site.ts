import type { NavLink, SocialLink } from "@/types/content";

export const site = {
  name: "Emilio Rosado Araujo",
  shortName: "E. Rosado",
  role: "Frontend Software Engineer",
  location: "Colima, MX",
  email: "emilioaraujo15@gmail.com",
  url: "https://emilio-rosado-portfolio.vercel.app",
  resumeHref: "/emilio-rosado-araujo-resume.pdf",
  summary:
    "Frontend Software Engineer with 2+ years of experience taking interfaces from requirements to production, built fast, accessible, and SEO-strong with React, Next.js, and TypeScript.",
} as const;

// Kept in sync with globals.css's CSS custom properties by hand: the
// next/og ImageResponse runtime (icon.tsx, opengraph-image.tsx) can't
// read CSS custom properties, so these are the one literal copy.
export const brandColors = {
  bg: "#0b0b0c",
  fg: "#edebe6",
  fgMuted: "#9c9c97",
  accent: "#f27127",
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
