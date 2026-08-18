import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const base =
    "font-mono-ui inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors duration-200";
  const variants = {
    primary: "bg-accent text-accent-ink hover:bg-fg",
    secondary:
      "border border-border-strong text-fg hover:border-accent hover:text-accent",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...externalProps}>
      {children}
    </Link>
  );
}
