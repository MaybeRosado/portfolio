"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/motion/gsapConfig";
import { withMotionPreference } from "@/components/motion/gsapMatchMedia";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { HazardStripe } from "@/components/ui/HazardStripe";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const scope = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const readout = scope.current?.querySelector("[data-hero-readout]");
      const subtext = scope.current?.querySelector("[data-hero-subtext]");
      const ctas = scope.current?.querySelectorAll("[data-hero-cta]");
      const brackets = scope.current?.querySelectorAll("[data-hero-bracket]");

      if (!readout || !subtext || !ctas || !brackets || !headlineRef.current) {
        return;
      }

      const mm = withMotionPreference(
        scope,
        () => {
          const split = new SplitText(headlineRef.current, { type: "lines" });
          // SplitText's own accessible-name generation joins split lines with
          // no space (the <br /> contributes nothing to textContent), so it
          // announces as "InterfacesEngineered". Override with the correct
          // spaced label after it runs.
          headlineRef.current?.setAttribute("aria-label", "Interfaces Engineered");

          // Text content (readout, headline, subtext) stays fully opaque from
          // first paint and only animates position — an opacity fade on the
          // LCP candidate delays when the browser can finalize LCP, and
          // SplitText's DOM mutation already risks disrupting attribution.
          gsap.set(readout, { y: 8 });
          gsap.set(split.lines, { y: 40 });
          gsap.set(subtext, { y: 16 });
          gsap.set(ctas, { opacity: 0, y: 16 });
          gsap.set(brackets, { opacity: 0 });

          const tl = gsap.timeline({ delay: 0.2 });
          tl.to(readout, { y: 0, duration: 0.5, ease: "power2.out" })
            .to(
              split.lines,
              { y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
              "-=0.2"
            )
            .to(subtext, { y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
            .to(
              ctas,
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
              "-=0.3"
            )
            .to(brackets, { opacity: 1, duration: 0.6, ease: "power1.out" }, "-=0.6");

          return () => split.revert();
        },
        () => {
          gsap.set([readout, subtext, ctas, brackets], { opacity: 1, y: 0 });
        }
      );

      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section
      id="top"
      ref={scope}
      aria-label="Introduction"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center md:px-10"
    >
      <div className="relative w-full max-w-6xl px-4 py-16 md:px-10">
        <div data-hero-bracket>
          <CornerBrackets />
        </div>

        <p
          data-hero-readout
          className="font-mono-ui mb-8 text-xs uppercase text-fg-muted"
        >
          SYS://EMILIO-ROSADO-ARAUJO — FRONTEND ENGINEER — REV 2026.08
        </p>

        <h1
          ref={headlineRef}
          aria-label="Interfaces Engineered"
          className="font-display mx-auto max-w-5xl text-[clamp(2.5rem,11vw,9rem)] uppercase leading-[0.9] tracking-[-0.03em] text-fg"
        >
          Interfaces
          <br />
          Engineered
        </h1>

        <p
          data-hero-subtext
          className="mx-auto mt-8 max-w-xl text-base text-fg-muted md:text-lg"
        >
          Two-plus years building fast, accessible, SEO-strong interfaces with
          React, Next.js, and TypeScript, working from Colima to production.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div data-hero-cta>
            <Button href="#work">View Work</Button>
          </div>
          <div data-hero-cta>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>

      <HazardStripe className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
