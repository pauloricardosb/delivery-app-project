const { getUser, registerUser } = require('../services/user.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await getUser(email, password);
    res.status(200).json({ token });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body); 
    res.status(201).json(newUser);
  } 
  catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { login, register }; 