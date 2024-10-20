const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);
const numbers = inputData.slice(1).map(Number);

// 숫자들을 오름차순으로 정렬
numbers.sort((a, b) => a - b);

// 결과 출력
console.log(numbers.join("\n"));