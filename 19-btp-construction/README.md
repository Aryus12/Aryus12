# Constructa Pro — BTP, Architecture & Construction

Template HTML/CSS pour entreprise de BTP, construction et architecture.

## 📋 Description

**Constructa Pro** est un template professionnel conçu pour les entreprises du secteur BTP, construction, architecture et travaux publics. Il dégage une image de solidité, de professionnalisme et de fiabilité avec une palette de couleurs orange et gris anthracite.

## ✨ Caractéristiques

### Design
- **Palette de couleurs** : Orange (#ff6b35), gris anthracite (#2c3e50), gris clair (#f5f5f5)
- **Typographie** : Oswald (titres) + Roboto (corps)
- **Style** : Industriel moderne, solide, professionnel
- **Animations** : Transitions fluides, effets hover, reveal on scroll

### Sections
- **Hero** : Présentation impactante avec statistiques de l'entreprise
- **À propos** : Histoire, valeurs et certifications
- **Services** : 6 domaines d'expertise (Construction, Rénovation, Architecture, Travaux publics, Isolation, Maintenance)
- **Projets** : Galerie de 6 réalisations avec catégories
- **Méthodologie** : Processus en 5 étapes
- **Témoignages** : Avis clients avec projets associés
- **Devis** : Formulaire de demande de devis complet
- **Footer** : Informations complètes avec certifications

### Fonctionnalités
- Navigation responsive avec menu mobile
- Grille de services avec listes détaillées
- Galerie de projets avec overlay au hover
- Timeline de méthodologie
- Formulaire de devis avec validation
- Animations au scroll
- Design 100% responsive
- Préloader élégant

## 🛠️ Personnalisation

### Couleurs
Modifiez les variables CSS dans `style.css` :

```css
:root {
    --color-primary: #ff6b35;        /* Orange principal */
    --color-primary-dark: #e55a2b;   /* Orange foncé */
    --color-secondary: #2c3e50;      /* Gris anthracite */
    --color-light: #f5f5f5;          /* Gris clair */
}
```

### Logo
Remplacez le logo dans la navigation (ligne ~60 de index.html) :
```html
<a href="#" class="nav-logo">
    <svg class="logo-icon" viewBox="0 0 40 40" width="40" height="40">
        <!-- Remplacez par votre logo SVG ou image -->
    </svg>
    <span class="logo-text">CONSTRUCTA<span>PRO</span></span>  <!-- Remplacez par votre nom -->
</a>
```

### Images
Les images sont des placeholders SVG. Remplacez-les par vos propres images :
```html
<div class="image-placeholder">
    <svg viewBox="0 0 500 400" fill="none">
        <!-- Remplacez par : <img src="votre-image.jpg" alt="Description"> -->
    </svg>
</div>
```

### Certifications
Modifiez les badges de certifications dans le footer (ligne ~450) :
```html
<div class="certifications">
    <span class="cert-badge">RGE</span>
    <span class="cert-badge">Qualibat</span>
    <span class="cert-badge">Garantie Décennale</span>
</div>
```

### Contact
Modifiez les informations de contact dans le footer et la section devis :
- Téléphone : `04 56 78 90 12`
- Email : `contact@constructapro.fr`
- Adresse : `Zone Industrielle Nord, 73000 Chambéry`
- Horaires : `Lun-Ven: 8h-18h • Sam: 9h-12h`

## 📱 Responsive

Le template est optimisé pour :
- **Desktop** : 1200px+
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px

## 🌐 Navigateurs supportés

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## 📦 Structure des fichiers

```
19-btp-construction/
├── index.html      # Page principale
├── style.css       # Feuille de style
└── README.md       # Documentation
```

## 🚀 Installation

1. Copiez le dossier `19-btp-construction` dans votre répertoire web
2. Ouvrez `index.html` dans votre navigateur
3. Personnalisez selon vos besoins

## ⚡ Performance

- Pas de dépendances externes (sauf Google Fonts)
- CSS optimisé
- Images à charger (placeholders légers)
- JavaScript minimal (navigation et interactions)

## 🎯 Utilisation idéale

Ce template est parfait pour :
- Entreprises de BTP
- Sociétés de construction
- Cabinets d'architecture
- Entreprises de rénovation
- Entreprises de travaux publics
- Artisans du bâtiment

## 📝 Notes

- Le formulaire de devis nécessite un backend pour être fonctionnel
- Les liens sociaux sont des placeholders
- Les images doivent être optimisées pour le web (format WebP recommandé)
- Les certifications doivent être adaptées à vos qualifications réelles

## 📄 Licence

Ce template est fourni par 3ADev Innovation pour usage commercial.

---

**3ADev Innovation** — Templates Professionnels
