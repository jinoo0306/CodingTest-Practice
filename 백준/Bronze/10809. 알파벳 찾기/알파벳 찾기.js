const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const result = [];

for (const char of alphabet) {
  result.push(inputData[0].indexOf(char));
}

console.log(result.join(" "));
