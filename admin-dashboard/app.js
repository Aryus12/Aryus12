// ===== AUTHENTICATION =====
function checkAuth() {
    const session = localStorage.getItem('adminSession');
    if (!session) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem('adminSession');
    window.location.href = 'login.html';
}

// ===== DATA STORAGE =====
let requests = JSON.parse(localStorage.getItem('customizationRequests')) || [];
let payments = JSON.parse(localStorage.getItem('payments')) || [];
let templates = [
    { id: 1, name: 'Business Corporate', category: 'business', price: 1 },
    { id: 2, name: 'Portfolio Créatif', category: 'creative', price: 1 },
    { id: 3, name: 'CV Professionnel', category: 'creative', price: 1 },
    { id: 4, name: 'Landing Startup', category: 'tech', price: 1 },
    { id: 5, name: 'Restaurant', category: 'services', price: 1 },
    { id: 6, name: 'Agence Digitale', category: 'business', price: 1 },
    { id: 7, name: 'Blog Personnel', category: 'creative', price: 1 },
    { id: 8, name: 'Photographe', category: 'creative', price: 1 },
    { id: 9, name: 'E-commerce', category: 'business', price: 1 },
    { id: 10, name: 'CV Minimaliste', category: 'creative', price: 1 },
    { id: 11, name: 'Immobilier', category: 'services', price: 1 },
    { id: 12, name: 'Cabinet Avocats', category: 'services', price: 1 },
    { id: 13, name: 'Fitness Gym', category: 'services', price: 1 },
    { id: 14, name: 'Agence Voyage', category: 'services', price: 1 },
    { id: 15, name: 'Education en Ligne', category: 'tech', price: 1 },
    { id: 16, name: 'SaaS App', category: 'tech', price: 1 },
    { id: 17, name: 'Salon Beauté', category: 'services', price: 1 },
    { id: 18, name: 'Hôtel Résidence', category: 'services', price: 1 },
    { id: 19, name: 'BTP Construction', category: 'services', price: 1 },
    { id: 20, name: 'SaaS Landing', category: 'tech', price: 1 }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier l'authentification
    if (!checkAuth()) {
        return;
    }
    
    initializeDashboard();
    setupEventListeners();
    loadSettings();
});

function initializeDashboard() {
    updateStats();
    renderRecentRequests();
    renderAllRequests();
    renderTemplates();
    renderPayments();
    populateTemplateFilter();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            showSection(section);
        });
    });

    // Mobile menu toggle
    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Filters
    document.getElementById('status-filter')?.addEventListener('change', filterRequests);
    document.getElementById('template-filter')?.addEventListener('change', filterRequests);
}

