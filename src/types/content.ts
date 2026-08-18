export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export type ProjectCategory = "client" | "personal";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  descriptor: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
  tinted?: boolean;
}
