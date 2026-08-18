import { cn } from "@/lib/utils/cn";

interface CornerBracketsProps {
  className?: string;
  bracketClassName?: string;
}

const SIZE = 24;
const THICKNESS = 2;

function Bracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute border-accent";
  const styles: Record<typeof position, string> = {
    tl: `top-0 left-0 border-t-2 border-l-2`,
    tr: `top-0 right-0 border-t-2 border-r-2`,
    bl: `bottom-0 left-0 border-b-2 border-l-2`,
    br: `bottom-0 right-0 border-b-2 border-r-2`,
  };
  return (
    <span
      className={cn(base, styles[position])}
      style={{ width: SIZE, height: SIZE, borderWidth: THICKNESS }}
    />
  );
}

export function CornerBrackets({ className, bracketClassName }: CornerBracketsProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className, bracketClassName)}
    >
      <Bracket position="tl" />
      <Bracket position="tr" />
      <Bracket position="bl" />
      <Bracket position="br" />
    </div>
  );
}
