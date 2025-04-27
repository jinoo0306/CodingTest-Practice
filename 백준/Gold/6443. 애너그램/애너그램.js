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
  const T = Number(input[0]);
  const output = [];

  for (let t = 1; t <= T; t++) {
    const str = input[t].trim().split("").sort();
    const N = str.length;
    const visited = Array(N).fill(false);
    const path = [];

    function dfs(depth) {
      if (depth === N) {
        output.push(path.join(""));
        return;
      }

      let prev = "";
      for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        if (prev === str[i]) continue;

        visited[i] = true;
        path.push(str[i]);
        prev = str[i];

        dfs(depth + 1);

        visited[i] = false;
        path.pop();
      }
    }

    dfs(0);
  }

  console.log(output.join("\n"));
}

solution(input);
