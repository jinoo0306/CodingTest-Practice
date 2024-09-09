const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ");

const [a] = inputData.map(Number);

function printMultiplicationTable(n) {
  for (let i = 1; i < 10; i++) {
    console.log(n, "*", i, "=", n * i);
  }
}

printMultiplicationTable(a);
