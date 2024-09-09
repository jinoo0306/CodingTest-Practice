const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);

function sumTwoNumbers() {
  for (let i = 1; i < T + 1; i++) {
    const [a, b] = inputData[i].split(" ").map(Number);
    console.log(a + b);
  }
}

sumTwoNumbers();
