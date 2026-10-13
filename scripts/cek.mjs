#!/usr/bin/env node
// Health check for this repo: every post folder is complete, JADWAL and posts/ agree, nothing too big gets committed.
// Usage: node scripts/cek.mjs        (exit 1 when there are errors)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const POSTS = join(ROOT, "posts");
const IGNORED = new Set([".mp4", ".mov", ".webm", ".mp3", ".wav", ".m4a", ".zip", ".rar"]); // keep in sync with .gitignore
const GH_LIMIT = 100 * 1024 * 1024;
const errors = [], warns = [], rows = [];

const jadwal = readFileSync(join(ROOT, "JADWAL-UPLOAD.md"), "utf8");
const antrean = jadwal.split(/^## /m).find((s) => s.startsWith("Antrean")) ?? "";
const inJadwal = new Set([...antrean.matchAll(/^\|\s*\d+\s*\|.*?`([^`]+)`/gm)].map((m) => m[1]));

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));

const seen = new Set();
for (const folder of readdirSync(POSTS, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)) {
  const dir = join(POSTS, folder);
  const m = folder.match(/^(\d{4}-\d{2}-\d{2})_(.+)$/); // posts/<YYYY-MM-DD>_<projek>
  if (!m) errors.push(`${folder}: nama folder harus <YYYY-MM-DD>_<projek>`);
  const p = m ? m[2] : folder;
  if (seen.has(p)) errors.push(`${p}: ada lebih dari 1 folder untuk projek yang sama`);
  seen.add(p);
  const files = readdirSync(dir);
  const isVideo = files.some((f) => f.endsWith("-master60.mp4"));
  const slides = files.filter((f) => /^slide-\d+\.jpg$/.test(f)).length;
  const cover = files.some((f) => f.endsWith("-cover.jpg")) || slides > 0 || files.some((f) => f.endsWith(".jpg"));
  const kind = isVideo ? "video" : slides ? `carousel ${slides}` : "lain";

  if (!files.includes("caption.txt")) errors.push(`${p}: caption.txt tidak ada`);
  else {
    const judul = (readFileSync(join(dir, "caption.txt"), "utf8").match(/JUDUL[^\n]*\n+([^\n]+)/) || [])[1];
    if (judul && judul.trim().length > 90) warns.push(`${p}: JUDUL ${judul.trim().length} karakter (maks 90)`);
  }
  if (isVideo && !files.some((f) => f.endsWith("-cover.jpg"))) warns.push(`${p}: video tanpa <projek>-cover.jpg (TikTok pakai frame video)`);
  else if (!cover) errors.push(`${p}: tidak ada cover/slide JPG`);
  if (!inJadwal.has(p)) warns.push(`${p}: belum ada di tabel Antrean JADWAL-UPLOAD.md`);
  for (const f of walk(dir)) {
    const size = statSync(f).size;
    if (!IGNORED.has(extname(f).toLowerCase()) && size > GH_LIMIT) errors.push(`${f.slice(ROOT.length)}: ${(size / 1048576) | 0} MB > batas GitHub 100 MB dan tidak di-gitignore`);
  }
  rows.push(`  ${folder.padEnd(31)} ${kind.padEnd(12)} ${files.length} file`);
}
for (const p of inJadwal) if (!seen.has(p)) warns.push(`${p}: ada di JADWAL tapi folder posts/<tanggal>_${p}/ belum ada`);

console.log(`posts/ (${rows.length}):\n${rows.join("\n")}`);
for (const w of warns) console.log(`  WARN  ${w}`);
for (const e of errors) console.log(`  ERROR ${e}`);
console.log(errors.length ? `\n${errors.length} error, ${warns.length} warn` : `\nOK — 0 error, ${warns.length} warn`);
process.exit(errors.length ? 1 : 0);
