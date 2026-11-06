import type { NavLink, SocialLink } from "@/types/content";

export const site = {
  name: "Emilio Rosado Araujo",
  shortName: "E. Rosado",
  role: "Software Engineer | Cloud, CI/CD & Automation",
  location: "Colima, Mexico",
  availability: "Open to Remote",
  email: "emilioaraujo15@gmail.com",
  url: "https://emilio-rosado-portfolio.vercel.app",
  resumeHref: "/emilio-rosado-araujo-resume.pdf",
  // Short form for meta tags; the full `summary` is too long for snippets.
  description:
    "Software Engineer with 2+ years shipping and operating production web applications across 20+ live sites, now growing into DevOps.",
  summary:
    "Software Engineer with 2+ years shipping and operating production web applications across 20+ live sites. Owns projects end-to-end, from technical scoping through deployment, monitoring and maintenance on Vercel, with hands-on exposure to Docker, Linux, Git/GitHub and GCP. Builds automated verification into delivery, using Playwright to validate AI-generated code against specifications before handoff. Uses AI code assistants (Claude Code) daily for well-defined tasks while reviewing output for correctness and team standards. Now growing into DevOps: infrastructure as code, CI/CD pipelines and cloud platforms.",
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
