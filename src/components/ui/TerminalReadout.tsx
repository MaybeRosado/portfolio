import { cn } from "@/lib/utils/cn";

interface TerminalReadoutProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalReadout({ children, className }: TerminalReadoutProps) {
  return (
    <samp
      className={cn(
        "font-mono-ui block text-xs uppercase text-fg-muted",
        className
      )}
    >
      {children}
    </samp>
  );
}
