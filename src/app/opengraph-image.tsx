import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dream Decor Studio Iceland — Event Decor for Every Celebration";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #162a4a 50%, #0a1628 100%)",
          fontFamily: "serif",
          color: "#fff",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: "3px solid rgba(191,155,91,0.3)",
            margin: "24px",
            borderRadius: "4px",
            display: "flex"
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "rgba(191,155,91,0.9)",
              display: "flex"
            }}
          >
            Iceland
          </div>

          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "2px",
              lineHeight: 1.1,
              textAlign: "center",
              display: "flex"
            }}
          >
            Dream Decor Studio
          </div>

          <div
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #bf9b5b, transparent)",
              margin: "8px 0",
              display: "flex"
            }}
          />

          <div
            style={{
              fontSize: "20px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              display: "flex"
            }}
          >
            Event Decor for Every Celebration
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(191,155,91,0.7)"
          }}
        >
          <span>Weddings</span>
          <span style={{ display: "flex" }}>·</span>
          <span>Proposals</span>
          <span style={{ display: "flex" }}>·</span>
          <span>Corporate</span>
          <span style={{ display: "flex" }}>·</span>
          <span>Celebrations</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
