# Guide de Test - Système de Paiement

## 🧪 Test du Modal de Paiement

### 1. Ouvrir la page principale
- Ouvrir `index.html` dans le navigateur
- Scroller vers la section des templates

### 2. Cliquer sur "Acheter"
- Cliquer sur le bouton "Acheter" d'un template
- Le modal de paiement doit s'ouvrir

### 3. Vérifier les options de paiement
Le modal doit afficher **DEUX options**:

#### Option 1: Carte bancaire
- Icône: carte de crédit
- Texte: "Carte bancaire"
- Sélectionné par défaut

#### Option 2: Mobile Money
- Icône: téléphone mobile
- Texte: "Mobile Money"
- Non sélectionné par défaut

### 4. Tester le basculement
- Cliquer sur "Mobile Money"
- Le champ "Téléphone" doit apparaître
- Le sélecteur de fournisseur doit apparaître (Orange, MTN, Moov, Wave, Free)
- Cliquer sur "Carte bancaire"
- Les champs Mobile Money doivent disparaître

### 5. Remplir le formulaire
- Nom complet: requis
- Email: requis
- Téléphone: requis SEULEMENT si Mobile Money est sélectionné

### 6. Soumettre le paiement
- Cliquer sur "Payer maintenant"
- Le bouton doit afficher un spinner
- Redirection vers GeniusPay

## 🔧 Dépannage

### Problème: Le modal ne s'ouvre pas
**Solution:**
- Vérifier la console du navigateur (F12) pour les erreurs JavaScript
- S'assurer que le fichier `index.html` est bien chargé
- Vérifier que les boutons "Acheter" ont la classe `overlay-btn buy`

### Problème: Une seule option de paiement visible
**Solution:**
- Vérifier que le CSS est bien chargé
- Les deux options doivent être dans une grille (grid-template-columns: repeat(2, 1fr))
- Vérifier que les inputs radio ont le même name="paymentMethod"

### Problème: Le champ téléphone ne s'affiche pas
**Solution:**
- Vérifier que l'événement 'change' est bien attaché aux inputs radio
- Vérifier que l'ID "phoneFormGroup" existe
- Vérifier que l'ID "mobileMoneyProviders" existe

### Problème: Le formulaire ne se soumet pas
**Solution:**
- Vérifier que le backend Next.js est démarré (http://localhost:3001)
- Vérifier la console pour les erreurs réseau
- Vérifier que les champs requis sont remplis

## 📱 Test Mobile Money

### Formats de téléphone acceptés:
- Côte d'Ivoire: +225 07 XX XX XX XX
- Sénégal: +221 77 XX XX XX XX
- Ghana: +233 24 XX XX XX XX
- Nigeria: +234 70 XXX XXX XXX
- etc.

### Test avec chaque fournisseur:
1. Orange Money
2. MTN Mobile Money
3. Moov Money
4. Wave
5. Free Money

## 💳 Test Carte Bancaire

### Test en mode sandbox:
- Utiliser les cartes de test GeniusPay
- Vérifier que la validation fonctionne
- Vérifier que le montant est correct

## 📦 Test Téléchargement ZIP

### Après paiement réussi:
1. Redirection vers `payment-success.html`
2. Vérifier que les infos de paiement sont affichées
3. Cliquer sur "Télécharger le template (ZIP)"
4. Vérifier que le ZIP se télécharge
5. Extraire le ZIP et vérifier le contenu

## ✅ Checklist de validation

- [ ] Modal s'ouvre au clic sur "Acheter"
- [ ] Deux options de paiement visibles (Carte + Mobile Money)
- [ ] Basculement entre les méthodes fonctionne
- [ ] Champ téléphone s'affiche pour Mobile Money
- [ ] Sélecteur fournisseur s'affiche pour Mobile Money
- [ ] Formulaire valide les champs requis
- [ ] Redirection vers GeniusPay fonctionne
- [ ] Page de succès s'affiche après paiement
- [ ] Téléchargement ZIP fonctionne
- [ ] ZIP contient le template complet
- [ ] ZIP contient le fichier README_LICENSE.txt
