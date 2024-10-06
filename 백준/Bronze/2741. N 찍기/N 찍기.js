const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

const N = parseInt(inputData);

for (let i = 1; i <= N; i++) {
  console.log(i);
}