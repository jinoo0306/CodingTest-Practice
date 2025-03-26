const fs = require("fs");
const input = fs
  // .readFileSync("./input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

function solution(input) {
  const t = input[0][0];
  const arr = input[1];

  let max = -Infinity;
  let min = Infinity;

  const dfs = (index, value, [plus, minus, multiply, divide]) => {
    if (index === t) {
      max = Math.max(max, value);
      min = Math.min(min, value);
      return;
    }

    if (plus > 0)
      dfs(index + 1, value + arr[index], [plus - 1, minus, multiply, divide]);

    if (minus > 0)
      dfs(index + 1, value - arr[index], [plus, minus - 1, multiply, divide]);

    if (multiply > 0)
      dfs(index + 1, value * arr[index], [plus, minus, multiply - 1, divide]);

    if (divide > 0) {
      const result =
        value < 0
          ? -Math.floor(-value / arr[index])
          : Math.floor(value / arr[index]);
      dfs(index + 1, result, [plus, minus, multiply, divide - 1]);
    }
  };

  dfs(1, arr[0], input[2]); // (index, value, [plux, minus, multiply, divide])

  return `${max}\n${min}`;
}

console.log(solution(input));
