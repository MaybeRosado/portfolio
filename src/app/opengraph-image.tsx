import { ImageResponse } from "next/og";
import { site, brandColors } from "@/lib/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: brandColors.bg,
          color: brandColors.fg,
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: brandColors.accent,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          SYS://EMILIO-ROSADO-ARAUJO
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          <div>Interfaces</div>
          <div>Engineered</div>
        </div>
        <div style={{ fontSize: 28, color: brandColors.fgMuted, marginTop: 32 }}>
          {site.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
