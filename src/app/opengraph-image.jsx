import { ImageResponse } from "next/og";

export const alt = "Shivam Maurya - AI systems, developer tools, and practical learning";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#fbfaf7",
          color: "#171714",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #fbfaf7 0%, #f1eee6 58%, #dfd9ce 100%)",
            display: "flex",
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <div
          style={{
            border: "1px solid #d8d5cc",
            display: "flex",
            height: 420,
            opacity: 0.75,
            position: "absolute",
            right: -90,
            top: 110,
            transform: "rotate(35deg)",
            width: 420,
          }}
        />
        <div
          style={{
            border: "1px solid #d8d5cc",
            display: "flex",
            height: 290,
            opacity: 0.75,
            position: "absolute",
            right: 80,
            top: 10,
            width: 290,
          }}
        />
        <div
          style={{
            background: "#b84a2b",
            borderRadius: 999,
            display: "flex",
            height: 16,
            position: "absolute",
            right: 154,
            top: 122,
            width: 16,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "76px 88px",
            position: "relative",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Arial, sans-serif", fontSize: 20, letterSpacing: 4, textTransform: "uppercase" }}>
            Shivam Maurya
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 72, letterSpacing: -3, lineHeight: 1.06 }}>
              AI systems, developer tools,
            </div>
            <div style={{ color: "#b84a2b", display: "flex", fontFamily: "Georgia, serif", fontSize: 72, letterSpacing: -3, lineHeight: 1.06 }}>
              and practical learning.
            </div>
          </div>
          <div style={{ display: "flex", fontFamily: "Arial, sans-serif", fontSize: 24, letterSpacing: 0.3 }}>
            Exploring AI. Building products. Sharing what I learn.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
