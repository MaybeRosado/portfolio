"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsapConfig";
import { withMotionPreference } from "@/components/motion/gsapMatchMedia";
import { SectionTitleCard } from "@/components/ui/SectionTitleCard";
import { TagChip } from "@/components/ui/TagChip";
import { experience } from "@/lib/content/experience";

export function ExperienceTimeline() {
  const scope = useRef<HTMLDivElement | null>(null);
  const spineFillRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLOListElement | null>(null);

  useGSAP(
    () => {
      if (!spineFillRef.current || !listRef.current) return;
      const entries = Array.from(listRef.current.children);

      const mm = withMotionPreference(
        scope,
        () => {
          gsap.set(spineFillRef.current, { scaleY: 0, transformOrigin: "top" });
          gsap.to(spineFillRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 20%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          });

          gsap.set(entries, { opacity: 0, y: 28 });
          ScrollTrigger.batch(entries, {
            start: "top 82%",
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
              }),
          });
        },
        () => {
          gsap.set(spineFillRef.current, { scaleY: 1 });
          gsap.set(entries, { opacity: 1, y: 0 });
        }
      );

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach(
          (t) => t.trigger === listRef.current && t.kill()
        );
      };
    },
    { scope }
  );

  return (
    <section
      id="experience"
      ref={scope}
      aria-labelledby="experience-heading"
      className="border-t border-border px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionTitleCard id="experience-heading" className="mb-16 md:mb-24">
          Track record
        </SectionTitleCard>

        <ol ref={listRef} className="relative space-y-16 pl-8 md:pl-12">
          <div
            aria-hidden="true"
            className="absolute left-0 top-1 h-[calc(100%-0.25rem)] w-px bg-border"
          />
          <div
            ref={spineFillRef}
            aria-hidden="true"
            className="absolute left-0 top-1 h-[calc(100%-0.25rem)] w-px bg-accent"
          />

          {experience.map((role) => (
            <li key={role.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1.5 h-2 w-2 -translate-x-1/2 bg-accent md:-left-12"
              />
              <data
                value={role.dateRange}
                className="font-mono-ui block text-xs uppercase text-fg-muted"
              >
                {role.dateRange}
              </data>
              <h3 className="font-display mt-2 text-2xl uppercase text-fg md:text-3xl">
                {role.company}
              </h3>
              <p className="font-mono-ui mt-1 text-xs uppercase text-accent">
                {role.role} — {role.location}
              </p>
              <ul className="mt-4 max-w-[65ch] list-none space-y-2 text-sm leading-relaxed text-fg-muted md:text-base">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent">
                      /
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <TagChip key={tag}>{tag}</TagChip>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
