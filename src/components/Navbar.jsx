import { useState } from 'react';
import './Navbar.css';

function Navbar({ user, currentPage, onNavigate, onLogout }) {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo" onClick={() => onNavigate('home')}>
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">CodeQuest</span>
                </div>

                <div className="nav-links">
                    <button
                        className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
                        onClick={() => onNavigate('dashboard')}
                    >
                        <span className="nav-icon">🏠</span>
                        Dashboard
                    </button>
                    <button
                        className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                        onClick={() => onNavigate('home')}
                    >
                        <span className="nav-icon">📚</span>
                        Practice
                    </button>
                    <button
                        className={`nav-link ${currentPage === 'tracks' ? 'active' : ''}`}
                        onClick={() => onNavigate('tracks')}
                    >
                        <span className="nav-icon">🎯</span>
                        Tracks
                    </button>
                    <button
                        className={`nav-link ${currentPage === 'leaderboard' ? 'active' : ''}`}
                        onClick={() => onNavigate('leaderboard')}
                    >
                        <span className="nav-icon">🏆</span>
                        Leaderboard
                    </button>
                    <button
                        className={`nav-link ${currentPage === 'badges' ? 'active' : ''}`}
                        onClick={() => onNavigate('badges')}
                    >
                        <span className="nav-icon">🎖️</span>
                        Badges
                    </button>
                </div>
            </div>

            <div className="navbar-right">
                <div className="streak-counter">
                    <span className="streak-icon">🔥</span>
                    <span className="streak-value">{user.streak}</span>
                    <span className="streak-label">day streak</span>
                </div>

                <div className="xp-display">
                    <span className="xp-icon">⭐</span>
                    <span className="xp-value">{user.xp}</span>
                    <span className="xp-label">XP</span>
                </div>

                <div
                    className="profile-section"
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                    <div className="profile-avatar">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="profile-info">
                        <span className="profile-name">{user.name}</span>
                        <span className="profile-level">Level {user.level}</span>
                    </div>
                    <span className="dropdown-arrow">▼</span>

                    {showProfileMenu && (
                        <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
                            {/* Hackos Display */}
                            <div className="hackos-display">
                                <span className="hackos-text">Hackos: {user.xp}</span>
                            </div>

                            <button className="dropdown-item" onClick={() => { onNavigate('profile'); setShowProfileMenu(false); }}>
                                Profile
                            </button>
                            <button className="dropdown-item" onClick={() => { onNavigate('leaderboard'); setShowProfileMenu(false); }}>
                                Leaderboard
                            </button>
                            <button className="dropdown-item" onClick={() => { onNavigate('settings'); setShowProfileMenu(false); }}>
                                Settings
                            </button>

                            <div className="dropdown-divider"></div>

                            <button className="dropdown-item" onClick={() => { onNavigate('badges'); setShowProfileMenu(false); }}>
                                Bookmarks
                            </button>
                            <button className="dropdown-item" onClick={() => { onNavigate('home'); setShowProfileMenu(false); }}>
                                Submissions
                            </button>

                            <div className="dropdown-divider"></div>

                            <button className="dropdown-item logout" onClick={onLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
