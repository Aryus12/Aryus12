import axios from 'axios';
import CryptoJS from 'crypto-js';

// ===== CONFIGURATION =====
const GENIUSPAY_CONFIG = {
  apiKey: process.env.GENIUSPAY_API_KEY,
  apiSecret: process.env.GENIUSPAY_API_SECRET,
  endpoint: process.env.GENIUSPAY_ENDPOINT || 'https://api.geniuspay.com/v1',
  mode: process.env.GENIUSPAY_MODE || 'sandbox',
  webhookUrl: process.env.GENIUSPAY_WEBHOOK_URL,
  successUrl: process.env.GENIUSPAY_SUCCESS_URL,
  cancelUrl: process.env.GENIUSPAY_CANCEL_URL,
};

// ===== TYPES =====
export type PaymentMethod = 'card' | 'mobile_money' | 'bank_transfer' | 'paypal';

export type MobileMoneyProvider = 'orange' | 'mtn' | 'moov' | 'wave' | 'free';

export interface PaymentRequest {
  amount: number;
  currency?: string;
  description: string;
  metadata?: Record<string, any>;
  clientEmail?: string;
  clientName?: string;
  clientPhone?: string;
  templateId?: number;
  templateName?: string;
  customizationType?: string;
  paymentMethod?: PaymentMethod;
  mobileMoneyProvider?: MobileMoneyProvider;
}

// ===== MOBILE MONEY VALIDATION =====

/**
 * Formats de téléphone Mobile Money par pays et fournisseur
 */
const PHONE_FORMATS: Record<MobileMoneyProvider, { countries: string[]; patterns: RegExp[] }> = {
  orange: {
    countries: ['CI', 'SN', 'ML', 'BJ', 'TG', 'CM', 'CD', 'MG', 'MU'],
    patterns: [
      /^\+225[07]\d{8}$/, // Côte d'Ivoire: +225 07/05 XX XX XX XX
      /^\+221[7][78]\d{7}$/, // Sénégal: +221 77/78 XX XX XX XX
      /^\+223[6-9]\d{7}$/, // Mali: +223 6-9 XX XX XX XX
      /^\+229[019]\d{7}$/, // Bénin: +229 01/97 XX XX XX XX
      /^\+228[019]\d{7}$/, // Togo: +228 01/90 XX XX XX XX
      /^\+237[6]\d{8}$/, // Cameroun: +237 6XX XX XX XX XX
      /^\+243[019]\d{8}$/, // RDC: +243 01/99 XX XX XX XX
      /^\+261[34]\d{8}$/, // Madagascar: +261 34/3X XX XX XX XX
      /^\+230[5]\d{7}$/, // Maurice: +230 5XX XX XX XX
    ],
  },
  mtn: {
    countries: ['CI', 'GH', 'NG', 'UG', 'RW', 'CM', 'ZA', 'SD'],
    patterns: [
      /^\+225[057]\d{8}$/, // Côte d'Ivoire: +225 05/07 XX XX XX XX
      /^\+233[24]\d{8}$/, // Ghana: +233 24/2X XX XX XX XX
      /^\+234[708]\d{9}$/, // Nigeria: +234 70/8X XXX XXX XXX
      /^\+256[7]\d{8}$/, // Ouganda: +256 7XX XXX XXX
      /^\+250[7]\d{8}$/, // Rwanda: +250 7XX XXX XXX
      /^\+237[6]\d{8}$/, // Cameroun: +237 6XX XX XX XX XX
      /^\+27[6]\d{8}$/, // Afrique du Sud: +27 6X XXX XXXX
      /^\+249[1]\d{8}$/, // Soudan: +249 1XX XXX XXX
    ],
  },
  moov: {
    countries: ['CI', 'BJ', 'TG'],
    patterns: [
      /^\+225[01]\d{8}$/, // Côte d'Ivoire: +225 01 XX XX XX XX
      /^\+229[6-9]\d{7}$/, // Bénin: +229 6-9 XX XX XX XX
      /^\+228[9]\d{7}$/, // Togo: +228 9X XX XX XX XX
    ],
  },
  wave: {
    countries: ['SN', 'CI'],
    patterns: [
      /^\+221[7]\d{8}$/, // Sénégal: +221 77 XX XX XX XX
      /^\+225[07]\d{8}$/, // Côte d'Ivoire: +225 07 XX XX XX XX
    ],
  },
  free: {
    countries: ['FR'],
    patterns: [
      /^\+33[6-7]\d{8}$/, // France: +33 6/7 XX XX XX XX
    ],
  },
};

