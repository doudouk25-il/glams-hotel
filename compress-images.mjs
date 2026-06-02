/**
 * COMPRESSION IMAGES — Priorité mobile
 * Convertit tous les JPG/JPEG/PNG en WebP optimisé
 * Mobile : max 828px | Desktop : max 1920px | Qualité : 80%
 *
 * Usage : node compress-images.mjs
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");

const CONFIG = {
  quality: 80,          // 80% qualité — bon équilibre
  mobileWidth: 828,     // largeur max mobile (iPhone max)
  desktopWidth: 1920,   // largeur max desktop
  extensions: [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".heic", ".HEIC"],
};

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!CONFIG.extensions.map(e => e.toLowerCase()).includes(ext)) return null;

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath));
  const outPath = path.join(dir, base + ".webp");

  // Skip si le WebP existe déjà et est plus récent
  if (fs.existsSync(outPath)) {
    const origStat = fs.statSync(filePath);
    const webpStat = fs.statSync(outPath);
    if (webpStat.mtimeMs > origStat.mtimeMs) return null;
  }

  const sizeBefore = fs.statSync(filePath).size;

  try {
    const metadata = await sharp(filePath).metadata();
    const width = metadata.width || 1920;

    // Détermine la largeur max selon l'orientation et la taille
    const maxWidth = width > CONFIG.mobileWidth ? CONFIG.desktopWidth : CONFIG.mobileWidth;

    await sharp(filePath)
      .resize({
        width: Math.min(width, maxWidth),
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: CONFIG.quality, effort: 4 })
      .toFile(outPath);

    const sizeAfter = fs.statSync(outPath).size;
    const saving = sizeBefore - sizeAfter;
    const percent = Math.round((saving / sizeBefore) * 100);

    return { filePath, outPath, sizeBefore, sizeAfter, saving, percent };
  } catch (err) {
    console.error("  ❌ Erreur sur " + path.basename(filePath) + " : " + err.message);
    return null;
  }
}

function getAllImages(dir) {
  const results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...getAllImages(full));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (CONFIG.extensions.map(e => e.toLowerCase()).includes(ext)) {
        results.push(full);
      }
    }
  }
  return results;
}

async function main() {
  console.log("\n=== COMPRESSION IMAGES — Glams Hotel ===\n");

  const images = getAllImages(PUBLIC_DIR);
  console.log("Images trouvees : " + images.length + "\n");

  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let skipped = 0;

  for (const img of images) {
    const result = await compressImage(img);
    if (!result) {
      skipped++;
      continue;
    }
    totalBefore += result.sizeBefore;
    totalAfter += result.sizeAfter;
    converted++;
    console.log(
      "  ✅ " +
      path.basename(result.filePath).padEnd(50) +
      formatBytes(result.sizeBefore).padStart(8) +
      " → " +
      formatBytes(result.sizeAfter).padStart(7) +
      "  (-" + result.percent + "%)"
    );
  }

  const totalSaving = totalBefore - totalAfter;
  console.log("\n" + "─".repeat(75));
  console.log("Converties   : " + converted);
  console.log("Ignorees     : " + skipped + " (deja a jour)");
  console.log("Avant        : " + formatBytes(totalBefore));
  console.log("Apres        : " + formatBytes(totalAfter));
  console.log("ECONOMIE     : " + formatBytes(totalSaving) + " (-" + Math.round((totalSaving / totalBefore) * 100) + "%)");
  console.log("─".repeat(75));
  console.log("\nFait ! Les .webp sont crees a cote des originaux.");
  console.log("Vous pouvez supprimer les .jpg/.jpeg/.png si tout est OK.\n");
}

main().catch(console.error);
