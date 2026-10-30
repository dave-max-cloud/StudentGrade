import java.util.Arrays;
import java.util.Scanner;
  public class StudentGrade{
    public static void main(String[] args){
      
      Scanner input = new Scanner(System.in);
      
      String studentGrade = """
      =============================================
              LAGBAJA SCHOOL STUDENT GRADE
      =============================================
      """;
      System.out.print(studentGrade);
      
      
      System.out.print("Enter number of students:");
      int student = input.nextInt();
      System.out.print("Enter number of subjects:");
      int subject = input.nextInt();
      
      
      System.out.println("Saving>>>>>>>>>>>>>>>>>>>>");
      System.out.println("Saved successfully");
      
      int [][] students = new int[student][subject];
      
      for(int count = 0; count < student; count++){
        for(int index = 0; index < subject; index++){
        
      System.out.print("Enter score for student" + (count + 1) + " " + "subject" + (index + 1) + ":");
      int score = input.nextInt();
      
      System.out.println("Saving>>>>>>>>>>>>>>>>>>>>>>");
      System.out.println("Saved successfully");
      
      if(score < 0 || score > 100){
        System.out.println("Invalid score try again");
      }
      }

  }
  
      System.out.println("========== CLASS SUMMARY ==========");
      
      int [] total = new int[students.length];
      double [] averages = new double[students.length];
      for (int index = 0; index < students.length; index++) {

          int sum = 0;
          double divide = 0;
           
      for (int count = 0; count < students[index].length; count++) {

          sum += students[index][count];

      }
        total[index] = sum;
        
        
      
      for (int counter = 0; counter < students.length; counter++) {
        divide = sum / students.length;  
    }
        averages[index] = divide;
      }
      System.out.println("Total:" + Arrays.toString(total));
      System.out.println("Average" + Arrays.toString(averages));
      }
      }
      
      
        
        
      
      
    
