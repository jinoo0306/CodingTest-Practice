const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((value) => parseInt(value));

const [a, b] = inputData;

const bHundres = parseInt(b / 100);
const bTens = parseInt((b - bHundres * 100) / 10);
const bOnes = parseInt(b - bHundres * 100 - bTens * 10);

console.log(a * bOnes);
console.log(a * bTens);
console.log(a * bHundres);
console.log(a * b);
