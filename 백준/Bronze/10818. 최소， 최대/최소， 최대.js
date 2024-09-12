const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputData[0]);
const array = inputData[1].split(" ").map(Number);

let max = array[0];
let min = array[0];

function findMinMax() {
  for (let i = 0; i < N; i++) {
    if (max < array[i]) max = array[i];

    if (min > array[i]) min = array[i];
  }
}

findMinMax();

console.log(`${min} ${max}`);
