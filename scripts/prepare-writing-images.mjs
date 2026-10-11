import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import React from "react";
import sharp from "sharp";
import { ImageResponse } from "next/og.js";
import { blogs } from "../src/server/data.js";

const root = process.cwd();
const requestedSlug = process.argv[2];
if (!requestedSlug) {
  throw new Error("Usage: npm run writing:images -- <article-slug|--all>");
}

const articles = requestedSlug === "--all"
  ? blogs
  : blogs.filter((article) => article.slug === requestedSlug);
if (!articles.length) throw new Error(`No writing post found for ${requestedSlug}`);

const [newsreader, mono] = await Promise.all([
  readFile(path.join(root, "public/fonts/newsreader-400.ttf")),
  readFile(path.join(root, "public/fonts/ibm-plex-mono-400.ttf")),
]);
const fonts = [
  { name: "Newsreader", data: newsreader, weight: 400, style: "normal" },
  { name: "IBM Plex Mono", data: mono, weight: 400, style: "normal" },
];

function removePaper(data, info) {
  const sample = (x, y) => {
    const offset = (y * info.width + x) * 4;
    return [data[offset], data[offset + 1], data[offset + 2]];
  };
  const corners = [
    sample(2, 2),
    sample(info.width - 3, 2),
    sample(2, info.height - 3),
    sample(info.width - 3, info.height - 3),
  ];
  const paper = [0, 1, 2].map((channel) =>
    Math.round(corners.reduce((sum, pixel) => sum + pixel[channel], 0) / corners.length),
  );

  for (let offset = 0; offset < data.length; offset += 4) {
    const distance = Math.hypot(
      data[offset] - paper[0],
      data[offset + 1] - paper[1],
      data[offset + 2] - paper[2],
    );
    const t = Math.max(0, Math.min(1, (distance - 8) / 42));
    data[offset + 3] = Math.round(data[offset + 3] * t * t * (3 - 2 * t));
  }

  return data;
}

function previewCard(article, artwork) {
  const title = article.blogHeading;
  const titleSize = title.length > 82 ? 43 : title.length > 56 ? 51 : 60;
  const element = (tag, style, children, extra = {}) =>
    React.createElement(tag, { style, ...extra }, children);

  return element("div", {
    display: "flex", width: "100%", height: "100%", background: "#f9f6ef", color: "#252522",
  }, [
    element("div", {
      display: "flex", width: 630, height: "100%", flexDirection: "column",
      justifyContent: "space-between", padding: "66px 35px 62px 72px",
    }, [
      element("div", {
        display: "flex", fontFamily: "IBM Plex Mono", fontSize: 18,
        letterSpacing: 2.1, textTransform: "uppercase",
      }, "Shivam Maurya / Writing", { key: "eyebrow" }),
      element("div", {
        display: "flex", fontFamily: "Newsreader", fontSize: titleSize,
        lineHeight: 1.08, letterSpacing: -2.2,
      }, title, { key: "title" }),
      element("div", {
        display: "flex", fontFamily: "IBM Plex Mono", fontSize: 20, color: "#625d57",
      }, article.postedAt, { key: "category" }),
    ], { key: "copy" }),
    element("div", {
      display: "flex", width: 570, height: "100%", alignItems: "center",
      justifyContent: "center", overflow: "hidden",
    }, element("img", {
      height: "100%", width: "100%", objectFit: "contain",
    }, undefined, { src: artwork, alt: "" }), { key: "artwork" }),
  ]);
}

await Promise.all([
  mkdir(path.join(root, "public/writing-artwork/cutout"), { recursive: true }),
  mkdir(path.join(root, "public/social/writing"), { recursive: true }),
]);

for (const article of articles) {
  const source = path.join(root, "public/writing-artwork", `${article.slug}-light.webp`);
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const cutout = await sharp(removePaper(data, info), { raw: info })
    .resize(720, 1080)
    .webp({ quality: 72, alphaQuality: 70, effort: 6 })
    .toBuffer();
  await sharp(cutout).toFile(path.join(root, "public/writing-artwork/cutout", `${article.slug}.webp`));

  const artwork = `data:image/png;base64,${(await sharp(cutout).png().toBuffer()).toString("base64")}`;
  const response = new ImageResponse(previewCard(article, artwork), {
    width: 1200, height: 630, fonts,
  });
  const png = Buffer.from(await response.arrayBuffer());
  await sharp(png).jpeg({ quality: 87, mozjpeg: true })
    .toFile(path.join(root, "public/social/writing", `${article.slug}.jpg`));
  console.log(`Prepared writing images for ${article.slug}`);
}
