const fs = require('fs')
const jwt = require('jsonwebtoken')

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256'
};

const generateToken = async ({ email, password }) => {
  const secret = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf8' })
  const payload = { email, password }
  const jwToken = jwt.sign(payload, secret, jwtConfig);

  return jwToken;
}

module.exports = { generateToken };