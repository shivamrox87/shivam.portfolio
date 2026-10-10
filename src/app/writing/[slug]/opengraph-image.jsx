import { ImageResponse } from "next/og";
import { blogs } from "@/server/data";
import { getSocialPreviewArtwork, getSocialPreviewFonts, SocialPreviewCard } from "@/lib/social-preview";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage({ params }) {
  const { slug } = await params;
  const article = blogs.find((post) => post.slug === slug);
  const title = article?.blogHeading ?? "Writing by Shivam Maurya";
  const titleSize = title.length > 82 ? 44 : title.length > 56 ? 52 : 62;
  const [artwork, fonts] = await Promise.all([getSocialPreviewArtwork(), getSocialPreviewFonts()]);

  return new ImageResponse(
    <SocialPreviewCard
      artwork={artwork}
      eyebrow="Shivam Maurya / Writing"
      title={title}
      detail={article?.postedAt ?? "AI systems and developer tools"}
      titleSize={titleSize}
    />,
    { ...size, fonts },
  );
}
