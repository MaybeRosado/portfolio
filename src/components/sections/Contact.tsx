"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE, EASE_SOFT, DURATION } from "@/lib/motion/gsapConfig";
import { withMotionPreference } from "@/components/motion/gsapMatchMedia";
import { HazardStripe } from "@/components/ui/HazardStripe";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content/site";

export function Contact() {
  const scope = useRef<HTMLDivElement | null>(null);
  const stripeRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!stripeRef.current || !contentRef.current) return;

      const mm = withMotionPreference(
        scope,
        () => {
          gsap.set(stripeRef.current, { scaleX: 0, transformOrigin: "left" });
          gsap.set(contentRef.current, { opacity: 0, y: 24 });

          const st = {
            trigger: scope.current,
            start: "top 75%",
          };

          gsap.to(stripeRef.current, {
            scaleX: 1,
            duration: 1,
            ease: EASE_SOFT,
            scrollTrigger: st,
          });
          gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: DURATION.reveal,
            ease: EASE,
            scrollTrigger: st,
          });
        },
        () => {
          gsap.set(stripeRef.current, { scaleX: 1 });
          gsap.set(contentRef.current, { opacity: 1, y: 0 });
        }
      );

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.trigger === scope.current && t.kill());
      };
    },
    { scope }
  );

  return (
    <section
      id="contact"
      ref={scope}
      aria-labelledby="contact-heading"
      className="relative border-t border-border px-6 pb-24 pt-16 text-center md:px-10 md:pb-40 md:pt-24"
    >
      <div ref={stripeRef} className="absolute inset-x-0 top-0">
        <HazardStripe />
      </div>

      <div ref={contentRef} className="mx-auto max-w-2xl">
        <h2
          id="contact-heading"
          className="font-display text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.95] text-fg"
        >
          Let&apos;s talk
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${site.email}`}>Email Me</Button>
          <Button href={site.resumeHref} variant="secondary" external>
            Résumé (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
