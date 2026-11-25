import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked my agent to fix the bug. It assigned the ticket back to me \u2014 priority P0, due yesterday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
