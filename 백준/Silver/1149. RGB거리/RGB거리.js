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
  .map((value) => value.split(" ").map(Number));

function solution(input) {
  const N = input[0][0];
  const costs = input.slice(1);
  const dp = [...costs[0]];

  for (let i = 1; i < N; i++) {
    const temp = [0, 0, 0];
    for (let j = 0; j < 3; j++) {
      if (j === 0) temp[0] = costs[i][0] + Math.min(dp[1], dp[2]);
      else if (j === 1) temp[1] = costs[i][1] + Math.min(dp[0], dp[2]);
      else if (j === 2) temp[2] = costs[i][2] + Math.min(dp[0], dp[1]);
    }
    dp.splice(0, 3, ...temp);
  }

  return Math.min(...dp);
}

console.log(solution(input));
