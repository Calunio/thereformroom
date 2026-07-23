#!/usr/bin/env node
/**
 * The Reform Room — Marken-Emblem-Generator (aus Lisas Original-Logo).
 *
 * Nimmt das gelieferte Original-Logo (scripts/brand/reform-room-logo-source.png,
 * ein Zwei-Ton-Motiv: dunkles Emblem auf Creme) und erzeugt daraus
 * hintergrundfreie, wiederverwendbare Marken-Assets:
 *
 *   1. Ein sauberes, einfarbiges VEKTOR-SVG (via potrace) — beliebig skalierbar,
 *      winzig, umfärbbar. Getrimmt auf eine enge viewBox.
 *   2. Transparente PNGs (Retina-Auflösung) in beiden Markenfarben.
 *   3. Platzsparende WebPs (~1/3 der PNG-Größe) in beiden Markenfarben.
 *
 * Farbvarianten:
 *   - espresso (#4B4233) → auf hellem Grund (Nav solid, hell) — exakt aus dem
 *     Original-Logo gepickt (Colorpicker), damit Emblem & Website-Braun matchen
 *   - cream    (#F9F5ED) → auf dunklem Grund (Footer, Prelaunch, Hero)
 *
 * Output → public/logo/the-reform-room-emblem-{espresso,cream}.{svg,png,webp}
 *
 * Run: npm run generate:brand-logo
 */

import sharp from "sharp";
import potrace from "potrace";
import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(__dirname, "brand", "reform-room-logo-source.png");
const OUT_DIR = join(ROOT, "public/logo");

const COLORS = {
  espresso: "#4B4233",
  cream: "#F9F5ED",
};

// Trace bei hoher Auflösung → glatte Serifen & durchgehender Ring.
const TRACE_WIDTH = 2400;
// Ziel-Rasterbreite der exportierten PNG/WebP (Retina-tauglich, quadratisch).
const RASTER_WIDTH = 900;
// Schwellenwert: Vordergrund (dunkel) von Creme-Hintergrund trennen.
const THRESHOLD = 158;
// Rand um das getrimmte Motiv (in % der Motivgröße).
const PADDING_PCT = 0.03;

const traceImage = promisify((buf, opts, cb) => {
  const tracer = new potrace.Potrace(opts);
  tracer.loadImage(buf, (err) => {
    if (err) return cb(err);
    cb(null, tracer);
  });
});

/** Ermittelt die enge Bounding-Box (alpha > 10) eines gerenderten SVG. */
async function tightViewBox(pathD, svgW, svgH) {
  const probe = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}"><path d="${pathD}" fill="#000" fill-rule="evenodd"/></svg>`;
  const { data, info } = await sharp(Buffer.from(probe))
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const bw = maxX - minX;
  const bh = maxY - minY;
  const pad = Math.round(Math.max(bw, bh) * PADDING_PCT);
  const vx = Math.max(0, minX - pad);
  const vy = Math.max(0, minY - pad);
  const vw = Math.min(width - vx, bw + pad * 2);
  const vh = Math.min(height - vy, bh + pad * 2);
  return { vx, vy, vw, vh };
}

function buildSvg(pathD, vb, color) {
  const { vx, vy, vw, vh } = vb;
  // fill-rule="evenodd" ist entscheidend: potrace legt die Buchstaben-Innenräume
  // (Punzen von e/R/o/a …) als gegenläufige Subpfade an; nur mit evenodd werden
  // sie ausgestanzt statt gefüllt.
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vx} ${vy} ${vw} ${vh}" width="${vw}" height="${vh}" role="img" aria-label="The Reform Room — Pilates Studio">
  <path d="${pathD}" fill="${color}" fill-rule="evenodd"/>
</svg>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  // Vorverarbeitung: hochskalieren, entsättigen, Kontrast normalisieren.
  const pre = await sharp(SRC)
    .resize({ width: TRACE_WIDTH, kernel: "lanczos3" })
    .grayscale()
    .normalize()
    .toBuffer();
  const { width: preW, height: preH } = await sharp(pre).metadata();

  const tracer = await traceImage(pre, {
    threshold: THRESHOLD,
    turdSize: 40,
    turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
    optCurve: true,
    optTolerance: 0.2,
    alphaMax: 1,
  });

  // Reines Pfad-d extrahieren (potrace liefert <path d="..."/>).
  const pathTag = tracer.getPathTag();
  const dMatch = pathTag.match(/ d="([^"]+)"/);
  if (!dMatch) throw new Error("Konnte Pfaddaten von potrace nicht lesen.");
  const pathD = dMatch[1];

  const vb = await tightViewBox(pathD, preW, preH);
  const aspect = vb.vh / vb.vw;
  const rasterH = Math.round(RASTER_WIDTH * aspect);

  for (const [name, color] of Object.entries(COLORS)) {
    const base = join(OUT_DIR, `the-reform-room-emblem-${name}`);
    const svg = buildSvg(pathD, vb, color);
    await writeFile(`${base}.svg`, svg);

    const raster = sharp(Buffer.from(svg), { density: 300 }).resize({
      width: RASTER_WIDTH,
      height: rasterH,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
    await raster.clone().png({ compressionLevel: 9 }).toFile(`${base}.png`);
    await raster.clone().webp({ quality: 92, alphaQuality: 100 }).toFile(`${base}.webp`);

    console.log(`[Brand-Logo] ✓ ${name}: svg + png + webp`);
  }

  console.log(`[Brand-Logo] Fertig → public/logo/the-reform-room-emblem-*`);
}

main().catch((err) => {
  console.error("[Brand-Logo] Fehlgeschlagen:", err.message);
  process.exit(1);
});
