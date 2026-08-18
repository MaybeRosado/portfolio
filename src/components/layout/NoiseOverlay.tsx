export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.035]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px, #fff 3px)",
        backgroundSize: "100% 3px",
        mixBlendMode: "overlay",
      }}
    />
  );
}
