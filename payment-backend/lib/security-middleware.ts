// Rate limiting simple en mémoire (en production, utiliser Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requêtes par minute

export function rateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Nettoyer les anciens enregistrements de rate limit
setInterval(() => {
  const now = Date.now();
  const keysToDelete: string[] = [];
  rateLimitMap.forEach((record, key) => {
    if (now > record.resetTime) {
      keysToDelete.push(key);
    }
  });
  keysToDelete.forEach(key => rateLimitMap.delete(key));
}, RATE_LIMIT_WINDOW);

// Validation des entrées
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?\d{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function validateAmount(amount: number): boolean {
  return typeof amount === 'number' && amount > 0 && amount <= 10000;
}

// Headers de sécurité
export function setSecurityHeaders(res: any): void {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
}

// CORS configuration
export function setCorsHeaders(res: any, origin: string = '*'): void {
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
}

// Sanitization des données utilisateur
export function sanitizePaymentData(data: any): any {
  return {
    amount: Math.min(Math.max(parseFloat(data.amount) || 0, 1), 10000),
    description: sanitizeString(data.description || ''),
    clientEmail: validateEmail(data.clientEmail) ? data.clientEmail.toLowerCase() : '',
    clientName: sanitizeString(data.clientName || ''),
    clientPhone: validatePhoneNumber(data.clientPhone) ? data.clientPhone.replace(/\s/g, '') : '',
    templateId: Math.floor(Math.abs(parseInt(data.templateId) || 1)),
    templateName: sanitizeString(data.templateName || ''),
    paymentMethod: ['card', 'mobile_money', 'bank_transfer', 'paypal'].includes(data.paymentMethod) 
      ? data.paymentMethod 
      : 'card',
    mobileMoneyProvider: ['orange', 'mtn', 'moov', 'wave', 'free'].includes(data.mobileMoneyProvider)
      ? data.mobileMoneyProvider
      : undefined,
  };
}
