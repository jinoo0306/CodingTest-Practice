const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txta", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

function sumTwoNumbers() {
  for (let i = 0; i < inputData.length - 1; i++) {
    const [a, b] = inputData[i].split(" ").map(Number);
    console.log(a + b);
  }
}

sumTwoNumbers();
