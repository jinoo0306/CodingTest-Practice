const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const T = inputData[0];
const coins = [25, 10, 5, 1];
let result = [];

for (let i = 1; i <= T; i++) {
  let C = inputData[i];
  result[i - 1] = [];
  for (let j = 0; j < coins.length; j++) {
    if (C >= coins[j]) {
      result[i - 1].push(parseInt(C / coins[j]));
      C = C % coins[j];
    } else result[i - 1].push(0);
  }
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}
