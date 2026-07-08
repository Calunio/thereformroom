#!/usr/bin/env node
/**
 * Erzeugt Favicons aus app/icon.svg (Monogramm) für Browser-Tabs, Mobile & Google.
 * app/icon.svg wird von scripts/generate-logo.mjs erstellt.
 */

import sharp from "sharp";
import { mkdir, writeFile, access } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const INPUT = join(ROOT, "app/icon.svg");
const ICONS_DIR = join(ROOT, "public/icons");

/** Marken-Hintergrund für Apple-Touch-Icon (opak, sonst schwarze Ecken auf iOS). */
const BRAND_BG = { r: 0xf7, g: 0xf2, b: 0xea, alpha: 1 };

function pngBuffersToIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = 6 + count * 16;
  for (const { size, png } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.png)]);
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function generate() {
  if (!(await exists(INPUT))) {
    console.error("[Favicon] app/icon.svg fehlt — bitte zuerst `npm run generate:logo` ausführen.");
    process.exit(1);
  }
  console.log("[Favicon] Generiere Icons aus app/icon.svg …");
  await mkdir(ICONS_DIR, { recursive: true });

  await sharp(INPUT, { density: 384 }).resize(512, 512).png().toFile(join(ROOT, "app/icon.png"));
  await sharp(INPUT, { density: 384 }).resize(192, 192).png().toFile(join(ICONS_DIR, "icon-192.png"));
  await sharp(INPUT, { density: 384 }).resize(48, 48).png().toFile(join(ICONS_DIR, "favicon-48.png"));

  await sharp(INPUT, { density: 384 })
    .resize(180, 180)
    .flatten({ background: BRAND_BG })
    .png()
    .toFile(join(ROOT, "app/apple-icon.png"));
  await sharp(INPUT, { density: 384 })
    .resize(180, 180)
    .flatten({ background: BRAND_BG })
    .png()
    .toFile(join(ROOT, "public/apple-touch-icon.png"));

  const icoSizes = [16, 32, 48, 64];
  const icoImages = await Promise.all(
    icoSizes.map(async (size) => ({
      size,
      png: await sharp(INPUT, { density: 384 }).resize(size, size).png().toBuffer(),
    })),
  );
  const faviconIco = pngBuffersToIco(icoImages);
  await writeFile(join(ROOT, "app/favicon.ico"), faviconIco);
  await writeFile(join(ROOT, "public/favicon.ico"), faviconIco);

  console.log("[Favicon] Fertig → app/favicon.ico, app/icon.png, app/apple-icon.png, public/apple-touch-icon.png, public/icons/*");
}

generate().catch((err) => {
  console.error("[Favicon] Fehlgeschlagen:", err);
  process.exit(1);
});
