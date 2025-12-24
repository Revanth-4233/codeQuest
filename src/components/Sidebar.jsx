import { categories } from '../data/problems';
import './Sidebar.css';

function Sidebar({
    selectedCategory,
    onCategoryChange,
    selectedDifficulty,
    onDifficultyChange,
    solvedCount
}) {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">
                    <span>🎯</span> Difficulty
                </h3>
                <div className="difficulty-filters">
                    <button
                        className={`difficulty-btn all ${selectedDifficulty === 'all' ? 'active' : ''}`}
                        onClick={() => onDifficultyChange('all')}
                    >
                        All Levels
                    </button>
                    <button
                        className={`difficulty-btn easy ${selectedDifficulty === 'easy' ? 'active' : ''}`}
                        onClick={() => onDifficultyChange('easy')}
                    >
                        <span className="diff-dot"></span>
                        Easy
                        <span className="beginner-tag">Best for Beginners!</span>
                    </button>
                    <button
                        className={`difficulty-btn medium ${selectedDifficulty === 'medium' ? 'active' : ''}`}
                        onClick={() => onDifficultyChange('medium')}
                    >
                        <span className="diff-dot"></span>
                        Medium
                    </button>
                    <button
                        className={`difficulty-btn hard ${selectedDifficulty === 'hard' ? 'active' : ''}`}
                        onClick={() => onDifficultyChange('hard')}
                    >
                        <span className="diff-dot"></span>
                        Hard
                    </button>
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">
                    <span>📂</span> Categories
                </h3>
                <div className="category-list">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                            <span className="category-count">{category.count}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="sidebar-section progress-section">
                <h3 className="sidebar-title">
                    <span>📊</span> Your Progress
                </h3>
                <div className="progress-card">
                    <div className="progress-stats">
                        <div className="progress-stat">
                            <span className="stat-value">{solvedCount}</span>
                            <span className="stat-label">Solved</span>
                        </div>
                        <div className="progress-stat">
                            <span className="stat-value">10</span>
                            <span className="stat-label">Total</span>
                        </div>
                    </div>
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${(solvedCount / 10) * 100}%` }}
                        ></div>
                    </div>
                    <span className="progress-percent">{Math.round((solvedCount / 10) * 100)}% Complete</span>
                </div>
            </div>

            <div className="sidebar-section tips-section">
                <h3 className="sidebar-title">
                    <span>💡</span> Beginner Tips
                </h3>
                <div className="tips-card">
                    <p className="tip">• Start with <strong>Easy</strong> problems</p>
                    <p className="tip">• Read all hints before coding</p>
                    <p className="tip">• Don't worry about speed at first</p>
                    <p className="tip">• Learn from each solution</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
