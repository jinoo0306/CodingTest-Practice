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
  .map((line) => line.split(""));

function solution(input) {
  const N = Number(input[0].join(""));
  const friends = input.slice(1);
  let maxCount = 0;

  for (let i = 0; i < N; i++) {
    const visited = Array(N).fill(false);

    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      if (friends[i][j] === "Y") {
        visited[j] = true;
      } else {
        for (let k = 0; k < N; k++) {
          if (friends[i][k] === "Y" && friends[k][j] === "Y") {
            visited[j] = true;
            break;
          }
        }
      }
    }

    const count = visited.filter(Boolean).length;
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

console.log(solution(input));
