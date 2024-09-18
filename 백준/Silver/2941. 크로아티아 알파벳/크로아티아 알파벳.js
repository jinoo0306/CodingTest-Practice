const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

function countCroatianAlphabets(input) {
  // 크로아티아 알파벳 목록
  const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (const croatianAlphabet of croatianAlphabets) {
    input = input.split(croatianAlphabet).join(" "); 
  }

  return input.length;
}

console.log(countCroatianAlphabets(inputData[0]));
