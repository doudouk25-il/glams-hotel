/**
 * Supprime les originaux JPG/JPEG/PNG si un .webp existe à côté
 * Garde les HEIC et les fichiers sans .webp correspondant
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];
// Ne jamais supprimer ces fichiers même si un .webp existe
const KEEP = ["glamour-girl.png", "Favicones.png", "file.svg"];

let deleted = 0;
let kept = 0;
let totalFreed = 0;

function scan(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) { scan(full); continue; }

    const ext = path.extname(item);
    if (!EXTENSIONS.map(e => e.toLowerCase()).includes(ext.toLowerCase())) continue;
    if (KEEP.includes(item)) { kept++; continue; }

    const webpPath = full.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, ".webp");
    if (fs.existsSync(webpPath)) {
      const size = fs.statSync(full).size;
      fs.unlinkSync(full);
      totalFreed += size;
      deleted++;
      console.log("  Supprime : " + path.relative(PUBLIC_DIR, full) + " (" + (size / 1024 / 1024).toFixed(1) + " MB)");
    } else {
      kept++;
    }
  }
}

scan(PUBLIC_DIR);

console.log("\nSupprimes  : " + deleted + " fichiers");
console.log("Gardes     : " + kept + " fichiers (pas de WebP ou protection)");
console.log("Liberes    : " + (totalFreed / 1024 / 1024).toFixed(0) + " MB");
