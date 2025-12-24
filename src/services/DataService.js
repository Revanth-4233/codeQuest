// DataService.js - Database operations for CodeQuest
// Uses Supabase as cloud database (NO localStorage)

import { supabase } from './supabaseClient';
import { problems as staticProblems, languageSpecificProblems, categories, badges } from '../data/problems';

const STORAGE_KEYS = {
    ADMIN_PASSWORD: 'codequest_admin_password',
};

// Default admin password
const DEFAULT_ADMIN_PASSWORD = 'admin123';

class DataService {
    constructor() {
        this.useSupabase = true;
        this.initialized = false;
        this.customProblemsCache = [];
        this.connectionError = null;
    }

    // ==================== INITIALIZATION ====================

    /**
     * Initialize the database connection
     */
    async initialize() {
        if (this.initialized) return;

        try {
            // Test Supabase connection
            const { data, error } = await supabase
                .from('problems')
                .select('id')
                .limit(1);

            if (error) {
                console.error('Supabase connection error:', error.message);
                this.connectionError = error.message;
                this.useSupabase = false;
            } else {
                console.log('✅ Connected to Supabase successfully!');
                this.useSupabase = true;
                this.connectionError = null;
            }
        } catch (err) {
            console.error('Supabase connection failed:', err.message);
            this.connectionError = err.message;
            this.useSupabase = false;
        }

        this.initialized = true;
    }

    // ==================== PROBLEMS ====================

    /**
     * Get all problems (static + custom from Supabase)
     */
    async getAllProblemsAsync() {
        await this.initialize();
        const customProblems = await this.getCustomProblemsAsync();
        return [...staticProblems, ...customProblems];
    }

    /**
     * Sync version for compatibility (uses cache)
     */
    getAllProblems() {
        return [...staticProblems, ...this.customProblemsCache];
    }

    /**
     * Get only custom (user-added) problems from Supabase
     */
    async getCustomProblemsAsync() {
        await this.initialize();

        if (!this.useSupabase) {
            console.warn('Supabase not connected. Cannot fetch custom problems.');
            return [];
        }

        try {
            const { data, error } = await supabase
                .from('problems')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            // Transform from snake_case to camelCase
            const problems = (data || []).map(p => this.transformFromDB(p));
            this.customProblemsCache = problems;
            return problems;
        } catch (err) {
            console.error('Supabase fetch error:', err);
            this.connectionError = err.message;
            return [];
        }
    }

    /**
     * Sync version for compatibility
     */
    getCustomProblems() {
        return this.customProblemsCache;
    }

    /**
     * Get a single problem by ID
     */
    async getProblemByIdAsync(id) {
        const allProblems = await this.getAllProblemsAsync();
        return allProblems.find(p => p.id === id);
    }

    getProblemById(id) {
        const allProblems = this.getAllProblems();
        return allProblems.find(p => p.id === id);
    }

    /**
     * Add a new problem to Supabase
     */
    async addProblem(problemData) {
        await this.initialize();

        if (!this.useSupabase) {
            return {
                success: false,
                error: 'Supabase not connected. Please check your connection.'
            };
        }

        try {
            // Generate new ID
            const customProblems = await this.getCustomProblemsAsync();
            const maxId = customProblems.length > 0
                ? Math.max(...customProblems.map(p => p.id))
                : 999;

            const newProblem = {
                ...problemData,
                id: maxId + 1,
                slug: this.generateSlug(problemData.title),
                solved: false,
                isCustom: true,
                createdAt: new Date().toISOString()
            };

            const dbProblem = this.transformToDB(newProblem);
            const { data, error } = await supabase
                .from('problems')
                .insert([dbProblem])
                .select()
                .single();

            if (error) throw error;

            const savedProblem = this.transformFromDB(data);
            this.customProblemsCache.push(savedProblem);

            return { success: true, problem: savedProblem };
        } catch (err) {
            console.error('Supabase insert error:', err);
            return { success: false, error: err.message };
        }
    }

