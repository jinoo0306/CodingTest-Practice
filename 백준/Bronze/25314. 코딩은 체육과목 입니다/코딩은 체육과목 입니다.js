const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const x = parseInt(inputData[0]);

function generateLongType(byte) {
  for (i = 0; i < Math.ceil(byte / 4); i++) {
    process.stdout.write("long ");
  }
  console.log("int");
}

if (x >= 4 || x <= 1000) {
  generateLongType(x);
}
