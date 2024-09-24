const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let word = inputData[0];

const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let croatianAlphabet of croatianAlphabets) {
  word = word.split(croatianAlphabet).join(" ");
}

console.log(word.length);
