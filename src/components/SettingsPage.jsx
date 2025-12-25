import { useState, useEffect } from 'react';
import './SettingsPage.css';

function SettingsPage({ user, onBack, onLogout }) {
    const [activeSection, setActiveSection] = useState('settings');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showMergeModal, setShowMergeModal] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    // Load saved settings from localStorage
    const loadSavedSettings = () => {
        const saved = localStorage.getItem('codequest-settings');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return null;
            }
        }
        return null;
    };

    // Settings state
    const [settings, setSettings] = useState(() => {
        const saved = loadSavedSettings();
        return {
            // Account
            username: saved?.username || user?.name?.toLowerCase().replace(/\s+/g, '') || 'coder',
            usernameChangesLeft: saved?.usernameChangesLeft ?? 2,

            // Emails
            primaryEmail: user?.email || 'user@example.com',
            emailVerified: true,
            additionalEmails: saved?.additionalEmails || [],

            // Connected Accounts
            connectedFacebook: saved?.connectedFacebook || false,
            connectedGitHub: saved?.connectedGitHub || false,
            connectedLinkedIn: saved?.connectedLinkedIn || false,

            // Merge Account
            mergeUsername: '',
            mergeEmail: '',

            // Password
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',

            // Preferences - Emails
            emailNotifications: saved?.emailNotifications ?? true,
            weeklyDigest: saved?.weeklyDigest ?? true,
            problemReminders: saved?.problemReminders ?? true,
            contestReminders: saved?.contestReminders ?? true,
            newsletterUpdates: saved?.newsletterUpdates ?? false,

            // Preferences - Language
            preferredLanguage: saved?.preferredLanguage || 'en',
            defaultCodingLanguage: saved?.defaultCodingLanguage || 'python',

            // Preferences - Personalization
            theme: saved?.theme || 'dark',
            editorTheme: saved?.editorTheme || 'vs-dark',
            fontSize: saved?.fontSize || 14,
            showHints: saved?.showHints ?? true,
            showTimer: saved?.showTimer ?? true,
        };
    });

    // Apply theme to document
    const applyTheme = (theme) => {
        let effectiveTheme = theme;

        if (theme === 'system') {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            effectiveTheme = prefersDark ? 'dark' : 'light';
        }

        // Apply theme to document
        document.documentElement.setAttribute('data-theme', effectiveTheme);

        // Also update body background for light theme
        if (effectiveTheme === 'light') {
            document.body.style.setProperty('--bg-pattern-1', 'rgba(0, 168, 132, 0.05)');
            document.body.style.setProperty('--bg-pattern-2', 'rgba(9, 105, 218, 0.05)');
        } else {
            document.body.style.setProperty('--bg-pattern-1', 'rgba(0, 212, 170, 0.08)');
            document.body.style.setProperty('--bg-pattern-2', 'rgba(88, 166, 255, 0.08)');
        }
    };

    // Apply theme on mount and when settings change
    useEffect(() => {
        applyTheme(settings.theme);

        // Listen for system theme changes if using system theme
        if (settings.theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e) => {
                applyTheme('system');
            };
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, [settings.theme]);

    // Save settings to localStorage when they change (debounced via save button)
    const handleSaveChanges = () => {
        setIsSaving(true);

        // Save to localStorage
        const settingsToSave = {
            username: settings.username,
            usernameChangesLeft: settings.usernameChangesLeft,
            additionalEmails: settings.additionalEmails,
            connectedFacebook: settings.connectedFacebook,
            connectedGitHub: settings.connectedGitHub,
            connectedLinkedIn: settings.connectedLinkedIn,
            emailNotifications: settings.emailNotifications,
            weeklyDigest: settings.weeklyDigest,
            problemReminders: settings.problemReminders,
            contestReminders: settings.contestReminders,
            newsletterUpdates: settings.newsletterUpdates,
            preferredLanguage: settings.preferredLanguage,
            defaultCodingLanguage: settings.defaultCodingLanguage,
            theme: settings.theme,
            editorTheme: settings.editorTheme,
            fontSize: settings.fontSize,
            showHints: settings.showHints,
            showTimer: settings.showTimer,
        };

        localStorage.setItem('codequest-settings', JSON.stringify(settingsToSave));

        // Apply theme immediately
        applyTheme(settings.theme);

        setTimeout(() => {
            setIsSaving(false);
            setSaveMessage('Changes saved successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        }, 500);
    };

    // Handle theme change - apply immediately
    const handleThemeChange = (newTheme) => {
        setSettings({ ...settings, theme: newTheme });
        applyTheme(newTheme);
        // Auto-save theme preference
        const saved = loadSavedSettings() || {};
        localStorage.setItem('codequest-settings', JSON.stringify({ ...saved, theme: newTheme }));
    };

    const handleConnectSocial = (platform) => {
        // Simulate connection
        const key = `connected${platform}`;
        if (settings[key]) {
            // Disconnect
            setSettings({ ...settings, [key]: false });
            alert(`Disconnected from ${platform}`);
        } else {
            // Connect (in real app, this would open OAuth flow)
            setSettings({ ...settings, [key]: true });
            alert(`Connected to ${platform}! (Demo mode)`);
        }
    };

    const handleChangePassword = () => {
        if (settings.newPassword !== settings.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (settings.newPassword.length < 8) {
            alert('Password must be at least 8 characters!');
            return;
        }
        alert('Password changed successfully!');
        setShowPasswordModal(false);
        setSettings({ ...settings, currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    const handleAddEmail = (email) => {
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }
        setSettings({
            ...settings,
            additionalEmails: [...settings.additionalEmails, { email, verified: false }]
        });
        setShowEmailModal(false);
    };

    const handleMergeAccount = () => {
        if (!settings.mergeUsername || !settings.mergeEmail) {
            alert('Please enter both username and email');
            return;
        }
        alert('Merge request sent! Check your email for confirmation.');
        setShowMergeModal(false);
        setSettings({ ...settings, mergeUsername: '', mergeEmail: '' });
    };

    const handleExportData = () => {
        setShowExportModal(true);
        // Simulate export
        setTimeout(() => {
            alert('Your data export is ready! Download will start shortly.');
            setShowExportModal(false);
        }, 2000);
    };

    const handleDeleteAccount = () => {
        alert('Account deletion request submitted. You will receive a confirmation email.');
        setShowDeleteConfirm(false);
    };

    // Sidebar sections
    const sidebarSections = [
        {
            title: 'ACCOUNT',
            items: [
                { id: 'settings', label: 'Settings' },
                { id: 'teams', label: 'Teams' },
                { id: 'password', label: 'Password' },
                { id: 'subscriptions', label: 'Subscriptions' },
                { id: 'shipping', label: 'Shipping Details' },
            ]
        },
        {
            title: 'PREFERENCES',
            items: [
                { id: 'emails', label: 'Emails' },
                { id: 'language', label: 'Language' },
                { id: 'personalization', label: 'Personalization' },
            ]
        }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'settings':
                return (
                    <div className="settings-content">
                        {/* Username Section */}
                        <div className="settings-block">
                            <h2>Your Username</h2>
                            <p className="settings-desc">
                                (This is how users will see you on CodeQuest. You have {settings.usernameChangesLeft} changes left.)
                            </p>
                            <input
                                type="text"
                                className="settings-input"
                                value={settings.username}
                                onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                            />
                        </div>

                        {/* Email Addresses Section */}
                        <div className="settings-block">
                            <h2>Email Addresses</h2>
                            <p className="settings-desc">We will never share your email address or display it publicly.</p>

                            <div className="email-list">
                                <div className="email-item">
                                    <span className="email-address">{settings.primaryEmail}</span>
                                    <span className="badge badge-success">verified</span>
                                    <span className="badge badge-primary">primary</span>
                                </div>
                                {settings.additionalEmails.map((email, idx) => (
                                    <div key={idx} className="email-item">
                                        <span className="email-address">{email.email}</span>
                                        {email.verified ? (
                                            <span className="badge badge-success">verified</span>
                                        ) : (
                                            <span className="badge badge-warning">pending</span>
                                        )}
                                        <button
                                            className="btn-text-danger"
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    additionalEmails: settings.additionalEmails.filter((_, i) => i !== idx)
                                                });
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button className="btn-outline" onClick={() => setShowEmailModal(true)}>
                                + Add another email
                            </button>
                        </div>

                        {/* Connected Accounts Section */}
                        <div className="settings-block">
                            <h2>Connected Accounts</h2>
                            <p className="settings-desc">Connect your other accounts with CodeQuest to share your progress and scores and find your friends</p>

                            <div className="social-buttons">
                                <button
                                    className={`btn-social btn-facebook ${settings.connectedFacebook ? 'connected' : ''}`}
                                    onClick={() => handleConnectSocial('Facebook')}
                                >
                                    <span className="social-icon">f</span>
                                    {settings.connectedFacebook ? 'Connected to Facebook' : 'Connect to Facebook'}
                                </button>
                                <button
                                    className={`btn-social btn-github ${settings.connectedGitHub ? 'connected' : ''}`}
                                    onClick={() => handleConnectSocial('GitHub')}
                                >
                                    <span className="social-icon">🐙</span>
                                    {settings.connectedGitHub ? 'Connected to GitHub' : 'Connect to GitHub'}
                                </button>
                                <button
                                    className={`btn-social btn-linkedin ${settings.connectedLinkedIn ? 'connected' : ''}`}
                                    onClick={() => handleConnectSocial('LinkedIn')}
                                >
                                    <span className="social-icon">in</span>
                                    {settings.connectedLinkedIn ? 'Connected to LinkedIn' : 'Connect to LinkedIn'}
                                </button>
                            </div>
                        </div>

                        {/* Merge Accounts Section */}
                        <div className="settings-block">
                            <h2>Merge Accounts</h2>
                            <p className="settings-desc">Accidentally created two accounts? This combines another account into the one you are currently logged in as.</p>

                            <p className="merge-label">Details of the account to merge with {settings.username}</p>
                            <div className="merge-form">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="settings-input"
                                    value={settings.mergeUsername}
                                    onChange={(e) => setSettings({ ...settings, mergeUsername: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="settings-input"
                                    value={settings.mergeEmail}
                                    onChange={(e) => setSettings({ ...settings, mergeEmail: e.target.value })}
                                />
                                <button className="btn-dark" onClick={handleMergeAccount}>Submit</button>
                            </div>
                        </div>

                        {/* Export Data Section */}
                        <div className="settings-block">
                            <h2>Export Data</h2>
                            <p className="settings-desc">Create and download an archive of your CodeQuest Data.</p>
                            <button className="btn-dark" onClick={handleExportData}>
                                Create new archive
                            </button>
                        </div>

                        {/* Delete Account Section */}
                        <div className="settings-block danger-block">
                            <h2>Delete Account</h2>
                            <p className="settings-desc">
                                Delete your account and all information related to your account such as your profile page, badges earned and leaderboard positions. Please be aware that all data will be permanently lost if you delete your account.
                            </p>
                            <button className="btn-danger" onClick={() => setShowDeleteConfirm(true)}>
                                Delete Account
                            </button>
                        </div>
                    </div>
                );

            case 'teams':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Teams</h2>
                            <p className="settings-desc">Create or join teams to collaborate with other developers.</p>

                            <div className="empty-state">
                                <span className="empty-icon">👥</span>
                                <h3>No Teams Yet</h3>
                                <p>You haven't joined any teams. Create one or get invited!</p>
                                <button className="btn-primary">Create Team</button>
                            </div>
                        </div>
                    </div>
                );

            case 'password':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Change Password</h2>
                            <p className="settings-desc">Update your password regularly to keep your account secure.</p>

                            <div className="password-form">
                                <div className="form-group">
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        className="settings-input"
                                        value={settings.currentPassword}
                                        onChange={(e) => setSettings({ ...settings, currentPassword: e.target.value })}
                                        placeholder="Enter current password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        className="settings-input"
                                        value={settings.newPassword}
                                        onChange={(e) => setSettings({ ...settings, newPassword: e.target.value })}
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm New Password</label>
                                    <input
                                        type="password"
                                        className="settings-input"
                                        value={settings.confirmPassword}
                                        onChange={(e) => setSettings({ ...settings, confirmPassword: e.target.value })}
                                        placeholder="Confirm new password"
                                    />
                                </div>
                                <button className="btn-primary" onClick={handleChangePassword}>
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'subscriptions':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Subscriptions</h2>
                            <p className="settings-desc">Manage your CodeQuest subscription and billing.</p>

                            <div className="subscription-card">
                                <div className="plan-info">
                                    <h3>Free Plan</h3>
                                    <p>You are currently on the free plan</p>
                                </div>
                                <div className="plan-features">
                                    <ul>
                                        <li>✓ Access to all free problems</li>
                                        <li>✓ Basic code editor</li>
                                        <li>✓ Community support</li>
                                        <li>✗ Premium problems</li>
                                        <li>✗ Video solutions</li>
                                    </ul>
                                </div>
                                <button className="btn-primary">Upgrade to Premium</button>
                            </div>
                        </div>
                    </div>
                );

            case 'shipping':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Shipping Details</h2>
                            <p className="settings-desc">Manage your shipping address for merchandise and prizes.</p>

                            <div className="shipping-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="settings-input" placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" className="settings-input" placeholder="+91 1234567890" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address Line 1</label>
                                    <input type="text" className="settings-input" placeholder="Street address" />
                                </div>
                                <div className="form-group">
                                    <label>Address Line 2</label>
                                    <input type="text" className="settings-input" placeholder="Apartment, suite, etc. (optional)" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="settings-input" placeholder="City" />
                                    </div>
                                    <div className="form-group">
                                        <label>State</label>
                                        <input type="text" className="settings-input" placeholder="State" />
                                    </div>
                                    <div className="form-group">
                                        <label>PIN Code</label>
                                        <input type="text" className="settings-input" placeholder="123456" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <select className="settings-input">
                                        <option value="IN">India</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                </div>
                                <button className="btn-primary">Save Address</button>
                            </div>
                        </div>
                    </div>
                );

            case 'emails':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Email Preferences</h2>
                            <p className="settings-desc">Control which emails you receive from CodeQuest.</p>

                            <div className="email-prefs">
                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.emailNotifications}
                                        onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Email Notifications</span>
                                        <span className="pref-desc">Receive important account notifications</span>
                                    </div>
                                </label>

                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.weeklyDigest}
                                        onChange={(e) => setSettings({ ...settings, weeklyDigest: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Weekly Digest</span>
                                        <span className="pref-desc">Summary of your weekly progress and new challenges</span>
                                    </div>
                                </label>

                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.problemReminders}
                                        onChange={(e) => setSettings({ ...settings, problemReminders: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Problem Reminders</span>
                                        <span className="pref-desc">Daily reminders to practice coding</span>
                                    </div>
                                </label>

                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.contestReminders}
                                        onChange={(e) => setSettings({ ...settings, contestReminders: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Contest Reminders</span>
                                        <span className="pref-desc">Notifications about upcoming contests</span>
                                    </div>
                                </label>

                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.newsletterUpdates}
                                        onChange={(e) => setSettings({ ...settings, newsletterUpdates: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Newsletter & Updates</span>
                                        <span className="pref-desc">Product updates and new features</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                );

            case 'language':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Language Settings</h2>
                            <p className="settings-desc">Set your preferred languages for the platform and coding.</p>

                            <div className="language-settings">
                                <div className="form-group">
                                    <label>Interface Language</label>
                                    <select
                                        className="settings-input"
                                        value={settings.preferredLanguage}
                                        onChange={(e) => setSettings({ ...settings, preferredLanguage: e.target.value })}
                                    >
                                        <option value="en">English</option>
                                        <option value="hi">हिन्दी (Hindi)</option>
                                        <option value="es">Español (Spanish)</option>
                                        <option value="fr">Français (French)</option>
                                        <option value="de">Deutsch (German)</option>
                                        <option value="ja">日本語 (Japanese)</option>
                                        <option value="zh">中文 (Chinese)</option>
                                        <option value="ko">한국어 (Korean)</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Default Coding Language</label>
                                    <select
                                        className="settings-input"
                                        value={settings.defaultCodingLanguage}
                                        onChange={(e) => setSettings({ ...settings, defaultCodingLanguage: e.target.value })}
                                    >
                                        <option value="python">Python 3</option>
                                        <option value="javascript">JavaScript</option>
                                        <option value="java">Java</option>
                                        <option value="cpp">C++</option>
                                        <option value="c">C</option>
                                        <option value="csharp">C#</option>
                                        <option value="ruby">Ruby</option>
                                        <option value="go">Go</option>
                                        <option value="swift">Swift</option>
                                        <option value="kotlin">Kotlin</option>
                                        <option value="typescript">TypeScript</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'personalization':
                return (
                    <div className="settings-content">
                        <div className="settings-block">
                            <h2>Personalization</h2>
                            <p className="settings-desc">Customize your CodeQuest experience.</p>

                            <div className="personalization-settings">
                                <div className="form-group">
                                    <label>Theme</label>
                                    <div className="theme-selector">
                                        <button
                                            className={`theme-btn ${settings.theme === 'dark' ? 'active' : ''}`}
                                            onClick={() => handleThemeChange('dark')}
                                        >
                                            🌙 Dark
                                        </button>
                                        <button
                                            className={`theme-btn ${settings.theme === 'light' ? 'active' : ''}`}
                                            onClick={() => handleThemeChange('light')}
                                        >
                                            ☀️ Light
                                        </button>
                                        <button
                                            className={`theme-btn ${settings.theme === 'system' ? 'active' : ''}`}
                                            onClick={() => handleThemeChange('system')}
                                        >
                                            💻 System
                                        </button>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Editor Theme</label>
                                    <select
                                        className="settings-input"
                                        value={settings.editorTheme}
                                        onChange={(e) => setSettings({ ...settings, editorTheme: e.target.value })}
                                    >
                                        <option value="vs-dark">VS Code Dark</option>
                                        <option value="monokai">Monokai</option>
                                        <option value="dracula">Dracula</option>
                                        <option value="github-dark">GitHub Dark</option>
                                        <option value="one-dark-pro">One Dark Pro</option>
                                        <option value="vs-light">VS Code Light</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Font Size: {settings.fontSize}px</label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="24"
                                        value={settings.fontSize}
                                        onChange={(e) => setSettings({ ...settings, fontSize: parseInt(e.target.value) })}
                                        className="range-slider"
                                    />
                                </div>

                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.showHints}
                                        onChange={(e) => setSettings({ ...settings, showHints: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Show Hints</span>
                                        <span className="pref-desc">Display helpful hints while solving problems</span>
                                    </div>
                                </label>

                                <label className="pref-item">
                                    <input
                                        type="checkbox"
                                        checked={settings.showTimer}
                                        onChange={(e) => setSettings({ ...settings, showTimer: e.target.checked })}
                                    />
                                    <div className="pref-info">
                                        <span className="pref-title">Show Timer</span>
                                        <span className="pref-desc">Display a timer while solving problems</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="settings-page">
            <div className="settings-header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Dashboard
                </button>
            </div>

            <div className="settings-layout">
                {/* Sidebar */}
                <aside className="settings-sidebar">
                    {sidebarSections.map((section, idx) => (
                        <div key={idx} className="sidebar-section">
                            <h3 className="sidebar-title">{section.title}</h3>
                            {section.items.map(item => (
                                <button
                                    key={item.id}
                                    className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={() => setActiveSection(item.id)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    ))}

                    <button
                        className="btn-save-changes"
                        onClick={handleSaveChanges}
                        disabled={isSaving}
                    >
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>

                    {saveMessage && <p className="save-message">{saveMessage}</p>}
                </aside>

                {/* Main Content */}
                <main className="settings-main">
                    {renderContent()}
                </main>
            </div>

            {/* Add Email Modal */}
            {showEmailModal && (
                <div className="modal-overlay" onClick={() => setShowEmailModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Add Email Address</h3>
                            <button className="modal-close" onClick={() => setShowEmailModal(false)}>✕</button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="email"
                                className="settings-input"
                                placeholder="Enter email address"
                                id="newEmailInput"
                            />
                        </div>
                        <div className="modal-footer">
                            <button className="btn-outline" onClick={() => setShowEmailModal(false)}>Cancel</button>
                            <button
                                className="btn-primary"
                                onClick={() => {
                                    const email = document.getElementById('newEmailInput').value;
                                    handleAddEmail(email);
                                }}
                            >
                                Add Email
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Export Data Modal */}
            {showExportModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-body" style={{ textAlign: 'center', padding: '40px' }}>
                            <div className="loading-spinner"></div>
                            <p>Creating your data archive...</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="modal-overlay" onClick={() => setShowDeleteConfirm(false)}>
                    <div className="modal-content delete-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>⚠️ Delete Account</h3>
                            <button className="modal-close" onClick={() => setShowDeleteConfirm(false)}>✕</button>
                        </div>
                        <div className="modal-body">
                            <p className="delete-warning">
                                Are you sure you want to delete your account? This action <strong>cannot be undone</strong> and will permanently delete:
                            </p>
                            <ul className="delete-list">
                                <li>Your profile and personal information</li>
                                <li>All solved problems and progress</li>
                                <li>Earned badges and achievements</li>
                                <li>Streak history and XP</li>
                            </ul>
                            <div className="form-group">
                                <label>Type "DELETE" to confirm:</label>
                                <input type="text" className="settings-input" placeholder="DELETE" id="deleteConfirmInput" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-outline" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
                            <button
                                className="btn-danger"
                                onClick={() => {
                                    const confirmText = document.getElementById('deleteConfirmInput').value;
                                    if (confirmText === 'DELETE') {
                                        handleDeleteAccount();
                                    } else {
                                        alert('Please type DELETE to confirm');
                                    }
                                }}
                            >
                                Delete My Account
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SettingsPage;
