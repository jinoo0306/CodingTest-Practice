const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const M = parseInt(inputData[0]);
const N = parseInt(inputData[1]);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let sum = 0;
let minPrime = Infinity;

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    sum += i;
    if (i < minPrime) minPrime = i;
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minPrime);
}