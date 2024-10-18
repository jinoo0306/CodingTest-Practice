const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ");

const n = parseInt(inputData[0]);
const k = parseInt(inputData[1]);

let divisors = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    divisors.push(i);
  }
}

if (divisors.length < k) {
  console.log(0);
} else {
  console.log(divisors[k - 1]);
}