const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const students = Array.from({ length: 30 }, (_, i) => i + 1);

inputData.forEach(submitted => {
  const index = students.indexOf(Number(submitted));
  if (index !== -1) {
    students.splice(index, 1);
  }
});

console.log(students.join("\n"));