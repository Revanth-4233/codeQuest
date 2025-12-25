import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import ProblemList from './components/ProblemList';
import CodeEditor from './components/CodeEditor';
import BadgesPanel from './components/BadgesPanel';
import Leaderboard from './components/Leaderboard';
import LanguagePage from './components/LanguagePage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import AdminPage from './components/AdminPage';
import dataService from './services/DataService';
import './App.css';

function AppContent() {
  const { currentUser, isAuthenticated, isAdmin, isLoading, logout, getUserProgress, saveUserProgress } = useAuth();

  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [showBadgeUnlock, setShowBadgeUnlock] = useState(null);

  // Load problems from DataService (static + custom)
  const [problems, setProblems] = useState(() => dataService.getAllProblems());

  // Refresh problems when returning from admin page
  const refreshProblems = () => {
    setProblems(dataService.getAllProblems());
  };

  const [user, setUser] = useState({
    name: 'Coder',
    level: 1,
    xp: 0,
    streak: 3
  });

  // Redirect admin users directly to admin panel
  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      setCurrentPage('admin');
    }
  }, [isAuthenticated, isAdmin]);

  // Initialize theme from saved settings on app load
  useEffect(() => {
    const savedSettings = localStorage.getItem('codequest-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        let theme = settings.theme || 'dark';

        if (theme === 'system') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          theme = prefersDark ? 'dark' : 'light';
        }

        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        // Default to dark theme if parsing fails
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  // Load user progress when authenticated
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      const progress = getUserProgress(currentUser.email);
      setSolvedProblems(progress.solvedProblems || []);
      setEarnedBadges(progress.earnedBadges || []);
      setUser({
        name: currentUser.name,
        level: progress.level || 1,
        xp: progress.xp || 0,
        streak: progress.streak || 0
      });
    }
  }, [isAuthenticated, currentUser]);

  // Save progress when it changes
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      saveUserProgress(currentUser.email, {
        solvedProblems,
        earnedBadges,
        xp: user.xp,
        level: user.level,
        streak: user.streak
      });
    }
  }, [solvedProblems, earnedBadges, user.xp, user.level, user.streak, isAuthenticated, currentUser]);

  // Filter problems based on selection
  const filteredProblems = problems.filter(problem => {
    const matchesCategory = selectedCategory === 'all' ||
      problem.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' ||
      problem.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  // Check for badge unlocks
  const checkBadges = (newSolvedCount, newXp) => {
    const newBadges = [];

    // First Steps - Complete 1 problem
    if (newSolvedCount >= 1 && !earnedBadges.includes(1)) {
      newBadges.push({ id: 1, name: 'First Steps', icon: '🌟' });
    }

    // Rising Star - Complete 5 problems
    if (newSolvedCount >= 5 && !earnedBadges.includes(2)) {
      newBadges.push({ id: 2, name: 'Rising Star', icon: '⭐' });
    }

    // Problem Solver - Complete 10 problems
    if (newSolvedCount >= 10 && !earnedBadges.includes(3)) {
      newBadges.push({ id: 3, name: 'Problem Solver', icon: '🏆' });
    }

    // Century Club - Earn 100 XP
    if (newXp >= 100 && !earnedBadges.includes(9)) {
      newBadges.push({ id: 9, name: 'Century Club', icon: '💯' });
    }

    // Daily Champion - Complete daily goal
    if (newSolvedCount >= 2 && !earnedBadges.includes(10)) {
      newBadges.push({ id: 10, name: 'Daily Champion', icon: '🎯' });
    }

    // Week Warrior - 7 day streak
    if (user.streak >= 7 && !earnedBadges.includes(11)) {
      newBadges.push({ id: 11, name: 'Week Warrior', icon: '🔥' });
    }

    if (newBadges.length > 0) {
      setEarnedBadges([...earnedBadges, ...newBadges.map(b => b.id)]);
      setShowBadgeUnlock(newBadges[0]);
      setTimeout(() => setShowBadgeUnlock(null), 4000);
    }
  };

  // Handle problem solved
  const handleProblemSolved = (problemId, points) => {
    if (!solvedProblems.includes(problemId)) {
      const newSolvedProblems = [...solvedProblems, problemId];
      setSolvedProblems(newSolvedProblems);

      const newXp = user.xp + points;
      const newLevel = Math.floor(newXp / 100) + 1;

      setUser({
        ...user,
        xp: newXp,
        level: newLevel
      });

      checkBadges(newSolvedProblems.length, newXp);
    }
  };

  // Navigate handler
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedProblem(null);
    setSelectedLanguage(null);
  };

  // Handle language selection
  const handleSelectLanguage = (languageId) => {
    setSelectedLanguage(languageId);
    setCurrentPage('language');
  };

  // Handle next challenge
  const handleNextChallenge = () => {
    if (selectedProblem) {
      const currentIndex = problems.findIndex(p => p.id === selectedProblem.id);
      const nextIndex = (currentIndex + 1) % problems.length;
      setSelectedProblem(problems[nextIndex]);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-container">
          <span className="logo-icon">⚡</span>
          <h2>CodeQuest</h2>
          <div className="loading-bar">
            <div className="loading-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Render main content
  const renderContent = () => {
    if (selectedProblem) {
      return (
        <CodeEditor
          problem={selectedProblem}
          onBack={() => setSelectedProblem(null)}
          onSolve={handleProblemSolved}
          isSolved={solvedProblems.includes(selectedProblem.id)}
          onNextChallenge={handleNextChallenge}
        />
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            onNavigate={handleNavigate}
            onSelectLanguage={handleSelectLanguage}
            solvedCount={solvedProblems.length}
            earnedBadges={earnedBadges}
            solvedProblems={solvedProblems}
            problems={problems}
          />
        );

      case 'language':
        return (
          <LanguagePage
            languageId={selectedLanguage}
            problems={problems}
            onSelectProblem={setSelectedProblem}
            solvedProblems={solvedProblems}
            onBack={() => handleNavigate('dashboard')}
          />
        );

      case 'badges':
        return (
          <BadgesPanel
            earnedBadges={earnedBadges}
            solvedCount={solvedProblems.length}
            xp={user.xp}
            streak={user.streak}
          />
        );

      case 'leaderboard':
        return (
          <Leaderboard
            currentUser={{ ...user, solvedCount: solvedProblems.length }}
          />
        );

      case 'tracks':
        return (
          <div className="tracks-page">
            <div className="tracks-header">
              <h2>🎯 Learning Tracks</h2>
              <p>Follow curated paths to master programming concepts</p>
            </div>
            <div className="tracks-grid">
              <div className="track-card">
                <span className="track-icon">🐍</span>
                <h3>Python Basics</h3>
                <p>Learn Python from scratch with beginner-friendly exercises</p>
                <div className="track-progress">
                  <div className="track-bar">
                    <div className="track-fill" style={{ width: `${(solvedProblems.length / 5) * 100}%` }}></div>
                  </div>
                  <span>{Math.min(solvedProblems.length, 5)}/5 completed</span>
                </div>
                <button className="btn btn-primary" onClick={() => handleSelectLanguage('python')}>
                  Continue Track
                </button>
              </div>
              <div className="track-card">
                <span className="track-icon">☕</span>
                <h3>Java Fundamentals</h3>
                <p>Master Java programming from the ground up</p>
                <div className="track-progress">
                  <div className="track-bar">
                    <div className="track-fill" style={{ width: '0%' }}></div>
                  </div>
                  <span>0/8 completed</span>
                </div>
                <button className="btn btn-secondary" onClick={() => handleSelectLanguage('java')}>
                  Start Track
                </button>
              </div>
              <div className="track-card">
                <span className="track-icon">🟨</span>
                <h3>JavaScript Essentials</h3>
                <p>Learn JavaScript for web development</p>
                <div className="track-progress">
                  <div className="track-bar">
                    <div className="track-fill" style={{ width: '0%' }}></div>
                  </div>
                  <span>0/10 completed</span>
                </div>
                <button className="btn btn-secondary" onClick={() => handleSelectLanguage('javascript')}>
                  Start Track
                </button>
              </div>
              <div className="track-card">
                <span className="track-icon">⚡</span>
                <h3>C++ Mastery</h3>
                <p>Deep dive into C++ programming</p>
                <div className="track-progress">
                  <div className="track-bar">
                    <div className="track-fill" style={{ width: '0%' }}></div>
                  </div>
                  <span>0/10 completed</span>
                </div>
                <button className="btn btn-secondary" onClick={() => handleSelectLanguage('cpp')}>
                  Start Track
                </button>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <ProfilePage
            user={{ ...user, email: currentUser?.email }}
            solvedProblems={solvedProblems}
            earnedBadges={earnedBadges}
            onBack={() => handleNavigate('dashboard')}
          />
        );

      case 'settings':
        return (
          <SettingsPage
            user={{ ...user, email: currentUser?.email }}
            onBack={() => handleNavigate('dashboard')}
          />
        );

      case 'admin':
        return (
          <AdminPage
            isAdminUser={isAdmin}
            onBack={() => {
              refreshProblems();
              handleNavigate('dashboard');
            }}
          />
        );

      case 'home':
      default:
        return (
          <div className="main-content">
            <Sidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              solvedCount={solvedProblems.length}
            />
            <ProblemList
              problems={filteredProblems}
              onSelectProblem={setSelectedProblem}
              solvedProblems={solvedProblems}
            />
          </div>
        );
    }
  };

  return (
    <div className="app">
      {/* Badge Unlock Notification */}
      {showBadgeUnlock && (
        <div className="badge-unlock-notification">
          <div className="unlock-content">
            <span className="unlock-icon">{showBadgeUnlock.icon}</span>
            <div className="unlock-text">
              <span className="unlock-title">Badge Unlocked!</span>
              <span className="unlock-name">{showBadgeUnlock.name}</span>
            </div>
          </div>
        </div>
      )}

      {!selectedProblem && (
        <Navbar
          user={user}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={logout}
        />
      )}

      {renderContent()}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
