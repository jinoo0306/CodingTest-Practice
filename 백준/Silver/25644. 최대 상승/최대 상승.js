const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function solution(input) {
  const N = input[0];
  const stocks = [...input[1]];
  let max = 0;
  let dp = stocks[0]; // 주식의 최소값을 기억

  for (let i = 1; i < N; i++) {
    if (stocks[i] - dp > 0) max = Math.max(max, stocks[i] - dp);
    if (stocks[i] < dp) dp = stocks[i];
  }

  return max;
}

console.log(solution(input));
