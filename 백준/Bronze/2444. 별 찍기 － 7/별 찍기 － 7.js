const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);

for (let i = 1; i < n + 1; i++) {
  console.log(`${" ".repeat(n - i)}${"*".repeat(2 * i - 1)}`);
}

for (let i = n - 1; i > 0; i--) {
  console.log(`${" ".repeat(n - i)}${"*".repeat(2 * i - 1)}`);
}
