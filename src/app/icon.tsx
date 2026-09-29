import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 12px",
          background: "#050505",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1,
          borderRadius: 14,
        }}
      >
        <span>Jota</span>
        <span>Pê.</span>
      </div>
    ),
    size
  );
}
