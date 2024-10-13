const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);

for (let i = 1; i <= T; i++) {
  const [a, b] = inputData[i].split(" ").map(Number);
  
  let result = 1;
  for (let j = 0; j < b; j++) {
    result = (result * a) % 10;
  }

  if (result === 0) result = 10;
  console.log(result);
}