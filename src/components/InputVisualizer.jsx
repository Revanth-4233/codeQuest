import { useState, useEffect } from 'react';
import './InputVisualizer.css';

function InputVisualizer({ problem, isActive }) {
    const [step, setStep] = useState(0);
    const [showOutput, setShowOutput] = useState(false);

    // Example visualization data based on problem
    const getVisualizationData = () => {
        if (!problem) return { inputs: [], outputs: [], variables: [] };

        // Default visualization based on problem examples
        const example = problem.examples?.[0] || {};

        return {
            inputs: [
                { line: 1, raw: example.input || 'input_value', parsed: 'Reading input...' },
            ],
            outputs: [
                { value: example.output || 'output_value', explanation: example.explanation || '' }
            ],
            variables: [],
        };
    };

    const vizData = getVisualizationData();

    useEffect(() => {
        if (isActive && step < vizData.inputs.length) {
            const timer = setTimeout(() => {
                setStep(s => s + 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (step >= vizData.inputs.length && !showOutput) {
            const timer = setTimeout(() => {
                setShowOutput(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isActive, step, vizData.inputs.length, showOutput]);

    const resetVisualization = () => {
        setStep(0);
        setShowOutput(false);
    };

    if (!problem) return null;

    return (
        <div className="input-visualizer">
            <div className="viz-header">
                <h4>🎬 Input/Output Visualization</h4>
                <button className="viz-reset" onClick={resetVisualization}>
                    🔄 Replay
                </button>
            </div>

            <div className="viz-content">
                {/* Input Section */}
                <div className="viz-section input-section">
                    <h5>📥 Input Processing</h5>
                    <div className="input-steps">
                        {problem.examples?.map((example, idx) => (
                            <div
                                key={idx}
                                className={`input-step ${step > idx ? 'active' : ''}`}
                                style={{ animationDelay: `${idx * 0.3}s` }}
                            >
                                <div className="step-number">Step {idx + 1}</div>
                                <div className="step-content">
                                    <div className="input-raw">
                                        <span className="label">Input:</span>
                                        <code className="value">{example.input}</code>
                                    </div>
                                    {example.explanation && (
                                        <div className="input-explanation">
                                            💡 {example.explanation}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Processing Animation - only show during processing, before output */}
                <div className={`viz-processing ${step > 0 && !showOutput ? 'active' : ''}`}>
                    <div className="processing-icon">⚙️</div>
                    <div className="processing-text">Processing...</div>
                    <div className="processing-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>

                {/* Output Section */}
                <div className={`viz-section output-section ${showOutput ? 'active' : ''}`}>
                    <h5>📤 Output Generated</h5>
                    <div className="output-display">
                        {problem.examples?.map((example, idx) => (
                            <div
                                key={idx}
                                className="output-box"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                <div className="output-arrow">→</div>
                                <code className="output-value">{example.output}</code>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Variable Tracking (for problems with variables) */}
                {problem.examples?.[0]?.input && problem.examples[0].input !== 'No input needed' && (
                    <div className={`viz-section variables-section ${step > 0 ? 'active' : ''}`}>
                        <h5>📊 Variable State</h5>
                        <div className="variables-grid">
                            {problem.examples?.[0]?.input.split(',').map((val, idx) => (
                                <div key={idx} className="variable-box">
                                    <span className="var-name">var{idx + 1}</span>
                                    <span className="var-value">{val.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="viz-footer">
                <span className="viz-tip">
                    💡 This visualization helps you understand how input is processed
                </span>
            </div>
        </div>
    );
}

export default InputVisualizer;
