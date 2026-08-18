import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export const EASE = "power3.out";
export const EASE_SOFT = "power2.out";

export const DURATION = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
};

export { gsap, ScrollTrigger, SplitText };