    /**
     * Update an existing problem in Supabase
     */
    async updateProblem(id, updates) {
        await this.initialize();

        if (!this.useSupabase) {
            return {
                success: false,
                error: 'Supabase not connected. Please check your connection.'
            };
        }

        try {
            const dbUpdates = this.transformToDB({ ...updates, updatedAt: new Date().toISOString() });
            const { data, error } = await supabase
                .from('problems')
                .update(dbUpdates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;

            const updatedProblem = this.transformFromDB(data);
            const idx = this.customProblemsCache.findIndex(p => p.id === id);
            if (idx !== -1) {
                this.customProblemsCache[idx] = updatedProblem;
            }

            return { success: true, problem: updatedProblem };
        } catch (err) {
            console.error('Supabase update error:', err);
            return { success: false, error: err.message };
        }
    }

    /**
     * Delete a problem from Supabase
     */
    async deleteProblem(id) {
        await this.initialize();

        if (!this.useSupabase) {
            return {
                success: false,
                error: 'Supabase not connected. Please check your connection.'
            };
        }

        try {
            const { error } = await supabase
                .from('problems')
                .delete()
                .eq('id', id);

            if (error) throw error;

            this.customProblemsCache = this.customProblemsCache.filter(p => p.id !== id);
            return { success: true };
        } catch (err) {
            console.error('Supabase delete error:', err);
            return { success: false, error: err.message };
        }
    }

    /**
     * Transform problem object to database format (snake_case)
     */
    transformToDB(problem) {
        return {
            id: problem.id,
            title: problem.title,
            slug: problem.slug,
            difficulty: problem.difficulty,
            category: problem.category,
            points: problem.points,
            description: problem.description,
            task: problem.task,
            constraints: problem.constraints,
            hints: problem.hints,
            examples: problem.examples,
            starter_code: problem.starterCode,
            solution: problem.solution,
            test_cases: problem.testCases,
            is_custom: true,
            created_at: problem.createdAt,
            updated_at: problem.updatedAt
        };
    }

    /**
     * Transform database object to problem format (camelCase)
     */
    transformFromDB(dbProblem) {
        return {
            id: dbProblem.id,
            title: dbProblem.title,
            slug: dbProblem.slug,
            difficulty: dbProblem.difficulty,
            category: dbProblem.category,
            points: dbProblem.points,
            description: dbProblem.description,
            task: dbProblem.task,
            constraints: dbProblem.constraints,
            hints: dbProblem.hints || [],
            examples: dbProblem.examples || [],
            starterCode: dbProblem.starter_code || {},
            solution: dbProblem.solution || {},
            testCases: dbProblem.test_cases || [],
            isCustom: true,
            createdAt: dbProblem.created_at,
            updatedAt: dbProblem.updated_at
        };
    }

    /**
     * Generate URL-friendly slug from title
     */
    generateSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    // ==================== ADMIN AUTH ====================

    verifyAdminPassword(password) {
        const storedPassword = localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD) || DEFAULT_ADMIN_PASSWORD;
        return password === storedPassword;
    }

    changeAdminPassword(currentPassword, newPassword) {
        if (!this.verifyAdminPassword(currentPassword)) {
            return { success: false, error: 'Current password is incorrect' };
        }
        localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, newPassword);
        return { success: true };
    }

    isUsingDefaultPassword() {
        const storedPassword = localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD);
        return !storedPassword || storedPassword === DEFAULT_ADMIN_PASSWORD;
    }

    // ==================== CATEGORIES & BADGES ====================

    getCategories() {
        return categories;
    }

    getBadges() {
        return badges;
    }

    // ==================== STATISTICS ====================

    async getStatisticsAsync() {
        const allProblems = await this.getAllProblemsAsync();
        const customProblems = await this.getCustomProblemsAsync();

        return {
            totalProblems: allProblems.length,
            staticProblems: staticProblems.length,
            customProblems: customProblems.length,
            byDifficulty: {
                easy: allProblems.filter(p => p.difficulty === 'easy').length,
                medium: allProblems.filter(p => p.difficulty === 'medium').length,
                hard: allProblems.filter(p => p.difficulty === 'hard').length
            },
            byCategory: this.groupByCategory(allProblems),
            usingSupabase: this.useSupabase,
            connectionError: this.connectionError
        };
    }

    getStatistics() {
        const allProblems = this.getAllProblems();
        const customProblems = this.getCustomProblems();

        return {
            totalProblems: allProblems.length,
            staticProblems: staticProblems.length,
            customProblems: customProblems.length,
            byDifficulty: {
                easy: allProblems.filter(p => p.difficulty === 'easy').length,
                medium: allProblems.filter(p => p.difficulty === 'medium').length,
                hard: allProblems.filter(p => p.difficulty === 'hard').length
            },
            byCategory: this.groupByCategory(allProblems),
            usingSupabase: this.useSupabase,
            connectionError: this.connectionError
        };
    }

    groupByCategory(problems) {
        return problems.reduce((acc, problem) => {
            const category = problem.category || 'Uncategorized';
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});
    }

    // ==================== EXPORT/IMPORT ====================

    exportProblems() {
        const customProblems = this.getCustomProblems();
        return JSON.stringify(customProblems, null, 2);
    }

    async importProblems(jsonString) {
        try {
            const problems = JSON.parse(jsonString);
            if (!Array.isArray(problems)) {
                return { success: false, error: 'Invalid format' };
            }

            let importedCount = 0;
            for (const problem of problems) {
                const result = await this.addProblem(problem);
                if (result.success) importedCount++;
            }

            return { success: true, count: importedCount };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // ==================== CONNECTION STATUS ====================

    isUsingCloud() {
        return this.useSupabase;
    }

    getConnectionError() {
        return this.connectionError;
    }

    async refreshFromCloud() {
        this.initialized = false;
        await this.getCustomProblemsAsync();
    }
}

// Export singleton instance
const dataService = new DataService();
export default dataService;
