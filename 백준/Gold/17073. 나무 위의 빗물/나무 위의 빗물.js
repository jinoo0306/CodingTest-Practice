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
  const [n, w] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let leafCount = 0;

  for (let i = 2; i <= n; i++) {
    if (graph[i].length === 1) {
      leafCount++;
    }
  }

  return (w / leafCount).toFixed(10);
}

console.log(solution(input));
