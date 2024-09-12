const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputData[0]);

const originArr = inputData[1].split(" ").map(Number);
let M = originArr[0];
let sum = 0;

function calculateAdjustedAverage() {
  for (let i = 0; i < N; i++) {
    if (M < originArr[i]) M = originArr[i];
  }

  for (let i = 0; i < N; i++) {
    sum += (originArr[i] / M) * 100;
  }

  return sum / N;
}

console.log(calculateAdjustedAverage());
