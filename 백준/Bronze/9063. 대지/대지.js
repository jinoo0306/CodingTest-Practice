const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);
const points = inputData.slice(1).map(line => line.split(" ").map(Number));

let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;

for (let i = 0; i < n; i++) {
  const [x, y] = points[i];
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

const area = (maxX - minX) * (maxY - minY);
console.log(area);