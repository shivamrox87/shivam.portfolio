import { ImageResponse } from "next/og";
import { getSocialPreviewArtwork, getSocialPreviewFonts, SocialPreviewCard } from "@/lib/social-preview";

export const alt = "Shivam Maurya, Senior AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const [artwork, fonts] = await Promise.all([getSocialPreviewArtwork(), getSocialPreviewFonts()]);
  return new ImageResponse(
    <SocialPreviewCard
      artwork={artwork}
      eyebrow="Senior AI Engineer"
      title="Shivam Maurya"
      detail="AI systems · developer tools"
      titleSize={76}
    />,
    { ...size, fonts },
  );
}
