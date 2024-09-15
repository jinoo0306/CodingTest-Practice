const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

let [a, b] = inputData[0].split(" ");
a = a.split("").reverse().join("");
b = b.split("").reverse().join("");

if (a > b) console.log(a);
else console.log(b);
