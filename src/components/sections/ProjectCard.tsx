import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/types/content";
import { TagChip } from "@/components/ui/TagChip";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { cn } from "@/lib/utils/cn";

interface ProjectCardProps {
  project: Project;
  size?: "featured" | "standard" | "compact";
}

export function ProjectCard({ project, size = "standard" }: ProjectCardProps) {
  const isFeatured = size === "featured";
  const isCompact = size === "compact";

  return (
    <article
      className={cn(
        "group flex flex-col",
        isFeatured && "gap-6",
        !isFeatured && "gap-4"
      )}
    >
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] w-full overflow-hidden border border-border transition-transform duration-150 ease-out active:scale-[0.98]"
        aria-label={`Visit ${project.name} (opens in a new tab)`}
      >
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.name} homepage`}
          fill
          sizes={isFeatured ? "100vw" : "50vw"}
          className="object-cover object-top grayscale contrast-125 transition-transform duration-500 hover-capable:group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-multiply"
          style={{ backgroundColor: "var(--color-accent)", opacity: 0.16 }}
        />
        <CornerBrackets className="opacity-0 transition-opacity duration-300 hover-capable:group-hover:opacity-100" />
      </Link>

      <div className="flex flex-col gap-3">
        <p className="font-mono-ui text-[0.7rem] uppercase text-accent">
          {project.descriptor}
        </p>
        <h3
          className={cn(
            "font-display uppercase text-fg",
            isFeatured
              ? "text-3xl md:text-4xl"
              : isCompact
                ? "text-xl md:text-2xl"
                : "text-2xl md:text-3xl"
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            "text-fg-muted",
            isCompact ? "text-sm" : "max-w-[60ch] text-sm md:text-base"
          )}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-ui mt-1 inline-flex w-fit items-center gap-1.5 text-xs uppercase text-fg transition-colors duration-150 ease-out hover-capable:hover:text-accent active:opacity-70"
        >
          Visit Site
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
