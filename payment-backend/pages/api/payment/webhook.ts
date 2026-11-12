import { NextApiRequest, NextApiResponse } from 'next';
import { processWebhook } from '../../../lib/geniuspay';
import { recordSuccessfulPayment } from '../../../lib/payment-store';

// Mapping des templates
const TEMPLATES: Record<number, string> = {
  1: 'Business Corporate',
  2: 'Portfolio Créatif',
  3: 'CV Professionnel',
  4: 'Landing Startup',
  5: 'Restaurant',
  6: 'Agence Digitale',
  7: 'Blog Personnel',
  8: 'Photographe',
  9: 'E-commerce',
  10: 'CV Minimaliste',
  11: 'Immobilier',
  12: 'Cabinet Avocats',
  13: 'Fitness Gym',
  14: 'Agence Voyage',
  15: 'Education en Ligne',
  16: 'SaaS App',
  17: 'Salon Beauté',
  18: 'Hôtel Résidence',
  19: 'BTP Construction',
  20: 'SaaS Landing'
};

function getTemplateNameById(id: number): string {
  return TEMPLATES[id] || 'Template Inconnu';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Seules les requêtes POST sont autorisées
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;

    // Validation basique du payload
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    // Vérifier la signature et traiter le webhook
    const result = processWebhook(payload);

    if (!result.valid) {
      console.error('Invalid webhook signature or timestamp');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Ici, vous pouvez sauvegarder les données du paiement dans votre base de données
    const { paymentId, status, amount, currency, transactionId, metadata } = result.data!;

    console.log('Payment webhook received:', {
      paymentId,
      status,
      amount,
      currency,
      transactionId,
      metadata,
    });

    // Si le paiement est réussi, enregistrer et générer le ZIP
    if (status === 'success' && metadata) {
      try {
        const templateName = getTemplateNameById(metadata.templateId);
        
        // Enregistrer le paiement réussi avec un token de téléchargement sécurisé
        const downloadToken = recordSuccessfulPayment({
          paymentId,
          templateId: metadata.templateId,
          templateName,
          clientEmail: metadata.clientEmail,
        });
        
        console.log(`Paiement enregistré avec token: ${paymentId}`);

        // Générer le ZIP immédiatement (optionnel, peut être fait à la demande)
        const { generateTemplateZip } = require('../../../lib/zip-generator');
        
        await generateTemplateZip({
          templateId: metadata.templateId,
          templateName,
          paymentId: paymentId,
          clientEmail: metadata.clientEmail,
        });
        
        console.log(`ZIP généré automatiquement pour le paiement ${paymentId}`);
      } catch (zipError) {
        console.error('Erreur lors de la génération automatique du ZIP:', zipError);
        // Ne pas échouer le webhook si la génération du ZIP échoue
      }
    }

    // TODO: Sauvegarder dans votre base de données
    // Exemple: await savePaymentToDatabase({ paymentId, status, amount, metadata });

    // Répondre à GeniusPay
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return res.status(500).json({ error: 'Error processing webhook' });
  }
}
