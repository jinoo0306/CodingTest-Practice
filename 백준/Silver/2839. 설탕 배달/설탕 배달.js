const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().trim();

function solution(input) {
  const sugar = input;
  let [bag3, bag5] = [0, 0];
  bag5 = Math.floor(sugar / 5);
  bag3 = (sugar - bag5 * 5) / 3;

  while (bag5 >= 0) {
    if (bag3 === Math.floor(bag3)) return bag5 + bag3;

    if (bag3 % 3 !== 0) {
      --bag5;
      bag3 = (sugar - bag5 * 5) / 3;
    }
  }
  return -1;
}

console.log(solution(input));
