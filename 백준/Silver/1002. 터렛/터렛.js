const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);
let result = [];

for (let i = 1; i <= T; i++) {
  const [x1, y1, r1, x2, y2, r2] = inputData[i].split(" ").map(Number);
  
  const distSq = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2); // 두 점 사이 거리의 제곱
  const rSumSq = Math.pow(r1 + r2, 2); // 두 반지름의 합의 제곱
  const rDiffSq = Math.pow(r1 - r2, 2); // 두 반지름의 차의 제곱

  if (distSq === 0 && r1 === r2) {
    result.push(-1); // 두 원이 동일한 경우
  } else if (distSq > rSumSq || distSq < rDiffSq) {
    result.push(0); // 두 원이 만나지 않는 경우
  } else if (distSq === rSumSq || distSq === rDiffSq) {
    result.push(1); // 두 원이 한 점에서 만나는 경우
  } else {
    result.push(2); // 두 점에서 만나는 경우
  }
}

console.log(result.join("\n"));