import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ScalaSucks {

    public static void main(String[] args) throws FileNotFoundException {
        Scanner scanner = new Scanner(new File("solutions_test_file1.csv"));
        scanner.useDelimiter(",");
        while(scanner.hasNext()){
            System.out.print(scanner.next()+"|");
        }
        scanner.close();
    }

    public void SillyReader (Scanner s) {
        
    }

}