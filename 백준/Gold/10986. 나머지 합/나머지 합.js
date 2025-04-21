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
  const [N, M] = input[0].split(" ").map(Number);
  const an = input[1].split(" ").map(Number);

  const count = Array(M).fill(0);
  let sum = 0;
  let result = 0;

  count[0] = 1;

  for (let i = 0; i < N; i++) {
    sum = (sum + an[i]) % M;

    if (sum < 0) sum += M;

    result += count[sum];
    count[sum]++;
  }

  return result;
}

console.log(solution(input));
