const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);
let result = '';

function sumTwoNumbers() {
  for (let i = 1; i <= T; i++) {
    const [a, b] = inputData[i].split(" ").map(Number);
    result += (a + b) + '\n'; // 결과를 문자열로 모아 한 번에 출력
  }
}

sumTwoNumbers();
process.stdout.write(result); // 모아둔 결과를 한 번에 출력