require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret_key';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWT = (values) => {
  const data = {
    email: values.email,
    role: values.role,
  };

  return jwt.sign(data, secret, jwtConfig);
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } 

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { generateJWT, validateToken };