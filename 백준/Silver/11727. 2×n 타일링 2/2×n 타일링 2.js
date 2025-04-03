const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().trim();

function solution(input) {
  const N = input;

  const an = Array(N + 1).fill(0);
  an[0] = 0;
  an[1] = 1;
  // an[2] = 3;
  // an[3] = 5;
  // an[4] = 11;
  // an[5] = 21;
  // an[6] = 43;
  for (let i = 2; i <= N; i++) {
    an[i] = (an[i - 1] * 2 + (i % 2 === 1 ? -1 : 1)) % 10007;
    // console.log(`A(${i}) = ${an[i]}`);
  }

  return an[N];
}

console.log(solution(input));
