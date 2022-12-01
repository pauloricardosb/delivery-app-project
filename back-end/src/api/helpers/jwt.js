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

const validateToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (err) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = { generateJWT, validateToken };