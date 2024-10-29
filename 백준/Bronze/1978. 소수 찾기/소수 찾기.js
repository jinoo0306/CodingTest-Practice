const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);
const numbers = inputData[1].split(" ").map(Number);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let primeCount = 0;

for (let i = 0; i < n; i++) {
  if (isPrime(numbers[i])) primeCount++;
}

console.log(primeCount);