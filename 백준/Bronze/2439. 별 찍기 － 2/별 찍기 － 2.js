const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txta", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);

function countingStars() {
  for (let i = 1; i < T + 1; i++) {
    console.log(`${" ".repeat(T - i)}${"*".repeat(i)}`);
  }
}

countingStars();
