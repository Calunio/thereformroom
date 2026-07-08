#!/usr/bin/env node
/**
 * The Reform Room — Logo-Asset-Generator.
 *
 * Erzeugt aus den (lizenzfreien, OFL) Marken-Schriften Cormorant Garamond + Jost
 * echte VEKTOR-Logos (Text als Pfade → keine Font-Abhängigkeit beim Öffnen) und
 * rastert sie zu transparenten PNGs. So liegt das Logo hintergrundfrei als SVG
 * UND PNG vor — unabhängig vom ursprünglichen ChatGPT-PNG.
 *
 * Output:
 *   public/logo/the-reform-room-stacked-espresso.svg   (+ .png)
 *   public/logo/the-reform-room-stacked-cream.svg       (+ .png)
 *   public/logo/the-reform-room-wordmark-espresso.svg   (+ .png)
 *   public/logo/the-reform-room-wordmark-cream.svg      (+ .png)
 *   app/icon.svg                                        (Monogramm für Favicon)
 *
 * Run: npm run generate:logo   (benötigt Netzwerk beim ersten Lauf, um die
 * Font-TTFs nach scripts/fonts/ zu laden; danach offline nutzbar).
 */

import opentype from "opentype.js";
import sharp from "sharp";
import { mkdir, writeFile, readFile, access } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const FONT_DIR = join(__dirname, "fonts");
const OUT_DIR = join(ROOT, "public/logo");

const ESPRESSO = "#3B3128";
const CREAM = "#F7F2EA";

