const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .trim()
  .split("\n");

function lowerBound(arr, target) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
}

function upperBound(arr, target) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return left;
}

function solution(input) {
  const dots = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const lines = input.slice(2).map((line) => line.split(" ").map(Number));
  const result = [];

  for (let [a, b] of lines) {
    const count = upperBound(dots, b) - lowerBound(dots, a);
    result.push(count);
  }

  return result.join("\n");
}

console.log(solution(input));
