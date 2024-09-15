const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ");

let piece = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < piece.length; i++) {
  piece[i] -= inputData[i];
}

console.log(piece.join(" "));
