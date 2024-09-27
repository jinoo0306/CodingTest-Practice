const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputData[0].split(" ").map(Number);
const basket = Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  const [start, end, ball] = inputData[i].split(" ").map(Number);
  for (let j = start - 1; j < end; j++) {
    basket[j] = ball;
  }
}

console.log(basket.join(" "));