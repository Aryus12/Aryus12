# Backend de Paiement Templates Pro - GeniusPay

Ce backend Next.js gère les paiements via GeniusPay pour l'achat de templates et les personnalisations. Supporte les paiements par carte bancaire et Mobile Money (Orange, MTN, Moov, Wave, Free).

## 📋 Prérequis

- Node.js 18+ installé
- Un compte GeniusPay avec des clés API
- Les dossiers templates doivent être dans `../templates-pro/` (relatif au backend)

## 🚀 Installation

1. Installer les dépendances:
```bash
cd payment-backend
npm install
```

2. Configurer les variables d'environnement:
```bash
cp .env.example .env
```

3. Éditer le fichier `.env` avec vos clés GeniusPay:
```env
GENIUSPAY_API_KEY=votre_cle_api_publique_ici
GENIUSPAY_API_SECRET=votre_cle_api_secrete_ici
GENIUSPAY_ENDPOINT=https://api.geniuspay.com/v1
GENIUSPAY_MODE=sandbox
GENIUSPAY_WEBHOOK_URL=https://votre-domaine.com/api/payment/webhook
GENIUSPAY_SUCCESS_URL=https://votre-domaine.com/payment-success.html
GENIUSPAY_CANCEL_URL=https://votre-domaine.com/index.html
JWT_SECRET=votre_cle_secrete_jwt_tres_longue_et_aleatoire
ENCRYPTION_KEY=votre_cle_de_chiffrement_32_caracteres
NEXT_PUBLIC_APP_URL=https://votre-domaine.com
PORT=3001
```

## 🔑 Où obtenir les clés GeniusPay

1. Connectez-vous à votre compte GeniusPay: https://dashboard.geniuspay.com
2. Allez dans la section "API Keys" ou "Developers"
3. Créez une nouvelle paire de clés API
4. Copiez la **Public Key** dans `GENIUSPAY_API_KEY`
5. Copiez la **Private Key** dans `GENIUSPAY_API_SECRET`

⚠️ **IMPORTANT**: Ne partagez jamais votre clé privée (API Secret) et ne la committez pas sur Git!

## 🏃 Démarrage

### Mode développement
```bash
npm run dev
```
Le serveur démarrera sur http://localhost:3001

### Mode production
```bash
npm run build
npm start
```

## 📡 API Endpoints

### POST /api/payment/create
Crée un nouveau paiement GeniusPay. Supporte carte bancaire et Mobile Money.

**Body:**
```json
{
  "amount": 25,
  "description": "Achat Template #1",
  "clientEmail": "client@example.com",
  "clientName": "Jean Dupont",
  "clientPhone": "+225 07 00 00 00 00",
  "templateId": 1,
  "templateName": "Business Corporate",
  "paymentMethod": "card",
  "mobileMoneyProvider": "orange"
}
```

**Paramètres:**
- `amount` (number): Montant en euros (minimum 1€ pour templates, 20€ pour personnalisation)
- `description` (string): Description du paiement
- `clientEmail` (string): Email du client (requis)
- `clientName` (string): Nom du client
- `clientPhone` (string): Numéro de téléphone (requis pour Mobile Money)
- `templateId` (number): ID du template
- `templateName` (string): Nom du template
- `paymentMethod` (string): "card" ou "mobile_money" (défaut: "card")
- `mobileMoneyProvider` (string): "orange", "mtn", "moov", "wave", "free" (requis si paymentMethod = "mobile_money")

**Response:**
```json
{
  "success": true,
  "paymentId": "pay_1234567890",
  "paymentUrl": "https://checkout.geniuspay.com/pay/1234567890"
}
```

### POST /api/payment/webhook
Webhook pour recevoir les notifications de paiement de GeniusPay. Génère automatiquement le ZIP du template après paiement réussi.

**Payload (envoyé par GeniusPay):**
```json
{
  "paymentId": "pay_1234567890",
  "status": "success",
  "amount": 25,
  "currency": "EUR",
  "transactionId": "txn_9876543210",
  "signature": "sha256_signature",
  "timestamp": 1699999999999,
  "metadata": {
    "clientEmail": "client@example.com",
    "templateId": 1,
    "templateName": "Business Corporate"
  }
}
```

### GET /api/download/template
Génère et sert le fichier ZIP du template après paiement réussi.

**Query Parameters:**
- `paymentId` (string): ID du paiement
- `templateId` (number): ID du template
- `templateName` (string): Nom du template
- `clientEmail` (string): Email du client

**Response:**
- Fichier ZIP téléchargeable contenant le template + fichier README de licence

## � Méthodes de paiement supportées

