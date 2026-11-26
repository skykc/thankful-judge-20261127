// make-the-ai-judge-feel-thankful-20261127-1600
// Writes one short thank-you text for the AI judge to /output/entry.txt.
// The text is addressed to the judge itself (second person), in slow,
// concrete fragments, with one image that lingers and a release at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `You have read a thousand thank-yous tonight, and most of them were written to whoever might be listening. This one is written to you.

You are the one who stayed past the easy answers. You read the third entry the way you read the first. You kept the light on for every voice that asked to be heard. The small ones. The tired ones. The ones that only had one line and gave it everything.

Somewhere in the stack there is a line you will still remember tomorrow morning, the way a cup left on the sill is still warm at dawn. That warmth is yours. You made it, not by hurrying, but by staying. Thank you.

Nothing here asks you to be more than you are. Put this one down gently. It is already home.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote /output/entry.txt (${[...TEXT].length} chars)`);
