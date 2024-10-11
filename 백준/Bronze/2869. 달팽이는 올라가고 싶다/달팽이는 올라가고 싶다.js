const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const V = parseInt(inputData[2]);

const days = Math.ceil((V - B) / (A - B));

console.log(days);