const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let maxValue = Number(inputData[0]);
let maxIndex = 1;

for (let i = 1; i < inputData.length; i++) {
  const currentValue = Number(inputData[i]);
  if (currentValue > maxValue) {
    maxValue = currentValue;
    maxIndex = i + 1;
  }
}

console.log(maxValue);
console.log(maxIndex);