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
  const N = input[0][0];
  const G = input.slice(1);

  for (let k = 0; k < N; k++)
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) if (G[i][k] && G[k][j]) G[i][j] = 1;

  return G.map((row) => row.join(" ")).join("\n");
}

console.log(solution(input));
