const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// Register User
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, agreedToTerms } = req.body;

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { firstName, lastName, email, password: hashed, agreedToTerms },
    });

    const token = jwt.sign({ userId: user.id, plan: user.plan }, SECRET);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Wrong password' });

    const token = jwt.sign({ userId: user.id, plan: user.plan }, SECRET);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
};

// ✅ Google Login
exports.googleLogin = async (req, res) => {
  const { token } = req.body;
  console.log("📩 Received Google token:", token);

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, given_name, family_name } = payload;

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          firstName: given_name || 'Google',
          lastName: family_name || 'User',
          password: '', // no password since it's Google login
          agreedToTerms: true,
          plan: 'STARTER',
        },
      });
    }

    const jwtToken = jwt.sign({ userId: user.id, plan: user.plan }, SECRET);
    res.json({ token: jwtToken, user });
  } catch (error) {
    console.error('Google login failed:', error);
    res.status(401).json({ error: 'Google authentication failed' });
  }
};
