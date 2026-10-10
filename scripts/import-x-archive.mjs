#!/usr/bin/env node
/**
 * Turn an X data archive into structured JSON for curation.
 *
 * Usage:
 *   node scripts/import-x-archive.mjs <path-to-extracted-archive> [--include-replies] [--out data/x-posts.json]
 *
 * The archive's files are not JSON — each is a JS assignment like
 * `window.YTD.tweets.part0 = [ ... ]` — so the prefix is stripped before
 * parsing. Long-form posts live in note-tweet.js and are merged in.
 *
 * No dependencies: node builtins only.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = { input: null, includeReplies: false, out: "data/x-posts.json" };
  const rest = argv.slice(2);
  args.input = rest.find((arg) => !arg.startsWith("--")) ?? null;
  args.includeReplies = rest.includes("--include-replies");
  const outIndex = rest.indexOf("--out");
  if (outIndex !== -1 && rest[outIndex + 1]) args.out = rest[outIndex + 1];
  return args;
}

/** `window.YTD.tweets.part0 = [...]` -> the parsed array. */
function loadYtdArray(file) {
  const raw = readFileSync(file, "utf8");
  const eq = raw.indexOf("=");
  if (eq === -1) throw new Error(`${path.basename(file)} does not look like an archive file`);
  return JSON.parse(raw.slice(eq + 1).trim().replace(/;\s*$/, ""));
}

/** Archive files may be split into part0, part1, ... */
function loadParts(dataDir, prefix) {
  const files = readdirSync(dataDir)
    .filter((name) => name.startsWith(prefix) && name.endsWith(".js"))
    .sort();
  if (files.length === 0) return null;
  return files.flatMap((name) => loadYtdArray(path.join(dataDir, name)));
}

function canonicalUrl(handle, id) {
  return `https://x.com/${handle}/status/${id}`;
}

function normalise(tweet, handle, noteById) {
  const id = tweet.id_str;
  const note = noteById.get(id);
  // Archives put the body in `full_text`; older exports used `text`. Reading
  // only `text` silently produces rows with no post content at all.
  const body = tweet.full_text ?? tweet.text ?? "";
  return {
    id,
    url: canonicalUrl(handle, id),
    date: tweet.created_at,
    text: note?.text ?? body,
    longform: Boolean(note),
    replies: Number(tweet.reply_count ?? 0),
    likes: Number(tweet.favorite_count ?? 0),
    reposts: Number(tweet.retweet_count ?? 0),
    isReply: Boolean(tweet.in_reply_to_status_id_str),
    isRepost: Boolean(tweet.retweeted) || body.startsWith("RT @"),
    hasMedia: (tweet.entities?.media?.length ?? 0) > 0,
  };
}

const args = parseArgs(process.argv);
if (!args.input) {
  console.error("Usage: node scripts/import-x-archive.mjs <path-to-extracted-archive> [--include-replies] [--out <file>]");
  process.exit(1);
}

const dataDir = existsSync(path.join(args.input, "data"))
  ? path.join(args.input, "data")
  : args.input;

if (!existsSync(dataDir)) {
  console.error(`No data directory at ${dataDir}`);
  process.exit(1);
}

const tweets = loadParts(dataDir, "tweets");
if (!tweets) {
  console.error(`No tweets*.js found in ${dataDir}. Is that the extracted archive root?`);
  process.exit(1);
}

// Long-form posts are stored separately and keyed by the tweet they belong to.
const notes = loadParts(dataDir, "note-tweet") ?? [];
const noteById = new Map(
  notes
    .map((entry) => entry.noteTweet ?? entry.note)
    .filter(Boolean)
    .map((note) => [note.tweet_id ?? note.tweetId, { text: (note.core?.text ?? note.text ?? "").trim() }]),
);

const handle = "@_shivammaurya__".replace("@", "");
const all = tweets
  .map((entry) => normalise(entry.tweet ?? entry, handle, noteById))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const posts = all.filter(
  (post) => !post.isRepost && (args.includeReplies || !post.isReply),
);

const outPath = path.resolve(args.out);
mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(
  outPath,
  `${JSON.stringify({ handle, exported: new Date().toISOString(), count: posts.length, posts }, null, 2)}\n`,
);

const replies = all.filter((post) => post.isReply).length;
const reposts = all.filter((post) => post.isRepost).length;
console.log(`read      ${all.length} entries from ${dataDir}`);
console.log(`kept      ${posts.length} posts`);
console.log(`excluded  ${reposts} reposts, ${replies} replies${args.includeReplies ? " (replies were NOT excluded)" : ""}`);
if (notes.length) console.log(`longform  ${noteById.size} note posts merged`);
console.log(`wrote     ${outPath}`);
