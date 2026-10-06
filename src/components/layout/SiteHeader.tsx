"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, List } from "@phosphor-icons/react/dist/ssr";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { gsap, ScrollTrigger } from "@/lib/motion/gsapConfig";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { navLinks, site } from "@/lib/content/site";
import { cn } from "@/lib/utils/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, InertiaPlugin);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const drawerWidthRef = useRef(0);
  const draggableRef = useRef<Draggable | null>(null);
  const mountedRef = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    firstMobileLinkRef.current?.focus();

    const getFocusable = () => {
      const links = drawerRef.current
        ? Array.from(drawerRef.current.querySelectorAll<HTMLElement>("a[href]"))
        : [];
      return menuButtonRef.current ? [menuButtonRef.current, ...links] : links;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keep the rest of the page out of the a11y tree and out of tab order
  // while the drawer is open, so focus/browse-mode navigation can't leak
  // past the drawer's own last link into obscured background content.
  useEffect(() => {
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  // Set the initial (closed) position before paint, so GSAP's transform
  // cache matches the DOM before Draggable or any tween reads it.
  useLayoutEffect(() => {
    if (!drawerRef.current) return;
    drawerWidthRef.current = drawerRef.current.offsetWidth;
    gsap.set(drawerRef.current, { x: drawerWidthRef.current });
  }, []);

  useEffect(() => {
    if (!drawerRef.current || reducedMotion) return;
    const width = drawerRef.current.offsetWidth;
    drawerWidthRef.current = width;

    const [instance] = Draggable.create(drawerRef.current, {
      type: "x",
      bounds: { minX: 0, maxX: width },
      inertia: true,
      edgeResistance: 0.65,
      snap: {
        x: (value: number) => (value < width / 2 ? 0 : width),
      },
      onDragEnd(this: Draggable) {
        setOpen(this.x < width / 2);
      },
    });
    draggableRef.current = instance;

    return () => {
      instance.kill();
      draggableRef.current = null;
    };
  }, [reducedMotion]);

  // Re-measure on resize/rotate so bounds and the closed offset stay correct.
  useEffect(() => {
    const onResize = () => {
      if (!drawerRef.current) return;
      const width = drawerRef.current.offsetWidth;
      drawerWidthRef.current = width;
      draggableRef.current?.applyBounds({ minX: 0, maxX: width });
      if (!open) {
        gsap.set(drawerRef.current, { x: width });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    if (!drawerRef.current) return;
    const width = drawerWidthRef.current || drawerRef.current.offsetWidth;

    if (reducedMotion) {
      gsap.set(drawerRef.current, { x: open ? 0 : width });
      return;
    }

    // Always tween to the target — idempotent if Draggable's own inertia
    // snap already landed there, and self-correcting if that tween got
    // interrupted. Disabling Draggable for the duration avoids it
    // re-rendering the element to its own last-known position on the same
    // tick as the external tween, which otherwise fights and freezes it.
    draggableRef.current?.disable();
    gsap.to(drawerRef.current, {
      x: open ? 0 : width,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
      onComplete: () => {
        draggableRef.current?.enable();
        draggableRef.current?.update();
      },
    });
  }, [open, reducedMotion]);

  // Track which section is currently in view so the desktop nav can
  // highlight it. rootMargin biases toward the vertical center of the
  // viewport rather than firing the instant a section's top edge appears.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    const trigger = ScrollTrigger.create({
      start: 40,
      onUpdate: (self) => {
        header.style.borderBottomColor = self.progress > 0
          ? "var(--color-border-strong)"
          : "var(--color-border)";
      },
    });

    return () => trigger.kill();
  }, { scope: headerRef });

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[80] border-b border-border bg-bg-elevated/70 backdrop-blur-[20px] backdrop-saturate-[1.4] reduced-transparency:bg-bg-elevated/95 reduced-transparency:backdrop-blur-none reduced-transparency:backdrop-saturate-100"
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[72px] md:px-10">
          <Link href="#top" className="font-mono-ui text-sm font-bold text-fg">
            E.ROSADO-ARAUJO
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "font-mono-ui text-xs uppercase transition-colors duration-150 ease-out active:opacity-70",
                    isActive
                      ? "text-accent"
                      : "text-fg-muted hover-capable:hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume (PDF, opens in new tab)"
              className="font-mono-ui text-xs uppercase text-fg-muted transition-colors duration-150 ease-out active:opacity-70 hover-capable:hover:text-accent"
            >
              Resume
            </a>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="text-fg transition-opacity duration-150 ease-out active:opacity-70 md:hidden"
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <List size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-16 z-[60] bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ease-out reduced-transparency:bg-bg/95 reduced-transparency:backdrop-blur-none md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav"
        ref={drawerRef}
        role="dialog"
        aria-modal={open}
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
        className="fixed bottom-0 right-0 top-16 z-[70] flex w-[min(85vw,360px)] touch-none flex-col justify-between border-l border-border-strong bg-bg-elevated px-6 py-10 md:hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -left-3 top-1/2 flex h-14 w-3 -translate-y-1/2 cursor-grab items-center justify-center bg-border-strong active:cursor-grabbing"
        >
          <span className="h-6 w-px bg-fg-muted" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-2.5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-accent) 0 10px, var(--color-bg) 10px 20px)",
          }}
        />
        <nav aria-label="Mobile" className="mt-10 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl uppercase text-fg transition-opacity duration-150 ease-out active:opacity-70"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume (PDF, opens in new tab)"
            onClick={() => setOpen(false)}
            className="font-display text-3xl uppercase text-fg transition-opacity duration-150 ease-out active:opacity-70"
          >
            Resume
          </a>
        </nav>
        <p className="font-mono-ui text-xs text-fg-muted">{site.location}</p>
      </div>
    </>
  );
}
