const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputData.length - 1; i++) {
  const [a, b] = inputData[i].split(" ").map(Number);

  if (a === 0 && b === 0) break;

  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}