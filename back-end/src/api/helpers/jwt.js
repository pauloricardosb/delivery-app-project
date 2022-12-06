require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = { algorithm: 'HS256', noTimestamp: true };

const generateJWT = (values) => {
  const data = {
    name: values.name,
    email: values.email,
    role: values.role,
  };

  return jwt.sign(data, 'secret_key', jwtConfig);
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } 

  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { generateJWT, validateToken };