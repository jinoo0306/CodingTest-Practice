const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ");

const [a, b] = inputData.map(Number);

function adjustAlarmTime(hours, minutes) {
  if (minutes >= 45) {
    return [hours, minutes - 45];
  } else {
    return [hours === 0 ? 23 : hours - 1, minutes + 15];
  }
}

console.log(adjustAlarmTime(a, b).join(" "));
