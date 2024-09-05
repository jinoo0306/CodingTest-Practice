const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ")
  .map((value) => parseInt(value));

const [a, b] = inputData;

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a === b) {
  console.log("==");
} else {
  console.log("==");
}
