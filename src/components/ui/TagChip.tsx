import { cn } from "@/lib/utils/cn";

interface TagChipProps {
  children: React.ReactNode;
  className?: string;
}

export function TagChip({ children, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "font-mono-ui inline-block border border-border-strong px-2.5 py-1 text-[0.7rem] uppercase text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
