const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const S = inputData[0];
const i = parseInt(inputData[1]);

console.log(S[i - 1]);
