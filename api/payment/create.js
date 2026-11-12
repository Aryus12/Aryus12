module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // Payments intentionally remain closed until a reviewed provider integration,
  // persistent order storage, and the required Vercel secrets are configured.
  return res.status(503).json({
    success: false,
    error: 'Les paiements ne sont pas encore activés. Veuillez réessayer prochainement.',
  });
};
