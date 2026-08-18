import { gsap } from "@/lib/motion/gsapConfig";

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const NO_PREFERENCE_MOTION = "(prefers-reduced-motion: no-preference)";

/**
 * Wraps gsap.matchMedia() so every section registers both branches
 * consistently: an animated branch and a reduced-motion branch that
 * renders the final state instantly with no ScrollTrigger/pin created.
 */
export function withMotionPreference(
  scope: React.RefObject<HTMLElement | null>,
  animate: () => void,
  reduce: () => void
) {
  const mm = gsap.matchMedia();

  mm.add(
    { animated: NO_PREFERENCE_MOTION, reduced: REDUCED_MOTION },
    (context) => {
      const { animated } = context.conditions as { animated: boolean };
      if (animated) {
        animate();
      } else {
        reduce();
      }
    }
  );

  return mm;
}
