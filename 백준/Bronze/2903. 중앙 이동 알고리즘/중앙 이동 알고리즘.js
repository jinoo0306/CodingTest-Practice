const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

const N = parseInt(inputData);

const points = Math.pow(2 ** N + 1, 2);

console.log(points);