import { cn } from "@/lib/utils/cn";

interface HazardStripeProps {
  className?: string;
}

export function HazardStripe({ className }: HazardStripeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-2.5 w-full md:h-3", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, var(--color-accent) 0 10px, var(--color-bg) 10px 20px)",
      }}
    />
  );
}
