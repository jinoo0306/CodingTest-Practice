const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const row = parseInt(inputData[0].split(" ")[0]);
const col = parseInt(inputData[0].split(" ")[1]);

const resultMatrix = [];

function saveMatrix(startIndex) {
  const matrix = [];
  for (let i = startIndex; i < startIndex + row; i++) {
    matrix.push(inputData[i].split(" ").map(Number));
  }
  return matrix;
}

const matrixA = saveMatrix(1);
const matrixB = saveMatrix(row + 1);

for (let i = 0; i < row; i++) {
  const resultRow = [];
  for (let j = 0; j < col; j++) {
    resultRow.push(matrixA[i][j] + matrixB[i][j]); // A와 B의 같은 위치의 원소를 더함
  }
  resultMatrix.push(resultRow);
}

resultMatrix.forEach((row) => {
  console.log(row.join(" "));
});
