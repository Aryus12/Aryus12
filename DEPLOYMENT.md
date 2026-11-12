# Déploiement Vercel

La vitrine TemplatePro est déployable depuis la racine du dépôt. Les pages HTML, CSS et les démos sont servies statiquement ; l'endpoint `GET /api/health` permet de vérifier le déploiement.

## Paiements

Les paiements sont volontairement désactivés dans `api/payment/create.js` jusqu'à ce que ces prérequis soient réunis :

1. Une intégration GeniusPay confirmée contre sa documentation officielle et son environnement sandbox.
2. Des secrets configurés directement dans Vercel, jamais dans Git : clés API GeniusPay, secret de signature et URL publique.
3. Un stockage persistant pour les commandes et les liens de téléchargement. Les variables en mémoire et le disque temporaire ne sont pas adaptés aux fonctions serverless.
4. Un mécanisme de téléchargement qui vérifie le paiement côté serveur avant de livrer une archive.

La page de paiement ne collecte plus de données de carte : cette saisie doit se faire exclusivement sur la page hébergée par le prestataire de paiement.
