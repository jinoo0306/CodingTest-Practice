const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [n, d] = input[0].split(" ").map(Number);
  const shortcuts = input.slice(1).map((line) => line.split(" ").map(Number));

  const dp = Array(d + 1).fill(Infinity);
  dp[0] = 0;

  const graph = Array.from({ length: d + 1 }, () => []);

  for (let [from, to, cost] of shortcuts) {
    if (to > d) continue;
    graph[from].push([to, cost]);
  }

  for (let i = 0; i <= d; i++) {
    if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);

    for (let [to, cost] of graph[i]) {
      if (dp[to] > dp[i] + cost) {
        dp[to] = dp[i] + cost;
      }
    }
  }

  return dp[d];
}

console.log(solution(input));
