const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

if (inputData[0] === "") {
  console.log(0);
} else {
  const wordArr = inputData[0].split(" ").filter((word) => word !== "");
  console.log(wordArr.length);
}
