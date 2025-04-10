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
  .map((line) => line.split(" ").map(Number));

function solution(input) {
  const [N, M, K, X] = input[0];
  const graph = Array.from({ length: N + 1 }, () => []);
  const dist = Array(N + 1).fill(-1);

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i];
    graph[a].push(b);
  }

  const queue = [X];
  dist[X] = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    for (const next of graph[current]) {
      if (dist[next] === -1) {
        dist[next] = dist[current] + 1;
        queue.push(next);
      }
    }
  }

  const answer = [];
  for (let i = 1; i <= N; i++) {
    if (dist[i] === K) answer.push(i);
  }

  if (answer.length === 0) {
    return -1;
  } else {
    return answer.sort((a, b) => a - b).join("\n");
  }
}

console.log(solution(input));
