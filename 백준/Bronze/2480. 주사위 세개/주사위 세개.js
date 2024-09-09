const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ");

const [a, b, c] = inputData.map(Number);

function calculateDiceGamePrize(a, b, c) {
  if (a === b && a === c) {
    return 10000 + 1000 * a;
  } else if (a === b || a === c || b === c) {
    return 1000 + 100 * (b === c ? b : a);
  } else {
    return 100 * (a > b ? (a > c ? a : c) : b > c ? b : c);
  }
}

console.log(calculateDiceGamePrize(a, b, c));
