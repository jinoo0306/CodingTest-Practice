const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputData[0].split(" ").map(Number);
const basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [a, b] = inputData[i].split(" ").map(Number);
  [basket[a - 1], basket[b - 1]] = [basket[b - 1], basket[a - 1]];
}

console.log(basket.join(" "));