import { useState } from 'react';
import './LeetCodeGuide.css';

const syntaxGuides = {
    java: {
        name: "Java",
        input: [
            { cmd: "Scanner sc = new Scanner(System.in);", desc: "Initialize Scanner" },
            { cmd: "int n = sc.nextInt();", desc: "Read integer" },
            { cmd: "String s = sc.nextLine();", desc: "Read string line" },
            { cmd: "String word = sc.next();", desc: "Read single word" }
        ],
        output: [
            { cmd: "System.out.println(result);", desc: "Print with new line" },
            { cmd: "System.out.print(result);", desc: "Print without new line" }
        ]
    },
    python: {
        name: "Python",
        input: [
            { cmd: "n = int(input())", desc: "Read integer" },
            { cmd: "s = input()", desc: "Read string" },
            { cmd: "arr = list(map(int, input().split()))", desc: "Read array of integers" },
            { cmd: "a, b = map(int, input().split())", desc: "Read multiple values" }
        ],
        output: [
            { cmd: "print(result)", desc: "Print result" },
            { cmd: "print(*arr)", desc: "Print array elements separated by space" }
        ]
    },
    javascript: {
        name: "JavaScript (Node.js)",
        input: [
            { cmd: "// Inputs are usually given as arguments or via stdin", desc: "Standard Environment" },
            { cmd: "const fs = require('fs');", desc: "Import FS" },
            { cmd: "const input = fs.readFileSync(0, 'utf-8').trim().split('\\n');", desc: "Read all input" }
        ],
        output: [
            { cmd: "console.log(result);", desc: "Print result" },
            { cmd: "process.stdout.write(result);", desc: "Print without newline" }
        ]
    },
    cpp: {
        name: "C++",
        input: [
            { cmd: "int n; cin >> n;", desc: "Read integer" },
            { cmd: "string s; cin >> s;", desc: "Read string (no spaces)" },
            { cmd: "getline(cin, s);", desc: "Read full line" }
        ],
        output: [
            { cmd: "cout << result << endl;", desc: "Print with newline" },
            { cmd: "cout << result << \" \";", desc: "Print with space" }
        ]
    },
    c: {
        name: "C",
        input: [
            { cmd: "int n; scanf(\"%d\", &n);", desc: "Read integer" },
            { cmd: "char s[100]; scanf(\"%s\", s);", desc: "Read string" }
        ],
        output: [
            { cmd: "printf(\"%d\\n\", result);", desc: "Print integer" },
            { cmd: "printf(\"%s\\n\", s);", desc: "Print string" }
        ]
    },
    ruby: {
        name: "Ruby",
        input: [
            { cmd: "n = gets.to_i", desc: "Read integer" },
            { cmd: "s = gets.chomp", desc: "Read string" },
            { cmd: "arr = gets.split.map(&:to_i)", desc: "Read array of ints" }
        ],
        output: [
            { cmd: "puts result", desc: "Print with newline" },
            { cmd: "print result", desc: "Print without newline" }
        ]
    },
    go: {
        name: "Go",
        input: [
            { cmd: "var n int; fmt.Scan(&n)", desc: "Read integer" },
            { cmd: "reader := bufio.NewReader(os.Stdin)", desc: "Setup buffered reader" },
            { cmd: "text, _ := reader.ReadString('\\n')", desc: "Read line" }
        ],
        output: [
            { cmd: "fmt.Println(result)", desc: "Print with newline" },
            { cmd: "fmt.Printf(\"%d\", result)", desc: "Formatted print" }
        ]
    },
    typescript: {
        name: "TypeScript",
        input: [
            { cmd: "// Similar to JS, often uses 'fs' for stdin", desc: "" },
            { cmd: "const input = fs.readFileSync(0, 'utf-8');", desc: "Read all" }
        ],
        output: [
            { cmd: "console.log(result);", desc: "Print output" }
        ]
    },
    php: {
        name: "PHP",
        input: [
            { cmd: "$n = intval(fgets(STDIN));", desc: "Read integer" },
            { cmd: "$line = fgets(STDIN);", desc: "Read line" },
            { cmd: "fscanf(STDIN, \"%d %d\", $a, $b);", desc: "Read formatted" }
        ],
        output: [
            { cmd: "echo $result . \"\\n\";", desc: "Print with newline" },
            { cmd: "print_r($arr);", desc: "Print array" }
        ]
    },
    swift: {
        name: "Swift",
        input: [
            { cmd: "let n = Int(readLine()!)!", desc: "Read integer" },
            { cmd: "let str = readLine()!", desc: "Read string" },
            { cmd: "let arr = readLine()!.split(separator: \" \")", desc: "Read array" }
        ],
        output: [
            { cmd: "print(result)", desc: "Print with newline" }
        ]
    },
    kotlin: {
        name: "Kotlin",
        input: [
            { cmd: "val n = readLine()!!.toInt()", desc: "Read integer" },
            { cmd: "val s = readLine()!!", desc: "Read string" },
            { cmd: "val arr = readLine()!!.split(\" \")", desc: "Read array" }
        ],
        output: [
            { cmd: "println(result)", desc: "Print with newline" }
        ]
    }
};

