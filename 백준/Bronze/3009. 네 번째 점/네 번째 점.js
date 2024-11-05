const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [x1, y1] = inputData[0].split(" ").map(Number);
const [x2, y2] = inputData[1].split(" ").map(Number);
const [x3, y3] = inputData[2].split(" ").map(Number);

const x4 = x1 === x2 ? x3 : x1 === x3 ? x2 : x1;
const y4 = y1 === y2 ? y3 : y1 === y3 ? y2 : y1;

console.log(`${x4} ${y4}`);