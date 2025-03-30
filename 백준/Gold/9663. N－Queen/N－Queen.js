const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().trim();

function solution(input) {
  const N = Number(input);
  let answer = 0;

  function check(array, row, col) {
    for (let i = 0; i < row; i++) {
      if (array[i] === col) return false;
      if (Math.abs(i - row) === Math.abs(array[i] - col)) return false;
    }
    return true;
  }

  function dfs(row, array) {
    if (row === N) {
      answer++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (check(array, row, i)) {
        array[row] = i;
        dfs(row + 1, array);
        array[row] = 0;
      }
    }
  }

  const arr = new Array(N).fill(0);
  dfs(0, arr);
  return answer;
}

console.log(solution(input));
