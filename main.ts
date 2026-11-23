// One line, one laugh: the whole entry is this single sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I bought a standing desk so I could sit at it with better posture.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
