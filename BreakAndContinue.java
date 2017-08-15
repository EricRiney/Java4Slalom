import java.io.*;

public class BreakAndContinue {
    public static void main(String args[]){

        int a = 3;
        int b = 6;
        
        b = b - a;
        a = a + b;
        b = a - b;
        System.out.println(a);
        System.out.println(b);

        FreshJuice juice = new FreshJuice();
        juice.size = FreshJuice.FreshJuiceSize.MEDIUM ;
        System.out.println("Size: " + juice.size);
    }
}
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM, LARGE }
   FreshJuiceSize size;
}


// If we consider a dog, then its state is - name, breed, color, 
// and the behavior is - barking, wagging the tail, running.
class Dog {
   String breed;
   int age;
   String color;

   void barking() {
   }

   void hungry() {
   }

   void sleeping() {
   }
}