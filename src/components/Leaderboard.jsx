import { useState } from 'react';
import './Leaderboard.css';

function Leaderboard({ currentUser }) {
    const [timeFilter, setTimeFilter] = useState('weekly');

    // Sample leaderboard data
    const leaderboardData = [
        { rank: 1, name: 'CodeMaster', xp: 2450, problems: 48, badges: 8, avatar: '👨‍💻' },
        { rank: 2, name: 'AlgoQueen', xp: 2180, problems: 42, badges: 7, avatar: '👩‍💻' },
        { rank: 3, name: 'ByteHunter', xp: 1950, problems: 38, badges: 6, avatar: '🧑‍💻' },
        { rank: 4, name: 'LoopLord', xp: 1720, problems: 35, badges: 6, avatar: '👨‍🎓' },
        { rank: 5, name: currentUser.name, xp: currentUser.xp, problems: currentUser.solvedCount || 0, badges: 2, avatar: '🎯', isCurrentUser: true },
        { rank: 6, name: 'DevNinja', xp: 1450, problems: 30, badges: 5, avatar: '🥷' },
        { rank: 7, name: 'BugSlayer', xp: 1280, problems: 26, badges: 4, avatar: '🦸' },
        { rank: 8, name: 'ScriptKid', xp: 980, problems: 20, badges: 3, avatar: '🧒' },
        { rank: 9, name: 'CacheKing', xp: 750, problems: 16, badges: 3, avatar: '👑' },
        { rank: 10, name: 'StackStar', xp: 580, problems: 12, badges: 2, avatar: '⭐' },
    ];

    const getRankStyle = (rank) => {
        if (rank === 1) return 'gold';
        if (rank === 2) return 'silver';
        if (rank === 3) return 'bronze';
        return '';
    };

    const getRankIcon = (rank) => {
        if (rank === 1) return '🥇';
        if (rank === 2) return '🥈';
        if (rank === 3) return '🥉';
        return rank;
    };

    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <div className="header-content">
                    <h2>🏆 Leaderboard</h2>
                    <p>Compete with coders worldwide and climb the ranks!</p>
                </div>
                <div className="time-filters">
                    <button
                        className={`filter-btn ${timeFilter === 'weekly' ? 'active' : ''}`}
                        onClick={() => setTimeFilter('weekly')}
                    >
                        This Week
                    </button>
                    <button
                        className={`filter-btn ${timeFilter === 'monthly' ? 'active' : ''}`}
                        onClick={() => setTimeFilter('monthly')}
                    >
                        This Month
                    </button>
                    <button
                        className={`filter-btn ${timeFilter === 'alltime' ? 'active' : ''}`}
                        onClick={() => setTimeFilter('alltime')}
                    >
                        All Time
                    </button>
                </div>
            </div>

            <div className="podium">
                {leaderboardData.slice(0, 3).map((user, index) => (
                    <div
                        key={user.rank}
                        className={`podium-item rank-${user.rank}`}
                        style={{ order: index === 0 ? 1 : index === 1 ? 0 : 2 }}
                    >
                        <div className="podium-avatar">
                            <span>{user.avatar}</span>
                            <span className="podium-rank">{getRankIcon(user.rank)}</span>
                        </div>
                        <span className="podium-name">{user.name}</span>
                        <span className="podium-xp">{user.xp.toLocaleString()} XP</span>
                        <div className="podium-stand" style={{ height: user.rank === 1 ? '100px' : user.rank === 2 ? '70px' : '50px' }}>
                            <span>{user.rank}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="leaderboard-table">
                <div className="table-header">
                    <span className="col-rank">Rank</span>
                    <span className="col-user">User</span>
                    <span className="col-xp">XP</span>
                    <span className="col-problems">Problems</span>
                    <span className="col-badges">Badges</span>
                </div>

                {leaderboardData.map((user, index) => (
                    <div
                        key={user.rank}
                        className={`table-row ${getRankStyle(user.rank)} ${user.isCurrentUser ? 'current-user' : ''}`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <span className="col-rank">
                            <span className={`rank-badge ${getRankStyle(user.rank)}`}>
                                {getRankIcon(user.rank)}
                            </span>
                        </span>
                        <span className="col-user">
                            <span className="user-avatar">{user.avatar}</span>
                            <span className="user-name">
                                {user.name}
                                {user.isCurrentUser && <span className="you-tag">You</span>}
                            </span>
                        </span>
                        <span className="col-xp">
                            <span className="xp-value">{user.xp.toLocaleString()}</span>
                            <span className="xp-label">XP</span>
                        </span>
                        <span className="col-problems">{user.problems}</span>
                        <span className="col-badges">
                            <span className="badge-count">{user.badges}</span>
                            <span className="badge-icon">🎖️</span>
                        </span>
                    </div>
                ))}
            </div>

            <div className="your-position">
                <div className="position-card">
                    <span className="position-label">Your Position</span>
                    <span className="position-rank">#{currentUser.xp > 1500 ? '5' : '10+'}</span>
                    <span className="position-tip">Keep solving to climb up! 🚀</span>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
