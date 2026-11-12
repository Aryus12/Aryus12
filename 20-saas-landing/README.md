# FlowSync — SaaS Landing Page

Template HTML/CSS pour landing page de logiciel SaaS moderne et conversion-optimisée.

## 📋 Description

**FlowSync** est une landing page SaaS premium conçue pour maximiser les conversions. Avec un design moderne, des animations fluides et une structure optimisée pour la conversion, c'est le point de départ idéal pour tout produit SaaS.

## ✨ Caractéristiques

### Design
- **Palette de couleurs** : Indigo (#6366f1), violet (#8b5cf6), rose (#ec4899)
- **Typographie** : Inter (police moderne et lisible)
- **Style** : Tech moderne, gradient, clean, conversion-focused
- **Animations** : Transitions fluides, effets hover, reveal on scroll, FAQ accordion

### Sections
- **Hero** : Présentation impactante avec mockup dashboard interactif
- **Partners** : Logos de confiance (social proof)
- **Fonctionnalités** : 6 features avec icônes
- **Avantages** : Statistiques prouvées + liste de bénéfices
- **Tarifs** : 3 plans (Starter gratuit, Pro, Enterprise)
- **FAQ** : 6 questions fréquentes avec accordion
- **CTA** : Appel à l'action final
- **Footer** : Navigation complète + réseaux sociaux

### Fonctionnalités
- Navigation sticky avec scroll effect
- Mockup dashboard CSS pur
- Grille de features avec hover effects
- Tableau de prix avec plan mis en avant
- FAQ accordion interactif
- Animations au scroll
- Design 100% responsive
- Préloader élégant

## 🛠️ Personnalisation

### Couleurs
Modifiez les variables CSS dans `style.css` :

```css
:root {
    --color-primary: #6366f1;        /* Indigo principal */
    --color-primary-dark: #4f46e5;   /* Indigo foncé */
    --color-secondary: #8b5cf6;      /* Violet */
    --color-accent: #ec4899;         /* Rose */
}
```

### Logo
Remplacez le logo dans la navigation (ligne ~60 de index.html) :
```html
<a href="#" class="nav-logo">
    <div class="logo-mark">
        <span></span><span></span><span></span><span></span>
    </div>
    <span>FlowSync</span>  <!-- Remplacez par votre nom -->
</a>
```

### Mockup
Le mockup dashboard est en CSS pur. Vous pouvez le remplacer par une capture d'écran réelle :
```html
<div class="dashboard-mockup">
    <!-- Remplacez par : <img src="dashboard-screenshot.png" alt="Dashboard"> -->
</div>
```

### Tarifs
Modifiez les prix dans la section tarifs (lignes ~300-350) :
```html
<div class="pricing-price">
    <span class="price">29€</span>  <!-- Modifiez le prix -->
    <span class="price-period">/utilisateur/mois</span>
</div>
```

### Trust logos
Remplacez les logos de partenaires (ligne ~120) :
```html
<div class="trust-logos">
    <div class="trust-logo">VotreLogo1</div>
    <div class="trust-logo">VotreLogo2</div>
    <!-- ... -->
</div>
```

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
20-saas-landing/
├── index.html      # Page principale
├── style.css       # Feuille de style
└── README.md       # Documentation
```

## 🚀 Installation

1. Copiez le dossier `20-saas-landing` dans votre répertoire web
2. Ouvrez `index.html` dans votre navigateur
3. Personnalisez selon vos besoins

## ⚡ Performance

- Pas de dépendances externes (sauf Google Fonts)
- CSS optimisé
- Mockup CSS (pas d'image lourde)
- JavaScript minimal (navigation et FAQ)
- Animations CSS hardware-accelerated

## 🎯 Utilisation idéale

Ce template est parfait pour :
- Produits SaaS B2B
- Applications web
- Outils de productivité
- Logiciels de collaboration
- Plateformes en ligne
- Services d'abonnement

## 📝 Notes

- Les boutons de CTA nécessitent des liens vers vos pages d'inscription
- Le mockup peut être remplacé par une capture d'écran réelle
- Les logos de partenaires sont des placeholders textuels
- Les prix sont indicatifs et doivent être adaptés
- La FAQ peut être étendue avec plus de questions

## 📄 Licence

Ce template est fourni par 3ADev Innovation pour usage commercial.

---

**3ADev Innovation** — Templates Professionnels
