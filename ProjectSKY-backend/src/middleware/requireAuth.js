 const jwt = require('jsonwebtoken')

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized - No Token' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.user = data
    next()
  } catch {
    res.status(403).json({ error: 'Invalid or Expired Token' })
  }
}

module.exports = requireAuth