/**
 * Valide un numéro de téléphone Mobile Money
 */
export function validateMobileMoneyPhone(phone: string, provider: MobileMoneyProvider): { valid: boolean; error?: string } {
  if (!phone) {
    return { valid: false, error: 'Numéro de téléphone requis' };
  }

  const providerConfig = PHONE_FORMATS[provider];
  if (!providerConfig) {
    return { valid: false, error: 'Fournisseur Mobile Money non supporté' };
  }

  const isValid = providerConfig.patterns.some(pattern => pattern.test(phone));
  
  if (!isValid) {
    return { 
      valid: false, 
      error: `Numéro de téléphone invalide pour ${provider}. Format attendu: code pays + numéro (ex: +225 07 XX XX XX XX pour Orange CI)` 
    };
  }

  return { valid: true };
}

/**
 * Valide les données de paiement
 */
export function validatePaymentRequest(request: PaymentRequest): { valid: boolean; error?: string } {
  if (!request.amount || request.amount <= 0) {
    return { valid: false, error: 'Montant invalide' };
  }

  if (!request.clientEmail) {
    return { valid: false, error: 'Email requis' };
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(request.clientEmail)) {
    return { valid: false, error: 'Format email invalide' };
  }

  // Validation spécifique Mobile Money
  if (request.paymentMethod === 'mobile_money') {
    if (!request.mobileMoneyProvider) {
      return { valid: false, error: 'Fournisseur Mobile Money requis' };
    }

    const phoneValidation = validateMobileMoneyPhone(
      request.clientPhone || '',
      request.mobileMoneyProvider
    );

    if (!phoneValidation.valid) {
      return phoneValidation;
    }
  }

  // Validation spécifique carte bancaire
  if (request.paymentMethod === 'card' || !request.paymentMethod) {
    // La validation de carte est faite par GeniusPay côté serveur
    // On vérifie juste que le montant est acceptable
    if (request.amount > 10000) {
      return { valid: false, error: 'Montant maximum de 10 000€ par transaction' };
    }
  }

  return { valid: true };
}

export interface PaymentResponse {
  success: boolean;
  paymentId?: string;
  paymentUrl?: string;
  error?: string;
}

