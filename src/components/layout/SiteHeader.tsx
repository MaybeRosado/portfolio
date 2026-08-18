"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { X, List } from "@phosphor-icons/react/dist/ssr";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/motion/gsapConfig";
import { navLinks, site } from "@/lib/content/site";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

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
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-[80] border-b border-border bg-bg-elevated/95"
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[72px] md:px-10">
        <Link href="#top" className="font-mono-ui text-sm font-bold text-fg">
          E.ROSADO-ARAUJO
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-ui text-xs uppercase text-fg-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l border-border pl-6">
            <span
              aria-hidden="true"
              className="h-2 w-2 bg-status-green"
            />
            <span className="font-mono-ui text-xs uppercase text-fg-muted">
              Available
            </span>
          </div>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-fg md:hidden"
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <List size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-16 z-[70] flex h-[calc(100vh-4rem)] flex-col justify-between bg-bg-elevated px-6 py-10 transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-2.5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-accent) 0 10px, var(--color-bg) 10px 20px)",
          }}
        />
        <nav aria-label="Mobile" className="mt-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl uppercase text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="font-mono-ui text-xs text-fg-muted">{site.location}</p>
      </div>
    </header>
  );
}
