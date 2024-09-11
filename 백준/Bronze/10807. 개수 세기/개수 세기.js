const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputData[0], 10);
const v = parseInt(inputData[2], 10);

const numArray = inputData[1].split(" ").map(Number);

let sum = 0;

function countOccurrences() {
  for (let i = 0; i < N; i++) {
    if (numArray[i] === v) sum++;
  }

  return sum;
}

console.log(countOccurrences());
