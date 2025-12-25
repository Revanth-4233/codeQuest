// Problem data organized by difficulty level
// Easy: No constraints, detailed hints, step-by-step guidance
// Medium: Basic constraints, hints available
// Hard: Full constraints, minimal hints

export const problems = [
    // ============ EASY PROBLEMS ============
    {
        id: 1,
        title: "Hello World",
        slug: "hello-world",
        difficulty: "easy",
        category: "Getting Started",
        points: 10,
        solved: false,
        description: `# Say Hello to the World! 👋

Your first step in programming is to make the computer say "Hello, World!"

This is a tradition in programming - every programmer starts with this!`,

        task: `Write a program that prints the text **Hello, World!** to the screen.`,

        examples: [
            {
                input: "No input needed",
                output: "Hello, World!",
                explanation: "Just print the message exactly as shown"
            }
        ],

        hints: [
            "💡 In most languages, you use a print function to show text",
            "💡 In Python: use print(\"Hello, World!\")",
            "💡 In JavaScript: use console.log(\"Hello, World!\")",
            "💡 Don't forget the comma and exclamation mark!"
        ],

        starterCode: {
            python: `# Write your code here
# Hint: Use print() to display text

`,
            javascript: `// Write your code here
// Hint: Use console.log() to display text

`,
            java: `public class Solution {
    public static void main(String[] args) {
        // Write your code here
        
    }
}`
        },

        solution: {
            python: `print("Hello, World!")`,
            javascript: `console.log("Hello, World!");`,
            java: `System.out.println("Hello, World!");`
        },

        testCases: [
            { input: "", expected: "Hello, World!" }
        ]
    },

    {
        id: 2,
        title: "Add Two Numbers",
        slug: "add-two-numbers",
        difficulty: "easy",
        category: "Basic Math",
        points: 15,
        solved: false,
        description: `# Let's Do Some Math! ➕

Computers are great at math! Let's make the computer add two numbers together.

This is one of the most basic and useful things a computer can do.`,

        task: `Write a program that takes two numbers and prints their sum (addition).

**For example:** If the numbers are 5 and 3, print 8`,

        examples: [
            {
                input: "5, 3",
                output: "8",
                explanation: "5 + 3 = 8"
            },
            {
                input: "10, 20",
                output: "30",
                explanation: "10 + 20 = 30"
            }
        ],

        hints: [
            "💡 Use the + operator to add numbers",
            "💡 In Python: result = a + b",
            "💡 Store the numbers in variables first",
            "💡 Then print the result of adding them"
        ],

        starterCode: {
            python: `# Two numbers are given to you
a = 5
b = 3

# Add them together and print the result
# Write your code below:

`,
            javascript: `// Two numbers are given to you
let a = 5;
let b = 3;

// Add them together and print the result
// Write your code below:

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        
        // Add them together and print the result
        // Write your code below:
        
    }
}`
        },

        solution: {
            python: `a = 5
b = 3
print(a + b)`,
            javascript: `let a = 5;
let b = 3;
console.log(a + b);`,
            java: `System.out.println(a + b);`
        },

        testCases: [
            { input: "5, 3", expected: "8" },
            { input: "10, 20", expected: "30" }
        ]
    },

    {
        id: 3,
        title: "Find the Bigger Number",
        slug: "find-bigger-number",
        difficulty: "easy",
        category: "Comparisons",
        points: 20,
        solved: false,
        description: `# Which One is Bigger? 🔍

Sometimes we need to compare things - like finding which number is larger!

This teaches you how computers make decisions.`,

        task: `Given two numbers, print the larger one.

**For example:** If the numbers are 7 and 3, print 7`,

        examples: [
            {
                input: "7, 3",
                output: "7",
                explanation: "7 is bigger than 3"
            },
            {
                input: "5, 10",
                output: "10",
                explanation: "10 is bigger than 5"
            }
        ],

        hints: [
            "💡 Use > to check if one number is greater than another",
            "💡 Use an if-else statement to decide what to print",
            "💡 Python: if a > b: print(a) else: print(b)",
            "💡 You can also use the max() function in Python!"
        ],

        starterCode: {
            python: `# Two numbers are given
a = 7
b = 3

# Find and print the bigger number
# Hint: Use if-else or max()

`,
            javascript: `// Two numbers are given
let a = 7;
let b = 3;

// Find and print the bigger number
// Hint: Use if-else or Math.max()

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int a = 7;
        int b = 3;
        
        // Find and print the bigger number
        
    }
}`
        },

        solution: {
            python: `a = 7
b = 3
print(max(a, b))`,
            javascript: `let a = 7;
let b = 3;
console.log(Math.max(a, b));`,
            java: `System.out.println(Math.max(a, b));`
        },

        testCases: [
            { input: "7, 3", expected: "7" },
            { input: "5, 10", expected: "10" }
        ]
    },

    {
        id: 4,
        title: "Even or Odd?",
        slug: "even-or-odd",
        difficulty: "easy",
        category: "Basic Math",
        points: 20,
        solved: false,
        description: `# Is it Even or Odd? 🎲

Numbers can be divided into two groups:
- **Even numbers**: 2, 4, 6, 8, 10... (divisible by 2)
- **Odd numbers**: 1, 3, 5, 7, 9... (not divisible by 2)`,

        task: `Given a number, print "Even" if it's even, or "Odd" if it's odd.`,

        examples: [
            {
                input: "4",
                output: "Even",
                explanation: "4 ÷ 2 = 2 with no remainder, so it's even"
            },
            {
                input: "7",
                output: "Odd",
                explanation: "7 ÷ 2 = 3 with remainder 1, so it's odd"
            }
        ],

        hints: [
            "💡 Use the modulo operator % to find the remainder",
            "💡 If number % 2 equals 0, it's even",
            "💡 If number % 2 equals 1, it's odd",
            "💡 Use an if-else statement to check"
        ],

        starterCode: {
            python: `# A number is given
n = 4

# Check if it's even or odd and print the result
# Hint: Use % (modulo) to find remainder

`,
            javascript: `// A number is given
let n = 4;

// Check if it's even or odd and print the result
// Hint: Use % (modulo) to find remainder

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int n = 4;
        
        // Check if it's even or odd
        
    }
}`
        },

        solution: {
            python: `n = 4
if n % 2 == 0:
    print("Even")
else:
    print("Odd")`,
            javascript: `let n = 4;
if (n % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}`,
            java: `if (n % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}`
        },

        testCases: [
            { input: "4", expected: "Even" },
            { input: "7", expected: "Odd" }
        ]
    },

    {
        id: 5,
        title: "Count to Ten",
        slug: "count-to-ten",
        difficulty: "easy",
        category: "Loops",
        points: 25,
        solved: false,
        description: `# Let's Count! 🔢

Computers are great at repetitive tasks. Let's make the computer count!

This introduces you to **loops** - a way to repeat actions.`,

        task: `Print numbers from 1 to 10, each on a new line.`,

        examples: [
            {
                input: "No input needed",
                output: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
                explanation: "Print each number from 1 to 10"
            }
        ],

        hints: [
            "💡 Use a for loop to repeat the print statement",
            "💡 In Python: for i in range(1, 11): print(i)",
            "💡 range(1, 11) gives numbers from 1 to 10",
            "💡 The second number in range is not included!"
        ],

        starterCode: {
            python: `# Print numbers from 1 to 10
# Hint: Use a for loop with range()

`,
            javascript: `// Print numbers from 1 to 10
// Hint: Use a for loop

`,
            java: `public class Solution {
    public static void main(String[] args) {
        // Print numbers from 1 to 10
        
    }
}`
        },

        solution: {
            python: `for i in range(1, 11):
    print(i)`,
            javascript: `for (let i = 1; i <= 10; i++) {
    console.log(i);
}`,
            java: `for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}`
        },

        testCases: [
            { input: "", expected: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" }
        ]
    },

    // ============ MEDIUM PROBLEMS ============
    {
        id: 6,
        title: "Reverse a String",
        slug: "reverse-string",
        difficulty: "medium",
        category: "Strings",
        points: 40,
        solved: false,
        description: `# Flip That Text! 🔄

Reversing a string means writing it backwards. 
"hello" becomes "olleh"

This is a common interview question!`,

        task: `Given a string, print it in reverse order.`,

        constraints: `
- String length: 1 to 100 characters
- Contains only letters and spaces`,

        examples: [
            {
                input: '"hello"',
                output: '"olleh"',
                explanation: "Each character is reversed"
            },
            {
                input: '"CodeQuest"',
                output: '"tseuQedoC"',
                explanation: "Capital letters stay capital"
            }
        ],

        hints: [
            "💡 In Python, you can reverse with [::-1] slicing",
            "💡 Or build a new string character by character from the end"
        ],

        starterCode: {
            python: `# Given string
text = "hello"

# Reverse and print it
# Your code here:

`,
            javascript: `// Given string
let text = "hello";

// Reverse and print it
// Hint: split, reverse, join

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String text = "hello";
        
        // Reverse and print
        
    }
}`
        },

        solution: {
            python: `text = "hello"
print(text[::-1])`,
            javascript: `let text = "hello";
console.log(text.split('').reverse().join(''));`,
            java: `StringBuilder sb = new StringBuilder(text);
System.out.println(sb.reverse().toString());`
        },

        testCases: [
            { input: "hello", expected: "olleh" },
            { input: "CodeQuest", expected: "tseuQedoC" }
        ]
    },

    {
        id: 7,
        title: "Sum of Array",
        slug: "sum-of-array",
        difficulty: "medium",
        category: "Arrays",
        points: 45,
        solved: false,
        description: `# Add Them All! ➕

Given a list of numbers, find their total sum.

This teaches you how to work with lists/arrays.`,

        task: `Given an array of numbers, print the sum of all elements.`,

        constraints: `
- Array length: 1 to 1000 elements
- Each element: -1000 to 1000`,

        examples: [
            {
                input: "[1, 2, 3, 4, 5]",
                output: "15",
                explanation: "1 + 2 + 3 + 4 + 5 = 15"
            },
            {
                input: "[10, -5, 20]",
                output: "25",
                explanation: "10 + (-5) + 20 = 25"
            }
        ],

        hints: [
            "💡 Use a loop to go through each element and add to a total",
            "💡 In Python, you can use the sum() function directly!"
        ],

        starterCode: {
            python: `# Given array
numbers = [1, 2, 3, 4, 5]

# Find and print the sum
# Your code here:

`,
            javascript: `// Given array
let numbers = [1, 2, 3, 4, 5];

// Find and print the sum
// Your code here:

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Find and print the sum
        
    }
}`
        },

        solution: {
            python: `numbers = [1, 2, 3, 4, 5]
print(sum(numbers))`,
            javascript: `let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((a, b) => a + b, 0));`,
            java: `int sum = 0;
for (int n : numbers) sum += n;
System.out.println(sum);`
        },

        testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: "15" },
            { input: "[10, -5, 20]", expected: "25" }
        ]
    },

    {
        id: 8,
        title: "Palindrome Check",
        slug: "palindrome-check",
        difficulty: "medium",
        category: "Strings",
        points: 50,
        solved: false,
        description: `# Is It the Same Backwards? 🪞

A **palindrome** is a word that reads the same forwards and backwards.

Examples: "racecar", "level", "madam"`,

        task: `Given a string, print "Yes" if it's a palindrome, or "No" if it's not.`,

        constraints: `
- String length: 1 to 100 characters
- Contains only lowercase letters`,

        examples: [
            {
                input: '"racecar"',
                output: "Yes",
                explanation: "racecar spelled backwards is still racecar"
            },
            {
                input: '"hello"',
                output: "No",
                explanation: "hello backwards is olleh, not the same"
            }
        ],

        hints: [
            "💡 Reverse the string and compare with the original",
            "💡 If they're the same, it's a palindrome!"
        ],

        starterCode: {
            python: `# Given string
text = "racecar"

# Check if palindrome and print Yes or No
# Your code here:

`,
            javascript: `// Given string
let text = "racecar";

// Check if palindrome and print Yes or No
// Your code here:

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String text = "racecar";
        
        // Check if palindrome
        
    }
}`
        },

        solution: {
            python: `text = "racecar"
if text == text[::-1]:
    print("Yes")
else:
    print("No")`,
            javascript: `let text = "racecar";
if (text === text.split('').reverse().join('')) {
    console.log("Yes");
} else {
    console.log("No");
}`,
            java: `StringBuilder sb = new StringBuilder(text);
if (text.equals(sb.reverse().toString())) {
    System.out.println("Yes");
} else {
    System.out.println("No");
}`
        },

        testCases: [
            { input: "racecar", expected: "Yes" },
            { input: "hello", expected: "No" }
        ]
    },

    // ============ HARD PROBLEMS ============
    {
        id: 9,
        title: "Two Sum",
        slug: "two-sum",
        difficulty: "hard",
        category: "Arrays",
        points: 80,
        solved: false,
        description: `# Find the Pair! 🎯

This is a classic coding interview question!

Given an array of integers and a target sum, find two numbers that add up to the target.`,

        task: `Find indices of two numbers that add up to a specific target.`,

        constraints: `
- 2 ≤ array length ≤ 10⁴
- -10⁹ ≤ nums[i] ≤ 10⁹
- -10⁹ ≤ target ≤ 10⁹
- Exactly one solution exists
- Time complexity should be O(n)`,

        examples: [
            {
                input: "nums = [2, 7, 11, 15], target = 9",
                output: "[0, 1]",
                explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
                input: "nums = [3, 2, 4], target = 6",
                output: "[1, 2]",
                explanation: "nums[1] + nums[2] = 2 + 4 = 6"
            }
        ],

        hints: [
            "💡 Use a hash map to store seen numbers",
            "💡 For each number, check if (target - number) exists"
        ],

        starterCode: {
            python: `def two_sum(nums, target):
    # Your code here
    pass

# Test
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))
`,
            javascript: `function twoSum(nums, target) {
    // Your code here
    
}

// Test
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
`,
            java: `public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        
    }
}`
        },

        solution: {
            python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i

nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))`,
            javascript: `function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9));`,
            java: `Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[] { map.get(complement), i };
    }
    map.put(nums[i], i);
}`
        },

        testCases: [
            { input: "[2, 7, 11, 15], 9", expected: "[0, 1]" },
            { input: "[3, 2, 4], 6", expected: "[1, 2]" }
        ]
    },

    {
        id: 10,
        title: "Fibonacci Sequence",
        slug: "fibonacci",
        difficulty: "hard",
        category: "Recursion",
        points: 90,
        solved: false,
        description: `# The Famous Fibonacci! 🐚

The Fibonacci sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21...

Each number is the sum of the two preceding ones.`,

        task: `Given n, return the nth Fibonacci number.`,

        constraints: `
- 0 ≤ n ≤ 30
- F(0) = 0, F(1) = 1
- F(n) = F(n-1) + F(n-2)
- Optimize for efficiency`,

        examples: [
            {
                input: "n = 5",
                output: "5",
                explanation: "F(5) = F(4) + F(3) = 3 + 2 = 5"
            },
            {
                input: "n = 10",
                output: "55",
                explanation: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55"
            }
        ],

        hints: [
            "💡 Can use recursion, but it's slow",
            "💡 Use dynamic programming for O(n) solution"
        ],

        starterCode: {
            python: `def fibonacci(n):
    # Your code here
    pass

# Test
print(fibonacci(10))
`,
            javascript: `function fibonacci(n) {
    // Your code here
    
}

// Test
console.log(fibonacci(10));
`,
            java: `public class Solution {
    public int fibonacci(int n) {
        // Your code here
        
    }
}`
        },

        solution: {
            python: `def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print(fibonacci(10))`,
            javascript: `function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(fibonacci(10));`,
            java: `if (n <= 1) return n;
int a = 0, b = 1;
for (int i = 2; i <= n; i++) {
    int temp = a + b;
    a = b;
    b = temp;
}
return b;`
        },

        testCases: [
            { input: "5", expected: "5" },
            { input: "10", expected: "55" }
        ]
    },

    // ============ NEW: VARIABLES & DATA TYPES ============
    {
        id: 11,
        title: "Swap Two Variables",
        slug: "swap-variables",
        difficulty: "easy",
        category: "Variables",
        points: 15,
        solved: false,
        description: `# The Switcheroo! 🔀

You have two boxes with different items. How do you swap what's in them?

This teaches the fundamental concept of variable manipulation!`,

        task: `Given two variables a and b, swap their values and print them.`,

        examples: [
            {
                input: "a = 5, b = 10",
                output: "a = 10, b = 5",
                explanation: "The values are exchanged"
            }
        ],

        hints: [
            "💡 You might need a temporary variable to hold one value",
            "💡 In Python, you can do a, b = b, a"
        ],

        starterCode: {
            python: `a = 5
b = 10

# Swap the values and print
# Your code here:

print(f"a = {a}, b = {b}")`,
            javascript: `let a = 5;
let b = 10;

// Swap the values and print

