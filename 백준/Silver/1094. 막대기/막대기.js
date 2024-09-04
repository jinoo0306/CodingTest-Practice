const fs = require("fs");
const inputData = fs
  //   .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ")
  .map((value) => parseInt(value));

const [a] = inputData;
const sticks = [64, 32, 16, 8, 4, 2, 1];

let resultSticks = [];

function calculateStickLength(num, index = 0) {
  if (num === 0) return;
  if (num >= sticks[index]) {
    resultSticks.push(sticks[index]);
    calculateStickLength(num - sticks[index], index + 1);
  } else {
    calculateStickLength(num, index + 1);
  }
}

calculateStickLength(a);

console.log(resultSticks.length);
