const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);
let sum = 0;

function sumTwoNumbers() {
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }

  console.log(sum);
}

sumTwoNumbers();
