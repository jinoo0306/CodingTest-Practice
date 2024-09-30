const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= n; i++) {
  const [x, y] = inputData[i].split(" ").map(Number);
  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      paper[x + dx][y + dy] = 1;
    }
  }
}

let totalArea = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j] === 1) {
      totalArea++;
    }
  }
}

console.log(totalArea);