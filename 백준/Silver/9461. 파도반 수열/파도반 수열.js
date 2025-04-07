const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const T = input[0];
  const N = input.slice(1);
  const dp = [];
  const result = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;

  for (let i = 6; i <= Math.max(...N); i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  for (let i = 0; i < T; i++) {
    result[i] = dp[N[i]];
  }

  return result.join("\n");
}

console.log(solution(input));
