const fs = require("fs");
const input = fs
  // .readFileSync("./input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

function solution(input) {
  const [N, M] = input[0];
  const snow = input[1].map(Number);

  let maxSize = 0;

  function dfs(position, time, size) {
    if (time > M) {
      return;
    } // 시간 초과 시 종료
    if (size > maxSize) maxSize = size; // 최대값 갱신

    if (position + 1 < N) {
      dfs(position + 1, time + 1, size + snow[position + 1]);
    }
    if (position + 2 < N) {
      dfs(position + 2, time + 1, Math.trunc(size / 2) + snow[position + 2]);
    }
  }

  dfs(-1, 0, 1);

  return maxSize;
}

console.log(solution(input));
