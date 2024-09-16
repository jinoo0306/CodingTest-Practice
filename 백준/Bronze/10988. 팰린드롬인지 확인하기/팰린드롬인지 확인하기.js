const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const oriWord = inputData[0];

const revWord = inputData[0].split("").reverse().join("");

function isPalindrome() {
  if (oriWord === revWord) return 1;
  else return 0;
}

console.log(isPalindrome());
