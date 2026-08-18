"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsapConfig";
import { withMotionPreference } from "@/components/motion/gsapMatchMedia";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTitleCard } from "@/components/ui/SectionTitleCard";
import { ProjectCard } from "./ProjectCard";
import { clientProjects, personalProjects } from "@/lib/content/projects";

export function Projects() {
  const scope = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);

  const featured = clientProjects.find((p) => p.featured) ?? clientProjects[0];
  const secondaryClient = clientProjects.filter((p) => p.id !== featured.id);

  useGSAP(
    () => {
      if (!featuredRef.current) return;

      const mm = withMotionPreference(
        scope,
        () => {
          gsap.set(featuredRef.current, { scale: 0.92, opacity: 0 });
          gsap.to(featuredRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 75%",
            },
          });
        },
        () => {
          gsap.set(featuredRef.current, { scale: 1, opacity: 1 });
        }
      );

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach(
          (t) => t.trigger === featuredRef.current && t.kill()
        );
      };
    },
    { scope }
  );

  return (
    <section
      id="work"
      ref={scope}
      aria-labelledby="work-heading"
      className="border-t border-border px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionTitleCard id="work-heading" className="mb-6">
          Shipped
        </SectionTitleCard>
        <p className="font-mono-ui mb-16 text-xs uppercase text-fg-muted md:mb-24">
          Client Work
        </p>

        <div ref={featuredRef} className="mb-16 md:mb-24">
          <ProjectCard project={featured} size="featured" />
        </div>

        <ScrollReveal className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {secondaryClient.map((project) => (
            <ProjectCard key={project.id} project={project} size="standard" />
          ))}
        </ScrollReveal>

        <p className="font-mono-ui mb-10 mt-20 text-xs uppercase text-fg-muted md:mt-32">
          Personal Projects
        </p>

        <ScrollReveal
          className={
            personalProjects.length > 1
              ? "grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10"
              : "grid grid-cols-1"
          }
        >
          {personalProjects.map((project) => (
            <div key={project.id} className="max-w-xl">
              <ProjectCard project={project} size="compact" />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
