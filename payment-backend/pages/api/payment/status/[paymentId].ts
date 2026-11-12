import { NextApiRequest, NextApiResponse } from 'next';
import { checkPaymentStatus } from '../../../../lib/geniuspay';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Seules les requêtes GET sont autorisées
  if (req.method !== 'GET') {
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

    const status = await checkPaymentStatus(paymentId);

    if (!status) {
      return res.status(404).json({ 
        success: false, 
        error: 'Paiement non trouvé' 
      });
    }

    return res.status(200).json({
      success: true,
      data: status
    });
  } catch (error: any) {
    console.error('Payment status check error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur serveur lors de la vérification du statut' 
    });
  }
}
