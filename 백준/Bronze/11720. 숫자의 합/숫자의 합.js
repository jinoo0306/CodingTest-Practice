const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputData[0]);

const number = inputData[1];

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += parseInt(number[i]);
}

console.log(sum);
