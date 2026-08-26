import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "anagram-arquitectos",
    name: "Anagram Arquitectos",
    category: "client",
    descriptor: "ARCHITECTURE & CONSTRUCTION — LIVE CLIENT SITE",
    description:
      "Architecture and construction firm site for a Colima-based studio, built with Next.js and TypeScript. Portfolio galleries showcase built work such as Casa Maple 31, alongside contact forms and social integration.",
    tags: ["Next.js", "TypeScript", "Portfolio Galleries"],
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
      "Marketing site for a luxury residential development in Colima, presenting apartments for sale with premium amenities to prospective buyers.",
    tags: ["React", "JavaScript", "Real Estate"],
    url: "https://nativaliving.anagramarquitectos.com/",
    image: "/images/projects/nativa-living.png",
  },
  {
    id: "casas-exclusivas-colima",
    name: "Casas Exclusivas Colima",
    category: "client",
    descriptor: "REAL ESTATE LISTINGS — LIVE CLIENT SITE",
    description:
      "Real estate listings platform covering exclusive properties across Colima, Villa de Álvarez, and Comala, with featured listings, regional buying guides, and direct contact channels.",
    tags: ["Next.js", "TypeScript", "Property Listings"],
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