function LeetCodeGuide({ problem, language = 'java' }) {
    const [activeStep, setActiveStep] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    const currentSyntax = syntaxGuides[language] || syntaxGuides.java;

    // Learning steps for understanding LeetCode/HackerRank style problems
    const learningSteps = [
        {
            title: "📖 Understanding the Problem",
            content: (
                <>
                    <p><strong>Step 1:</strong> Read the problem statement carefully.</p>
                    <p>In LeetCode/HackerRank, problems have:</p>
                    <ul>
                        <li>📌 <strong>Description</strong> - What you need to solve</li>
                        <li>📌 <strong>Input Format</strong> - How data is given to you</li>
                        <li>📌 <strong>Output Format</strong> - What your code should print</li>
                        <li>📌 <strong>Constraints</strong> - Limits on input size</li>
                    </ul>
                </>
            ),
            tip: "Always understand WHAT you need to do before thinking HOW to do it!"
        },
        {
            title: "📥 Understanding Input Format",
            content: (
                <>
                    <p><strong>Step 2:</strong> Learn how to read input.</p>
                    <p>In competitive coding, input comes from <strong>standard input (stdin)</strong>. Here is the syntax for <strong>{currentSyntax.name}</strong>:</p>
                    <div className="code-example">
                        {currentSyntax.input.map((item, idx) => (
                            <div key={idx} className="syntax-row">
                                <code>{item.cmd}</code>
                                <span className="comment">// {item.desc}</span>
                            </div>
                        ))}
                    </div>
                </>
            ),
            tip: "Practice reading different input formats - it's the first challenge for beginners!"
        },
        {
            title: "💡 Solving the Logic",
            content: (
                <>
                    <p><strong>Step 3:</strong> Break down the problem into steps.</p>
                    <ol>
                        <li>What data do I have? (inputs)</li>
                        <li>What do I need to produce? (output)</li>
                        <li>What operations connect input to output?</li>
                    </ol>
                    <p className="highlight">Write pseudocode first, then translate to actual code!</p>
                </>
            ),
            tip: "Don't code immediately. Think first, code second!"
        },
        {
            title: "📤 Understanding Output Format",
            content: (
                <>
                    <p><strong>Step 4:</strong> Print output in the exact required format.</p>
                    <div className="warning-box">
                        ⚠️ Common mistakes:
                        <ul>
                            <li>Extra spaces or newlines</li>
                            <li>Wrong case (lowercase vs uppercase)</li>
                            <li>Missing or extra characters</li>
                        </ul>
                    </div>
                    <p><strong>{currentSyntax.name} Output Syntax:</strong></p>
                    <div className="code-example">
                        {currentSyntax.output.map((item, idx) => (
                            <div key={idx} className="syntax-row">
                                <code>{item.cmd}</code>
                                <span className="comment">// {item.desc}</span>
                            </div>
                        ))}
                    </div>
                </>
            ),
            tip: "Output must match EXACTLY - even one extra space can cause Wrong Answer!"
        },
        {
            title: "✅ Test Your Solution",
            content: (
                <>
                    <p><strong>Step 5:</strong> Test with sample cases, then edge cases.</p>
                    <ol>
                        <li>Test with given examples first</li>
                        <li>Try edge cases: empty input, single element, maximum values</li>
                        <li>Check constraints to avoid timeout errors</li>
                    </ol>
                </>
            ),
            tip: "Always test with the sample input/output before submitting!"
        }
    ];

    // Problem-specific examples
    const getInputExplanation = () => {
        if (!problem) return null;

        const example = problem.examples?.[0];
        if (!example) return null;

        return (
            <div className="input-breakdown">
                <h4>🔍 Input Breakdown for This Problem</h4>
                <div className="breakdown-visual">
                    <div className="input-raw">
                        <span className="label">Raw Input:</span>
                        <code>{example.input}</code>
                    </div>
                    <div className="arrow">↓</div>
                    <div className="input-parsed">
                        <span className="label">What it means:</span>
                        <p>{example.explanation || "This is the data your program receives"}</p>
                    </div>
                    <div className="arrow">↓</div>
                    <div className="expected-output">
                        <span className="label">Expected Output:</span>
                        <code>{example.output}</code>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="leetcode-guide">
            <div className="guide-header" onClick={() => setIsExpanded(!isExpanded)}>
                <h3>🎓 How to Solve Like LeetCode/HackerRank</h3>
                <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded ? '▼' : '▶'}
                </span>
            </div>

            {isExpanded && (
                <div className="guide-content">
                    {/* Step Navigation */}
                    <div className="step-nav">
                        {learningSteps.map((step, idx) => (
                            <button
                                key={idx}
                                className={`step-btn ${activeStep === idx ? 'active' : ''} ${idx < activeStep ? 'completed' : ''}`}
                                onClick={() => setActiveStep(idx)}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    {/* Current Step Content */}
                    <div className="step-content">
                        <h4>{learningSteps[activeStep].title}</h4>
                        <div className="step-body">
                            {learningSteps[activeStep].content}
                        </div>
                        <div className="step-tip">
                            💡 <strong>Pro Tip:</strong> {learningSteps[activeStep].tip}
                        </div>
                    </div>

                    {/* Step Navigation Buttons */}
                    <div className="step-actions">
                        <button
                            className="prev-btn"
                            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                            disabled={activeStep === 0}
                        >
                            ← Previous
                        </button>
                        <button
                            className="next-btn"
                            onClick={() => setActiveStep(Math.min(learningSteps.length - 1, activeStep + 1))}
                            disabled={activeStep === learningSteps.length - 1}
                        >
                            Next →
                        </button>
                    </div>

                    {/* Problem-Specific Input Breakdown */}
                    {getInputExplanation()}

                    {/* LeetCode vs This Platform Comparison */}
                    <div className="platform-comparison">
                        <h4>📊 What You Learn Here Works on LeetCode!</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>CodeQuest</th>
                                    <th>LeetCode/HackerRank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Reading Input</td>
                                    <td>✅ Simplified</td>
                                    <td>✅ Same Pattern</td>
                                </tr>
                                <tr>
                                    <td>Algorithm Logic</td>
                                    <td>✅ With Hints</td>
                                    <td>✅ Same Logic</td>
                                </tr>
                                <tr>
                                    <td>Output Format</td>
                                    <td>✅ Guided</td>
                                    <td>✅ Same Format</td>
                                </tr>
                                <tr>
                                    <td>Test Cases</td>
                                    <td>✅ Explained</td>
                                    <td>✅ Ready to Use</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LeetCodeGuide;
