const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

let result = [];

const inputArray1 = inputData[0].split(" ").map(Number);
const inputArray2 = inputData[1].split(" ").map(Number);

const N = inputArray1[0];
const X = inputArray1[1];

function filterLessThanX() {
  for (let i = 0; i < N; i++) {
    if (inputArray2[i] < X) result.push(inputArray2[i]);
  }
}

filterLessThanX();

console.log(result.join(" "));
