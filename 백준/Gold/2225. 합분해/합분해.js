const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution([n, k]) {
  const MOD = 1_000_000_000;
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 0; i <= n; i++) dp[i][1] = 1;

  for (let j = 2; j <= k; j++)
    for (let i = 0; i <= n; i++)
      for (let l = 0; l <= i; l++)
        dp[i][j] = (dp[i][j] + dp[i - l][j - 1]) % MOD;

  return dp[n][k];
}

console.log(solution(input));
