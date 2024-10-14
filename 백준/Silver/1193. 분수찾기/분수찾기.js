const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

const T = parseInt(inputData);
let sum = 0;
let n = 0;

while (sum < T) {
  n++;
  sum += n;
}

const pos = T - (sum - n);

if (n % 2 === 0) {
  console.log(`${pos}/${n + 1 - pos}`);
} else {
  console.log(`${n + 1 - pos}/${pos}`);
}