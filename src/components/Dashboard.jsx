import { useState, useMemo } from 'react';
import './Dashboard.css';

function Dashboard({ user, onNavigate, onSelectLanguage, solvedCount, earnedBadges, solvedProblems = [], problems = [] }) {
    const [dailyGoal] = useState(2);
    const [todaySolved] = useState(Math.min(solvedCount, dailyGoal));

    // Calculate actual progress per language based on solved problems
    const languageProgress = useMemo(() => {
        // Count problems per language/category
        const languageProblems = {
            python: { total: 0, solved: 0 },
            java: { total: 0, solved: 0 },
            javascript: { total: 0, solved: 0 },
            cpp: { total: 0, solved: 0 },
            c: { total: 0, solved: 0 },
            ruby: { total: 0, solved: 0 },
            go: { total: 0, solved: 0 },
            typescript: { total: 0, solved: 0 },
        };

        // Count total problems (all problems count towards each language since they support multiple languages)
        const totalProblemsCount = problems.length || 10; // Default to 10 if no problems

        Object.keys(languageProblems).forEach(lang => {
            languageProblems[lang].total = totalProblemsCount;
            // Count how many of the solved problems are in the user's solved list
            languageProblems[lang].solved = solvedProblems.length;
        });

        return languageProblems;
    }, [problems, solvedProblems]);

    const languages = [
        {
            id: 'python',
            name: 'Python',
            icon: '🐍',
            color: '#3776ab',
            get progress() { return languageProgress.python.total > 0 ? Math.round((languageProgress.python.solved / languageProgress.python.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.python.solved; },
            get totalProblems() { return languageProgress.python.total; }
        },
        {
            id: 'java',
            name: 'Java',
            icon: '☕',
            color: '#f89820',
            get progress() { return languageProgress.java.total > 0 ? Math.round((languageProgress.java.solved / languageProgress.java.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.java.solved; },
            get totalProblems() { return languageProgress.java.total; }
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            icon: '🟨',
            color: '#f7df1e',
            get progress() { return languageProgress.javascript.total > 0 ? Math.round((languageProgress.javascript.solved / languageProgress.javascript.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.javascript.solved; },
            get totalProblems() { return languageProgress.javascript.total; }
        },
        {
            id: 'cpp',
            name: 'C++',
            icon: '⚡',
            color: '#00599C',
            get progress() { return languageProgress.cpp.total > 0 ? Math.round((languageProgress.cpp.solved / languageProgress.cpp.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.cpp.solved; },
            get totalProblems() { return languageProgress.cpp.total; }
        },
        {
            id: 'c',
            name: 'C',
            icon: '🔧',
            color: '#555555',
            get progress() { return languageProgress.c.total > 0 ? Math.round((languageProgress.c.solved / languageProgress.c.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.c.solved; },
            get totalProblems() { return languageProgress.c.total; }
        },
        {
            id: 'ruby',
            name: 'Ruby',
            icon: '💎',
            color: '#CC342D',
            get progress() { return languageProgress.ruby.total > 0 ? Math.round((languageProgress.ruby.solved / languageProgress.ruby.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.ruby.solved; },
            get totalProblems() { return languageProgress.ruby.total; }
        },
        {
            id: 'go',
            name: 'Go',
            icon: '🐹',
            color: '#00ADD8',
            get progress() { return languageProgress.go.total > 0 ? Math.round((languageProgress.go.solved / languageProgress.go.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.go.solved; },
            get totalProblems() { return languageProgress.go.total; }
        },
        {
            id: 'typescript',
            name: 'TypeScript',
            icon: '📘',
            color: '#3178c6',
            get progress() { return languageProgress.typescript.total > 0 ? Math.round((languageProgress.typescript.solved / languageProgress.typescript.total) * 100) : 0; },
            get problemsSolved() { return languageProgress.typescript.solved; },
            get totalProblems() { return languageProgress.typescript.total; }
        },
    ];

    const skills = [
        { id: 'algorithms', name: 'Algorithms', icon: '🧮', color: '#8b5cf6' },
        { id: 'data-structures', name: 'Data Structures', icon: '📊', color: '#06b6d4' },
        { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#f59e0b' },
        { id: 'databases', name: 'Databases', icon: '🗄️', color: '#22c55e' },
        { id: 'ai', name: 'AI / ML', icon: '🤖', color: '#ec4899' },
        { id: 'regex', name: 'Regex', icon: '🔍', color: '#ef4444' },
    ];

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get current day of week and create weekly progress based on user's streak
    const today = new Date();
    const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // User's streak (minimum 1 if logged in today)
    const userStreak = Math.max(user.streak || 1, 1);

    // Create weekly progress: mark TODAY and previous consecutive days based on streak
    const weeklyProgress = weekDays.map((_, index) => {
        // Calculate how many days ago this day was from today
        const daysAgo = (currentDayIndex - index + 7) % 7;
        // Mark day as completed if it's within the streak period (today = daysAgo 0)
        return daysAgo < userStreak;
    });

    // Certifications with dynamic unlock status based on solved count
    const certifications = [
        {
            id: 1,
            name: 'Python Basics',
            level: 'Bronze',
            icon: '🥉',
            unlocked: solvedCount >= 5,
            languageId: 'python'
        },
        {
            id: 2,
            name: 'Java Fundamentals',
            level: 'Silver',
            icon: '🥈',
            unlocked: solvedCount >= 10,
            languageId: 'java'
        },
        {
            id: 3,
            name: 'Algorithm Master',
            level: 'Gold',
            icon: '🥇',
            unlocked: solvedCount >= 20,
            languageId: 'algorithms'
        },
        {
            id: 4,
            name: 'Full Stack Pro',
            level: 'Platinum',
            icon: '💎',
            unlocked: solvedCount >= 50,
            languageId: 'javascript'
        },
    ];

    const handleCertificationClick = (cert) => {
        if (cert.unlocked) {
            // Show certificate modal (for now just navigate to badges)
            onNavigate('badges');
        } else {
            // Start the track
            onSelectLanguage(cert.languageId);
        }
    };

    return (
        <div className="dashboard">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome back, <span className="highlight">{user.name}</span>! 👋</h1>
                    <p>Continue your coding journey. Every problem solved brings you closer to mastery.</p>
                    <button className="cta-button" onClick={() => onNavigate('home')}>
                        Start Practicing <span>→</span>
                    </button>
                </div>
                <div className="hero-stats">
                    <div className="stat-card glow">
                        <span className="stat-icon">🔥</span>
                        <div className="stat-info">
                            <span className="stat-value">{user.streak}</span>
                            <span className="stat-label">Day Streak</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">⭐</span>
                        <div className="stat-info">
                            <span className="stat-value">{user.xp}</span>
                            <span className="stat-label">Total XP</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">🏆</span>
                        <div className="stat-info">
                            <span className="stat-value">{earnedBadges?.length || 0}</span>
                            <span className="stat-label">Badges</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Daily/Weekly Progress */}
            <section className="progress-section">
                <div className="daily-goal">
                    <div className="goal-header">
                        <h3>🎯 Daily Goal</h3>
                        <span className="goal-count">{todaySolved}/{dailyGoal} problems</span>
                    </div>
                    <div className="goal-progress">
                        <div className="goal-bar">
                            <div
                                className="goal-fill"
                                style={{ width: `${(todaySolved / dailyGoal) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    {todaySolved >= dailyGoal && (
                        <div className="goal-complete">✅ Daily goal achieved! Keep going!</div>
                    )}
                </div>

                <div className="weekly-streak">
                    <h3>📅 Weekly Progress</h3>
                    <div className="week-days">
                        {weekDays.map((day, index) => (
                            <div
                                key={day}
                                className={`day-circle ${weeklyProgress[index] ? 'completed' : ''} ${index === currentDayIndex ? 'today' : ''}`}
                                title={day}
                            >
                                <span className="day-name">{day}</span>
                                {weeklyProgress[index] && <span className="check">✓</span>}
                            </div>
                        ))}
                    </div>
                    <div className="streak-info">
                        🔥 {weeklyProgress.filter(Boolean).length}/7 days this week
                    </div>
                </div>
            </section>

            {/* Continue Practicing */}
            <section className="continue-section">
                <div className="section-header">
                    <h2>Continue Practicing</h2>
                    <button className="see-all-btn" onClick={() => onNavigate('home')}>See All →</button>
                </div>
                <div className="language-cards">
                    {languages.slice(0, 4).map(lang => (
                        <div
                            key={lang.id}
                            className="language-card"
                            onClick={() => onSelectLanguage(lang.id)}
                        >
                            <div className="lang-icon" style={{ background: `${lang.color}20` }}>
                                <span>{lang.icon}</span>
                            </div>
                            <h3>{lang.name}</h3>
                            <div className="lang-progress">
                                <div className="lang-bar">
                                    <div
                                        className="lang-fill"
                                        style={{ width: `${lang.progress}%`, background: lang.color }}
                                    ></div>
                                </div>
                                <span className="lang-percent">{lang.progress}%</span>
                            </div>
                            <span className="lang-details">
                                {lang.problemsSolved}/{lang.totalProblems} problems solved
                            </span>
                            <button className="continue-btn">
                                Continue <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Practice Skills */}
            <section className="skills-section">
                <div className="section-header">
                    <h2>Practice Skills</h2>
                </div>
                <div className="skills-grid">
                    {languages.map(lang => (
                        <div
                            key={lang.id}
                            className="skill-card"
                            onClick={() => onSelectLanguage(lang.id)}
                            style={{ '--accent': lang.color }}
                        >
                            <span className="skill-icon">{lang.icon}</span>
                            <span className="skill-name">{lang.name}</span>
                        </div>
                    ))}
                    {skills.map(skill => (
                        <div
                            key={skill.id}
                            className="skill-card"
                            onClick={() => onSelectLanguage(skill.id)}
                            style={{ '--accent': skill.color }}
                        >
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="certifications-section">
                <div className="section-header">
                    <h2>🎓 Certifications</h2>
                    <span className="cert-info">Complete tracks to earn certifications!</span>
                </div>
                <div className="cert-cards">
                    {certifications.map(cert => (
                        <div
                            key={cert.id}
                            className={`cert-card ${cert.unlocked ? 'unlocked' : 'locked'}`}
                            onClick={() => handleCertificationClick(cert)}
                        >
                            <div className="cert-badge">
                                <span className="cert-icon">{cert.icon}</span>
                            </div>
                            <h4>{cert.name}</h4>
                            <span className={`cert-level ${cert.level.toLowerCase()}`}>
                                {cert.level}
                            </span>
                            {cert.unlocked ? (
                                <button className="cert-btn view">View Certificate</button>
                            ) : (
                                <button className="cert-btn start">Start Track</button>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
