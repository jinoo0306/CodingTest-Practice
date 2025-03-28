const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().trim();

function solution(input) {
  const N = Number(input);
  const romaNum = [1, 5, 10, 50];
  const result = [];

  function dfs(index, sum, start) {
    if (index === N) {
      result.push(sum);
      return;
    }

    for (let i = start; i < romaNum.length; i++)
      dfs(index + 1, sum + romaNum[i], i);
  }

  dfs(0, 0, 0);

  return [...new Set(result)].length;
}

console.log(solution(input));
