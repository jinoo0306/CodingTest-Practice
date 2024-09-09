const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const x = parseInt(inputData[0]);
const n = parseInt(inputData[1]);
let sum = 0;

function verifyReceiptTotal() {
  for (i = 2; i < n + 2; i++) {
    const [a, b] = inputData[i].split(" ");
    sum += a * b;
  }

  if (x === sum) return "Yes";
  else return "No";
}

console.log(verifyReceiptTotal());
