const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const inputStr = inputData[0];
let totalTime = 0;

for (let char of inputStr) {
  if ("ABC".includes(char)) totalTime += 3;
  else if ("DEF".includes(char)) totalTime += 4;
  else if ("GHI".includes(char)) totalTime += 5;
  else if ("JKL".includes(char)) totalTime += 6;
  else if ("MNO".includes(char)) totalTime += 7;
  else if ("PQRS".includes(char)) totalTime += 8;
  else if ("TUV".includes(char)) totalTime += 9;
  else if ("WXYZ".includes(char)) totalTime += 10;
}

console.log(totalTime);
