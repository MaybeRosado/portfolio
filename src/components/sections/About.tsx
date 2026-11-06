"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE, DURATION } from "@/lib/motion/gsapConfig";
import { withMotionPreference } from "@/components/motion/gsapMatchMedia";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTitleCard } from "@/components/ui/SectionTitleCard";
import { skillCategories, credentials } from "@/lib/content/skills";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils/cn";

export function About() {
  const scope = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!leftColRef.current) return;

      const mm = withMotionPreference(
        scope,
        () => {
          gsap.set(leftColRef.current, { opacity: 0, y: 32 });
          gsap.to(leftColRef.current, {
            opacity: 1,
            y: 0,
            duration: DURATION.reveal,
            ease: EASE,
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 80%",
            },
          });
        },
        () => {
          gsap.set(leftColRef.current, { opacity: 1, y: 0 });
        }
      );

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.trigger === leftColRef.current && t.kill());
      };
    },
    { scope }
  );

  return (
    <section
      id="about"
      ref={scope}
      aria-labelledby="about-heading"
      className="border-t border-border px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div ref={leftColRef}>
          <SectionTitleCard id="about-heading">Ships, monitors, automates</SectionTitleCard>
          <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-fg-muted md:text-lg">
            {site.summary}
          </p>

          <dl className="mt-10 space-y-4 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <dt className="font-mono-ui text-xs uppercase text-fg-muted">
                {credentials.degreeDates}
              </dt>
              <dd className="text-sm text-fg">
                {credentials.degree} — {credentials.school}
              </dd>
            </div>
            {credentials.certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col gap-1">
                <dt className="font-mono-ui text-xs uppercase text-fg-muted">
                  {cert.date}
                </dt>
                <dd className="text-sm text-fg">
                  {cert.name} — {cert.issuer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ScrollReveal
          className="grid grid-cols-1 gap-px bg-border sm:auto-rows-fr sm:grid-cols-2"
          stagger={0.08}
        >
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={cn(
                "flex flex-col gap-4 bg-bg p-6 md:p-8",
                category.tint === "green" &&
                  "bg-[color-mix(in_srgb,var(--color-secondary-green)_40%,var(--color-bg))]",
                category.tint === "purple" &&
                  "bg-[color-mix(in_srgb,var(--color-secondary-purple)_40%,var(--color-bg))]",
                category.tall && "sm:row-span-2"
              )}
            >
              <p className="font-mono-ui text-xs uppercase text-accent">
                {category.label}
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-fg-muted">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
