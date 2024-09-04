import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Customer {
    String id;
    String name;
    String address;
    int salary;

    Customer(String id, String name, String address, int salary) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }

}

class Demo {

    public static void main(String args[]) {

        String rowData = "C001&%$Danapala@#$Galle*!@#45000";
        String[] row = rowData.split("[\\W]+");// ?

        for (String s1 : row) {
            System.out.println(s1);
        }

    }

}
