const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ")
  .map((value) => parseInt(value));

const [a, b, c] = inputData;

console.log((a + b) % c);
console.log((parseInt(a % c) + parseInt(b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
