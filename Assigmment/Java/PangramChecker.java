import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        scanner.close();
        
        if (isPangram(input)) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        Set<Character> letterSet = new HashSet<>();
        
        input = input.toLowerCase().replaceAll(" ", "");
        
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }
        
        return letterSet.size() == 26;
    }
}