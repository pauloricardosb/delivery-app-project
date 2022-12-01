require('dotenv').config();
const jwt = require('jsonwebtoken')

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256'
};

const secret = process.env.JWT_SECRET || 'secret_key';

const generateToken = (values) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

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
}

module.exports = { generateToken, validateToken };