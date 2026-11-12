import { NextApiRequest, NextApiResponse } from 'next';
import { cancelPayment } from '../../../../lib/geniuspay';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Seules les requêtes POST sont autorisées
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { paymentId } = req.query;

    if (!paymentId || typeof paymentId !== 'string') {
      return res.status(400).json({ 
        success: false, 
        error: 'Payment ID requis' 
      });
    }

    const result = await cancelPayment(paymentId);

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error: any) {
    console.error('Payment cancellation error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur serveur lors de l\'annulation du paiement' 
    });
  }
}
