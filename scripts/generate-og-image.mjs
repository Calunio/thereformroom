#!/usr/bin/env node
/**
 * Erzeugt das Open-Graph-Bild (1200×630) aus dem Hero-Bild.
 * Fällt auf public/images/hero.png zurück, wenn keine .webp existiert.
 * Wenn kein Hero-Bild vorhanden ist, wird der Schritt übersprungen (Build bricht nicht ab).
 */

import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { stat, access } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CANDIDATES = [
  join(ROOT, "public/images/hero.webp"),
  join(ROOT, "public/images/hero.png"),
  join(ROOT, "public/images/hero.jpg"),
];
const OUTPUT = join(ROOT, "public/og-image.jpg");

async function firstExisting(paths) {
  for (const p of paths) {
    try {
      await access(p);
      return p;
    } catch {
      /* weiter */
    }
  }
  return null;
}

async function generate() {
  const input = await firstExisting(CANDIDATES);
  if (!input) {
    console.warn("[OG Image] Kein Hero-Bild gefunden — übersprungen (og-image.jpg nicht erzeugt).");
    return;
  }

  console.log(`[OG Image] Verarbeite ${input} → og-image.jpg …`);
  await sharp(input)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(OUTPUT);

  const stats = await stat(OUTPUT);
  console.log(`[OG Image] ✓ og-image.jpg (1200×630, ${Math.round(stats.size / 1024)}KB)`);
}

generate().catch((err) => {
  console.error("[OG Image] Fehlgeschlagen:", err);
  process.exit(1);
});
