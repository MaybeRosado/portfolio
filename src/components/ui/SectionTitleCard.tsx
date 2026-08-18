import { cn } from "@/lib/utils/cn";

interface SectionTitleCardProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionTitleCard({ id, children, className }: SectionTitleCardProps) {
  return (
    <h2
      id={id}
      className={cn(
        "font-display max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] uppercase leading-[0.95] text-fg",
        className
      )}
    >
      {children}
    </h2>
  );
}
