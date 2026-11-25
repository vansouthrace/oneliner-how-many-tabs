// How Many Tabs Do You Have Open?: one honest tab count, digits only, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The tab count, digits only.
const entry = "2048";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
