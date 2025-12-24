import { useState } from 'react';
import './ProfilePage.css';

function ProfilePage({ user, solvedProblems = [], earnedBadges = [], onBack }) {
    const [activeTab, setActiveTab] = useState('overview');

    // Badge definitions
    const allBadges = [
        { id: 1, name: 'Problem Solving', icon: '🧩', stars: 3, color: '#ff6b6b' },
        { id: 2, name: 'Java', icon: '☕', stars: 1, color: '#f89820' },
        { id: 3, name: 'Python', icon: '🐍', stars: 2, color: '#3776ab' },
        { id: 4, name: '30 Days of Code', icon: '📅', stars: 1, color: '#00d4aa' },
        { id: 5, name: 'C Language', icon: '©️', stars: 1, color: '#555555' },
        { id: 6, name: 'JavaScript', icon: '🟨', stars: 2, color: '#f7df1e' },
        { id: 7, name: 'SQL', icon: '🗄️', stars: 1, color: '#336791' },
        { id: 8, name: 'Algorithms', icon: '🧮', stars: 3, color: '#8b5cf6' },
    ];

    // Certification definitions
    const certifications = [
        {
            id: 1,
            name: 'Java Basic',
            verified: true,
            date: '2024-01-15',
            color: '#22c55e'
        },
        {
            id: 2,
            name: 'Python Basic',
            verified: false,
            progress: 60,
            color: '#3776ab'
        },
        {
            id: 3,
            name: 'JavaScript Intermediate',
            verified: false,
            progress: 30,
            color: '#f7df1e'
        },
    ];

    // Skills data
    const skills = [
        { name: 'Python', level: 'Intermediate', progress: 65 },
        { name: 'JavaScript', level: 'Beginner', progress: 40 },
        { name: 'Java', level: 'Beginner', progress: 35 },
        { name: 'Problem Solving', level: 'Advanced', progress: 80 },
        { name: 'Data Structures', level: 'Intermediate', progress: 55 },
    ];

    // Calculate profile completion
    const profileSections = [
        { name: 'Basic Info', completed: true },
        { name: 'Email', completed: true },
        { name: 'Skills', completed: skills.length > 0 },
        { name: 'Resume', completed: false },
        { name: 'Work Experience', completed: false },
        { name: 'Education', completed: false },
    ];
    const completedCount = profileSections.filter(s => s.completed).length;
    const completionPercent = Math.round((completedCount / profileSections.length) * 100);

    return (
        <div className="profile-page">
            {/* Header */}
            <div className="profile-header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Dashboard
                </button>
            </div>

            <div className="profile-layout">
                {/* Left Sidebar */}
                <aside className="profile-sidebar">
                    {/* Profile Card */}
                    <div className="profile-card">
                        <div className="profile-avatar-large">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <h2 className="profile-name">{user.name}</h2>
                        <p className="profile-username">@{user.name.toLowerCase().replace(/\s+/g, '')}</p>

                        <div className="profile-stats-row">
                            <div className="profile-stat">
                                <span className="stat-number">{solvedProblems.length}</span>
                                <span className="stat-text">Problems</span>
                            </div>
                            <div className="profile-stat">
                                <span className="stat-number">{user.xp}</span>
                                <span className="stat-text">XP</span>
                            </div>
                            <div className="profile-stat">
                                <span className="stat-number">Level {user.level}</span>
                                <span className="stat-text">Rank</span>
                            </div>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="profile-section-card">
                        <div className="section-header-row">
                            <h3>Personal Information</h3>
                            <button className="edit-btn">✏️</button>
                        </div>
                        <div className="info-list">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <span className="info-text">{user.email || 'Add email'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📱</span>
                                <span className="info-text placeholder">Add your mobile number</span>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <span className="info-text">India</span>
                            </div>
                        </div>
                    </div>

                    {/* Resume Section */}
                    <div className="profile-section-card">
                        <div className="section-header-row">
                            <h3>My Resume</h3>
                            <button className="add-btn">+ Add Resume</button>
                        </div>
                        <p className="placeholder-text">Add your resume here</p>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="profile-main">
                    {/* Profile Completion Banner */}
                    <div className="completion-banner">
                        <div className="completion-info">
                            <p className="completion-title">Complete your profile</p>
                            <h3>Add your missing details →</h3>
                            <p className="completion-subtitle">This data will be helpful to auto-fill your job applications.</p>
                        </div>
                        <div className="completion-circle">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                                <path className="circle-bg"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className="circle-fill"
                                    strokeDasharray={`${completionPercent}, 100`}
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                            <span className="completion-percent">{completionPercent}%</span>
                        </div>
                    </div>

                    {/* My Badges */}
                    <div className="profile-section">
                        <h3>🏆 My Badges</h3>
                        <div className="badges-grid">
                            {allBadges.map(badge => {
                                const isEarned = earnedBadges.includes(badge.id);
                                return (
                                    <div
                                        key={badge.id}
                                        className={`badge-hex ${isEarned ? 'earned' : 'locked'}`}
                                        style={{ '--badge-color': badge.color }}
                                    >
                                        <div className="badge-icon">{badge.icon}</div>
                                        <div className="badge-name">{badge.name}</div>
                                        <div className="badge-stars">
                                            {'★'.repeat(badge.stars)}{'☆'.repeat(3 - badge.stars)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* My Certifications */}
                    <div className="profile-section">
                        <h3>📜 My Certifications</h3>
                        <div className="certifications-list">
                            {certifications.map(cert => (
                                <div key={cert.id} className="cert-item">
                                    <div className="cert-icon-wrapper" style={{ background: cert.color }}>
                                        {cert.verified ? '✓' : '📋'}
                                    </div>
                                    <div className="cert-details">
                                        <h4>{cert.name}</h4>
                                        {cert.verified ? (
                                            <span className="cert-verified">✓ Verified</span>
                                        ) : (
                                            <div className="cert-progress-bar">
                                                <div
                                                    className="cert-progress-fill"
                                                    style={{ width: `${cert.progress}%` }}
                                                ></div>
                                            </div>
                                        )}
                                    </div>
                                    {cert.verified && (
                                        <button className="view-cert-btn">View</button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>💼 Work Experience</h3>
                            <button className="add-btn">+ Add Work Experience</button>
                        </div>
                        <p className="placeholder-text">
                            Add your work experience. Don't forget to add those internships as <span className="highlight">well</span>.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>🎓 Education</h3>
                            <button className="add-btn">+ Add Education</button>
                        </div>
                        <p className="placeholder-text">
                            We believe in skills over pedigree; but go ahead add your education for the recruiters who don't.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>🔗 Links</h3>
                            <button className="add-btn">+ Add Links</button>
                        </div>
                        <p className="placeholder-text">
                            Add all the relevant links that help in knowing you as a hacker
                        </p>
                    </div>

                    {/* My Skills */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>⚡ My Skills</h3>
                            <button className="add-btn">+ Add Skills</button>
                        </div>
                        <div className="skills-list">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{ width: `${skill.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProfilePage;
