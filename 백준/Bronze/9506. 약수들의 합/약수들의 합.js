const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputData.length; i++) {
  const n = parseInt(inputData[i]);
  if (n === -1) break;

  let divisors = [];
  let sum = 0;

  for (let j = 1; j <= n / 2; j++) {
    if (n % j === 0) {
      divisors.push(j);
      sum += j;
    }
  }

  if (sum === n) {
    console.log(`${n} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}