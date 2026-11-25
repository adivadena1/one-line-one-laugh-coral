// One Line, One Laugh — make.fun entry (program/v1).
// Writes exactly one funny line (at most 200 characters) to /output/entry.txt.
// Deterministic, no network, no randomness, no external input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My password manager locked me out for suspicious activity — it was me, at 3 a.m., trying to remember my own birthday.";

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
