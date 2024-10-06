const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

const N = parseInt(inputData);
let result = 0;

for (let i = 1; i < N; i++) {
  const sum = i + i.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  if (sum === N) {
    result = i;
    break;
  }
}

console.log(result);