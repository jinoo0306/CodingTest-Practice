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
  const n = Number(input[0]);
  const m = Number(input[1]);

  const map = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) {
    map[i][i] = 0;
  }

  for (let i = 2; i < 2 + m; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    if (map[a][b] > c) {
      map[a][b] = c;
    }
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (map[i][j] > map[i][k] + map[k][j]) {
          map[i][j] = map[i][k] + map[k][j];
        }
      }
    }
  }

  const answer = [];

  for (let i = 1; i <= n; i++) {
    let line = [];
    for (let j = 1; j <= n; j++) {
      if (map[i][j] === Infinity) {
        line.push(0);
      } else {
        line.push(map[i][j]);
      }
    }
    answer.push(line.join(" "));
  }

  return answer.join("\n");
}

console.log(solution(input));
