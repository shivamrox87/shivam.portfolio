import { ImageResponse } from "next/og";
import { getSocialPreviewArtwork } from "@/lib/social-preview";

export const alt = "Engraved astrolabe artwork for AI systems and developer tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const artwork = await getSocialPreviewArtwork();
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <img src={artwork} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>,
    size,
  );
}
