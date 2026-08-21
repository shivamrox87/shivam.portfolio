import { ImageResponse } from "next/og";
import { blogs } from "@/server/data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { slug } = await params;
  const article = blogs.find((post) => post.slug === slug);
  const title = article?.blogHeading ?? "Writing by Shivam Maurya";
  const titleSize = title.length > 58 ? 56 : 68;

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
          <div
            style={{
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Shivam Maurya · Writing
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: titleSize,
              letterSpacing: -2.5,
              lineHeight: 1.06,
              maxWidth: 820,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#b84a2b",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 24,
              letterSpacing: 0.3,
            }}
          >
            {article?.postedAt ?? "AI systems and developer tools"}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
