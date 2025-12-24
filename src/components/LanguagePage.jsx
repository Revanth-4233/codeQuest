import { useState, useMemo } from 'react';
import { languageSpecificProblems } from '../data/problems';
import './LanguagePage.css';

function LanguagePage({ languageId, problems, onSelectProblem, solvedProblems, onBack }) {
    // Language and skill category info
    const languageInfo = {
        // Programming Languages
        python: { name: 'Python', icon: '🐍', color: '#3776ab', type: 'language' },
        java: { name: 'Java', icon: '☕', color: '#f89820', type: 'language' },
        javascript: { name: 'JavaScript', icon: '🟨', color: '#f7df1e', type: 'language' },
        cpp: { name: 'C++', icon: '⚡', color: '#00599C', type: 'language' },
        c: { name: 'C', icon: '🔧', color: '#555555', type: 'language' },
        ruby: { name: 'Ruby', icon: '💎', color: '#CC342D', type: 'language' },
        go: { name: 'Go', icon: '🐹', color: '#00ADD8', type: 'language' },
        typescript: { name: 'TypeScript', icon: '📘', color: '#3178c6', type: 'language' },
        // Skill Categories
        algorithms: { name: 'Algorithms', icon: '🧮', color: '#8b5cf6', type: 'skill', keywords: ['algorithm', 'sorting', 'searching', 'recursion', 'dynamic'] },
        'data-structures': { name: 'Data Structures', icon: '📊', color: '#06b6d4', type: 'skill', keywords: ['array', 'linked list', 'stack', 'queue', 'tree', 'graph', 'hash', 'data structure'] },
        mathematics: { name: 'Mathematics', icon: '📐', color: '#f59e0b', type: 'skill', keywords: ['math', 'number', 'prime', 'fibonacci', 'factorial', 'calculation'] },
        databases: { name: 'Databases', icon: '🗄️', color: '#22c55e', type: 'skill', keywords: ['sql', 'database', 'query', 'table', 'join', 'select'] },
        ai: { name: 'AI / ML', icon: '🤖', color: '#ec4899', type: 'skill', keywords: ['ai', 'ml', 'machine learning', 'neural', 'deep learning', 'classification'] },
        regex: { name: 'Regex', icon: '🔍', color: '#ef4444', type: 'skill', keywords: ['regex', 'regular expression', 'pattern', 'match', 'search'] }
    };

    const topics = [
        { id: 'variables', name: 'Variables & Data Types', icon: '📦', keywords: ['variables', 'data types', 'getting started', 'basic'] },
        { id: 'loops', name: 'Loops', icon: '🔄', keywords: ['loops', 'iteration', 'for', 'while'] },
        { id: 'conditions', name: 'Conditionals', icon: '🔀', keywords: ['conditions', 'conditionals', 'if', 'comparisons'] },
        { id: 'functions', name: 'Functions', icon: '⚙️', keywords: ['functions', 'methods'] },
        { id: 'arrays', name: 'Arrays & Lists', icon: '📊', keywords: ['arrays', 'lists', 'array', 'list'] },
        { id: 'strings', name: 'Strings', icon: '📝', keywords: ['strings', 'string', 'text'] },
        { id: 'recursion', name: 'Recursion', icon: '🔁', keywords: ['recursion', 'recursive'] },
    ];

    // Filter states - start with all unchecked (show all)
    const [statusFilters, setStatusFilters] = useState({ solved: false, unsolved: false });
    const [difficultyFilters, setDifficultyFilters] = useState({ easy: false, medium: false, hard: false });
    const [topicFilters, setTopicFilters] = useState({});

    const lang = languageInfo[languageId] || { name: languageId, icon: '💻', color: '#6366f1', type: 'language' };

    // Get problems based on whether it's a language or skill category
    const languageProblems = useMemo(() => {
        // First, get language-specific problems from the dedicated array
        const specificProblems = languageSpecificProblems.filter(p => p.language === languageId);

        if (specificProblems.length > 0) {
            // If there are language-specific problems, return them
            return specificProblems;
        }

        if (lang.type === 'skill' && lang.keywords) {
            // For skill categories, filter by keywords in general problems
            const fromGeneral = problems.filter(p => {
                const categoryLower = (p.category || '').toLowerCase();
                const titleLower = (p.title || '').toLowerCase();
                const descLower = (p.description || '').toLowerCase();
                return lang.keywords.some(kw =>
                    categoryLower.includes(kw) ||
                    titleLower.includes(kw) ||
                    descLower.includes(kw)
                );
            });
            // Also get from language-specific problems
            const fromSpecific = languageSpecificProblems.filter(p => p.language === languageId);
            return [...fromSpecific, ...fromGeneral];
        } else {
            // For programming languages without specific problems, show general problems
            return problems.filter(p => !p.language);
        }
    }, [problems, languageId, lang]);

    // Check if any filter is active
    const isAnyStatusFilterActive = statusFilters.solved || statusFilters.unsolved;
    const isAnyDifficultyFilterActive = difficultyFilters.easy || difficultyFilters.medium || difficultyFilters.hard;
    const isAnyTopicFilterActive = Object.values(topicFilters).some(v => v);

    // Filter problems based on active filters
    const filteredProblems = useMemo(() => {
        return languageProblems.filter(problem => {
            // Status filter
            if (isAnyStatusFilterActive) {
                const isSolved = solvedProblems.includes(problem.id);
                if (statusFilters.solved && !isSolved) return false;
                if (statusFilters.unsolved && isSolved) return false;
                if (statusFilters.solved && statusFilters.unsolved) {
                    // Both checked = show all
                } else if (statusFilters.solved && !isSolved) {
                    return false;
                } else if (statusFilters.unsolved && isSolved) {
                    return false;
                }
            }

            // Difficulty filter
            if (isAnyDifficultyFilterActive) {
                if (!difficultyFilters[problem.difficulty]) return false;
            }

            // Topic filter
            if (isAnyTopicFilterActive) {
                const matchesTopic = Object.entries(topicFilters).some(([topicId, isActive]) => {
                    if (!isActive) return false;
                    const topic = topics.find(t => t.id === topicId);
                    if (!topic) return false;
                    const categoryLower = (problem.category || '').toLowerCase();
                    const topicLower = (problem.topic || '').toLowerCase();
                    return topic.keywords.some(kw =>
                        categoryLower.includes(kw) || topicLower.includes(kw)
                    );
                });
                if (!matchesTopic) return false;
            }

            return true;
        });
    }, [languageProblems, statusFilters, difficultyFilters, topicFilters, solvedProblems, isAnyStatusFilterActive, isAnyDifficultyFilterActive, isAnyTopicFilterActive]);

    const handleStatusFilter = (filter) => {
        setStatusFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
    };

    const handleDifficultyFilter = (filter) => {
        setDifficultyFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
    };

    const handleTopicFilter = (topicId) => {
        setTopicFilters(prev => ({ ...prev, [topicId]: !prev[topicId] }));
    };

    // Group filtered problems by category/topic for display
    const problemsByCategory = useMemo(() => {
        const grouped = {};
        filteredProblems.forEach(problem => {
            const category = problem.category || 'Other';
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(problem);
        });
        return grouped;
    }, [filteredProblems]);

    // Category icons mapping
    const categoryIcons = {
        'Getting Started': '🚀',
        'Basic Math': '➕',
        'Variables': '📦',
        'Comparisons': '⚖️',
        'Conditions': '🔀',
        'Loops': '🔄',
        'Strings': '📝',
        'Arrays': '📊',
        'Functions': '⚙️',
        'Recursion': '🔁',
        'Other': '📄'
    };

    return (
        <div className="language-page">
            {/* Header */}
            <div className="lang-page-header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Skills
                </button>
                <div className="lang-title">
                    <span className="lang-icon" style={{ background: `${lang.color}20` }}>
                        {lang.icon}
                    </span>
                    <h1>{lang.name}</h1>
                </div>
                <div className="lang-stats">
                    <div className="lang-stat">
                        <span className="stat-num">{filteredProblems.length}</span>
                        <span className="stat-text">Problems</span>
                    </div>
                    <div className="lang-stat">
                        <span className="stat-num">{filteredProblems.filter(p => solvedProblems.includes(p.id)).length}</span>
                        <span className="stat-text">Solved</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="lang-content">
                {/* Sidebar */}
                <aside className="lang-sidebar">
                    <div className="filter-section">
                        <h3>STATUS</h3>
                        <label className="filter-option">
                            <input
                                type="checkbox"
                                checked={statusFilters.solved}
                                onChange={() => handleStatusFilter('solved')}
                            /> Solved
                        </label>
                        <label className="filter-option">
                            <input
                                type="checkbox"
                                checked={statusFilters.unsolved}
                                onChange={() => handleStatusFilter('unsolved')}
                            /> Unsolved
                        </label>
                    </div>

                    <div className="filter-section">
                        <h3>DIFFICULTY</h3>
                        <label className="filter-option easy">
                            <input
                                type="checkbox"
                                checked={difficultyFilters.easy}
                                onChange={() => handleDifficultyFilter('easy')}
                            />
                            <span className="diff-dot"></span> Easy
                        </label>
                        <label className="filter-option medium">
                            <input
                                type="checkbox"
                                checked={difficultyFilters.medium}
                                onChange={() => handleDifficultyFilter('medium')}
                            />
                            <span className="diff-dot"></span> Medium
                        </label>
                        <label className="filter-option hard">
                            <input
                                type="checkbox"
                                checked={difficultyFilters.hard}
                                onChange={() => handleDifficultyFilter('hard')}
                            />
                            <span className="diff-dot"></span> Hard
                        </label>
                    </div>

                    <div className="filter-section">
                        <h3>TOPICS</h3>
                        {topics.map(topic => (
                            <label key={topic.id} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={topicFilters[topic.id] || false}
                                    onChange={() => handleTopicFilter(topic.id)}
                                />
                                {topic.icon} {topic.name}
                            </label>
                        ))}
                    </div>
                </aside>

                {/* Problem List */}
                <div className="problems-container">
                    {filteredProblems.length === 0 ? (
                        <div className="no-problems">
                            <span className="no-problems-icon">🔍</span>
                            <p>No problems found</p>
                            <span className="no-problems-hint">Try adjusting your filters</span>
                        </div>
                    ) : (
                        <>
                            {/* Problems grouped by Category/Topic */}
                            {Object.entries(problemsByCategory).map(([category, categoryProblems]) => (
                                <div key={category} className="difficulty-section">
                                    <h2 className="section-title topic">
                                        <span className="title-icon">{categoryIcons[category] || '📄'}</span>
                                        {category} <span className="count">({categoryProblems.length})</span>
                                    </h2>
                                    <div className="problems-grid">
                                        {categoryProblems.map((problem, index) => (
                                            <div
                                                key={problem.id}
                                                className={`problem-card ${solvedProblems.includes(problem.id) ? 'solved' : ''}`}
                                                onClick={() => onSelectProblem(problem)}
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                            >
                                                <div className="problem-card-header">
                                                    <span className={`difficulty-badge badge-${problem.difficulty}`}>
                                                        {problem.difficulty === 'easy' && '🌱 Easy'}
                                                        {problem.difficulty === 'medium' && '🔥 Medium'}
                                                        {problem.difficulty === 'hard' && '💪 Hard'}
                                                    </span>
                                                    {solvedProblems.includes(problem.id) && (
                                                        <span className="solved-indicator">✓ Solved</span>
                                                    )}
                                                </div>
                                                <h3 className="problem-title">{problem.title}</h3>
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
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LanguagePage;
