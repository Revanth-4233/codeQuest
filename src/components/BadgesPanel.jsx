import { badges } from '../data/problems';
import './BadgesPanel.css';

function BadgesPanel({ earnedBadges, solvedCount, xp, streak }) {
    const getBadgeProgress = (badge) => {
        switch (badge.type) {
            case 'problems_solved':
            case 'easy_complete':
            case 'medium_complete':
            case 'hard_complete':
            case 'all_complete':
                return Math.min((solvedCount / badge.requirement) * 100, 100);
            case 'xp':
                return Math.min((xp / badge.requirement) * 100, 100);
            case 'streak':
                return Math.min((streak / badge.requirement) * 100, 100);
            case 'speed':
                return earnedBadges.includes(badge.id) ? 100 : 0;
            default:
                return 0;
        }
    };

    const isEarned = (badge) => {
        return earnedBadges.includes(badge.id) || getBadgeProgress(badge) >= 100;
    };

    return (
        <div className="badges-panel">
            <div className="badges-header">
                <h2>🎖️ Your Badges</h2>
                <p className="badges-subtitle">Complete challenges to earn badges and show off your achievements!</p>
            </div>

            <div className="badges-stats">
                <div className="stat-card">
                    <span className="stat-icon">🏆</span>
                    <div className="stat-info">
                        <span className="stat-value">{earnedBadges.length}</span>
                        <span className="stat-label">Badges Earned</span>
                    </div>
                </div>
                <div className="stat-card">
                    <span className="stat-icon">📊</span>
                    <div className="stat-info">
                        <span className="stat-value">{badges.length}</span>
                        <span className="stat-label">Total Badges</span>
                    </div>
                </div>
                <div className="stat-card">
                    <span className="stat-icon">⭐</span>
                    <div className="stat-info">
                        <span className="stat-value">{xp}</span>
                        <span className="stat-label">Total XP</span>
                    </div>
                </div>
            </div>

            <div className="badges-grid">
                {badges.map((badge, index) => {
                    const earned = isEarned(badge);
                    const progress = getBadgeProgress(badge);

                    return (
                        <div
                            key={badge.id}
                            className={`badge-card ${earned ? 'earned' : 'locked'}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="badge-icon-wrapper">
                                <span className="badge-icon">{badge.icon}</span>
                                {earned && <span className="earned-check">✓</span>}
                            </div>

                            <h3 className="badge-name">{badge.name}</h3>
                            <p className="badge-description">{badge.description}</p>

                            {!earned && (
                                <div className="badge-progress">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="progress-text">{Math.round(progress)}%</span>
                                </div>
                            )}

                            {earned && (
                                <div className="earned-badge-label">
                                    <span>🎉</span> Unlocked!
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BadgesPanel;
