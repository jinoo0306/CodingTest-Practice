const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputData[0].split(" ").map(Number);
const cards = inputData[1].split(" ").map(Number);

let result = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= m) {
        result = Math.max(result, sum);
      }
    }
  }
}

console.log(result);