const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .toString()
  .trim();

function solution(str) {
  const minusSplit = str.split("-");
  let result = 0;

  for (let i = 0; i < minusSplit.length; i++) {
    const part = minusSplit[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b, 0);

    if (i === 0) {
      result += part;
    } else {
      result -= part;
    }
  }

  return result;
}

console.log(solution(input));
