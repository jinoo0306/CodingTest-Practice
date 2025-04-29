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
  const root = {};

  for (let i = 1; i <= N; i++) {
    const arr = input[i].split(" ");
    const K = Number(arr[0]);
    const path = arr.slice(1);

    let current = root;
    for (let food of path) {
      if (!current[food]) {
        current[food] = {};
      }
      current = current[food];
    }
  }

  function dfs(node, depth) {
    const keys = Object.keys(node).sort();
    for (let key of keys) {
      console.log("--".repeat(depth) + key);
      dfs(node[key], depth + 1);
    }
  }

  dfs(root, 0);
}

solution(input);
