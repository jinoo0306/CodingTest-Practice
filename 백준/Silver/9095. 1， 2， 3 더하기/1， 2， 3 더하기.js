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
  .map(Number);

function solution(input) {
  const T = input[0];
  const arr = input.slice(1);
  const result = [];

  function dfs(sum, target) {
    if (sum === target) return 1;
    if (sum > target) return 0;

    return dfs(sum + 1, target) + dfs(sum + 2, target) + dfs(sum + 3, target);
  }

  for (let i = 0; i < T; i++) {
    const n = arr[i];
    result.push(dfs(0, n));
  }

  return result;
}

console.log(solution(input).join("\n"));
