import { useState, useRef } from 'react';
import './ProfilePage.css';

function ProfilePage({ user, solvedProblems = [], earnedBadges = [], onBack }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [resume, setResume] = useState(null);
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [showSkillsModal, setShowSkillsModal] = useState(false);
    const [showWorkModal, setShowWorkModal] = useState(false);
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showLinksModal, setShowLinksModal] = useState(false);
    const [userSkills, setUserSkills] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef(null);

    // Work Experience state
    const [workExperiences, setWorkExperiences] = useState([]);
    const [newWork, setNewWork] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
    });

    // Education state
    const [educations, setEducations] = useState([]);
    const [newEducation, setNewEducation] = useState({
        institution: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        current: false
    });

    // Links state
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState({
        type: 'github',
        url: ''
    });

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

    // Available skills to add
    const availableSkills = [
        { name: 'Python', icon: '🐍', color: '#3776ab' },
        { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
        { name: 'Java', icon: '☕', color: '#f89820' },
        { name: 'C++', icon: '⚙️', color: '#00599C' },
        { name: 'C', icon: '©️', color: '#555555' },
        { name: 'Ruby', icon: '💎', color: '#CC342D' },
        { name: 'Go', icon: '🔵', color: '#00ADD8' },
        { name: 'TypeScript', icon: '📘', color: '#3178C6' },
        { name: 'PHP', icon: '🐘', color: '#777BB4' },
        { name: 'Swift', icon: '🍎', color: '#FA7343' },
        { name: 'Kotlin', icon: '🟣', color: '#7F52FF' },
        { name: 'Problem Solving', icon: '🧩', color: '#ff6b6b' },
        { name: 'Data Structures', icon: '📊', color: '#22c55e' },
        { name: 'Algorithms', icon: '🧮', color: '#8b5cf6' },
        { name: 'SQL', icon: '🗄️', color: '#336791' },
    ];

    // Link types
    const linkTypes = [
        { value: 'github', label: 'GitHub', icon: '🐙' },
        { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
        { value: 'portfolio', label: 'Portfolio', icon: '🌐' },
        { value: 'twitter', label: 'Twitter/X', icon: '🐦' },
        { value: 'leetcode', label: 'LeetCode', icon: '🧩' },
        { value: 'hackerrank', label: 'HackerRank', icon: '💚' },
        { value: 'codechef', label: 'CodeChef', icon: '👨‍🍳' },
        { value: 'codeforces', label: 'Codeforces', icon: '🔵' },
        { value: 'other', label: 'Other', icon: '🔗' },
    ];

    // Calculate skills dynamically based on solved problems
    const calculateSkillProgress = (skillName) => {
        const languageMap = {
            'Python': 'python',
            'JavaScript': 'javascript',
            'Java': 'java',
            'C++': 'cpp',
            'C': 'c',
            'Ruby': 'ruby',
            'Go': 'go',
            'TypeScript': 'typescript',
            'PHP': 'php',
            'Swift': 'swift',
            'Kotlin': 'kotlin',
        };

        const languageKey = languageMap[skillName]?.toLowerCase();
        let count = 0;

        if (languageKey) {
            count = solvedProblems.filter(p =>
                p.language?.toLowerCase() === languageKey ||
                p.category?.toLowerCase() === languageKey
            ).length;
        } else if (skillName === 'Problem Solving') {
            count = solvedProblems.length;
        } else if (skillName === 'Data Structures') {
            count = solvedProblems.filter(p =>
                p.topic?.toLowerCase().includes('array') ||
                p.topic?.toLowerCase().includes('string') ||
                p.topic?.toLowerCase().includes('list') ||
                p.topic?.toLowerCase().includes('tree') ||
                p.topic?.toLowerCase().includes('graph')
            ).length;
        } else if (skillName === 'Algorithms') {
            count = solvedProblems.filter(p =>
                p.topic?.toLowerCase().includes('sort') ||
                p.topic?.toLowerCase().includes('search') ||
                p.topic?.toLowerCase().includes('recursion') ||
                p.topic?.toLowerCase().includes('dynamic')
            ).length;
        }

        // Progress scales: 0-5 = Beginner, 6-15 = Intermediate, 16+ = Advanced
        const progress = Math.min(count * 5, 100);
        const level = count < 6 ? 'Beginner' : count < 16 ? 'Intermediate' : 'Advanced';

        return { progress, level, problemCount: count };
    };

    // Get dynamic skills data
    const getSkillsData = () => {
        const selectedSkillNames = userSkills.length > 0 ? userSkills : ['Python', 'JavaScript', 'Java', 'Problem Solving', 'Data Structures'];

        return selectedSkillNames.map(skillName => {
            const { progress, level, problemCount } = calculateSkillProgress(skillName);
            const skillInfo = availableSkills.find(s => s.name === skillName) || {};
            return {
                name: skillName,
                level,
                progress: Math.max(progress, 10), // Minimum 10% for visual
                problemCount,
                icon: skillInfo.icon,
                color: skillInfo.color
            };
        });
    };

    const skills = getSkillsData();

    // Certification definitions - dynamic based on performance
    const getCertifications = () => {
        const pythonProblems = solvedProblems.filter(p => p.language?.toLowerCase() === 'python').length;
        const javaProblems = solvedProblems.filter(p => p.language?.toLowerCase() === 'java').length;
        const jsProblems = solvedProblems.filter(p => p.language?.toLowerCase() === 'javascript').length;

        return [
            {
                id: 1,
                name: 'Java Basic',
                verified: javaProblems >= 10,
                progress: Math.min((javaProblems / 10) * 100, 100),
                date: javaProblems >= 10 ? new Date().toISOString().split('T')[0] : null,
                color: '#22c55e'
            },
            {
                id: 2,
                name: 'Python Basic',
                verified: pythonProblems >= 10,
                progress: Math.min((pythonProblems / 10) * 100, 100),
                color: '#3776ab'
            },
            {
                id: 3,
                name: 'JavaScript Intermediate',
                verified: jsProblems >= 20,
                progress: Math.min((jsProblems / 20) * 100, 100),
                color: '#f7df1e'
            },
        ];
    };

    const certifications = getCertifications();

    // Calculate profile completion
    const profileSections = [
        { name: 'Basic Info', completed: true },
        { name: 'Email', completed: !!user.email },
        { name: 'Skills', completed: skills.length > 0 },
        { name: 'Resume', completed: !!resume },
        { name: 'Work Experience', completed: workExperiences.length > 0 },
        { name: 'Education', completed: educations.length > 0 },
    ];
    const completedCount = profileSections.filter(s => s.completed).length;
    const completionPercent = Math.round((completedCount / profileSections.length) * 100);

    // Resume handlers
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileInput = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (!allowedTypes.includes(file.type)) {
            alert('Please upload a PDF or Word document');
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            alert('File size should be less than 5MB');
            return;
        }

        setResume({
            name: file.name,
            size: (file.size / 1024).toFixed(2) + ' KB',
            type: file.type,
            uploadDate: new Date().toLocaleDateString()
        });
        setShowResumeModal(false);
    };

    const removeResume = () => {
        setResume(null);
    };

    // Skills handlers
    const toggleSkill = (skillName) => {
        setUserSkills(prev => {
            if (prev.includes(skillName)) {
                return prev.filter(s => s !== skillName);
            } else {
                return [...prev, skillName];
            }
        });
    };

    // Work Experience handlers
    const addWorkExperience = () => {
        if (!newWork.company || !newWork.position) {
            alert('Please fill in company and position');
            return;
        }
        setWorkExperiences(prev => [...prev, { ...newWork, id: Date.now() }]);
        setNewWork({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ''
        });
        setShowWorkModal(false);
    };

    const removeWorkExperience = (id) => {
        setWorkExperiences(prev => prev.filter(w => w.id !== id));
    };

    // Education handlers
    const addEducation = () => {
        if (!newEducation.institution || !newEducation.degree) {
            alert('Please fill in institution and degree');
            return;
        }
        setEducations(prev => [...prev, { ...newEducation, id: Date.now() }]);
        setNewEducation({
            institution: '',
            degree: '',
            field: '',
            startYear: '',
            endYear: '',
            current: false
        });
        setShowEducationModal(false);
    };

    const removeEducation = (id) => {
        setEducations(prev => prev.filter(e => e.id !== id));
    };

    // Links handlers
    const addLink = () => {
        if (!newLink.url) {
            alert('Please enter a URL');
            return;
        }
        const linkInfo = linkTypes.find(l => l.value === newLink.type);
        setLinks(prev => [...prev, { ...newLink, id: Date.now(), icon: linkInfo?.icon, label: linkInfo?.label }]);
        setNewLink({ type: 'github', url: '' });
        setShowLinksModal(false);
    };

    const removeLink = (id) => {
        setLinks(prev => prev.filter(l => l.id !== id));
    };

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
                            <button className="add-btn" onClick={() => setShowResumeModal(true)}>
                                + Add Resume
                            </button>
                        </div>
                        {resume ? (
                            <div className="resume-uploaded">
                                <div className="resume-file">
                                    <span className="resume-icon">📄</span>
                                    <div className="resume-info">
                                        <p className="resume-name">{resume.name}</p>
                                        <p className="resume-meta">{resume.size} • Uploaded {resume.uploadDate}</p>
                                    </div>
                                    <button className="remove-resume-btn" onClick={removeResume}>✕</button>
                                </div>
                            </div>
                        ) : (
                            <p className="placeholder-text">Add your resume here</p>
                        )}
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
                            <button className="add-btn" onClick={() => setShowWorkModal(true)}>+ Add Work Experience</button>
                        </div>
                        {workExperiences.length > 0 ? (
                            <div className="experience-list">
                                {workExperiences.map(work => (
                                    <div key={work.id} className="experience-item">
                                        <div className="experience-icon">💼</div>
                                        <div className="experience-details">
                                            <h4>{work.position}</h4>
                                            <p className="experience-company">{work.company}</p>
                                            <p className="experience-date">
                                                {work.startDate} - {work.current ? 'Present' : work.endDate}
                                            </p>
                                            {work.description && <p className="experience-desc">{work.description}</p>}
                                        </div>
                                        <button className="remove-btn" onClick={() => removeWorkExperience(work.id)}>✕</button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="placeholder-text">
                                Add your work experience. Don't forget to add those internships as <span className="highlight">well</span>.
                            </p>
                        )}
                    </div>

                    {/* Education */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>🎓 Education</h3>
                            <button className="add-btn" onClick={() => setShowEducationModal(true)}>+ Add Education</button>
                        </div>
                        {educations.length > 0 ? (
                            <div className="experience-list">
                                {educations.map(edu => (
                                    <div key={edu.id} className="experience-item">
                                        <div className="experience-icon">🎓</div>
                                        <div className="experience-details">
                                            <h4>{edu.degree} {edu.field && `in ${edu.field}`}</h4>
                                            <p className="experience-company">{edu.institution}</p>
                                            <p className="experience-date">
                                                {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                                            </p>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeEducation(edu.id)}>✕</button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="placeholder-text">
                                We believe in skills over pedigree; but go ahead add your education for the recruiters who don't.
                            </p>
                        )}
                    </div>

                    {/* Links */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>🔗 Links</h3>
                            <button className="add-btn" onClick={() => setShowLinksModal(true)}>+ Add Links</button>
                        </div>
                        {links.length > 0 ? (
                            <div className="links-list">
                                {links.map(link => (
                                    <div key={link.id} className="link-item">
                                        <span className="link-icon">{link.icon}</span>
                                        <div className="link-details">
                                            <span className="link-type">{link.label}</span>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-url">
                                                {link.url}
                                            </a>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeLink(link.id)}>✕</button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="placeholder-text">
                                Add all the relevant links that help in knowing you as a hacker
                            </p>
                        )}
                    </div>

                    {/* My Skills */}
                    <div className="profile-section">
                        <div className="section-header-row">
                            <h3>⚡ My Skills</h3>
                            <button className="add-btn" onClick={() => setShowSkillsModal(true)}>+ Add Skills</button>
                        </div>
                        <div className="skills-list">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">
                                            {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                            {skill.name}
                                        </span>
                                        <span className="skill-level" style={{ color: skill.color || 'var(--accent-primary)' }}>
                                            {skill.level}
                                        </span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{
                                                width: `${skill.progress}%`,
                                                background: skill.color ? `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` : 'var(--gradient-primary)'
                                            }}
                                        ></div>
                                    </div>
                                    <span className="skill-problems">{skill.problemCount} problems solved</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* Resume Upload Modal */}
            {showResumeModal && (
                <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
                    <div className="modal-content resume-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📄 Upload Resume</h3>
                            <button className="modal-close" onClick={() => setShowResumeModal(false)}>✕</button>
                        </div>
                        <div
                            className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <div className="upload-icon">📁</div>
                            <p className="upload-text">Drag and drop your resume here</p>
                            <p className="upload-or">or</p>
                            <button
                                className="browse-btn"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Browse Files
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileInput}
                                style={{ display: 'none' }}
                            />
                            <p className="upload-hint">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Skills Modal */}
            {showSkillsModal && (
                <div className="modal-overlay" onClick={() => setShowSkillsModal(false)}>
                    <div className="modal-content skills-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>⚡ Select Your Skills</h3>
                            <button className="modal-close" onClick={() => setShowSkillsModal(false)}>✕</button>
                        </div>
                        <p className="modal-description">
                            Choose the programming languages and skills you want to track. Your progress will be calculated based on the problems you solve.
                        </p>
                        <div className="skills-grid">
                            {availableSkills.map(skill => (
                                <div
                                    key={skill.name}
                                    className={`skill-option ${userSkills.includes(skill.name) ? 'selected' : ''}`}
                                    onClick={() => toggleSkill(skill.name)}
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <span className="skill-option-icon">{skill.icon}</span>
                                    <span className="skill-option-name">{skill.name}</span>
                                    {userSkills.includes(skill.name) && (
                                        <span className="skill-check">✓</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="modal-actions">
                            <button
                                className="save-skills-btn"
                                onClick={() => setShowSkillsModal(false)}
                            >
                                Save Skills
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Work Experience Modal */}
            {showWorkModal && (
                <div className="modal-overlay" onClick={() => setShowWorkModal(false)}>
                    <div className="modal-content form-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>💼 Add Work Experience</h3>
                            <button className="modal-close" onClick={() => setShowWorkModal(false)}>✕</button>
                        </div>
                        <div className="form-group">
                            <label>Company Name *</label>
                            <input
                                type="text"
                                placeholder="e.g., Google, Microsoft"
                                value={newWork.company}
                                onChange={e => setNewWork({ ...newWork, company: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Position/Title *</label>
                            <input
                                type="text"
                                placeholder="e.g., Software Engineer Intern"
                                value={newWork.position}
                                onChange={e => setNewWork({ ...newWork, position: e.target.value })}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Start Date</label>
                                <input
                                    type="month"
                                    value={newWork.startDate}
                                    onChange={e => setNewWork({ ...newWork, startDate: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <input
                                    type="month"
                                    value={newWork.endDate}
                                    onChange={e => setNewWork({ ...newWork, endDate: e.target.value })}
                                    disabled={newWork.current}
                                />
                            </div>
                        </div>
                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="currentWork"
                                checked={newWork.current}
                                onChange={e => setNewWork({ ...newWork, current: e.target.checked })}
                            />
                            <label htmlFor="currentWork">I currently work here</label>
                        </div>
                        <div className="form-group">
                            <label>Description (Optional)</label>
                            <textarea
                                placeholder="Describe your responsibilities and achievements..."
                                value={newWork.description}
                                onChange={e => setNewWork({ ...newWork, description: e.target.value })}
                                rows={3}
                            />
                        </div>
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setShowWorkModal(false)}>Cancel</button>
                            <button className="save-btn" onClick={addWorkExperience}>Add Experience</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Education Modal */}
            {showEducationModal && (
                <div className="modal-overlay" onClick={() => setShowEducationModal(false)}>
                    <div className="modal-content form-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>🎓 Add Education</h3>
                            <button className="modal-close" onClick={() => setShowEducationModal(false)}>✕</button>
                        </div>
                        <div className="form-group">
                            <label>Institution *</label>
                            <input
                                type="text"
                                placeholder="e.g., IIT Delhi, Stanford University"
                                value={newEducation.institution}
                                onChange={e => setNewEducation({ ...newEducation, institution: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Degree *</label>
                            <input
                                type="text"
                                placeholder="e.g., B.Tech, M.S., Ph.D."
                                value={newEducation.degree}
                                onChange={e => setNewEducation({ ...newEducation, degree: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Field of Study</label>
                            <input
                                type="text"
                                placeholder="e.g., Computer Science, Data Science"
                                value={newEducation.field}
                                onChange={e => setNewEducation({ ...newEducation, field: e.target.value })}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Start Year</label>
                                <input
                                    type="number"
                                    placeholder="e.g., 2020"
                                    min="1950"
                                    max="2030"
                                    value={newEducation.startYear}
                                    onChange={e => setNewEducation({ ...newEducation, startYear: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>End Year</label>
                                <input
                                    type="number"
                                    placeholder="e.g., 2024"
                                    min="1950"
                                    max="2030"
                                    value={newEducation.endYear}
                                    onChange={e => setNewEducation({ ...newEducation, endYear: e.target.value })}
                                    disabled={newEducation.current}
                                />
                            </div>
                        </div>
                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="currentEdu"
                                checked={newEducation.current}
                                onChange={e => setNewEducation({ ...newEducation, current: e.target.checked })}
                            />
                            <label htmlFor="currentEdu">I'm currently studying here</label>
                        </div>
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setShowEducationModal(false)}>Cancel</button>
                            <button className="save-btn" onClick={addEducation}>Add Education</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Links Modal */}
            {showLinksModal && (
                <div className="modal-overlay" onClick={() => setShowLinksModal(false)}>
                    <div className="modal-content form-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>🔗 Add Link</h3>
                            <button className="modal-close" onClick={() => setShowLinksModal(false)}>✕</button>
                        </div>
                        <div className="form-group">
                            <label>Link Type</label>
                            <select
                                value={newLink.type}
                                onChange={e => setNewLink({ ...newLink, type: e.target.value })}
                            >
                                {linkTypes.map(type => (
                                    <option key={type.value} value={type.value}>
                                        {type.icon} {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>URL *</label>
                            <input
                                type="url"
                                placeholder="https://example.com/yourprofile"
                                value={newLink.url}
                                onChange={e => setNewLink({ ...newLink, url: e.target.value })}
                            />
                        </div>
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setShowLinksModal(false)}>Cancel</button>
                            <button className="save-btn" onClick={addLink}>Add Link</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;
