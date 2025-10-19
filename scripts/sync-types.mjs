// scripts/sync-types.mjs
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source file in types package
const source = path.resolve(__dirname, "../dist/index.d.ts");

// List of consumer projects (relative to this script)
const projects = [
  "../../backend",
  "../../frontend"
  // add more if you have them
];

async function copyTypes() {
  try {
    for (const project of projects) {
      const destDir = path.resolve(__dirname, project, "src/types");
      const destFile = path.join(destDir, "index.ts");

      await fs.mkdir(destDir, { recursive: true });
      await fs.copyFile(source, destFile);

      console.log(`✔ Copied ${source} → ${destFile}`);
    }
  } catch (err) {
    console.error("✘ Failed to sync types:", err);
    process.exit(1);
  }
}

copyTypes();
