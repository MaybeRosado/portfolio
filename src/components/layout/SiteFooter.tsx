import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  FileArrowDown,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { socialLinks, site } from "@/lib/content/site";

const icons = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  email: EnvelopeSimple,
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono-ui text-xs uppercase text-fg-muted">
          © {new Date().getFullYear()} {site.name} — {site.location}
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            const external = link.icon !== "email";
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-fg-muted transition-colors duration-150 ease-out hover-capable:hover:text-accent active:opacity-70"
              >
                <Icon size={18} weight="light" aria-hidden="true" />
                <span className="font-mono-ui text-xs uppercase">{link.label}</span>
              </Link>
            );
          })}

          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume (PDF, opens in new tab)"
            className="flex items-center gap-2 text-fg-muted transition-colors duration-150 ease-out hover-capable:hover:text-accent active:opacity-70"
          >
            <FileArrowDown size={18} weight="light" aria-hidden="true" />
            <span className="font-mono-ui text-xs uppercase">Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
