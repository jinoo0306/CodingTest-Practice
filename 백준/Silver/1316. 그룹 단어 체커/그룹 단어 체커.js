const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(inputData[0]);

const wordArr = inputData.slice(1);

let count = 0;

function isGroupWord(word) {
  const seen = new Set();
  let lastChar = "";

  for (const char of word) {
    if (seen.has(char) && lastChar !== char) return false;
    lastChar = char;
    seen.add(char);
  }

  return true;
}

if (n === wordArr.length)
  for (const word of wordArr) {
    if (isGroupWord(word)) count++;
  }

console.log(count);
