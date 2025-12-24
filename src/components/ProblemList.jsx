import './ProblemList.css';

function ProblemList({ problems, onSelectProblem, solvedProblems }) {
    const getDifficultyClass = (difficulty) => {
        return `badge-${difficulty}`;
    };

    const getDifficultyLabel = (difficulty) => {
        if (difficulty === 'easy') return '🌱 Easy';
        if (difficulty === 'medium') return '🔥 Medium';
        return '💪 Hard';
    };

    return (
        <div className="problem-list">
            <div className="problem-list-header">
                <h2>Problems</h2>
                <span className="problem-count">{problems.length} problems</span>
            </div>

            <div className="problems-grid">
                {problems.map((problem, index) => (
                    <div
                        key={problem.id}
                        className={`problem-card ${solvedProblems.includes(problem.id) ? 'solved' : ''}`}
                        onClick={() => onSelectProblem(problem)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className="problem-card-header">
                            <span className={`difficulty-badge ${getDifficultyClass(problem.difficulty)}`}>
                                {getDifficultyLabel(problem.difficulty)}
                            </span>
                            {solvedProblems.includes(problem.id) && (
                                <span className="solved-badge">✓ Solved</span>
                            )}
                        </div>

                        <h3 className="problem-title">{problem.title}</h3>

                        <p className="problem-category">
                            <span className="category-icon">📁</span>
                            {problem.category}
                        </p>

                        <div className="problem-card-footer">
                            <div className="points-display">
                                <span className="points-icon">⭐</span>
                                <span className="points-value">{problem.points}</span>
                                <span className="points-label">XP</span>
                            </div>

                            <button className="solve-btn">
                                {solvedProblems.includes(problem.id) ? 'Review' : 'Solve Challenge'}
                                <span className="arrow">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {problems.length === 0 && (
                <div className="no-problems">
                    <span className="no-problems-icon">🔍</span>
                    <p>No problems found</p>
                    <span className="no-problems-hint">Try adjusting your filters</span>
                </div>
            )}
        </div>
    );
}

export default ProblemList;
