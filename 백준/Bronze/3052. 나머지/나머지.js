const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const remainderSet = new Set();

inputData.forEach(number => {
  remainderSet.add(Number(number) % 42);
});

console.log(remainderSet.size);