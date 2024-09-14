const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);
const result = [];

for (i = 1; i < T + 1; i++) {
  result.push(`${inputData[i][0]}${inputData[i][inputData[i].length - 1]}`);
}

console.log(result.join("\n"));
