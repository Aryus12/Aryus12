// Stockage en mémoire des paiements réussis (en production, utiliser une vraie DB)
const successfulPayments = new Map<string, {
  paymentId: string;
  templateId: number;
  templateName: string;
  clientEmail: string;
  timestamp: number;
  downloadToken: string;
}>();

// Générer un token de téléchargement sécurisé
function generateDownloadToken(): string {
  const crypto = require('crypto');
  return crypto.randomBytes(32).toString('hex');
}

// Enregistrer un paiement réussi
export function recordSuccessfulPayment(data: {
  paymentId: string;
  templateId: number;
  templateName: string;
  clientEmail: string;
}): string {
  const downloadToken = generateDownloadToken();
  successfulPayments.set(data.paymentId, {
    ...data,
    timestamp: Date.now(),
    downloadToken,
  });
  return downloadToken;
}

// Vérifier si un paiement a réussi et si le token est valide
export function verifyPaymentAccess(paymentId: string, downloadToken: string): boolean {
  const payment = successfulPayments.get(paymentId);
  
  if (!payment) {
    return false;
  }
  
  // Vérifier le token
  if (payment.downloadToken !== downloadToken) {
    return false;
  }
  
  // Vérifier l'expiration (24h)
  const maxAge = 24 * 60 * 60 * 1000; // 24 heures
  if (Date.now() - payment.timestamp > maxAge) {
    successfulPayments.delete(paymentId);
    return false;
  }
  
  return true;
}

// Obtenir les détails d'un paiement réussi
export function getPaymentDetails(paymentId: string, downloadToken: string) {
  const payment = successfulPayments.get(paymentId);
  
  if (!payment || payment.downloadToken !== downloadToken) {
    return null;
  }
  
  return {
    templateId: payment.templateId,
    templateName: payment.templateName,
    clientEmail: payment.clientEmail,
  };
}
