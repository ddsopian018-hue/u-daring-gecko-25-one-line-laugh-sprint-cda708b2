// One-Line Laugh Sprint — screen-time report joke.
// Pure Node.js stdlib, no dependencies, no randomness, no network.
// Writes exactly one original funny line (106 chars) to entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "My phone just sent my screen-time report: 7 hours a day. I opened it to check, and that's how it became 8.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
