const { getUser } = require('../services/user.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await getUser(email, password);

  return res.status(200).json( { token: token } );
}

module.exports = { login }; 