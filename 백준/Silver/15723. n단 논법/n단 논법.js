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
  const n = +input[0];
  const check = Array.from({ length: 26 }, () => Array(26).fill(false));

  for (let i = 1; i <= n; i++) {
    const [a, , b] = input[i].split(" ");
    const x = a.charCodeAt(0) - 97;
    const y = b.charCodeAt(0) - 97;
    check[y][x] = true; // ✅ 방향 반대로!
  }

  for (let k = 0; k < 26; k++) {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        if (check[i][k] && check[k][j]) {
          check[i][j] = true;
        }
      }
    }
  }

  const m = +input[n + 1];
  const result = [];

  for (let i = n + 2; i < n + 2 + m; i++) {
    const [a, , b] = input[i].split(" ");
    const x = a.charCodeAt(0) - 97;
    const y = b.charCodeAt(0) - 97;

    if (x === y) {
      result.push("F");
    } else {
      result.push(check[y][x] ? "T" : "F");
    }
  }

  return result.join("\n");
}

console.log(solution(input));
