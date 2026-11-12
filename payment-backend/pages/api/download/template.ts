import { NextApiRequest, NextApiResponse } from 'next';
import { generateTemplateZip, checkZipExists } from '../../../lib/zip-generator';
import { verifyPaymentAccess, getPaymentDetails } from '../../../lib/payment-store';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Seules les requêtes GET sont autorisées
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { paymentId, downloadToken } = req.query;

    // Validation des paramètres
    if (!paymentId || !downloadToken) {
      return res.status(400).json({ 
        error: 'Paramètres manquants: paymentId et downloadToken requis' 
      });
    }

    // Vérifier l'accès sécurisé (token + paiement réussi)
    if (!verifyPaymentAccess(paymentId as string, downloadToken as string)) {
      console.warn(`Téléchargement non autorisé: paymentId=${paymentId}`);
      return res.status(403).json({ 
        error: 'Accès non autorisé. Paiement non validé ou token invalide.' 
      });
    }

    // Obtenir les détails du paiement
    const paymentDetails = getPaymentDetails(paymentId as string, downloadToken as string);
    if (!paymentDetails) {
      return res.status(404).json({ error: 'Paiement non trouvé' });
    }

    // Vérifier si le ZIP existe déjà
    const existingZip = checkZipExists(paymentId as string);
    
    if (existingZip) {
      // Servir le ZIP existant
      const fileStream = fs.createReadStream(existingZip);
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', `attachment; filename="${paymentDetails.templateName.replace(/\s+/g, '-').toLowerCase()}.zip"`);
      fileStream.pipe(res);
      return;
    }

    // Générer un nouveau ZIP
    const zipPath = await generateTemplateZip({
      templateId: paymentDetails.templateId,
      templateName: paymentDetails.templateName,
      paymentId: paymentId as string,
      clientEmail: paymentDetails.clientEmail,
    });

    // Servir le ZIP généré
    const fileStream = fs.createReadStream(zipPath);
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${paymentDetails.templateName.replace(/\s+/g, '-').toLowerCase()}.zip"`);
    fileStream.pipe(res);

  } catch (error: any) {
    console.error('Download error:', error);
    return res.status(500).json({ 
      error: error.message || 'Erreur lors de la génération du ZIP' 
    });
  }
}
