const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let result = "";

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    if (i < inputData[j].length) {
      result += inputData[j][i];
    }
  }
}

console.log(result);