const FONTS = {
  cormorant: {
    file: "CormorantGaramond.ttf",
    url: "https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf",
  },
  jost: {
    file: "Jost.ttf",
    url: "https://raw.githubusercontent.com/google/fonts/main/ofl/jost/Jost%5Bwght%5D.ttf",
  },
};

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureFont({ file, url }) {
  const dest = join(FONT_DIR, file);
  if (await exists(dest)) return dest;
  await mkdir(FONT_DIR, { recursive: true });
  console.log(`[Logo] Lade Font: ${file}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font-Download fehlgeschlagen (${res.status}): ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return dest;
}

/** Legt Glyphen mit Sperrung (letter-spacing) aus und liefert {path, width}. */
function tracedText(font, text, fontSize, tracking = 0) {
  let x = 0;
  const parts = [];
  const scale = fontSize / font.unitsPerEm;
  for (const ch of text) {
    const glyph = font.charToGlyph(ch);
    const p = glyph.getPath(x, 0, fontSize);
    parts.push(p.toPathData(3));
    x += glyph.advanceWidth * scale + tracking;
  }
  // letztes tracking wieder abziehen für exakte Breite
  const width = x - tracking;
  return { d: parts.join(" "), width };
}

function group(d, color) {
  return `<path d="${d}" fill="${color}"/>`;
}

function buildStacked(cormorant, jost, color) {
  const W = 1000;
  const cx = W / 2;

  // Kreis-Ring (eigenständiges Emblem)
  const ringR = 470;
  const ring = `<circle cx="${cx}" cy="${cx}" r="${ringR}" fill="none" stroke="${color}" stroke-width="3"/>`;

  const items = [];

  // Zeile 1: "The" (normal, kleiner, inline) + "Reform" auf gleicher Grundlinie
  const line1Baseline = 436;
  const theSize = 96;
  const wordSize = 176;
  const the = tracedText(cormorant, "The ", theSize, 2);
  const reform = tracedText(cormorant, "Reform", wordSize, 2);
  const line1W = the.width + reform.width;
  const line1X = cx - line1W / 2;
  items.push({ d: the.d, x: line1X, y: line1Baseline });
  items.push({ d: reform.d, x: line1X + the.width, y: line1Baseline });

  // Zeile 2: "Room"
  const room = tracedText(cormorant, "Room", wordSize, 2);
  items.push({ d: room.d, x: cx - room.width / 2, y: 618 });

  // "PILATES STUDIO"
  const ps = tracedText(jost, "PILATES STUDIO", 32, 20);
  items.push({ d: ps.d, x: cx - ps.width / 2, y: 730 });

  const paths = items
    .map((it) => `<g transform="translate(${it.x}, ${it.y})">${group(it.d, color)}</g>`)
    .join("\n  ");

  // Dezenter einzelner Trennstrich (kein Punkt-Linien-Ornament)
  const ruleY = 674;
  const rule = `<line x1="${cx - 85}" y1="${ruleY}" x2="${cx + 85}" y2="${ruleY}" stroke="${color}" stroke-width="1.5" opacity="0.6"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${W}" width="${W}" height="${W}" role="img" aria-label="The Reform Room — Pilates Studio">
  ${ring}
  ${paths}
  ${rule}
</svg>`;
}

function buildWordmark(cormorant, color) {
  // Einzeilige Signatur: "The" normal (kleiner) inline vor "Reform Room",
  // beide auf gemeinsamer Grundlinie — kein getracktes Mini-Label darüber.
  const theSize = 82;
  const mainSize = 150;
  const gap = 22;
  const the = tracedText(cormorant, "The", theSize, 2);
  const main = tracedText(cormorant, "Reform Room", mainSize, 3);
  const pad = 20;
  const baseline = 150;
  const W = Math.ceil(pad * 2 + the.width + gap + main.width);
  const H = 210;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="The Reform Room">
  <g transform="translate(${pad}, ${baseline})" opacity="0.9">${group(the.d, color)}</g>
  <g transform="translate(${pad + the.width + gap}, ${baseline})">${group(main.d, color)}</g>
</svg>`;
}

function buildMonogram(cormorant, color) {
  const W = 512;
  const cx = W / 2;
  const ring = `<circle cx="${cx}" cy="${cx}" r="236" fill="none" stroke="${color}" stroke-width="14"/>`;
  const r = tracedText(cormorant, "R", 340, 0);
  const x = cx - r.width / 2;
  const y = cx + 118;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${W}" width="${W}" height="${W}" role="img" aria-label="The Reform Room">
  ${ring}
  <g transform="translate(${x}, ${y})">${group(r.d, color)}</g>
</svg>`;
}

async function svgToPng(svg, outPath, width) {
  await sharp(Buffer.from(svg), { density: 300 })
    .resize({ width, fit: "inside" })
    .png()
    .toFile(outPath);
}

async function main() {
  const cormorant = opentype.loadSync(await ensureFont(FONTS.cormorant));
  const jost = opentype.loadSync(await ensureFont(FONTS.jost));

  await mkdir(OUT_DIR, { recursive: true });

  const variants = [
    { name: "stacked-espresso", svg: buildStacked(cormorant, jost, ESPRESSO), png: 1200 },
    { name: "stacked-cream", svg: buildStacked(cormorant, jost, CREAM), png: 1200 },
    { name: "wordmark-espresso", svg: buildWordmark(cormorant, ESPRESSO), png: 1200 },
    { name: "wordmark-cream", svg: buildWordmark(cormorant, CREAM), png: 1200 },
  ];

  for (const v of variants) {
    const base = join(OUT_DIR, `the-reform-room-${v.name}`);
    await writeFile(`${base}.svg`, v.svg);
    await svgToPng(v.svg, `${base}.png`, v.png);
    console.log(`[Logo] ✓ ${v.name} (svg + transparentes png)`);
  }

  // Favicon-Quelle
  const icon = buildMonogram(cormorant, ESPRESSO);
  await writeFile(join(ROOT, "app/icon.svg"), icon);
  console.log("[Logo] ✓ app/icon.svg (Monogramm)");

  console.log("[Logo] Fertig → public/logo/*, app/icon.svg");
}

main().catch((err) => {
  console.error("[Logo] Fehlgeschlagen:", err.message);
  process.exit(1);
});
