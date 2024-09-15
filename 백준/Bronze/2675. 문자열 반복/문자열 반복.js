const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(inputData[0]);

let result = [];

for (let i = 1; i < T + 1; i++) {
  const [R, S] = inputData[i].split(" ");
  let P = [];

  for (let char of S) {
    for (j = 0; j < R; j++) {
      P.push(char);
    }
  }
  result.push(P.join(""));
}

console.log(result.join("\n"));
