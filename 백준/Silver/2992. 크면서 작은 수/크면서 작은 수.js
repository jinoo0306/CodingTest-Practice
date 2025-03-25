const fs = require("fs");
const input = fs
  // .readFileSync("./input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

function solution(input) {
  // 숫자 배열화
  const numArr = input.split("");

  // 뒤에서 부터 감소하는 index 찾기
  let index = numArr.length - 2;
  while (index >= 0 && numArr[index] >= numArr[index + 1]) {
    index--;
  }

  // 만약 감소하는 부분이 없다면 0을 반환
  if (index < 0) return 0;

  // numArr[index] 보단 크고 가장 뒤에있는 값 j에 저장
  let j = numArr.length - 1;
  while (numArr[index] >= numArr[j]) {
    j--;
  }

  // 만약 numArr[index]보다 큰 값이 없다면 0을 반환
  if (j < 0) return 0;

  // 두 숫자 자리 바꾸기
  [numArr[index], numArr[j]] = [numArr[j], numArr[index]];

  // numArr[index] 뒤의 내용 자르고 reverse
  const sliceReversed = numArr.slice(index + 1).reverse();

  // 자른 부분 붙히기
  numArr.splice(index + 1, sliceReversed.length, ...sliceReversed);

  // 최종 배열 숫자화
  return numArr.join("");
}

console.log(solution(input));
