"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsapConfig";
import { withMotionPreference } from "./gsapMatchMedia";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}

export function ScrollReveal({
  children,
  className,
  stagger = 0.08,
  y = 24,
}: ScrollRevealProps) {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const targets = scope.current
        ? Array.from(scope.current.children)
        : [];
      if (!targets.length) return;

      const mm = withMotionPreference(
        scope,
        () => {
          gsap.set(targets, { opacity: 0, y });
          ScrollTrigger.batch(targets, {
            start: "top 85%",
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger,
              }),
          });
        },
        () => {
          gsap.set(targets, { opacity: 1, y: 0 });
        }
      );

      return () => mm.revert();
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
