const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function solution(input) {
  const [N, M] = [...input[0]];
  const paper = input.slice(1, N + 1);

  const visited = paper.map((row) => [...row].fill(false));
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let count = 0;
  let maxSize = 0;

  function bfs(startY, startX) {
    let size = 1;
    visited[startY][startX] = true;
    const queue = [[startY, startX]];

    while (queue.length) {
      const [y, x] = queue.shift();
      for (const [dy, dx] of direction) {
        ny = y + dy;
        nx = x + dx;
        if (
          ny >= 0 &&
          ny < N &&
          nx >= 0 &&
          nx < M &&
          paper[ny][nx] === 1 &&
          !visited[ny][nx]
        ) {
          visited[ny][nx] = true;
          size++;
          queue.push([ny, nx]);
        }
      }
    }
    return size;
  }

  for (let col = 0; col < N; col++) {
    for (let row = 0; row < M; row++) {
      if (paper[col][row] === 1 && !visited[col][row]) {
        count++;

        const size = bfs(col, row);

        maxSize = Math.max(maxSize, size);
      }
    }
  }

  return `${count}\n${maxSize}`;
}

console.log(solution(input));
