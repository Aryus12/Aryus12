import { NextApiRequest, NextApiResponse } from 'next';
import { createPayment, validatePaymentRequest } from '../../../lib/geniuspay';
import { 
  rateLimit, 
  setSecurityHeaders, 
  setCorsHeaders, 
  sanitizePaymentData 
} from '../../../lib/security-middleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Security Headers
  setSecurityHeaders(res);
  setCorsHeaders(res);

  // Handle OPTIONS for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Seules les requêtes POST sont autorisées
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting par IP
  const clientIp = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'unknown';
  if (!rateLimit(clientIp)) {
    return res.status(429).json({ 
      success: false, 
      error: 'Trop de requêtes. Veuillez réessayer dans quelques minutes.' 
    });
  }

  try {
    const { 
      amount, 
      description, 
      clientEmail, 
      clientName, 
      clientPhone,
      templateId, 
      templateName,
      customizationType,
      paymentMethod,
      mobileMoneyProvider
    } = req.body;

    // Sanitization des données
    const sanitizedData = sanitizePaymentData({
      amount,
      description,
      clientEmail,
      clientName,
      clientPhone,
      templateId,
      templateName,
      paymentMethod,
      mobileMoneyProvider,
    });

    // Validation des données
    if (!sanitizedData.amount || sanitizedData.amount < 1) {
      return res.status(400).json({ 
        success: false, 
        error: 'Le montant minimum est de 1€' 
      });
    }

    if (!sanitizedData.description) {
      return res.status(400).json({ 
        success: false, 
        error: 'La description est requise' 
      });
    }

    if (!sanitizedData.clientEmail) {
      return res.status(400).json({ 
        success: false, 
        error: 'L\'email du client est requis' 
      });
    }

    // Validation complète des données de paiement
    const validation = validatePaymentRequest({
      amount: sanitizedData.amount,
      description: sanitizedData.description,
      clientEmail: sanitizedData.clientEmail,
      clientName: sanitizedData.clientName,
      clientPhone: sanitizedData.clientPhone,
      templateId: sanitizedData.templateId,
      templateName: sanitizedData.templateName,
      paymentMethod: sanitizedData.paymentMethod || 'card',
      mobileMoneyProvider: sanitizedData.mobileMoneyProvider,
    });

    if (!validation.valid) {
      return res.status(400).json({ 
        success: false, 
        error: validation.error 
      });
    }

    // Créer le paiement
    const paymentResult = await createPayment({
      amount: sanitizedData.amount,
      currency: 'EUR',
      description: sanitizedData.description,
      clientEmail: sanitizedData.clientEmail,
      clientName: sanitizedData.clientName,
      clientPhone: sanitizedData.clientPhone,
      templateId: sanitizedData.templateId,
      customizationType,
      paymentMethod: sanitizedData.paymentMethod || 'card',
      mobileMoneyProvider: sanitizedData.mobileMoneyProvider,
      metadata: {
        source: 'templates-pro',
        timestamp: new Date().toISOString(),
      },
    });

    if (paymentResult.success) {
      return res.status(200).json(paymentResult);
    } else {
      return res.status(400).json(paymentResult);
    }
  } catch (error: any) {
    console.error('Payment creation error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur serveur lors de la création du paiement' 
    });
  }
}