// ===== NAVIGATION =====
function showSection(sectionName) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionName) {
            item.classList.add('active');
        }
    });

    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${sectionName}-section`)?.classList.add('active');

    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        requests: 'Demandes',
        templates: 'Templates',
        payments: 'Paiements',
        settings: 'Paramètres'
    };
    document.querySelector('.page-title').textContent = titles[sectionName] || 'Dashboard';
}

// ===== STATS =====
function updateStats() {
    const total = requests.length;
    const pending = requests.filter(r => r.status === 'pending').length;
    const completed = requests.filter(r => r.status === 'completed').length;
    const revenue = payments
        .filter(p => p.status === 'completed')
        .reduce((sum, p) => sum + p.amount, 0);

    document.getElementById('total-requests').textContent = total;
    document.getElementById('pending-requests').textContent = pending;
    document.getElementById('completed-requests').textContent = completed;
    document.getElementById('total-revenue').textContent = `${revenue}€`;
    document.getElementById('pending-count').textContent = pending;
}

// ===== RENDER FUNCTIONS =====
function renderRecentRequests() {
    const tbody = document.getElementById('recent-requests-body');
    const recent = requests.slice(0, 5);
    tbody.innerHTML = recent.map(req => createRequestRow(req)).join('');
}

function renderAllRequests() {
    const tbody = document.getElementById('all-requests-body');
    tbody.innerHTML = requests.map(req => createRequestRow(req)).join('');
}

function createRequestRow(req) {
    const template = templates.find(t => t.id === req.templateId);
    const statusClass = req.status.replace(' ', '-');
    return `
        <tr>
            <td>#${req.id}</td>
            <td>${req.clientName}</td>
            <td>${template ? template.name : 'N/A'}</td>
            <td>${req.type}</td>
            <td>${req.price}€</td>
            <td><span class="status-badge ${statusClass}">${translateStatus(req.status)}</span></td>
            <td>${formatDate(req.date)}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="viewRequest(${req.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-primary" onclick="updateRequestStatus(${req.id})">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `;
}

function renderTemplates() {
    const grid = document.getElementById('templates-grid');
    grid.innerHTML = templates.map(t => `
        <div class="template-card">
            <div class="template-preview">
                <i class="fas fa-image fa-2x"></i>
            </div>
            <div class="template-info">
                <h4>${t.name}</h4>
                <p>${t.category} • ${t.price}€</p>
            </div>
        </div>
    `).join('');
}

function renderPayments() {
    const tbody = document.getElementById('payments-body');
    tbody.innerHTML = payments.map(p => `
        <tr>
            <td>${p.transactionId}</td>
            <td>${p.clientName}</td>
            <td>${p.amount}€</td>
            <td>${p.method}</td>
            <td><span class="status-badge ${p.status}">${translateStatus(p.status)}</span></td>
            <td>${formatDate(p.date)}</td>
        </tr>
    `).join('');
}

function populateTemplateFilter() {
    const select = document.getElementById('template-filter');
    templates.forEach(t => {
        const option = document.createElement('option');
        option.value = t.id;
        option.textContent = t.name;
        select.appendChild(option);
    });
}

// ===== FILTER =====
function filterRequests() {
    const statusFilter = document.getElementById('status-filter').value;
    const templateFilter = document.getElementById('template-filter').value;

    let filtered = requests;

    if (statusFilter !== 'all') {
        filtered = filtered.filter(r => r.status === statusFilter);
    }

    if (templateFilter !== 'all') {
        filtered = filtered.filter(r => r.templateId === parseInt(templateFilter));
    }

    const tbody = document.getElementById('all-requests-body');
    tbody.innerHTML = filtered.map(req => createRequestRow(req)).join('');
}

// ===== REQUEST ACTIONS =====
function viewRequest(id) {
    const req = requests.find(r => r.id === id);
    if (!req) return;

    const template = templates.find(t => t.id === req.templateId);
    const modal = document.getElementById('request-modal');
    const body = document.getElementById('request-modal-body');

    body.innerHTML = `
        <div class="request-detail">
            <div class="detail-row">
                <strong>ID:</strong>
                <span>#${req.id}</span>
            </div>
            <div class="detail-row">
                <strong>Client:</strong>
                <span>${req.clientName}</span>
            </div>
            <div class="detail-row">
                <strong>Email:</strong>
                <span>${req.clientEmail}</span>
            </div>
            <div class="detail-row">
                <strong>Template:</strong>
                <span>${template ? template.name : 'N/A'}</span>
            </div>
            <div class="detail-row">
                <strong>Type de personnalisation:</strong>
                <span>${req.type}</span>
            </div>
            <div class="detail-row">
                <strong>Description:</strong>
                <p>${req.description}</p>
            </div>
            <div class="detail-row">
                <strong>Prix:</strong>
                <span>${req.price}€</span>
            </div>
            <div class="detail-row">
                <strong>Statut:</strong>
                <span class="status-badge ${req.status.replace(' ', '-')}">${translateStatus(req.status)}</span>
            </div>
            <div class="detail-row">
                <strong>Date:</strong>
                <span>${formatDate(req.date)}</span>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function updateRequestStatus(id) {
    const req = requests.find(r => r.id === id);
    if (!req) return;

    const newStatus = prompt('Nouveau statut (pending, in-progress, completed, cancelled):', req.status);
    if (newStatus && ['pending', 'in-progress', 'completed', 'cancelled'].includes(newStatus)) {
        req.status = newStatus;
        saveRequests();
        initializeDashboard();
    }
}

function closeModal() {
    document.getElementById('request-modal').classList.remove('active');
}

// ===== SETTINGS =====
function loadSettings() {
    const config = JSON.parse(localStorage.getItem('geniuspayConfig')) || {};
    document.getElementById('geniuspay-api-key').value = config.apiKey || '';
    document.getElementById('geniuspay-api-secret').value = config.apiSecret || '';
    document.getElementById('geniuspay-endpoint').value = config.endpoint || 'https://api.geniuspay.com/v1';
    
    const pricing = JSON.parse(localStorage.getItem('pricingConfig')) || {};
    document.getElementById('min-customization-price').value = pricing.minPrice || 20;
}

function saveGeniusPayConfig() {
    const config = {
        apiKey: document.getElementById('geniuspay-api-key').value,
        apiSecret: document.getElementById('geniuspay-api-secret').value,
        endpoint: document.getElementById('geniuspay-endpoint').value
    };
    localStorage.setItem('geniuspayConfig', JSON.stringify(config));
    alert('Configuration GeniusPay sauvegardée!');
}

function savePricingConfig() {
    const config = {
        minPrice: parseInt(document.getElementById('min-customization-price').value)
    };
    localStorage.setItem('pricingConfig', JSON.stringify(config));
    alert('Configuration de prix sauvegardée!');
}

// ===== HELPERS =====
function saveRequests() {
    localStorage.setItem('customizationRequests', JSON.stringify(requests));
}

function translateStatus(status) {
    const translations = {
        'pending': 'En attente',
        'in-progress': 'En cours',
        'completed': 'Complété',
        'cancelled': 'Annulé'
    };
    return translations[status] || status;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// ===== MOCK DATA (for demo) =====
function addMockRequest() {
    const mockRequest = {
        id: requests.length + 1,
        templateId: Math.floor(Math.random() * 20) + 1,
        clientName: 'Client Démo',
        clientEmail: 'demo@example.com',
        type: 'Personnalisation complète',
        description: 'Je souhaiterais personnaliser ce template avec mes couleurs et mon logo.',
        price: Math.floor(Math.random() * 50) + 20,
        status: 'pending',
        date: new Date().toISOString()
    };
    requests.push(mockRequest);
    saveRequests();
    initializeDashboard();
}

// Add mock data button to dashboard for testing
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.section-header');
    if (header) {
        const testBtn = document.createElement('button');
        testBtn.className = 'btn btn-outline';
        testBtn.textContent = 'Ajouter démo';
        testBtn.onclick = addMockRequest;
        header.appendChild(testBtn);
    }
});
