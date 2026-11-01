const prompt = require("prompt-sync")();

schoolName = `
  =============================================
         LAGBAJA SCHOOL STUDENT GRADE
  =============================================
  `;
console.log(schoolName)

let student = Number(prompt("Enter number of students:"))
let subject = Number(prompt("Enter number of subject offered:"))
console.log("Saving>>>>>>>>>>>>>>>>>>>>")
console.log("Saved successfully")

let scores = [];

console.log("Saving>>>>>>>>>>>>>>>>");
console.log("Saved Successfully");

for (let index = 0; index < student; index++) {
    scores[index] = [];
for (let count = 0; count < subject; count++) {

let score = Number(prompt(`Enter score for student ${index + 1} subject ${count + 1}:`));

if (score < 0 || score > 100) {
    console.log("Invalid score! Enter a score from 0-100");
    count--;
    continue;
}
scores[index][count] = score;
console.log("Saving>>>>>>>>>>>>>>>>");
console.log("Saved Successfully");
    }
}

console.log("========== CLASS SUMMARY ==========");

for (let students = 0; students < student; students++) {
    let total = 0;
for (let subjects = 0; subjects < subject; subjects++) {
    total = total + scores[students][subjects];
}
let average = total / subject;
console.log(`Total score for student ${students + 1}: ${total}`);
console.log(`Average score for student ${students + 1}: ${average}`);
}

