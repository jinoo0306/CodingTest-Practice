const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

let n = parseInt(inputData);
let divisor = 2;
let result = [];

while (n > 1) {
  if (n % divisor === 0) {
    result.push(divisor);
    n /= divisor;
  } else {
    divisor++;
  }
}

console.log(result.join("\n"));