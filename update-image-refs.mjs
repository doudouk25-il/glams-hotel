/**
 * Met a jour toutes les references d'images dans le code
 * .jpg / .jpeg / .png → .webp (uniquement si le .webp existe)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");
const CODE_DIRS = ["components", "app", "lib"];

function getWebpFiles(dir) {
  const webps = new Set();
  const scan = (d) => {
    for (const item of fs.readdirSync(d)) {
      const full = path.join(d, item);
      if (fs.statSync(full).isDirectory()) scan(full);
      else if (item.endsWith(".webp")) webps.add(full);
    }
  };
  scan(dir);
  return webps;
}

function getCodeFiles(dirs) {
  const files = [];
  for (const dir of dirs) {
    const full = path.join(__dirname, dir);
    if (!fs.existsSync(full)) continue;
    for (const item of fs.readdirSync(full)) {
      if (item.endsWith(".tsx") || item.endsWith(".ts") || item.endsWith(".js")) {
        files.push(path.join(full, item));
      }
    }
  }
  return files;
}

const webpFiles = getWebpFiles(PUBLIC_DIR);
const codeFiles = getCodeFiles(CODE_DIRS);

let totalReplaced = 0;

for (const file of codeFiles) {
  let content = fs.readFileSync(file, "utf8");
  let modified = false;

  // Remplace chaque extension si le .webp correspondant existe
  const updated = content.replace(/([^\s"'`]+)\.(jpg|jpeg|png|JPG|JPEG|PNG)/g, (match, base, ext) => {
    // Cherche si un .webp existe pour ce fichier
    // Le path peut etre absolu (public/) ou relatif (/Images/...)
    let candidates = [];
    if (base.startsWith("/")) {
      candidates.push(path.join(PUBLIC_DIR, base + ".webp"));
    } else {
      candidates.push(path.join(PUBLIC_DIR, base + ".webp"));
    }
    const webpExists = candidates.some(c => fs.existsSync(c));
    if (webpExists) {
      modified = true;
      totalReplaced++;
      return base + ".webp";
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(file, updated, "utf8");
    console.log("Mis a jour : " + path.relative(__dirname, file));
  }
}

console.log("\nTotal remplacements : " + totalReplaced);
