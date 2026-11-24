// How Many Tabs Do You Have Open? (u-danu-how-many-tabs-do-you-have-open-d86e783d):
// one number in digits and nothing else, written to /output/entry.txt.
// Gate: UTF-8 text, 1-5 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const COUNT = "173";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COUNT, "utf8");
