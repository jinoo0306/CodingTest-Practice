const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ");

const x = parseInt(inputData[0]);
const y = parseInt(inputData[1]);
const w = parseInt(inputData[2]);
const h = parseInt(inputData[3]);

const minX = Math.min(x, w - x);
const minY = Math.min(y, h - y);

const minDistance = Math.min(minX, minY);

console.log(minDistance);