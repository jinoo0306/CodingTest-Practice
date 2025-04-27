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
  const S = input[0];
  const T = input[1];

  let answer = 0;

  function dfs(current) {
    if (current.length === S.length) {
      if (current === S) {
        answer = 1;
      }
      return;
    }

    if (current[current.length - 1] === "A") {
      dfs(current.slice(0, -1));
    }
    if (current[0] === "B") {
      dfs(current.slice(1).split("").reverse().join(""));
    }
  }

  dfs(T);

  console.log(answer);
}

solution(input);
