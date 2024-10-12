const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const currentTime = inputData[0].split(" ");

let hours = parseInt(currentTime[0]);
let minutes = parseInt(currentTime[1]);
let seconds = parseInt(currentTime[2]);
const cookingTime = parseInt(inputData[1]);

seconds += cookingTime;

if (seconds >= 60) {
  minutes += Math.floor(seconds / 60);
  seconds %= 60;
}

if (minutes >= 60) {
  hours += Math.floor(minutes / 60);
  minutes %= 60;
}

hours %= 24;

console.log(`${hours} ${minutes} ${seconds}`);
