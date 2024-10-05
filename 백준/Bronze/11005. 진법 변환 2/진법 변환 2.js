const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ");

const N = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(N.toString(B).toUpperCase());
