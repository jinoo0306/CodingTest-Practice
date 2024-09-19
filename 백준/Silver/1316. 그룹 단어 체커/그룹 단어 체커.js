const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const numWords = parseInt(inputData[0]);
let count = 0;

function isGroupWord(word) {
  const seen = new Set();
  let previousChar = "";

  for (const char of word) {
    if (char !== previousChar) {
      if (seen.has(char)) {
        return false; // 이전에 나온 문자가 다시 나왔다면 그룹 단어가 아님
      }
      seen.add(char); // 새로운 문자를 기록
    }
    previousChar = char;
  }

  return true; // 그룹 단어임
}

for (let i = 1; i <= numWords; i++) {
  if (isGroupWord(inputData[i])) {
    count++;
  }
}

console.log(count);
