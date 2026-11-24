// The Houseplant Out-of-Office — make.fun bounty
// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
//
// One out-of-office auto-reply, at most 120 characters, as if a houseplant
// had written it. Deterministic: the same line every run, no randomness,
// no I/O besides writing the entry.
//
// How the line was picked: ten candidates were drafted and scored against
// the judge's brief (plant-voiced OOO reply first; a fresh surprising joke,
// not a mild pun or stock office phrase; the plant's own life — water,
// sunlight, long stretches ignored — driving the joke; tight; original).
//
// Shortlist (char counts verified by script):
//   119  WINNER — "Out of office. I haven't been watered since March and
//        I've started photosynthesizing out of spite. Try again in spring."
//        The surprise is "photosynthesizing out of spite": neglect turned
//        into petty revenge, and "Try again in spring" is a seasonal,
//        plant-logic sign-off, not an office cliche.
//   102  Runner-up — "I'm a fern, out of office, and I haven't had water
//        since March. At this point I'm basically potpourri." Strong punch
//        ("basically potpourri") but leans on wordplay; the winner's joke
//        is fresher and less pun-driven.
//   117  "Out of office. No water since March, no sunlight since Tuesday.
//        If this is urgent, please CC the sun. It owes me one." Good, but
//        the "CC the sun" gag is a single beat; the winner has two.
//   117  "Out of office. The human who waters me left in March and took
//        the watering can. I am now 90% dust and 10% resentment." Funny,
//        but the resentment punch is generic; the winner's photosynthesis
//        image is more plant-specific.
//   115  "Out of office. I've survived on neglect and one sunbeam since
//        March. Your email will be ignored in the same spirit." Solid, but
//        "ignored in the same spirit" is a mild shrug, not a punch.
//
// Rejected for length (>120) or weakness: the "unionized with the dust"
// version (122), "pour it on me" variants (121–131), and the "afterlife
// of the office" fern (127).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. I haven't been watered since March and I've started photosynthesizing out of spite. Try again in spring.";

const MAX_CHARS = 120;
const OUT_PATH = "/output/entry.txt";

function charCount(text: string): number {
  // Count Unicode code points, not UTF-16 units, so the gate's
  // 1–120 character rule is checked the way a reader counts it.
  return [...text].length;
}

function main(): void {
  const chars = charCount(LINE);
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} chars, must be 1-${MAX_CHARS}`);
  }
  if (LINE.trim() !== LINE || LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be one single line with no padding");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, LINE + "\n", "utf8");

  // Round-trip: what the grader reads must be exactly the chosen line.
  const written = readFileSync(OUT_PATH, "utf8").replace(/\n$/, "");
  if (written !== LINE) {
    throw new Error("round-trip mismatch: file does not hold the chosen line");
  }
  console.log(`wrote ${OUT_PATH} (${chars} chars)`);
}

main();
