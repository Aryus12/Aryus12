/**
 * CloudFlow API Client
 * Communication avec le backend PHP et le service Python IA
 */

// Configuration de l'API
const API_CONFIG = {
    // URL de l'API PHP principale
    phpApiUrl: 'http://localhost:8080',
    // URL du service Python IA
    pythonAiUrl: 'http://127.0.0.1:8000',
    // Clé API (à remplacer par la vraie clé)
    apiKey: 'your-secret-api-key-here',
    // Timeout en millisecondes
    timeout: 30000
};

/**
 * Classe principale pour la communication API
 */
class CloudFlowAPI {
    constructor(config = API_CONFIG) {
        this.phpApiUrl = config.phpApiUrl;
        this.pythonAiUrl = config.pythonAiUrl;
        this.apiKey = config.apiKey;
        this.timeout = config.timeout;
    }

    /**
     * Méthode générique pour les requêtes HTTP
     */
    async request(url, options = {}) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers
        };

        // Ajouter l'authentification si nécessaire
        if (this.apiKey && !url.includes('/auth/')) {
            headers['Authorization'] = `Bearer ${this.apiKey}`;
        }

        const config = {
            ...options,
            headers,
            timeout: this.timeout
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const error = await response.json().catch(() => ({ message: 'Erreur inconnue' }));
                throw new Error(error.message || `Erreur HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur API:', error);
            throw error;
        }
    }

    // ============================================
    // AUTHENTIFICATION
    // ============================================

    /**
     * Connexion
     */
    async login(email, password) {
        return this.request(`${this.phpApiUrl}/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    /**
     * Inscription
     */
    async register(name, email, password) {
        return this.request(`${this.phpApiUrl}/api/auth/register`, {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });
    }

    /**
     * Mot de passe oublié
     */
    async forgotPassword(email) {
        return this.request(`${this.phpApiUrl}/api/auth/forgot-password`, {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    }

    /**
     * Réinitialiser le mot de passe
     */
    async resetPassword(token, newPassword) {
        return this.request(`${this.phpApiUrl}/api/auth/reset-password`, {
            method: 'POST',
            body: JSON.stringify({ token, new_password: newPassword })
        });
    }

    /**
     * Déconnexion
     */
    async logout() {
        return this.request(`${this.phpApiUrl}/api/auth/logout`, {
            method: 'POST'
        });
    }

    // ============================================
    // DASHBOARD
    // ============================================

    /**
     * Statistiques du dashboard
     */
    async getDashboardStats(userId) {
        const params = userId ? `?user_id=${userId}` : '';
        return this.request(`${this.phpApiUrl}/api/dashboard/stats${params}`);
    }

    /**
     * Activité récente
     */
    async getActivity(userId, limit = 20) {
        const params = `?user_id=${userId}&limit=${limit}`;
        return this.request(`${this.phpApiUrl}/api/dashboard/activity${params}`);
    }

    /**
     * Tâches en retard
     */
    async getOverdueTasks(userId) {
        const params = userId ? `?user_id=${userId}` : '';
        return this.request(`${this.phpApiUrl}/api/dashboard/overdue-tasks${params}`);
    }

    /**
     * Tâches arrivant à échéance
     */
    async getUpcomingDeadlines(userId, days = 7) {
        const params = `?user_id=${userId}&days=${days}`;
        return this.request(`${this.phpApiUrl}/api/dashboard/upcoming-deadlines${params}`);
    }

    // ============================================
    // PROJETS
    // ============================================

    /**
     * Liste des projets
     */
    async getProjects(userId) {
        const params = userId ? `?user_id=${userId}` : '';
        return this.request(`${this.phpApiUrl}/api/projects${params}`);
    }

    /**
     * Créer un projet
     */
    async createProject(projectData) {
        return this.request(`${this.phpApiUrl}/api/projects`, {
            method: 'POST',
            body: JSON.stringify(projectData)
        });
    }

    /**
     * Détails d'un projet
     */
    async getProject(projectId) {
        return this.request(`${this.phpApiUrl}/api/projects/${projectId}`);
    }

    /**
     * Mettre à jour un projet
     */
    async updateProject(projectId, projectData) {
        return this.request(`${this.phpApiUrl}/api/projects/${projectId}`, {
            method: 'PUT',
            body: JSON.stringify(projectData)
        });
    }

    /**
     * Supprimer un projet
     */
    async deleteProject(projectId) {
        return this.request(`${this.phpApiUrl}/api/projects/${projectId}`, {
            method: 'DELETE'
        });
    }

    // ============================================
    // TÂCHES
    // ============================================

    /**
     * Liste des tâches
     */
    async getTasks(projectId) {
        const params = projectId ? `?project_id=${projectId}` : '';
        return this.request(`${this.phpApiUrl}/api/tasks${params}`);
    }

    /**
     * Créer une tâche
     */
    async createTask(taskData) {
        return this.request(`${this.phpApiUrl}/api/tasks`, {
            method: 'POST',
            body: JSON.stringify(taskData)
        });
    }

    /**
     * Détails d'une tâche
     */
    async getTask(taskId) {
        return this.request(`${this.phpApiUrl}/api/tasks/${taskId}`);
    }

    /**
     * Mettre à jour une tâche
     */
    async updateTask(taskId, taskData) {
        return this.request(`${this.phpApiUrl}/api/tasks/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify(taskData)
        });
    }

    /**
     * Supprimer une tâche
     */
    async deleteTask(taskId) {
        return this.request(`${this.phpApiUrl}/api/tasks/${taskId}`, {
            method: 'DELETE'
        });
    }

    // ============================================
    // IA - TÂCHES
    // ============================================

    /**
     * Suggestions d'amélioration pour une tâche
     */
    async suggestTaskImprovements(taskData, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/tasks/suggest-improvements`, {
            method: 'POST',
            body: JSON.stringify({ task_data: taskData, service })
        });
    }

    /**
     * Prioriser automatiquement des tâches
     */
    async prioritizeTasks(tasks, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/tasks/prioritize`, {
            method: 'POST',
            body: JSON.stringify({ tasks, service })
        });
    }

    /**
     * Décomposer une tâche en sous-tâches
     */
    async breakdownTask(taskData, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/tasks/breakdown`, {
            method: 'POST',
            body: JSON.stringify({ task_data: taskData, service })
        });
    }

    /**
     * Analyser la complexité d'une tâche
     */
    async analyzeTaskComplexity(taskData, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/tasks/analyze-complexity`, {
            method: 'POST',
            body: JSON.stringify({ task_data: taskData, service })
        });
    }

    /**
     * Suggérer un deadline
     */
    async suggestTaskDeadline(taskData, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/tasks/suggest-deadline`, {
            method: 'POST',
            body: JSON.stringify({ task_data: taskData, service })
        });
    }

    // ============================================
    // IA - PROJETS
    // ============================================

    /**
     * Optimiser un sprint
     */
    async optimizeSprint(projectId, teamMembers, tasks, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/projects/optimize-sprint`, {
            method: 'POST',
            body: JSON.stringify({
                project_id: projectId,
                team_members: teamMembers,
                tasks,
                service
            })
        });
    }

    /**
     * Générer un rapport de progression
     */
    async generateProgressReport(projectData, tasks, activity, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/projects/generate-report`, {
            method: 'POST',
            body: JSON.stringify({
                project_data: projectData,
                tasks,
                activity,
                service
            })
        });
    }

    /**
     * Suggérer des jalons
     */
    async suggestMilestones(projectData, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/projects/suggest-milestones`, {
            method: 'POST',
            body: JSON.stringify({ project_data: projectData, service })
        });
    }

    /**
     * Analyser les risques
     */
    async analyzeProjectRisks(projectData, service = 'openai') {
        return this.request(`${this.phpApiUrl}/api/projects/analyze-risks`, {
            method: 'POST',
            body: JSON.stringify({ project_data: projectData, service })
        });
    }

    // ============================================
    // IA GÉNÉRAL
    // ============================================

    /**
     * Générer du texte avec l'IA
     */
    async generateText(prompt, service = 'openai', maxTokens = 1024) {
        return this.request(`${this.phpApiUrl}/api/ai/generate`, {
            method: 'POST',
            body: JSON.stringify({ prompt, service, max_tokens: maxTokens })
        });
    }

    /**
     * Chat avec l'IA
     */
    async chat(messages, service = 'openai', maxTokens = 1024) {
        return this.request(`${this.phpApiUrl}/api/ai/chat`, {
            method: 'POST',
            body: JSON.stringify({ messages, service, max_tokens: maxTokens })
        });
    }

    /**
     * Statut des services IA
     */
    async getAIServicesStatus() {
        return this.request(`${this.phpApiUrl}/api/ai/services/status`);
    }

    // ============================================
    // UTILISATEURS
    // ============================================

    /**
     * Liste des utilisateurs
     */
    async getUsers() {
        return this.request(`${this.phpApiUrl}/api/users`);
    }

    /**
     * Créer un utilisateur
     */
    async createUser(userData) {
        return this.request(`${this.phpApiUrl}/api/users`, {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    /**
     * Détails d'un utilisateur
     */
    async getUser(userId) {
        return this.request(`${this.phpApiUrl}/api/users/${userId}`);
    }

    /**
     * Mettre à jour un utilisateur
     */
    async updateUser(userId, userData) {
        return this.request(`${this.phpApiUrl}/api/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    /**
     * Supprimer un utilisateur
     */
    async deleteUser(userId) {
        return this.request(`${this.phpApiUrl}/api/users/${userId}`, {
            method: 'DELETE'
        });
    }

    /**
     * Profil utilisateur
     */
    async getUserProfile(userId) {
        return this.request(`${this.phpApiUrl}/api/users/${userId}/profile`);
    }

    // ============================================
    // PARAMÈTRES
    // ============================================

    /**
     * Paramètres utilisateur
     */
    async getSettings(userId) {
        return this.request(`${this.phpApiUrl}/api/settings/${userId}`);
    }

    /**
     * Mettre à jour un paramètre
     */
    async updateSetting(userId, keyName, value) {
        return this.request(`${this.phpApiUrl}/api/settings/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({ key_name: keyName, value })
        });
    }

    /**
     * Supprimer un paramètre
     */
    async deleteSetting(userId, keyName) {
        return this.request(`${this.phpApiUrl}/api/settings/${userId}?key_name=${keyName}`, {
            method: 'DELETE'
        });
    }

    /**
     * Mettre à jour le profil
     */
    async updateProfile(userId, profileData) {
        return this.request(`${this.phpApiUrl}/api/settings/${userId}/profile`, {
            method: 'PUT',
            body: JSON.stringify(profileData)
        });
    }

    /**
     * Changer le mot de passe
     */
    async changePassword(userId, currentPassword, newPassword) {
        return this.request(`${this.phpApiUrl}/api/settings/${userId}/change-password`, {
            method: 'POST',
            body: JSON.stringify({
                current_password: currentPassword,
                new_password: newPassword
            })
        });
    }

    /**
     * Paramètres du workspace
     */
    async getWorkspaceSettings(userId) {
        return this.request(`${this.phpApiUrl}/api/settings/${userId}/workspace`);
    }

    // ============================================
    // FACTURATION
    // ============================================

    /**
     * Plans disponibles
     */
    async getPlans() {
        return this.request(`${this.phpApiUrl}/api/billing/plans`);
    }

    /**
     * Créer un checkout
     */
    async createCheckout(planId, userId) {
        return this.request(`${this.phpApiUrl}/api/billing/checkout`, {
            method: 'POST',
            body: JSON.stringify({ plan_id: planId, user_id: userId })
        });
    }

    /**
     * Abonnement utilisateur
     */
    async getSubscription(userId) {
        return this.request(`${this.phpApiUrl}/api/billing/${userId}/subscription`);
    }

    /**
     * Factures
     */
    async getInvoices(userId) {
        return this.request(`${this.phpApiUrl}/api/billing/${userId}/invoices`);
    }

    /**
     * Méthodes de paiement
     */
    async getPaymentMethods(userId) {
        return this.request(`${this.phpApiUrl}/api/billing/${userId}/payment-methods`);
    }

    /**
     * Annuler l'abonnement
     */
    async cancelSubscription(userId) {
        return this.request(`${this.phpApiUrl}/api/billing/${userId}/cancel`, {
            method: 'POST'
        });
    }

    // ============================================
    // CONTACT
    // ============================================

    /**
     * Envoyer un message
     */
    async sendMessage(messageData) {
        return this.request(`${this.phpApiUrl}/api/contact/send`, {
            method: 'POST',
            body: JSON.stringify(messageData)
        });
    }

    /**
     * Messages reçus (admin)
     */
    async getMessages(status) {
        const params = status ? `?status=${status}` : '';
        return this.request(`${this.phpApiUrl}/api/contact/messages${params}`);
    }

    /**
     * Marquer comme lu
     */
    async markMessageAsRead(messageId) {
        return this.request(`${this.phpApiUrl}/api/contact/messages/${messageId}/read`, {
            method: 'PUT'
        });
    }
}

// Créer l'instance globale de l'API
const api = new CloudFlowAPI();

// Exporter pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CloudFlowAPI, api, API_CONFIG };
}
