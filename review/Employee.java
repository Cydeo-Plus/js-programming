public class Employee {

    String employeeName;
    int employeeSalary;

    public Employee(String employeeName, int employeeSalary) {
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }

    public void work(){
        System.out.println(employeeName + " is working.");
    }

}