console.log(\`a = \${a}, b = \${b}\`);`,
            java: `public class Solution {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        
        // Swap and print
        
    }
}`
        },

        solution: {
            python: `a = 5
b = 10
a, b = b, a
print(f"a = {a}, b = {b}")`,
            javascript: `let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(\`a = \${a}, b = \${b}\`);`,
            java: `int temp = a; a = b; b = temp;
System.out.println("a = " + a + ", b = " + b);`
        },

        testCases: [
            { input: "5, 10", expected: "a = 10, b = 5" }
        ]
    },

    {
        id: 12,
        title: "Temperature Converter",
        slug: "temperature-converter",
        difficulty: "easy",
        category: "Basic Math",
        points: 20,
        solved: false,
        description: `# Hot or Cold? 🌡️

Convert temperature between Celsius and Fahrenheit!

Formula: F = (C × 9/5) + 32`,

        task: `Given a temperature in Celsius, convert it to Fahrenheit.`,

        examples: [
            {
                input: "0",
                output: "32.0",
                explanation: "0°C = 32°F (freezing point of water)"
            },
            {
                input: "100",
                output: "212.0",
                explanation: "100°C = 212°F (boiling point)"
            }
        ],

        hints: [
            "💡 Use the formula: F = (C × 9/5) + 32",
            "💡 Be careful with integer division!"
        ],

        starterCode: {
            python: `celsius = 25

# Convert to Fahrenheit
# Your code here:

`,
            javascript: `let celsius = 25;

// Convert to Fahrenheit

`,
            java: `public class Solution {
    public static void main(String[] args) {
        double celsius = 25;
        
        // Convert to Fahrenheit
        
    }
}`
        },

        solution: {
            python: `celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)`,
            javascript: `let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);`,
            java: `double fahrenheit = (celsius * 9/5) + 32;
System.out.println(fahrenheit);`
        },

        testCases: [
            { input: "0", expected: "32.0" },
            { input: "100", expected: "212.0" }
        ]
    },

    {
        id: 13,
        title: "Countdown Timer",
        slug: "countdown-timer",
        difficulty: "easy",
        category: "Loops",
        points: 20,
        solved: false,
        description: `# 3... 2... 1... Blast Off! 🚀

Create a countdown from a given number to 1, then print "Blast Off!"`,

        task: `Given a number n, print countdown from n to 1, then "Blast Off!"`,

        examples: [
            {
                input: "5",
                output: "5\\n4\\n3\\n2\\n1\\nBlast Off!",
                explanation: "Count down then launch!"
            }
        ],

        hints: [
            "💡 Use a loop that decreases the counter",
            "💡 Print 'Blast Off!' after the loop ends"
        ],

        starterCode: {
            python: `n = 5

# Countdown and blast off!

`,
            javascript: `let n = 5;

// Countdown and blast off!

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int n = 5;
        
        // Countdown
        
    }
}`
        },

        solution: {
            python: `n = 5
for i in range(n, 0, -1):
    print(i)
print("Blast Off!")`,
            javascript: `let n = 5;
for (let i = n; i >= 1; i--) {
    console.log(i);
}
console.log("Blast Off!");`,
            java: `for (int i = n; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("Blast Off!");`
        },

        testCases: [
            { input: "5", expected: "5\\n4\\n3\\n2\\n1\\nBlast Off!" }
        ]
    },

    {
        id: 14,
        title: "Multiplication Table",
        slug: "multiplication-table",
        difficulty: "easy",
        category: "Loops",
        points: 25,
        solved: false,
        description: `# Times Tables! ✖️

Generate the multiplication table for any number.`,

        task: `Given a number n, print its multiplication table from 1 to 10.`,

        examples: [
            {
                input: "7",
                output: "7 x 1 = 7\\n7 x 2 = 14\\n...\\n7 x 10 = 70",
                explanation: "Full table for 7"
            }
        ],

        hints: [
            "💡 Loop from 1 to 10",
            "💡 Multiply n by the loop counter"
        ],

        starterCode: {
            python: `n = 7

# Print multiplication table

`,
            javascript: `let n = 7;

// Print multiplication table

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int n = 7;
        
        // Print table
        
    }
}`
        },

        solution: {
            python: `n = 7
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,
            javascript: `let n = 7;
for (let i = 1; i <= 10; i++) {
    console.log(\`\${n} x \${i} = \${n * i}\`);
}`,
            java: `for (int i = 1; i <= 10; i++) {
    System.out.println(n + " x " + i + " = " + (n * i));
}`
        },

        testCases: [
            { input: "7", expected: "7 x 1 = 7\\n7 x 2 = 14\\n7 x 3 = 21\\n7 x 4 = 28\\n7 x 5 = 35\\n7 x 6 = 42\\n7 x 7 = 49\\n7 x 8 = 56\\n7 x 9 = 63\\n7 x 10 = 70" }
        ]
    },

    {
        id: 15,
        title: "Grade Calculator",
        slug: "grade-calculator",
        difficulty: "easy",
        category: "Conditions",
        points: 25,
        solved: false,
        description: `# What's My Grade? 📊

Convert a numerical score to a letter grade.

- 90-100: A
- 80-89: B  
- 70-79: C
- 60-69: D
- Below 60: F`,

        task: `Given a score, print the corresponding letter grade.`,

        examples: [
            { input: "85", output: "B", explanation: "85 is in 80-89 range" },
            { input: "92", output: "A", explanation: "92 is in 90-100 range" }
        ],

        hints: [
            "💡 Use if-elif-else (or switch) statements",
            "💡 Check from highest to lowest"
        ],

        starterCode: {
            python: `score = 85

# Determine and print the grade

`,
            javascript: `let score = 85;

// Determine and print the grade

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int score = 85;
        
        // Determine grade
        
    }
}`
        },

        solution: {
            python: `score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")`,
            javascript: `let score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");`,
            java: `if (score >= 90) System.out.println("A");
else if (score >= 80) System.out.println("B");
else if (score >= 70) System.out.println("C");
else if (score >= 60) System.out.println("D");
else System.out.println("F");`
        },

        testCases: [
            { input: "85", expected: "B" },
            { input: "92", expected: "A" },
            { input: "55", expected: "F" }
        ]
    },

    {
        id: 16,
        title: "Leap Year Check",
        slug: "leap-year",
        difficulty: "easy",
        category: "Conditions",
        points: 25,
        solved: false,
        description: `# Is It a Leap Year? 📅

A leap year has 366 days. The rules are:
- Divisible by 4 AND
- NOT divisible by 100, UNLESS also divisible by 400`,

        task: `Given a year, print "Leap Year" or "Not Leap Year".`,

        examples: [
            { input: "2024", output: "Leap Year", explanation: "2024 ÷ 4 = 506" },
            { input: "1900", output: "Not Leap Year", explanation: "Divisible by 100 but not 400" },
            { input: "2000", output: "Leap Year", explanation: "Divisible by 400" }
        ],

        hints: [
            "💡 Check divisibility by 400 first",
            "💡 Then check 100, then 4"
        ],

        starterCode: {
            python: `year = 2024

# Check if leap year

`,
            javascript: `let year = 2024;

// Check if leap year

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int year = 2024;
        
        // Check leap year
        
    }
}`
        },

        solution: {
            python: `year = 2024
if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print("Leap Year")
else:
    print("Not Leap Year")`,
            javascript: `let year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}`,
            java: `if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    System.out.println("Leap Year");
} else {
    System.out.println("Not Leap Year");
}`
        },

        testCases: [
            { input: "2024", expected: "Leap Year" },
            { input: "1900", expected: "Not Leap Year" },
            { input: "2000", expected: "Leap Year" }
        ]
    },

    // ============ MEDIUM: PATTERN DEDUCTION ============
    {
        id: 17,
        title: "Number Pyramid",
        slug: "number-pyramid",
        difficulty: "medium",
        category: "Patterns",
        points: 45,
        solved: false,
        description: `# Build the Pyramid! 🔺

Study the pattern and figure out the logic:`,

        task: `Given n rows, print a number pyramid. Analyze the examples to understand the pattern!`,

        constraints: `- 1 ≤ n ≤ 10`,

        examples: [
            {
                input: "4",
                output: "   1\\n  1 2\\n 1 2 3\\n1 2 3 4",
                explanation: "Row i has numbers 1 to i, with spacing for alignment"
            }
        ],

        hints: [
            "💡 Each row has increasing numbers",
            "💡 Leading spaces decrease as row increases"
        ],

        starterCode: {
            python: `n = 4

# Print the number pyramid
# Study the pattern carefully!

`,
            javascript: `let n = 4;

// Print the number pyramid

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int n = 4;
        
        // Print pyramid
        
    }
}`
        },

        solution: {
            python: `n = 4
for i in range(1, n + 1):
    print(" " * (n - i), end="")
    print(" ".join(str(x) for x in range(1, i + 1)))`,
            javascript: `let n = 4;
for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let nums = Array.from({length: i}, (_, j) => j + 1).join(" ");
    console.log(spaces + nums);
}`,
            java: `for (int i = 1; i <= n; i++) {
    for (int s = 0; s < n - i; s++) System.out.print(" ");
    for (int j = 1; j <= i; j++) System.out.print(j + (j < i ? " " : ""));
    System.out.println();
}`
        },

        testCases: [
            { input: "4", expected: "   1\\n  1 2\\n 1 2 3\\n1 2 3 4" }
        ]
    },

    {
        id: 18,
        title: "Digital Root",
        slug: "digital-root",
        difficulty: "medium",
        category: "Math Logic",
        points: 50,
        solved: false,
        description: `# The Magical Sum! 🔢

Keep adding digits until you get a single digit.

**Example:** 9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2`,

        task: `Given a number, find its digital root (keep summing digits until single digit).`,

        constraints: `- 1 ≤ n ≤ 10^9`,

        examples: [
            { input: "9875", output: "2", explanation: "9875→29→11→2" },
            { input: "12345", output: "6", explanation: "1+2+3+4+5=15→1+5=6" }
        ],

        hints: [
            "💡 Use a loop to keep summing until single digit",
            "💡 Or find the mathematical pattern!"
        ],

        starterCode: {
            python: `n = 9875

# Find the digital root

`,
            javascript: `let n = 9875;

// Find the digital root

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int n = 9875;
        
        // Find digital root
        
    }
}`
        },

        solution: {
            python: `n = 9875
while n >= 10:
    n = sum(int(d) for d in str(n))
print(n)`,
            javascript: `let n = 9875;
while (n >= 10) {
    n = String(n).split('').reduce((a, b) => a + parseInt(b), 0);
}
console.log(n);`,
            java: `while (n >= 10) {
    int sum = 0;
    while (n > 0) { sum += n % 10; n /= 10; }
    n = sum;
}
System.out.println(n);`
        },

        testCases: [
            { input: "9875", expected: "2" },
            { input: "12345", expected: "6" }
        ]
    },

    {
        id: 19,
        title: "Character Frequency",
        slug: "char-frequency",
        difficulty: "medium",
        category: "Strings",
        points: 50,
        solved: false,
        description: `# Count 'Em Up! 📊

Analyze a string and find how many times each character appears.`,

        task: `Given a string, print each unique character with its count, sorted alphabetically.`,

        constraints: `- String length: 1 to 100
- Only lowercase letters`,

        examples: [
            {
                input: '"programming"',
                output: "a:1 g:2 i:1 m:2 n:1 o:1 p:1 r:2",
                explanation: "Each letter and its frequency"
            }
        ],

        hints: [
            "💡 Use a dictionary/map to count characters",
            "💡 Sort the keys before printing"
        ],

        starterCode: {
            python: `text = "programming"

# Count and print character frequencies

`,
            javascript: `let text = "programming";

// Count and print character frequencies

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String text = "programming";
        
        // Count frequencies
        
    }
}`
        },

        solution: {
            python: `text = "programming"
freq = {}
for c in text:
    freq[c] = freq.get(c, 0) + 1
print(" ".join(f"{k}:{v}" for k, v in sorted(freq.items())))`,
            javascript: `let text = "programming";
let freq = {};
for (let c of text) freq[c] = (freq[c] || 0) + 1;
console.log(Object.entries(freq).sort().map(([k,v]) => k+":"+v).join(" "));`,
            java: `Map<Character,Integer> freq = new TreeMap<>();
for (char c : text.toCharArray()) freq.merge(c, 1, Integer::sum);
freq.forEach((k, v) -> System.out.print(k + ":" + v + " "));`
        },

        testCases: [
            { input: "programming", expected: "a:1 g:2 i:1 m:2 n:1 o:1 p:1 r:2" }
        ]
    },

    {
        id: 20,
        title: "Second Largest",
        slug: "second-largest",
        difficulty: "medium",
        category: "Arrays",
        points: 50,
        solved: false,
        description: `# Almost the Winner! 🥈

Finding the largest is easy... but what about the second largest?`,

        task: `Given an array, find the second largest element.`,

        constraints: `- Array length: 2 to 1000
- All elements are distinct`,

        examples: [
            { input: "[12, 35, 1, 10, 34, 1]", output: "34", explanation: "35 is largest, 34 is second" },
            { input: "[10, 5, 8, 20]", output: "10", explanation: "20 is largest, 10 is second" }
        ],

        hints: [
            "💡 Track both largest and second largest as you iterate",
            "💡 Be careful when updating the values"
        ],

        starterCode: {
            python: `arr = [12, 35, 1, 10, 34, 1]

# Find second largest

`,
            javascript: `let arr = [12, 35, 1, 10, 34, 1];

// Find second largest

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        
        // Find second largest
        
    }
}`
        },

        solution: {
            python: `arr = [12, 35, 1, 10, 34, 1]
first = second = float('-inf')
for num in arr:
    if num > first:
        second = first
        first = num
    elif num > second and num != first:
        second = num
print(second)`,
            javascript: `let arr = [12, 35, 1, 10, 34, 1];
let first = -Infinity, second = -Infinity;
for (let num of arr) {
    if (num > first) { second = first; first = num; }
    else if (num > second && num !== first) second = num;
}
console.log(second);`,
            java: `int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
for (int num : arr) {
    if (num > first) { second = first; first = num; }
    else if (num > second && num != first) second = num;
}
System.out.println(second);`
        },

        testCases: [
            { input: "[12, 35, 1, 10, 34, 1]", expected: "34" }
        ]
    },

    {
        id: 21,
        title: "Valid Triangle",
        slug: "valid-triangle",
        difficulty: "medium",
        category: "Geometry",
        points: 45,
        solved: false,
        description: `# Can We Build It? 🔺

Three sticks can only form a triangle if they meet certain conditions.

**Rule:** Sum of any two sides must be greater than the third!`,

        task: `Given three side lengths, determine if they can form a valid triangle.`,

        examples: [
            { input: "3, 4, 5", output: "Valid", explanation: "3+4>5, 4+5>3, 3+5>4" },
            { input: "1, 2, 3", output: "Invalid", explanation: "1+2=3, not greater than 3" }
        ],

        hints: [
            "💡 Check all three conditions",
            "💡 All must be true for a valid triangle"
        ],

        starterCode: {
            python: `a, b, c = 3, 4, 5

# Check if valid triangle

`,
            javascript: `let a = 3, b = 4, c = 5;

// Check if valid triangle

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int a = 3, b = 4, c = 5;
        
        // Check triangle
        
    }
}`
        },

        solution: {
            python: `a, b, c = 3, 4, 5
if a + b > c and b + c > a and a + c > b:
    print("Valid")
else:
    print("Invalid")`,
            javascript: `let a = 3, b = 4, c = 5;
if (a + b > c && b + c > a && a + c > b) {
    console.log("Valid");
} else {
    console.log("Invalid");
}`,
            java: `if (a + b > c && b + c > a && a + c > b) {
    System.out.println("Valid");
} else {
    System.out.println("Invalid");
}`
        },

        testCases: [
            { input: "3, 4, 5", expected: "Valid" },
            { input: "1, 2, 3", expected: "Invalid" }
        ]
    },

    {
        id: 22,
        title: "Prime Number Check",
        slug: "prime-check",
        difficulty: "medium",
        category: "Math Logic",
        points: 55,
        solved: false,
        description: `# Is It Special? ✨

A prime number is only divisible by 1 and itself.

Examples: 2, 3, 5, 7, 11, 13...`,

        task: `Given a number, print "Prime" or "Not Prime".`,

        constraints: `- 2 ≤ n ≤ 10^6
- Optimize for large numbers!`,

        examples: [
            { input: "17", output: "Prime", explanation: "Only divisible by 1 and 17" },
            { input: "24", output: "Not Prime", explanation: "Divisible by 2, 3, 4, 6, 8, 12" }
        ],

        hints: [
            "💡 Only check divisors up to √n",
            "💡 Handle even numbers first"
        ],

        starterCode: {
            python: `n = 17

# Check if prime

`,
            javascript: `let n = 17;

// Check if prime

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int n = 17;
        
        // Check prime
        
    }
}`
        },

        solution: {
            python: `n = 17
if n < 2:
    print("Not Prime")
elif n == 2:
    print("Prime")
elif n % 2 == 0:
    print("Not Prime")
else:
    is_prime = True
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            is_prime = False
            break
    print("Prime" if is_prime else "Not Prime")`,
            javascript: `let n = 17;
if (n < 2) console.log("Not Prime");
else if (n === 2) console.log("Prime");
else if (n % 2 === 0) console.log("Not Prime");
else {
    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) { isPrime = false; break; }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
}`,
            java: `if (n < 2) System.out.println("Not Prime");
else if (n == 2) System.out.println("Prime");
else if (n % 2 == 0) System.out.println("Not Prime");
else {
    boolean isPrime = true;
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) { isPrime = false; break; }
    }
    System.out.println(isPrime ? "Prime" : "Not Prime");
}`
        },

        testCases: [
            { input: "17", expected: "Prime" },
            { input: "24", expected: "Not Prime" }
        ]
    },

    {
        id: 23,
        title: "Password Strength",
        slug: "password-strength",
        difficulty: "medium",
        category: "Strings",
        points: 55,
        solved: false,
        description: `# Is Your Password Strong? 🔐

A strong password must have:
- At least 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 digit`,

        task: `Given a password, print "Strong" or "Weak".`,

        examples: [
            { input: '"CodeQuest123"', output: "Strong", explanation: "Has length, upper, lower, digit" },
            { input: '"password"', output: "Weak", explanation: "No uppercase or digit" }
        ],

        hints: [
            "💡 Check each condition separately",
            "💡 Use character methods like isupper(), isdigit()"
        ],

        starterCode: {
            python: `password = "CodeQuest123"

# Check password strength

`,
            javascript: `let password = "CodeQuest123";

// Check password strength

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String password = "CodeQuest123";
        
        // Check strength
        
    }
}`
        },

        solution: {
            python: `password = "CodeQuest123"
has_len = len(password) >= 8
has_upper = any(c.isupper() for c in password)
has_lower = any(c.islower() for c in password)
has_digit = any(c.isdigit() for c in password)
print("Strong" if all([has_len, has_upper, has_lower, has_digit]) else "Weak")`,
            javascript: `let password = "CodeQuest123";
let hasLen = password.length >= 8;
let hasUpper = /[A-Z]/.test(password);
let hasLower = /[a-z]/.test(password);
let hasDigit = /[0-9]/.test(password);
console.log(hasLen && hasUpper && hasLower && hasDigit ? "Strong" : "Weak");`,
            java: `boolean hasLen = password.length() >= 8;
boolean hasUpper = password.matches(".*[A-Z].*");
boolean hasLower = password.matches(".*[a-z].*");
boolean hasDigit = password.matches(".*[0-9].*");
System.out.println(hasLen && hasUpper && hasLower && hasDigit ? "Strong" : "Weak");`
        },

        testCases: [
            { input: "CodeQuest123", expected: "Strong" },
            { input: "password", expected: "Weak" }
        ]
    },

    // ============ HARD: REALISTIC SCENARIOS ============
    {
        id: 24,
        title: "Stock Profit",
        slug: "stock-profit",
        difficulty: "hard",
        category: "Arrays",
        points: 80,
        solved: false,
        description: `# Be a Smart Trader! 📈

You have stock prices for each day. Find the maximum profit by buying on one day and selling on another (later) day.`,

        task: `Given daily stock prices, find maximum possible profit.`,

        constraints: `- Array length: 1 to 10^5
- Price: 0 to 10^4`,

        examples: [
            { input: "[7, 1, 5, 3, 6, 4]", output: "5", explanation: "Buy at 1, sell at 6" },
            { input: "[7, 6, 4, 3, 1]", output: "0", explanation: "No profit possible" }
        ],

        hints: [
            "💡 Track minimum price seen so far",
            "💡 Calculate profit at each point"
        ],

        starterCode: {
            python: `prices = [7, 1, 5, 3, 6, 4]

# Find maximum profit

`,
            javascript: `let prices = [7, 1, 5, 3, 6, 4];

// Find maximum profit

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        
        // Find max profit
        
    }
}`
        },

        solution: {
            python: `prices = [7, 1, 5, 3, 6, 4]
min_price = float('inf')
max_profit = 0
for price in prices:
    min_price = min(min_price, price)
    max_profit = max(max_profit, price - min_price)
print(max_profit)`,
            javascript: `let prices = [7, 1, 5, 3, 6, 4];
let minPrice = Infinity, maxProfit = 0;
for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
}
console.log(maxProfit);`,
            java: `int minPrice = Integer.MAX_VALUE, maxProfit = 0;
for (int price : prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
}
System.out.println(maxProfit);`
        },

        testCases: [
            { input: "[7, 1, 5, 3, 6, 4]", expected: "5" },
            { input: "[7, 6, 4, 3, 1]", expected: "0" }
        ]
    },

    {
        id: 25,
        title: "Bracket Validator",
        slug: "bracket-validator",
        difficulty: "hard",
        category: "Stacks",
        points: 85,
        solved: false,
        description: `# Match the Brackets! 🔗

Check if all brackets are properly matched and nested.

Valid: (), [], {}, ([{}])
Invalid: ([)], {(}, )(`,

        task: `Given a string of brackets, print "Valid" or "Invalid".`,

        constraints: `- String length: 1 to 1000
- Contains only ()[]{}`,

        examples: [
            { input: '"([{}])"', output: "Valid", explanation: "All properly nested" },
            { input: '"([)]"', output: "Invalid", explanation: "Incorrect nesting" }
        ],

        hints: [
            "💡 Use a stack data structure",
            "💡 Push opening brackets, pop and match closing"
        ],

        starterCode: {
            python: `brackets = "([{}])"

# Validate brackets

`,
            javascript: `let brackets = "([{}])";

// Validate brackets

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String brackets = "([{}])";
        
        // Validate
        
    }
}`
        },

        solution: {
            python: `brackets = "([{}])"
stack = []
pairs = {')': '(', ']': '[', '}': '{'}
for b in brackets:
    if b in '([{':
        stack.append(b)
    elif not stack or stack.pop() != pairs[b]:
        print("Invalid")
        exit()
print("Valid" if not stack else "Invalid")`,
            javascript: `let brackets = "([{}])";
let stack = [];
let pairs = {')': '(', ']': '[', '}': '{'};
let valid = true;
for (let b of brackets) {
    if ('([{'.includes(b)) stack.push(b);
    else if (!stack.length || stack.pop() !== pairs[b]) { valid = false; break; }
}
console.log(valid && !stack.length ? "Valid" : "Invalid");`,
            java: `Stack<Character> stack = new Stack<>();
Map<Character,Character> pairs = Map.of(')', '(', ']', '[', '}', '{');
boolean valid = true;
for (char b : brackets.toCharArray()) {
    if ("([{".indexOf(b) >= 0) stack.push(b);
    else if (stack.isEmpty() || stack.pop() != pairs.get(b)) { valid = false; break; }
}
System.out.println(valid && stack.isEmpty() ? "Valid" : "Invalid");`
        },

        testCases: [
            { input: "([{}])", expected: "Valid" },
            { input: "([)]", expected: "Invalid" }
        ]
    },

    {
        id: 26,
        title: "Word Compression",
        slug: "word-compression",
        difficulty: "hard",
        category: "Strings",
        points: 85,
        solved: false,
        description: `# Compress It! 📦

Run-length encoding: Replace consecutive characters with character+count.

aabbbcccc → a2b3c4`,

        task: `Compress a string using run-length encoding.`,

        constraints: `- String length: 1 to 1000
- Only lowercase letters`,

        examples: [
            { input: '"aabbbcccc"', output: "a2b3c4", explanation: "2 a's, 3 b's, 4 c's" },
            { input: '"abcd"', output: "a1b1c1d1", explanation: "Each appears once" }
        ],

        hints: [
            "💡 Iterate and count consecutive characters",
            "💡 When character changes, output count and reset"
        ],

        starterCode: {
            python: `text = "aabbbcccc"

# Compress the string

`,
            javascript: `let text = "aabbbcccc";

// Compress the string

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String text = "aabbbcccc";
        
        // Compress
        
    }
}`
        },

        solution: {
            python: `text = "aabbbcccc"
result = ""
i = 0
while i < len(text):
    count = 1
    while i + count < len(text) and text[i + count] == text[i]:
        count += 1
    result += text[i] + str(count)
    i += count
print(result)`,
            javascript: `let text = "aabbbcccc";
let result = "", i = 0;
while (i < text.length) {
    let count = 1;
    while (i + count < text.length && text[i + count] === text[i]) count++;
    result += text[i] + count;
    i += count;
}
console.log(result);`,
            java: `StringBuilder result = new StringBuilder();
int i = 0;
while (i < text.length()) {
    int count = 1;
    while (i + count < text.length() && text.charAt(i + count) == text.charAt(i)) count++;
    result.append(text.charAt(i)).append(count);
    i += count;
}
System.out.println(result);`
        },

        testCases: [
            { input: "aabbbcccc", expected: "a2b3c4" },
            { input: "abcd", expected: "a1b1c1d1" }
        ]
    },

    {
        id: 27,
        title: "Rotate Array",
        slug: "rotate-array",
        difficulty: "hard",
        category: "Arrays",
        points: 80,
        solved: false,
        description: `# Spin It Around! 🔄

Rotate an array to the right by k positions.

[1,2,3,4,5] rotated by 2 → [4,5,1,2,3]`,

        task: `Rotate the array right by k positions and print result.`,

        constraints: `- Array length: 1 to 10^5
- 0 ≤ k ≤ 10^5`,

        examples: [
            { input: "[1,2,3,4,5], k=2", output: "[4,5,1,2,3]", explanation: "Last 2 move to front" },
            { input: "[1,2,3], k=4", output: "[3,1,2]", explanation: "k=4 is same as k=1" }
        ],

        hints: [
            "💡 k might be larger than array length - use modulo",
            "💡 Think about reversing parts of the array"
        ],

        starterCode: {
            python: `arr = [1, 2, 3, 4, 5]
k = 2

# Rotate array

`,
            javascript: `let arr = [1, 2, 3, 4, 5];
let k = 2;

// Rotate array

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int k = 2;
        
        // Rotate
        
    }
}`
        },

        solution: {
            python: `arr = [1, 2, 3, 4, 5]
k = 2
k = k % len(arr)
arr = arr[-k:] + arr[:-k]
print(arr)`,
            javascript: `let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
arr = [...arr.slice(-k), ...arr.slice(0, -k)];
console.log(arr);`,
            java: `k = k % arr.length;
int[] result = new int[arr.length];
for (int i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
}
System.out.println(Arrays.toString(result));`
        },

        testCases: [
            { input: "[1,2,3,4,5], k=2", expected: "[4, 5, 1, 2, 3]" }
        ]
    },

    {
        id: 28,
        title: "Count Vowels",
        slug: "count-vowels",
        difficulty: "easy",
        category: "Strings",
        points: 20,
        solved: false,
        description: `# Vowel Hunt! 🔤

Count how many vowels (a, e, i, o, u) appear in a string.`,

        task: `Given a string, count and print the number of vowels.`,

        examples: [
            { input: '"Hello World"', output: "3", explanation: "e, o, o" },
            { input: '"CodeQuest"', output: "4", explanation: "o, e, u, e" }
        ],

        hints: [
            "💡 Check each character against vowels",
            "💡 Remember to handle both upper and lowercase"
        ],

        starterCode: {
            python: `text = "Hello World"

# Count vowels

`,
            javascript: `let text = "Hello World";

// Count vowels

`,
            java: `public class Solution {
    public static void main(String[] args) {
        String text = "Hello World";
        
        // Count vowels
        
    }
}`
        },

        solution: {
            python: `text = "Hello World"
count = sum(1 for c in text.lower() if c in 'aeiou')
print(count)`,
            javascript: `let text = "Hello World";
let count = (text.toLowerCase().match(/[aeiou]/g) || []).length;
console.log(count);`,
            java: `int count = 0;
for (char c : text.toLowerCase().toCharArray()) {
    if ("aeiou".indexOf(c) >= 0) count++;
}
System.out.println(count);`
        },

        testCases: [
            { input: "Hello World", expected: "3" }
        ]
    },

    {
        id: 29,
        title: "Matrix Diagonal Sum",
        slug: "matrix-diagonal",
        difficulty: "hard",
        category: "Arrays",
        points: 75,
        solved: false,
        description: `# Cross the Matrix! ✖️

Find the sum of both diagonals of a square matrix.
Don't count the center twice if matrix is odd-sized!`,

        task: `Given a square matrix, find sum of both diagonals.`,

        examples: [
            {
                input: "[[1,2,3],[4,5,6],[7,8,9]]",
                output: "25",
                explanation: "Primary: 1+5+9=15, Secondary: 3+5+7=15, minus center 5 = 25"
            }
        ],

        hints: [
            "💡 Primary diagonal: i == j",
            "💡 Secondary diagonal: i + j == n - 1"
        ],

        starterCode: {
            python: `matrix = [[1,2,3],[4,5,6],[7,8,9]]

# Find diagonal sum

`,
            javascript: `let matrix = [[1,2,3],[4,5,6],[7,8,9]];

// Find diagonal sum

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        
        // Find diagonal sum
        
    }
}`
        },

        solution: {
            python: `matrix = [[1,2,3],[4,5,6],[7,8,9]]
n = len(matrix)
total = 0
for i in range(n):
    total += matrix[i][i] + matrix[i][n-1-i]
if n % 2 == 1:
    total -= matrix[n//2][n//2]
print(total)`,
            javascript: `let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let n = matrix.length, total = 0;
for (let i = 0; i < n; i++) {
    total += matrix[i][i] + matrix[i][n-1-i];
}
if (n % 2 === 1) total -= matrix[Math.floor(n/2)][Math.floor(n/2)];
console.log(total);`,
            java: `int n = matrix.length, total = 0;
for (int i = 0; i < n; i++) {
    total += matrix[i][i] + matrix[i][n-1-i];
}
if (n % 2 == 1) total -= matrix[n/2][n/2];
System.out.println(total);`
        },

        testCases: [
            { input: "[[1,2,3],[4,5,6],[7,8,9]]", expected: "25" }
        ]
    },

    {
        id: 30,
        title: "Find Missing Number",
        slug: "missing-number",
        difficulty: "medium",
        category: "Arrays",
        points: 55,
        solved: false,
        description: `# Where Did It Go? 🔍

An array contains n-1 numbers from 1 to n. One number is missing. Find it!`,

        task: `Given an array of n-1 distinct numbers in range 1 to n, find the missing one.`,

        examples: [
            { input: "[1, 2, 4, 5, 6]", output: "3", explanation: "3 is missing from 1-6" },
            { input: "[2, 3, 1, 5]", output: "4", explanation: "4 is missing from 1-5" }
        ],

        hints: [
            "💡 Use the sum formula: n*(n+1)/2",
            "💡 Subtract actual sum from expected sum"
        ],

        starterCode: {
            python: `arr = [1, 2, 4, 5, 6]

# Find missing number

`,
            javascript: `let arr = [1, 2, 4, 5, 6];

// Find missing number

`,
            java: `public class Solution {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        
        // Find missing
        
    }
}`
        },

        solution: {
            python: `arr = [1, 2, 4, 5, 6]
n = len(arr) + 1
expected = n * (n + 1) // 2
actual = sum(arr)
print(expected - actual)`,
            javascript: `let arr = [1, 2, 4, 5, 6];
let n = arr.length + 1;
let expected = n * (n + 1) / 2;
let actual = arr.reduce((a, b) => a + b, 0);
console.log(expected - actual);`,
            java: `int n = arr.length + 1;
int expected = n * (n + 1) / 2;
int actual = 0;
for (int x : arr) actual += x;
System.out.println(expected - actual);`
        },

        testCases: [
            { input: "[1, 2, 4, 5, 6]", expected: "3" }
        ]
    },

    // ============ FUNCTIONS EASY ============
    {
        id: 31,
        title: "Simple Greeting Function",
        slug: "greeting-function",
        difficulty: "easy",
        category: "Functions",
        points: 15,
        solved: false,
        description: `# Say Hello with Functions! 👋

Functions are reusable blocks of code. Let's create your first function!`,

        task: `Create a function called greet that takes a name and returns "Hello, {name}!"`,

        examples: [
            { input: "greet('Alice')", output: "Hello, Alice!", explanation: "Function returns greeting with the name" },
            { input: "greet('Bob')", output: "Hello, Bob!", explanation: "Works with any name" }
        ],

        hints: [
            "💡 Use def in Python, function in JavaScript",
            "💡 Return the greeting string, don't just print it"
        ],

        starterCode: {
            python: `def greet(name):
    # Return a greeting with the name
    pass

# Test
print(greet('Alice'))`,
            javascript: `function greet(name) {
    // Return a greeting with the name
    
}

// Test
console.log(greet('Alice'));`,
            java: `public class Solution {
    public static String greet(String name) {
        // Return greeting
        return "";
    }
}`
        },

        solution: {
            python: `def greet(name):
    return f"Hello, {name}!"

print(greet('Alice'))`,
            javascript: `function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet('Alice'));`,
            java: `public static String greet(String name) {
    return "Hello, " + name + "!";
}`
        },

        testCases: [
            { input: "greet('Alice')", expected: "Hello, Alice!" }
        ]
    },

    {
        id: 32,
        title: "Double the Number",
        slug: "double-function",
        difficulty: "easy",
        category: "Functions",
        points: 15,
        solved: false,
        description: `# Double It! ✖️2

Create a function that doubles any number given to it.`,

        task: `Write a function called double that takes a number and returns it multiplied by 2.`,

        examples: [
            { input: "double(5)", output: "10", explanation: "5 * 2 = 10" },
            { input: "double(7)", output: "14", explanation: "7 * 2 = 14" }
        ],

        hints: [
            "💡 Just multiply the input by 2",
            "💡 Return the result"
        ],

        starterCode: {
            python: `def double(n):
    # Return n doubled
    pass

print(double(5))`,
            javascript: `function double(n) {
    // Return n doubled
    
}

console.log(double(5));`,
            java: `public static int double(int n) {
    // Return doubled
    return 0;
}`
        },

        solution: {
            python: `def double(n):
    return n * 2

print(double(5))`,
            javascript: `function double(n) {
    return n * 2;
}

console.log(double(5));`,
            java: `return n * 2;`
        },

        testCases: [
            { input: "double(5)", expected: "10" }
        ]
    },

    {
        id: 33,
        title: "Check Even or Odd Function",
        slug: "is-even-function",
        difficulty: "easy",
        category: "Functions",
        points: 20,
        solved: false,
        description: `# Even or Odd? 🎲

Create a function to check if a number is even or odd.`,

        task: `Write a function isEven that returns true if the number is even, false otherwise.`,

        examples: [
            { input: "isEven(4)", output: "true", explanation: "4 is divisible by 2" },
            { input: "isEven(7)", output: "false", explanation: "7 is not divisible by 2" }
        ],

        hints: [
            "💡 Use modulo operator %",
            "💡 n % 2 == 0 means even"
        ],

        starterCode: {
            python: `def is_even(n):
    # Return True if even
    pass

print(is_even(4))`,
            javascript: `function isEven(n) {
    // Return true if even
    
}

console.log(isEven(4));`,
            java: `public static boolean isEven(int n) {
    return false;
}`
        },

        solution: {
            python: `def is_even(n):
    return n % 2 == 0

print(is_even(4))`,
            javascript: `function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4));`,
            java: `return n % 2 == 0;`
        },

        testCases: [
            { input: "isEven(4)", expected: "true" }
        ]
    },

    {
        id: 34,
        title: "Find Maximum of Two",
        slug: "max-two-function",
        difficulty: "easy",
        category: "Functions",
        points: 20,
        solved: false,
        description: `# Which is Bigger? 📏

Create a function to find the maximum of two numbers.`,

        task: `Write a function findMax that takes two numbers and returns the larger one.`,

        examples: [
            { input: "findMax(5, 9)", output: "9", explanation: "9 is larger than 5" },
            { input: "findMax(12, 3)", output: "12", explanation: "12 is larger" }
        ],

        hints: [
            "💡 Compare using > operator",
            "💡 Use if-else or ternary operator"
        ],

        starterCode: {
            python: `def find_max(a, b):
    # Return the larger number
    pass

print(find_max(5, 9))`,
            javascript: `function findMax(a, b) {
    // Return the larger number
    
}

console.log(findMax(5, 9));`,
            java: `public static int findMax(int a, int b) {
    return 0;
}`
        },

        solution: {
            python: `def find_max(a, b):
    return a if a > b else b

print(find_max(5, 9))`,
            javascript: `function findMax(a, b) {
    return a > b ? a : b;
}

console.log(findMax(5, 9));`,
            java: `return a > b ? a : b;`
        },

        testCases: [
            { input: "findMax(5, 9)", expected: "9" }
        ]
    },

    {
        id: 35,
        title: "Calculate Square",
        slug: "square-function",
        difficulty: "easy",
        category: "Functions",
        points: 15,
        solved: false,
        description: `# Square It! ⬛

Create a function to calculate the square of a number.`,

        task: `Write a function square that returns the square of a given number.`,

        examples: [
            { input: "square(4)", output: "16", explanation: "4 * 4 = 16" },
            { input: "square(7)", output: "49", explanation: "7 * 7 = 49" }
        ],

        hints: [
            "💡 Multiply the number by itself",
            "💡 Or use power operator **"
        ],

        starterCode: {
            python: `def square(n):
    # Return n squared
    pass

print(square(4))`,
            javascript: `function square(n) {
    // Return n squared
    
}

console.log(square(4));`,
            java: `public static int square(int n) {
    return 0;
}`
        },

        solution: {
            python: `def square(n):
    return n * n

print(square(4))`,
            javascript: `function square(n) {
    return n * n;
}

console.log(square(4));`,
            java: `return n * n;`
        },

        testCases: [
            { input: "square(4)", expected: "16" }
        ]
    },

    // ============ FUNCTIONS MEDIUM ============
    {
        id: 36,
        title: "Factorial Function",
        slug: "factorial-function",
        difficulty: "medium",
        category: "Functions",
        points: 45,
        solved: false,
        description: `# Calculate Factorial! 🔢

Factorial of n is: n! = n × (n-1) × (n-2) × ... × 1`,

        task: `Write a function factorial that calculates n! (n factorial).`,

        constraints: `- 0 ≤ n ≤ 12
- factorial(0) = 1`,

        examples: [
            { input: "factorial(5)", output: "120", explanation: "5! = 5×4×3×2×1 = 120" },
            { input: "factorial(0)", output: "1", explanation: "0! = 1 by definition" }
        ],

        hints: [
            "💡 Use a loop to multiply numbers",
            "💡 Or use recursion: n! = n × (n-1)!"
        ],

        starterCode: {
            python: `def factorial(n):
    # Calculate factorial
    pass

print(factorial(5))`,
            javascript: `function factorial(n) {
    // Calculate factorial
    
}

console.log(factorial(5));`,
            java: `public static int factorial(int n) {
    return 0;
}`
        },

        solution: {
            python: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`,
            javascript: `function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));`,
            java: `if (n <= 1) return 1;
return n * factorial(n - 1);`
        },

        testCases: [
            { input: "factorial(5)", expected: "120" }
        ]
    },

    {
        id: 37,
        title: "Check Prime Number",
        slug: "is-prime-function",
        difficulty: "medium",
        category: "Functions",
        points: 50,
        solved: false,
        description: `# Is It Prime? 🔢

A prime number is only divisible by 1 and itself.`,

        task: `Write a function isPrime that returns true if n is prime.`,

        constraints: `- n ≥ 2`,

        examples: [
            { input: "isPrime(7)", output: "true", explanation: "7 is only divisible by 1 and 7" },
            { input: "isPrime(12)", output: "false", explanation: "12 is divisible by 2, 3, 4, 6" }
        ],

        hints: [
            "💡 Check divisibility from 2 to √n",
            "💡 If any number divides evenly, it's not prime"
        ],

        starterCode: {
            python: `def is_prime(n):
    # Return True if prime
    pass

print(is_prime(7))`,
            javascript: `function isPrime(n) {
    // Return true if prime
    
}

console.log(isPrime(7));`,
            java: `public static boolean isPrime(int n) {
    return false;
}`
        },

        solution: {
            python: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(7))`,
            javascript: `function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));`,
            java: `if (n < 2) return false;
for (int i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
}
return true;`
        },

        testCases: [
            { input: "isPrime(7)", expected: "true" }
        ]
    },

    {
        id: 38,
        title: "Sum of Digits Function",
        slug: "sum-digits-function",
        difficulty: "medium",
        category: "Functions",
        points: 40,
        solved: false,
        description: `# Add Those Digits! ➕

Calculate the sum of all digits in a number.`,

        task: `Write a function sumDigits that returns the sum of digits.`,

        examples: [
            { input: "sumDigits(123)", output: "6", explanation: "1 + 2 + 3 = 6" },
            { input: "sumDigits(9876)", output: "30", explanation: "9 + 8 + 7 + 6 = 30" }
        ],

        hints: [
            "💡 Use modulo to get last digit",
            "💡 Use integer division to remove last digit"
        ],

        starterCode: {
            python: `def sum_digits(n):
    # Return sum of digits
    pass

print(sum_digits(123))`,
            javascript: `function sumDigits(n) {
    // Return sum of digits
    
}

console.log(sumDigits(123));`,
            java: `public static int sumDigits(int n) {
    return 0;
}`
        },

        solution: {
            python: `def sum_digits(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

print(sum_digits(123))`,
            javascript: `function sumDigits(n) {
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}

console.log(sumDigits(123));`,
            java: `int total = 0;
while (n > 0) {
    total += n % 10;
    n /= 10;
}
return total;`
        },

        testCases: [
            { input: "sumDigits(123)", expected: "6" }
        ]
    },

    {
        id: 39,
        title: "Power Function",
        slug: "power-function",
        difficulty: "medium",
        category: "Functions",
        points: 45,
        solved: false,
        description: `# Calculate Powers! 💪

Calculate base raised to the power of exponent.`,

        task: `Write a function power(base, exp) that calculates base^exp.`,

        constraints: `- exp ≥ 0`,

        examples: [
            { input: "power(2, 3)", output: "8", explanation: "2³ = 2×2×2 = 8" },
            { input: "power(5, 0)", output: "1", explanation: "Any number^0 = 1" }
        ],

        hints: [
            "💡 Multiply base by itself exp times",
            "💡 Remember x^0 = 1"
        ],

        starterCode: {
            python: `def power(base, exp):
    # Calculate base^exp
    pass

print(power(2, 3))`,
            javascript: `function power(base, exp) {
    // Calculate base^exp
    
}

console.log(power(2, 3));`,
            java: `public static int power(int base, int exp) {
    return 0;
}`
        },

        solution: {
            python: `def power(base, exp):
    result = 1
    for _ in range(exp):
        result *= base
    return result

print(power(2, 3))`,
            javascript: `function power(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3));`,
            java: `int result = 1;
for (int i = 0; i < exp; i++) {
    result *= base;
}
return result;`
        },

        testCases: [
            { input: "power(2, 3)", expected: "8" }
        ]
    },

    {
        id: 40,
        title: "GCD Function",
        slug: "gcd-function",
        difficulty: "medium",
        category: "Functions",
        points: 50,
        solved: false,
        description: `# Greatest Common Divisor! 📊

Find the largest number that divides both numbers.`,

        task: `Write a function gcd(a, b) that returns the greatest common divisor.`,

        examples: [
            { input: "gcd(12, 18)", output: "6", explanation: "6 is largest divisor of both" },
            { input: "gcd(17, 13)", output: "1", explanation: "17 and 13 are coprime" }
        ],

        hints: [
            "💡 Use Euclidean algorithm",
            "💡 gcd(a, b) = gcd(b, a % b)"
        ],

        starterCode: {
            python: `def gcd(a, b):
    # Find GCD
    pass

print(gcd(12, 18))`,
            javascript: `function gcd(a, b) {
    // Find GCD
    
}

console.log(gcd(12, 18));`,
            java: `public static int gcd(int a, int b) {
    return 0;
}`
        },

        solution: {
            python: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

print(gcd(12, 18))`,
            javascript: `function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

console.log(gcd(12, 18));`,
            java: `while (b != 0) {
    int temp = b;
    b = a % b;
    a = temp;
}
return a;`
        },

        testCases: [
            { input: "gcd(12, 18)", expected: "6" }
        ]
    },

    // ============ FUNCTIONS HARD ============
    {
        id: 41,
        title: "Memoized Fibonacci",
        slug: "memo-fibonacci",
        difficulty: "hard",
        category: "Functions",
        points: 80,
        solved: false,
        description: `# Efficient Fibonacci! ⚡

Use memoization to calculate Fibonacci efficiently.`,

        task: `Write a memoized fibonacci function that's O(n) time complexity.`,

        constraints: `- 0 ≤ n ≤ 40`,

        examples: [
            { input: "fib(10)", output: "55", explanation: "10th Fibonacci number" },
            { input: "fib(40)", output: "102334155", explanation: "Should be fast with memo" }
        ],

        hints: [
            "💡 Store computed values in a dictionary/object",
            "💡 Check cache before computing"
        ],

        starterCode: {
            python: `def fib(n, memo={}):
    # Memoized fibonacci
    pass

print(fib(40))`,
            javascript: `const memo = {};
function fib(n) {
    // Memoized fibonacci
    
}

console.log(fib(40));`,
            java: `private static Map<Integer, Long> memo = new HashMap<>();
public static long fib(int n) {
    return 0;
}`
        },

        solution: {
            python: `def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]

print(fib(40))`,
            javascript: `const memo = {};
function fib(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
}

console.log(fib(40));`,
            java: `if (memo.containsKey(n)) return memo.get(n);
if (n <= 1) return n;
long result = fib(n-1) + fib(n-2);
memo.put(n, result);
return result;`
        },

        testCases: [
            { input: "fib(40)", expected: "102334155" }
        ]
    },

    {
        id: 42,
        title: "Currying Function",
        slug: "curry-function",
        difficulty: "hard",
        category: "Functions",
        points: 85,
        solved: false,
        description: `# Function Currying! 🍛

Transform a function with multiple arguments into nested functions.`,

        task: `Create a function add that can be called as add(1)(2)(3) to return 6.`,

        examples: [
            { input: "add(1)(2)(3)", output: "6", explanation: "1 + 2 + 3 = 6" },
            { input: "add(5)(10)(15)", output: "30", explanation: "Chained addition" }
        ],

        hints: [
            "💡 Return a function that returns a function",
            "💡 Each inner function captures the previous value"
        ],

        starterCode: {
            python: `def add(a):
    # Return curried function
    pass

print(add(1)(2)(3))`,
            javascript: `function add(a) {
    // Return curried function
    
}

console.log(add(1)(2)(3));`,
            java: `// Java doesn't support currying directly
// Use inner classes or lambdas`
        },

        solution: {
            python: `def add(a):
    def inner1(b):
        def inner2(c):
            return a + b + c
        return inner2
    return inner1

print(add(1)(2)(3))`,
            javascript: `function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3));`,
            java: `// Using lambdas
Function<Integer, Function<Integer, Function<Integer, Integer>>> add = 
    a -> b -> c -> a + b + c;`
        },

        testCases: [
            { input: "add(1)(2)(3)", expected: "6" }
        ]
    },

    {
        id: 43,
        title: "Function Composition",
        slug: "compose-function",
        difficulty: "hard",
        category: "Functions",
        points: 90,
        solved: false,
        description: `# Compose Functions! 🔗

Create a compose function that combines multiple functions.`,

        task: `Write compose that takes functions f, g and returns f(g(x)).`,

        examples: [
            { input: "compose(double, addOne)(5)", output: "12", explanation: "double(addOne(5)) = double(6) = 12" }
        ],

        hints: [
            "💡 compose(f, g) returns a new function",
            "💡 The new function applies g first, then f"
        ],

        starterCode: {
            python: `def compose(f, g):
    # Return composed function
    pass

def double(x): return x * 2
def add_one(x): return x + 1

print(compose(double, add_one)(5))`,
            javascript: `function compose(f, g) {
    // Return composed function
    
}

const double = x => x * 2;
const addOne = x => x + 1;

console.log(compose(double, addOne)(5));`,
            java: `public static Function<Integer, Integer> compose(
    Function<Integer, Integer> f, 
    Function<Integer, Integer> g) {
    return null;
}`
        },

        solution: {
            python: `def compose(f, g):
    return lambda x: f(g(x))

def double(x): return x * 2
def add_one(x): return x + 1

print(compose(double, add_one)(5))`,
            javascript: `function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const double = x => x * 2;
const addOne = x => x + 1;

console.log(compose(double, addOne)(5));`,
            java: `return x -> f.apply(g.apply(x));`
        },

        testCases: [
            { input: "compose(double, add_one)(5)", expected: "12" }
        ]
    },

    {
        id: 44,
        title: "Higher-Order Filter",
        slug: "ho-filter-function",
        difficulty: "hard",
        category: "Functions",
        points: 80,
        solved: false,
        description: `# Build Your Own Filter! 🔍

Implement your own filter function using callbacks.`,

        task: `Write myFilter(arr, predicate) that filters elements.`,

        examples: [
            { input: "myFilter([1,2,3,4], isEven)", output: "[2, 4]", explanation: "Only even numbers pass" }
        ],

        hints: [
            "💡 Loop through array",
            "💡 Call predicate function on each element"
        ],

        starterCode: {
            python: `def my_filter(arr, predicate):
    # Implement filter
    pass

is_even = lambda x: x % 2 == 0
print(my_filter([1,2,3,4], is_even))`,
            javascript: `function myFilter(arr, predicate) {
    // Implement filter
    
}

const isEven = x => x % 2 === 0;
console.log(myFilter([1,2,3,4], isEven));`,
            java: `public static List<Integer> myFilter(int[] arr, Predicate<Integer> pred) {
    return null;
}`
        },

        solution: {
            python: `def my_filter(arr, predicate):
    result = []
    for item in arr:
        if predicate(item):
            result.append(item)
    return result

is_even = lambda x: x % 2 == 0
print(my_filter([1,2,3,4], is_even))`,
            javascript: `function myFilter(arr, predicate) {
    const result = [];
    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const isEven = x => x % 2 === 0;
console.log(myFilter([1,2,3,4], isEven));`,
            java: `List<Integer> result = new ArrayList<>();
for (int x : arr) {
    if (pred.test(x)) result.add(x);
}
return result;`
        },

        testCases: [
            { input: "myFilter([1,2,3,4], isEven)", expected: "[2, 4]" }
        ]
    },

    {
        id: 45,
        title: "Recursive Deep Flatten",
        slug: "deep-flatten",
        difficulty: "hard",
        category: "Functions",
        points: 95,
        solved: false,
        description: `# Flatten Nested Arrays! 📦

Recursively flatten deeply nested arrays.`,

        task: `Write flatten that flattens arrays of any depth.`,

        examples: [
            { input: "flatten([1, [2, [3, [4]]]])", output: "[1, 2, 3, 4]", explanation: "All nested arrays flattened" }
        ],

        hints: [
            "💡 Check if element is an array",
            "💡 Recursively flatten nested arrays"
        ],

        starterCode: {
            python: `def flatten(arr):
    # Recursive flatten
    pass

print(flatten([1, [2, [3, [4]]]]))`,
            javascript: `function flatten(arr) {
    // Recursive flatten
    
}

console.log(flatten([1, [2, [3, [4]]]]));`,
            java: `public static List<Integer> flatten(Object[] arr) {
    return null;
}`
        },

        solution: {
            python: `def flatten(arr):
    result = []
    for item in arr:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

print(flatten([1, [2, [3, [4]]]]))`,
            javascript: `function flatten(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten([1, [2, [3, [4]]]]));`,
            java: `List<Integer> result = new ArrayList<>();
for (Object item : arr) {
    if (item instanceof Object[]) {
        result.addAll(flatten((Object[]) item));
    } else {
        result.add((Integer) item);
    }
}
return result;`
        },

        testCases: [
            { input: "flatten([1, [2, [3, [4]]]])", expected: "[1, 2, 3, 4]" }
        ]
    }
];

