import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
    const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);

    const { login, signup, loginAsAdmin, loginWithProvider } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Validation
        if (!email || !password) {
            setError('Please fill in all required fields');
            setIsLoading(false);
            return;
        }

        if (isSignUp && !name) {
            setError('Please enter your name');
            setIsLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            setIsLoading(false);
            return;
        }

        // Simulate network delay for UX
        await new Promise(resolve => setTimeout(resolve, 500));

        let result;
        if (loginType === 'admin') {
            // Admin login
            result = loginAsAdmin ? loginAsAdmin(email, password) : login(email, password, true);
        } else if (isSignUp) {
            result = await signup(email, password, name);
            if (result.success) {
                // Show email confirmation popup
                setShowEmailConfirmation(true);
                setEmail('');
                setPassword('');
                setName('');
                setIsLoading(false);
                return;
            }
        } else {
            result = await login(email, password);
        }

        if (!result.success) {
            setError(result.error);
        }

        setIsLoading(false);
    };

    const handleSocialLogin = async (provider) => {
        setIsLoading(true);
        setError('');

        try {
            const result = await loginWithProvider(provider);

            if (!result.success) {
                setError(result.error || `${provider} login failed. Please try again.`);
            }
            // If successful, Supabase will redirect to the OAuth provider
        } catch (err) {
            setError(`${provider} login requires setup in Supabase. Please use email login.`);
        }

        setIsLoading(false);
    };

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setError('');
    };

    const switchLoginType = (type) => {
        setLoginType(type);
        setIsSignUp(false);
        setError('');
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
        <div className="login-container">
            {/* Left Panel - Cosmic Animation */}
            <div className="login-left-panel">
                <div className="cosmic-bg">
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                    <div className="cosmic-circle"></div>
                    <div className="cosmic-circle cosmic-circle-2"></div>
                </div>

                <div className="left-content">
                    <div className="logo-large">
                        <span className="logo-icon">⚡</span>
                        <span className="logo-text">CodeQuest</span>
                    </div>
                    <h1>Welcome to</h1>
                    <h2>CodeQuest Community</h2>
                    <p>Home to millions of developers worldwide</p>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="login-right-panel">
                <div className="form-container">
                    {/* Login Type Tabs */}
                    <div className="login-type-tabs">
                        <button
                            className={`login-tab ${loginType === 'user' ? 'active' : ''}`}
                            onClick={() => switchLoginType('user')}
                        >
                            👤 User
                        </button>
                        <button
                            className={`login-tab ${loginType === 'admin' ? 'active' : ''}`}
                            onClick={() => switchLoginType('admin')}
                        >
                            🛡️ Admin
                        </button>
                    </div>

                    <div className="form-header">
                        {loginType === 'admin' ? (
                            <>
                                <h2>🔐 Admin Login</h2>
                                <p className="form-subtitle">Access the Admin Dashboard to manage problems</p>
                            </>
                        ) : (
                            <>
                                <h2>{isSignUp ? 'Create Account' : 'Welcome!'}</h2>
                                <p className="form-subtitle">
                                    {isSignUp
                                        ? 'Join our community of learners'
                                        : "Start your coding journey today!"}
                                </p>
                            </>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        {isSignUp && loginType === 'user' && (
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder={loginType === 'admin' ? "Admin email address" : "Your email address"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                placeholder={loginType === 'admin' ? "Admin password" : "Your password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button
                            type="submit"
                            className={`submit-btn ${isLoading ? 'loading' : ''} ${loginType === 'admin' ? 'admin-btn' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="loader"></span>
                            ) : (
                                loginType === 'admin' ? '🔐 Admin Login' : (isSignUp ? 'Sign Up' : 'Log In')
                            )}
                        </button>

                        {loginType === 'user' && !isSignUp && (
                            <div className="form-options">
                                <label className="remember-me">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    Remember me
                                </label>
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>
                        )}
                    </form>

                    {loginType === 'user' && (
                        <>
                            <div className="divider">
                                <span>or</span>
                            </div>

                            <div className="social-login">
                                <button
                                    className="social-btn google coming-soon"
                                    onClick={() => setError('Google login coming soon! Please use email login.')}
                                    title="Coming Soon"
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Continue with Google
                                    <span className="coming-soon-badge">Soon</span>
                                </button>

                                <div className="social-row">
                                    <button
                                        className="social-btn github coming-soon"
                                        onClick={() => setError('GitHub login coming soon! Please use email login.')}
                                        title="Coming Soon"
                                    >
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                        <span className="coming-soon-badge">Soon</span>
                                    </button>
                                    <button
                                        className="social-btn facebook coming-soon"
                                        onClick={() => setError('Facebook login coming soon! Please use email login.')}
                                        title="Coming Soon"
                                    >
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Facebook
                                        <span className="coming-soon-badge">Soon</span>
                                    </button>
                                </div>
                            </div>

                            <div className="toggle-mode">
                                {isSignUp ? (
                                    <p>Already have an account? <button onClick={toggleMode}>Log in</button></p>
                                ) : (
                                    <p>Don't have an account? <button onClick={toggleMode}>Sign up</button></p>
                                )}
                            </div>
                        </>
                    )}

                    {loginType === 'admin' && (
                        <div className="admin-note">
                            <p>🔒 Admin access is restricted to authorized personnel only.</p>
                            <p>Contact administrator if you need access.</p>
                        </div>
                    )}

                    {/* Email Confirmation Modal */}
                    {showEmailConfirmation && (
                        <div className="email-modal-overlay">
                            <div className="email-modal">
                                <div className="email-modal-icon">📧</div>
                                <h3>Check Your Email!</h3>
                                <p>We've sent a confirmation link to your email address.</p>
                                <p className="email-modal-note">Please verify your email to complete registration.</p>
                                <button
                                    className="email-modal-btn"
                                    onClick={() => {
                                        setShowEmailConfirmation(false);
                                        setIsSignUp(false);
                                    }}
                                >
                                    Go to Login
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
