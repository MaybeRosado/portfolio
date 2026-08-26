import { ImageResponse } from "next/og";
import { brandColors } from "@/lib/content/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandColors.bg,
          color: brandColors.accent,
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        E
      </div>
    ),
    { ...size }
  );
}