// ============ LANGUAGE-SPECIFIC PROBLEMS ============
// These problems are shown only for specific languages

export const languageSpecificProblems = [
    // ============ PYTHON SPECIFIC PROBLEMS ============
    {
        id: 'py-1',
        title: "List Comprehension Basics",
        language: 'python',
        difficulty: "easy",
        category: "Python Basics",
        points: 15,
        description: `# List Comprehensions in Python 🐍

List comprehensions provide a concise way to create lists in Python.

Instead of writing a loop, you can create a list in one line!`,
        task: `Create a list of squares from 1 to 10 using list comprehension.`,
        examples: [{ input: "None", output: "[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]", explanation: "Square of each number from 1-10" }],
        hints: ["💡 Use [x**2 for x in range(1, 11)]", "💡 range(1, 11) gives 1 to 10"],
        starterCode: { python: `# Create a list of squares using list comprehension\nsquares = # Your code here\nprint(squares)` },
        solution: { python: `squares = [x**2 for x in range(1, 11)]\nprint(squares)` },
        testCases: [{ input: "", expected: "[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]" }]
    },
    {
        id: 'py-2',
        title: "Dictionary Manipulation",
        language: 'python',
        difficulty: "easy",
        category: "Python Basics",
        points: 20,
        description: `# Python Dictionaries 📚

Dictionaries store key-value pairs. They are incredibly useful for organizing data.`,
        task: `Create a dictionary with student names as keys and their scores as values. Print the score of 'Alice'.`,
        examples: [{ input: "{'Alice': 95, 'Bob': 87}", output: "95", explanation: "Alice's score is 95" }],
        hints: ["💡 Use curly braces {} to create a dictionary", "💡 Access values using dict['key']"],
        starterCode: { python: `# Create a dictionary of students and scores\nstudents = # Your code here\nprint(students['Alice'])` },
        solution: { python: `students = {'Alice': 95, 'Bob': 87, 'Charlie': 92}\nprint(students['Alice'])` },
        testCases: [{ input: "", expected: "95" }]
    },
    {
        id: 'py-3',
        title: "Lambda Functions",
        language: 'python',
        difficulty: "medium",
        category: "Functions",
        points: 35,
        description: `# Lambda Functions in Python ⚡

Lambda functions are small anonymous functions defined with the lambda keyword.`,
        task: `Use a lambda function with map() to double all numbers in a list.`,
        examples: [{ input: "[1, 2, 3, 4]", output: "[2, 4, 6, 8]", explanation: "Each number doubled" }],
        hints: ["💡 Use lambda x: x * 2", "💡 Combine with map() and list()"],
        starterCode: { python: `numbers = [1, 2, 3, 4, 5]\n# Use lambda with map to double\ndoubled = # Your code here\nprint(list(doubled))` },
        solution: { python: `numbers = [1, 2, 3, 4, 5]\ndoubled = map(lambda x: x * 2, numbers)\nprint(list(doubled))` },
        testCases: [{ input: "", expected: "[2, 4, 6, 8, 10]" }]
    },
    {
        id: 'py-4',
        title: "File Handling",
        language: 'python',
        difficulty: "medium",
        category: "File I/O",
        points: 40,
        description: `# Reading and Writing Files 📄

Python makes it easy to work with files using the open() function and context managers.`,
        task: `Write code to read a file line by line and count the total lines.`,
        examples: [{ input: "file with 5 lines", output: "5", explanation: "Count of lines in file" }],
        hints: ["💡 Use with open('file.txt', 'r') as f:", "💡 Use len(f.readlines()) or loop"],
        starterCode: { python: `# Count lines in a file\ndef count_lines(filename):\n    # Your code here\n    pass` },
        solution: { python: `def count_lines(filename):\n    with open(filename, 'r') as f:\n        return len(f.readlines())` },
        testCases: [{ input: "test.txt", expected: "Lines counted" }]
    },
    {
        id: 'py-5',
        title: "Decorators",
        language: 'python',
        difficulty: "hard",
        category: "Advanced Python",
        points: 60,
        description: `# Python Decorators 🎨

Decorators modify the behavior of functions without changing their code.`,
        task: `Create a decorator that measures the execution time of a function.`,
        examples: [{ input: "Any function", output: "Execution time printed", explanation: "Decorator adds timing" }],
        hints: ["💡 Use time.time() before and after", "💡 Define a wrapper function inside"],
        starterCode: { python: `import time\n\ndef timer_decorator(func):\n    # Your code here\n    pass\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)` },
        solution: { python: `import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end-start:.2f} seconds")\n        return result\n    return wrapper` },
        testCases: [{ input: "", expected: "Time printed" }]
    },

    // ============ JAVA SPECIFIC PROBLEMS ============
    {
        id: 'java-1',
        title: "Java Arrays",
        language: 'java',
        difficulty: "easy",
        category: "Java Basics",
        points: 15,
        description: `# Java Arrays ☕

Arrays in Java are fixed-size containers that hold elements of the same type.`,
        task: `Create an integer array with values 1-5 and print the sum.`,
        examples: [{ input: "[1,2,3,4,5]", output: "15", explanation: "1+2+3+4+5=15" }],
        hints: ["💡 Use int[] arr = {1, 2, 3, 4, 5};", "💡 Loop through with for-each"],
        starterCode: { java: `public class Solution {\n    public static void main(String[] args) {\n        // Create array and sum\n    }\n}` },
        solution: { java: `int[] arr = {1, 2, 3, 4, 5};\nint sum = 0;\nfor (int n : arr) sum += n;\nSystem.out.println(sum);` },
        testCases: [{ input: "", expected: "15" }]
    },
    {
        id: 'java-2',
        title: "Java ArrayList",
        language: 'java',
        difficulty: "easy",
        category: "Collections",
        points: 20,
        description: `# Java ArrayList 📋

ArrayList is a resizable array implementation in Java.`,
        task: `Create an ArrayList, add 5 numbers, and find the maximum.`,
        examples: [{ input: "[10, 25, 8, 17, 32]", output: "32", explanation: "Maximum is 32" }],
        hints: ["💡 Use ArrayList<Integer>", "💡 Use Collections.max()"],
        starterCode: { java: `import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Create ArrayList and find max\n    }\n}` },
        solution: { java: `ArrayList<Integer> list = new ArrayList<>();\nlist.add(10); list.add(25); list.add(8);\nlist.add(17); list.add(32);\nSystem.out.println(Collections.max(list));` },
        testCases: [{ input: "", expected: "32" }]
    },
    {
        id: 'java-3',
        title: "Java HashMap",
        language: 'java',
        difficulty: "medium",
        category: "Collections",
        points: 35,
        description: `# Java HashMap 🗺️

HashMap stores key-value pairs with O(1) average access time.`,
        task: `Create a HashMap to count word frequencies in a sentence.`,
        examples: [{ input: "hello world hello", output: "{hello=2, world=1}", explanation: "Word counts" }],
        hints: ["💡 Use HashMap<String, Integer>", "💡 Use getOrDefault()"],
        starterCode: { java: `import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        String sentence = "hello world hello";\n        // Count word frequencies\n    }\n}` },
        solution: { java: `HashMap<String, Integer> freq = new HashMap<>();\nfor (String word : sentence.split(" ")) {\n    freq.put(word, freq.getOrDefault(word, 0) + 1);\n}\nSystem.out.println(freq);` },
        testCases: [{ input: "", expected: "{hello=2, world=1}" }]
    },
    {
        id: 'java-4',
        title: "Java Streams",
        language: 'java',
        difficulty: "medium",
        category: "Streams API",
        points: 45,
        description: `# Java Streams API 🌊

Streams provide a functional approach to processing collections.`,
        task: `Use streams to filter even numbers and find their sum.`,
        examples: [{ input: "[1,2,3,4,5,6]", output: "12", explanation: "2+4+6=12" }],
        hints: ["💡 Use filter() with n -> n % 2 == 0", "💡 Use mapToInt() and sum()"],
        starterCode: { java: `import java.util.*;\nimport java.util.stream.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1,2,3,4,5,6);\n        // Use streams\n    }\n}` },
        solution: { java: `int sum = nums.stream()\n    .filter(n -> n % 2 == 0)\n    .mapToInt(Integer::intValue)\n    .sum();\nSystem.out.println(sum);` },
        testCases: [{ input: "", expected: "12" }]
    },
    {
        id: 'java-5',
        title: "Java Multithreading",
        language: 'java',
        difficulty: "hard",
        category: "Concurrency",
        points: 70,
        description: `# Java Multithreading 🧵

Threads allow concurrent execution of code in Java.`,
        task: `Create two threads that print numbers 1-5 with their thread names.`,
        examples: [{ input: "None", output: "Thread-0: 1...Thread-1: 1...", explanation: "Interleaved output" }],
        hints: ["💡 Extend Thread or implement Runnable", "💡 Use Thread.currentThread().getName()"],
        starterCode: { java: `public class Solution {\n    public static void main(String[] args) {\n        // Create and start two threads\n    }\n}` },
        solution: { java: `Runnable task = () -> {\n    for (int i = 1; i <= 5; i++) {\n        System.out.println(Thread.currentThread().getName() + ": " + i);\n    }\n};\nnew Thread(task).start();\nnew Thread(task).start();` },
        testCases: [{ input: "", expected: "Numbers printed" }]
    },

    // ============ JAVASCRIPT SPECIFIC PROBLEMS ============
    {
        id: 'js-1',
        title: "Arrow Functions",
        language: 'javascript',
        difficulty: "easy",
        category: "ES6 Basics",
        points: 15,
        description: `# ES6 Arrow Functions 🎯

Arrow functions provide a shorter syntax for writing functions.`,
        task: `Convert a regular function to an arrow function that squares a number.`,
        examples: [{ input: "5", output: "25", explanation: "5 squared is 25" }],
        hints: ["💡 Use const func = (x) => x * x", "💡 Single expression doesn't need return"],
        starterCode: { javascript: `// Convert to arrow function\nconst square = // Your code here\n\nconsole.log(square(5));` },
        solution: { javascript: `const square = x => x * x;\nconsole.log(square(5));` },
        testCases: [{ input: "", expected: "25" }]
    },
    {
        id: 'js-2',
        title: "Destructuring",
        language: 'javascript',
        difficulty: "easy",
        category: "ES6 Basics",
        points: 20,
        description: `# Object Destructuring 📦

Destructuring makes it easy to extract values from objects and arrays.`,
        task: `Use destructuring to extract name and age from an object.`,
        examples: [{ input: "{name: 'John', age: 25}", output: "John, 25", explanation: "Extracted values" }],
        hints: ["💡 Use const { name, age } = person", "💡 Variable names match keys"],
        starterCode: { javascript: `const person = { name: 'John', age: 25, city: 'NYC' };\n// Destructure name and age\n\nconsole.log(name, age);` },
        solution: { javascript: `const person = { name: 'John', age: 25, city: 'NYC' };\nconst { name, age } = person;\nconsole.log(name, age);` },
        testCases: [{ input: "", expected: "John 25" }]
    },
    {
        id: 'js-3',
        title: "Promises",
        language: 'javascript',
        difficulty: "medium",
        category: "Async JavaScript",
        points: 40,
        description: `# JavaScript Promises 🤝

Promises represent the eventual completion of an asynchronous operation.`,
        task: `Create a promise that resolves after 2 seconds with a message.`,
        examples: [{ input: "None", output: "Promise resolved!", explanation: "After 2 seconds" }],
        hints: ["💡 Use new Promise((resolve, reject) => ...)", "💡 Use setTimeout inside"],
        starterCode: { javascript: `// Create a promise that resolves after 2 seconds\nconst delayedPromise = // Your code here\n\ndelayedPromise.then(msg => console.log(msg));` },
        solution: { javascript: `const delayedPromise = new Promise(resolve => {\n    setTimeout(() => resolve('Promise resolved!'), 2000);\n});\n\ndelayedPromise.then(msg => console.log(msg));` },
        testCases: [{ input: "", expected: "Promise resolved!" }]
    },
    {
        id: 'js-4',
        title: "Async/Await",
        language: 'javascript',
        difficulty: "medium",
        category: "Async JavaScript",
        points: 45,
        description: `# Async/Await ⏳

Async/await makes asynchronous code look and behave like synchronous code.`,
        task: `Fetch data from an API using async/await.`,
        examples: [{ input: "API URL", output: "Data logged", explanation: "Fetched data" }],
        hints: ["💡 Use async function", "💡 Use await fetch(url)"],
        starterCode: { javascript: `// Fetch data using async/await\nasync function fetchData(url) {\n    // Your code here\n}\n\nfetchData('https://api.example.com/data');` },
        solution: { javascript: `async function fetchData(url) {\n    try {\n        const response = await fetch(url);\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error('Error:', error);\n    }\n}` },
        testCases: [{ input: "", expected: "Data fetched" }]
    },
    {
        id: 'js-5',
        title: "Closure Functions",
        language: 'javascript',
        difficulty: "hard",
        category: "Advanced JS",
        points: 60,
        description: `# JavaScript Closures 🔒

Closures allow inner functions to access outer function variables.`,
        task: `Create a counter function using closures.`,
        examples: [{ input: "counter()", output: "1, 2, 3...", explanation: "Increments each call" }],
        hints: ["💡 Return a function from another function", "💡 Inner function remembers outer state"],
        starterCode: { javascript: `// Create a counter using closure\nfunction createCounter() {\n    // Your code here\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2` },
        solution: { javascript: `function createCounter() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());` },
        testCases: [{ input: "", expected: "1, 2" }]
    },

    // ============ C++ SPECIFIC PROBLEMS ============
    {
        id: 'cpp-1',
        title: "C++ Pointers",
        language: 'cpp',
        difficulty: "easy",
        category: "C++ Basics",
        points: 20,
        description: `# Pointers in C++ 🎯

Pointers store memory addresses of variables.`,
        task: `Create a pointer to an integer and modify the value through the pointer.`,
        examples: [{ input: "x = 5", output: "10", explanation: "Value doubled via pointer" }],
        hints: ["💡 Use int* ptr = &x;", "💡 Modify using *ptr = value;"],
        starterCode: { cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    // Create pointer and double the value\n    return 0;\n}` },
        solution: { cpp: `int x = 5;\nint* ptr = &x;\n*ptr = *ptr * 2;\ncout << x << endl;` },
        testCases: [{ input: "", expected: "10" }]
    },
    {
        id: 'cpp-2',
        title: "C++ Vectors",
        language: 'cpp',
        difficulty: "easy",
        category: "STL",
        points: 25,
        description: `# C++ Vectors 📊

Vectors are dynamic arrays in C++ from the STL.`,
        task: `Create a vector, add 5 numbers, and find the sum using accumulate.`,
        examples: [{ input: "[1,2,3,4,5]", output: "15", explanation: "Sum of elements" }],
        hints: ["💡 Use vector<int> v;", "💡 Use accumulate from <numeric>"],
        starterCode: { cpp: `#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    // Create vector and find sum\n    return 0;\n}` },
        solution: { cpp: `vector<int> v = {1, 2, 3, 4, 5};\nint sum = accumulate(v.begin(), v.end(), 0);\ncout << sum << endl;` },
        testCases: [{ input: "", expected: "15" }]
    },
    {
        id: 'cpp-3',
        title: "C++ Classes",
        language: 'cpp',
        difficulty: "medium",
        category: "OOP",
        points: 40,
        description: `# Object-Oriented C++ 🏗️

Classes are blueprints for creating objects with properties and methods.`,
        task: `Create a Rectangle class with width, height, and an area() method.`,
        examples: [{ input: "5, 3", output: "15", explanation: "5 * 3 = 15" }],
        hints: ["💡 Use class keyword", "💡 Create constructor and method"],
        starterCode: { cpp: `#include <iostream>\nusing namespace std;\n\nclass Rectangle {\n    // Your code here\n};\n\nint main() {\n    Rectangle r(5, 3);\n    cout << r.area() << endl;\n    return 0;\n}` },
        solution: { cpp: `class Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n    int area() { return width * height; }\n};` },
        testCases: [{ input: "", expected: "15" }]
    },
    {
        id: 'cpp-4',
        title: "Smart Pointers",
        language: 'cpp',
        difficulty: "hard",
        category: "Modern C++",
        points: 60,
        description: `# Smart Pointers in C++11+ 🧠

Smart pointers automatically manage memory to prevent leaks.`,
        task: `Use unique_ptr to manage a dynamically allocated array.`,
        examples: [{ input: "Size 5", output: "Array managed", explanation: "Memory auto-freed" }],
        hints: ["💡 Use std::unique_ptr<int[]>", "💡 Use make_unique in C++14+"],
        starterCode: { cpp: `#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    // Create unique_ptr for array\n    return 0;\n}` },
        solution: { cpp: `auto arr = make_unique<int[]>(5);\nfor (int i = 0; i < 5; i++) arr[i] = i + 1;\nfor (int i = 0; i < 5; i++) cout << arr[i] << " ";` },
        testCases: [{ input: "", expected: "1 2 3 4 5" }]
    },

    // ============ C SPECIFIC PROBLEMS ============
    {
        id: 'c-1',
        title: "C Pointers Basics",
        language: 'c',
        difficulty: "easy",
        category: "C Basics",
        points: 20,
        description: `# C Pointers 🎯

Pointers are fundamental to C programming.`,
        task: `Swap two numbers using pointers.`,
        examples: [{ input: "a=5, b=10", output: "a=10, b=5", explanation: "Values swapped" }],
        hints: ["💡 Pass addresses with &", "💡 Swap using temp variable"],
        starterCode: { c: `#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    // Your code here\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf("%d %d", x, y);\n    return 0;\n}` },
        solution: { c: `void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}` },
        testCases: [{ input: "", expected: "10 5" }]
    },
    {
        id: 'c-2',
        title: "C Strings",
        language: 'c',
        difficulty: "medium",
        category: "Strings",
        points: 35,
        description: `# C Strings 📝

Strings in C are arrays of characters terminated by null.`,
        task: `Write a function to find the length of a string without strlen.`,
        examples: [{ input: "hello", output: "5", explanation: "5 characters" }],
        hints: ["💡 Loop until you find '\\0'", "💡 Count each character"],
        starterCode: { c: `#include <stdio.h>\n\nint myStrlen(char *str) {\n    // Your code here\n}\n\nint main() {\n    printf("%d", myStrlen("hello"));\n    return 0;\n}` },
        solution: { c: `int myStrlen(char *str) {\n    int len = 0;\n    while (str[len] != '\\0') len++;\n    return len;\n}` },
        testCases: [{ input: "", expected: "5" }]
    },
    {
        id: 'c-3',
        title: "Dynamic Memory",
        language: 'c',
        difficulty: "hard",
        category: "Memory Management",
        points: 55,
        description: `# Dynamic Memory in C 💾

malloc and free are used for dynamic memory allocation.`,
        task: `Dynamically allocate an array, fill it, and free the memory.`,
        examples: [{ input: "Size 5", output: "[1,2,3,4,5]", explanation: "Dynamic array" }],
        hints: ["💡 Use malloc(n * sizeof(int))", "💡 Always free() when done"],
        starterCode: { c: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    // Allocate, fill, print, and free\n    return 0;\n}` },
        solution: { c: `int *arr = (int*)malloc(n * sizeof(int));\nfor (int i = 0; i < n; i++) arr[i] = i + 1;\nfor (int i = 0; i < n; i++) printf("%d ", arr[i]);\nfree(arr);` },
        testCases: [{ input: "", expected: "1 2 3 4 5" }]
    },

    // ============ RUBY SPECIFIC PROBLEMS ============
    {
        id: 'ruby-1',
        title: "Ruby Blocks",
        language: 'ruby',
        difficulty: "easy",
        category: "Ruby Basics",
        points: 20,
        description: `# Ruby Blocks 💎

Blocks are chunks of code enclosed between do-end or curly braces.`,
        task: `Use a block with each to print numbers 1-5 squared.`,
        examples: [{ input: "[1,2,3,4,5]", output: "1, 4, 9, 16, 25", explanation: "Squares" }],
        hints: ["💡 Use .each { |n| puts n**2 }", "💡 Or use .each do |n| ... end"],
        starterCode: { ruby: `# Print squares using block\n(1..5).each do |n|\n  # Your code here\nend` },
        solution: { ruby: `(1..5).each { |n| puts n**2 }` },
        testCases: [{ input: "", expected: "1 4 9 16 25" }]
    },
    {
        id: 'ruby-2',
        title: "Ruby Symbols",
        language: 'ruby',
        difficulty: "medium",
        category: "Ruby Basics",
        points: 30,
        description: `# Ruby Symbols 🔣

Symbols are immutable, reusable identifiers used as hash keys.`,
        task: `Create a hash using symbols as keys and access a value.`,
        examples: [{ input: "{:name => 'Ruby'}", output: "Ruby", explanation: "Value accessed" }],
        hints: ["💡 Use :symbol_name", "💡 Hash syntax: { key: value }"],
        starterCode: { ruby: `# Create hash with symbols\nperson = # Your code here\nputs person[:name]` },
        solution: { ruby: `person = { name: 'Ruby', age: 30 }\nputs person[:name]` },
        testCases: [{ input: "", expected: "Ruby" }]
    },

    // ============ GO SPECIFIC PROBLEMS ============
    {
        id: 'go-1',
        title: "Go Slices",
        language: 'go',
        difficulty: "easy",
        category: "Go Basics",
        points: 20,
        description: `# Go Slices 🐹

Slices are dynamic arrays in Go, more flexible than arrays.`,
        task: `Create a slice, append elements, and print the sum.`,
        examples: [{ input: "[1,2,3,4,5]", output: "15", explanation: "Sum of slice" }],
        hints: ["💡 Use make([]int, 0)", "💡 Use append(slice, value)"],
        starterCode: { go: `package main\n\nimport "fmt"\n\nfunc main() {\n    // Create slice and sum\n}` },
        solution: { go: `nums := []int{1, 2, 3, 4, 5}\nsum := 0\nfor _, n := range nums {\n    sum += n\n}\nfmt.Println(sum)` },
        testCases: [{ input: "", expected: "15" }]
    },
    {
        id: 'go-2',
        title: "Go Goroutines",
        language: 'go',
        difficulty: "medium",
        category: "Concurrency",
        points: 45,
        description: `# Goroutines in Go 🚀

Goroutines are lightweight threads managed by Go runtime.`,
        task: `Create a goroutine that prints a message 5 times.`,
        examples: [{ input: "None", output: "Hello 5 times", explanation: "Concurrent output" }],
        hints: ["💡 Use go functionName()", "💡 Add time.Sleep to see output"],
        starterCode: { go: `package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    // Launch goroutine\n}` },
        solution: { go: `go func() {\n    for i := 0; i < 5; i++ {\n        fmt.Println("Hello from goroutine")\n    }\n}()\ntime.Sleep(time.Second)` },
        testCases: [{ input: "", expected: "Hello printed" }]
    },

    // ============ TYPESCRIPT SPECIFIC PROBLEMS ============
    {
        id: 'ts-1',
        title: "TypeScript Types",
        language: 'typescript',
        difficulty: "easy",
        category: "TypeScript Basics",
        points: 20,
        description: `# TypeScript Type Annotations 📘

TypeScript adds static types to JavaScript.`,
        task: `Create a function with typed parameters and return type.`,
        examples: [{ input: "add(2, 3)", output: "5", explanation: "Typed addition" }],
        hints: ["💡 Use : type after parameters", "💡 Use : returnType after parentheses"],
        starterCode: { typescript: `// Create typed function\nfunction add(a, b) {\n    // Your code here\n}\n\nconsole.log(add(2, 3));` },
        solution: { typescript: `function add(a: number, b: number): number {\n    return a + b;\n}\nconsole.log(add(2, 3));` },
        testCases: [{ input: "", expected: "5" }]
    },
    {
        id: 'ts-2',
        title: "TypeScript Interfaces",
        language: 'typescript',
        difficulty: "medium",
        category: "TypeScript Basics",
        points: 35,
        description: `# TypeScript Interfaces 📋

Interfaces define the structure of objects in TypeScript.`,
        task: `Create an interface for a User with name, age, and email.`,
        examples: [{ input: "User object", output: "Typed user", explanation: "Interface enforced" }],
        hints: ["💡 Use interface keyword", "💡 Define property types"],
        starterCode: { typescript: `// Define User interface\ninterface User {\n    // Your code here\n}\n\nconst user: User = {\n    name: 'John',\n    age: 25,\n    email: 'john@example.com'\n};\nconsole.log(user);` },
        solution: { typescript: `interface User {\n    name: string;\n    age: number;\n    email: string;\n}\n\nconst user: User = {\n    name: 'John',\n    age: 25,\n    email: 'john@example.com'\n};\nconsole.log(user);` },
        testCases: [{ input: "", expected: "User printed" }]
    },
    {
        id: 'ts-3',
        title: "TypeScript Generics",
        language: 'typescript',
        difficulty: "hard",
        category: "Advanced TypeScript",
        points: 55,
        description: `# TypeScript Generics 🧬

Generics allow creating reusable components that work with any type.`,
        task: `Create a generic function that returns the first element of an array.`,
        examples: [{ input: "[1,2,3]", output: "1", explanation: "First element" }],
        hints: ["💡 Use <T> for generic type", "💡 Return type is T"],
        starterCode: { typescript: `// Create generic function\nfunction first<T>(arr: T[]): T {\n    // Your code here\n}\n\nconsole.log(first([1, 2, 3]));\nconsole.log(first(['a', 'b', 'c']));` },
        solution: { typescript: `function first<T>(arr: T[]): T {\n    return arr[0];\n}\nconsole.log(first([1, 2, 3]));\nconsole.log(first(['a', 'b', 'c']));` },
        testCases: [{ input: "", expected: "1, a" }]
    },

    // ============ ALGORITHMS CATEGORY ============
    {
        id: 'algo-1',
        title: "Binary Search",
        language: 'algorithms',
        difficulty: "medium",
        category: "Searching",
        points: 40,
        description: `# Binary Search Algorithm 🔍

Binary search finds an element in O(log n) time in a sorted array.`,
        task: `Implement binary search to find a target in a sorted array.`,
        examples: [{ input: "[1,3,5,7,9], target=5", output: "2", explanation: "Index of 5" }],
        hints: ["💡 Compare with middle element", "💡 Narrow search range by half"],
        starterCode: { python: `def binary_search(arr, target):\n    # Your code here\n    pass\n\nprint(binary_search([1,3,5,7,9], 5))` },
        solution: { python: `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1` },
        testCases: [{ input: "", expected: "2" }]
    },
    {
        id: 'algo-2',
        title: "Merge Sort",
        language: 'algorithms',
        difficulty: "hard",
        category: "Sorting",
        points: 60,
        description: `# Merge Sort Algorithm 🔄

Merge sort is a divide-and-conquer algorithm with O(n log n) complexity.`,
        task: `Implement merge sort to sort an array.`,
        examples: [{ input: "[5,2,8,1,9]", output: "[1,2,5,8,9]", explanation: "Sorted array" }],
        hints: ["💡 Divide array in half", "💡 Merge sorted halves"],
        starterCode: { python: `def merge_sort(arr):\n    # Your code here\n    pass\n\nprint(merge_sort([5,2,8,1,9]))` },
        solution: { python: `def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] < right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result` },
        testCases: [{ input: "", expected: "[1, 2, 5, 8, 9]" }]
    },

    // ============ DATA STRUCTURES CATEGORY ============
    {
        id: 'ds-1',
        title: "Implement Stack",
        language: 'data-structures',
        difficulty: "medium",
        category: "Stacks",
        points: 45,
        description: `# Stack Data Structure 📚

A stack follows Last-In-First-Out (LIFO) principle.`,
        task: `Implement a stack with push, pop, and peek methods.`,
        examples: [{ input: "push(1), push(2), pop()", output: "2", explanation: "Last in, first out" }],
        hints: ["💡 Use a list internally", "💡 push adds, pop removes last"],
        starterCode: { python: `class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        # Your code\n        pass\n    \n    def pop(self):\n        # Your code\n        pass\n    \n    def peek(self):\n        # Your code\n        pass` },
        solution: { python: `class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        return self.items.pop() if self.items else None\n    \n    def peek(self):\n        return self.items[-1] if self.items else None` },
        testCases: [{ input: "", expected: "Stack works" }]
    },
    {
        id: 'ds-2',
        title: "Linked List",
        language: 'data-structures',
        difficulty: "hard",
        category: "Linked Lists",
        points: 60,
        description: `# Linked List 🔗

A linked list is a linear data structure with nodes pointing to next nodes.`,
        task: `Implement a singly linked list with insert and traverse methods.`,
        examples: [{ input: "insert 1,2,3", output: "1->2->3", explanation: "Linked nodes" }],
        hints: ["💡 Create Node class first", "💡 Track head node"],
        starterCode: { python: `class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n    \n    def insert(self, data):\n        # Your code\n        pass\n    \n    def traverse(self):\n        # Your code\n        pass` },
        solution: { python: `class LinkedList:\n    def __init__(self):\n        self.head = None\n    \n    def insert(self, data):\n        new_node = Node(data)\n        if not self.head:\n            self.head = new_node\n        else:\n            current = self.head\n            while current.next:\n                current = current.next\n            current.next = new_node\n    \n    def traverse(self):\n        current = self.head\n        while current:\n            print(current.data, end=' -> ')\n            current = current.next` },
        testCases: [{ input: "", expected: "1 -> 2 -> 3" }]
    },

    // ============ DATABASES CATEGORY ============
    {
        id: 'db-1',
        title: "SQL SELECT Query",
        language: 'databases',
        difficulty: "easy",
        category: "SQL Basics",
        points: 20,
        description: `# SQL SELECT Statement 🗄️

SELECT retrieves data from database tables.`,
        task: `Write a query to select all users older than 25.`,
        examples: [{ input: "users table", output: "Filtered users", explanation: "WHERE condition" }],
        hints: ["💡 Use WHERE clause", "💡 Compare with > operator"],
        starterCode: { sql: `-- Select users older than 25\nSELECT * FROM users\n-- Add condition here` },
        solution: { sql: `SELECT * FROM users WHERE age > 25;` },
        testCases: [{ input: "", expected: "Users filtered" }]
    },
    {
        id: 'db-2',
        title: "SQL JOIN",
        language: 'databases',
        difficulty: "medium",
        category: "SQL Joins",
        points: 40,
        description: `# SQL JOIN Operations 🔗

JOIN combines rows from multiple tables based on related columns.`,
        task: `Join users and orders tables to show user names with their order totals.`,
        examples: [{ input: "users, orders", output: "Combined data", explanation: "Tables joined" }],
        hints: ["💡 Use INNER JOIN", "💡 Match on user_id"],
        starterCode: { sql: `-- Join users and orders\nSELECT users.name, orders.total\nFROM users\n-- Add JOIN here` },
        solution: { sql: `SELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;` },
        testCases: [{ input: "", expected: "Joined data" }]
    },

    // ============ AI/ML CATEGORY ============
    {
        id: 'ai-1',
        title: "Linear Regression Basics",
        language: 'ai',
        difficulty: "medium",
        category: "Machine Learning",
        points: 45,
        description: `# Linear Regression 📈

Linear regression predicts continuous values based on input features.`,
        task: `Use scikit-learn to create a simple linear regression model.`,
        examples: [{ input: "X, y data", output: "Predictions", explanation: "Model trained" }],
        hints: ["💡 Use LinearRegression()", "💡 Call fit() then predict()"],
        starterCode: { python: `from sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 5, 4, 5])\n\n# Create and train model\n# Make predictions` },
        solution: { python: `from sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 5, 4, 5])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\npredictions = model.predict([[6]])\nprint(predictions)` },
        testCases: [{ input: "", expected: "Prediction made" }]
    },

    // ============ REGEX CATEGORY ============
    {
        id: 'regex-1',
        title: "Email Validation",
        language: 'regex',
        difficulty: "medium",
        category: "Pattern Matching",
        points: 35,
        description: `# Regular Expressions 🔍

Regex patterns match text based on rules.`,
        task: `Write a regex pattern to validate email addresses.`,
        examples: [{ input: "test@example.com", output: "Valid", explanation: "Matches email pattern" }],
        hints: ["💡 Match word@word.word", "💡 Use \\w for word characters"],
        starterCode: { python: `import re\n\ndef validate_email(email):\n    pattern = r''  # Your pattern here\n    return bool(re.match(pattern, email))\n\nprint(validate_email('test@example.com'))` },
        solution: { python: `import re\n\ndef validate_email(email):\n    pattern = r'^[\\w.-]+@[\\w.-]+\\.\\w+$'\n    return bool(re.match(pattern, email))\n\nprint(validate_email('test@example.com'))` },
        testCases: [{ input: "", expected: "True" }]
    },

    // ============ PYTHON - ALL TOPICS ============
    // Variables & Data Types
    {
        id: 'py-var-1',
        title: "Variable Declaration",
        language: 'python',
        difficulty: "easy",
        category: "Variables",
        points: 10,
        description: `# Python Variables 📦\n\nIn Python, variables are created when you assign a value. No declaration needed!`,
        task: `Create variables for your name (string), age (integer), and height (float). Print them all.`,
        examples: [{ input: "None", output: "John 25 5.9", explanation: "Three variables printed" }],
        hints: ["💡 name = 'John'", "💡 age = 25", "💡 height = 5.9"],
        starterCode: { python: `# Create three variables\\nname = # Your name\\nage = # Your age\\nheight = # Your height\\n\\nprint(name, age, height)` },
        solution: { python: `name = 'John'\\nage = 25\\nheight = 5.9\\nprint(name, age, height)` },
        testCases: [{ input: "", expected: "Variables printed" }]
    },
    {
        id: 'py-var-2',
        title: "Data Type Conversion",
        language: 'python',
        difficulty: "easy",
        category: "Variables",
        points: 15,
        description: `# Type Conversion in Python 🔄\n\nConvert between data types using int(), float(), str().`,
        task: `Convert string "42" to integer, add 8, and print the result.`,
        examples: [{ input: '"42"', output: "50", explanation: "String converted to int" }],
        hints: ["💡 Use int() to convert", "💡 Then add 8"],
        starterCode: { python: `num_str = "42"\\n# Convert and add 8\\nresult = # Your code\\nprint(result)` },
        solution: { python: `num_str = "42"\\nresult = int(num_str) + 8\\nprint(result)` },
        testCases: [{ input: "", expected: "50" }]
    },
    // Loops
    {
        id: 'py-loop-1',
        title: "For Loop Basics",
        language: 'python',
        difficulty: "easy",
        category: "Loops",
        points: 15,
        description: `# Python For Loops 🔄\n\nFor loops iterate over sequences like lists, strings, or ranges.`,
        task: `Print all even numbers from 2 to 20 using a for loop.`,
        examples: [{ input: "None", output: "2 4 6 8 10 12 14 16 18 20", explanation: "Even numbers printed" }],
        hints: ["💡 Use range(2, 21, 2)", "💡 Step of 2 gives even numbers"],
        starterCode: { python: `# Print even numbers 2-20\\nfor num in range(# Your range):\\n    print(num)` },
        solution: { python: `for num in range(2, 21, 2):\\n    print(num)` },
        testCases: [{ input: "", expected: "Even numbers" }]
    },
    {
        id: 'py-loop-2',
        title: "While Loop Counter",
        language: 'python',
        difficulty: "easy",
        category: "Loops",
        points: 20,
        description: `# Python While Loops ⏳\n\nWhile loops repeat as long as a condition is true.`,
        task: `Use a while loop to print numbers 1-5, then print "Done!"`,
        examples: [{ input: "None", output: "1 2 3 4 5 Done!", explanation: "Loop with exit" }],
        hints: ["💡 Use counter variable", "💡 Increment each iteration"],
        starterCode: { python: `count = 1\\nwhile # Your condition:\\n    print(count)\\n    # Increment\\nprint("Done!")` },
        solution: { python: `count = 1\\nwhile count <= 5:\\n    print(count)\\n    count += 1\\nprint("Done!")` },
        testCases: [{ input: "", expected: "1-5 Done!" }]
    },
    {
        id: 'py-loop-3',
        title: "Nested Loops Pattern",
        language: 'python',
        difficulty: "medium",
        category: "Loops",
        points: 30,
        description: `# Nested Loops 🔲\n\nLoops inside loops create patterns and process 2D data.`,
        task: `Print a 5x5 grid of asterisks (*).`,
        examples: [{ input: "None", output: "*****\\n*****\\n*****\\n*****\\n*****", explanation: "5x5 grid" }],
        hints: ["💡 Outer loop for rows", "💡 Inner loop for columns"],
        starterCode: { python: `# Print 5x5 grid\\nfor row in range(5):\\n    for col in range(5):\\n        # Print star\\n    # New line after each row` },
        solution: { python: `for row in range(5):\\n    for col in range(5):\\n        print('*', end='')\\n    print()` },
        testCases: [{ input: "", expected: "5x5 grid" }]
    },
    // Conditions
    {
        id: 'py-cond-1',
        title: "If-Else Statement",
        language: 'python',
        difficulty: "easy",
        category: "Conditions",
        points: 15,
        description: `# Python Conditionals 🔀\n\nUse if-else to make decisions in your code.`,
        task: `Check if a number is positive, negative, or zero.`,
        examples: [{ input: "5", output: "Positive", explanation: "5 > 0" }],
        hints: ["💡 Use if, elif, else", "💡 Check > 0, < 0, == 0"],
        starterCode: { python: `num = 5\\n# Check and print result\\nif # condition:\\n    print("Positive")\\n# Add elif and else` },
        solution: { python: `num = 5\\nif num > 0:\\n    print("Positive")\\nelif num < 0:\\n    print("Negative")\\nelse:\\n    print("Zero")` },
        testCases: [{ input: "5", expected: "Positive" }]
    },
    {
        id: 'py-cond-2',
        title: "Multiple Conditions",
        language: 'python',
        difficulty: "easy",
        category: "Conditions",
        points: 20,
        description: `# Combining Conditions 🔗\n\nUse and, or, not to combine conditions.`,
        task: `Check if a number is between 1 and 100 (inclusive).`,
        examples: [{ input: "50", output: "In range", explanation: "1 <= 50 <= 100" }],
        hints: ["💡 Use and to combine", "💡 num >= 1 and num <= 100"],
        starterCode: { python: `num = 50\\nif # Your condition:\\n    print("In range")\\nelse:\\n    print("Out of range")` },
        solution: { python: `num = 50\\nif num >= 1 and num <= 100:\\n    print("In range")\\nelse:\\n    print("Out of range")` },
        testCases: [{ input: "50", expected: "In range" }]
    },
    {
        id: 'py-cond-3',
        title: "Grade Calculator",
        language: 'python',
        difficulty: "medium",
        category: "Conditions",
        points: 25,
        description: `# Grade Calculator 📊\n\nConvert numerical scores to letter grades.`,
        task: `Given a score (0-100), print the letter grade: A (90+), B (80-89), C (70-79), D (60-69), F (<60)`,
        examples: [{ input: "85", output: "B", explanation: "85 is in 80-89 range" }],
        hints: ["💡 Use elif chain", "💡 Start from highest grade"],
        starterCode: { python: `score = 85\\n# Determine grade\\nif score >= 90:\\n    grade = 'A'\\n# Add more conditions\\nprint(grade)` },
        solution: { python: `score = 85\\nif score >= 90:\\n    grade = 'A'\\nelif score >= 80:\\n    grade = 'B'\\nelif score >= 70:\\n    grade = 'C'\\nelif score >= 60:\\n    grade = 'D'\\nelse:\\n    grade = 'F'\\nprint(grade)` },
        testCases: [{ input: "85", expected: "B" }]
    },
    // Functions
    {
        id: 'py-func-1',
        title: "Basic Function",
        language: 'python',
        difficulty: "easy",
        category: "Functions",
        points: 20,
        description: `# Python Functions ⚙️\n\nFunctions are reusable blocks of code.`,
        task: `Create a function greet(name) that returns "Hello, [name]!"`,
        examples: [{ input: "greet('World')", output: "Hello, World!", explanation: "Function returns greeting" }],
        hints: ["💡 Use def keyword", "💡 Use return statement"],
        starterCode: { python: `def greet(name):\\n    # Return greeting\\n    pass\\n\\nprint(greet('World'))` },
        solution: { python: `def greet(name):\\n    return f"Hello, {name}!"\\n\\nprint(greet('World'))` },
        testCases: [{ input: "", expected: "Hello, World!" }]
    },
    {
        id: 'py-func-2',
        title: "Function with Default Parameter",
        language: 'python',
        difficulty: "easy",
        category: "Functions",
        points: 25,
        description: `# Default Parameters 🎯\n\nFunctions can have default values for parameters.`,
        task: `Create a function power(base, exp=2) that returns base raised to exp.`,
        examples: [{ input: "power(3)", output: "9", explanation: "3^2 = 9" }],
        hints: ["💡 Use exp=2 in parameter", "💡 Return base ** exp"],
        starterCode: { python: `def power(base, exp=2):\\n    # Return base to the power of exp\\n    pass\\n\\nprint(power(3))\\nprint(power(2, 4))` },
        solution: { python: `def power(base, exp=2):\\n    return base ** exp\\n\\nprint(power(3))\\nprint(power(2, 4))` },
        testCases: [{ input: "", expected: "9, 16" }]
    },
    // Arrays/Lists
    {
        id: 'py-arr-1',
        title: "List Basics",
        language: 'python',
        difficulty: "easy",
        category: "Arrays",
        points: 15,
        description: `# Python Lists 📊\n\nLists store multiple items in a single variable.`,
        task: `Create a list of fruits, add 'mango' to it, and print the list.`,
        examples: [{ input: "['apple', 'banana']", output: "['apple', 'banana', 'mango']", explanation: "Mango added" }],
        hints: ["💡 Use append() to add", "💡 fruits.append('mango')"],
        starterCode: { python: `fruits = ['apple', 'banana']\\n# Add mango\\n# Your code\\nprint(fruits)` },
        solution: { python: `fruits = ['apple', 'banana']\\nfruits.append('mango')\\nprint(fruits)` },
        testCases: [{ input: "", expected: "List with mango" }]
    },
    {
        id: 'py-arr-2',
        title: "List Slicing",
        language: 'python',
        difficulty: "easy",
        category: "Arrays",
        points: 20,
        description: `# List Slicing ✂️\n\nAccess parts of a list using slice notation.`,
        task: `Get the first 3 elements and the last 2 elements from a list.`,
        examples: [{ input: "[1,2,3,4,5]", output: "[1,2,3] [4,5]", explanation: "Sliced results" }],
        hints: ["💡 First 3: list[:3]", "💡 Last 2: list[-2:]"],
        starterCode: { python: `numbers = [1, 2, 3, 4, 5]\\nfirst_three = # Your code\\nlast_two = # Your code\\nprint(first_three, last_two)` },
        solution: { python: `numbers = [1, 2, 3, 4, 5]\\nfirst_three = numbers[:3]\\nlast_two = numbers[-2:]\\nprint(first_three, last_two)` },
        testCases: [{ input: "", expected: "[1,2,3] [4,5]" }]
    },
    {
        id: 'py-arr-3',
        title: "Find Maximum",
        language: 'python',
        difficulty: "medium",
        category: "Arrays",
        points: 25,
        description: `# Finding Max Value 🔝\n\nFind the largest number in a list.`,
        task: `Find the maximum value without using the built-in max() function.`,
        examples: [{ input: "[3, 7, 2, 9, 1]", output: "9", explanation: "9 is largest" }],
        hints: ["💡 Start with first element", "💡 Compare with each element"],
        starterCode: { python: `def find_max(numbers):\\n    # Your code here\\n    pass\\n\\nprint(find_max([3, 7, 2, 9, 1]))` },
        solution: { python: `def find_max(numbers):\\n    max_val = numbers[0]\\n    for num in numbers:\\n        if num > max_val:\\n            max_val = num\\n    return max_val\\n\\nprint(find_max([3, 7, 2, 9, 1]))` },
        testCases: [{ input: "", expected: "9" }]
    },
    // Strings
    {
        id: 'py-str-1',
        title: "String Methods",
        language: 'python',
        difficulty: "easy",
        category: "Strings",
        points: 15,
        description: `# String Methods 📝\n\nPython strings have many useful methods.`,
        task: `Convert a string to uppercase and count the letter 'O'.`,
        examples: [{ input: "hello world", output: "HELLO WORLD, 2", explanation: "Uppercase and count" }],
        hints: ["💡 Use .upper()", "💡 Use .count('O')"],
        starterCode: { python: `text = "hello world"\\nupper_text = # Your code\\no_count = # Your code\\nprint(upper_text, o_count)` },
        solution: { python: `text = "hello world"\\nupper_text = text.upper()\\no_count = upper_text.count('O')\\nprint(upper_text, o_count)` },
        testCases: [{ input: "", expected: "HELLO WORLD 2" }]
    },
    {
        id: 'py-str-2',
        title: "String Formatting",
        language: 'python',
        difficulty: "easy",
        category: "Strings",
        points: 20,
        description: `# F-Strings in Python 💬\n\nF-strings make string formatting easy and readable.`,
        task: `Create a formatted string: "My name is [name] and I am [age] years old."`,
        examples: [{ input: "name='Alice', age=25", output: "My name is Alice and I am 25 years old.", explanation: "Formatted" }],
        hints: ["💡 Use f'...'", "💡 Put variables in {}"],
        starterCode: { python: `name = "Alice"\\nage = 25\\nmessage = # Your f-string\\nprint(message)` },
        solution: { python: `name = "Alice"\\nage = 25\\nmessage = f"My name is {name} and I am {age} years old."\\nprint(message)` },
        testCases: [{ input: "", expected: "Formatted string" }]
    },
    // Recursion
    {
        id: 'py-rec-1',
        title: "Factorial Recursion",
        language: 'python',
        difficulty: "medium",
        category: "Recursion",
        points: 35,
        description: `# Recursive Factorial 🔁\n\nn! = n * (n-1) * (n-2) * ... * 1`,
        task: `Calculate factorial using recursion.`,
        examples: [{ input: "5", output: "120", explanation: "5! = 120" }],
        hints: ["💡 Base case: n <= 1 returns 1", "💡 Recursive: n * factorial(n-1)"],
        starterCode: { python: `def factorial(n):\\n    # Base case\\n    # Recursive case\\n    pass\\n\\nprint(factorial(5))` },
        solution: { python: `def factorial(n):\\n    if n <= 1:\\n        return 1\\n    return n * factorial(n - 1)\\n\\nprint(factorial(5))` },
        testCases: [{ input: "", expected: "120" }]
    },
    {
        id: 'py-rec-2',
        title: "Sum Digits Recursively",
        language: 'python',
        difficulty: "medium",
        category: "Recursion",
        points: 40,
        description: `# Recursive Digit Sum 🔢\n\nSum all digits of a number using recursion.`,
        task: `Given 12345, return 1+2+3+4+5 = 15 using recursion.`,
        examples: [{ input: "12345", output: "15", explanation: "Sum of digits" }],
        hints: ["💡 Base: n < 10 returns n", "💡 Recursive: n%10 + sum(n//10)"],
        starterCode: { python: `def sum_digits(n):\\n    # Your recursive solution\\n    pass\\n\\nprint(sum_digits(12345))` },
        solution: { python: `def sum_digits(n):\\n    if n < 10:\\n        return n\\n    return n % 10 + sum_digits(n // 10)\\n\\nprint(sum_digits(12345))` },
        testCases: [{ input: "", expected: "15" }]
    },

    // ============ JAVASCRIPT - ALL TOPICS ============
    // Variables
    {
        id: 'js-var-1',
        title: "Let, Const, Var",
        language: 'javascript',
        difficulty: "easy",
        category: "Variables",
        points: 10,
        description: `# JavaScript Variables 📦\n\nUnderstand the difference between let, const, and var.`,
        task: `Create a constant PI, a let variable radius, and calculate area.`,
        examples: [{ input: "radius=5", output: "78.54", explanation: "π*r² = 78.54" }],
        hints: ["💡 const cannot be reassigned", "💡 let can be reassigned"],
        starterCode: { javascript: `const PI = 3.14159;\\nlet radius = 5;\\n// Calculate area\\nlet area = // Your code\\nconsole.log(area.toFixed(2));` },
        solution: { javascript: `const PI = 3.14159;\\nlet radius = 5;\\nlet area = PI * radius * radius;\\nconsole.log(area.toFixed(2));` },
        testCases: [{ input: "", expected: "78.54" }]
    },
    {
        id: 'js-var-2',
        title: "Template Literals",
        language: 'javascript',
        difficulty: "easy",
        category: "Variables",
        points: 15,
        description: `# Template Literals 💬\n\nUse backticks for string interpolation.`,
        task: `Use template literals to create: "Hello, [name]! You have [count] messages."`,
        examples: [{ input: "name='Alice', count=5", output: "Hello, Alice! You have 5 messages.", explanation: "Interpolated" }],
        hints: ["💡 Use backticks ``", "💡 Use ${variable}"],
        starterCode: { javascript: `const name = "Alice";\\nconst count = 5;\\nconst message = // Your template literal\\nconsole.log(message);` },
        solution: { javascript: 'const name = "Alice";\\nconst count = 5;\\nconst message = `Hello, ${name}! You have ${count} messages.`;\\nconsole.log(message);' },
        testCases: [{ input: "", expected: "Formatted message" }]
    },
    // Loops
    {
        id: 'js-loop-1',
        title: "For Loop",
        language: 'javascript',
        difficulty: "easy",
        category: "Loops",
        points: 15,
        description: `# JavaScript For Loop 🔄\n\nClassic for loop with initialization, condition, and increment.`,
        task: `Print numbers 1 to 10 using a for loop.`,
        examples: [{ input: "None", output: "1 2 3 4 5 6 7 8 9 10", explanation: "Numbers printed" }],
        hints: ["💡 for (let i = 1; i <= 10; i++)", "💡 i++ increments by 1"],
        starterCode: { javascript: `// Print 1 to 10\\nfor (let i = 1; // condition; // increment) {\\n    console.log(i);\\n}` },
        solution: { javascript: `for (let i = 1; i <= 10; i++) {\\n    console.log(i);\\n}` },
        testCases: [{ input: "", expected: "1-10" }]
    },
    {
        id: 'js-loop-2',
        title: "Array forEach",
        language: 'javascript',
        difficulty: "easy",
        category: "Loops",
        points: 20,
        description: `# forEach Method 🔁\n\nIterate over arrays using forEach.`,
        task: `Use forEach to print each fruit with its index.`,
        examples: [{ input: "['apple', 'banana']", output: "0: apple, 1: banana", explanation: "Index and value" }],
        hints: ["💡 arr.forEach((item, index) => ...)", "💡 Arrow function syntax"],
        starterCode: { javascript: `const fruits = ['apple', 'banana', 'orange'];\\n// Use forEach\\nfruits.forEach((fruit, index) => {\\n    // Print index: fruit\\n});` },
        solution: { javascript: `const fruits = ['apple', 'banana', 'orange'];\\nfruits.forEach((fruit, index) => {\\n    console.log(\`\${index}: \${fruit}\`);\\n});` },
        testCases: [{ input: "", expected: "Indexed list" }]
    },
    // Conditions
    {
        id: 'js-cond-1',
        title: "Ternary Operator",
        language: 'javascript',
        difficulty: "easy",
        category: "Conditions",
        points: 15,
        description: `# Ternary Operator ❓\n\nShorthand for if-else: condition ? true : false`,
        task: `Use ternary to check if a number is positive or negative.`,
        examples: [{ input: "5", output: "positive", explanation: "5 > 0" }],
        hints: ["💡 condition ? 'yes' : 'no'", "💡 num > 0 ? ..."],
        starterCode: { javascript: `const num = 5;\\nconst result = // Your ternary\\nconsole.log(result);` },
        solution: { javascript: `const num = 5;\\nconst result = num > 0 ? 'positive' : 'negative';\\nconsole.log(result);` },
        testCases: [{ input: "", expected: "positive" }]
    },
    {
        id: 'js-cond-2',
        title: "Switch Statement",
        language: 'javascript',
        difficulty: "easy",
        category: "Conditions",
        points: 20,
        description: `# Switch Statement 🔀\n\nMultiple conditions with switch-case.`,
        task: `Use switch to print the day name for day number 1-7.`,
        examples: [{ input: "1", output: "Monday", explanation: "1 = Monday" }],
        hints: ["💡 switch(day) { case 1: ... }", "💡 Don't forget break!"],
        starterCode: { javascript: `const day = 1;\\nlet dayName;\\nswitch(day) {\\n    case 1:\\n        dayName = 'Monday';\\n        break;\\n    // Add more cases\\n}\\nconsole.log(dayName);` },
        solution: { javascript: `const day = 1;\\nlet dayName;\\nswitch(day) {\\n    case 1: dayName = 'Monday'; break;\\n    case 2: dayName = 'Tuesday'; break;\\n    case 3: dayName = 'Wednesday'; break;\\n    case 4: dayName = 'Thursday'; break;\\n    case 5: dayName = 'Friday'; break;\\n    case 6: dayName = 'Saturday'; break;\\n    case 7: dayName = 'Sunday'; break;\\n}\\nconsole.log(dayName);` },
        testCases: [{ input: "", expected: "Monday" }]
    },
    // Functions
    {
        id: 'js-func-1',
        title: "Arrow Functions",
        language: 'javascript',
        difficulty: "easy",
        category: "Functions",
        points: 20,
        description: `# Arrow Functions ⚙️\n\nModern JavaScript uses arrow function syntax.`,
        task: `Create an arrow function that doubles a number.`,
        examples: [{ input: "double(5)", output: "10", explanation: "5 * 2 = 10" }],
        hints: ["💡 const fn = (x) => x * 2", "💡 Single expression = implicit return"],
        starterCode: { javascript: `const double = // Your arrow function\\n\\nconsole.log(double(5));\\nconsole.log(double(12));` },
        solution: { javascript: `const double = (x) => x * 2;\\n\\nconsole.log(double(5));\\nconsole.log(double(12));` },
        testCases: [{ input: "", expected: "10, 24" }]
    },
    {
        id: 'js-func-2',
        title: "Higher Order Functions",
        language: 'javascript',
        difficulty: "medium",
        category: "Functions",
        points: 35,
        description: `# Higher Order Functions 🎯\n\nFunctions that take or return other functions.`,
        task: `Create a function that returns a multiplier function.`,
        examples: [{ input: "multiplyBy(3)(4)", output: "12", explanation: "3 * 4 = 12" }],
        hints: ["💡 Return a function inside", "💡 Closure captures the value"],
        starterCode: { javascript: `function multiplyBy(factor) {\\n    // Return a function\\n}\\n\\nconst triple = multiplyBy(3);\\nconsole.log(triple(4));` },
        solution: { javascript: `function multiplyBy(factor) {\\n    return (num) => num * factor;\\n}\\n\\nconst triple = multiplyBy(3);\\nconsole.log(triple(4));` },
        testCases: [{ input: "", expected: "12" }]
    },
    // Arrays
    {
        id: 'js-arr-1',
        title: "Array Map",
        language: 'javascript',
        difficulty: "easy",
        category: "Arrays",
        points: 20,
        description: `# Array Map 📊\n\nTransform each element with map().`,
        task: `Double each number in an array using map.`,
        examples: [{ input: "[1, 2, 3]", output: "[2, 4, 6]", explanation: "All doubled" }],
        hints: ["💡 arr.map(x => x * 2)", "💡 Returns new array"],
        starterCode: { javascript: `const numbers = [1, 2, 3, 4, 5];\\nconst doubled = // Your map\\nconsole.log(doubled);` },
        solution: { javascript: `const numbers = [1, 2, 3, 4, 5];\\nconst doubled = numbers.map(x => x * 2);\\nconsole.log(doubled);` },
        testCases: [{ input: "", expected: "[2, 4, 6, 8, 10]" }]
    },
    {
        id: 'js-arr-2',
        title: "Array Filter",
        language: 'javascript',
        difficulty: "easy",
        category: "Arrays",
        points: 20,
        description: `# Array Filter 🔍\n\nFilter elements that pass a test.`,
        task: `Filter to keep only even numbers.`,
        examples: [{ input: "[1,2,3,4,5]", output: "[2, 4]", explanation: "Only evens" }],
        hints: ["💡 arr.filter(x => condition)", "💡 x % 2 === 0 for even"],
        starterCode: { javascript: `const numbers = [1, 2, 3, 4, 5, 6];\\nconst evens = // Your filter\\nconsole.log(evens);` },
        solution: { javascript: `const numbers = [1, 2, 3, 4, 5, 6];\\nconst evens = numbers.filter(x => x % 2 === 0);\\nconsole.log(evens);` },
        testCases: [{ input: "", expected: "[2, 4, 6]" }]
    },
    {
        id: 'js-arr-3',
        title: "Array Reduce",
        language: 'javascript',
        difficulty: "medium",
        category: "Arrays",
        points: 30,
        description: `# Array Reduce 🔄\n\nReduce array to single value.`,
        task: `Calculate the product of all numbers using reduce.`,
        examples: [{ input: "[1,2,3,4]", output: "24", explanation: "1*2*3*4=24" }],
        hints: ["💡 arr.reduce((acc, val) => acc * val, 1)", "💡 Start with 1 for product"],
        starterCode: { javascript: `const numbers = [1, 2, 3, 4];\\nconst product = // Your reduce\\nconsole.log(product);` },
        solution: { javascript: `const numbers = [1, 2, 3, 4];\\nconst product = numbers.reduce((acc, val) => acc * val, 1);\\nconsole.log(product);` },
        testCases: [{ input: "", expected: "24" }]
    },
    // Strings
    {
        id: 'js-str-1',
        title: "String Methods",
        language: 'javascript',
        difficulty: "easy",
        category: "Strings",
        points: 15,
        description: `# String Methods 📝\n\nJavaScript string manipulation.`,
        task: `Check if a string includes 'hello' (case insensitive).`,
        examples: [{ input: "'Hello World'", output: "true", explanation: "Contains hello" }],
        hints: ["💡 Use .toLowerCase()", "💡 Use .includes()"],
        starterCode: { javascript: `const text = "Hello World";\\nconst hasHello = // Your code\\nconsole.log(hasHello);` },
        solution: { javascript: `const text = "Hello World";\\nconst hasHello = text.toLowerCase().includes('hello');\\nconsole.log(hasHello);` },
        testCases: [{ input: "", expected: "true" }]
    },
    // Recursion
    {
        id: 'js-rec-1',
        title: "Recursive Countdown",
        language: 'javascript',
        difficulty: "medium",
        category: "Recursion",
        points: 30,
        description: `# Recursive Countdown 🔁\n\nCount down from n to 0 using recursion.`,
        task: `Print countdown from 5 to 0, then "Blast off!"`,
        examples: [{ input: "5", output: "5 4 3 2 1 0 Blast off!", explanation: "Countdown" }],
        hints: ["💡 Base case: n < 0", "💡 Recursive: print n, call countdown(n-1)"],
        starterCode: { javascript: `function countdown(n) {\\n    // Base case\\n    // Print n\\n    // Recursive call\\n}\\n\\ncountdown(5);` },
        solution: { javascript: `function countdown(n) {\\n    if (n < 0) {\\n        console.log("Blast off!");\\n        return;\\n    }\\n    console.log(n);\\n    countdown(n - 1);\\n}\\n\\ncountdown(5);` },
        testCases: [{ input: "", expected: "Countdown complete" }]
    },

    // ============ JAVA - ALL TOPICS ============
    // Variables
    {
        id: 'java-var-1',
        title: "Primitive Data Types",
        language: 'java',
        difficulty: "easy",
        category: "Variables",
        points: 15,
        description: `# Java Primitives ☕\n\nJava has 8 primitive types: byte, short, int, long, float, double, boolean, char.`,
        task: `Declare variables of type int, double, and boolean. Print them.`,
        examples: [{ input: "None", output: "10 3.14 true", explanation: "Three types" }],
        hints: ["💡 int num = 10;", "💡 double pi = 3.14;"],
        starterCode: { java: `public class Solution {\\n    public static void main(String[] args) {\\n        // Declare int, double, boolean\\n        \\n        System.out.println(num + " " + pi + " " + flag);\\n    }\\n}` },
        solution: { java: `int num = 10;\\ndouble pi = 3.14;\\nboolean flag = true;\\nSystem.out.println(num + " " + pi + " " + flag);` },
        testCases: [{ input: "", expected: "10 3.14 true" }]
    },
    // Loops
    {
        id: 'java-loop-1',
        title: "Enhanced For Loop",
        language: 'java',
        difficulty: "easy",
        category: "Loops",
        points: 20,
        description: `# For-Each Loop ☕\n\nSimplified iteration over arrays and collections.`,
        task: `Use enhanced for loop to print all elements of an array.`,
        examples: [{ input: "[1,2,3,4,5]", output: "1 2 3 4 5", explanation: "All elements" }],
        hints: ["💡 for (int num : array)", "💡 Reads as 'for each num in array'"],
        starterCode: { java: `public class Solution {\\n    public static void main(String[] args) {\\n        int[] nums = {1, 2, 3, 4, 5};\\n        // Use enhanced for loop\\n    }\\n}` },
        solution: { java: `int[] nums = {1, 2, 3, 4, 5};\\nfor (int num : nums) {\\n    System.out.print(num + " ");\\n}` },
        testCases: [{ input: "", expected: "1 2 3 4 5" }]
    },
    // Conditions
    {
        id: 'java-cond-1',
        title: "If-Else Chain",
        language: 'java',
        difficulty: "easy",
        category: "Conditions",
        points: 15,
        description: `# Java Conditionals ☕\n\nMake decisions with if-else.`,
        task: `Classify a number as positive, negative, or zero.`,
        examples: [{ input: "5", output: "Positive", explanation: "5 > 0" }],
        hints: ["💡 if (n > 0)", "💡 else if for other cases"],
        starterCode: { java: `public class Solution {\\n    public static void main(String[] args) {\\n        int n = 5;\\n        // Classify the number\\n    }\\n}` },
        solution: { java: `int n = 5;\\nif (n > 0) {\\n    System.out.println("Positive");\\n} else if (n < 0) {\\n    System.out.println("Negative");\\n} else {\\n    System.out.println("Zero");\\n}` },
        testCases: [{ input: "", expected: "Positive" }]
    },
    // Functions
    {
        id: 'java-func-1',
        title: "Static Methods",
        language: 'java',
        difficulty: "easy",
        category: "Functions",
        points: 20,
        description: `# Java Methods ⚙️\n\nDefine reusable methods in Java.`,
        task: `Create a method that returns the maximum of two integers.`,
        examples: [{ input: "max(5, 3)", output: "5", explanation: "5 is larger" }],
        hints: ["💡 public static int max(int a, int b)", "💡 Use ternary or if-else"],
        starterCode: { java: `public class Solution {\\n    public static int max(int a, int b) {\\n        // Return the larger number\\n    }\\n    \\n    public static void main(String[] args) {\\n        System.out.println(max(5, 3));\\n    }\\n}` },
        solution: { java: `public static int max(int a, int b) {\\n    return a > b ? a : b;\\n}` },
        testCases: [{ input: "", expected: "5" }]
    },
    // Arrays
    {
        id: 'java-arr-1',
        title: "Array Operations",
        language: 'java',
        difficulty: "easy",
        category: "Arrays",
        points: 20,
        description: `# Java Arrays ☕\n\nFixed-size containers for same-type elements.`,
        task: `Create an array, find and print the sum of all elements.`,
        examples: [{ input: "[1,2,3,4,5]", output: "15", explanation: "Sum = 15" }],
        hints: ["💡 int[] arr = {1,2,3,4,5};", "💡 Loop to sum"],
        starterCode: { java: `public class Solution {\\n    public static void main(String[] args) {\\n        int[] arr = {1, 2, 3, 4, 5};\\n        int sum = 0;\\n        // Calculate sum\\n        System.out.println(sum);\\n    }\\n}` },
        solution: { java: `int[] arr = {1, 2, 3, 4, 5};\\nint sum = 0;\\nfor (int n : arr) {\\n    sum += n;\\n}\\nSystem.out.println(sum);` },
        testCases: [{ input: "", expected: "15" }]
    },
    // Strings
    {
        id: 'java-str-1',
        title: "String Manipulation",
        language: 'java',
        difficulty: "easy",
        category: "Strings",
        points: 20,
        description: `# Java Strings 📝\n\nStrings in Java are immutable objects.`,
        task: `Reverse a string using StringBuilder.`,
        examples: [{ input: "hello", output: "olleh", explanation: "Reversed" }],
        hints: ["💡 new StringBuilder(str)", "💡 .reverse().toString()"],
        starterCode: { java: `public class Solution {\\n    public static void main(String[] args) {\\n        String str = "hello";\\n        // Reverse using StringBuilder\\n    }\\n}` },
        solution: { java: `String str = "hello";\\nString reversed = new StringBuilder(str).reverse().toString();\\nSystem.out.println(reversed);` },
        testCases: [{ input: "", expected: "olleh" }]
    },
    // Recursion
    {
        id: 'java-rec-1',
        title: "Recursive Power",
        language: 'java',
        difficulty: "medium",
        category: "Recursion",
        points: 35,
        description: `# Recursive Power 🔁\n\nCalculate base^exponent using recursion.`,
        task: `Implement power(base, exp) recursively.`,
        examples: [{ input: "power(2, 5)", output: "32", explanation: "2^5 = 32" }],
        hints: ["💡 Base case: exp == 0 returns 1", "💡 Recursive: base * power(base, exp-1)"],
        starterCode: { java: `public class Solution {\\n    public static int power(int base, int exp) {\\n        // Your recursive solution\\n    }\\n    \\n    public static void main(String[] args) {\\n        System.out.println(power(2, 5));\\n    }\\n}` },
        solution: { java: `public static int power(int base, int exp) {\\n    if (exp == 0) return 1;\\n    return base * power(base, exp - 1);\\n}` },
        testCases: [{ input: "", expected: "32" }]
    },

    // ============ C++ - ALL TOPICS ============
    // Variables
    {
        id: 'cpp-var-1',
        title: "C++ Variables",
        language: 'cpp',
        difficulty: "easy",
        category: "Variables",
        points: 15,
        description: `# C++ Variables ⚡\n\nC++ requires explicit type declarations.`,
        task: `Declare int, double, and string variables. Print them.`,
        examples: [{ input: "None", output: "10 3.14 hello", explanation: "Three types" }],
        hints: ["💡 int num = 10;", "💡 #include <string>"],
        starterCode: { cpp: `#include <iostream>\\n#include <string>\\nusing namespace std;\\n\\nint main() {\\n    // Declare variables\\n    \\n    cout << num << " " << pi << " " << text << endl;\\n    return 0;\\n}` },
        solution: { cpp: `int num = 10;\\ndouble pi = 3.14;\\nstring text = "hello";\\ncout << num << " " << pi << " " << text << endl;` },
        testCases: [{ input: "", expected: "10 3.14 hello" }]
    },
    // Loops
    {
        id: 'cpp-loop-1',
        title: "Range-based For Loop",
        language: 'cpp',
        difficulty: "easy",
        category: "Loops",
        points: 20,
        description: `# C++ Range-based For ⚡\n\nModern C++ iteration syntax.`,
        task: `Use range-based for to print vector elements.`,
        examples: [{ input: "[1,2,3,4,5]", output: "1 2 3 4 5", explanation: "All elements" }],
        hints: ["💡 for (int x : vec)", "💡 Simpler than index-based"],
        starterCode: { cpp: `#include <iostream>\\n#include <vector>\\nusing namespace std;\\n\\nint main() {\\n    vector<int> nums = {1, 2, 3, 4, 5};\\n    // Range-based for loop\\n    return 0;\\n}` },
        solution: { cpp: `for (int num : nums) {\\n    cout << num << " ";\\n}` },
        testCases: [{ input: "", expected: "1 2 3 4 5" }]
    },
    // Functions
    {
        id: 'cpp-func-1',
        title: "Function Overloading",
        language: 'cpp',
        difficulty: "medium",
        category: "Functions",
        points: 30,
        description: `# Function Overloading ⚡\n\nSame name, different parameters.`,
        task: `Create overloaded 'add' functions for int and double.`,
        examples: [{ input: "add(1,2), add(1.5,2.5)", output: "3, 4.0", explanation: "Both work" }],
        hints: ["💡 int add(int a, int b)", "💡 double add(double a, double b)"],
        starterCode: { cpp: `#include <iostream>\\nusing namespace std;\\n\\n// Overloaded add functions\\n\\nint main() {\\n    cout << add(1, 2) << endl;\\n    cout << add(1.5, 2.5) << endl;\\n    return 0;\\n}` },
        solution: { cpp: `int add(int a, int b) { return a + b; }\\ndouble add(double a, double b) { return a + b; }` },
        testCases: [{ input: "", expected: "3, 4.0" }]
    }
];

// Categories for sidebar
export const categories = [
    { id: 'all', name: 'All Problems', icon: '📚', count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀', count: 1 },
    { id: 'basic-math', name: 'Basic Math', icon: '🔢', count: 3 },
    { id: 'comparisons', name: 'Comparisons', icon: '⚖️', count: 1 },
    { id: 'loops', name: 'Loops', icon: '🔄', count: 3 },
    { id: 'conditions', name: 'Conditions', icon: '🌿', count: 2 },
    { id: 'variables', name: 'Variables', icon: '📦', count: 1 },
    { id: 'strings', name: 'Strings', icon: '📝', count: 6 },
    { id: 'arrays', name: 'Arrays', icon: '📊', count: 7 },
    { id: 'patterns', name: 'Patterns', icon: '🔺', count: 1 },
    { id: 'math-logic', name: 'Math Logic', icon: '🧮', count: 2 },
    { id: 'geometry', name: 'Geometry', icon: '📐', count: 1 },
    { id: 'stacks', name: 'Stacks', icon: '📚', count: 1 },
    { id: 'recursion', name: 'Recursion', icon: '🔁', count: 1 },
    { id: 'functions', name: 'Functions', icon: '⚙️', count: 15 }
];

// Badges data
export const badges = [
    {
        id: 1,
        name: "First Steps",
        description: "Complete your first problem",
        icon: "🌟",
        requirement: 1,
        type: "problems_solved"
    },
    {
        id: 2,
        name: "Rising Star",
        description: "Complete 5 problems",
        icon: "⭐",
        requirement: 5,
        type: "problems_solved"
    },
    {
        id: 3,
        name: "Problem Solver",
        description: "Complete 10 problems",
        icon: "🏆",
        requirement: 10,
        type: "problems_solved"
    },
    {
        id: 4,
        name: "Easy Master",
        description: "Complete all Easy problems",
        icon: "💚",
        requirement: 5,
        type: "easy_complete"
    },
    {
        id: 5,
        name: "Medium Champion",
        description: "Complete all Medium problems",
        icon: "💛",
        requirement: 3,
        type: "medium_complete"
    },
    {
        id: 6,
        name: "Hard Warrior",
        description: "Complete a Hard problem",
        icon: "❤️",
        requirement: 1,
        type: "hard_complete"
    },
    {
        id: 7,
        name: "Speed Demon",
        description: "Solve a problem in under 2 minutes",
        icon: "⚡",
        requirement: 1,
        type: "speed"
    },
    {
        id: 8,
        name: "Streak Master",
        description: "Maintain a 7-day streak",
        icon: "🔥",
        requirement: 7,
        type: "streak"
    },
    {
        id: 9,
        name: "Century Club",
        description: "Earn 100 XP",
        icon: "💯",
        requirement: 100,
        type: "xp"
    },
    {
        id: 10,
        name: "CodeQuest Champion",
        description: "Complete all problems",
        icon: "👑",
        requirement: 10,
        type: "all_complete"
    }
];

export default { problems, categories, badges };
