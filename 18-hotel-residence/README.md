# Domaine de la Rivière — Hôtel & Résidence de Luxe

Template HTML/CSS pour hôtel 5 étoiles et résidence touristique haut de gamme.

## 📋 Description

**Domaine de la Rivière** est un template premium conçu pour les hôtels de luxe, résidences touristiques, et établissements d'hébergement haut de gamme. Il évoque l'élégance, la nature et l'authenticité avec une palette de couleurs vert forêt et or.

## ✨ Caractéristiques

### Design
- **Palette de couleurs** : Vert forêt (#2c5f4d), or (#c9a962), beige (#f0ebe4)
- **Typographie** : Playfair Display (titres) + Lato (corps)
- **Style** : Nature luxueuse, raffiné, apaisant
- **Animations** : Transitions fluides, effets hover, reveal on scroll

### Sections
- **Hero** : Présentation immersive avec badges de qualité
- **Introduction** : Histoire et valeurs de l'établissement
- **Chambres** : 3 types de chambres avec tarifs (Classic, Suite Junior, Présidentielle)
- **Services** : Spa, piscine, fitness, conciergerie, événements, activités
- **Restaurant** : Présentation du restaurant gastronomique
- **Spa** : Offres de bien-être et soins
- **Avis** : Témoignages clients
- **Réservation** : Formulaire de réservation complet
- **Footer** : Informations complètes

### Fonctionnalités
- Navigation responsive avec menu mobile
- Cartes de chambres avec prix et caractéristiques
- Grille de services avec icônes
- Formulaire de réservation avec validation
- Animations au scroll
- Design 100% responsive
- Préloader élégant

## 🛠️ Personnalisation

### Couleurs
Modifiez les variables CSS dans `style.css` :

```css
:root {
    --color-primary: #2c5f4d;        /* Vert forêt principal */
    --color-primary-dark: #1e4235;   /* Vert foncé */
    --color-accent: #c9a962;         /* Or */
    --color-light: #f0ebe4;          /* Beige clair */
}
```

### Logo
Remplacez le logo dans la navigation (ligne ~60 de index.html) :
```html
<a href="#" class="nav-logo">
    <svg class="logo-icon" viewBox="0 0 40 40" width="40" height="40">
        <!-- Remplacez par votre logo SVG ou image -->
    </svg>
    <span class="logo-text">Domaine de la Rivière</span>  <!-- Remplacez par votre nom -->
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

### Tarifs
Modifiez les tarifs dans la section chambres (lignes ~200-300) :
```html
<div class="room-price">
    <span class="price">180€</span>  <!-- Modifiez le prix -->
    <span class="price-unit">/ nuit</span>
</div>
```

### Contact
Modifiez les informations de contact dans le footer et la section réservation :
- Téléphone : `+33 1 23 45 67 89`
- Email : `contact@domaine-riviere.fr`
- Adresse : `123 Chemin de la Rivière, 74000 Annecy`

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
18-hotel-residence/
├── index.html      # Page principale
├── style.css       # Feuille de style
└── README.md       # Documentation
```

## 🚀 Installation

1. Copiez le dossier `18-hotel-residence` dans votre répertoire web
2. Ouvrez `index.html` dans votre navigateur
3. Personnalisez selon vos besoins

## ⚡ Performance

- Pas de dépendances externes (sauf Google Fonts)
- CSS optimisé
- Images à charger (placeholders légers)
- JavaScript minimal (navigation et interactions)

## 🎯 Utilisation idéale

Ce template est parfait pour :
- Hôtels 4-5 étoiles
- Résidences de tourisme
- Chambres d'hôtes de luxe
- Relais & châteaux
- Villas de vacances haut de gamme

## 📝 Notes

- Le formulaire de réservation nécessite un backend pour être fonctionnel
- Les liens sociaux sont des placeholders
- Les images doivent être optimisées pour le web (format WebP recommandé)
- Les prix sont indicatifs et doivent être adaptés

## 📄 Licence

Ce template est fourni par 3ADev Innovation pour usage commercial.

---

**3ADev Innovation** — Templates Professionnels
