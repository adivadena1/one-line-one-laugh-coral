// One Line, One Laugh — make.fun entry (program/v1).
// Writes exactly one funny line (at most 200 characters) to /output/entry.txt.
// Deterministic, no network, no randomness, no external input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I bought a standing desk to be healthier, and now I just stand still eating chips at a taller table.";

const OUT = "/output/entry.txt";

if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, over the 200-character cap`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be blank");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length}-character line to ${OUT}`);
