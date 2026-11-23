// One-Line Laugh Sprint — screen-time report joke.
// Pure Node.js stdlib, no dependencies, no randomness, no network.
// Writes exactly one original funny line (106 chars) to entry.txt.
// Deterministic by design: the same fixed line is written on every run.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "My phone just sent my screen-time report: 7 hours a day. I opened it to check, and that's how it became 8.";

// Validation guard: the entry must be exactly one non-blank line, 1-200 chars.
if (LINE.trim().length === 0 || LINE.length < 1 || LINE.length > 200) {
  console.error("entry line must be 1-200 non-blank characters");
  process.exit(1);
}

function writeEntry(outDir: string, line: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outDir, LINE);
