/* global process, console */
import { spawnSync } from "node:child_process";

const result = spawnSync("playwright", ["test", ...process.argv.slice(2)], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  console.error(
    "Visual regression detected. If this change is intentional, run: vp run test:visual:update",
  );
  process.exit(result.status ?? 1);
}
