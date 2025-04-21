const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function solution(input) {
  const N = input[0][0];
  const meetings = input.slice(1);
  let count = 0;
  let lastEnd = 0;

  meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  for (let i = 0; i < N; i++) {
    const start = meetings[i][0];
    const end = meetings[i][1];

    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }

  return count;
}

console.log(solution(input));
