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
  const events = [];

  for (let i = 1; i <= N; i++) {
    const [x, r] = input[i].split(" ").map(Number);
    const id = i;
    events.push([x - r, id, 0]);
    events.push([x + r, id, 1]);
  }

  events.sort((a, b) => a[0] - b[0]);

  const stack = [];

  for (const [_, id, type] of events) {
    if (type === 0) {
      stack.push([id, type]);
    } else {
      if (stack.length === 0 || stack[stack.length - 1][0] !== id) {
        return "NO";
      }
      stack.pop();
    }
  }

  return "YES";
}

console.log(solution(input));
