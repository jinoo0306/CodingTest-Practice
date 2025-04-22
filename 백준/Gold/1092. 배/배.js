const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .trim()
  .split("\n");

function solution(input) {
  const N = Number(input[0]);
  const cranes = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  const M = Number(input[2]);
  const boxes = input[3]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  if (boxes[0] > cranes[0]) return -1;

  let time = 0;
  let moved = 0;
  const visited = Array(M).fill(false);

  while (moved < M) {
    let boxIdx = 0;
    for (let i = 0; i < N; i++) {
      while (boxIdx < M) {
        if (!visited[boxIdx] && cranes[i] >= boxes[boxIdx]) {
          visited[boxIdx] = true;
          moved++;
          boxIdx++;
          break;
        }
        boxIdx++;
      }
    }
    time++;
  }

  return time;
}

console.log(solution(input));
