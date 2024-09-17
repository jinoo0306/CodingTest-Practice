const fs = require("fs");
const inputData = fs
  // .readFileSync("input.txt", "utf8")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

function findMostFrequentChar(input) {
  input = input.toUpperCase();

  const frequency = {};

  for (const char of input) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let maxCount = 0;
  let mostFrequent = "?";

  for (const char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      mostFrequent = char;
    } else if (frequency[char] === maxCount) {
      mostFrequent = "?";
    }
  }

  return mostFrequent;
}

console.log(findMostFrequentChar(inputData[0]));
