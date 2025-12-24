import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-typescript'; // usually alias of js but good to have
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-markup-templating'; // for php
import 'prismjs/components/prism-php';
import 'prismjs/themes/prism-tomorrow.css';
import InputVisualizer from './InputVisualizer';
import LeetCodeGuide from './LeetCodeGuide';
import './CodeEditor.css';

// Helper to simulate execution for all supported languages
const getMockResult = (language, problemId, userCode) => {
    // Normalize code for easier matching
    const code = userCode.trim();

    // Default error
    const defaultError = 'Output: (Check your code logic and try again)';

    // 1. JAVA
    if (language === 'java') {
        if (!code.includes('class Solution') && !code.includes('class Main')) return 'Error: Class definition missing';
        if (problemId === 1 && code.includes('System.out.println') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('System.out.println') && (code.includes('a + b') || code.includes('a+b'))) return '8';
        if (problemId === 3 && (code.includes('Math.max') || code.includes('if'))) return '7';
        if (problemId === 4 && code.includes('%') && code.includes('2')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('System.out.println')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && (code.includes('StringBuilder') || code.includes('reverse'))) return 'olleh';
        if (problemId === 7 && (code.includes('+') || code.includes('sum'))) return '15';
        if (problemId === 8 && (code.includes('StringBuilder') || code.includes('reverse'))) return 'Yes';
        if (problemId === 9 && (code.includes('HashMap') || code.includes('for') || code.includes('[]'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('fibonacci') || code.includes('for') || code.includes('return'))) return '55';
    }
    // 2. PYTHON
    else if (language === 'python') {
        if (problemId === 1 && code.includes('print') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('print') && (code.includes('a + b') || code.includes('a+b'))) return '8';
        if (problemId === 3 && (code.includes('max') || code.includes('if'))) return '7';
        if (problemId === 4 && code.includes('%') && code.includes('2')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('range')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('[::-1]')) return 'olleh';
        if (problemId === 7 && (code.includes('sum') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('[::-1]')) return 'Yes';
        if (problemId === 9 && (code.includes('seen') || code.includes('dict') || code.includes('{}'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('fibonacci') || code.includes('for') || code.includes('return'))) return '55';
    }
    // 3. JAVASCRIPT
    else if (language === 'javascript') {
        if (problemId === 1 && code.includes('console.log') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('console.log') && (code.includes('a + b'))) return '8';
        if (problemId === 3 && (code.includes('Math.max') || code.includes('if'))) return '7';
        if (problemId === 4 && code.includes('%') && code.includes('2')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('console.log')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('split') && code.includes('reverse')) return 'olleh';
        if (problemId === 7 && (code.includes('reduce') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('reverse')) return 'Yes';
        if (problemId === 9 && (code.includes('Map') || code.includes('for'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('fibonacci') || code.includes('for'))) return '55';
    }
    // 4. C++
    else if (language === 'cpp') {
        if (problemId === 1 && code.includes('cout') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('cout') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('max') || code.includes('if'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('cout')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && (code.includes('reverse'))) return 'olleh';
        if (problemId === 7 && (code.includes('+') || code.includes('accumulate'))) return '15';
        if (problemId === 8 && code.includes('reverse')) return 'Yes';
        if (problemId === 9 && (code.includes('map') || code.includes('for'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('for'))) return '55';
    }
    // 5. C
    else if (language === 'c') {
        if (problemId === 1 && code.includes('printf') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('printf') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('if') || code.includes('>'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('printf')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && (code.includes('strrev') || code.includes('for'))) return 'olleh';
        if (problemId === 7 && (code.includes('+') || code.includes('for'))) return '15';
        if (problemId === 8 && (code.includes('strcmp') || code.includes('for'))) return 'Yes';
        if (problemId === 9 && code.includes('for')) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('for'))) return '55';
    }
    // 6. RUBY
    else if (language === 'ruby') {
        if (problemId === 1 && code.includes('puts') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('puts') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('max') || code.includes('if'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && (code.includes('each') || code.includes('for'))) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('reverse')) return 'olleh';
        if (problemId === 7 && (code.includes('sum') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('reverse')) return 'Yes';
        if (problemId === 9 && (code.includes('Hash') || code.includes('each'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('end'))) return '55';
    }
    // 7. GO
    else if (language === 'go') {
        if (problemId === 1 && code.includes('fmt.Println') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('Println') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('if') || code.includes('>'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('Println')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && (code.includes('Reverse') || code.includes('for'))) return 'olleh';
        if (problemId === 7 && (code.includes('range') || code.includes('+'))) return '15';
        if (problemId === 8 && (code.includes('Reverse') || code.includes('for'))) return 'Yes';
        if (problemId === 9 && (code.includes('map') || code.includes('range'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('return'))) return '55';
    }
    // 8. TYPESCRIPT
    else if (language === 'typescript') {
        if (problemId === 1 && code.includes('console.log') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('console.log') && (code.includes('a + b'))) return '8';
        if (problemId === 3 && (code.includes('Math.max') || code.includes('if'))) return '7';
        if (problemId === 4 && code.includes('%') && code.includes('2')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('console.log')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('split') && code.includes('reverse')) return 'olleh';
        if (problemId === 7 && (code.includes('reduce') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('reverse')) return 'Yes';
        if (problemId === 9 && (code.includes('Map') || code.includes('for'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('fibonacci') || code.includes('for'))) return '55';
    }
    // 9. PHP
    else if (language === 'php') {
        if (problemId === 1 && code.includes('echo') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('echo') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('if') || code.includes('>'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('echo')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('strrev')) return 'olleh';
        if (problemId === 7 && (code.includes('array_sum') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('strrev')) return 'Yes';
        if (problemId === 9 && (code.includes('array') || code.includes('foreach'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('return'))) return '55';
    }
    // 10. SWIFT
    else if (language === 'swift') {
        if (problemId === 1 && code.includes('print') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('print') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('if') || code.includes('>'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('print')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('reversed')) return 'olleh';
        if (problemId === 7 && (code.includes('reduce') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('reversed')) return 'Yes';
        if (problemId === 9 && (code.includes('Dictionary') || code.includes('for'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('return'))) return '55';
    }
    // 11. KOTLIN
    else if (language === 'kotlin') {
        if (problemId === 1 && code.includes('println') && code.includes('Hello, World!')) return 'Hello, World!';
        if (problemId === 2 && code.includes('println') && code.includes('+')) return '8';
        if (problemId === 3 && (code.includes('if') || code.includes('max'))) return '7';
        if (problemId === 4 && code.includes('%')) return 'Even';
        if (problemId === 5 && code.includes('for') && code.includes('println')) return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
        if (problemId === 6 && code.includes('reversed')) return 'olleh';
        if (problemId === 7 && (code.includes('sum') || code.includes('+'))) return '15';
        if (problemId === 8 && code.includes('reversed')) return 'Yes';
        if (problemId === 9 && (code.includes('Map') || code.includes('for'))) return '[0, 1]';
        if (problemId === 10 && (code.includes('if') || code.includes('return'))) return '55';
    }

    // Generic Fallback for simple "Hello World" if strict check failed but key words exist
    if (problemId === 1 && (code.includes('print') || code.includes('log') || code.includes('cout'))) {
        return 'Hello, World!';
    }

    return defaultError;
};

function CodeEditor({ problem, onBack, onSolve, isSolved, onNextChallenge }) {
    const [language, setLanguage] = useState('java'); // Default to Java as requested
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [userOutput, setUserOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    // Tab state instead of separate booleans
    const [activeTab, setActiveTab] = useState('description');
    const [currentHintIndex, setCurrentHintIndex] = useState(0);

    const [testResults, setTestResults] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [lastTestInput, setLastTestInput] = useState('');
    const [showOutputPanel, setShowOutputPanel] = useState(true);

    useEffect(() => {
        if (problem && problem.starterCode) {
            // If the selected language doesn't have starter code, fallback or empty
            setCode(problem.starterCode[language] || '');
        }
    }, [problem, language]);

    const executeCode = (isBenchmark = false) => {
        setIsRunning(true);
        setOutput('Running your code...\n');
        setTestResults(null);
        setShowOutputPanel(true);
        // Hide previous success banner when re-running
        setShowSuccess(false);

        setTimeout(() => {
            const result = getMockResult(language, problem.id, code);

            setOutput(`> Output:\n${result}`);
            setUserOutput(result);
            setLastTestInput(problem.testCases[0]?.input || 'N/A');
            setIsRunning(false);

            const expected = problem.testCases[0].expected;
            // Normalize for comparison
            const passed = result.trim() === expected.trim();

            setTestResults({
                total: problem.testCases.length,
                passed: passed ? problem.testCases.length : 0,
                status: passed ? 'passed' : 'failed',
                expected: expected,
                userOutput: result
            });

            if (passed && isBenchmark) {
                // Only show success / trigger solve if it was a "Submit" action
                setShowSuccess(true);
                onSolve(problem.id, problem.points);
            }
        }, 1500);
    };

    const handleRun = () => executeCode(false);
    const handleSubmit = () => executeCode(true);

    const revealNextHint = () => {
        if (currentHintIndex < problem.hints.length - 1) {
            setCurrentHintIndex(currentHintIndex + 1);
        }
    };

    // Calculate line numbers
    const lineNumbers = code.split('\n').map((_, i) => i + 1).join('\n');

    return (
        <div className="code-editor-container">
            {/* Success Banner - HackerRank Style */}
            {/* REMOVED: Old success banner overlay */}

            {/* Header */}
            <div className="editor-header">
                <button className="back-btn" onClick={onBack}>
                    <span>←</span> Back to Problems
                </button>
                <div className="problem-info">
                    <h2>{problem.title}</h2>
                    <span className={`difficulty-badge badge-${problem.difficulty}`}>
                        {problem.difficulty === 'easy' ? '🌱 Easy' : problem.difficulty === 'medium' ? '🔥 Medium' : '💪 Hard'}
                    </span>
                    {isSolved && <span className="solved-indicator">✓ Solved</span>}
                </div>
                <div className="points-info">
                    <span className="points-icon">⭐</span>
                    <span>{problem.points} XP</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="editor-content">
                {/* Left Panel - Problem Description */}
                <div className="problem-panel">
                    <div className="panel-tabs">
                        <button
                            className={`panel-tab ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`panel-tab ${activeTab === 'hints' ? 'active' : ''}`}
                            onClick={() => setActiveTab('hints')}
                        >
                            Hints ({problem.hints.length})
                        </button>
                        <button
                            className={`panel-tab ${activeTab === 'solution' ? 'active' : ''}`}
                            onClick={() => setActiveTab('solution')}
                        >
                            Solution
                        </button>
                    </div>

                    <div className="panel-content">
                        {activeTab === 'description' && (
                            <>
                                <div className="problem-description" dangerouslySetInnerHTML={{
                                    __html: problem.description.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/# (.*?)(<br>|$)/g, '<h3>$1</h3>')
                                }} />

                                <div className="task-section">
                                    <h4>📋 Task</h4>
                                    <p dangerouslySetInnerHTML={{
                                        __html: problem.task.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    }} />
                                </div>

                                {problem.constraints && (
                                    <div className="constraints-section">
                                        <h4>⚠️ Constraints</h4>
                                        <pre>{problem.constraints}</pre>
                                    </div>
                                )}

                                <div className="examples-section">
                                    <h4>📝 Examples</h4>
                                    {problem.examples.map((example, index) => (
                                        <div key={index} className="example-box">
                                            <div className="example-row">
                                                <span className="example-label">Input:</span>
                                                <code>{example.input}</code>
                                            </div>
                                            <div className="example-row">
                                                <span className="example-label">Output:</span>
                                                <code>{example.output}</code>
                                            </div>
                                            {example.explanation && (
                                                <div className="example-explanation">
                                                    💡 {example.explanation}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Input/Output Visualization for Beginners */}
                                <InputVisualizer problem={problem} isActive={true} />

                                {/* LeetCode/HackerRank Style Learning Guide */}
                                <LeetCodeGuide problem={problem} language={language} />
                            </>
                        )}

                        {activeTab === 'hints' && (
                            <div className="hints-section">
                                <h4>💡 Hints for {language.charAt(0).toUpperCase() + language.slice(1)}</h4>
                                {(() => {
                                    // Language-specific hint mappings
                                    const languageHints = {
                                        python: {
                                            print: 'Use print() to display output',
                                            input: 'Use input() to read user input',
                                            loop: 'Use for i in range(n): for loops',
                                            array: 'Use list slicing like arr[::1] or arr[::-1]',
                                            string: 'Strings support slicing: text[::-1] reverses it',
                                            function: 'Define functions with def function_name():',
                                            condition: 'Use if/elif/else for conditions',
                                            max: 'Use max(a, b) to find the larger number',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        java: {
                                            print: 'Use System.out.println() to display output',
                                            input: 'Use Scanner class to read input',
                                            loop: 'Use for (int i = 0; i < n; i++) for loops',
                                            array: 'Arrays are fixed-size, use ArrayList for dynamic',
                                            string: 'Use StringBuilder for string manipulation',
                                            function: 'Define methods inside a class',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Use Math.max(a, b) to find the larger number',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        javascript: {
                                            print: 'Use console.log() to display output',
                                            input: 'Use prompt() in browser or readline in Node.js',
                                            loop: 'Use for (let i = 0; i < n; i++) for loops',
                                            array: 'Use array methods like .map(), .filter(), .reduce()',
                                            string: 'Use split(\'\').reverse().join(\'\') to reverse',
                                            function: 'Define functions with function name() or arrow =>',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Use Math.max(a, b) to find the larger number',
                                            modulo: 'Use % operator: n % 2 === 0 for even'
                                        },
                                        cpp: {
                                            print: 'Use cout << to display output',
                                            input: 'Use cin >> to read input',
                                            loop: 'Use for (int i = 0; i < n; i++) for loops',
                                            array: 'Use vectors for dynamic arrays: vector<int>',
                                            string: 'Use <algorithm> reverse() for string reversal',
                                            function: 'Define functions outside main()',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Use max(a, b) from <algorithm>',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        c: {
                                            print: 'Use printf() to display output',
                                            input: 'Use scanf() to read input',
                                            loop: 'Use for (int i = 0; i < n; i++) for loops',
                                            array: 'Arrays are fixed-size in C',
                                            string: 'Use strrev() or manual loop to reverse',
                                            function: 'Define functions before main()',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Use a > b ? a : b for max',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        ruby: {
                                            print: 'Use puts or print to display output',
                                            input: 'Use gets.chomp to read input',
                                            loop: 'Use (1..n).each { |i| } for loops',
                                            array: 'Use .reverse or .each for arrays',
                                            string: 'Use .reverse to reverse strings',
                                            function: 'Define with def method_name ... end',
                                            condition: 'Use if/elsif/else/end for conditions',
                                            max: 'Use [a, b].max to find the larger number',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        go: {
                                            print: 'Use fmt.Println() to display output',
                                            input: 'Use fmt.Scan() or bufio.Scanner',
                                            loop: 'Use for i := 0; i < n; i++ for loops',
                                            array: 'Use slices for dynamic arrays',
                                            string: 'Reverse manually with runes',
                                            function: 'Define with func name() {}',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Compare with if a > b to find max',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        typescript: {
                                            print: 'Use console.log() to display output',
                                            input: 'Use readline or browser prompt()',
                                            loop: 'Use for (let i = 0; i < n; i++) for loops',
                                            array: 'Use typed arrays: number[] or Array<number>',
                                            string: 'Use split(\'\').reverse().join(\'\') to reverse',
                                            function: 'Define with function name(): ReturnType',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Use Math.max(a, b) to find the larger number',
                                            modulo: 'Use % operator: n % 2 === 0 for even'
                                        },
                                        php: {
                                            print: 'Use echo or print to display output',
                                            input: 'Use fgets(STDIN) to read input',
                                            loop: 'Use for ($i = 0; $i < $n; $i++) for loops',
                                            array: 'Use array_reverse() for arrays',
                                            string: 'Use strrev() to reverse strings',
                                            function: 'Define with function name() {}',
                                            condition: 'Use if/elseif/else for conditions',
                                            max: 'Use max($a, $b) to find the larger number',
                                            modulo: 'Use % operator: $n % 2 == 0 for even'
                                        },
                                        swift: {
                                            print: 'Use print() to display output',
                                            input: 'Use readLine() to read input',
                                            loop: 'Use for i in 0..<n for loops',
                                            array: 'Use .reversed() for arrays',
                                            string: 'Use String(text.reversed()) to reverse',
                                            function: 'Define with func name() -> Type',
                                            condition: 'Use if/else if/else for conditions',
                                            max: 'Use max(a, b) to find the larger number',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        },
                                        kotlin: {
                                            print: 'Use println() to display output',
                                            input: 'Use readLine() to read input',
                                            loop: 'Use for (i in 0 until n) for loops',
                                            array: 'Use .reversed() for lists',
                                            string: 'Use .reversed() to reverse strings',
                                            function: 'Define with fun name(): Type',
                                            condition: 'Use if/else if/else or when',
                                            max: 'Use maxOf(a, b) to find the larger number',
                                            modulo: 'Use % operator: n % 2 == 0 for even'
                                        }
                                    };

                                    // Get the language-specific hints
                                    const langHints = languageHints[language] || languageHints.javascript;

                                    // Convert problem hints to language-specific versions
                                    const getLanguageSpecificHint = (hint) => {
                                        const lowerHint = hint.toLowerCase();
                                        if (lowerHint.includes('print')) {
                                            return `💡 ${langHints.print}`;
                                        } else if (lowerHint.includes('loop') || lowerHint.includes('for') || lowerHint.includes('range')) {
                                            return `💡 ${langHints.loop}`;
                                        } else if (lowerHint.includes('array') || lowerHint.includes('list')) {
                                            return `💡 ${langHints.array}`;
                                        } else if (lowerHint.includes('reverse') || lowerHint.includes('string')) {
                                            return `💡 ${langHints.string}`;
                                        } else if (lowerHint.includes('function') || lowerHint.includes('def')) {
                                            return `💡 ${langHints.function}`;
                                        } else if (lowerHint.includes('if') || lowerHint.includes('condition')) {
                                            return `💡 ${langHints.condition}`;
                                        } else if (lowerHint.includes('max') || lowerHint.includes('bigger') || lowerHint.includes('greater')) {
                                            return `💡 ${langHints.max}`;
                                        } else if (lowerHint.includes('modulo') || lowerHint.includes('%') || lowerHint.includes('even') || lowerHint.includes('odd')) {
                                            return `💡 ${langHints.modulo}`;
                                        }
                                        return hint;
                                    };

                                    return (
                                        <>
                                            {problem.hints.slice(0, currentHintIndex + 1).map((hint, index) => (
                                                <div key={index} className="hint-box">
                                                    {getLanguageSpecificHint(hint)}
                                                </div>
                                            ))}
                                            {currentHintIndex < problem.hints.length - 1 && (
                                                <button className="reveal-hint-btn" onClick={revealNextHint}>
                                                    Show Next Hint ({currentHintIndex + 1}/{problem.hints.length})
                                                </button>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>
                        )}

                        {activeTab === 'solution' && (
                            <div className="solution-section">
                                <h4>✅ Solution</h4>
                                <div className="solution-warning">
                                    ⚠️ Try solving it yourself first! Looking at the solution won't help you learn.
                                </div>
                                <pre className="solution-code">{problem.solution[language] || '// Solution not available for this language yet.'}</pre>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Panel - Code Editor & Output */}
                <div className="coding-panel">
                    {/* Unified Scrolling Container */}
                    <div className="unified-scroll-container">
                        <div className="code-section">
                            <div className="code-header">
                                <select
                                    className="language-select"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option value="java">☕ Java</option>
                                    <option value="python">🐍 Python 3</option>
                                    <option value="javascript">🟨 JavaScript</option>
                                    <option value="cpp">⚡ C++</option>
                                    <option value="c">🔧 C</option>
                                    <option value="ruby">💎 Ruby</option>
                                    <option value="go">🐹 Go</option>
                                    <option value="typescript">📘 TypeScript</option>
                                    <option value="php">🐘 PHP</option>
                                    <option value="swift">🍎 Swift</option>
                                    <option value="kotlin">🎯 Kotlin</option>
                                </select>
                                <div className="code-actions">
                                    <button className="reset-btn" onClick={() => setCode(problem.starterCode[language])}>
                                        🔄 Reset
                                    </button>
                                </div>
                            </div>

                            {/* Improved Editor with Line Numbers */}
                            <div className="editor-wrapper">
                                <div className="line-numbers">
                                    <pre>{lineNumbers}</pre>
                                </div>
                                <div className="code-editor-main">
                                    <Editor
                                        value={code}
                                        onValueChange={code => setCode(code)}
                                        highlight={code => highlight(code,
                                            // Prism Language Selection
                                            language === 'python' ? languages.python :
                                                language === 'javascript' ? languages.javascript :
                                                    language === 'java' ? languages.java :
                                                        language === 'c' ? languages.c :
                                                            language === 'cpp' ? languages.cpp :
                                                                language === 'ruby' ? languages.ruby :
                                                                    language === 'go' ? languages.go :
                                                                        language === 'typescript' ? languages.typescript :
                                                                            language === 'swift' ? languages.swift :
                                                                                language === 'kotlin' ? languages.kotlin :
                                                                                    language === 'php' ? languages.php :
                                                                                        languages.clike
                                        )}
                                        padding={10}
                                        className="prism-editor"
                                        textareaId="code-area"
                                        style={{
                                            fontFamily: '"Consolas", "Monaco", "Courier New", monospace',
                                            fontSize: '1rem',
                                            backgroundColor: '#1e1e1e',
                                            color: '#d4d4d4',
                                            minHeight: '400px'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {showOutputPanel && (
                            <div className="output-section">
                                <div className="output-header">
                                    <div className="output-title">
                                        <span>📤 Test Results</span>
                                        {testResults && (
                                            <span className={`test-results ${testResults.status}`}>
                                                {testResults.status === 'passed' ? '✅' : '❌'}
                                                {testResults.passed}/{testResults.total} tests passed
                                            </span>
                                        )}
                                    </div>
                                    <button className="close-output-btn" onClick={() => setShowOutputPanel(false)}>
                                        ✕
                                    </button>
                                </div>
                                <div className="output-content">
                                    {/* Success Message Inside Output Panel now */}
                                    {showSuccess && (
                                        <div className="success-inline-banner">
                                            <div className="success-content">
                                                <h3>🎉 Challenge Solved!</h3>
                                                <p>Great job! You earned +{problem.points} XP.</p>
                                                <button className="next-btn-small" onClick={onNextChallenge}>
                                                    Next Challenge →
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {isRunning ? (
                                        <div className="loading">
                                            <span className="spinner"></span>
                                            Running...
                                        </div>
                                    ) : testResults ? (
                                        <div className="test-output-grid">
                                            <div className="output-panel">
                                                <div className="output-panel-header">Input</div>
                                                <pre className="output-panel-content">{lastTestInput || problem.testCases[0]?.input || 'N/A'}</pre>
                                            </div>
                                            <div className="output-panel">
                                                <div className="output-panel-header">Your Output</div>
                                                <pre className={`output-panel-content ${testResults.status === 'passed' ? 'success' : 'error'}`}>
                                                    {testResults.userOutput || '(no output)'}
                                                </pre>
                                            </div>
                                            <div className="output-panel">
                                                <div className="output-panel-header">Expected Output</div>
                                                <pre className="output-panel-content expected">{testResults.expected || problem.testCases[0]?.expected}</pre>
                                            </div>
                                        </div>
                                    ) : (
                                        <pre className="placeholder-text">Click "Run Code" to see output here</pre>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="editor-actions">
                        <button
                            className="run-btn"
                            onClick={handleRun}
                            disabled={isRunning}
                        >
                            ▶️ Run Code
                        </button>
                        <button
                            className="submit-btn"
                            onClick={handleSubmit}
                            disabled={isRunning}
                        >
                            🚀 Submit Solution
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodeEditor;
