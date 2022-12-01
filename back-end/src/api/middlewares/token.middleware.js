const { validateToken } = require('../helpers/jwt');

const validationToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const user = validateToken(authorization);
  req.user = { ...user };
  next();
};

module.exports = validationToken;