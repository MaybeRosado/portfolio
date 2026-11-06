import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "anagram-arquitectos",
    name: "Anagram Arquitectos",
    category: "client",
    descriptor: "ARCHITECTURE & CONSTRUCTION — LIVE CLIENT SITE",
    description:
      "Architecture and real-estate site for a Colima-based studio, built with Next.js and Contentful and deployed on Vercel. First page on Google for \"arquitectos Colima\".",
    tags: ["Next.js", "Contentful", "Vercel"],
    url: "https://anagramarquitectos.com/",
    image: "/images/projects/anagram-arquitectos.png",
    featured: true,
  },
  {
    id: "nativa-living",
    name: "Nativa Living",
    category: "client",
    descriptor: "REAL ESTATE DEVELOPMENT — LIVE CLIENT SITE",
    description:
      "Apartment-listing site for a residential development in Colima with editor-managed content, built with Next.js and Contentful and deployed on Vercel.",
    tags: ["Next.js", "Contentful", "Vercel"],
    url: "https://nativaliving.anagramarquitectos.com/",
    image: "/images/projects/nativa-living.png",
  },
  {
    id: "casas-exclusivas-colima",
    name: "Casas Exclusivas Colima",
    category: "client",
    descriptor: "REAL ESTATE LISTINGS — LIVE CLIENT SITE",
    description:
      "Real-estate marketplace covering properties across Colima, Villa de Álvarez, and Comala, built with Next.js, TypeScript, and Contentful and deployed on Vercel. First page on Google for \"casas Colima\".",
    tags: ["Next.js", "TypeScript", "Contentful", "Vercel"],
    url: "https://www.casasexclusivas-colima.com/",
    image: "/images/projects/casas-exclusivas-colima.png",
  },
  {
    id: "nasa-potd",
    name: "NASA POTD",
    category: "personal",
    descriptor: "PERSONAL PROJECT — API INTEGRATION",
    description:
      "A picture-of-the-day viewer built on NASA's public APOD API, presenting daily astronomy imagery full-bleed with a clean title overlay.",
    tags: ["React", "REST API", "Vercel"],
    url: "https://nasa-potd-azure.vercel.app/",
    image: "/images/projects/nasa-potd.png",
  },
];

export const clientProjects = projects.filter((p) => p.category === "client");
export const personalProjects = projects.filter(
  (p) => p.category === "personal"
);
