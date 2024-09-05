const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ")
  .map((value) => value);

const [a] = inputData;

console.log(a - 543);
