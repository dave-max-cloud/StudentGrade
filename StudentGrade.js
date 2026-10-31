const prompt = require("prompt-sync")();

schoolName = `
  =============================================
         LAGBAJA SCHOOL STUDENT GRADE
  =============================================
  `;
console.log(schoolName)

let student = prompt("Enter number of students:")
let subject = prompt("Enter number of subject offered:")
console.log("Saving>>>>>>>>>>>>>>>>>>>>")
console.log("Saved successfully")



for(let index = 0; index < student; index++){
    for(let count = 0; count < subject; count++){
    
let score = prompt(`Enter score for student ${index + 1} subject ${count + 1}:`)
console.log("Saving>>>>>>>>>>>>>>>>>>>>");
console.log("Saved successfully");

if (score < 0 && score > 100){
console.log("Invalid score! Enter a score from 0-100");
        } 
}
}

console.log("========== CLASS SUMMARY ==========");

total = [student.length];
average = [student.length]; 

for(let totals = 0; totals < student.length; totals++){
let sum = 0;
//let divide = 0;

    for(let averages = 0; averages < student[totals].length; averages++){
    sum += student[totals][averages];
}
total[totals] = sum;
//for (let counter = 0; counter < student.length; counter++) {
//    divide = sum / student.length;
//  }
  average[totals] = sum / student[totals].length;
  
  console.log("Total:" + total[totals]);
console.log("Average" + average[totals]);

    
}



