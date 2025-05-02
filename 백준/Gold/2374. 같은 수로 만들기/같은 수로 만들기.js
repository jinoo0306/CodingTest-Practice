const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const arr = input.slice(1);
  let answer = 0;

  function dfs(start, end) {
    if (start > end) return null;
    if (start === end) return arr[start];

    let max = -Infinity;
    let maxIdx = -1;
    for (let i = start; i <= end; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIdx = i;
      }
    }

    const leftMax = dfs(start, maxIdx - 1);
    const rightMax = dfs(maxIdx + 1, end);

    if (leftMax !== null) answer += max - leftMax;
    if (rightMax !== null) answer += max - rightMax;

    return max;
  }

  dfs(0, arr.length - 1);
  return answer;
}

console.log(solution(input));
