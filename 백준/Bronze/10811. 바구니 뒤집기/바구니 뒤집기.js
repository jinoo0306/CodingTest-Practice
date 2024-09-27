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
  const [start, end] = inputData[i].split(" ").map(Number);
  const reversed = basket.slice(start - 1, end).reverse();
  basket.splice(start - 1, end - start + 1, ...reversed);
}

console.log(basket.join(" "));