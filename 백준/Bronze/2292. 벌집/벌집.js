const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

const N = parseInt(inputData);

let room = 1;
let steps = 1;
let count = 1;

while (count < N) {
  count += 6 * steps;
  steps++;
}

console.log(steps);