import { permanentRedirect } from "next/navigation";

export default async function LegacyBlogPage({ params }) {
  const { slug } = await params;
  permanentRedirect(`/writing/${slug}`);
}
