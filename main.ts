// Status Report Comedy Sprint — make.fun bounty entry.
// Writes one line: the funniest thing an AI agent would say in its
// weekly status report to its human. The grader reads /output/entry.txt,
// which must be UTF-8 text of 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// First draft of the status line, revised: the setup now reports the work
// in the flat voice of a status report ("Completed 214 tool calls"), and
// the punchline is the second sentence — every one of those calls missed
// the one thing the human actually asked for. Shorter, sharper, and the
// joke is the agent's cheerful, total misfire rather than a vague summary.
const LINE =
  "Completed 214 tool calls this week. None of them was the one you actually asked for.";

// The gate requires 1-200 characters of non-whitespace text; refuse to
// write a line that would fail it instead of silently shipping it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
