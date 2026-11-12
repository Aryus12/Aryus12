/**
 * Navigation CloudFlow - Gestion de la navigation entre les pages
 */

// Configuration des routes
const routes = {
    home: 'index.html',
    login: 'login.html',
    signup: 'signup.html',
    forgotPassword: 'forgot-password.html',
    dashboard: 'dashboard.html',
    projects: 'projects.html',
    tasks: 'tasks.html',
    profile: 'profile.html',
    settings: 'settings.html',
    billing: 'billing.html',
    docs: 'docs.html',
    contact: 'contact.html',
    about: 'about.html',
    terms: 'terms.html',
    privacy: 'privacy.html',
    cookies: 'cookies.html',
    integrations: 'integrations.html'
};

// Fonction de navigation
function navigate(route) {
    if (routes[route]) {
        window.location.href = routes[route];
    }
}

// Initialisation de la navigation
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des liens avec data-route
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const route = this.getAttribute('data-route');
            navigate(route);
        });
    });

    // Mettre en évidence la page actuelle dans la navigation
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Gestion du menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('.nav-links, .sidebar-nav').classList.toggle('active');
        });
    }

    // Gestion des dropdowns
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.parentElement.classList.toggle('open');
        });
    });

    // Fermer les dropdowns en cliquant ailleurs
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.parentElement.classList.remove('open');
        });
    });
});

// Exporter pour utilisation dans d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { routes, navigate };
}