export interface WebhookPayload {
  paymentId: string;
  status: 'success' | 'failed' | 'pending';
  amount: number;
  currency: string;
  transactionId: string;
  signature: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

// ===== SIGNATURE =====
function generateSignature(data: any): string {
  const secret = GENIUSPAY_CONFIG.apiSecret;
  const sortedKeys = Object.keys(data).sort();
  const signatureString = sortedKeys
    .map(key => `${key}=${data[key]}`)
    .join('&') + secret;
  
  return CryptoJS.SHA256(signatureString).toString();
}

function verifySignature(payload: WebhookPayload): boolean {
  const { signature, ...data } = payload;
  const expectedSignature = generateSignature(data);
  return signature === expectedSignature;
}

// ===== API CLIENT =====
const geniuspayClient = axios.create({
  baseURL: GENIUSPAY_CONFIG.endpoint,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GENIUSPAY_CONFIG.apiKey}`,
  },
  timeout: 30000,
});

// ===== PAYMENT FUNCTIONS =====

/**
 * Crée un paiement GeniusPay
 */
export async function createPayment(request: PaymentRequest): Promise<PaymentResponse> {
  try {
    // Validation
    if (!request.amount || request.amount < 20) {
      return {
        success: false,
        error: 'Le montant minimum est de 20€',
      };
    }

    if (!GENIUSPAY_CONFIG.apiKey || !GENIUSPAY_CONFIG.apiSecret) {
      return {
        success: false,
        error: 'Configuration GeniusPay manquante',
      };
    }

    // Préparer les données de paiement
    const paymentData: any = {
      amount: request.amount,
      currency: request.currency || 'EUR',
      description: request.description,
      payment_method: request.paymentMethod || 'card',
      metadata: {
        ...request.metadata,
        clientEmail: request.clientEmail,
        clientName: request.clientName,
        clientPhone: request.clientPhone,
        templateId: request.templateId,
        customizationType: request.customizationType,
        timestamp: Date.now(),
      },
      return_url: GENIUSPAY_CONFIG.successUrl,
      cancel_url: GENIUSPAY_CONFIG.cancelUrl,
      webhook_url: GENIUSPAY_CONFIG.webhookUrl,
    };

    // Ajouter les détails spécifiques au Mobile Money
    if (request.paymentMethod === 'mobile_money' && request.mobileMoneyProvider) {
      paymentData.mobile_money_provider = request.mobileMoneyProvider;
      paymentData.phone_number = request.clientPhone;
    }

    // Générer la signature
    const signature = generateSignature(paymentData);
    paymentData['signature'] = signature;

    // Appel API GeniusPay
    const response = await geniuspayClient.post('/payments/create', paymentData);

    if (response.data.success) {
      return {
        success: true,
        paymentId: response.data.payment_id,
        paymentUrl: response.data.payment_url,
      };
    } else {
      return {
        success: false,
        error: response.data.message || 'Erreur lors de la création du paiement',
      };
    }
  } catch (error: any) {
    console.error('GeniusPay API Error:', error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || 'Erreur de connexion à GeniusPay',
    };
  }
}

/**
 * Vérifie le statut d'un paiement
 */
export async function checkPaymentStatus(paymentId: string): Promise<any> {
  try {
    const response = await geniuspayClient.get(`/payments/${paymentId}/status`);
    return response.data;
  } catch (error: any) {
    console.error('Error checking payment status:', error);
    return null;
  }
}

/**
 * Traite un webhook GeniusPay
 */
export function processWebhook(payload: WebhookPayload): { valid: boolean; data?: any } {
  // Vérifier la signature
  if (!verifySignature(payload)) {
    return { valid: false };
  }

  // Vérifier le timestamp (anti-replay)
  const currentTime = Date.now();
  const webhookTime = payload.timestamp;
  const maxTimeDiff = 5 * 60 * 1000; // 5 minutes

  if (Math.abs(currentTime - webhookTime) > maxTimeDiff) {
    return { valid: false };
  }

  return {
    valid: true,
    data: {
      paymentId: payload.paymentId,
      status: payload.status,
      amount: payload.amount,
      currency: payload.currency,
      transactionId: payload.transactionId,
      metadata: payload.metadata,
    },
  };
}

/**
 * Annule un paiement
 */
export async function cancelPayment(paymentId: string): Promise<PaymentResponse> {
  try {
    const response = await geniuspayClient.post(`/payments/${paymentId}/cancel`);
    
    if (response.data.success) {
      return {
        success: true,
        paymentId: response.data.payment_id,
      };
    } else {
      return {
        success: false,
        error: response.data.message || 'Erreur lors de l\'annulation',
      };
    }
  } catch (error: any) {
    console.error('Error cancelling payment:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Erreur lors de l\'annulation',
    };
  }
}

/**
 * Rembourse un paiement
 */
export async function refundPayment(paymentId: string, amount?: number): Promise<PaymentResponse> {
  try {
    const refundData = amount ? { amount } : {};
    const response = await geniuspayClient.post(`/payments/${paymentId}/refund`, refundData);
    
    if (response.data.success) {
      return {
        success: true,
        paymentId: response.data.payment_id,
      };
    } else {
      return {
        success: false,
        error: response.data.message || 'Erreur lors du remboursement',
      };
    }
  } catch (error: any) {
    console.error('Error refunding payment:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Erreur lors du remboursement',
    };
  }
}

// ===== EXPORT =====
export default {
  createPayment,
  checkPaymentStatus,
  processWebhook,
  cancelPayment,
  refundPayment,
  GENIUSPAY_CONFIG,
};
