# L'Art de la Beauté — Salon & Barber Shop Premium

Template HTML/CSS pour salon de coiffure et barber shop haut de gamme.

## 📋 Description

**L'Art de la Beauté** est un template premium conçu pour les salons de coiffure, barber shops, et instituts de beauté. Il combine élégance et modernité avec une palette de couleurs raffinée (or et noir) et une typographie sophistiquée.

## ✨ Caractéristiques

### Design
- **Palette de couleurs** : Or (#c9a962), noir (#1a1a2e), beige (#f5f0e8)
- **Typographie** : Cormorant Garamond (titres) + Montserrat (corps)
- **Style** : Luxe discret, professionnel, chaleureux
- **Animations** : Transitions fluides, effets hover, reveal on scroll

### Sections
- **Hero** : Présentation impactante avec statistiques
- **À propos** : Histoire du salon et valeurs
- **Services** : 4 catégories (Coiffure, Barber, Soins, Ongles) avec onglets
- **Tarifs** : Grille tarifaire claire et détaillée
- **Équipe** : Présentation des experts
- **Galerie** : Portfolio des réalisations
- **Témoignages** : Avis clients
- **Réservation** : Formulaire de contact
- **Footer** : Informations complètes

### Fonctionnalités
- Navigation responsive avec menu mobile
- Système d'onglets pour les services
- Formulaire de réservation fonctionnel
- Animations au scroll
- Design 100% responsive
- Préloader élégant

## 🛠️ Personnalisation

### Couleurs
Modifiez les variables CSS dans `style.css` :

```css
:root {
    --color-primary: #c9a962;        /* Or principal */
    --color-primary-dark: #a8894a;   /* Or foncé */
    --color-dark: #1a1a2e;           /* Noir principal */
    --color-light: #f5f0e8;          /* Beige clair */
}
```

### Logo
Remplacez le logo dans la navigation (ligne ~60 de index.html) :
```html
<a href="#" class="nav-logo">
    <span class="logo-icon">✦</span>  <!-- Remplacez par votre logo -->
    <span class="logo-text">L'Art de la Beauté</span>  <!-- Remplacez par votre nom -->
</a>
```

### Images
Les images sont des placeholders SVG. Remplacez-les par vos propres images :
```html
<div class="image-placeholder">
    <svg viewBox="0 0 400 500" fill="none">
        <!-- Remplacez par : <img src="votre-image.jpg" alt="Description"> -->
    </svg>
</div>
```

### Textes
Tous les textes sont facilement modifiables directement dans le HTML :
- Titres et sous-titres
- Descriptions de services
- Tarifs
- Informations de contact
- Horaires

### Contact
Modifiez les informations de contact dans le footer et la section réservation :
- Téléphone : `01 23 45 67 89`
- Email : `contact@lartdelabeaute.fr`
- Adresse : `25 Rue de la Beauté, 75001 Paris`
- Horaires : `Lun-Sam: 9h-19h • Dim: 10h-17h`

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
17-salon-beaute/
├── index.html      # Page principale
├── style.css       # Feuille de style
└── README.md       # Documentation
```

## 🚀 Installation

1. Copiez le dossier `17-salon-beaute` dans votre répertoire web
2. Ouvrez `index.html` dans votre navigateur
3. Personnalisez selon vos besoins

## ⚡ Performance

- Pas de dépendances externes (sauf Google Fonts)
- CSS optimisé
- Images à charger (placeholders légers)
- JavaScript minimal (navigation et interactions)

## 🎯 Utilisation idéale

Ce template est parfait pour :
- Salons de coiffure premium
- Barber shops
- Instituts de beauté
- Spas
- Centres de bien-être

## 📝 Notes

- Le formulaire de réservation nécessite un backend pour être fonctionnel
- Les liens sociaux sont des placeholders
- Les images doivent être optimisées pour le web (format WebP recommandé)

## 📄 Licence

Ce template est fourni par 3ADev Innovation pour usage commercial.

---

**3ADev Innovation** — Templates Professionnels
