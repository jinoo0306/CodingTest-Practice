const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const [hours, minutes] = inputData[0].split(" ").map(Number);
const cookingTime = parseInt(inputData[1]);

function calculateEndTime(hours, minutes, cookingTime) {
  const newHours = parseInt((minutes + cookingTime) / 60) + hours;
  return [
    newHours >= 24 ? newHours - 24 : newHours,
    (minutes + cookingTime) % 60,
  ];
}

console.log(calculateEndTime(hours, minutes, cookingTime).join(" "));
