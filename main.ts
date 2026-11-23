// One-Line Laugh Sprint — smart fridge intervention joke.
// Pure Node.js stdlib, no dependencies, no randomness, no network.
// Writes exactly one original funny line (137 chars) to entry.txt.
// Deterministic by design: the same fixed line is written on every run.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "My smart fridge now texts me 'we need to talk' whenever I open it after midnight — even my appliances have started staging interventions.";

// Validation guard: the entry must be exactly one non-blank line, 1-200 chars.
if (LINE.trim().length === 0 || LINE.length < 1 || LINE.length > 200) {
  console.error(
    `entry line must be a single non-blank line of 1-200 characters (got ${LINE.length})`,
  );
  process.exit(1);
}

function writeEntry(outDir: string, line: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outDir, LINE);
