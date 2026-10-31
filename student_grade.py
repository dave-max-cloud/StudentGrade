school_name = """
      =============================================
              LAGBAJA SCHOOL STUDENT GRADE
      =============================================
      """
print(school_name)

students = int(input("Enter number of students:"))
subjects = int(input("Enter number of subjects offered:"))

print("Saving>>>>>>>>>>>>>>>>>>>>>>>>>>>")
print("Saved successful")

scores = [[0] * subjects for _ in range(students)]

for student in range(students):
    for subject in range(subjects):
        score = int(input(f"Enter score of student {student + 1} subject {subject + 1}:"))
        while score < 0 or score > 100:
            score = int(input("Invalid score,Enter score between 0 and 100:"))
            
        scores[student][subject] = score
        print("Saving>>>>>>>>>>>>>>>>>>>>>>")
        print("Saved successfully")
        
    
print("================= CLASS SUMMARY ===============")

totals = []
averages = []

for student_scores in scores:
    total = sum(student_scores)
    average = total / subjects
    totals.append(total)
    averages.append(round(average, 2))


for student in range(len(totals)):
    print(f"Total score for student {student + 1}: {totals[student]}")
    print(f"Average score for student {student + 1}: {averages[student]}")
    
        
       
