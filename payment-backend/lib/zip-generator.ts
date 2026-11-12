import * as fs from 'fs';
import * as path from 'path';
import * as archiver from 'archiver';

// ===== CONFIGURATION =====
const TEMPLATES_BASE_PATH = path.join(__dirname, '../../../templates-pro');
const ZIPS_OUTPUT_PATH = path.join(__dirname, '../../../zips');

// S'assurer que le dossier de sortie existe
if (!fs.existsSync(ZIPS_OUTPUT_PATH)) {
  fs.mkdirSync(ZIPS_OUTPUT_PATH, { recursive: true });
}

// ===== TYPES =====
export interface ZipGenerationOptions {
  templateId: number;
  templateName: string;
  paymentId: string;
  clientEmail: string;
}

// ===== FONCTIONS =====

/**
 * Génère un fichier ZIP pour un template
 */
export async function generateTemplateZip(options: ZipGenerationOptions): Promise<string> {
  const { templateId, templateName, paymentId, clientEmail } = options;
  
  // Chemin du template source
  const templatePath = path.join(TEMPLATES_BASE_PATH, `${String(templateId).padStart(2, '0')}-${templateName.toLowerCase().replace(/ /g, '-')}`);
  
  // Vérifier que le template existe
  if (!fs.existsSync(templatePath)) {
    console.error(`Template non trouvé: ${templatePath}`);
    throw new Error(`Template non trouvé: ${templatePath}`);
  }
  
  // Nom du fichier ZIP
  const zipFileName = `${templateName.replace(/ /g, '_')}_${paymentId}.zip`;
  const zipFilePath = path.join(ZIPS_OUTPUT_PATH, zipFileName);
  
  // Créer le ZIP
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    
    output.on('close', () => {
      console.log(`ZIP généré avec succès: ${zipFileName} (${archive.pointer()} bytes)`);
      resolve(zipFilePath);
    });
    
    archive.on('error', (err) => {
      console.error('Erreur lors de la création du ZIP:', err);
      reject(err);
    });
    
    archive.on('warning', (err) => {
      if (err.code === 'ENOENT') {
        console.warn('Warning lors de la création du ZIP:', err);
      } else {
        console.warn('Warning:', err);
      }
    });
    
    archive.pipe(output);
    
    // Ajouter le dossier du template au ZIP
    archive.directory(templatePath, templateName);
    
    // Ajouter un fichier README avec les infos de licence
    const readmeContent = generateReadmeContent(templateName, paymentId, clientEmail);
    archive.append(readmeContent, { name: 'README_LICENSE.txt' });
    
    archive.finalize();
  });
}

/**
 * Génère le contenu du fichier README pour la licence
 */
function generateReadmeContent(templateName: string, paymentId: string, clientEmail: string): string {
  return `
========================================
LICENCE D'UTILISATION - ${templateName}
========================================

Template acheté sur Templates Pro
Date d'achat: ${new Date().toLocaleDateString('fr-FR')}
ID de paiement: ${paymentId}
Email du client: ${clientEmail}

========================================
DROITS D'UTILISATION
========================================

Ce template vous est accordé sous licence d'utilisation personnelle ou commerciale.

✓ UTILISATION AUTORISÉE:
- Utilisation pour un projet personnel
- Utilisation pour un projet commercial
- Modification du code selon vos besoins
- Utilisation pour un client (avec revente du service)

✗ UTILISATION INTERDITE:
- Revendre ce template tel quel
- Distribuer ce template gratuitement
- Revendre ce template sur une marketplace
- Revendiquer la propriété intellectuelle

========================================
SUPPORT
========================================

Pour toute question ou assistance technique:
Email: support@templates-pro.com

========================================
MERCI DE VOTRE ACHAT!
========================================
`;
}

/**
 * Vérifie si un ZIP existe déjà pour un paiement
 */
export function checkZipExists(paymentId: string): string | null {
  const zipsDir = ZIPS_OUTPUT_PATH;
  const files = fs.readdirSync(zipsDir);
  const matchingFile = files.find(file => file.includes(paymentId) && file.endsWith('.zip'));
  
  if (matchingFile) {
    return path.join(zipsDir, matchingFile);
  }
  
  return null;
}

/**
 * Nettoie les anciens fichiers ZIP (plus de 7 jours)
 */
export function cleanupOldZips(): void {
  const zipsDir = ZIPS_OUTPUT_PATH;
  const files = fs.readdirSync(zipsDir);
  const now = Date.now();
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 jours
  
  files.forEach(file => {
    const filePath = path.join(zipsDir, file);
    const stats = fs.statSync(filePath);
    const age = now - stats.mtimeMs;
    
    if (age > maxAge) {
      fs.unlinkSync(filePath);
      console.log(`Fichier ZIP supprimé: ${file}`);
    }
  });
}

// Nettoyer automatiquement les anciens ZIP au démarrage
cleanupOldZips();

export default {
  generateTemplateZip,
  checkZipExists,
  cleanupOldZips,
};