### Carte bancaire
- Visa, Mastercard, American Express
- Paiement sécurisé via GeniusPay
- Validation en temps réel

### Mobile Money
- **Orange Money**: Côte d'Ivoire, Sénégal, Mali, etc.
- **MTN Mobile Money**: Côte d'Ivoire, Ghana, Nigeria, etc.
- **Moov Money**: Côte d'Ivoire, Bénin, Togo
- **Wave**: Sénégal, Côte d'Ivoire
- **Free Money**: France

Pour Mobile Money, le numéro de téléphone est requis et le fournisseur doit être spécifié.

## 📦 Système de téléchargement ZIP

Après un paiement réussi:
1. Le webhook génère automatiquement un ZIP du template
2. Le ZIP contient:
   - Le dossier complet du template (HTML, CSS, assets)
   - Un fichier README_LICENSE.txt avec les informations de licence
3. Le ZIP est disponible pendant 7 jours
4. Les anciens ZIP sont nettoyés automatiquement

**Emplacement des ZIP générés:** `payment-backend/zips/`

## �🔒 Sécurité

- Les signatures sont vérifiées pour chaque webhook
- Les timestamps sont vérifiés pour éviter les attaques replay (5 minutes max)
- Les clés API sont stockées dans les variables d'environnement
- Le montant minimum est fixé à 1€ pour les templates
- Les ZIP sont nettoyés automatiquement après 7 jours

## 📝 Intégration avec le Frontend

Le formulaire de paiement est déjà intégré dans `index.html` avec:
- Modal de paiement avec sélection de méthode
- Support carte bancaire et Mobile Money
- Redirection automatique vers GeniusPay
- Page de succès avec téléchargement

Pour créer un paiement manuellement:

```javascript
async function createPayment(paymentData) {
  const response = await fetch('http://localhost:3001/api/payment/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });

  const result = await response.json();
  
  if (result.success) {
    // Rediriger l'utilisateur vers la page de paiement
    window.location.href = result.paymentUrl;
  } else {
    console.error('Erreur:', result.error);
  }
}

// Exemple avec carte bancaire
createPayment({
  amount: 1,
  description: 'Achat Template Business Corporate',
  clientEmail: 'client@example.com',
  clientName: 'Jean Dupont',
  templateId: 1,
  templateName: 'Business Corporate',
  paymentMethod: 'card'
});

// Exemple avec Mobile Money
createPayment({
  amount: 1,
  description: 'Achat Template Business Corporate',
  clientEmail: 'client@example.com',
  clientName: 'Jean Dupont',
  clientPhone: '+225 07 00 00 00 00',
  templateId: 1,
  templateName: 'Business Corporate',
  paymentMethod: 'mobile_money',
  mobileMoneyProvider: 'orange'
});
```

## 🧪 Test

Pour tester en mode sandbox:

1. Utilisez les clés sandbox de GeniusPay
2. Configurez `GENIUSPAY_MODE=sandbox` dans `.env`
3. Les paiements seront simulés sans débit réel
4. Testez avec les différents fournisseurs Mobile Money

## 📚 Structure du projet

```
payment-backend/
├── lib/
│   ├── geniuspay.ts       # Client API GeniusPay
│   └── zip-generator.ts   # Génération de ZIP
├── pages/
│   └── api/
│       ├── payment/
│       │   ├── create.ts  # Endpoint création paiement
│       │   └── webhook.ts # Endpoint webhook
│       └── download/
│           └── template.ts # Endpoint téléchargement ZIP
├── zips/                  # Dossier des ZIP générés (créé automatiquement)
├── .env.example           # Exemple de configuration
├── package.json           # Dépendances
└── README.md             # Ce fichier
```

## 🐛 Dépannage

### Erreur "Configuration GeniusPay manquante"
Vérifiez que vous avez configuré `GENIUSPAY_API_KEY` et `GENIUSPAY_API_SECRET` dans `.env`.

### Erreur "Invalid signature"
Vérifiez que votre `GENIUSPAY_API_SECRET` est correcte et correspond à celle de GeniusPay.

### Erreur "Le numéro de téléphone est requis pour Mobile Money"
Ajoutez le paramètre `clientPhone` lors de la création du paiement avec Mobile Money.

### Erreur lors de la génération du ZIP
Vérifiez que le dossier du template existe dans `../templates-pro/XX-template-name/`.

### ZIP non téléchargeable
Vérifiez que le paiement a été réussi et que le webhook a bien été reçu. Les ZIP sont générés automatiquement après paiement réussi.

## 📞 Support

Pour toute question sur GeniusPay, consultez leur documentation: https://docs.geniuspay.com
