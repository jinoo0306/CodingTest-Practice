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
  const N = +input[0];
  const A = input[1].split(" ").map(Number);
  const answer = new Array(N).fill(-1);
  const stack = [];

  for (let i = N - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= A[i]) stack.pop();

    if (stack.length) answer[i] = stack[stack.length - 1];

    stack.push(A[i]);
  }

  return answer.join(" ");
}

console.log(solution(input));
