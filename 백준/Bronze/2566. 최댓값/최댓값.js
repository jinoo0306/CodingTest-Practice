const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const matrix = [];
let maxValue = -1;
let maxRow = 0;
let maxCol = 0;

for (let i = 0; i < inputData.length; i++) {
  const rowMatrix = inputData[i].split(" ").map(Number);
  for (let j = 0; j < rowMatrix.length; j++) {
    if (rowMatrix[j] > maxValue) {
      maxValue = rowMatrix[j];
      maxRow = i + 1;
      maxCol = j + 1;
    }
  }
}

console.log(maxValue);
console.log(maxRow, maxCol);
