const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let totalScore = 0;
let totalCredits = 0;

for (let i = 0; i < input.length; i++) {
  const [subject, credits, grade] = input[i].split(" ");

  const creditValue = parseFloat(credits);

  if (grade === "P") continue;

  let gradeValue = 0;

  if (grade === "A+") gradeValue = 4.5;
  else if (grade === "A0") gradeValue = 4.0;
  else if (grade === "B+") gradeValue = 3.5;
  else if (grade === "B0") gradeValue = 3.0;
  else if (grade === "C+") gradeValue = 2.5;
  else if (grade === "C0") gradeValue = 2.0;
  else if (grade === "D+") gradeValue = 1.5;
  else if (grade === "D0") gradeValue = 1.0;
  else if (grade === "F") gradeValue = 0.0;

  totalScore += gradeValue * creditValue;
  totalCredits += creditValue;
}

const finalGrade = totalScore / totalCredits;

console.log(finalGrade.toFixed(6));