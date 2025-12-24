import { useState, useEffect } from 'react';
import dataService from '../services/DataService';
import './AdminPage.css';

function AdminPage({ onBack, isAdminUser = false }) {
    const [isAuthenticated, setIsAuthenticated] = useState(isAdminUser);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('add');
    const [problems, setProblems] = useState([]);
    const [stats, setStats] = useState(null);
    const [editingProblem, setEditingProblem] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState('');

    // Form state for new problem
    const [formData, setFormData] = useState({
        title: '',
        difficulty: 'easy',
        category: 'Functions',
        points: 20,
        description: '',
        task: '',
        constraints: '',
        hints: [''],
        examples: [{ input: '', output: '', explanation: '' }],
        starterCode: { python: '', javascript: '', java: '' },
        solution: { python: '', javascript: '', java: '' },
        testCases: [{ input: '', expected: '' }]
    });

    const categories = [
        'Getting Started', 'Variables', 'Loops', 'Conditions', 'Functions',
        'Arrays', 'Strings', 'Recursion', 'Patterns', 'Math Logic',
        'Geometry', 'Stacks', 'Basic Math', 'Comparisons'
    ];

    // Auto-authenticate if admin user from login
    useEffect(() => {
        if (isAdminUser) {
            setIsAuthenticated(true);
        }
    }, [isAdminUser]);

    useEffect(() => {
        if (isAuthenticated) {
            loadData();
        }
    }, [isAuthenticated]);

    const loadData = async () => {
        setIsLoading(true);
        try {
            const allProblems = await dataService.getAllProblemsAsync();
            const statistics = await dataService.getStatisticsAsync();
            setProblems(allProblems);
            setStats(statistics);
            setConnectionStatus(dataService.isUsingCloud() ? '☁️ Connected to Supabase' : '💾 Using Local Storage');
        } catch (err) {
            console.error('Error loading data:', err);
            setProblems(dataService.getAllProblems());
            setStats(dataService.getStatistics());
            setConnectionStatus('💾 Using Local Storage (offline)');
        }
        setIsLoading(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (dataService.verifyAdminPassword(password)) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid password. Default password is: admin123');
        }
    };

    const handleFormChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNestedChange = (field, lang, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: value }
        }));
    };

    const handleArrayChange = (field, index, value) => {
        setFormData(prev => {
            const arr = [...prev[field]];
            arr[index] = value;
            return { ...prev, [field]: arr };
        });
    };

    const handleExampleChange = (index, key, value) => {
        setFormData(prev => {
            const examples = [...prev.examples];
            examples[index] = { ...examples[index], [key]: value };
            return { ...prev, examples };
        });
    };

    const handleTestCaseChange = (index, key, value) => {
        setFormData(prev => {
            const testCases = [...prev.testCases];
            testCases[index] = { ...testCases[index], [key]: value };
            return { ...prev, testCases };
        });
    };

    const addHint = () => {
        setFormData(prev => ({ ...prev, hints: [...prev.hints, ''] }));
    };

    const addExample = () => {
        setFormData(prev => ({
            ...prev,
            examples: [...prev.examples, { input: '', output: '', explanation: '' }]
        }));
    };

    const addTestCase = () => {
        setFormData(prev => ({
            ...prev,
            testCases: [...prev.testCases, { input: '', expected: '' }]
        }));
    };

    const resetForm = () => {
        setFormData({
            title: '',
            difficulty: 'easy',
            category: 'Functions',
            points: 20,
            description: '',
            task: '',
            constraints: '',
            hints: [''],
            examples: [{ input: '', output: '', explanation: '' }],
            starterCode: { python: '', javascript: '', java: '' },
            solution: { python: '', javascript: '', java: '' },
            testCases: [{ input: '', expected: '' }]
        });
        setEditingProblem(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            setError('Title is required');
            return;
        }

        setIsLoading(true);
        const problemData = {
            ...formData,
            hints: formData.hints.filter(h => h.trim()),
            examples: formData.examples.filter(e => e.input.trim() || e.output.trim()),
            testCases: formData.testCases.filter(t => t.input.trim() || t.expected.trim())
        };

        let result;
        if (editingProblem) {
            result = await dataService.updateProblem(editingProblem.id, problemData);
            if (result.success) {
                setSuccessMessage('Problem updated successfully!');
            }
        } else {
            result = await dataService.addProblem(problemData);
            if (result.success) {
                setSuccessMessage('Problem added successfully! ID: ' + result.problem.id);
            }
        }

        if (result.success) {
            resetForm();
            await loadData();
            setTimeout(() => setSuccessMessage(''), 3000);
        } else {
            setError(result.error);
        }
        setIsLoading(false);
    };

    const handleEdit = (problem) => {
        if (!problem.isCustom) {
            setError('Static problems cannot be edited. You can only edit custom problems.');
            setTimeout(() => setError(''), 3000);
            return;
        }
        setFormData({
            title: problem.title || '',
            difficulty: problem.difficulty || 'easy',
            category: problem.category || 'Functions',
            points: problem.points || 20,
            description: problem.description || '',
            task: problem.task || '',
            constraints: problem.constraints || '',
            hints: problem.hints?.length ? problem.hints : [''],
            examples: problem.examples?.length ? problem.examples : [{ input: '', output: '', explanation: '' }],
            starterCode: problem.starterCode || { python: '', javascript: '', java: '' },
            solution: problem.solution || { python: '', javascript: '', java: '' },
            testCases: problem.testCases?.length ? problem.testCases : [{ input: '', expected: '' }]
        });
        setEditingProblem(problem);
        setActiveTab('add');
    };

    const handleDelete = (problem) => {
        if (!problem.isCustom) {
            setError('Static problems cannot be deleted.');
            setTimeout(() => setError(''), 3000);
            return;
        }
        setShowDeleteConfirm(problem);
    };

    const confirmDelete = async () => {
        if (showDeleteConfirm) {
            setIsLoading(true);
            const result = await dataService.deleteProblem(showDeleteConfirm.id);
            if (result.success) {
                setSuccessMessage('Problem deleted successfully!');
                await loadData();
                setTimeout(() => setSuccessMessage(''), 3000);
            } else {
                setError(result.error);
            }
            setShowDeleteConfirm(null);
            setIsLoading(false);
        }
    };

    const handleExport = () => {
        const json = dataService.exportProblems();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'codequest-problems.json';
        a.click();
    };

    // Login Screen
    if (!isAuthenticated) {
        return (
            <div className="admin-page">
                <div className="admin-login">
                    <div className="admin-login-card">
                        <h1>🔐 Admin Panel</h1>
                        <p>Enter password to access admin features</p>

                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter admin password"
                                className="admin-input"
                            />
                            {error && <div className="error-message">{error}</div>}
                            <button type="submit" className="admin-btn primary">
                                Login
                            </button>
                        </form>

                        <button className="admin-btn secondary" onClick={onBack}>
                            ← Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-page">
            {/* Header */}
            <div className="admin-header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Dashboard
                </button>
                <h1>🛠️ Admin Panel</h1>
                <div className="admin-actions">
                    <button className="admin-btn secondary" onClick={handleExport}>
                        📤 Export Problems
                    </button>
                </div>
            </div>

            {/* Connection Status */}
            {connectionStatus && (
                <div className={`connection-status ${dataService.isUsingCloud() ? 'cloud' : 'local'}`}>
                    {connectionStatus}
                </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            )}

            {/* Messages */}
            {successMessage && (
                <div className="success-message">{successMessage}</div>
            )}
            {error && (
                <div className="error-message">{error}</div>
            )}

            {/* Stats Cards */}
            {stats && (
                <div className="stats-row">
                    <div className="stat-card">
                        <span className="stat-icon">📚</span>
                        <div className="stat-info">
                            <span className="stat-value">{stats.totalProblems}</span>
                            <span className="stat-label">Total Problems</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">✨</span>
                        <div className="stat-info">
                            <span className="stat-value">{stats.customProblems}</span>
                            <span className="stat-label">Custom Problems</span>
                        </div>
                    </div>
                    <div className="stat-card easy">
                        <span className="stat-icon">🌱</span>
                        <div className="stat-info">
                            <span className="stat-value">{stats.byDifficulty.easy}</span>
                            <span className="stat-label">Easy</span>
                        </div>
                    </div>
                    <div className="stat-card medium">
                        <span className="stat-icon">🔥</span>
                        <div className="stat-info">
                            <span className="stat-value">{stats.byDifficulty.medium}</span>
                            <span className="stat-label">Medium</span>
                        </div>
                    </div>
                    <div className="stat-card hard">
                        <span className="stat-icon">💪</span>
                        <div className="stat-info">
                            <span className="stat-value">{stats.byDifficulty.hard}</span>
                            <span className="stat-label">Hard</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabs */}
            <div className="admin-tabs">
                <button
                    className={`tab ${activeTab === 'add' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('add'); resetForm(); }}
                >
                    ➕ Add Problem
                </button>
                <button
                    className={`tab ${activeTab === 'list' ? 'active' : ''}`}
                    onClick={() => setActiveTab('list')}
                >
                    📋 All Problems ({problems.length})
                </button>
            </div>

            {/* Add/Edit Problem Form */}
            {activeTab === 'add' && (
                <div className="admin-form-container">
                    <h2>{editingProblem ? '✏️ Edit Problem' : '➕ Add New Problem'}</h2>

                    <form onSubmit={handleSubmit} className="problem-form">
                        {/* Basic Info */}
                        <div className="form-section">
                            <h3>📝 Basic Information</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Title *</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => handleFormChange('title', e.target.value)}
                                        placeholder="e.g., Two Sum Problem"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Difficulty</label>
                                    <select
                                        value={formData.difficulty}
                                        onChange={(e) => handleFormChange('difficulty', e.target.value)}
                                    >
                                        <option value="easy">🌱 Easy</option>
                                        <option value="medium">🔥 Medium</option>
                                        <option value="hard">💪 Hard</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => handleFormChange('category', e.target.value)}
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Points (XP)</label>
                                    <input
                                        type="number"
                                        value={formData.points}
                                        onChange={(e) => handleFormChange('points', parseInt(e.target.value))}
                                        min="5"
                                        max="200"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="form-section">
                            <h3>📖 Problem Description</h3>
                            <div className="form-group">
                                <label>Description (Markdown supported)</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleFormChange('description', e.target.value)}
                                    placeholder="# Problem Title&#10;&#10;Describe the problem here..."
                                    rows={5}
                                />
                            </div>
                            <div className="form-group">
                                <label>Task</label>
                                <textarea
                                    value={formData.task}
                                    onChange={(e) => handleFormChange('task', e.target.value)}
                                    placeholder="What the user needs to do..."
                                    rows={3}
                                />
                            </div>
                            <div className="form-group">
                                <label>Constraints (optional)</label>
                                <textarea
                                    value={formData.constraints}
                                    onChange={(e) => handleFormChange('constraints', e.target.value)}
                                    placeholder="- 1 ≤ n ≤ 1000&#10;- Array contains integers"
                                    rows={2}
                                />
                            </div>
                        </div>

                        {/* Examples */}
                        <div className="form-section">
                            <h3>💡 Examples</h3>
                            {formData.examples.map((example, idx) => (
                                <div key={idx} className="example-group">
                                    <span className="example-label">Example {idx + 1}</span>
                                    <div className="form-row">
                                        <input
                                            placeholder="Input"
                                            value={example.input}
                                            onChange={(e) => handleExampleChange(idx, 'input', e.target.value)}
                                        />
                                        <input
                                            placeholder="Output"
                                            value={example.output}
                                            onChange={(e) => handleExampleChange(idx, 'output', e.target.value)}
                                        />
                                    </div>
                                    <input
                                        placeholder="Explanation (optional)"
                                        value={example.explanation}
                                        onChange={(e) => handleExampleChange(idx, 'explanation', e.target.value)}
                                    />
                                </div>
                            ))}
                            <button type="button" className="add-btn" onClick={addExample}>
                                + Add Example
                            </button>
                        </div>

                        {/* Hints */}
                        <div className="form-section">
                            <h3>🎯 Hints</h3>
                            {formData.hints.map((hint, idx) => (
                                <div key={idx} className="form-group">
                                    <input
                                        placeholder={`Hint ${idx + 1}`}
                                        value={hint}
                                        onChange={(e) => handleArrayChange('hints', idx, e.target.value)}
                                    />
                                </div>
                            ))}
                            <button type="button" className="add-btn" onClick={addHint}>
                                + Add Hint
                            </button>
                        </div>

                        {/* Starter Code */}
                        <div className="form-section">
                            <h3>💻 Starter Code</h3>
                            <div className="code-tabs">
                                {['python', 'javascript', 'java'].map(lang => (
                                    <div key={lang} className="form-group">
                                        <label>{lang.charAt(0).toUpperCase() + lang.slice(1)}</label>
                                        <textarea
                                            value={formData.starterCode[lang]}
                                            onChange={(e) => handleNestedChange('starterCode', lang, e.target.value)}
                                            placeholder={`# ${lang} starter code...`}
                                            rows={4}
                                            className="code-textarea"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="form-section">
                            <h3>✅ Solution</h3>
                            <div className="code-tabs">
                                {['python', 'javascript', 'java'].map(lang => (
                                    <div key={lang} className="form-group">
                                        <label>{lang.charAt(0).toUpperCase() + lang.slice(1)}</label>
                                        <textarea
                                            value={formData.solution[lang]}
                                            onChange={(e) => handleNestedChange('solution', lang, e.target.value)}
                                            placeholder={`# ${lang} solution...`}
                                            rows={4}
                                            className="code-textarea"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Test Cases */}
                        <div className="form-section">
                            <h3>🧪 Test Cases</h3>
                            {formData.testCases.map((tc, idx) => (
                                <div key={idx} className="form-row">
                                    <input
                                        placeholder="Input"
                                        value={tc.input}
                                        onChange={(e) => handleTestCaseChange(idx, 'input', e.target.value)}
                                    />
                                    <input
                                        placeholder="Expected Output"
                                        value={tc.expected}
                                        onChange={(e) => handleTestCaseChange(idx, 'expected', e.target.value)}
                                    />
                                </div>
                            ))}
                            <button type="button" className="add-btn" onClick={addTestCase}>
                                + Add Test Case
                            </button>
                        </div>

                        {/* Submit */}
                        <div className="form-actions">
                            <button type="submit" className="admin-btn primary">
                                {editingProblem ? '💾 Update Problem' : '➕ Add Problem'}
                            </button>
                            {editingProblem && (
                                <button type="button" className="admin-btn secondary" onClick={resetForm}>
                                    Cancel Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            )}

            {/* Problems List */}
            {activeTab === 'list' && (
                <div className="problems-list-container">
                    <h2>📋 All Problems</h2>
                    <div className="problems-table">
                        <div className="table-header">
                            <span>ID</span>
                            <span>Title</span>
                            <span>Category</span>
                            <span>Difficulty</span>
                            <span>Type</span>
                            <span>Actions</span>
                        </div>
                        {problems.map(problem => (
                            <div key={problem.id} className="table-row">
                                <span className="id-cell">{problem.id}</span>
                                <span className="title-cell">{problem.title}</span>
                                <span className="category-cell">{problem.category}</span>
                                <span className={`difficulty-cell ${problem.difficulty}`}>
                                    {problem.difficulty}
                                </span>
                                <span className={`type-cell ${problem.isCustom ? 'custom' : 'static'}`}>
                                    {problem.isCustom ? '✨ Custom' : '📦 Static'}
                                </span>
                                <span className="actions-cell">
                                    {problem.isCustom ? (
                                        <>
                                            <button
                                                className="action-btn edit"
                                                onClick={() => handleEdit(problem)}
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="action-btn delete"
                                                onClick={() => handleDelete(problem)}
                                            >
                                                🗑️
                                            </button>
                                        </>
                                    ) : (
                                        <span className="locked">🔒</span>
                                    )}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>⚠️ Delete Problem?</h3>
                        <p>Are you sure you want to delete "{showDeleteConfirm.title}"?</p>
                        <p className="modal-warning">This action cannot be undone.</p>
                        <div className="modal-actions">
                            <button className="admin-btn danger" onClick={confirmDelete}>
                                Yes, Delete
                            </button>
                            <button className="admin-btn secondary" onClick={() => setShowDeleteConfirm(null)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminPage;
