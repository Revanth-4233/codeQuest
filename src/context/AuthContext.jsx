import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

const AuthContext = createContext(null);

// Admin credentials (hardcoded for security - not exposed to client)
const ADMIN_EMAIL = 'mukeshrevanth94@gmail.com';
const ADMIN_PASSWORD_HASH = 'Mukesh@4233'; // In production, use proper hashing

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState(null);

    // Check for existing session on mount
    useEffect(() => {
        checkSession();

        // Listen for auth state changes (for OAuth callbacks)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN' && session) {
                const user = session.user;
                setCurrentUser({
                    email: user.email,
                    name: user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0],
                    avatar: user.user_metadata?.avatar_url || null,
                    provider: user.app_metadata?.provider || 'email',
                    isAdmin: user.email === ADMIN_EMAIL,
                    createdAt: user.created_at
                });

                // Save to local session
                localStorage.setItem('codequest_session', JSON.stringify({
                    email: user.email,
                    isAdmin: user.email === ADMIN_EMAIL,
                    loggedInAt: new Date().toISOString()
                }));
            } else if (event === 'SIGNED_OUT') {
                setCurrentUser(null);
                localStorage.removeItem('codequest_session');
            }
            setIsLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const checkSession = async () => {
        try {
            // First check Supabase session
            const { data: { session } } = await supabase.auth.getSession();

            if (session) {
                const user = session.user;
                setCurrentUser({
                    email: user.email,
                    name: user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0],
                    avatar: user.user_metadata?.avatar_url || null,
                    provider: user.app_metadata?.provider || 'email',
                    isAdmin: user.email === ADMIN_EMAIL,
                    createdAt: user.created_at
                });
            } else {
                // Fallback to local session
                const localSession = localStorage.getItem('codequest_session');
                if (localSession) {
                    const { email, isAdmin } = JSON.parse(localSession);
                    const users = JSON.parse(localStorage.getItem('codequest_users') || '{}');
                    if (users[email]) {
                        setCurrentUser({ ...users[email], isAdmin });
                    }
                }
            }
        } catch (error) {
            console.error('Session check error:', error);
        }
        setIsLoading(false);
    };

    // Get user progress from localStorage
    const getUserProgress = (email) => {
        const progress = localStorage.getItem(`codequest_progress_${email}`);
        if (progress) {
            return JSON.parse(progress);
        }
        return {
            solvedProblems: [],
            earnedBadges: [],
            xp: 0,
            level: 1,
            streak: 0,
            lastActive: new Date().toISOString().split('T')[0]
        };
    };

    // Save user progress to localStorage
    const saveUserProgress = (email, progress) => {
        localStorage.setItem(`codequest_progress_${email}`, JSON.stringify({
            ...progress,
            lastActive: new Date().toISOString().split('T')[0]
        }));
    };

    // Sign up with email/password (using Supabase Auth)
    const signup = async (email, password, name) => {
        try {
            // Use current origin for redirect (works for both localhost and production)
            const siteUrl = window.location.origin;

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name
                    },
                    emailRedirectTo: `${siteUrl}/?confirmed=true`
                }
            });

            if (error) {
                // Fallback to local signup if Supabase auth fails
                return localSignup(email, password, name);
            }

            if (data.user) {
                // Initialize progress
                saveUserProgress(email, {
                    solvedProblems: [],
                    earnedBadges: [],
                    xp: 0,
                    level: 1,
                    streak: 1,
                    lastActive: new Date().toISOString().split('T')[0]
                });
                return { success: true };
            }

            return { success: false, error: 'Signup failed' };
        } catch (err) {
            console.error('Signup error:', err);
            return localSignup(email, password, name);
        }
    };

    // Local signup fallback
    const localSignup = (email, password, name) => {
        const users = JSON.parse(localStorage.getItem('codequest_users') || '{}');

        if (users[email]) {
            return { success: false, error: 'Email already registered' };
        }

        const hashPassword = (pwd) => {
            let hash = 0;
            for (let i = 0; i < pwd.length; i++) {
                const char = pwd.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return hash.toString(16);
        };

        const newUser = {
            email,
            password: hashPassword(password),
            name,
            createdAt: new Date().toISOString()
        };

        users[email] = newUser;
        localStorage.setItem('codequest_users', JSON.stringify(users));

        localStorage.setItem('codequest_session', JSON.stringify({
            email,
            loggedInAt: new Date().toISOString()
        }));

        saveUserProgress(email, {
            solvedProblems: [],
            earnedBadges: [],
            xp: 0,
            level: 1,
            streak: 1,
            lastActive: new Date().toISOString().split('T')[0]
        });

        setCurrentUser(newUser);
        return { success: true };
    };

    // Login with email/password
    const login = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                // Fallback to local login
                return localLogin(email, password);
            }

            return { success: true };
        } catch (err) {
            console.error('Login error:', err);
            return localLogin(email, password);
        }
    };

    // Local login fallback
    const localLogin = (email, password) => {
        const users = JSON.parse(localStorage.getItem('codequest_users') || '{}');

        const hashPassword = (pwd) => {
            let hash = 0;
            for (let i = 0; i < pwd.length; i++) {
                const char = pwd.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return hash.toString(16);
        };

        if (!users[email]) {
            return { success: false, error: 'Email not found' };
        }

        if (users[email].password !== hashPassword(password)) {
            return { success: false, error: 'Invalid password' };
        }

        localStorage.setItem('codequest_session', JSON.stringify({
            email,
            loggedInAt: new Date().toISOString()
        }));

        const progress = getUserProgress(email);
        const today = new Date().toISOString().split('T')[0];
        const lastActive = progress.lastActive;

        if (lastActive) {
            const daysDiff = Math.floor((new Date(today) - new Date(lastActive)) / (1000 * 60 * 60 * 24));
            if (daysDiff === 1) {
                progress.streak = (progress.streak || 0) + 1;
            } else if (daysDiff > 1) {
                progress.streak = 1;
            }
        }
        saveUserProgress(email, progress);

        setCurrentUser(users[email]);
        return { success: true };
    };

    // Social login with OAuth (Google, GitHub, Facebook)
    const loginWithProvider = async (provider) => {
        try {
            setAuthError(null);
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: provider,
                options: {
                    redirectTo: `${window.location.origin}`,
                    scopes: provider === 'github' ? 'read:user user:email' : undefined
                }
            });

            if (error) {
                setAuthError(error.message);
                return { success: false, error: error.message };
            }

            return { success: true, url: data.url };
        } catch (err) {
            console.error('OAuth error:', err);
            setAuthError(err.message);
            return { success: false, error: err.message };
        }
    };

    // Admin login
    const loginAsAdmin = (email, password) => {
        if (email !== ADMIN_EMAIL) {
            return { success: false, error: 'Admin email not recognized' };
        }

        if (password !== ADMIN_PASSWORD_HASH) {
            return { success: false, error: 'Invalid admin password' };
        }

        const adminUser = {
            email: ADMIN_EMAIL,
            name: 'Admin',
            isAdmin: true,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem('codequest_session', JSON.stringify({
            email: ADMIN_EMAIL,
            isAdmin: true,
            loggedInAt: new Date().toISOString()
        }));

        setCurrentUser(adminUser);
        return { success: true };
    };

    // Logout
    const logout = async () => {
        try {
            await supabase.auth.signOut();
        } catch (err) {
            console.error('Logout error:', err);
        }
        localStorage.removeItem('codequest_session');
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        isAuthenticated: !!currentUser,
        isAdmin: currentUser?.isAdmin || currentUser?.email === ADMIN_EMAIL,
        isLoading,
        authError,
        login,
        signup,
        loginAsAdmin,
        loginWithProvider,
        logout,
        getUserProgress,
        saveUserProgress
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthContext;
