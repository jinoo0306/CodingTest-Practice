const fs = require("fs");
const input = fs
  // .readFileSync("./input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

function solution(input) {
  const [N, M] = input[0];
  const arr = input[1];
  arr.sort((a, b) => a - b);

  const used = Array(N).fill(false);
  const result = [];

  function dfs(depth) {
    if (depth === M) {
      console.log(result.join(" "));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (used[i]) continue;

      used[i] = true;
      result.push(arr[i]);
      dfs(depth + 1);
      result.pop();
      used[i] = false;
    }
  }

  dfs(0);
}

solution(input);
