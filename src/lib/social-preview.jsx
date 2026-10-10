import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getSocialPreviewArtwork(filename = "social-preview-art.png") {
  const artwork = await readFile(path.join(process.cwd(), "public", filename));
  return `data:image/png;base64,${artwork.toString("base64")}`;
}

export async function getSocialPreviewFonts() {
  const [newsreader, mono] = await Promise.all([
    readFile(path.join(process.cwd(), "public", "fonts", "newsreader-400.ttf")),
    readFile(path.join(process.cwd(), "public", "fonts", "ibm-plex-mono-400.ttf")),
  ]);
  return [
    { name: "Newsreader", data: newsreader, weight: 400, style: "normal" },
    { name: "IBM Plex Mono", data: mono, weight: 400, style: "normal" },
  ];
}

export function SocialPreviewCard({ artwork, eyebrow, title, detail, titleSize = 72 }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#f5f4ef", color: "#252522" }}>
      <img src={artwork} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "relative", display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", padding: "66px 72px" }}>
        <div style={{ display: "flex", fontFamily: "IBM Plex Mono", fontSize: 18, letterSpacing: 2.1, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", maxWidth: 500, fontFamily: "Newsreader", fontSize: titleSize, fontWeight: 400, letterSpacing: -2.4, lineHeight: 1.08 }}>
          {title}
        </div>
        <div style={{ display: "flex", maxWidth: 500, fontFamily: "IBM Plex Mono", fontSize: 20, lineHeight: 1.5, color: "#625d57" }}>
          {detail}
        </div>
      </div>
    </div>
  );
}
